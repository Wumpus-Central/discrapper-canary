s.d(t, { A: () => m });
var i = s(627968),
    n = s(64700),
    a = s(503698),
    r = s.n(a),
    l = s(615300),
    u = s(837381),
    o = s(397927),
    c = s(442433),
    h = s(688810),
    d = s(595623),
    A = s(22212);
s(646363);
var I = s(904914);
class N extends n.PureComponent {
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
            (0, c.L3)(
                e,
                async () => {
                    let { default: e } = await Promise.all([s.e("97262"), s.e("32418"), s.e("77012")]).then(
                            s.bind(s, 668569),
                        ),
                        a = () => {
                            (0, A.Jo)({ targetUserId: t.id, tab: d.Ay.getState().section });
                        };
                    return (s) => {
                        let r = (0, i.jsx)(e, { ...s, user: t, onInteraction: a });
                        return null == n ? r : (0, i.jsx)(h.f5, { value: n, children: r });
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
                user: c,
                onClick: h,
                isActive: d,
                className: A,
                activeClassName: N,
                noBorder: m,
            } = this.props;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                m ? null : (0, i.jsx)("div", { className: r()(I.yF, { [I._]: d || n || s }) }),
                (0, i.jsx)(u.tG, {
                    id: c.id,
                    children: (u) =>
                        (0, i.jsx)(o.vN3, {
                            offset: { left: -8, right: -8 },
                            children: (0, i.jsx)(l.A.div, {
                                className: r()(A, I.Vg, null != N ? { [N]: d || n } : null, { [I.vu]: d || n }),
                                onContextMenu: (e) => this.handleContextMenu(e, c),
                                onMouseEnter: this.handleMouseEnter,
                                onMouseLeave: this.handleMouseLeave,
                                onClick: h ?? void 0,
                                style: { height: e, opacity: t },
                                ...u,
                                children: a(s || d || n),
                            }),
                        }),
                }),
            ],
        });
    }
}
let m = N;
