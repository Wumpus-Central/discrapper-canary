"use strict";
n.d(t, { A: () => p });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(580929),
    l = n(866323),
    u = n(939249),
    d = n(573435),
    c = n(953727);
function _(e) {
    let { width: t = 12, height: n = 12, color: r = "currentColor", foreground: s, ...a } = e;
    return (0, i.jsxs)("svg", {
        ...(0, c.A)(a),
        width: t,
        height: n,
        viewBox: "0 0 12 12",
        children: [
            (0, i.jsx)("path", {
                className: s,
                d: "M7.00168 1.08381C7.00168 0.485238 6.51645 0 5.91788 0C5.31931 0 4.83408 0.485238 4.83408 1.08381V2.18568C4.83408 2.78425 5.31931 3.26949 5.91788 3.26949C6.51645 3.26949 7.00168 2.78425 7.00168 2.18568V1.08381Z",
                fill: r,
            }),
            (0, i.jsx)("path", {
                className: s,
                d: "M7.00159 9.81428C7.00159 9.21571 6.51636 8.73047 5.91779 8.73047C5.31922 8.73047 4.83398 9.21571 4.83398 9.81428V10.9161C4.83398 11.5147 5.31922 12 5.91779 12C6.51636 12 7.00159 11.5147 7.00159 10.9161V9.81428Z",
                fill: r,
            }),
            (0, i.jsx)("path", {
                className: s,
                d: "M10.9162 7.10561C11.5148 7.10561 12 6.62037 12 6.0218C12 5.42323 11.5148 4.93799 10.9162 4.93799H9.81433C9.21576 4.93799 8.73053 5.42323 8.73053 6.0218C8.73053 6.62037 9.21576 7.10561 9.81433 7.10561H10.9162Z",
                fill: r,
            }),
            (0, i.jsx)("path", {
                className: s,
                d: "M2.18573 7.04555C2.7843 7.04555 3.26953 6.56031 3.26953 5.96174C3.26953 5.36317 2.7843 4.87793 2.18573 4.87793H1.08386C0.485292 4.87793 5.67436e-05 5.36317 5.67436e-05 5.96174C5.67436e-05 6.56031 0.485292 7.04555 1.08386 7.04555H2.18573Z",
                fill: r,
            }),
        ],
    });
}
function h(e) {
    let { width: t = 10, height: n = 10, color: r = "currentColor", foreground: s, ...a } = e;
    return (0, i.jsx)("svg", {
        ...(0, c.A)(a),
        width: t,
        height: n,
        viewBox: "0 0 10 10",
        children: (0, i.jsx)("path", {
            className: s,
            d: "M4.59185 1.69642L1.32007 0.0611887C1.14437 -0.00404167 0.953613 -0.0174513 0.770466 0.0225611C0.587319 0.0625734 0.419488 0.154328 0.286908 0.286908C0.154328 0.419488 0.0625738 0.587318 0.0225614 0.770466C-0.0174511 0.953613 -0.00404127 1.14437 0.0611893 1.32007L1.69642 4.59185C1.78832 4.83513 1.78825 5.10365 1.69623 5.34698L0.122153 8.68254C0.0375916 8.84984 0.00799916 9.03955 0.0375831 9.2246C0.0671671 9.40965 0.154425 9.58061 0.286913 9.7131C0.419402 9.84559 0.59035 9.93283 0.775402 9.96242C0.960453 9.992 1.15016 9.96241 1.31746 9.87785L4.65302 8.30377C4.89635 8.21175 5.16487 8.21168 5.40815 8.30358L8.67993 9.93881C8.85563 10.004 9.04639 10.0175 9.22953 9.97744C9.41268 9.93743 9.58051 9.84567 9.71309 9.71309C9.84567 9.58051 9.93743 9.41268 9.97744 9.22953C10.0175 9.04639 10.004 8.85563 9.93881 8.67993L8.30358 5.40815C8.24152 5.292 8.20906 5.16233 8.2091 5.03061C8.20913 4.89889 8.24165 4.7692 8.30377 4.65302L9.87785 1.31746C9.96241 1.15016 9.992 0.960453 9.96242 0.775401C9.93283 0.59035 9.84559 0.419401 9.7131 0.286913C9.58061 0.154424 9.40965 0.0671663 9.2246 0.0375824C9.03955 0.00799847 8.84984 0.037591 8.68254 0.122152L5.34698 1.69623C5.2308 1.75835 5.10111 1.79087 4.96939 1.7909C4.83767 1.79094 4.708 1.75848 4.59185 1.69642Z",
            fill: r,
        }),
    });
}
var f = n(124767);
let E = {
        config: { friction: 26, tension: 700, mass: 1 },
        initial: { scale: 1, opacity: 1 },
        from: { scale: 0.6, opacity: 0 },
        enter: { scale: 1, opacity: 1 },
        leave: { scale: 0.6, opacity: 0 },
    },
    p = r.memo(function (e) {
        let {
                ref: t,
                className: n,
                disabled: r = !1,
                childClassName: s,
                iconClassName: c,
                icon: p,
                children: m,
                onClick: g,
                onDoubleClick: A,
                isActive: I,
                onMouseEnter: T,
                onMouseLeave: S,
                onFocus: N,
                onBlur: C,
                pulse: y,
                sparkle: v,
                notification: R,
                "aria-label": O,
                "aria-expanded": b,
                "aria-haspopup": L,
                "aria-controls": D,
                noHover: P,
            } = e,
            w = (0, l.p)(null != m, { ...E, keys: (e) => (e ? "children" : "icon") }),
            M = (e) => {
                let { component: t } = e;
                return null != R
                    ? (0, i.jsxs)("div", {
                          className: f.IO,
                          children: [
                              (0, i.jsx)(d.Ay, {
                                  className: f.SA,
                                  mask: d.hW.CHAT_INPUT_BUTTON_NOTIFICATION,
                                  width: 20,
                                  height: 20,
                                  children: t,
                              }),
                              (0, i.jsx)("span", { className: f.T3 }),
                          ],
                      })
                    : t;
            };
        return (0, i.jsxs)(u.D, {
            innerRef: t,
            "aria-label": O,
            "aria-expanded": b,
            "aria-haspopup": L,
            "aria-controls": D,
            "aria-disabled": r,
            tabIndex: r ? -1 : 0,
            className: a()(n, f.x6, { [f.vu]: I, [f.CK]: P, [f.s0]: y, [f.r9]: r }),
            onClick: r ? void 0 : g,
            onDoubleClick: r ? void 0 : A,
            onMouseEnter: T,
            onMouseLeave: S,
            onFocus: N,
            onBlur: C,
            focusProps: { offset: { top: 4, bottom: 4 } },
            children: [
                w((e, t, n) => {
                    let { key: r } = n;
                    return t
                        ? (0, i.jsx)(
                              o.animated.div,
                              { style: e, className: a()(f._o, s), children: M({ component: m }) },
                              r,
                          )
                        : null != p
                          ? (0, i.jsx)(
                                o.animated.div,
                                {
                                    style: e,
                                    className: a()(f._o, s),
                                    children: M({
                                        component: (0, i.jsx)(p, {
                                            className: a()(f.Kk, c, { [f.d1]: y }),
                                            color: "currentColor",
                                        }),
                                    }),
                                },
                                r,
                            )
                          : void 0;
                }),
                v &&
                    (0, i.jsxs)("div", {
                        className: f.YX,
                        children: [(0, i.jsx)(h, { className: f.XR }), (0, i.jsx)(_, { className: f.Hv })],
                    }),
            ],
        });
    });
