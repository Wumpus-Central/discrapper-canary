i.d(t, { A: () => N });
var s = i(627968),
    n = i(64700),
    a = i(503698),
    r = i.n(a),
    l = i(615300),
    o = i(837381),
    u = i(187322),
    c = i(442433),
    h = i(688810),
    d = i(595623),
    A = i(22212);
i(646363);
var p = i(828066);
class m extends n.PureComponent {
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
        let { isFocused: e, isActive: t, onOtherHover: i } = this.props,
            { isContextMenuActive: s } = this.state;
        this.setState({ hovered: e }), !e || t || s || i?.();
    };
    handleMouseLeave = () => {
        this.setState({ hovered: !1 });
    };
    handleContextMenu = (e, t) => {
        let { analyticsLocations: n } = this.props;
        this.setState({ isContextMenuActive: !0 }),
            (0, c.L3)(
                e,
                async () => {
                    let { default: e } = await Promise.all([
                            i.e("39431"),
                            i.e("83721"),
                            i.e("26132"),
                            i.e("46652"),
                            i.e("93190"),
                            i.e("34552"),
                            i.e("8757"),
                            i.e("89673"),
                            i.e("85968"),
                            i.e("60195"),
                            i.e("68403"),
                            i.e("29787"),
                            i.e("97558"),
                            i.e("94000"),
                            i.e("91994"),
                            i.e("76665"),
                            i.e("76273"),
                            i.e("24198"),
                            i.e("86169"),
                            i.e("32418"),
                        ]).then(i.bind(i, 668569)),
                        a = () => {
                            (0, A.Jo)({ targetUserId: t.id, tab: d.Ay.getState().section });
                        };
                    return (i) => {
                        let r = (0, s.jsx)(e, { ...i, user: t, onInteraction: a });
                        return null == n ? r : (0, s.jsx)(h.f5, { value: n, children: r });
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
        let { height: e, opacity: t, hovered: i, isContextMenuActive: n } = this.state,
            {
                children: a,
                user: c,
                onClick: h,
                isActive: d,
                className: A,
                activeClassName: m,
                noBorder: N,
            } = this.props;
        return (0, s.jsxs)(s.Fragment, {
            children: [
                N ? null : (0, s.jsx)("div", { className: r()(p.yF, { [p._]: d || n || i }) }),
                (0, s.jsx)(o.tG, {
                    id: c.id,
                    children: (o) =>
                        (0, s.jsx)(u.vN, {
                            offset: { left: -8, right: -8 },
                            children: (0, s.jsx)(l.A.div, {
                                className: r()(A, p.Vg, null != m ? { [m]: d || n } : null, { [p.vu]: d || n }),
                                onContextMenu: (e) => this.handleContextMenu(e, c),
                                onMouseEnter: this.handleMouseEnter,
                                onMouseLeave: this.handleMouseLeave,
                                onClick: h ?? void 0,
                                style: { height: e, opacity: t },
                                ...o,
                                children: a(i || d || n),
                            }),
                        }),
                }),
            ],
        });
    }
}
let N = m;
