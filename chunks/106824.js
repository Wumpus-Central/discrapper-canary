(n.d(t, {
    PA: () => h,
    ZP: () => m,
    un: () => p
}),
    n(388685));
var r = n(836560),
    i = n(555573),
    a = n(376918),
    o = n(887490),
    s = n(695346),
    l = n(590921),
    c = n(152089);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            }));
    }
    return e;
}
function f(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let p = ['gameMentionInput'];
function h() {
    return {
        query: null,
        selectedIndex: null,
        isVisible: !1,
        didInitialQuery: !1
    };
}
class m extends r.EventEmitter {
    updateProps(e) {
        let t = this.props.focused !== e.focused,
            n = this.props.channel.id !== e.channel.id || this.props.activeCommandOption !== e.activeCommandOption || this.props.activeInlineAutocompleteInput !== e.activeInlineAutocompleteInput,
            r = !this.state.didInitialQuery || this.props.currentWord !== e.currentWord || this.props.currentWordIsAtStart !== e.currentWordIsAtStart || this.props.textValue !== e.textValue || this.props.optionText !== e.optionText;
        if (((this.props = e), n || r)) (this.updateResults(r, n), this.state.didInitialQuery || (this.state = _(d({}, this.state), { didInitialQuery: !0 })));
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
            var t;
            let n = null == (t = this.state.query) ? void 0 : t.typeInfo.focusMode;
            return !e && (n === l.QZ.MANUAL || n === l.QZ.AUTO_WHEN_FILTERED) && (this.setSelectedIndex(0), !0);
        }
        return this.selectResult(this.state.selectedIndex, e, !0);
    }
    onMoveSelection(e) {
        var t, n;
        if (!this.state.isVisible) return !1;
        if ((e < 0 ? this.props.navigator.focusPreviousItem() : e > 0 && this.props.navigator.focusNextItem(), null != this.state.selectedIndex && (null == (t = this.state.query) ? void 0 : t.type) === l.eq.COMMANDS)) {
            let e = null == (n = this.state.query.results.commands) ? void 0 : n[this.state.selectedIndex];
            null != e && i.Sg(this.props.channel.id, e.id);
        }
        return !0;
    }
    onMaybeShowAutocomplete() {
        this.emit('update');
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
        this.setState({
            query: null,
            isVisible: !1,
            selectedIndex: null
        });
    }
    queryResults() {
        this.updateResults();
    }
    isVisible() {
        return this.state.isVisible;
    }
    updateResults() {
        var e, t;
        let n,
            r,
            i = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            u = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (null == this.props.editorRef.current) return;
        let d = (0, c.FW)(this.props),
            f = this.props.editorRef.current.getSlateEditor();
        null != f && (r = null != (n = o.bN.getSelectedParentOfType(f, p)) ? o.bN.getTextFromRange(f, o.bN.range(f, n[1])) : null);
        let _ = (0, c.fZ)({
                channel: this.props.channel,
                guild: this.props.guild,
                options: d,
                currentWord: this.props.currentWord,
                currentWordIsAtStart: this.props.currentWordIsAtStart,
                textValue: this.props.textValue,
                optionText: this.props.optionText,
                parentAutocompleteInputType: null == n ? void 0 : n[0].type,
                parentAutocompleteInputValue: r
            }),
            h = d.commands !== l.L8.DISABLED ? (0, c.py)(this.props.activeCommandOption, this.props.currentWord) : null;
        if (null == _ && null != h) _ = h;
        else if (null == _ || (null != h && _.type !== h.type)) return void this.clearQuery();
        let { type: m, typeInfo: g, query: E } = _,
            b = u || (i && ((null == (e = this.state.query) ? void 0 : e.queryText) !== E || (null == (t = this.state.query) ? void 0 : t.typeInfo) !== g)),
            y = s.fq.getSetting();
        d.allowStickers = d.allowStickers ? y : d.allowStickers;
        let O = s.eR.getSetting();
        d.allowSoundmoji = d.allowSoundmoji ? O : d.allowSoundmoji;
        let { results: v, metadata: I } = g.queryResults(this.props.channel, this.props.guild, E, d, b),
            T = 0;
        for (let e of Object.values(v)) Array.isArray(e) && (T += e.length);
        let S = !0 === v.isLoading,
            A = this.shouldShow(T, S, g),
            N = this.state.selectedIndex;
        (!A || S ? (N = null) : null != N && N >= T && (N = T - 1),
            A && !this.state.isVisible && (0, a.a7)(m, this.props.channel, I),
            this.setState({
                query: {
                    type: m,
                    typeInfo: g,
                    queryText: E,
                    results: v,
                    resultCount: T,
                    options: d,
                    isLoading: S
                },
                isVisible: A,
                selectedIndex: N
            }));
    }
    shouldShow(e, t, n) {
        return this.props.focused && null == this.props.expressionPickerView && (e > 0 || t || n.showEmpty);
    }
    selectResult(e, t, n) {
        var r, i, o;
        if (!this.state.isVisible) return !1;
        let { type: s, typeInfo: c, results: u, resultCount: d, options: f } = this.state.query;
        if (e >= d) return !1;
        let _ =
            null == (i = c.onSelect)
                ? void 0
                : i.call(c, {
                      results: u,
                      index: e,
                      type: t ? l.QB.SEND : l.QB.INSERT,
                      options: f,
                      channel: this.props.channel,
                      guild: this.props.guild,
                      tabOrEnter: n,
                      queryText: null == (r = this.state.query) ? void 0 : r.queryText
                  });
        return (null != _ && (0, a.Qt)(s, null != (o = _.type) ? o : null, this.props.channel, _.metadata), !0);
    }
    setState(e) {
        for (let t in e)
            if (e[t] !== this.state[t]) {
                ((this.state = d({}, this.state, e)), this.emit('change', this.state));
                return;
            }
    }
    constructor(e) {
        (super(), u(this, 'props', void 0), u(this, 'state', void 0), (this.props = e), (this.state = h()));
    }
}
