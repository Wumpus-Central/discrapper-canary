"use strict";
n.d(t, { A: () => g, V: () => f });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(92674),
    l = n(397927),
    u = n(573435),
    c = n(44998),
    d = n(597222),
    _ = n(543202),
    f = (function (e) {
        return (e[(e.UPDATE = 0)] = "UPDATE"), (e[(e.NEW = 1)] = "NEW"), e;
    })({});
let p = 20,
    h = {
        config: { friction: 26, tension: 700, mass: 1 },
        initial: { scale: 1, opacity: 1 },
        from: { scale: 0.6, opacity: 0 },
        enter: { scale: 1, opacity: 1 },
        leave: { scale: 0.6, opacity: 0 },
    };
function m(e) {
    let {
            ref: t,
            className: n,
            disabled: i = !1,
            childClassName: a,
            iconClassName: f,
            icon: m,
            children: g,
            onClick: E,
            onDoubleClick: A,
            isActive: I,
            onMouseEnter: T,
            onMouseLeave: y,
            onFocus: S,
            onBlur: v,
            pulse: C,
            sparkle: b,
            notification: N,
            "aria-label": R,
            "aria-expanded": O,
            "aria-haspopup": D,
            "aria-controls": L,
            noHover: w,
        } = e,
        x = (0, l.pnh)(null != g, { ...h, keys: (e) => (e ? "children" : "icon") }),
        P = (e) => {
            let { component: t } = e;
            return null != N
                ? (0, r.jsxs)("div", {
                      className: _.IO,
                      children: [
                          (0, r.jsx)(u.Ay, {
                              className: _.SA,
                              mask: u.hW.CHAT_INPUT_BUTTON_NOTIFICATION,
                              width: p,
                              height: p,
                              children: t,
                          }),
                          (0, r.jsx)("span", { className: _.T3 }),
                      ],
                  })
                : t;
        };
    return (0, r.jsxs)(l.DUT, {
        innerRef: t,
        "aria-label": R,
        "aria-expanded": O,
        "aria-haspopup": D,
        "aria-controls": L,
        "aria-disabled": i,
        className: s()(n, _.x6, { [_.vu]: I, [_.CK]: w, [_.s0]: C, [_.r9]: i }),
        onClick: i ? void 0 : E,
        onDoubleClick: i ? void 0 : A,
        onMouseEnter: T,
        onMouseLeave: y,
        onFocus: S,
        onBlur: v,
        focusProps: { offset: { top: 4, bottom: 4 } },
        children: [
            x((e, t, n) => {
                let { key: i } = n;
                return t
                    ? (0, r.jsx)(
                          o.animated.div,
                          { style: e, className: s()(_._o, a), children: P({ component: g }) },
                          i,
                      )
                    : null != m
                      ? (0, r.jsx)(
                            o.animated.div,
                            {
                                style: e,
                                className: s()(_._o, a),
                                children: P({
                                    component: (0, r.jsx)(m, {
                                        className: s()(_.Kk, f, { [_.d1]: C }),
                                        color: "currentColor",
                                    }),
                                }),
                            },
                            i,
                        )
                      : void 0;
            }),
            b &&
                (0, r.jsxs)("div", {
                    className: _.YX,
                    children: [(0, r.jsx)(d.A, { className: _.XR }), (0, r.jsx)(c.A, { className: _.Hv })],
                }),
        ],
    });
}
let g = i.memo(m);
