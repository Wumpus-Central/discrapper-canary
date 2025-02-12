n.d(t, { Z: () => g }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(748780),
    o = n(91192),
    c = n(481060),
    d = n(239091),
    u = n(617015),
    h = n(179935);
function m(e, t, n) {
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
class p extends l.PureComponent {
    componentWillLeave(e) {
        s.Z.parallel([
            s.Z.timing(this.state.opacity, {
                toValue: 0,
                duration: 200
            }),
            s.Z.timing(this.state.height, {
                toValue: 0,
                duration: 200
            })
        ]).start(e);
    }
    componentWillEnter(e) {
        this.state.opacity.setValue(0),
            this.state.height.setValue(0),
            s.Z.parallel([
                s.Z.timing(this.state.opacity, {
                    toValue: 1,
                    duration: 200
                }),
                s.Z.timing(this.state.height, {
                    toValue: u.NV,
                    duration: 200
                })
            ]).start(e);
    }
    render() {
        let { height: e, opacity: t, hovered: n, isContextMenuActive: l } = this.state,
            { children: r, user: d, onClick: u, isActive: m, className: p, activeClassName: g } = this.props;
        return (0, i.jsx)(o.mh, {
            id: d.id,
            children: (o) =>
                (0, i.jsx)(c.tEY, {
                    offset: {
                        left: -8,
                        right: -8
                    },
                    children: (0, i.jsx)(s.Z.div, {
                        className: a()(p, h.peopleListItem, null != g ? { [g]: m || l } : null, { [h.active]: m || l }),
                        onContextMenu: (e) => this.handleContextMenu(e, d),
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        onClick: null != u ? u : void 0,
                        style: {
                            height: e,
                            opacity: t
                        },
                        ...o,
                        children: r(n || m || l)
                    })
                })
        });
    }
    constructor(...e) {
        super(...e),
            m(this, 'state', {
                height: new s.Z.Value(u.NV),
                opacity: new s.Z.Value(1),
                hovered: !1,
                isContextMenuActive: !1
            }),
            m(this, 'handleMouseEnter', () => {
                let { isFocused: e, isActive: t, onOtherHover: n } = this.props,
                    { isContextMenuActive: i } = this.state;
                this.setState({ hovered: e }), !e || t || i || null == n || n();
            }),
            m(this, 'handleMouseLeave', () => {
                this.setState({ hovered: !1 });
            }),
            m(this, 'handleContextMenu', (e, t) => {
                this.setState({ isContextMenuActive: !0 }),
                    (0, d.jW)(
                        e,
                        async () => {
                            let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('45078')]).then(n.bind(n, 881351));
                            return (n) =>
                                (0, i.jsx)(e, {
                                    ...n,
                                    user: t
                                });
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
let g = p;
