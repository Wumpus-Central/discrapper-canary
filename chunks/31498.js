"use strict";
n.d(t, { Ay: () => m, Ur: () => d, mk: () => c });
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
class m extends l.EventEmitter {
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
                getOptions: m,
            } = await Promise.all([n.e("84253"), n.e("73220"), n.e("93993"), n.e("98866")]).then(n.bind(n, 157417));
        if (null == this.props.editorRef.current) return;
        let h = m(this.props),
            p = this.props.editorRef.current.getSlateEditor();
        null != p &&
            (t =
                null != (e = r.VW.getSelectedParentOfType(p, c))
                    ? r.VW.getTextFromRange(p, r.VW.range(p, e[1]))
                    : null);
        let f = d({
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
            g = h.commands !== u.Ze.DISABLED ? o(this.props.activeCommandOption, this.props.currentWord) : null;
        if (null == f && null != g) f = g;
        else if (null == f || (null != g && f.type !== g.type)) return void this.clearQuery();
        let { type: E, typeInfo: A, query: C } = f,
            x = i || (l && (this.state.query?.queryText !== C || this.state.query?.typeInfo !== A)),
            I = a.ML.getSetting();
        h.allowStickers = h.allowStickers ? I : h.allowStickers;
        let _ = a.eK.getSetting();
        h.allowSoundmoji = h.allowSoundmoji ? _ : h.allowSoundmoji;
        let { results: S, metadata: y } = A.queryResults(this.props.channel, this.props.guild, C, h, x),
            v = 0;
        for (let e of Object.values(S)) Array.isArray(e) && (v += e.length);
        let T = !0 === S.isLoading,
            N = this.shouldShow(v, T, A),
            j = this.state.selectedIndex;
        !N || T ? (j = null) : null != j && j >= v && (j = v - 1),
            N && !this.state.isVisible && (0, s.uA)(E, this.props.channel, y),
            this.setState({
                query: { type: E, typeInfo: A, queryText: C, results: S, resultCount: v, options: h, isLoading: T },
                isVisible: N,
                selectedIndex: j,
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
