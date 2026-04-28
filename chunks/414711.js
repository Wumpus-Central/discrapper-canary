s.d(t, { A: () => m });
var i = s(627968),
    n = s(64700),
    a = s(503698),
    l = s.n(a),
    o = s(615300),
    r = s(837381),
    c = s(187322),
    h = s(442433),
    u = s(688810),
    d = s(595623),
    p = s(22212);
s(646363);
var v = s(828066);
class A extends n.PureComponent {
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
                            s.e("91388"),
                            s.e("61748"),
                            s.e("26132"),
                            s.e("46652"),
                            s.e("93190"),
                            s.e("34552"),
                            s.e("8757"),
                            s.e("89673"),
                            s.e("68403"),
                            s.e("85968"),
                            s.e("60195"),
                            s.e("29787"),
                            s.e("97558"),
                            s.e("94000"),
                            s.e("91994"),
                            s.e("76665"),
                            s.e("76273"),
                            s.e("24198"),
                            s.e("86169"),
                            s.e("32418"),
                        ]).then(s.bind(s, 668569)),
                        a = () => {
                            (0, p.Jo)({ targetUserId: t.id, tab: d.Ay.getState().section });
                        };
                    return (s) => {
                        let l = (0, i.jsx)(e, { ...s, user: t, onInteraction: a });
                        return null == n ? l : (0, i.jsx)(u.f5, { value: n, children: l });
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
                onClick: u,
                isActive: d,
                className: p,
                activeClassName: A,
                noBorder: m,
            } = this.props;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                m ? null : (0, i.jsx)("div", { className: l()(v.yF, { [v._]: d || n || s }) }),
                (0, i.jsx)(r.tG, {
                    id: h.id,
                    children: (r) =>
                        (0, i.jsx)(c.vN, {
                            offset: { left: -8, right: -8 },
                            children: (0, i.jsx)(o.A.div, {
                                className: l()(p, v.Vg, null != A ? { [A]: d || n } : null, { [v.vu]: d || n }),
                                onContextMenu: (e) => this.handleContextMenu(e, h),
                                onMouseEnter: this.handleMouseEnter,
                                onMouseLeave: this.handleMouseLeave,
                                onClick: u ?? void 0,
                                style: { height: e, opacity: t },
                                ...r,
                                children: a(s || d || n),
                            }),
                        }),
                }),
            ],
        });
    }
}
let m = A;
