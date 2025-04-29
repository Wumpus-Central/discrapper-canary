n.d(t, { Z: () => _ }), n(583741), n(388685), n(539854);
var r,
    i = n(255367),
    l = n(73800),
    o = n(120356),
    s = n.n(o),
    a = n(954955),
    c = n.n(a),
    u = n(748780),
    d = n(902704),
    h = n(481060),
    p = n(161421);
function f(e, t, n) {
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
function g(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
let m = {
    friction: 10,
    tension: 300
};
class b extends l.Component {
    shouldComponentUpdate(e, t) {
        return !(0, d.Z)(this.props, e, ['animate']) || !(0, d.Z)(this.state, t);
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
            u.Z.spring(e, g({ toValue: 0 }, m)).start();
        }, 100);
    }
    animateOut() {
        let { translateY: e } = this.state;
        if ((null != this._timeout && clearTimeout(this._timeout), !this.props.animate)) return void e.setValue(1);
        u.Z.spring(e, g({ toValue: 1 }, m)).start();
    }
    render() {
        let { className: e, text: t, hide: n, onClick: r } = this.props;
        return (0, i.jsx)(u.Z.div, {
            className: s()(p.bar, e, { [p.hidden]: n }),
            onClick: r,
            style: this.getAnimatedStyle(),
            'aria-hidden': n,
            children: (0, i.jsx)('span', {
                className: p.text,
                children: t
            })
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
                        outputRange: ['0%', t ? '180%' : '-180%']
                    })
                }
            ]
        };
    }
    constructor(e) {
        super(e),
            f(this, '_timeout', void 0),
            (this.state = {
                translateY: new u.Z.Value(),
                reduceMotion: !1
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
            { textMention: n, textUnread: r, reverse: l, className: o, barClassName: a, hide: c, animate: u } = this.props,
            { reducedMotion: d } = this.context;
        return (0, i.jsx)('div', {
            className: null != o ? o : void 0,
            children: (0, i.jsx)(b, {
                hide: !0 === c || (null == e && null == t),
                className: s()(a, null != t ? p.mention : p.unread),
                text: null != t ? n : r,
                reverse: l,
                animate: u && !d.enabled,
                onClick: this.handleClick
            })
        });
    }
    constructor(...e) {
        super(...e),
            f(this, 'state', {
                unread: null,
                mention: null
            }),
            f(
                this,
                'calculateState',
                c()(() => {
                    let { items: e, expandedFolders: t, isVisible: n, isUnread: r, isMentioned: i, reverse: l, onCalculate: o } = this.props,
                        s = null,
                        a = null,
                        c = [];
                    e.forEach((e) => {
                        'string' == typeof e ? c.push(e) : 'object' == typeof e && null != e.folderId ? (null != t && t.has(e.folderId) ? (c.push('folder:'.concat(e.folderId)), e.guildIds.forEach((e) => c.push(e))) : c.push(e.guildIds)) : c.push(e.guildIds[0]);
                    });
                    let u = (e) => {
                            null == s && i(e, l, c) && (s = e), null == a && r(e, l, c) && (a = e);
                        },
                        d = l ? c.length - 1 : 0,
                        h = c[d];
                    for (; null != h; ) {
                        if ('string' == typeof h) {
                            if (n(h, l, c)) break;
                            u(h);
                        } else {
                            let e = !1;
                            for (let t of h) {
                                if (n(t, l, c)) {
                                    e = !0;
                                    break;
                                }
                                u(t);
                            }
                            if (e) break;
                        }
                        (d += l ? -1 : 1), (h = c[d]);
                    }
                    null != o && o(s, a, l),
                        this.setState({
                            mention: s,
                            unread: a
                        });
                }, 200)
            ),
            f(this, 'handleClick', (e) => {
                e.preventDefault(), e.stopPropagation();
                let { unread: t, mention: n } = this.state,
                    { onJumpTo: r } = this.props,
                    i = null != n ? n : t;
                null != i && r(i, [n, t]);
            });
    }
}
f(y, 'contextType', h.Sfi),
    f(y, 'defaultProps', {
        className: p.container,
        reverse: !1,
        hide: !1,
        animate: !0
    });
let _ = y;
