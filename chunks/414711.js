"use strict";
n.d(t, { A: () => E });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(615300),
    l = n(837381),
    u = n(187322),
    c = n(442433),
    d = n(688810),
    _ = n(595623),
    f = n(22212);
n(646363);
var h = n(828066);
class p extends r.PureComponent {
    state = {
        height: new o.A.Value(this.props.height ?? 61),
        opacity: new o.A.Value(1),
        hovered: !1,
        isContextMenuActive: !1,
    };
    componentWillLeave(e) {
        o.A.parallel([
            o.A.timing(this.state.opacity, { toValue: 0, duration: 200 }),
            o.A.timing(this.state.height, { toValue: 0, duration: 200 }),
        ]).start(e);
    }
    componentWillEnter(e) {
        this.state.opacity.setValue(0),
            this.state.height.setValue(0),
            o.A.parallel([
                o.A.timing(this.state.opacity, { toValue: 1, duration: 200 }),
                o.A.timing(this.state.height, { toValue: this.props.height ?? 61, duration: 200 }),
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
        let { analyticsLocations: r } = this.props;
        this.setState({ isContextMenuActive: !0 }),
            (0, c.L3)(
                e,
                async () => {
                    let { default: e } = await Promise.all([
                            n.e("25719"),
                            n.e("26132"),
                            n.e("46652"),
                            n.e("93190"),
                            n.e("34552"),
                            n.e("8757"),
                            n.e("89673"),
                            n.e("85968"),
                            n.e("60195"),
                            n.e("68403"),
                            n.e("29787"),
                            n.e("97558"),
                            n.e("94000"),
                            n.e("91994"),
                            n.e("76665"),
                            n.e("76273"),
                            n.e("24198"),
                            n.e("32418"),
                        ]).then(n.bind(n, 668569)),
                        s = () => {
                            (0, f.Jo)({ targetUserId: t.id, tab: _.Ay.getState().section });
                        };
                    return (n) => {
                        let a = (0, i.jsx)(e, { ...n, user: t, onInteraction: s });
                        return null == r ? a : (0, i.jsx)(d.f5, { value: r, children: a });
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
        let { height: e, opacity: t, hovered: n, isContextMenuActive: r } = this.state,
            {
                children: s,
                user: c,
                onClick: d,
                isActive: _,
                className: f,
                activeClassName: p,
                noBorder: E,
            } = this.props;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                E ? null : (0, i.jsx)("div", { className: a()(h.yF, { [h._]: _ || r || n }) }),
                (0, i.jsx)(l.tG, {
                    id: c.id,
                    children: (l) =>
                        (0, i.jsx)(u.vN, {
                            offset: { left: -8, right: -8 },
                            children: (0, i.jsx)(o.A.div, {
                                className: a()(f, h.Vg, null != p ? { [p]: _ || r } : null, { [h.vu]: _ || r }),
                                onContextMenu: (e) => this.handleContextMenu(e, c),
                                onMouseEnter: this.handleMouseEnter,
                                onMouseLeave: this.handleMouseLeave,
                                onClick: d ?? void 0,
                                style: { height: e, opacity: t },
                                ...l,
                                children: s(n || _ || r, l.tabIndex),
                            }),
                        }),
                }),
            ],
        });
    }
}
let E = p;
