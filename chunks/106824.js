n.d(t, {
    PA: () => m,
    ZP: () => g,
    un: () => h,
}),
    n(388685);
var r = n(836560),
    i = n(555573),
    a = n(376918),
    o = n(887490),
    s = n(627050),
    l = n(695346),
    c = n(590921),
    u = n(152089);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let h = ["gameMentionInput", "timestampMentionInput"];
function m() {
    return {
        query: null,
        selectedIndex: null,
        isVisible: !1,
        didInitialQuery: !1,
    };
}
class g extends r.EventEmitter {
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
                this.props.currentFullWord !== e.currentFullWord ||
                this.props.textValue !== e.textValue ||
                this.props.optionText !== e.optionText,
            i = this.props.isEditorIdle !== e.isEditorIdle;
        if (((this.props = e), n || r || i))
            this.updateResultsDebounced(r, n),
                this.state.didInitialQuery || (this.state = p(f({}, this.state), { didInitialQuery: !0 }));
        else if (t) {
            let e = this.state.query;
            this.setState({ isVisible: null != e && this.shouldShow(e.resultCount, e.isLoading, e.typeInfo) });
        }
    }
    setSelectedIndex(e) {
        this.setState({ selectedIndex: e });
    }
    onTabOrEnter(e) {
        var t, n;
        if (
            !this.state.isVisible ||
            ((null == (t = this.state.query) ? void 0 : t.typeInfo.selectMode) === c.W7.TAB_ONLY && e)
        )
            return !1;
        if (null == this.state.selectedIndex) {
            let t = null == (n = this.state.query) ? void 0 : n.typeInfo.focusMode;
            return !e && (t === c.QZ.MANUAL || t === c.QZ.AUTO_WHEN_FILTERED) && (this.setSelectedIndex(0), !0);
        }
        return this.selectResult(this.state.selectedIndex, e, !0);
    }
    onMoveSelection(e) {
        var t, n;
        if (!this.state.isVisible) return !1;
        if (
            (e < 0 ? this.props.navigator.focusPreviousItem() : e > 0 && this.props.navigator.focusNextItem(),
            null != this.state.selectedIndex && (null == (t = this.state.query) ? void 0 : t.type) === c.eq.COMMANDS)
        ) {
            let e = null == (n = this.state.query.results.commands) ? void 0 : n[this.state.selectedIndex];
            null != e && i.Sg(this.props.channel.id, e.id);
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
        var e, t;
        let n,
            r,
            i = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            d = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (null == this.props.editorRef.current) return;
        let f = (0, u.FW)(this.props, this.state),
            _ = this.props.editorRef.current.getSlateEditor();
        null != _ &&
            (r =
                null != (n = o.bN.getSelectedParentOfType(_, h))
                    ? o.bN.getTextFromRange(_, o.bN.range(_, n[1]))
                    : null);
        let p = (0, u.fZ)({
                channel: this.props.channel,
                guild: this.props.guild,
                options: f,
                currentWord: this.props.currentWord,
                currentWordIsAtStart: this.props.currentWordIsAtStart,
                textValue: this.props.textValue,
                optionText: this.props.optionText,
                parentAutocompleteInputType: null == n ? void 0 : n[0].type,
                parentAutocompleteInputValue: r,
            }),
            m = f.commands !== c.L8.DISABLED ? (0, u.py)(this.props.activeCommandOption, this.props.currentWord) : null;
        if (null == p && null != m) p = m;
        else if (null == p || (null != m && p.type !== m.type)) return void this.clearQuery();
        let { type: g, typeInfo: E, query: b } = p,
            y =
                d ||
                (i &&
                    ((null == (e = this.state.query) ? void 0 : e.queryText) !== b ||
                        (null == (t = this.state.query) ? void 0 : t.typeInfo) !== E)),
            O = l.fq.getSetting();
        f.allowStickers = f.allowStickers ? O : f.allowStickers;
        let v = l.eR.getSetting();
        f.allowSoundmoji = f.allowSoundmoji ? v : f.allowSoundmoji;
        let { results: I, metadata: T } = E.queryResults(this.props.channel, this.props.guild, b, f, y),
            S = 0;
        for (let e of Object.values(I)) Array.isArray(e) && (S += e.length);
        let A = !0 === I.isLoading,
            C = this.shouldShow(S, A, E),
            N = this.state.selectedIndex;
        !C || A ? (N = null) : null != N && N >= S && (N = S - 1);
        let R =
            null != this.props.guild &&
            s.N.getCurrentConfig(
                {
                    guildId: this.props.guild.id,
                    location: "mention autocomplete",
                },
                { autoTrackExposure: !0 },
            ).enabled;
        C && !this.state.isVisible && (0, a.a7)(g, this.props.channel, T, R),
            this.setState({
                query: {
                    type: g,
                    typeInfo: E,
                    queryText: b,
                    results: I,
                    resultCount: S,
                    options: f,
                    isLoading: A,
                },
                isVisible: C,
                selectedIndex: N,
            });
    }
    shouldShow(e, t, n) {
        return this.props.focused && null == this.props.expressionPickerView && (e > 0 || t || n.showEmpty);
    }
    selectResult(e, t, n) {
        var r, i, o;
        if (!this.state.isVisible) return !1;
        let { type: s, typeInfo: l, results: u, resultCount: d, options: f } = this.state.query;
        if (e >= d) return !1;
        let _ =
            null == (i = l.onSelect)
                ? void 0
                : i.call(l, {
                      results: u,
                      index: e,
                      type: t ? c.QB.SEND : c.QB.INSERT,
                      options: f,
                      channel: this.props.channel,
                      guild: this.props.guild,
                      tabOrEnter: n,
                      queryText: null == (r = this.state.query) ? void 0 : r.queryText,
                  });
        return null != _ && (0, a.Qt)(s, null != (o = _.type) ? o : null, this.props.channel, _.metadata), !0;
    }
    setState(e) {
        for (let t in e)
            if (e[t] !== this.state[t]) {
                (this.state = f({}, this.state, e)), this.emit("change", this.state);
                return;
            }
    }
    constructor(e) {
        super(),
            d(this, "props", void 0),
            d(this, "state", void 0),
            d(this, "nextUpdateQueryChanged", !1),
            d(this, "nextUpdateContextChanged", !1),
            d(this, "updateTimeout", void 0),
            (this.props = e),
            (this.state = m());
    }
}
