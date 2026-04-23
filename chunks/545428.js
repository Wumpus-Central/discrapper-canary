"use strict";
n.d(t, { A: () => h });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(419354),
    l = n(866323),
    u = n(939249),
    c = n(573435),
    d = n(44998),
    _ = n(597222),
    f = n(124767);
let p = {
        config: { friction: 26, tension: 700, mass: 1 },
        initial: { scale: 1, opacity: 1 },
        from: { scale: 0.6, opacity: 0 },
        enter: { scale: 1, opacity: 1 },
        leave: { scale: 0.6, opacity: 0 },
    },
    h = i.memo(function (e) {
        let {
                ref: t,
                className: n,
                disabled: i = !1,
                childClassName: s,
                iconClassName: h,
                icon: E,
                children: m,
                onClick: g,
                onDoubleClick: A,
                isActive: I,
                onMouseEnter: T,
                onMouseLeave: S,
                onFocus: y,
                onBlur: N,
                pulse: v,
                sparkle: C,
                notification: O,
                "aria-label": R,
                "aria-expanded": b,
                "aria-haspopup": D,
                "aria-controls": L,
                noHover: w,
            } = e,
            M = (0, l.p)(null != m, { ...p, keys: (e) => (e ? "children" : "icon") }),
            P = (e) => {
                let { component: t } = e;
                return null != O
                    ? (0, r.jsxs)("div", {
                          className: f.IO,
                          children: [
                              (0, r.jsx)(c.Ay, {
                                  className: f.SA,
                                  mask: c.hW.CHAT_INPUT_BUTTON_NOTIFICATION,
                                  width: 20,
                                  height: 20,
                                  children: t,
                              }),
                              (0, r.jsx)("span", { className: f.T3 }),
                          ],
                      })
                    : t;
            };
        return (0, r.jsxs)(u.D, {
            innerRef: t,
            "aria-label": R,
            "aria-expanded": b,
            "aria-haspopup": D,
            "aria-controls": L,
            "aria-disabled": i,
            tabIndex: i ? -1 : 0,
            className: a()(n, f.x6, { [f.vu]: I, [f.CK]: w, [f.s0]: v, [f.r9]: i }),
            onClick: i ? void 0 : g,
            onDoubleClick: i ? void 0 : A,
            onMouseEnter: T,
            onMouseLeave: S,
            onFocus: y,
            onBlur: N,
            focusProps: { offset: { top: 4, bottom: 4 } },
            children: [
                M((e, t, n) => {
                    let { key: i } = n;
                    return t
                        ? (0, r.jsx)(
                              o.animated.div,
                              { style: e, className: a()(f._o, s), children: P({ component: m }) },
                              i,
                          )
                        : null != E
                          ? (0, r.jsx)(
                                o.animated.div,
                                {
                                    style: e,
                                    className: a()(f._o, s),
                                    children: P({
                                        component: (0, r.jsx)(E, {
                                            className: a()(f.Kk, h, { [f.d1]: v }),
                                            color: "currentColor",
                                        }),
                                    }),
                                },
                                i,
                            )
                          : void 0;
                }),
                C &&
                    (0, r.jsxs)("div", {
                        className: f.YX,
                        children: [(0, r.jsx)(_.A, { className: f.XR }), (0, r.jsx)(d.A, { className: f.Hv })],
                    }),
            ],
        });
    });
