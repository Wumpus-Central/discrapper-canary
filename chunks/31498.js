"use strict";
n.d(t, { Ay: () => h, Ur: () => d, mk: () => c });
var l = n(143236),
    i = n(721768),
    s = n(612394),
    r = n(820066),
    a = n(885386),
    o = n(38405),
    u = n(597184);
let c = ["gameMentionInput", "timestampMentionInput"];
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
            return !e && (t === u.e.MANUAL || t === u.e.AUTO_WHEN_FILTERED) && (this.setSelectedIndex(0), !0);
        }
        return this.selectResult(this.state.selectedIndex, e, !0);
    }
    onSpace() {
        if (!this.state.isVisible) return !1;
        let e = this.state.query;
        if (null == e) return !1;
        let t = e.typeInfo.getSpaceSelectIndex?.({ results: e.results, queryText: e.queryText });
        return null != t && this.selectResult(t, !1);
    }
    onMoveSelection(e) {
        if (!this.state.isVisible) return !1;
        if (
            (e < 0 ? this.props.navigator.focusPreviousItem() : e > 0 && this.props.navigator.focusNextItem(),
            null != this.state.selectedIndex && this.state.query?.type === u.DB.COMMANDS)
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
            } = await Promise.all([n.e("435751"), n.e("423798"), n.e("114330")]).then(n.bind(n, 748001));
        if (null == this.props.editorRef.current) return;
        let m = h(this.props),
            f = this.props.editorRef.current.getSlateEditor();
        null != f &&
            (t =
                null != (e = r.VW.getSelectedParentOfType(f, c))
                    ? r.VW.getTextFromRange(f, r.VW.range(f, e[1]))
                    : null);
        let p = d({
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
            g = m.commands !== u.Ze.DISABLED ? o(this.props.activeCommandOption, this.props.currentWord) : null;
        if (null == p && null != g) p = g;
        else if (null == p || (null != g && p.type !== g.type)) return void this.clearQuery();
        let { type: x, typeInfo: A, query: E } = p,
            C = i || (l && (this.state.query?.queryText !== E || this.state.query?.typeInfo !== A)),
            I = a.ML.getSetting();
        m.allowStickers = m.allowStickers ? I : m.allowStickers;
        let y = a.eK.getSetting();
        m.allowSoundmoji = m.allowSoundmoji ? y : m.allowSoundmoji;
        let { results: S, metadata: N } = A.queryResults(this.props.channel, this.props.guild, E, m, C),
            v = 0;
        for (let e of Object.values(S)) Array.isArray(e) && (v += e.length);
        l && E.length > 0 && E !== this.state.query?.queryText && (0, s.AR)(x, m);
        let _ = !0 === S.isLoading,
            j = this.shouldShow(v, _, A),
            T = this.state.selectedIndex;
        !j || _ ? (T = null) : null != T && T >= v && (T = v - 1),
            j && !this.state.isVisible && (0, s.uA)(x, this.props.channel, N),
            this.setState({
                query: { type: x, typeInfo: A, queryText: E, results: S, resultCount: v, options: m, isLoading: _ },
                isVisible: j,
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
        let { type: l, typeInfo: i, results: r, resultCount: a, options: o } = this.state.query;
        if (e >= a) return !1;
        let c = i.onSelect?.({
            results: r,
            index: e,
            type: t ? u.lg.SEND : u.lg.INSERT,
            options: o,
            channel: this.props.channel,
            guild: this.props.guild,
            tabOrEnter: n,
            queryText: this.state.query?.queryText,
        });
        return null != c && (0, s.So)(l, c.type ?? null, this.props.channel, c.metadata), !0;
    }
    setState(e) {
        for (let t in e)
            if (e[t] !== this.state[t]) {
                (this.state = { ...this.state, ...e }), this.emit("change", this.state);
                return;
            }
    }
}
