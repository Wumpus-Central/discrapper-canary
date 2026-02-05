"use strict";
n.d(t, { A: () => I });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(47762),
    l = n(990078),
    u = n(397927),
    c = n(573435),
    d = n(409626),
    _ = n(692969),
    f = n(424225),
    p = n(14532);
let h = 10,
    m = 2;
function g(e) {
    let { game: t, activityLevel: n, hideTooltip: i } = e,
        a = t.getIconURL(24),
        s = (0, f.$)(),
        g = (0, _.A)({
            location: "GuildProfile",
            source: d.Ob.GuildProfile,
            trackEntryPointImpression: !0,
            applicationId: t.id,
        });
    if (null == a) return null;
    let E = !i,
        A = n?.level === o._.HIGH,
        I = (0, r.jsx)(u.Text, { variant: "text-sm/medium", color: "interactive-text-active", children: t.name }),
        T = (0, r.jsx)(l.m, {
            __unsupportedReactNodeAsText: I,
            position: "bottom",
            "aria-label": t.name,
            shouldShow: E,
            children: (0, r.jsxs)("div", {
                className: p.Gt,
                children: [
                    (0, r.jsx)("img", { className: p.T_, src: a, alt: t.name }),
                    A &&
                        (0, r.jsx)(c.Ay, {
                            mask: c.hW.GAMEPLAY_HIGH_ACTIVITY_ICON,
                            width: h + 2 * m,
                            height: h + 2 * m,
                            className: p.Sy,
                            children: (0, r.jsx)("div", {
                                className: p._8,
                                children: (0, r.jsx)(u.Y3C, {
                                    color: u.LU0.unsafe_rawColors.ORANGE_330.css,
                                    width: h,
                                    height: h,
                                    size: "custom",
                                }),
                            }),
                        }),
                ],
            }),
        });
    return s ? (0, r.jsx)(u.DUT, { onClick: g, className: p.f9, children: T }) : T;
}
function E(e) {
    let { games: t, activity: n } = e;
    return (0, r.jsx)("div", {
        className: p.Fz,
        children: t.map((e) =>
            (0, r.jsxs)(
                "div",
                {
                    className: p.ZS,
                    children: [
                        (0, r.jsx)(g, { game: e, activityLevel: n[e.id] }),
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
function A(e) {
    let { game: t, activityLevel: n } = e;
    return (0, r.jsxs)("div", {
        className: p.E,
        children: [
            (0, r.jsx)(g, { game: t, activityLevel: n, hideTooltip: !0 }),
            (0, r.jsx)(u.Text, { variant: "text-sm/medium", color: "text-default", children: t.name }),
        ],
    });
}
function I(e) {
    let { gamesToDisplay: t, lastGameToDisplay: n, remainingGames: a, activity: o } = e,
        c = i.useMemo(() => {
            if (null == n) return null;
            let e = n.getIconURL(24);
            if (null == e) return null;
            if (0 === a.length) return (0, r.jsx)(g, { game: n, activityLevel: o[n.id] });
            let t = a;
            return (0, r.jsx)(l.m, {
                "aria-label": "",
                position: "bottom",
                __unsupportedReactNodeAsText: (0, r.jsx)(E, { games: t, activity: o }),
                children: (0, r.jsxs)("div", {
                    className: s()(p.Gt, p.oL),
                    children: [
                        (0, r.jsx)("img", { className: s()(p.T_, p.tJ), src: e, alt: n.name }),
                        (0, r.jsx)("div", { className: p.Fg }),
                        (0, r.jsx)("div", {
                            className: p.AZ,
                            children: (0, r.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                color: "always-white",
                                children: `+${t.length}`,
                            }),
                        }),
                    ],
                }),
            });
        }, [n, a, o]);
    return null == t || 0 === t.length
        ? null
        : 1 === t.length
          ? (0, r.jsx)("div", { className: p.kL, children: (0, r.jsx)(A, { game: t[0], activityLevel: o[t[0].id] }) })
          : (0, r.jsxs)("div", {
                className: p.kL,
                children: [t.map((e) => (0, r.jsx)(g, { game: e, activityLevel: o[e.id] }, e.id)), c],
            });
}
