n.d(t, {
    Ay: () => g,
    Ur: () => m,
    mk: () => h,
}),
    n(896048);
var r = n(143236),
    i = n(721768),
    a = n(612394),
    s = n(711371),
    o = n(352505),
    l = n(253932),
    c = n(374803),
    u = n(56436);

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

function p(e, t) {
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

function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
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
        hadInitialResults: !1,
        isInitialAfterError: !1,
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
                this.state.didInitialQuery ||
                    (this.state = _(f({}, this.state), {
                        didInitialQuery: !0,
                    }));
        else if (t) {
            let e = this.state.query;
            this.setState({
                isVisible: null != e && this.shouldShow(e.resultCount, e.isLoading, e.typeInfo),
            });
        }
    }
    setSelectedIndex(e) {
        this.setState({
            selectedIndex: e,
        });
    }
    onTabOrEnter(e) {
        var t, n;
        if (
            !this.state.isVisible ||
            ((null == (t = this.state.query) ? void 0 : t.typeInfo.selectMode) === c.SB.TAB_ONLY && e)
        )
            return !1;
        if (null == this.state.selectedIndex) {
            let t = null == (n = this.state.query) ? void 0 : n.typeInfo.focusMode;
            return !e && (t === c.e.MANUAL || t === c.e.AUTO_WHEN_FILTERED) && (this.setSelectedIndex(0), !0);
        }
        return this.selectResult(this.state.selectedIndex, e, !0);
    }
    onMoveSelection(e) {
        var t, n;
        if (!this.state.isVisible) return !1;
        if (
            (e < 0 ? this.props.navigator.focusPreviousItem() : e > 0 && this.props.navigator.focusNextItem(),
            null != this.state.selectedIndex && (null == (t = this.state.query) ? void 0 : t.type) === c.DB.COMMANDS)
        ) {
            let e = null == (n = this.state.query.results.commands) ? void 0 : n[this.state.selectedIndex];
            null != e && i.e0(this.props.channel.id, e.id);
        }
        return !0;
    }
    onMaybeShowAutocomplete() {
        this.emit("update");
    }
    onHideAutocomplete() {
        null != this.state.query &&
            this.setState({
                isVisible: !1,
            });
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
        var e, t, n;
        let r,
            i,
            d = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            f = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (null == this.props.editorRef.current) return;
        let p = (0, u.$E)(this.props, this.state),
            _ = this.props.editorRef.current.getSlateEditor();
        null != _ &&
            (i =
                null != (r = s.VW.getSelectedParentOfType(_, h))
                    ? s.VW.getTextFromRange(_, s.VW.range(_, r[1]))
                    : null);
        let m = (0, u.Ny)({
                channel: this.props.channel,
                guild: this.props.guild,
                options: p,
                currentWord: this.props.currentWord,
                currentWordIsAtStart: this.props.currentWordIsAtStart,
                textValue: this.props.textValue,
                optionText: this.props.optionText,
                parentAutocompleteInputType: null == r ? void 0 : r[0].type,
                parentAutocompleteInputValue: i,
            }),
            g = p.commands !== c.Ze.DISABLED ? (0, u.QC)(this.props.activeCommandOption, this.props.currentWord) : null;
        if (null == m && null != g) m = g;
        else if (null == m || (null != g && m.type !== g.type)) return void this.clearQuery();
        let { type: E, typeInfo: b, query: y } = m,
            O =
                f ||
                (d &&
                    ((null == (t = this.state.query) ? void 0 : t.queryText) !== y ||
                        (null == (n = this.state.query) ? void 0 : n.typeInfo) !== b)),
            A = l.ML.getSetting();
        p.allowStickers = p.allowStickers ? A : p.allowStickers;
        let v = l.eK.getSetting();
        p.allowSoundmoji = p.allowSoundmoji ? v : p.allowSoundmoji;
        let { results: S, metadata: I } = b.queryResults(this.props.channel, this.props.guild, y, p, O),
            T = 0;
        for (let e of Object.values(S)) Array.isArray(e) && (T += e.length);
        let C = !0 === S.isLoading,
            N = this.shouldShow(T, C, b),
            R = this.state.selectedIndex;
        !N || C ? (R = null) : null != R && R >= T && (R = T - 1);
        let w =
            null != this.props.guild &&
            o.M.getCurrentConfig(
                {
                    guildId: this.props.guild.id,
                    location: "mention autocomplete",
                },
                {
                    autoTrackExposure: !0,
                },
            ).enabled;
        N && !this.state.isVisible && (0, a.uA)(E, this.props.channel, I, w),
            this.setState({
                query: {
                    type: E,
                    typeInfo: b,
                    queryText: y,
                    results: S,
                    resultCount: T,
                    options: p,
                    isLoading: C,
                },
                isVisible: N,
                selectedIndex: R,
                hadInitialResults: !0,
                isInitialAfterError:
                    !0 !== this.state.hadInitialResults && null != (e = null == r ? void 0 : r[0].error) && e,
            });
    }
    shouldShow(e, t, n) {
        return this.props.focused && null == this.props.expressionPickerView && (e > 0 || t || n.showEmpty);
    }
    selectResult(e, t, n) {
        var r, i, s;
        if (!this.state.isVisible) return !1;
        let { type: o, typeInfo: l, results: u, resultCount: d, options: f } = this.state.query;
        if (e >= d) return !1;
        let p =
            null == (i = l.onSelect)
                ? void 0
                : i.call(l, {
                      results: u,
                      index: e,
                      type: t ? c.lg.SEND : c.lg.INSERT,
                      options: f,
                      channel: this.props.channel,
                      guild: this.props.guild,
                      tabOrEnter: n,
                      queryText: null == (r = this.state.query) ? void 0 : r.queryText,
                  });
        return null != p && (0, a.So)(o, null != (s = p.type) ? s : null, this.props.channel, p.metadata), !0;
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
