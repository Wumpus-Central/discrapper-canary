"use strict";
n.d(t, { A: () => g });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(123924),
    o = n(866323),
    c = n(939249),
    u = n(573435),
    d = n(953727);
function h(e) {
    let { width: t = 12, height: n = 12, color: i = "currentColor", foreground: s, ...a } = e;
    return (0, l.jsxs)("svg", {
        ...(0, d.A)(a),
        width: t,
        height: n,
        viewBox: "0 0 12 12",
        children: [
            (0, l.jsx)("path", {
                className: s,
                d: "M7.00168 1.08381C7.00168 0.485238 6.51645 0 5.91788 0C5.31931 0 4.83408 0.485238 4.83408 1.08381V2.18568C4.83408 2.78425 5.31931 3.26949 5.91788 3.26949C6.51645 3.26949 7.00168 2.78425 7.00168 2.18568V1.08381Z",
                fill: i,
            }),
            (0, l.jsx)("path", {
                className: s,
                d: "M7.00159 9.81428C7.00159 9.21571 6.51636 8.73047 5.91779 8.73047C5.31922 8.73047 4.83398 9.21571 4.83398 9.81428V10.9161C4.83398 11.5147 5.31922 12 5.91779 12C6.51636 12 7.00159 11.5147 7.00159 10.9161V9.81428Z",
                fill: i,
            }),
            (0, l.jsx)("path", {
                className: s,
                d: "M10.9162 7.10561C11.5148 7.10561 12 6.62037 12 6.0218C12 5.42323 11.5148 4.93799 10.9162 4.93799H9.81433C9.21576 4.93799 8.73053 5.42323 8.73053 6.0218C8.73053 6.62037 9.21576 7.10561 9.81433 7.10561H10.9162Z",
                fill: i,
            }),
            (0, l.jsx)("path", {
                className: s,
                d: "M2.18573 7.04555C2.7843 7.04555 3.26953 6.56031 3.26953 5.96174C3.26953 5.36317 2.7843 4.87793 2.18573 4.87793H1.08386C0.485292 4.87793 5.67436e-05 5.36317 5.67436e-05 5.96174C5.67436e-05 6.56031 0.485292 7.04555 1.08386 7.04555H2.18573Z",
                fill: i,
            }),
        ],
    });
}
function m(e) {
    let { width: t = 10, height: n = 10, color: i = "currentColor", foreground: s, ...a } = e;
    return (0, l.jsx)("svg", {
        ...(0, d.A)(a),
        width: t,
        height: n,
        viewBox: "0 0 10 10",
        children: (0, l.jsx)("path", {
            className: s,
            d: "M4.59185 1.69642L1.32007 0.0611887C1.14437 -0.00404167 0.953613 -0.0174513 0.770466 0.0225611C0.587319 0.0625734 0.419488 0.154328 0.286908 0.286908C0.154328 0.419488 0.0625738 0.587318 0.0225614 0.770466C-0.0174511 0.953613 -0.00404127 1.14437 0.0611893 1.32007L1.69642 4.59185C1.78832 4.83513 1.78825 5.10365 1.69623 5.34698L0.122153 8.68254C0.0375916 8.84984 0.00799916 9.03955 0.0375831 9.2246C0.0671671 9.40965 0.154425 9.58061 0.286913 9.7131C0.419402 9.84559 0.59035 9.93283 0.775402 9.96242C0.960453 9.992 1.15016 9.96241 1.31746 9.87785L4.65302 8.30377C4.89635 8.21175 5.16487 8.21168 5.40815 8.30358L8.67993 9.93881C8.85563 10.004 9.04639 10.0175 9.22953 9.97744C9.41268 9.93743 9.58051 9.84567 9.71309 9.71309C9.84567 9.58051 9.93743 9.41268 9.97744 9.22953C10.0175 9.04639 10.004 8.85563 9.93881 8.67993L8.30358 5.40815C8.24152 5.292 8.20906 5.16233 8.2091 5.03061C8.20913 4.89889 8.24165 4.7692 8.30377 4.65302L9.87785 1.31746C9.96241 1.15016 9.992 0.960453 9.96242 0.775401C9.93283 0.59035 9.84559 0.419401 9.7131 0.286913C9.58061 0.154424 9.40965 0.0671663 9.2246 0.0375824C9.03955 0.00799847 8.84984 0.037591 8.68254 0.122152L5.34698 1.69623C5.2308 1.75835 5.10111 1.79087 4.96939 1.7909C4.83767 1.79094 4.708 1.75848 4.59185 1.69642Z",
            fill: i,
        }),
    });
}
var p = n(124767);
let f = {
        config: { friction: 26, tension: 700, mass: 1 },
        initial: { scale: 1, opacity: 1 },
        from: { scale: 0.6, opacity: 0 },
        enter: { scale: 1, opacity: 1 },
        leave: { scale: 0.6, opacity: 0 },
    },
    g = i.memo(function (e) {
        let {
                ref: t,
                className: n,
                disabled: i = !1,
                childClassName: s,
                iconClassName: d,
                icon: g,
                children: _,
                onClick: x,
                onDoubleClick: C,
                isActive: A,
                onMouseEnter: E,
                onMouseLeave: I,
                onFocus: v,
                onBlur: y,
                pulse: b,
                sparkle: S,
                notification: N,
                "aria-label": j,
                "aria-expanded": T,
                "aria-haspopup": w,
                "aria-controls": R,
                noHover: L,
            } = e,
            k = (0, o.p)(null != _, { ...f, keys: (e) => (e ? "children" : "icon") }),
            O = (e) => {
                let { component: t } = e;
                return null != N
                    ? (0, l.jsxs)("div", {
                          className: p.IO,
                          children: [
                              (0, l.jsx)(u.Ay, {
                                  className: p.SA,
                                  mask: u.hW.CHAT_INPUT_BUTTON_NOTIFICATION,
                                  width: 20,
                                  height: 20,
                                  children: t,
                              }),
                              (0, l.jsx)("span", { className: p.T3 }),
                          ],
                      })
                    : t;
            };
        return (0, l.jsxs)(c.D, {
            innerRef: t,
            "aria-label": j,
            "aria-expanded": T,
            "aria-haspopup": w,
            "aria-controls": R,
            "aria-disabled": i,
            tabIndex: i ? -1 : 0,
            className: a()(n, p.x6, { [p.vu]: A, [p.CK]: L, [p.s0]: b, [p.r9]: i }),
            onClick: i ? void 0 : x,
            onDoubleClick: i ? void 0 : C,
            onMouseEnter: E,
            onMouseLeave: I,
            onFocus: v,
            onBlur: y,
            focusProps: { offset: { top: 4, bottom: 4 } },
            children: [
                k((e, t, n) => {
                    let { key: i } = n;
                    return t
                        ? (0, l.jsx)(
                              r.animated.div,
                              { style: e, className: a()(p._o, s), children: O({ component: _ }) },
                              i,
                          )
                        : null != g
                          ? (0, l.jsx)(
                                r.animated.div,
                                {
                                    style: e,
                                    className: a()(p._o, s),
                                    children: O({
                                        component: (0, l.jsx)(g, {
                                            className: a()(p.Kk, d, { [p.d1]: b }),
                                            color: "currentColor",
                                        }),
                                    }),
                                },
                                i,
                            )
                          : void 0;
                }),
                S &&
                    (0, l.jsxs)("div", {
                        className: p.YX,
                        children: [(0, l.jsx)(m, { className: p.XR }), (0, l.jsx)(h, { className: p.Hv })],
                    }),
            ],
        });
    });
