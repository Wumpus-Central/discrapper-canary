n.d(t, { Z: () => O }), n(583741), n(388685), n(539854);
var r,
    i = n(54381),
    l = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(954955),
    c = n.n(s),
    u = n(748780),
    d = n(902704),
    f = n(481060),
    h = n(491455);
function p(e, t, n) {
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
function g(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
let b = {
    friction: 10,
    tension: 300,
};
class m extends l.Component {
    shouldComponentUpdate(e, t) {
        return !(0, d.Z)(this.props, e, ["animate"]) || !(0, d.Z)(this.state, t);
    }
    componentDidMount() {
        let { hide: e } = this.props;
        e ? this.state.translateY.setValue(1) : this.state.translateY.setValue(0);
    }
    componentDidUpdate(e) {
        let { hide: t } = e,
            { hide: n } = this.props;
        n && !t ? this.animateOut() : !n && t && this.animateIn();
    }
    componentWillUnmount() {
        null != this._timeout && clearTimeout(this._timeout);
    }
    animateIn() {
        let { translateY: e } = this.state;
        if ((null != this._timeout && clearTimeout(this._timeout), !this.props.animate)) return void e.setValue(0);
        this._timeout = setTimeout(() => {
            u.Z.spring(e, g({ toValue: 0 }, b)).start();
        }, 100);
    }
    animateOut() {
        let { translateY: e } = this.state;
        if ((null != this._timeout && clearTimeout(this._timeout), !this.props.animate)) return void e.setValue(1);
        u.Z.spring(e, g({ toValue: 1 }, b)).start();
    }
    render() {
        let { className: e, text: t, hide: n, onClick: r } = this.props;
        return (0, i.jsx)(u.Z.div, {
            className: o()(h.bar, e, { [h.hidden]: n }),
            onClick: r,
            style: this.getAnimatedStyle(),
            "aria-hidden": n,
            children: (0, i.jsx)("span", {
                className: h.text,
                children: t,
            }),
        });
    }
    getAnimatedStyle() {
        let { translateY: e } = this.state,
            { reverse: t } = this.props;
        return {
            transform: [
                {
                    translateY: e.interpolate({
                        inputRange: [0, 1],
                        outputRange: ["0%", t ? "180%" : "-180%"],
                    }),
                },
            ],
        };
    }
    constructor(e) {
        super(e),
            p(this, "_timeout", void 0),
            (this.state = {
                translateY: new u.Z.Value(),
                reduceMotion: !1,
            });
    }
}
class y extends (r = l.PureComponent) {
    componentDidMount() {
        this.calculateState();
    }
    componentDidUpdate() {
        this.calculateState();
    }
    componentWillUnmount() {
        this.calculateState.cancel();
    }
    render() {
        let { unread: e, mention: t } = this.state,
            {
                textMention: n,
                textUnread: r,
                reverse: l,
                className: a,
                barClassName: s,
                hide: c,
                animate: u,
            } = this.props,
            { reducedMotion: d } = this.context;
        return (0, i.jsx)("div", {
            className: null != a ? a : void 0,
            children: (0, i.jsx)(m, {
                hide: !0 === c || (null == e && null == t),
                className: o()(s, null != t ? h.mention : h.unread),
                text: null != t ? n : r,
                reverse: l,
                animate: u && !d.enabled,
                onClick: this.handleClick,
            }),
        });
    }
    constructor(...e) {
        super(...e),
            p(this, "state", {
                unread: null,
                mention: null,
            }),
            p(
                this,
                "calculateState",
                c()(() => {
                    let {
                            items: e,
                            expandedFolders: t,
                            isVisible: n,
                            isUnread: r,
                            isMentioned: i,
                            reverse: l,
                            onCalculate: a,
                        } = this.props,
                        o = null,
                        s = null,
                        c = [];
                    e.forEach((e) => {
                        "string" == typeof e
                            ? c.push(e)
                            : "object" == typeof e && null != e.folderId
                              ? null != t && t.has(e.folderId)
                                  ? (c.push("folder:".concat(e.folderId)), e.guildIds.forEach((e) => c.push(e)))
                                  : c.push(e.guildIds)
                              : c.push(e.guildIds[0]);
                    });
                    let u = (e) => {
                            null == o && i(e, l, c) && (o = e), null == s && r(e, l, c) && (s = e);
                        },
                        d = l ? c.length - 1 : 0,
                        f = c[d];
                    for (; null != f; ) {
                        if ("string" == typeof f) {
                            if (n(f, l, c)) break;
                            u(f);
                        } else {
                            let e = !1;
                            for (let t of f) {
                                if (n(t, l, c)) {
                                    e = !0;
                                    break;
                                }
                                u(t);
                            }
                            if (e) break;
                        }
                        (d += l ? -1 : 1), (f = c[d]);
                    }
                    null != a && a(o, s, l),
                        this.setState({
                            mention: o,
                            unread: s,
                        });
                }, 200),
            ),
            p(this, "handleClick", (e) => {
                e.preventDefault(), e.stopPropagation();
                let { unread: t, mention: n } = this.state,
                    { onJumpTo: r } = this.props,
                    i = null != n ? n : t;
                null != i && r(i, [n, t]);
            });
    }
}
p(y, "contextType", f.Sfi),
    p(y, "defaultProps", {
        className: h.container,
        reverse: !1,
        hide: !1,
        animate: !0,
    });
let O = y;
