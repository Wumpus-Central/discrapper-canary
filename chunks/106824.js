n.d(t, {
    P: () => _,
    Z: () => p
}),
    n(47120);
var r = n(836560),
    i = n(555573),
    o = n(376918),
    a = n(695346),
    s = n(590921),
    l = n(152089);
function c(e, t, n) {
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
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
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
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function _() {
    return {
        query: null,
        selectedIndex: null,
        isVisible: !1,
        didInitialQuery: !1
    };
}
class p extends r.EventEmitter {
    updateProps(e) {
        let t = this.props.focused !== e.focused,
            n = this.props.channel.id !== e.channel.id || this.props.activeCommandOption !== e.activeCommandOption,
            r = !this.state.didInitialQuery || this.props.currentWord !== e.currentWord || this.props.currentWordIsAtStart !== e.currentWordIsAtStart || this.props.textValue !== e.textValue || this.props.optionText !== e.optionText;
        if (((this.props = e), n || r)) this.updateResults(r, n), this.state.didInitialQuery || (this.state = f(u({}, this.state), { didInitialQuery: !0 }));
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
            return !e && (n === s.QZ.MANUAL || n === s.QZ.AUTO_WHEN_FILTERED) && (this.setSelectedIndex(0), !0);
        }
        return this.selectResult(this.state.selectedIndex, e, !0);
    }
    onMoveSelection(e) {
        var t, n;
        if (!this.state.isVisible) return !1;
        if ((e < 0 ? this.props.navigator.focusPreviousItem() : e > 0 && this.props.navigator.focusNextItem(), null != this.state.selectedIndex && (null == (t = this.state.query) ? void 0 : t.type) === s.eq.COMMANDS)) {
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
        this.props.navigator.setFocus(null), this.setSelectedIndex(null);
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
        let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (null == this.props.editorRef.current) return;
        let i = (0, l.FW)(this.props),
            c = (0, l.fZ)({
                channel: this.props.channel,
                guild: this.props.guild,
                options: i,
                currentWord: this.props.currentWord,
                currentWordIsAtStart: this.props.currentWordIsAtStart,
                textValue: this.props.textValue,
                optionText: this.props.optionText
            }),
            u = i.commands !== s.L8.DISABLED ? (0, l.py)(this.props.activeCommandOption, this.props.currentWord) : null;
        if (null == c && null != u) c = u;
        else if (null == c || (null != u && c.type !== u.type)) return void this.clearQuery();
        let { type: d, typeInfo: f, query: _ } = c,
            p = r || (n && ((null == (e = this.state.query) ? void 0 : e.queryText) !== _ || (null == (t = this.state.query) ? void 0 : t.typeInfo) !== f)),
            h = a.fq.getSetting();
        i.allowStickers = i.allowStickers ? h : i.allowStickers;
        let m = a.eR.getSetting();
        i.allowSoundmoji = i.allowSoundmoji ? m : i.allowSoundmoji;
        let { results: g, metadata: E } = f.queryResults(this.props.channel, this.props.guild, _, i, p),
            b = 0;
        for (let e of Object.values(g)) Array.isArray(e) && (b += e.length);
        let y = !0 === g.isLoading,
            v = this.shouldShow(b, y, f),
            O = this.state.selectedIndex;
        !v || y ? (O = null) : null != O && O >= b && (O = b - 1),
            v && !this.state.isVisible && (0, o.a7)(d, this.props.channel, E),
            this.setState({
                query: {
                    type: d,
                    typeInfo: f,
                    queryText: _,
                    results: g,
                    resultCount: b,
                    options: i,
                    isLoading: y
                },
                isVisible: v,
                selectedIndex: O
            });
    }
    shouldShow(e, t, n) {
        return this.props.focused && null == this.props.expressionPickerView && (e > 0 || t || n.showEmpty);
    }
    selectResult(e, t, n) {
        var r, i, a;
        if (!this.state.isVisible) return !1;
        let { type: l, typeInfo: c, results: u, resultCount: d, options: f } = this.state.query;
        if (e >= d) return !1;
        let _ =
            null == (i = c.onSelect)
                ? void 0
                : i.call(c, {
                      results: u,
                      index: e,
                      type: t ? s.QB.SEND : s.QB.INSERT,
                      options: f,
                      channel: this.props.channel,
                      guild: this.props.guild,
                      tabOrEnter: n,
                      queryText: null == (r = this.state.query) ? void 0 : r.queryText
                  });
        return null != _ && (0, o.Qt)(l, null != (a = _.type) ? a : null, this.props.channel, _.metadata), !0;
    }
    setState(e) {
        for (let t in e)
            if (e[t] !== this.state[t]) {
                (this.state = u({}, this.state, e)), this.emit('change', this.state);
                return;
            }
    }
    constructor(e) {
        super(), c(this, 'props', void 0), c(this, 'state', void 0), (this.props = e), (this.state = _());
    }
}
