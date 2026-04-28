"use strict";
n.d(t, { Ay: () => h, Ur: () => d, mk: () => u });
var l = n(143236),
    i = n(721768),
    s = n(612394),
    a = n(820066),
    r = n(253932),
    o = n(38405),
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
class h extends l.EventEmitter {
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
            l =
                !this.state.didInitialQuery ||
                this.props.currentWord !== e.currentWord ||
                this.props.currentWordIsAtStart !== e.currentWordIsAtStart ||
                this.props.textValue !== e.textValue ||
                this.props.optionText !== e.optionText;
        if (((this.props = e), n || l))
            this.updateResultsDebounced(l, n),
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
            null != e && i.e0(this.props.channel.id, e.id);
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
            l = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            {
                findCommandOptionAutocompleteType: o,
                findMatchingAutocompleteType: d,
                getOptions: h,
            } = await Promise.all([n.e("84253"), n.e("73220"), n.e("82097")]).then(n.bind(n, 472392));
        if (null == this.props.editorRef.current) return;
        let m = h(this.props),
            p = this.props.editorRef.current.getSlateEditor();
        null != p &&
            (t =
                null != (e = a.VW.getSelectedParentOfType(p, u))
                    ? a.VW.getTextFromRange(p, a.VW.range(p, e[1]))
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
        let { type: x, typeInfo: C, query: A } = f,
            E = i || (l && (this.state.query?.queryText !== A || this.state.query?.typeInfo !== C)),
            I = r.ML.getSetting();
        m.allowStickers = m.allowStickers ? I : m.allowStickers;
        let y = r.eK.getSetting();
        m.allowSoundmoji = m.allowSoundmoji ? y : m.allowSoundmoji;
        let { results: v, metadata: S } = C.queryResults(this.props.channel, this.props.guild, A, m, E),
            N = 0;
        for (let e of Object.values(v)) Array.isArray(e) && (N += e.length);
        let j = !0 === v.isLoading,
            _ = this.shouldShow(N, j, C),
            T = this.state.selectedIndex;
        !_ || j ? (T = null) : null != T && T >= N && (T = N - 1),
            _ && !this.state.isVisible && (0, s.uA)(x, this.props.channel, S),
            this.setState({
                query: { type: x, typeInfo: C, queryText: A, results: v, resultCount: N, options: m, isLoading: j },
                isVisible: _,
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
        let { type: l, typeInfo: i, results: a, resultCount: r, options: o } = this.state.query;
        if (e >= r) return !1;
        let u = i.onSelect?.({
            results: a,
            index: e,
            type: t ? c.lg.SEND : c.lg.INSERT,
            options: o,
            channel: this.props.channel,
            guild: this.props.guild,
            tabOrEnter: n,
            queryText: this.state.query?.queryText,
        });
        return null != u && (0, s.So)(l, u.type ?? null, this.props.channel, u.metadata), !0;
    }
    setState(e) {
        for (let t in e)
            if (e[t] !== this.state[t]) {
                (this.state = { ...this.state, ...e }), this.emit("change", this.state);
                return;
            }
    }
}
