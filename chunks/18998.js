n.d(t, { Z: () => v }), n(47120), n(653041);
var i,
    l = n(200651),
    r = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(954955),
    c = n.n(s),
    d = n(748780),
    u = n(902704),
    h = n(481060),
    p = n(109489);
function g(e, t, n) {
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
let m = {
    friction: 10,
    tension: 300
};
class f extends r.Component {
    shouldComponentUpdate(e, t) {
        return !(0, u.Z)(this.props, e, ['animate']) || !(0, u.Z)(this.state, t);
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
        if ((null != this._timeout && clearTimeout(this._timeout), !this.props.animate)) {
            e.setValue(0);
            return;
        }
        this._timeout = setTimeout(() => {
            d.Z.spring(e, {
                toValue: 0,
                ...m
            }).start();
        }, 100);
    }
    animateOut() {
        let { translateY: e } = this.state;
        if ((null != this._timeout && clearTimeout(this._timeout), !this.props.animate)) {
            e.setValue(1);
            return;
        }
        d.Z.spring(e, {
            toValue: 1,
            ...m
        }).start();
    }
    render() {
        let { className: e, text: t, hide: n, onClick: i } = this.props;
        return (0, l.jsx)(d.Z.div, {
            className: o()(p.bar, e, { [p.hidden]: n }),
            onClick: i,
            style: this.getAnimatedStyle(),
            'aria-hidden': n,
            children: (0, l.jsx)('span', {
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
            g(this, '_timeout', void 0),
            (this.state = {
                translateY: new d.Z.Value(),
                reduceMotion: !1
            });
    }
}
class _ extends (i = r.PureComponent) {
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
            { textMention: n, textUnread: i, reverse: r, className: a, barClassName: s, hide: c, animate: d } = this.props,
            { reducedMotion: u } = this.context;
        return (0, l.jsx)('div', {
            className: null != a ? a : void 0,
            children: (0, l.jsx)(f, {
                hide: !0 === c || (null == e && null == t),
                className: o()(s, null != t ? p.mention : p.unread),
                text: null != t ? n : i,
                reverse: r,
                animate: d && !u.enabled,
                onClick: this.handleClick
            })
        });
    }
    constructor(...e) {
        super(...e),
            g(this, 'state', {
                unread: null,
                mention: null
            }),
            g(
                this,
                'calculateState',
                c()(() => {
                    let { items: e, expandedFolders: t, isVisible: n, isUnread: i, isMentioned: l, reverse: r, onCalculate: a } = this.props,
                        o = null,
                        s = null,
                        c = [];
                    e.forEach((e) => {
                        'string' == typeof e ? c.push(e) : 'object' == typeof e && null != e.folderId ? (null != t && t.has(e.folderId) ? (c.push('folder:'.concat(e.folderId)), e.guildIds.forEach((e) => c.push(e))) : c.push(e.guildIds)) : c.push(e.guildIds[0]);
                    });
                    let d = (e) => {
                            null == o && l(e, r, c) && (o = e), null == s && i(e, r, c) && (s = e);
                        },
                        u = r ? c.length - 1 : 0,
                        h = c[u];
                    for (; null != h; ) {
                        if ('string' == typeof h) {
                            if (n(h, r, c)) break;
                            d(h);
                        } else {
                            let e = !1;
                            for (let t of h) {
                                if (n(t, r, c)) {
                                    e = !0;
                                    break;
                                }
                                d(t);
                            }
                            if (e) break;
                        }
                        (u += r ? -1 : 1), (h = c[u]);
                    }
                    null != a && a(o, s, r),
                        this.setState({
                            mention: o,
                            unread: s
                        });
                }, 200)
            ),
            g(this, 'handleClick', (e) => {
                e.preventDefault(), e.stopPropagation();
                let { unread: t, mention: n } = this.state,
                    { onJumpTo: i } = this.props,
                    l = null != n ? n : t;
                null != l && i(l, [n, t]);
            });
    }
}
g(_, 'contextType', h.Sfi),
    g(_, 'defaultProps', {
        className: p.container,
        reverse: !1,
        hide: !1,
        animate: !0
    });
let v = _;
