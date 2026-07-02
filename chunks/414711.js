"use strict";
n.d(t, { A: () => m });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(615300),
    l = n(837381),
    u = n(187322),
    c = n(939249),
    d = n(442433),
    _ = n(688810),
    h = n(595623),
    f = n(22212);
n(646363);
var p = n(828066);
class E extends r.PureComponent {
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
            (0, d.L3)(
                e,
                async () => {
                    let { default: e } = await Promise.all([
                        n.e("71406"),
                        n.e("94881"),
                        n.e("26132"),
                        n.e("46652"),
                        n.e("93190"),
                        n.e("34552"),
                        n.e("8757"),
                        n.e("85968"),
                        n.e("89673"),
                        n.e("68403"),
                        n.e("29787"),
                        n.e("82073"),
                        n.e("97558"),
                        n.e("91994"),
                        n.e("76665"),
                        n.e("76273"),
                        n.e("24198"),
                        n.e("32418"),
                    ]).then(n.bind(n, 668569));
                    function s() {
                        (0, f.Jo)({ targetUserId: t.id, tab: h.Ay.getState().section });
                    }
                    return (n) => {
                        let a = (0, i.jsx)(e, { ...n, user: t, onInteraction: s });
                        return null == r ? a : (0, i.jsx)(_.f5, { value: r, children: a });
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
                user: d,
                onClick: _,
                isActive: h,
                className: f,
                activeClassName: E,
                noBorder: m,
                ariaLabel: g,
            } = this.props;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                m ? null : (0, i.jsx)("div", { className: a()(p.yF, { [p._]: h || r || n }) }),
                (0, i.jsx)(l.tG, {
                    id: d.id,
                    children: (l) => {
                        let { role: m, ...A } = l,
                            I = a()(f, p.Vg, null != E ? { [E]: h || r } : null, { [p.vu]: h || r });
                        return null != g
                            ? (0, i.jsxs)(o.A.div, {
                                  role: m,
                                  className: I,
                                  onContextMenu: (e) => this.handleContextMenu(e, d),
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  style: { height: e, opacity: t },
                                  children: [
                                      (0, i.jsx)(u.vN, {
                                          offset: { left: -8, right: -8 },
                                          children: (0, i.jsx)(c.D, {
                                              tag: "div",
                                              "aria-label": g,
                                              className: p.J5,
                                              onClick: _ ?? void 0,
                                              ...A,
                                          }),
                                      }),
                                      (0, i.jsx)("div", { className: p.u4, children: s(n || h || r, A.tabIndex) }),
                                  ],
                              })
                            : (0, i.jsx)(u.vN, {
                                  offset: { left: -8, right: -8 },
                                  children: (0, i.jsx)(o.A.div, {
                                      className: I,
                                      onContextMenu: (e) => this.handleContextMenu(e, d),
                                      onMouseEnter: this.handleMouseEnter,
                                      onMouseLeave: this.handleMouseLeave,
                                      onClick: _ ?? void 0,
                                      style: { height: e, opacity: t },
                                      role: m,
                                      ...A,
                                      children: s(n || h || r, A.tabIndex),
                                  }),
                              });
                    },
                }),
            ],
        });
    }
}
let m = E;
