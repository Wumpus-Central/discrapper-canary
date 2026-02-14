"use strict";
n.d(t, { A: () => E, V: () => f });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(522160),
    l = n(397927),
    u = n(573435),
    c = n(44998),
    d = n(597222),
    _ = n(543202),
    f = (function (e) {
        return (e[(e.UPDATE = 0)] = "UPDATE"), (e[(e.NEW = 1)] = "NEW"), e;
    })({});
let h = 20,
    p = {
        config: { friction: 26, tension: 700, mass: 1 },
        initial: { scale: 1, opacity: 1 },
        from: { scale: 0.6, opacity: 0 },
        enter: { scale: 1, opacity: 1 },
        leave: { scale: 0.6, opacity: 0 },
    };
function g(e) {
    let {
            ref: t,
            className: n,
            disabled: i = !1,
            childClassName: a,
            iconClassName: f,
            icon: g,
            children: E,
            onClick: A,
            onDoubleClick: I,
            isActive: T,
            onMouseEnter: y,
            onMouseLeave: S,
            onFocus: v,
            onBlur: C,
            pulse: b,
            sparkle: N,
            notification: R,
            "aria-label": O,
            "aria-expanded": D,
            "aria-haspopup": L,
            "aria-controls": w,
            noHover: x,
        } = e,
        P = (0, l.pnh)(null != E, { ...p, keys: (e) => (e ? "children" : "icon") }),
        M = (e) => {
            let { component: t } = e;
            return null != R
                ? (0, r.jsxs)("div", {
                      className: _.IO,
                      children: [
                          (0, r.jsx)(u.Ay, {
                              className: _.SA,
                              mask: u.hW.CHAT_INPUT_BUTTON_NOTIFICATION,
                              width: h,
                              height: h,
                              children: t,
                          }),
                          (0, r.jsx)("span", { className: _.T3 }),
                      ],
                  })
                : t;
        };
    return (0, r.jsxs)(l.DUT, {
        innerRef: t,
        "aria-label": O,
        "aria-expanded": D,
        "aria-haspopup": L,
        "aria-controls": w,
        "aria-disabled": i,
        className: s()(n, _.x6, { [_.vu]: T, [_.CK]: x, [_.s0]: b, [_.r9]: i }),
        onClick: i ? void 0 : A,
        onDoubleClick: i ? void 0 : I,
        onMouseEnter: y,
        onMouseLeave: S,
        onFocus: v,
        onBlur: C,
        focusProps: { offset: { top: 4, bottom: 4 } },
        children: [
            P((e, t, n) => {
                let { key: i } = n;
                return t
                    ? (0, r.jsx)(
                          o.animated.div,
                          { style: e, className: s()(_._o, a), children: M({ component: E }) },
                          i,
                      )
                    : null != g
                      ? (0, r.jsx)(
                            o.animated.div,
                            {
                                style: e,
                                className: s()(_._o, a),
                                children: M({
                                    component: (0, r.jsx)(g, {
                                        className: s()(_.Kk, f, { [_.d1]: b }),
                                        color: "currentColor",
                                    }),
                                }),
                            },
                            i,
                        )
                      : void 0;
            }),
            N &&
                (0, r.jsxs)("div", {
                    className: _.YX,
                    children: [(0, r.jsx)(d.A, { className: _.XR }), (0, r.jsx)(c.A, { className: _.Hv })],
                }),
        ],
    });
}
let E = i.memo(g);
