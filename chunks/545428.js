"use strict";
n.d(t, { A: () => m });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(380278),
    l = n(397927),
    u = n(573435),
    c = n(44998),
    d = n(597222),
    _ = n(105312);
let f = 20,
    p = {
        config: { friction: 26, tension: 700, mass: 1 },
        initial: { scale: 1, opacity: 1 },
        from: { scale: 0.6, opacity: 0 },
        enter: { scale: 1, opacity: 1 },
        leave: { scale: 0.6, opacity: 0 },
    };
function h(e) {
    let {
            ref: t,
            className: n,
            disabled: i = !1,
            childClassName: s,
            iconClassName: h,
            icon: m,
            children: E,
            onClick: g,
            onDoubleClick: A,
            isActive: I,
            onMouseEnter: T,
            onMouseLeave: S,
            onFocus: y,
            onBlur: v,
            pulse: N,
            sparkle: C,
            notification: R,
            "aria-label": O,
            "aria-expanded": b,
            "aria-haspopup": D,
            "aria-controls": L,
            noHover: w,
        } = e,
        M = (0, l.pnh)(null != E, { ...p, keys: (e) => (e ? "children" : "icon") }),
        x = (e) => {
            let { component: t } = e;
            return null != R
                ? (0, r.jsxs)("div", {
                      className: _.IO,
                      children: [
                          (0, r.jsx)(u.Ay, {
                              className: _.SA,
                              mask: u.hW.CHAT_INPUT_BUTTON_NOTIFICATION,
                              width: f,
                              height: f,
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
        "aria-expanded": b,
        "aria-haspopup": D,
        "aria-controls": L,
        "aria-disabled": i,
        className: a()(n, _.x6, { [_.vu]: I, [_.CK]: w, [_.s0]: N, [_.r9]: i }),
        onClick: i ? void 0 : g,
        onDoubleClick: i ? void 0 : A,
        onMouseEnter: T,
        onMouseLeave: S,
        onFocus: y,
        onBlur: v,
        focusProps: { offset: { top: 4, bottom: 4 } },
        children: [
            M((e, t, n) => {
                let { key: i } = n;
                return t
                    ? (0, r.jsx)(
                          o.animated.div,
                          { style: e, className: a()(_._o, s), children: x({ component: E }) },
                          i,
                      )
                    : null != m
                      ? (0, r.jsx)(
                            o.animated.div,
                            {
                                style: e,
                                className: a()(_._o, s),
                                children: x({
                                    component: (0, r.jsx)(m, {
                                        className: a()(_.Kk, h, { [_.d1]: N }),
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
                    className: _.YX,
                    children: [(0, r.jsx)(d.A, { className: _.XR }), (0, r.jsx)(c.A, { className: _.Hv })],
                }),
        ],
    });
}
let m = i.memo(h);
