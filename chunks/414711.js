n.d(t, { A: () => p });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(615300),
    o = n(837381),
    c = n(187322),
    d = n(442433),
    u = n(688810),
    m = n(595623),
    A = n(22212);
n(646363);
var h = n(272828);
class x extends s.PureComponent {
    state = {
        height: new r.A.Value(this.props.height ?? 61),
        opacity: new r.A.Value(1),
        hovered: !1,
        isContextMenuActive: !1,
    };
    componentWillLeave(e) {
        r.A.parallel([
            r.A.timing(this.state.opacity, { toValue: 0, duration: 200 }),
            r.A.timing(this.state.height, { toValue: 0, duration: 200 }),
        ]).start(e);
    }
    componentWillEnter(e) {
        this.state.opacity.setValue(0),
            this.state.height.setValue(0),
            r.A.parallel([
                r.A.timing(this.state.opacity, { toValue: 1, duration: 200 }),
                r.A.timing(this.state.height, { toValue: this.props.height ?? 61, duration: 200 }),
            ]).start(e);
    }
    handleMouseEnter = () => {
        let { isFocused: e, isActive: t, onOtherHover: n } = this.props,
            { isContextMenuActive: i } = this.state;
        this.setState({ hovered: e }), !e || t || i || n?.();
    };
    handleMouseLeave = () => {
        this.setState({ hovered: !1 });
    };
    handleContextMenu = (e, t) => {
        let { analyticsLocations: s } = this.props;
        this.setState({ isContextMenuActive: !0 }),
            (0, d.L3)(
                e,
                async () => {
                    let { default: e } = await Promise.all([n.e("97262"), n.e("32418"), n.e("22880")]).then(
                            n.bind(n, 668569),
                        ),
                        l = () => {
                            (0, A.Jo)({ targetUserId: t.id, tab: m.Ay.getState().section });
                        };
                    return (n) => {
                        let a = (0, i.jsx)(e, { ...n, user: t, onInteraction: l });
                        return null == s ? a : (0, i.jsx)(u.f5, { value: s, children: a });
                    };
                },
                {
                    onClose: () => {
                        this.setState({ isContextMenuActive: !1 });
                    },
                },
            );
    };
    render() {
        let { height: e, opacity: t, hovered: n, isContextMenuActive: s } = this.state,
            {
                children: l,
                user: d,
                onClick: u,
                isActive: m,
                className: A,
                activeClassName: x,
                noBorder: p,
            } = this.props;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                p ? null : (0, i.jsx)("div", { className: a()(h.yF, { [h._]: m || s || n }) }),
                (0, i.jsx)(o.tG, {
                    id: d.id,
                    children: (o) =>
                        (0, i.jsx)(c.vN, {
                            offset: { left: -8, right: -8 },
                            children: (0, i.jsx)(r.A.div, {
                                className: a()(A, h.Vg, null != x ? { [x]: m || s } : null, { [h.vu]: m || s }),
                                onContextMenu: (e) => this.handleContextMenu(e, d),
                                onMouseEnter: this.handleMouseEnter,
                                onMouseLeave: this.handleMouseLeave,
                                onClick: u ?? void 0,
                                style: { height: e, opacity: t },
                                ...o,
                                children: l(n || m || s),
                            }),
                        }),
                }),
            ],
        });
    }
}
let p = x;
