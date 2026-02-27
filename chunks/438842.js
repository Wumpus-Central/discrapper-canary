"use strict";
n.d(t, { A: () => E });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(47762),
    l = n(990078),
    u = n(397927),
    c = n(573435),
    d = n(14532);
let _ = 10,
    f = 2;
function p(e) {
    let { game: t, activityLevel: n, hideTooltip: i } = e,
        s = t.getIconURL(24);
    if (null == s) return null;
    let a = !i,
        p = n?.level === o._.HIGH,
        h = (0, r.jsx)(u.Text, { variant: "text-sm/medium", color: "interactive-text-active", children: t.name });
    return (0, r.jsx)(l.m, {
        __unsupportedReactNodeAsText: h,
        position: "bottom",
        "aria-label": t.name,
        shouldShow: a,
        children: (0, r.jsxs)("div", {
            className: d.Gt,
            children: [
                (0, r.jsx)("img", { className: d.T_, src: s, alt: t.name }),
                p &&
                    (0, r.jsx)(c.Ay, {
                        mask: c.hW.GAMEPLAY_HIGH_ACTIVITY_ICON,
                        width: _ + 2 * f,
                        height: _ + 2 * f,
                        className: d.Sy,
                        children: (0, r.jsx)("div", {
                            className: d._8,
                            children: (0, r.jsx)(u.Y3C, {
                                color: u.LU0.unsafe_rawColors.ORANGE_330.css,
                                width: _,
                                height: _,
                                size: "custom",
                            }),
                        }),
                    }),
            ],
        }),
    });
}
function h(e) {
    let { games: t, activity: n } = e;
    return (0, r.jsx)("div", {
        className: d.Fz,
        children: t.map((e) =>
            (0, r.jsxs)(
                "div",
                {
                    className: d.ZS,
                    children: [
                        (0, r.jsx)(p, { game: e, activityLevel: n[e.id] }),
                        (0, r.jsx)(u.Text, {
                            variant: "text-xs/medium",
                            color: "interactive-text-active",
                            children: e.name,
                        }),
                    ],
                },
                e.id,
            ),
        ),
    });
}
function m(e) {
    let { game: t, activityLevel: n } = e;
    return (0, r.jsxs)("div", {
        className: d.E,
        children: [
            (0, r.jsx)(p, { game: t, activityLevel: n, hideTooltip: !0 }),
            (0, r.jsx)(u.Text, { variant: "text-sm/medium", color: "text-default", children: t.name }),
        ],
    });
}
function E(e) {
    let { gamesToDisplay: t, lastGameToDisplay: n, remainingGames: s, activity: o } = e,
        c = i.useMemo(() => {
            if (null == n) return null;
            let e = n.getIconURL(24);
            if (null == e) return null;
            if (0 === s.length) return (0, r.jsx)(p, { game: n, activityLevel: o[n.id] });
            let t = s;
            return (0, r.jsx)(l.m, {
                "aria-label": "",
                position: "bottom",
                __unsupportedReactNodeAsText: (0, r.jsx)(h, { games: t, activity: o }),
                children: (0, r.jsxs)("div", {
                    className: a()(d.Gt, d.oL),
                    children: [
                        (0, r.jsx)("img", { className: a()(d.T_, d.tJ), src: e, alt: n.name }),
                        (0, r.jsx)("div", { className: d.Fg }),
                        (0, r.jsx)("div", {
                            className: d.AZ,
                            children: (0, r.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                color: "always-white",
                                children: `+${t.length}`,
                            }),
                        }),
                    ],
                }),
            });
        }, [n, s, o]);
    return null == t || 0 === t.length
        ? null
        : 1 === t.length
          ? (0, r.jsx)("div", { className: d.kL, children: (0, r.jsx)(m, { game: t[0], activityLevel: o[t[0].id] }) })
          : (0, r.jsxs)("div", {
                className: d.kL,
                children: [t.map((e) => (0, r.jsx)(p, { game: e, activityLevel: o[e.id] }, e.id)), c],
            });
}
