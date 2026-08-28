s.d(t, { A: () => I });
var i = s(477900),
    n = s(582128),
    a = s(503698),
    r = s.n(a),
    l = s(615300),
    o = s(837381),
    u = s(259678),
    c = s(939249),
    h = s(442433),
    d = s(688810),
    A = s(595623),
    m = s(22212);
s(646363);
var p = s(761205);
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
            (0, h.L3)(
                e,
                async () => {
                    let { default: e } = await Promise.all([
                        s.e("790484"),
                        s.e("866038"),
                        s.e("926132"),
                        s.e("146652"),
                        s.e("834552"),
                        s.e("708757"),
                        s.e("585968"),
                        s.e("776273"),
                        s.e("893190"),
                        s.e("189673"),
                        s.e("229787"),
                        s.e("882073"),
                        s.e("797558"),
                        s.e("691994"),
                        s.e("576665"),
                        s.e("624198"),
                        s.e("532418"),
                    ]).then(s.bind(s, 668569));
                    function a() {
                        (0, m.Jo)({ targetUserId: t.id, tab: A.Ay.getState().section });
                    }
                    return (s) => {
                        let r = (0, i.jsx)(e, { ...s, user: t, onInteraction: a });
                        return null == n ? r : (0, i.jsx)(d.f5, { value: n, children: r });
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
                onClick: d,
                isActive: A,
                className: m,
                activeClassName: N,
                noBorder: I,
                ariaLabel: E,
            } = this.props;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                I ? null : (0, i.jsx)("div", { className: r()(p.yF, { [p._]: A || n || s }) }),
                (0, i.jsx)(o.tG, {
                    id: h.id,
                    children: (o) => {
                        let { role: I, ...g } = o,
                            y = r()(m, p.Vg, null != N ? { [N]: A || n } : null, { [p.vu]: A || n });
                        return null != E
                            ? (0, i.jsxs)(l.A.div, {
                                  role: I,
                                  className: y,
                                  onContextMenu: (e) => this.handleContextMenu(e, h),
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  style: { height: e, opacity: t },
                                  children: [
                                      (0, i.jsx)(u.vN, {
                                          offset: { left: -8, right: -8 },
                                          children: (0, i.jsx)(c.D, {
                                              tag: "div",
                                              "aria-label": E,
                                              className: p.J5,
                                              onClick: d ?? void 0,
                                              ...g,
                                          }),
                                      }),
                                      (0, i.jsx)("div", { className: p.u4, children: a(s || A || n, g.tabIndex) }),
                                  ],
                              })
                            : (0, i.jsx)(u.vN, {
                                  offset: { left: -8, right: -8 },
                                  children: (0, i.jsx)(l.A.div, {
                                      className: y,
                                      onContextMenu: (e) => this.handleContextMenu(e, h),
                                      onMouseEnter: this.handleMouseEnter,
                                      onMouseLeave: this.handleMouseLeave,
                                      onClick: d ?? void 0,
                                      style: { height: e, opacity: t },
                                      role: I,
                                      ...g,
                                      children: a(s || A || n, g.tabIndex),
                                  }),
                              });
                    },
                }),
            ],
        });
    }
}
let I = N;
