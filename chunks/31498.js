"use strict";
n.d(t, { Ay: () => h, Ur: () => d, mk: () => u });
var i = n(143236),
    l = n(721768),
    s = n(612394),
    r = n(711371),
    a = n(253932),
    o = n(728458),
    c = n(374803);
let u = ["timestampMentionInput"];
function d() {
    return {
        query: null,
        selectedIndex: null,
        isVisible: !1,
        didInitialQuery: !1,
        hadInitialResults: !1,
        isInitialAfterError: !1,
    };
}
class h extends i.EventEmitter {
    props;
    state;
    nextUpdateQueryChanged = !1;
    nextUpdateContextChanged = !1;
    updateTimeout;
    constructor(e) {
        super(), (this.props = e), (this.state = d());
    }
    updateProps(e) {
        let t = this.props.focused !== e.focused,
            n =
                this.props.channel.id !== e.channel.id ||
                this.props.activeCommandOption !== e.activeCommandOption ||
                this.props.activeInlineAutocompleteInput !== e.activeInlineAutocompleteInput,
            i =
                !this.state.didInitialQuery ||
                this.props.currentWord !== e.currentWord ||
                this.props.currentWordIsAtStart !== e.currentWordIsAtStart ||
                this.props.textValue !== e.textValue ||
                this.props.optionText !== e.optionText;
        if (((this.props = e), n || i))
            this.updateResultsDebounced(i, n),
                this.state.didInitialQuery || (this.state = { ...this.state, didInitialQuery: !0 });
        else if (t) {
            let e = this.state.query;
            this.setState({ isVisible: null != e && this.shouldShow(e.resultCount, e.isLoading, e.typeInfo) });
        }
    }
    setSelectedIndex(e) {
        this.setState({ selectedIndex: e });
    }
    onTabOrEnter(e) {
        if (!this.state.isVisible) return !1;
        if (null == this.state.selectedIndex) {
            let t = this.state.query?.typeInfo.focusMode;
            return !e && (t === c.e.MANUAL || t === c.e.AUTO_WHEN_FILTERED) && (this.setSelectedIndex(0), !0);
        }
        return this.selectResult(this.state.selectedIndex, e, !0);
    }
    onMoveSelection(e) {
        if (!this.state.isVisible) return !1;
        if (
            (e < 0 ? this.props.navigator.focusPreviousItem() : e > 0 && this.props.navigator.focusNextItem(),
            null != this.state.selectedIndex && this.state.query?.type === c.DB.COMMANDS)
        ) {
            let e = this.state.query.results.commands?.[this.state.selectedIndex];
            null != e && l.e0(this.props.channel.id, e.id);
        }
        return !0;
    }
    onMaybeShowAutocomplete() {
        this.emit("update");
    }
    onHideAutocomplete() {
        null != this.state.query && this.setState({ isVisible: !1 });
    }
    onResultHover(e) {
        this.props.navigator.setFocus(null), this.setSelectedIndex(null);
    }
    onResultClick(e) {
        this.selectResult(e, !0);
    }
    clearQuery() {
        this.setState({
            query: null,
            isVisible: !1,
            selectedIndex: null,
            hadInitialResults: !1,
            isInitialAfterError: !1,
        });
    }
    queryResults() {
        this.updateResultsDebounced();
    }
    isVisible() {
        return this.state.isVisible;
    }
    updateResultsDebounced() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        null != this.updateTimeout && clearTimeout(this.updateTimeout),
            (this.nextUpdateQueryChanged = this.nextUpdateQueryChanged || e),
            (this.nextUpdateContextChanged = this.nextUpdateContextChanged || t),
            (this.updateTimeout = setTimeout(() => {
                let e = this.nextUpdateQueryChanged,
                    t = this.nextUpdateContextChanged;
                (this.nextUpdateQueryChanged = !1),
                    (this.nextUpdateContextChanged = !1),
                    (this.updateTimeout = void 0),
                    this.updateResults(e, t).catch((e) => o.A.captureException(e));
            }, 0));
    }
    async updateResults() {
        let e,
            t,
            i = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            {
                findCommandOptionAutocompleteType: o,
                findMatchingAutocompleteType: d,
                getOptions: h,
            } = await Promise.all([n.e("61539"), n.e("30613")]).then(n.bind(n, 56436));
        if (null == this.props.editorRef.current) return;
        let m = h(this.props),
            p = this.props.editorRef.current.getSlateEditor();
        null != p &&
            (t =
                null != (e = r.VW.getSelectedParentOfType(p, u))
                    ? r.VW.getTextFromRange(p, r.VW.range(p, e[1]))
                    : null);
        let f = d({
                channel: this.props.channel,
                guild: this.props.guild,
                options: m,
                currentWord: this.props.currentWord,
                currentWordIsAtStart: this.props.currentWordIsAtStart,
                textValue: this.props.textValue,
                optionText: this.props.optionText,
                parentAutocompleteInputType: e?.[0].type,
                parentAutocompleteInputValue: t,
            }),
            g = m.commands !== c.Ze.DISABLED ? o(this.props.activeCommandOption, this.props.currentWord) : null;
        if (null == f && null != g) f = g;
        else if (null == f || (null != g && f.type !== g.type)) return void this.clearQuery();
        let { type: _, typeInfo: x, query: A } = f,
            C = l || (i && (this.state.query?.queryText !== A || this.state.query?.typeInfo !== x)),
            E = a.ML.getSetting();
        m.allowStickers = m.allowStickers ? E : m.allowStickers;
        let I = a.eK.getSetting();
        m.allowSoundmoji = m.allowSoundmoji ? I : m.allowSoundmoji;
        let { results: v, metadata: y } = x.queryResults(this.props.channel, this.props.guild, A, m, C),
            S = 0;
        for (let e of Object.values(v)) Array.isArray(e) && (S += e.length);
        let b = !0 === v.isLoading,
            N = this.shouldShow(S, b, x),
            T = this.state.selectedIndex;
        !N || b ? (T = null) : null != T && T >= S && (T = S - 1),
            N && !this.state.isVisible && (0, s.uA)(_, this.props.channel, y),
            this.setState({
                query: { type: _, typeInfo: x, queryText: A, results: v, resultCount: S, options: m, isLoading: b },
                isVisible: N,
                selectedIndex: T,
                hadInitialResults: !0,
                isInitialAfterError: !0 !== this.state.hadInitialResults && (e?.[0].error ?? !1),
            });
    }
    shouldShow(e, t, n) {
        return this.props.focused && null == this.props.expressionPickerView && (e > 0 || t || n.showEmpty);
    }
    selectResult(e, t, n) {
        if (!this.state.isVisible) return !1;
        let { type: i, typeInfo: l, results: r, resultCount: a, options: o } = this.state.query;
        if (e >= a) return !1;
        let u = l.onSelect?.({
            results: r,
            index: e,
            type: t ? c.lg.SEND : c.lg.INSERT,
            options: o,
            channel: this.props.channel,
            guild: this.props.guild,
            tabOrEnter: n,
            queryText: this.state.query?.queryText,
        });
        return null != u && (0, s.So)(i, u.type ?? null, this.props.channel, u.metadata), !0;
    }
    setState(e) {
        for (let t in e)
            if (e[t] !== this.state[t]) {
                (this.state = { ...this.state, ...e }), this.emit("change", this.state);
                return;
            }
    }
}
