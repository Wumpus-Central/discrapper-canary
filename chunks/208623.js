"use strict";
n.d(t, { A: () => P });
var r = n(627968),
    i = n(64700),
    s = n(687498),
    a = n(158954),
    o = n(311907),
    l = n(475743),
    u = n(133636),
    c = n(816758),
    d = n(257044),
    _ = n(178090),
    f = n(683926),
    p = n(346640),
    h = n(429311),
    m = n(985018),
    E = n(814608),
    g = n(787212),
    A = n(524794),
    I = n(260405),
    T = n(649747),
    S = n(80465);
let y = 80,
    v = 40,
    N = 12,
    C = 4,
    R = 34;
function O(e) {
    let { iconSrc: t, ariaLabel: n, onClick: s } = e,
        [a, o] = (0, i.useState)(!1);
    return (0, r.jsxs)("div", {
        className: E.x6,
        onMouseEnter: () => o(!0),
        onMouseLeave: () => o(!1),
        children: [
            (0, r.jsx)(f.A, { visible: a, text: n }),
            (0, r.jsx)(d.A, {
                contentClassName: E.IO,
                onClick: s,
                "aria-label": n,
                children: (0, r.jsx)("img", { src: t, alt: "", className: E.iA }),
            }),
        ],
    });
}
function b(e) {
    let { xp: t, asset: n } = e,
        [s] = (0, i.useState)(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(c.A, {
                className: E.Cg,
                children: (0, r.jsxs)(_.A, { variant: "heading-xxl/normal", children: ["+", s, " XP"] }),
            }),
            (0, r.jsx)("img", { src: n, alt: "", className: E.Ei }),
        ],
    });
}
function D() {
    let e = (0, o.bG)([u.A], () => u.A.getLastXPGains()),
        t = Object.keys(e),
        { craftingClass: n, combatClass: i } = (0, o.cf)([u.A], () => ({
            craftingClass: u.A.getCraftingClass(),
            combatClass: u.A.getCombatClass(),
        })),
        l = null != n ? p.zX[n].asset : I.A,
        c = null != i ? p.P6[i].asset : T.A,
        d = (0, a.pnh)(t, {
            from: { opacity: 0, transform: "translateX(-20px)" },
            enter: { opacity: 1, transform: "translateX(0px)" },
            leave: { opacity: 0, transform: "translateX(-20px)" },
            trail: 200,
        });
    return (0, r.jsx)("div", {
        className: E.NL,
        children: d((t, n) => {
            let i = n === p.$p.GATHERING ? A.A : n === p.$p.CRAFTING ? l : c;
            return (0, r.jsx)(s.animated.div, {
                className: E.ww,
                style: t,
                children: (0, r.jsx)(b, { xp: e[n] ?? 0, asset: i }),
            });
        }),
    });
}
let L = 1.5,
    w = 100;
