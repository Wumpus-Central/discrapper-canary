"use strict";
n.d(t, { A: () => g }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(111956),
    o = n.n(a),
    c = n(615300),
    d = n(52133),
    u = n(397927),
    h = n(92722);
let A = { friction: 10, tension: 300 };
class m extends s.Component {
    _timeout;
    constructor(e) {
        super(e), (this.state = { translateY: new c.A.Value(), reduceMotion: !1 });
    }
    shouldComponentUpdate(e, t) {
        return !(0, d.A)(this.props, e, ["animate"]) || !(0, d.A)(this.state, t);
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
                  c.A.spring(e, { toValue: 0, ...A }).start();
              }, 100))
            : e.setValue(0);
    }
    animateOut() {
        let { translateY: e } = this.state;
        (null != this._timeout && clearTimeout(this._timeout), this.props.animate)
            ? c.A.spring(e, { toValue: 1, ...A }).start()
            : e.setValue(1);
    }
    render() {
        let { className: e, text: t, hide: n, onClick: s } = this.props;
        return (0, i.jsx)(c.A.div, {
            className: r()(h.M0, e, { [h.R]: n }),
            onClick: s,
            style: this.getAnimatedStyle(),
            "aria-hidden": n,
            children: (0, i.jsx)("span", { className: h.Qq, children: t }),
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
class p extends s.PureComponent {
    static contextType = u.CZY;
    static defaultProps = { className: h.kL, reverse: !1, hide: !1, animate: !0 };
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
    calculateState = o()(() => {
        let {
                items: e,
                expandedFolders: t,
                isVisible: n,
                isUnread: i,
                isMentioned: s,
                reverse: l,
                onCalculate: r,
            } = this.props,
            a = null,
            o = null,
            c = [];
        e.forEach((e) => {
            "string" == typeof e
                ? c.push(e)
                : "object" == typeof e && null != e.folderId
                  ? null != t && t.has(e.folderId)
                      ? (c.push(`folder:${e.folderId}`), e.guildIds.forEach((e) => c.push(e)))
                      : c.push(e.guildIds)
                  : c.push(e.guildIds[0]);
        });
        let d = (e) => {
                null == a && s(e, l, c) && (a = e), null == o && i(e, l, c) && (o = e);
            },
            u = l ? c.length - 1 : 0,
            h = c[u];
        for (; null != h; ) {
            if ("string" == typeof h) {
                if (n(h, l, c)) break;
                d(h);
            } else {
                let e = !1;
                for (let t of h) {
                    if (n(t, l, c)) {
                        e = !0;
                        break;
                    }
                    d(t);
                }
                if (e) break;
            }
            (u += l ? -1 : 1), (h = c[u]);
        }
        null != r && r(a, o, l), this.setState({ mention: a, unread: o });
    }, 200);
    handleClick = (e) => {
        e.preventDefault(), e.stopPropagation();
        let { unread: t, mention: n } = this.state,
            { onJumpTo: i } = this.props,
            s = null != n ? n : t;
        null != s && i(s, [n, t]);
    };
    render() {
        let { unread: e, mention: t } = this.state,
            {
                textMention: n,
                textUnread: s,
                reverse: l,
                className: a,
                barClassName: o,
                hide: c,
                animate: d,
            } = this.props,
            { reducedMotion: u } = this.context;
        return (0, i.jsx)("div", {
            className: a ?? void 0,
            children: (0, i.jsx)(m, {
                hide: !0 === c || (null == e && null == t),
                className: r()(o, null != t ? h.lE : h.gy),
                text: null != t ? n : s,
                reverse: l,
                animate: d && !u.enabled,
                onClick: this.handleClick,
            }),
        });
    }
}
let g = p;
