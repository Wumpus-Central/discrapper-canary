"use strict";
n.d(t, { A: () => I }), n(321073);
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(111956),
    o = n.n(l),
    d = n(615300),
    c = n(52133),
    u = n(844222),
    _ = n(884117);
let E = { friction: 10, tension: 300 };
class A extends r.Component {
    _timeout;
    constructor(e) {
        super(e), (this.state = { translateY: new d.A.Value(), reduceMotion: !1 });
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
                  d.A.spring(e, { toValue: 0, ...E }).start();
              }, 100))
            : e.setValue(0);
    }
    animateOut() {
        let { translateY: e } = this.state;
        (null != this._timeout && clearTimeout(this._timeout), this.props.animate)
            ? d.A.spring(e, { toValue: 1, ...E }).start()
            : e.setValue(1);
    }
    render() {
        let { className: e, text: t, hide: n, onClick: r } = this.props;
        return (0, i.jsx)(d.A.div, {
            className: s()(_.M0, e, { [_.R]: n }),
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
class h extends r.PureComponent {
    static contextType = u.C;
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
    calculateState = o()(() => {
        let {
                items: e,
                expandedFolders: t,
                isVisible: n,
                isUnread: i,
                isMentioned: r,
                reverse: a,
                onCalculate: s,
            } = this.props,
            l = null,
            o = null,
            d = [];
        function c(e) {
            null == l && r(e, a, d) && (l = e), null == o && i(e, a, d) && (o = e);
        }
        e.forEach((e) => {
            "string" == typeof e
                ? d.push(e)
                : "object" == typeof e && null != e.folderId
                  ? null != t && t.has(e.folderId)
                      ? (d.push(`folder:${e.folderId}`), e.guildIds.forEach((e) => d.push(e)))
                      : d.push(e.guildIds)
                  : d.push(e.guildIds[0]);
        });
        let u = a ? d.length - 1 : 0,
            _ = d[u];
        for (; null != _; ) {
            if ("string" == typeof _) {
                if (n(_, a, d)) break;
                c(_);
            } else {
                let e = !1;
                for (let t of _) {
                    if (n(t, a, d)) {
                        e = !0;
                        break;
                    }
                    c(t);
                }
                if (e) break;
            }
            (u += a ? -1 : 1), (_ = d[u]);
        }
        null != s && s(l, o, a), this.setState({ mention: l, unread: o });
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
                reverse: a,
                className: l,
                barClassName: o,
                hide: d,
                animate: c,
            } = this.props,
            { reducedMotion: u } = this.context;
        return (0, i.jsx)("div", {
            className: l ?? void 0,
            children: (0, i.jsx)(A, {
                hide: !0 === d || (null == e && null == t),
                className: s()(o, null != t ? _.lE : _.gy),
                text: null != t ? n : r,
                reverse: a,
                animate: c && !u.enabled,
                onClick: this.handleClick,
            }),
        });
    }
}
let I = h;
