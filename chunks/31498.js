"use strict";
n.d(t, { Ay: () => _, Ur: () => d, mk: () => c });
var r = n(143236),
    i = n(721768),
    s = n(612394),
    a = n(711371),
    o = n(253932),
    l = n(728458),
    u = n(374803);
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
                    this.updateResults(e, t).catch((e) => l.A.captureException(e));
            }, 0));
    }
    async updateResults() {
        let e,
            t,
            r = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            {
                findCommandOptionAutocompleteType: l,
                findMatchingAutocompleteType: d,
                getOptions: _,
            } = await Promise.all([n.e("61539"), n.e("30613")]).then(n.bind(n, 56436));
        if (null == this.props.editorRef.current) return;
        let f = _(this.props),
            p = this.props.editorRef.current.getSlateEditor();
        null != p &&
            (t =
                null != (e = a.VW.getSelectedParentOfType(p, c))
                    ? a.VW.getTextFromRange(p, a.VW.range(p, e[1]))
                    : null);
        let h = d({
                channel: this.props.channel,
                guild: this.props.guild,
                options: f,
                currentWord: this.props.currentWord,
                currentWordIsAtStart: this.props.currentWordIsAtStart,
                textValue: this.props.textValue,
                optionText: this.props.optionText,
                parentAutocompleteInputType: e?.[0].type,
                parentAutocompleteInputValue: t,
            }),
            E = f.commands !== u.Ze.DISABLED ? l(this.props.activeCommandOption, this.props.currentWord) : null;
        if (null == h && null != E) h = E;
        else if (null == h || (null != E && h.type !== E.type)) return void this.clearQuery();
        let { type: m, typeInfo: g, query: A } = h,
            I = i || (r && (this.state.query?.queryText !== A || this.state.query?.typeInfo !== g)),
            T = o.ML.getSetting();
        f.allowStickers = f.allowStickers ? T : f.allowStickers;
        let S = o.eK.getSetting();
        f.allowSoundmoji = f.allowSoundmoji ? S : f.allowSoundmoji;
        let { results: y, metadata: N } = g.queryResults(this.props.channel, this.props.guild, A, f, I),
            v = 0;
        for (let e of Object.values(y)) Array.isArray(e) && (v += e.length);
        let C = !0 === y.isLoading,
            O = this.shouldShow(v, C, g),
            R = this.state.selectedIndex;
        !O || C ? (R = null) : null != R && R >= v && (R = v - 1),
            O && !this.state.isVisible && (0, s.uA)(m, this.props.channel, N),
            this.setState({
                query: { type: m, typeInfo: g, queryText: A, results: y, resultCount: v, options: f, isLoading: C },
                isVisible: O,
                selectedIndex: R,
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
