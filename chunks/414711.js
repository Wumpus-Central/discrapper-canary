s.d(t, { A: () => N });
var i = s(627968),
    n = s(64700),
    a = s(503698),
    r = s.n(a),
    l = s(615300),
    o = s(837381),
    u = s(187322),
    h = s(442433),
    c = s(688810),
    d = s(595623),
    A = s(22212);
s(646363);
var m = s(828066);
class p extends n.PureComponent {
    state = {
        height: new l.A.Value(this.props.height ?? 61),
        opacity: new l.A.Value(1),
        hovered: !1,
        isContextMenuActive: !1,
    };
    componentWillLeave(e) {
        l.A.parallel([
            l.A.timing(this.state.opacity, { toValue: 0, duration: 200 }),
            l.A.timing(this.state.height, { toValue: 0, duration: 200 }),
        ]).start(e);
    }
    componentWillEnter(e) {
        this.state.opacity.setValue(0),
            this.state.height.setValue(0),
            l.A.parallel([
                l.A.timing(this.state.opacity, { toValue: 1, duration: 200 }),
                l.A.timing(this.state.height, { toValue: this.props.height ?? 61, duration: 200 }),
            ]).start(e);
    }
    handleMouseEnter = () => {
        let { isFocused: e, isActive: t, onOtherHover: s } = this.props,
            { isContextMenuActive: i } = this.state;
        this.setState({ hovered: e }), !e || t || i || s?.();
    };
    handleMouseLeave = () => {
        this.setState({ hovered: !1 });
    };
    handleContextMenu = (e, t) => {
        let { analyticsLocations: n } = this.props;
        this.setState({ isContextMenuActive: !0 }),
            (0, h.L3)(
                e,
                async () => {
                    let { default: e } = await Promise.all([
                            s.e("56386"),
                            s.e("94881"),
                            s.e("26132"),
                            s.e("46652"),
                            s.e("93190"),
                            s.e("34552"),
                            s.e("8757"),
                            s.e("89673"),
                            s.e("85968"),
                            s.e("60195"),
                            s.e("68403"),
                            s.e("29787"),
                            s.e("97558"),
                            s.e("94000"),
                            s.e("91994"),
                            s.e("76665"),
                            s.e("76273"),
                            s.e("24198"),
                            s.e("32418"),
                        ]).then(s.bind(s, 668569)),
                        a = () => {
                            (0, A.Jo)({ targetUserId: t.id, tab: d.Ay.getState().section });
                        };
                    return (s) => {
                        let r = (0, i.jsx)(e, { ...s, user: t, onInteraction: a });
                        return null == n ? r : (0, i.jsx)(c.f5, { value: n, children: r });
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
        let { height: e, opacity: t, hovered: s, isContextMenuActive: n } = this.state,
            {
                children: a,
                user: h,
                onClick: c,
                isActive: d,
                className: A,
                activeClassName: p,
                noBorder: N,
            } = this.props;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                N ? null : (0, i.jsx)("div", { className: r()(m.yF, { [m._]: d || n || s }) }),
                (0, i.jsx)(o.tG, {
                    id: h.id,
                    children: (o) =>
                        (0, i.jsx)(u.vN, {
                            offset: { left: -8, right: -8 },
                            children: (0, i.jsx)(l.A.div, {
                                className: r()(A, m.Vg, null != p ? { [p]: d || n } : null, { [m.vu]: d || n }),
                                onContextMenu: (e) => this.handleContextMenu(e, h),
                                onMouseEnter: this.handleMouseEnter,
                                onMouseLeave: this.handleMouseLeave,
                                onClick: c ?? void 0,
                                style: { height: e, opacity: t },
                                ...o,
                                children: a(s || d || n, o.tabIndex),
                            }),
                        }),
                }),
            ],
        });
    }
}
let N = p;
