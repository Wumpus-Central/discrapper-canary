"use strict";
n.d(t, { Ay: () => _, Ur: () => d, mk: () => c });
var r = n(143236),
    i = n(721768),
    s = n(612394),
    a = n(711371),
    o = n(253932),
    l = n(374803),
    u = n(56436);
let c = ["timestampMentionInput"];
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
class _ extends r.EventEmitter {
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
            r =
                !this.state.didInitialQuery ||
                this.props.currentWord !== e.currentWord ||
                this.props.currentWordIsAtStart !== e.currentWordIsAtStart ||
                this.props.textValue !== e.textValue ||
                this.props.optionText !== e.optionText;
        if (((this.props = e), n || r))
            this.updateResultsDebounced(r, n),
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
            return !e && (t === l.e.MANUAL || t === l.e.AUTO_WHEN_FILTERED) && (this.setSelectedIndex(0), !0);
        }
        return this.selectResult(this.state.selectedIndex, e, !0);
    }
    onMoveSelection(e) {
        if (!this.state.isVisible) return !1;
        if (
            (e < 0 ? this.props.navigator.focusPreviousItem() : e > 0 && this.props.navigator.focusNextItem(),
            null != this.state.selectedIndex && this.state.query?.type === l.DB.COMMANDS)
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
        null != this.updateTimeout && clearTimeout(this.updateTimeout);
        let n = this;
        (this.nextUpdateQueryChanged = this.nextUpdateQueryChanged || e),
            (this.nextUpdateContextChanged = this.nextUpdateContextChanged || t),
            (this.updateTimeout = setTimeout(() => {
                n.updateResults(this.nextUpdateQueryChanged, this.nextUpdateContextChanged),
                    (this.nextUpdateQueryChanged = !1),
                    (this.nextUpdateContextChanged = !1),
                    (this.updateTimeout = void 0);
            }, 0));
    }
    updateResults() {
        let e,
            t,
            n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (null == this.props.editorRef.current) return;
        let i = (0, u.$E)(this.props),
            d = this.props.editorRef.current.getSlateEditor();
        null != d &&
            (t =
                null != (e = a.VW.getSelectedParentOfType(d, c))
                    ? a.VW.getTextFromRange(d, a.VW.range(d, e[1]))
                    : null);
        let _ = (0, u.Ny)({
                channel: this.props.channel,
                guild: this.props.guild,
                options: i,
                currentWord: this.props.currentWord,
                currentWordIsAtStart: this.props.currentWordIsAtStart,
                textValue: this.props.textValue,
                optionText: this.props.optionText,
                parentAutocompleteInputType: e?.[0].type,
                parentAutocompleteInputValue: t,
            }),
            f = i.commands !== l.Ze.DISABLED ? (0, u.QC)(this.props.activeCommandOption, this.props.currentWord) : null;
        if (null == _ && null != f) _ = f;
        else if (null == _ || (null != f && _.type !== f.type)) return void this.clearQuery();
        let { type: p, typeInfo: h, query: m } = _,
            E = r || (n && (this.state.query?.queryText !== m || this.state.query?.typeInfo !== h)),
            g = o.ML.getSetting();
        i.allowStickers = i.allowStickers ? g : i.allowStickers;
        let A = o.eK.getSetting();
        i.allowSoundmoji = i.allowSoundmoji ? A : i.allowSoundmoji;
        let { results: I, metadata: T } = h.queryResults(this.props.channel, this.props.guild, m, i, E),
            S = 0;
        for (let e of Object.values(I)) Array.isArray(e) && (S += e.length);
        let y = !0 === I.isLoading,
            v = this.shouldShow(S, y, h),
            N = this.state.selectedIndex;
        !v || y ? (N = null) : null != N && N >= S && (N = S - 1),
            v && !this.state.isVisible && (0, s.uA)(p, this.props.channel, T),
            this.setState({
                query: { type: p, typeInfo: h, queryText: m, results: I, resultCount: S, options: i, isLoading: y },
                isVisible: v,
                selectedIndex: N,
                hadInitialResults: !0,
                isInitialAfterError: !0 !== this.state.hadInitialResults && (e?.[0].error ?? !1),
            });
    }
    shouldShow(e, t, n) {
        return this.props.focused && null == this.props.expressionPickerView && (e > 0 || t || n.showEmpty);
    }
    selectResult(e, t, n) {
        if (!this.state.isVisible) return !1;
        let { type: r, typeInfo: i, results: a, resultCount: o, options: u } = this.state.query;
        if (e >= o) return !1;
        let c = i.onSelect?.({
            results: a,
            index: e,
            type: t ? l.lg.SEND : l.lg.INSERT,
            options: u,
            channel: this.props.channel,
            guild: this.props.guild,
            tabOrEnter: n,
            queryText: this.state.query?.queryText,
        });
        return null != c && (0, s.So)(r, c.type ?? null, this.props.channel, c.metadata), !0;
    }
    setState(e) {
        for (let t in e)
            if (e[t] !== this.state[t]) {
                (this.state = { ...this.state, ...e }), this.emit("change", this.state);
                return;
            }
    }
}
