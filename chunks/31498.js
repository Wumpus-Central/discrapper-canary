"use strict";
n.d(t, { Ay: () => f, Ur: () => _, mk: () => d });
var r = n(143236),
    i = n(721768),
    s = n(612394),
    a = n(711371),
    o = n(352505),
    l = n(253932),
    u = n(374803),
    c = n(56436);
let d = ["gameMentionInput", "timestampMentionInput"];
function _() {
    return {
        query: null,
        selectedIndex: null,
        isVisible: !1,
        didInitialQuery: !1,
        hadInitialResults: !1,
        isInitialAfterError: !1,
    };
}
class f extends r.EventEmitter {
    props;
    state;
    nextUpdateQueryChanged = !1;
    nextUpdateContextChanged = !1;
    updateTimeout;
    constructor(e) {
        super(), (this.props = e), (this.state = _());
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
        let i = (0, c.$E)(this.props),
            _ = this.props.editorRef.current.getSlateEditor();
        null != _ &&
            (t =
                null != (e = a.VW.getSelectedParentOfType(_, d))
                    ? a.VW.getTextFromRange(_, a.VW.range(_, e[1]))
                    : null);
        let f = (0, c.Ny)({
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
            p = i.commands !== u.Ze.DISABLED ? (0, c.QC)(this.props.activeCommandOption, this.props.currentWord) : null;
        if (null == f && null != p) f = p;
        else if (null == f || (null != p && f.type !== p.type)) return void this.clearQuery();
        let { type: h, typeInfo: m, query: E } = f,
            g = r || (n && (this.state.query?.queryText !== E || this.state.query?.typeInfo !== m)),
            A = l.ML.getSetting();
        i.allowStickers = i.allowStickers ? A : i.allowStickers;
        let I = l.eK.getSetting();
        i.allowSoundmoji = i.allowSoundmoji ? I : i.allowSoundmoji;
        let { results: T, metadata: S } = m.queryResults(this.props.channel, this.props.guild, E, i, g),
            y = 0;
        for (let e of Object.values(T)) Array.isArray(e) && (y += e.length);
        let v = !0 === T.isLoading,
            N = this.shouldShow(y, v, m),
            C = this.state.selectedIndex;
        !N || v ? (C = null) : null != C && C >= y && (C = y - 1);
        let R =
            null != this.props.guild &&
            o.M.getCurrentConfig(
                { guildId: this.props.guild.id, location: "mention autocomplete" },
                { autoTrackExposure: !0 },
            ).enabled;
        N && !this.state.isVisible && (0, s.uA)(h, this.props.channel, S, R),
            this.setState({
                query: { type: h, typeInfo: m, queryText: E, results: T, resultCount: y, options: i, isLoading: v },
                isVisible: N,
                selectedIndex: C,
                hadInitialResults: !0,
                isInitialAfterError: !0 !== this.state.hadInitialResults && (e?.[0].error ?? !1),
            });
    }
    shouldShow(e, t, n) {
        return this.props.focused && null == this.props.expressionPickerView && (e > 0 || t || n.showEmpty);
    }
    selectResult(e, t, n) {
        if (!this.state.isVisible) return !1;
        let { type: r, typeInfo: i, results: a, resultCount: o, options: l } = this.state.query;
        if (e >= o) return !1;
        let c = i.onSelect?.({
            results: a,
            index: e,
            type: t ? u.lg.SEND : u.lg.INSERT,
            options: l,
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
