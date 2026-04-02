"use strict";
n.d(t, { A: () => A });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(47762),
    l = n(990078),
    u = n(397927),
    c = n(573435),
    d = n(885151),
    _ = n(486020),
    f = n(355345);
let p = 10,
    h = 2;
function m(e) {
    let { game: t, activityLevel: n, hideTooltip: i } = e,
        { data: s } = (0, d.k)(t.id),
        a = s?.iconHash,
        m = null != a ? _.Ay.getGameAssetURL({ id: t.id, hash: a, size: 24 }) : t.getIconURL(24);
    if (null == m) return null;
    let E = !i,
        g = n?.level === o._.HIGH,
        A = (0, r.jsx)(u.Text, { variant: "text-sm/medium", color: "interactive-text-active", children: t.name });
    return (0, r.jsx)(l.m, {
        __unsupportedReactNodeAsText: A,
        position: "bottom",
        "aria-label": t.name,
        shouldShow: E,
        children: (0, r.jsxs)("div", {
            className: f.Gt,
            children: [
                (0, r.jsx)("img", { className: f.T_, src: m, alt: t.name }),
                g &&
                    (0, r.jsx)(c.Ay, {
                        mask: c.hW.GAMEPLAY_HIGH_ACTIVITY_ICON,
                        width: p + 2 * h,
                        height: p + 2 * h,
                        className: f.Sy,
                        children: (0, r.jsx)("div", {
                            className: f._8,
                            children: (0, r.jsx)(u.Y3C, {
                                color: u.LU0.unsafe_rawColors.ORANGE_330.css,
                                width: p,
                                height: p,
                                size: "custom",
                            }),
                        }),
                    }),
            ],
        }),
    });
}
function E(e) {
    let { games: t, activity: n } = e;
    return (0, r.jsx)("div", {
        className: f.Fz,
        children: t.map((e) =>
            (0, r.jsxs)(
                "div",
                {
                    className: f.ZS,
                    children: [
                        (0, r.jsx)(m, { game: e, activityLevel: n[e.id] }),
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
function g(e) {
    let { game: t, activityLevel: n } = e;
    return (0, r.jsxs)("div", {
        className: f.E,
        children: [
            (0, r.jsx)(m, { game: t, activityLevel: n, hideTooltip: !0 }),
            (0, r.jsx)(u.Text, { variant: "text-sm/medium", color: "text-default", children: t.name }),
        ],
    });
}
function A(e) {
    let { gamesToDisplay: t, lastGameToDisplay: n, remainingGames: s, activity: o } = e,
        { data: c } = (0, d.k)(n?.id),
        p = c?.iconHash,
        h = null != p ? _.Ay.getGameAssetURL({ id: n.id, hash: p, size: 24 }) : n?.getIconURL(24),
        A = i.useMemo(() => {
            if (null == n) return null;
            let e = h;
            if (null == e) return null;
            if (0 === s.length) return (0, r.jsx)(m, { game: n, activityLevel: o[n.id] });
            let t = s;
            return (0, r.jsx)(l.m, {
                "aria-label": "",
                position: "bottom",
                __unsupportedReactNodeAsText: (0, r.jsx)(E, { games: t, activity: o }),
                children: (0, r.jsxs)("div", {
                    className: a()(f.Gt, f.oL),
                    children: [
                        (0, r.jsx)("img", { className: a()(f.T_, f.tJ), src: e, alt: n.name }),
                        (0, r.jsx)("div", { className: f.Fg }),
                        (0, r.jsx)("div", {
                            className: f.AZ,
                            children: (0, r.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                color: "always-white",
                                children: `+${t.length}`,
                            }),
                        }),
                    ],
                }),
            });
        }, [n, h, s, o]);
    return null == t || 0 === t.length
        ? null
        : 1 === t.length
          ? (0, r.jsx)("div", { className: f.kL, children: (0, r.jsx)(g, { game: t[0], activityLevel: o[t[0].id] }) })
          : (0, r.jsxs)("div", {
                className: f.kL,
                children: [t.map((e) => (0, r.jsx)(m, { game: e, activityLevel: o[e.id] }, e.id)), A],
            });
}
