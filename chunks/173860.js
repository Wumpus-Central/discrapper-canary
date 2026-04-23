n.d(t, { A: () => g }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(111956),
    o = n.n(r),
    d = n(615300),
    c = n(52133),
    u = n(844222),
    h = n(21);
let A = { friction: 10, tension: 300 };
class _ extends l.Component {
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
                  d.A.spring(e, { toValue: 0, ...A }).start();
              }, 100))
            : e.setValue(0);
    }
    animateOut() {
        let { translateY: e } = this.state;
        (null != this._timeout && clearTimeout(this._timeout), this.props.animate)
            ? d.A.spring(e, { toValue: 1, ...A }).start()
            : e.setValue(1);
    }
    render() {
        let { className: e, text: t, hide: n, onClick: l } = this.props;
        return (0, i.jsx)(d.A.div, {
            className: a()(h.M0, e, { [h.R]: n }),
            onClick: l,
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
class m extends l.PureComponent {
    static contextType = u.C;
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
                isMentioned: l,
                reverse: s,
                onCalculate: a,
            } = this.props,
            r = null,
            o = null,
            d = [];
        e.forEach((e) => {
            "string" == typeof e
                ? d.push(e)
                : "object" == typeof e && null != e.folderId
                  ? null != t && t.has(e.folderId)
                      ? (d.push(`folder:${e.folderId}`), e.guildIds.forEach((e) => d.push(e)))
                      : d.push(e.guildIds)
                  : d.push(e.guildIds[0]);
        });
        let c = (e) => {
                null == r && l(e, s, d) && (r = e), null == o && i(e, s, d) && (o = e);
            },
            u = s ? d.length - 1 : 0,
            h = d[u];
        for (; null != h; ) {
            if ("string" == typeof h) {
                if (n(h, s, d)) break;
                c(h);
            } else {
                let e = !1;
                for (let t of h) {
                    if (n(t, s, d)) {
                        e = !0;
                        break;
                    }
                    c(t);
                }
                if (e) break;
            }
            (u += s ? -1 : 1), (h = d[u]);
        }
        null != a && a(r, o, s), this.setState({ mention: r, unread: o });
    }, 200);
    handleClick = (e) => {
        e.preventDefault(), e.stopPropagation();
        let { unread: t, mention: n } = this.state,
            { onJumpTo: i } = this.props,
            l = null != n ? n : t;
        null != l && i(l, [n, t]);
    };
    render() {
        let { unread: e, mention: t } = this.state,
            {
                textMention: n,
                textUnread: l,
                reverse: s,
                className: r,
                barClassName: o,
                hide: d,
                animate: c,
            } = this.props,
            { reducedMotion: u } = this.context;
        return (0, i.jsx)("div", {
            className: r ?? void 0,
            children: (0, i.jsx)(_, {
                hide: !0 === d || (null == e && null == t),
                className: a()(o, null != t ? h.lE : h.gy),
                text: null != t ? n : l,
                reverse: s,
                animate: c && !u.enabled,
                onClick: this.handleClick,
            }),
        });
    }
}
let g = m;
