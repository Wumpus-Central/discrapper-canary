"use strict";
n.d(t, { Ay: () => _, Ur: () => u, mk: () => c });
var i = n(143236),
    r = n(721768),
    a = n(612394),
    s = n(820066),
    l = n(885386),
    o = n(38405),
    d = n(597184);
let c = ["gameMentionInput", "timestampMentionInput"];
function u() {
    return {
        query: null,
        selectedIndex: null,
        isVisible: !1,
        didInitialQuery: !1,
        hadInitialResults: !1,
        isInitialAfterError: !1,
    };
}
class _ extends i.EventEmitter {
    props;
    state;
    nextUpdateQueryChanged = !1;
    nextUpdateContextChanged = !1;
    updateTimeout;
    constructor(e) {
        super(), (this.props = e), (this.state = u());
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
            return !e && (t === d.e.MANUAL || t === d.e.AUTO_WHEN_FILTERED) && (this.setSelectedIndex(0), !0);
        }
        return this.selectResult(this.state.selectedIndex, e, !0);
    }
    onMoveSelection(e) {
        if (!this.state.isVisible) return !1;
        if (
            (e < 0 ? this.props.navigator.focusPreviousItem() : e > 0 && this.props.navigator.focusNextItem(),
            null != this.state.selectedIndex && this.state.query?.type === d.DB.COMMANDS)
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
            r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            {
                findCommandOptionAutocompleteType: o,
                findMatchingAutocompleteType: u,
                getOptions: _,
            } = await Promise.all([n.e("84253"), n.e("73220"), n.e("84806")]).then(n.bind(n, 961349));
        if (null == this.props.editorRef.current) return;
        let E = _(this.props),
            A = this.props.editorRef.current.getSlateEditor();
        null != A &&
            (t =
                null != (e = s.VW.getSelectedParentOfType(A, c))
                    ? s.VW.getTextFromRange(A, s.VW.range(A, e[1]))
                    : null);
        let h = u({
                channel: this.props.channel,
                guild: this.props.guild,
                options: E,
                currentWord: this.props.currentWord,
                currentWordIsAtStart: this.props.currentWordIsAtStart,
                textValue: this.props.textValue,
                optionText: this.props.optionText,
                parentAutocompleteInputType: e?.[0].type,
                parentAutocompleteInputValue: t,
            }),
            I = E.commands !== d.Ze.DISABLED ? o(this.props.activeCommandOption, this.props.currentWord) : null;
        if (null == h && null != I) h = I;
        else if (null == h || (null != I && h.type !== I.type)) return void this.clearQuery();
        let { type: f, typeInfo: p, query: T } = h,
            m = r || (i && (this.state.query?.queryText !== T || this.state.query?.typeInfo !== p)),
            g = l.ML.getSetting();
        E.allowStickers = E.allowStickers ? g : E.allowStickers;
        let S = l.eK.getSetting();
        E.allowSoundmoji = E.allowSoundmoji ? S : E.allowSoundmoji;
        let { results: N, metadata: C } = p.queryResults(this.props.channel, this.props.guild, T, E, m),
            R = 0;
        for (let e of Object.values(N)) Array.isArray(e) && (R += e.length);
        i && T.length > 0 && T !== this.state.query?.queryText && (0, a.AR)(f, E);
        let O = !0 === N.isLoading,
            L = this.shouldShow(R, O, p),
            D = this.state.selectedIndex;
        !L || O ? (D = null) : null != D && D >= R && (D = R - 1),
            L && !this.state.isVisible && (0, a.uA)(f, this.props.channel, C),
            this.setState({
                query: { type: f, typeInfo: p, queryText: T, results: N, resultCount: R, options: E, isLoading: O },
                isVisible: L,
                selectedIndex: D,
                hadInitialResults: !0,
                isInitialAfterError: !0 !== this.state.hadInitialResults && (e?.[0].error ?? !1),
            });
    }
    shouldShow(e, t, n) {
        return this.props.focused && null == this.props.expressionPickerView && (e > 0 || t || n.showEmpty);
    }
    selectResult(e, t, n) {
        if (!this.state.isVisible) return !1;
        let { type: i, typeInfo: r, results: s, resultCount: l, options: o } = this.state.query;
        if (e >= l) return !1;
        let c = r.onSelect?.({
            results: s,
            index: e,
            type: t ? d.lg.SEND : d.lg.INSERT,
            options: o,
            channel: this.props.channel,
            guild: this.props.guild,
            tabOrEnter: n,
            queryText: this.state.query?.queryText,
        });
        return null != c && (0, a.So)(i, c.type ?? null, this.props.channel, c.metadata), !0;
    }
    setState(e) {
        for (let t in e)
            if (e[t] !== this.state[t]) {
                (this.state = { ...this.state, ...e }), this.emit("change", this.state);
                return;
            }
    }
}
