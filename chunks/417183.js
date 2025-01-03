n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(748780),
    o = n(91192),
    c = n(481060),
    d = n(239091),
    u = n(617015),
    h = n(189519);
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
class p extends r.PureComponent {
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
        let { height: e, opacity: t, hovered: n, isContextMenuActive: r } = this.state,
            { children: l, user: d, onClick: u, isActive: m, className: p, activeClassName: g } = this.props;
        return (0, i.jsx)(o.mh, {
            id: d.id,
            children: (o) =>
                (0, i.jsx)(c.FocusRing, {
                    offset: {
                        left: -8,
                        right: -8
                    },
                    children: (0, i.jsx)(s.Z.div, {
                        className: a()(p, h.peopleListItem, null != g ? { [g]: m || r } : null, { [h.active]: m || r }),
                        onContextMenu: (e) => this.handleContextMenu(e, d),
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        onClick: null != u ? u : void 0,
                        style: {
                            height: e,
                            opacity: t
                        },
                        ...o,
                        children: l(n || m || r)
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
                this.setState({ hovered: e }), e && !t && !i && (null == n || n());
            }),
            m(this, 'handleMouseLeave', () => {
                this.setState({ hovered: !1 });
            }),
            m(this, 'handleContextMenu', (e, t) => {
                this.setState({ isContextMenuActive: !0 }),
                    (0, d.jW)(
                        e,
                        async () => {
                            let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('95052')]).then(n.bind(n, 881351));
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
t.Z = p;
