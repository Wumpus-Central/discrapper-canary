i.d(t, { Z: () => y }), i(388685);
var n = i(54381),
    s = i(473749),
    r = i(120356),
    o = i.n(r),
    a = i(748780),
    l = i(91192),
    u = i(481060),
    c = i(239091),
    h = i(617015),
    p = i(67165);
function d(e, t, i) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = i),
        e
    );
}
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(i);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(i).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(i, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                d(e, t, i[t]);
            });
    }
    return e;
}
function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var i = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      i.push.apply(i, n);
                  }
                  return i;
              })(Object(t)).forEach(function (i) {
                  Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(t, i));
              }),
        e
    );
}
class O extends s.PureComponent {
    componentWillLeave(e) {
        a.Z.parallel([
            a.Z.timing(this.state.opacity, {
                toValue: 0,
                duration: 200,
            }),
            a.Z.timing(this.state.height, {
                toValue: 0,
                duration: 200,
            }),
        ]).start(e);
    }
    componentWillEnter(e) {
        this.state.opacity.setValue(0),
            this.state.height.setValue(0),
            a.Z.parallel([
                a.Z.timing(this.state.opacity, {
                    toValue: 1,
                    duration: 200,
                }),
                a.Z.timing(this.state.height, {
                    toValue: h.NV,
                    duration: 200,
                }),
            ]).start(e);
    }
    render() {
        let { height: e, opacity: t, hovered: i, isContextMenuActive: s } = this.state,
            { children: r, user: c, onClick: h, isActive: d, className: O, activeClassName: y } = this.props;
        return (0, n.jsx)(l.mh, {
            id: c.id,
            children: (l) =>
                (0, n.jsx)(u.tEY, {
                    offset: {
                        left: -8,
                        right: -8,
                    },
                    children: (0, n.jsx)(
                        a.Z.div,
                        N(
                            m(
                                {
                                    className: o()(O, p.peopleListItem, null != y ? { [y]: d || s } : null, {
                                        [p.active]: d || s,
                                    }),
                                    onContextMenu: (e) => this.handleContextMenu(e, c),
                                    onMouseEnter: this.handleMouseEnter,
                                    onMouseLeave: this.handleMouseLeave,
                                    onClick: null != h ? h : void 0,
                                    style: {
                                        height: e,
                                        opacity: t,
                                    },
                                },
                                l,
                            ),
                            { children: r(i || d || s) },
                        ),
                    ),
                }),
        });
    }
    constructor(...e) {
        super(...e),
            d(this, "state", {
                height: new a.Z.Value(h.NV),
                opacity: new a.Z.Value(1),
                hovered: !1,
                isContextMenuActive: !1,
            }),
            d(this, "handleMouseEnter", () => {
                let { isFocused: e, isActive: t, onOtherHover: i } = this.props,
                    { isContextMenuActive: n } = this.state;
                this.setState({ hovered: e }), !e || t || n || null == i || i();
            }),
            d(this, "handleMouseLeave", () => {
                this.setState({ hovered: !1 });
            }),
            d(this, "handleContextMenu", (e, t) => {
                this.setState({ isContextMenuActive: !0 }),
                    (0, c.jW)(
                        e,
                        async () => {
                            let { default: e } = await Promise.all([i.e("79695"), i.e("69220"), i.e("77635")]).then(
                                i.bind(i, 881351),
                            );
                            return (i) => (0, n.jsx)(e, N(m({}, i), { user: t }));
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
let y = O;
