n.d(t, { A: () => T }), n(321073);
var i = n(627968),
    a = n(64700),
    r = n(503698),
    s = n.n(r),
    l = n(111956),
    o = n.n(l),
    d = n(615300),
    c = n(52133),
    _ = n(844222),
    E = n(21);
let u = { friction: 10, tension: 300 };
class A extends a.Component {
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
                  d.A.spring(e, { toValue: 0, ...u }).start();
              }, 100))
            : e.setValue(0);
    }
    animateOut() {
        let { translateY: e } = this.state;
        (null != this._timeout && clearTimeout(this._timeout), this.props.animate)
            ? d.A.spring(e, { toValue: 1, ...u }).start()
            : e.setValue(1);
    }
    render() {
        let { className: e, text: t, hide: n, onClick: a } = this.props;
        return (0, i.jsx)(d.A.div, {
            className: s()(E.M0, e, { [E.R]: n }),
            onClick: a,
            style: this.getAnimatedStyle(),
            "aria-hidden": n,
            children: (0, i.jsx)("span", { className: E.Qq, children: t }),
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
class I extends a.PureComponent {
    static contextType = _.C;
    static defaultProps = { className: E.kL, reverse: !1, hide: !1, animate: !0 };
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
                isMentioned: a,
                reverse: r,
                onCalculate: s,
            } = this.props,
            l = null,
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
                null == l && a(e, r, d) && (l = e), null == o && i(e, r, d) && (o = e);
            },
            _ = r ? d.length - 1 : 0,
            E = d[_];
        for (; null != E; ) {
            if ("string" == typeof E) {
                if (n(E, r, d)) break;
                c(E);
            } else {
                let e = !1;
                for (let t of E) {
                    if (n(t, r, d)) {
                        e = !0;
                        break;
                    }
                    c(t);
                }
                if (e) break;
            }
            (_ += r ? -1 : 1), (E = d[_]);
        }
        null != s && s(l, o, r), this.setState({ mention: l, unread: o });
    }, 200);
    handleClick = (e) => {
        e.preventDefault(), e.stopPropagation();
        let { unread: t, mention: n } = this.state,
            { onJumpTo: i } = this.props,
            a = null != n ? n : t;
        null != a && i(a, [n, t]);
    };
    render() {
        let { unread: e, mention: t } = this.state,
            {
                textMention: n,
                textUnread: a,
                reverse: r,
                className: l,
                barClassName: o,
                hide: d,
                animate: c,
            } = this.props,
            { reducedMotion: _ } = this.context;
        return (0, i.jsx)("div", {
            className: l ?? void 0,
            children: (0, i.jsx)(A, {
                hide: !0 === d || (null == e && null == t),
                className: s()(o, null != t ? E.lE : E.gy),
                text: null != t ? n : a,
                reverse: r,
                animate: c && !_.enabled,
                onClick: this.handleClick,
            }),
        });
    }
}
let T = I;
