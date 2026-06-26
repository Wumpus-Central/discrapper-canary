"use strict";
n.d(t, { Ay: () => _, Ur: () => d, mk: () => c });
var i = n(143236),
    r = n(721768),
    s = n(612394),
    a = n(820066),
    o = n(885386),
    l = n(38405),
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
class _ extends i.EventEmitter {
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
            return !e && (t === u.e.MANUAL || t === u.e.AUTO_WHEN_FILTERED) && (this.setSelectedIndex(0), !0);
        }
        return this.selectResult(this.state.selectedIndex, e, !0);
    }
    onMoveSelection(e) {
        if (!this.state.isVisible) return !1;
        if (
            (e < 0 ? this.props.navigator.focusPreviousItem() : e > 0 && this.props.navigator.focusNextItem(),
            null != this.state.selectedIndex && this.state.query?.type === u.DB.COMMANDS)
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
                    this.updateResults(e, t).catch((e) => l.A.captureException(e));
            }, 0));
    }
    async updateResults() {
        let e,
            t,
            i = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            {
                findCommandOptionAutocompleteType: l,
                findMatchingAutocompleteType: d,
                getOptions: _,
            } = await Promise.all([n.e("84253"), n.e("73220"), n.e("84806")]).then(n.bind(n, 961349));
        if (null == this.props.editorRef.current) return;
        let h = _(this.props),
            f = this.props.editorRef.current.getSlateEditor();
        null != f &&
            (t =
                null != (e = a.VW.getSelectedParentOfType(f, c))
                    ? a.VW.getTextFromRange(f, a.VW.range(f, e[1]))
                    : null);
        let p = d({
                channel: this.props.channel,
                guild: this.props.guild,
                options: h,
                currentWord: this.props.currentWord,
                currentWordIsAtStart: this.props.currentWordIsAtStart,
                textValue: this.props.textValue,
                optionText: this.props.optionText,
                parentAutocompleteInputType: e?.[0].type,
                parentAutocompleteInputValue: t,
            }),
            E = h.commands !== u.Ze.DISABLED ? l(this.props.activeCommandOption, this.props.currentWord) : null;
        if (null == p && null != E) p = E;
        else if (null == p || (null != E && p.type !== E.type)) return void this.clearQuery();
        let { type: m, typeInfo: g, query: A } = p,
            I = r || (i && (this.state.query?.queryText !== A || this.state.query?.typeInfo !== g)),
            T = o.ML.getSetting();
        h.allowStickers = h.allowStickers ? T : h.allowStickers;
        let S = o.eK.getSetting();
        h.allowSoundmoji = h.allowSoundmoji ? S : h.allowSoundmoji;
        let { results: y, metadata: C } = g.queryResults(this.props.channel, this.props.guild, A, h, I),
            N = 0;
        for (let e of Object.values(y)) Array.isArray(e) && (N += e.length);
        i && A.length > 0 && A !== this.state.query?.queryText && (0, s.AR)(m, h);
        let v = !0 === y.isLoading,
            R = this.shouldShow(N, v, g),
            O = this.state.selectedIndex;
        !R || v ? (O = null) : null != O && O >= N && (O = N - 1),
            R && !this.state.isVisible && (0, s.uA)(m, this.props.channel, C),
            this.setState({
                query: { type: m, typeInfo: g, queryText: A, results: y, resultCount: N, options: h, isLoading: v },
                isVisible: R,
                selectedIndex: O,
                hadInitialResults: !0,
                isInitialAfterError: !0 !== this.state.hadInitialResults && (e?.[0].error ?? !1),
            });
    }
    shouldShow(e, t, n) {
        return this.props.focused && null == this.props.expressionPickerView && (e > 0 || t || n.showEmpty);
    }
    selectResult(e, t, n) {
        if (!this.state.isVisible) return !1;
        let { type: i, typeInfo: r, results: a, resultCount: o, options: l } = this.state.query;
        if (e >= o) return !1;
        let c = r.onSelect?.({
            results: a,
            index: e,
            type: t ? u.lg.SEND : u.lg.INSERT,
            options: l,
            channel: this.props.channel,
            guild: this.props.guild,
            tabOrEnter: n,
            queryText: this.state.query?.queryText,
        });
        return null != c && (0, s.So)(i, c.type ?? null, this.props.channel, c.metadata), !0;
    }
    setState(e) {
        for (let t in e)
            if (e[t] !== this.state[t]) {
                (this.state = { ...this.state, ...e }), this.emit("change", this.state);
                return;
            }
    }
}
