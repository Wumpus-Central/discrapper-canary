n.d(t, { Z: () => b }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(748780),
    s = n(91192),
    c = n(481060),
    u = n(239091),
    d = n(617015),
    p = n(962632);
function h(e, t, n) {
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
function f(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class m extends i.PureComponent {
    componentWillLeave(e) {
        o.Z.parallel([
            o.Z.timing(this.state.opacity, {
                toValue: 0,
                duration: 200
            }),
            o.Z.timing(this.state.height, {
                toValue: 0,
                duration: 200
            })
        ]).start(e);
    }
    componentWillEnter(e) {
        this.state.opacity.setValue(0),
            this.state.height.setValue(0),
            o.Z.parallel([
                o.Z.timing(this.state.opacity, {
                    toValue: 1,
                    duration: 200
                }),
                o.Z.timing(this.state.height, {
                    toValue: d.NV,
                    duration: 200
                })
            ]).start(e);
    }
    render() {
        let { height: e, opacity: t, hovered: n, isContextMenuActive: i } = this.state,
            { children: l, user: u, onClick: d, isActive: h, className: m, activeClassName: b } = this.props;
        return (0, r.jsx)(s.mh, {
            id: u.id,
            children: (s) =>
                (0, r.jsx)(c.tEY, {
                    offset: {
                        left: -8,
                        right: -8
                    },
                    children: (0, r.jsx)(
                        o.Z.div,
                        g(
                            f(
                                {
                                    className: a()(m, p.peopleListItem, null != b ? { [b]: h || i } : null, { [p.active]: h || i }),
                                    onContextMenu: (e) => this.handleContextMenu(e, u),
                                    onMouseEnter: this.handleMouseEnter,
                                    onMouseLeave: this.handleMouseLeave,
                                    onClick: null != d ? d : void 0,
                                    style: {
                                        height: e,
                                        opacity: t
                                    }
                                },
                                s
                            ),
                            { children: l(n || h || i) }
                        )
                    )
                })
        });
    }
    constructor(...e) {
        super(...e),
            h(this, 'state', {
                height: new o.Z.Value(d.NV),
                opacity: new o.Z.Value(1),
                hovered: !1,
                isContextMenuActive: !1
            }),
            h(this, 'handleMouseEnter', () => {
                let { isFocused: e, isActive: t, onOtherHover: n } = this.props,
                    { isContextMenuActive: r } = this.state;
                this.setState({ hovered: e }), !e || t || r || null == n || n();
            }),
            h(this, 'handleMouseLeave', () => {
                this.setState({ hovered: !1 });
            }),
            h(this, 'handleContextMenu', (e, t) => {
                this.setState({ isContextMenuActive: !0 }),
                    (0, u.jW)(
                        e,
                        async () => {
                            let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('86423')]).then(n.bind(n, 881351));
                            return (n) => (0, r.jsx)(e, g(f({}, n), { user: t }));
                        },
                        {
                            onClose: () => {
                                this.setState({ isContextMenuActive: !1 });
                            }
                        }
                    );
            });
    }
}
let b = m;
