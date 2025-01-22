r.d(n, {
    P: function () {
        return f;
    },
    Z: function () {
        return p;
    }
});
var i = r(47120);
var a = r(836560);
var o = r(555573),
    s = r(376918),
    l = r(695346),
    u = r(590921),
    c = r(152089);
function d(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
function f() {
    return {
        query: null,
        selectedIndex: null,
        isVisible: !1,
        didInitialQuery: !1
    };
}
class p extends a.EventEmitter {
    updateProps(e) {
        let n = this.props.focused !== e.focused,
            r = this.props.channel.id !== e.channel.id || this.props.activeCommandOption !== e.activeCommandOption,
            i = !this.state.didInitialQuery || this.props.currentWord !== e.currentWord || this.props.currentWordIsAtStart !== e.currentWordIsAtStart || this.props.textValue !== e.textValue || this.props.optionText !== e.optionText;
        if (((this.props = e), r || i))
            this.updateResults(i, r),
                !this.state.didInitialQuery &&
                    (this.state = {
                        ...this.state,
                        didInitialQuery: !0
                    });
        else if (n) {
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
            var n;
            let r = null === (n = this.state.query) || void 0 === n ? void 0 : n.typeInfo.focusMode;
            return !e && (r === u.QZ.MANUAL || r === u.QZ.AUTO_WHEN_FILTERED) && (this.setSelectedIndex(0), !0);
        }
        return this.selectResult(this.state.selectedIndex, e, !0);
    }
    onMoveSelection(e) {
        var n, r;
        if (!this.state.isVisible) return !1;
        if ((e < 0 ? this.props.navigator.focusPreviousItem() : e > 0 && this.props.navigator.focusNextItem(), null != this.state.selectedIndex && (null === (n = this.state.query) || void 0 === n ? void 0 : n.type) === u.eq.COMMANDS)) {
            let e = null === (r = this.state.query.results.commands) || void 0 === r ? void 0 : r[this.state.selectedIndex];
            null != e && o.Sg(this.props.channel.id, e.id);
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
        var e, n;
        let r = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (null == this.props.editorRef.current) return;
        let a = (0, c.FW)(this.props),
            o = (0, c.fZ)({
                channel: this.props.channel,
                guild: this.props.guild,
                options: a,
                currentWord: this.props.currentWord,
                currentWordIsAtStart: this.props.currentWordIsAtStart,
                textValue: this.props.textValue,
                optionText: this.props.optionText
            }),
            d = a.commands !== u.L8.DISABLED ? (0, c.py)(this.props.activeCommandOption, this.props.currentWord) : null;
        if (null == o && null != d) o = d;
        else if (null == o || (null != d && o.type !== d.type)) {
            this.clearQuery();
            return;
        }
        let { type: f, typeInfo: p, query: h } = o,
            _ = i || (r && ((null === (e = this.state.query) || void 0 === e ? void 0 : e.queryText) !== h || (null === (n = this.state.query) || void 0 === n ? void 0 : n.typeInfo) !== p)),
            m = l.fq.getSetting();
        a.allowStickers = a.allowStickers ? m : a.allowStickers;
        let g = l.eR.getSetting();
        a.allowSoundmoji = a.allowSoundmoji ? g : a.allowSoundmoji;
        let { results: E, metadata: v } = p.queryResults(this.props.channel, this.props.guild, h, a, _),
            y = 0;
        for (let e of Object.values(E)) Array.isArray(e) && (y += e.length);
        let b = !0 === E.isLoading,
            I = this.shouldShow(y, b, p),
            T = this.state.selectedIndex;
        !I || b ? (T = null) : null != T && T >= y && (T = y - 1),
            I && !this.state.isVisible && (0, s.a7)(f, this.props.channel, v),
            this.setState({
                query: {
                    type: f,
                    typeInfo: p,
                    queryText: h,
                    results: E,
                    resultCount: y,
                    options: a,
                    isLoading: b
                },
                isVisible: I,
                selectedIndex: T
            });
    }
    shouldShow(e, n, r) {
        return this.props.focused && null == this.props.expressionPickerView && (e > 0 || n || r.showEmpty);
    }
    selectResult(e, n, r) {
        var i, a, o;
        if (!this.state.isVisible) return !1;
        let { type: l, typeInfo: c, results: d, resultCount: f, options: p } = this.state.query;
        if (e >= f) return !1;
        let h =
            null === (a = c.onSelect) || void 0 === a
                ? void 0
                : a.call(c, {
                      results: d,
                      index: e,
                      type: n ? u.QB.SEND : u.QB.INSERT,
                      options: p,
                      channel: this.props.channel,
                      guild: this.props.guild,
                      tabOrEnter: r,
                      queryText: null === (i = this.state.query) || void 0 === i ? void 0 : i.queryText
                  });
        return null != h && (0, s.Qt)(l, null !== (o = h.type) && void 0 !== o ? o : null, this.props.channel, h.metadata), !0;
    }
    setState(e) {
        for (let n in e)
            if (e[n] !== this.state[n]) {
                (this.state = {
                    ...this.state,
                    ...e
                }),
                    this.emit('change', this.state);
                return;
            }
    }
    constructor(e) {
        super(), d(this, 'props', void 0), d(this, 'state', void 0), (this.props = e), (this.state = f());
    }
}
