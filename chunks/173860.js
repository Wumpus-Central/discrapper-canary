"use strict";
n.d(t, { A: () => E }), n(321073);
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(111956),
    l = n.n(o),
    u = n(615300),
    c = n(52133),
    d = n(844222),
    _ = n(21);
let f = { friction: 10, tension: 300 };
class h extends r.Component {
    _timeout;
    constructor(e) {
        super(e), (this.state = { translateY: new u.A.Value(), reduceMotion: !1 });
    }
    shouldComponentUpdate(e, t) {
        return !(0, c.A)(this.props, e, ["animate"]) || !(0, c.A)(this.state, t);
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
        (null != this._timeout && clearTimeout(this._timeout), this.props.animate)
            ? (this._timeout = setTimeout(() => {
                  u.A.spring(e, { toValue: 0, ...f }).start();
              }, 100))
            : e.setValue(0);
    }
    animateOut() {
        let { translateY: e } = this.state;
        (null != this._timeout && clearTimeout(this._timeout), this.props.animate)
            ? u.A.spring(e, { toValue: 1, ...f }).start()
            : e.setValue(1);
    }
    render() {
        let { className: e, text: t, hide: n, onClick: r } = this.props;
        return (0, i.jsx)(u.A.div, {
            className: a()(_.M0, e, { [_.R]: n }),
            onClick: r,
            style: this.getAnimatedStyle(),
            "aria-hidden": n,
            children: (0, i.jsx)("span", { className: _.Qq, children: t }),
        });
    }
    getAnimatedStyle() {
        let { translateY: e } = this.state,
            { reverse: t } = this.props;
        return {
            transform: [
                { translateY: e.interpolate({ inputRange: [0, 1], outputRange: ["0%", t ? "180%" : "-180%"] }) },
            ],
        };
    }
}
class p extends r.PureComponent {
    static contextType = d.C;
    static defaultProps = { className: _.kL, reverse: !1, hide: !1, animate: !0 };
    state = { unread: null, mention: null };
    componentDidMount() {
        this.calculateState();
    }
    componentDidUpdate() {
        this.calculateState();
    }
    componentWillUnmount() {
        this.calculateState.cancel();
    }
    calculateState = l()(() => {
        let {
                items: e,
                expandedFolders: t,
                isVisible: n,
                isUnread: i,
                isMentioned: r,
                reverse: s,
                onCalculate: a,
            } = this.props,
            o = null,
            l = null,
            u = [];
        e.forEach((e) => {
            "string" == typeof e
                ? u.push(e)
                : "object" == typeof e && null != e.folderId
                  ? null != t && t.has(e.folderId)
                      ? (u.push(`folder:${e.folderId}`), e.guildIds.forEach((e) => u.push(e)))
                      : u.push(e.guildIds)
                  : u.push(e.guildIds[0]);
        });
        let c = (e) => {
                null == o && r(e, s, u) && (o = e), null == l && i(e, s, u) && (l = e);
            },
            d = s ? u.length - 1 : 0,
            _ = u[d];
        for (; null != _; ) {
            if ("string" == typeof _) {
                if (n(_, s, u)) break;
                c(_);
            } else {
                let e = !1;
                for (let t of _) {
                    if (n(t, s, u)) {
                        e = !0;
                        break;
                    }
                    c(t);
                }
                if (e) break;
            }
            (d += s ? -1 : 1), (_ = u[d]);
        }
        null != a && a(o, l, s), this.setState({ mention: o, unread: l });
    }, 200);
    handleClick = (e) => {
        e.preventDefault(), e.stopPropagation();
        let { unread: t, mention: n } = this.state,
            { onJumpTo: i } = this.props,
            r = null != n ? n : t;
        null != r && i(r, [n, t]);
    };
    render() {
        let { unread: e, mention: t } = this.state,
            {
                textMention: n,
                textUnread: r,
                reverse: s,
                className: o,
                barClassName: l,
                hide: u,
                animate: c,
            } = this.props,
            { reducedMotion: d } = this.context;
        return (0, i.jsx)("div", {
            className: o ?? void 0,
            children: (0, i.jsx)(h, {
                hide: !0 === u || (null == e && null == t),
                className: a()(l, null != t ? _.lE : _.gy),
                text: null != t ? n : r,
                reverse: s,
                animate: c && !d.enabled,
                onClick: this.handleClick,
            }),
        });
    }
}
let E = p;
