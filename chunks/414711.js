"use strict";
n.d(t, { A: () => f });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(615300),
    o = n(837381),
    d = n(187322),
    c = n(939249),
    u = n(442433),
    _ = n(688810),
    E = n(595623),
    A = n(22212);
n(646363);
var h = n(828066);
class I extends r.PureComponent {
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
            (0, u.L3)(
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
                    function a() {
                        (0, A.Jo)({ targetUserId: t.id, tab: E.Ay.getState().section });
                    }
                    return (n) => {
                        let s = (0, i.jsx)(e, { ...n, user: t, onInteraction: a });
                        return null == r ? s : (0, i.jsx)(_.f5, { value: r, children: s });
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
                children: a,
                user: u,
                onClick: _,
                isActive: E,
                className: A,
                activeClassName: I,
                noBorder: f,
                ariaLabel: p,
            } = this.props;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                f ? null : (0, i.jsx)("div", { className: s()(h.yF, { [h._]: E || r || n }) }),
                (0, i.jsx)(o.tG, {
                    id: u.id,
                    children: (o) => {
                        let { role: f, ...T } = o,
                            m = s()(A, h.Vg, null != I ? { [I]: E || r } : null, { [h.vu]: E || r });
                        return null != p
                            ? (0, i.jsxs)(l.A.div, {
                                  role: f,
                                  className: m,
                                  onContextMenu: (e) => this.handleContextMenu(e, u),
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  style: { height: e, opacity: t },
                                  children: [
                                      (0, i.jsx)(d.vN, {
                                          offset: { left: -8, right: -8 },
                                          children: (0, i.jsx)(c.D, {
                                              tag: "div",
                                              "aria-label": p,
                                              className: h.J5,
                                              onClick: _ ?? void 0,
                                              ...T,
                                          }),
                                      }),
                                      (0, i.jsx)("div", { className: h.u4, children: a(n || E || r, T.tabIndex) }),
                                  ],
                              })
                            : (0, i.jsx)(d.vN, {
                                  offset: { left: -8, right: -8 },
                                  children: (0, i.jsx)(l.A.div, {
                                      className: m,
                                      onContextMenu: (e) => this.handleContextMenu(e, u),
                                      onMouseEnter: this.handleMouseEnter,
                                      onMouseLeave: this.handleMouseLeave,
                                      onClick: _ ?? void 0,
                                      style: { height: e, opacity: t },
                                      role: f,
                                      ...T,
                                      children: a(n || E || r, T.tabIndex),
                                  }),
                              });
                    },
                }),
            ],
        });
    }
}
let f = I;
