n.d(t, { Z: () => _ }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(748780),
    o = n(91192),
    c = n(481060),
    u = n(239091),
    d = n(617015),
    p = n(67165);
function f(e, t, n) {
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
function h(e) {
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
                f(e, t, n[t]);
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
        s.Z.parallel([
            s.Z.timing(this.state.opacity, {
                toValue: 0,
                duration: 200,
            }),
            s.Z.timing(this.state.height, {
                toValue: 0,
                duration: 200,
            }),
        ]).start(e);
    }
    componentWillEnter(e) {
        this.state.opacity.setValue(0),
            this.state.height.setValue(0),
            s.Z.parallel([
                s.Z.timing(this.state.opacity, {
                    toValue: 1,
                    duration: 200,
                }),
                s.Z.timing(this.state.height, {
                    toValue: d.NV,
                    duration: 200,
                }),
            ]).start(e);
    }
    render() {
        let { height: e, opacity: t, hovered: n, isContextMenuActive: i } = this.state,
            { children: l, user: u, onClick: d, isActive: f, className: m, activeClassName: _ } = this.props;
        return (0, r.jsx)(o.mh, {
            id: u.id,
            children: (o) =>
                (0, r.jsx)(c.tEY, {
                    offset: {
                        left: -8,
                        right: -8,
                    },
                    children: (0, r.jsx)(
                        s.Z.div,
                        g(
                            h(
                                {
                                    className: a()(m, p.peopleListItem, null != _ ? { [_]: f || i } : null, {
                                        [p.active]: f || i,
                                    }),
                                    onContextMenu: (e) => this.handleContextMenu(e, u),
                                    onMouseEnter: this.handleMouseEnter,
                                    onMouseLeave: this.handleMouseLeave,
                                    onClick: null != d ? d : void 0,
                                    style: {
                                        height: e,
                                        opacity: t,
                                    },
                                },
                                o,
                            ),
                            { children: l(n || f || i) },
                        ),
                    ),
                }),
        });
    }
    constructor(...e) {
        super(...e),
            f(this, "state", {
                height: new s.Z.Value(d.NV),
                opacity: new s.Z.Value(1),
                hovered: !1,
                isContextMenuActive: !1,
            }),
            f(this, "handleMouseEnter", () => {
                let { isFocused: e, isActive: t, onOtherHover: n } = this.props,
                    { isContextMenuActive: r } = this.state;
                this.setState({ hovered: e }), !e || t || r || null == n || n();
            }),
            f(this, "handleMouseLeave", () => {
                this.setState({ hovered: !1 });
            }),
            f(this, "handleContextMenu", (e, t) => {
                this.setState({ isContextMenuActive: !0 }),
                    (0, u.jW)(
                        e,
                        async () => {
                            let { default: e } = await Promise.all([n.e("79695"), n.e("69220"), n.e("74820")]).then(
                                n.bind(n, 881351),
                            );
                            return (n) => (0, r.jsx)(e, g(h({}, n), { user: t }));
                        },
                        {
                            onClose: () => {
                                this.setState({ isContextMenuActive: !1 });
                            },
                        },
                    );
            });
    }
}
let _ = m;
