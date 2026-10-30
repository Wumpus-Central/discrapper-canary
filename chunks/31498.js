n.d(t, { Ay: () => p, Ur: () => f, mk: () => m });
var l = n(143236),
    i = n(651188),
    r = n(721768),
    s = n(612394),
    a = n(820066),
    o = n(649079),
    u = n(778747),
    c = n(253932),
    d = n(38405),
    h = n(597184);
let m = ["gameMentionInput", "timestampMentionInput"];
function f() {
    return {
        query: null,
        selectedIndex: null,
        isVisible: !1,
        didInitialQuery: !1,
        hadInitialResults: !1,
        isInitialAfterError: !1,
    };
}
class p extends l.EventEmitter {
    props;
    state;
    nextUpdateQueryChanged = !1;
    nextUpdateContextChanged = !1;
    updateTimeout;
    constructor(e) {
        (super(), (this.props = e), (this.state = f()));
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
            (this.updateResultsDebounced(l, n),
                this.state.didInitialQuery || (this.state = { ...this.state, didInitialQuery: !0 }));
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
            return !e && (t === h.e.MANUAL || t === h.e.AUTO_WHEN_FILTERED) && (this.setSelectedIndex(0), !0);
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
            null != this.state.selectedIndex && this.state.query?.type === h.DB.COMMANDS)
        ) {
            let e = this.state.query.results.commands?.[this.state.selectedIndex];
            null != e && r.e0(this.props.channel.id, e.id);
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
        (this.props.navigator.setFocus(null), this.setSelectedIndex(null));
    }
    onResultClick(e) {
        this.selectResult(e, !0);
    }
    clearQuery() {
        (this.endGameSearchSessionIfLeaving(null),
            this.setState({
                query: null,
                isVisible: !1,
                selectedIndex: null,
                hadInitialResults: !1,
                isInitialAfterError: !1,
            }));
    }
    queryResults() {
        this.updateResultsDebounced();
    }
    unmount() {
        this.endGameSearchSessionIfLeaving(null);
    }
    isVisible() {
        return this.state.isVisible;
    }
    updateResultsDebounced() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (null != this.updateTimeout && clearTimeout(this.updateTimeout),
            (this.nextUpdateQueryChanged = this.nextUpdateQueryChanged || e),
            (this.nextUpdateContextChanged = this.nextUpdateContextChanged || t),
            (this.updateTimeout = setTimeout(() => {
                let e = this.nextUpdateQueryChanged,
                    t = this.nextUpdateContextChanged;
                ((this.nextUpdateQueryChanged = !1),
                    (this.nextUpdateContextChanged = !1),
                    (this.updateTimeout = void 0),
                    this.updateResults(e, t).catch((e) => d.A.captureException(e)));
            }, 0)));
    }
    async updateResults() {
        let e,
            t,
            l = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            {
                findCommandOptionAutocompleteType: r,
                findMatchingAutocompleteType: o,
                getOptions: u,
            } = await Promise.all([n.e("435751"), n.e("423798"), n.e("753149")]).then(n.bind(n, 778572));
        if (null == this.props.editorRef.current) return;
        let d = u(this.props),
            f = this.props.editorRef.current.getSlateEditor();
        null != f &&
            (t =
                null != (e = a.VW.getSelectedParentOfType(f, m))
                    ? a.VW.getTextFromRange(f, a.VW.range(f, e[1]))
                    : null);
        let p = o({
                channel: this.props.channel,
                guild: this.props.guild,
                options: d,
                currentWord: this.props.currentWord,
                currentWordIsAtStart: this.props.currentWordIsAtStart,
                textValue: this.props.textValue,
                optionText: this.props.optionText,
                parentAutocompleteInputType: e?.[0].type,
                parentAutocompleteInputValue: t,
            }),
            g = d.commands !== h.Ze.DISABLED ? r(this.props.activeCommandOption, this.props.currentWord) : null;
        if (null == p && null != g) p = g;
        else if (null == p || (null != g && p.type !== g.type)) return void this.clearQuery();
        let { type: x, typeInfo: E, query: S } = p,
            y = i || (l && (this.state.query?.queryText !== S || this.state.query?.typeInfo !== E)),
            C = c.ML.getSetting();
        d.allowStickers = d.allowStickers ? C : d.allowStickers;
        let A = c.eK.getSetting();
        d.allowSoundmoji = d.allowSoundmoji ? A : d.allowSoundmoji;
        let { results: b, metadata: I } = E.queryResults(this.props.channel, this.props.guild, S, d, y),
            v = 0;
        for (let e of Object.values(b)) Array.isArray(e) && (v += e.length);
        l && S.length > 0 && S !== this.state.query?.queryText && (0, s.AR)(x, d);
        let N = !0 === b.isLoading,
            T = this.shouldShow(v, N, E),
            k = this.state.selectedIndex;
        (!T || N ? (k = null) : null != k && k >= v && (k = v - 1),
            T && !this.state.isVisible && (0, s.uA)(x, this.props.channel, I),
            this.endGameSearchSessionIfLeaving(x),
            this.setState({
                query: { type: x, typeInfo: E, queryText: S, results: b, resultCount: v, options: d, isLoading: N },
                isVisible: T,
                selectedIndex: k,
                hadInitialResults: !0,
                isInitialAfterError: !0 !== this.state.hadInitialResults && (e?.[0].error ?? !1),
            }));
    }
    endGameSearchSessionIfLeaving(e) {
        this.state.query?.type === h.DB.GAME && e !== h.DB.GAME && (0, o.$g)(u.K.CHAT_MENTION, i.m.DEFAULT).end();
    }
    shouldShow(e, t, n) {
        return this.props.focused && null == this.props.expressionPickerView && (e > 0 || t || n.showEmpty);
    }
    selectResult(e, t, n) {
        if (!this.state.isVisible) return !1;
        let { type: l, typeInfo: i, results: r, resultCount: a, options: o } = this.state.query;
        if (e >= a) return !1;
        let u = i.onSelect?.({
            results: r,
            index: e,
            type: t ? h.lg.SEND : h.lg.INSERT,
            options: o,
            channel: this.props.channel,
            guild: this.props.guild,
            tabOrEnter: n,
            queryText: this.state.query?.queryText,
        });
        return (null != u && (0, s.So)(l, u.type ?? null, this.props.channel, u.metadata), !0);
    }
    setState(e) {
        for (let t in e)
            if (e[t] !== this.state[t]) {
                ((this.state = { ...this.state, ...e }), this.emit("change", this.state));
                return;
            }
    }
}
