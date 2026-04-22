"use strict";
n.d(t, { A: () => f });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(517738),
    o = n(866323),
    c = n(939249),
    u = n(573435),
    d = n(44998),
    h = n(597222),
    m = n(124767);
let p = {
        config: { friction: 26, tension: 700, mass: 1 },
        initial: { scale: 1, opacity: 1 },
        from: { scale: 0.6, opacity: 0 },
        enter: { scale: 1, opacity: 1 },
        leave: { scale: 0.6, opacity: 0 },
    },
    f = l.memo(function (e) {
        let {
                ref: t,
                className: n,
                disabled: l = !1,
                childClassName: s,
                iconClassName: f,
                icon: g,
                children: _,
                onClick: x,
                onDoubleClick: A,
                isActive: C,
                onMouseEnter: E,
                onMouseLeave: I,
                onFocus: v,
                onBlur: y,
                pulse: S,
                sparkle: b,
                notification: N,
                "aria-label": T,
                "aria-expanded": j,
                "aria-haspopup": R,
                "aria-controls": w,
                noHover: L,
            } = e,
            M = (0, o.p)(null != _, { ...p, keys: (e) => (e ? "children" : "icon") }),
            k = (e) => {
                let { component: t } = e;
                return null != N
                    ? (0, i.jsxs)("div", {
                          className: m.IO,
                          children: [
                              (0, i.jsx)(u.Ay, {
                                  className: m.SA,
                                  mask: u.hW.CHAT_INPUT_BUTTON_NOTIFICATION,
                                  width: 20,
                                  height: 20,
                                  children: t,
                              }),
                              (0, i.jsx)("span", { className: m.T3 }),
                          ],
                      })
                    : t;
            };
        return (0, i.jsxs)(c.D, {
            innerRef: t,
            "aria-label": T,
            "aria-expanded": j,
            "aria-haspopup": R,
            "aria-controls": w,
            "aria-disabled": l,
            tabIndex: l ? -1 : 0,
            className: r()(n, m.x6, { [m.vu]: C, [m.CK]: L, [m.s0]: S, [m.r9]: l }),
            onClick: l ? void 0 : x,
            onDoubleClick: l ? void 0 : A,
            onMouseEnter: E,
            onMouseLeave: I,
            onFocus: v,
            onBlur: y,
            focusProps: { offset: { top: 4, bottom: 4 } },
            children: [
                M((e, t, n) => {
                    let { key: l } = n;
                    return t
                        ? (0, i.jsx)(
                              a.animated.div,
                              { style: e, className: r()(m._o, s), children: k({ component: _ }) },
                              l,
                          )
                        : null != g
                          ? (0, i.jsx)(
                                a.animated.div,
                                {
                                    style: e,
                                    className: r()(m._o, s),
                                    children: k({
                                        component: (0, i.jsx)(g, {
                                            className: r()(m.Kk, f, { [m.d1]: S }),
                                            color: "currentColor",
                                        }),
                                    }),
                                },
                                l,
                            )
                          : void 0;
                }),
                b &&
                    (0, i.jsxs)("div", {
                        className: m.YX,
                        children: [(0, i.jsx)(h.A, { className: m.XR }), (0, i.jsx)(d.A, { className: m.Hv })],
                    }),
            ],
        });
    });