function M(e) {
    return Math.floor(w * Math.pow(e, L));
}
function x() {
    let e = (0, o.bG)([u.A], () => u.A.getXP()),
        t = (0, o.bG)([u.A], () => u.A.getLevel()),
        n = M(t),
        c = M(t + 1) - n,
        d = (e - n) / c,
        f = (0, l.A)(d) ?? 0,
        p = (0, i.useRef)(null),
        [h] = (0, a.zhh)(() => ({ ref: p, strokeDashoffset: 2 * Math.PI * R * (1 - d) }));
    return (
        (0, i.useEffect)(() => {
            (async () => {
                d < f &&
                    (await p.current?.start({ strokeDashoffset: 2 * Math.PI * R * 0 }),
                    await p.current?.start({ strokeDashoffset: 2 * Math.PI * R * 1, immediate: !0 })),
                    p.current?.start({ strokeDashoffset: 2 * Math.PI * R * (1 - d) });
            })();
        }, [d, f]),
        (0, r.jsxs)("svg", {
            className: E.s4,
            xmlns: "http://www.w3.org/2000/svg",
            width: y,
            height: y,
            fill: "none",
            children: [
                (0, r.jsx)("rect", {
                    x: v - R,
                    y: v - R,
                    width: 2 * R,
                    height: 2 * R,
                    fill: "#FFF",
                    rx: "50%",
                    ry: "50%",
                }),
                (0, r.jsx)("circle", { cx: v, cy: v, r: R, stroke: "#000", strokeWidth: N }),
                (0, r.jsx)(s.animated.circle, {
                    cx: v,
                    cy: v,
                    r: R,
                    stroke: "#FFF",
                    strokeWidth: C,
                    strokeDasharray: 2 * Math.PI * R,
                    transform: `rotate(-90 ${v} ${v})`,
                    style: h,
                }),
                (0, r.jsx)("path", {
                    d: "M66.8549 24.9124C66.8549 26.464 67.0485 29.5994 67.3917 31.4062C67.7856 33.4801 67.7349 38.1698 67.3946 41.0398C67.2272 42.4518 66.1745 43.6781 65.4397 44.8528C64.7545 45.9483 64.1213 47.1978 63.3382 48.3725C62.5551 49.5472 61.7749 50.911 60.6031 52.379C58.7352 54.7191 57.3753 56.2903 56.3003 57.2215C55.0711 58.2864 53.9553 59.1295 52.7807 60.0079C51.7286 60.7946 50.4357 61.3762 49.261 62.3544C48.2825 63.1691 46.7224 63.4293 45.2046 64.0174C43.7977 64.5625 42.8097 65.2889 41.635 65.9239C40.5311 66.5206 39.29 66.7554 38.1154 67.147C36.9407 67.5385 35.5768 67.7351 34.3024 68.0269C32.938 68.3393 31.3708 68.5152 29.4658 68.6634C28.7191 68.7214 27.9479 68.9083 27.4566 68.9083C26.1873 68.9083 29.8925 68.4214 31.0672 68.0298C32.2162 67.6468 33.4122 67.5415 34.5869 66.9065C35.6908 66.3097 36.9319 66.0749 38.5934 65.9268C39.9077 65.8097 41.6189 65.0014 43.0928 64.4618C44.3931 63.9856 45.4377 62.9483 46.6124 62.457C47.7548 61.9793 48.9574 61.6754 49.8887 60.7969C50.812 59.9259 52.1838 59.4286 52.8716 58.4021C53.6228 57.2809 54.8235 56.4956 55.9498 55.664C57.065 54.8408 57.6627 53.6622 58.5896 52.731C59.5674 51.7485 60.8832 50.5356 61.6708 49.2612C62.4428 48.0119 63.3294 47.1098 63.7254 46.0348C64.1951 44.7596 65.189 43.6898 65.9237 42.5151C66.5891 41.4512 66.9488 40.1702 67.3917 38.9955C67.5383 37.8208 68.122 36.6505 68.3699 35.2324C68.4183 34.8877 68.515 34.5973 68.9081 33.7116",
                    stroke: "black",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                }),
                (0, r.jsx)("path", {
                    d: "M64.4439 25.7688C64.4439 26.791 64.5407 27.9657 64.5663 32.6916C64.4439 34.2718 64.3471 35.1517 64.2488 35.739C64.2004 35.8864 64.1036 36.0316 64.0039 36.3278",
                    stroke: "black",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                }),
                (0, r.jsx)("foreignObject", {
                    x: 0,
                    y: 0,
                    width: y,
                    height: y,
                    children: (0, r.jsx)(_.A, { className: E.WB, variant: "heading-xxl/bold", children: t }),
                }),
            ],
        })
    );
}
function P(e) {
    let { setScreen: t } = e;
    return (0, r.jsxs)("div", {
        className: E.iE,
        children: [
            (0, r.jsx)(D, {}),
            (0, r.jsxs)(c.A, {
                className: E.nd,
                children: [
                    (0, r.jsx)(x, {}),
                    (0, r.jsx)(O, {
                        iconSrc: S.A,
                        ariaLabel: m.intl.string(h.default.JRs3DC),
                        onClick: () => t(p.Q0.STATS),
                    }),
                    (0, r.jsx)(O, {
                        iconSrc: g.A,
                        ariaLabel: m.intl.string(h.default.xE3lEA),
                        onClick: () => t(p.Q0.ACHIEVEMENTS),
                    }),
                ],
            }),
        ],
    });
}
