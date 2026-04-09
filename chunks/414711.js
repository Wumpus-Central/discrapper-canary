s.d(t, { A: () => d });
var i = s(627968),
    n = s(64700),
    a = s(503698),
    r = s.n(a),
    l = s(615300),
    o = s(837381),
    u = s(397927),
    h = s(442433),
    c = s(688810);
s(646363);
var A = s(281145);
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
                    let { default: e } = await Promise.all([s.e("97262"), s.e("32418"), s.e("45136")]).then(
                        s.bind(s, 668569),
                    );
                    return (s) =>
                        null == n
                            ? (0, i.jsx)(e, { ...s, user: t })
                            : (0, i.jsx)(c.f5, { value: n, children: (0, i.jsx)(e, { ...s, user: t }) });
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
                isActive: m,
                className: d,
                activeClassName: p,
                noBorder: N,
            } = this.props;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                N ? null : (0, i.jsx)("div", { className: r()(A.yF, { [A._]: m || n || s }) }),
                (0, i.jsx)(o.tG, {
                    id: h.id,
                    children: (o) =>
                        (0, i.jsx)(u.vN3, {
                            offset: { left: -8, right: -8 },
                            children: (0, i.jsx)(l.A.div, {
                                className: r()(d, A.Vg, null != p ? { [p]: m || n } : null, { [A.vu]: m || n }),
                                onContextMenu: (e) => this.handleContextMenu(e, h),
                                onMouseEnter: this.handleMouseEnter,
                                onMouseLeave: this.handleMouseLeave,
                                onClick: c ?? void 0,
                                style: { height: e, opacity: t },
                                ...o,
                                children: a(s || m || n),
                            }),
                        }),
                }),
            ],
        });
    }
}
let d = m;
