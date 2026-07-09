s.d(t, { A: () => I });
var i = s(627968),
    n = s(64700),
    a = s(503698),
    r = s.n(a),
    l = s(615300),
    o = s(837381),
    u = s(187322),
    h = s(939249),
    c = s(442433),
    d = s(688810),
    A = s(595623),
    m = s(22212);
s(646363);
var p = s(828066);
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
                    let { default: e } = await Promise.all([
                        s.e("71406"),
                        s.e("94881"),
                        s.e("26132"),
                        s.e("46652"),
                        s.e("93190"),
                        s.e("34552"),
                        s.e("8757"),
                        s.e("85968"),
                        s.e("89673"),
                        s.e("68403"),
                        s.e("29787"),
                        s.e("82073"),
                        s.e("97558"),
                        s.e("91994"),
                        s.e("76665"),
                        s.e("76273"),
                        s.e("24198"),
                        s.e("32418"),
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
                user: c,
                onClick: d,
                isActive: A,
                className: m,
                activeClassName: N,
                noBorder: I,
                ariaLabel: g,
            } = this.props;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                I ? null : (0, i.jsx)("div", { className: r()(p.yF, { [p._]: A || n || s }) }),
                (0, i.jsx)(o.tG, {
                    id: c.id,
                    children: (o) => {
                        let { role: I, ...E } = o,
                            y = r()(m, p.Vg, null != N ? { [N]: A || n } : null, { [p.vu]: A || n });
                        return null != g
                            ? (0, i.jsxs)(l.A.div, {
                                  role: I,
                                  className: y,
                                  onContextMenu: (e) => this.handleContextMenu(e, c),
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  style: { height: e, opacity: t },
                                  children: [
                                      (0, i.jsx)(u.vN, {
                                          offset: { left: -8, right: -8 },
                                          children: (0, i.jsx)(h.D, {
                                              tag: "div",
                                              "aria-label": g,
                                              className: p.J5,
                                              onClick: d ?? void 0,
                                              ...E,
                                          }),
                                      }),
                                      (0, i.jsx)("div", { className: p.u4, children: a(s || A || n, E.tabIndex) }),
                                  ],
                              })
                            : (0, i.jsx)(u.vN, {
                                  offset: { left: -8, right: -8 },
                                  children: (0, i.jsx)(l.A.div, {
                                      className: y,
                                      onContextMenu: (e) => this.handleContextMenu(e, c),
                                      onMouseEnter: this.handleMouseEnter,
                                      onMouseLeave: this.handleMouseLeave,
                                      onClick: d ?? void 0,
                                      style: { height: e, opacity: t },
                                      role: I,
                                      ...E,
                                      children: a(s || A || n, E.tabIndex),
                                  }),
                              });
                    },
                }),
            ],
        });
    }
}
let I = N;
