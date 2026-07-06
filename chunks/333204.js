n.d(t, { V: () => E, _: () => y });
var i = n(627968),
    l = n(64700),
    a = n(17928),
    s = n(990078),
    r = n(939249),
    o = n(176781),
    c = n(789645),
    d = n(834730),
    u = n(243721),
    p = n(780964),
    h = n(766075),
    m = n(272812),
    A = n(274372),
    x = n(430795),
    g = n(118328),
    f = n(679865),
    C = n(253146);
function y() {
    let [e, t] = l.useState(!1),
        n = l.useCallback(() => {
            t(!0);
        }, [t]);
    return [(0, g.A)("useIsClipsVideoCallTileVisible") && !e, n];
}
function E(e) {
    let { width: t, handleClose: n } = e;
    return t < 250 ? (0, i.jsx)(N, { handleClose: n }) : (0, i.jsx)(j, { width: t, handleClose: n });
}
function N(e) {
    let { handleClose: t } = e;
    return (0, i.jsxs)(m.A, {
        className: f.VP,
        children: [
            (0, i.jsx)(s.m, {
                asContainer: !0,
                text: "Clips settings",
                children: (0, i.jsx)(r.D, {
                    onClick: () => {
                        (0, h.openUserSettings)(p.X.CLIPS_PANEL);
                    },
                    className: f.F1,
                    children: (0, i.jsx)("div", {
                        className: f.zc,
                        children: (0, i.jsx)(o.x, { size: "custom", color: "currentColor", width: 40, height: 40 }),
                    }),
                }),
            }),
            (0, i.jsx)(r.D, {
                className: f.b,
                onClick: t,
                "aria-label": "Close",
                children: (0, i.jsx)(c.P, { size: "sm", color: "currentColor" }),
            }),
        ],
    });
}
function j(e) {
    let { width: t, handleClose: n } = e,
        s = (0, a.bG)([A.Ay], () => A.Ay.getState().clipsSettings.clipsEnabled),
        o = (0, a.bG)([A.Ay], () => A.Ay.getEnableAutoclipping()),
        [p, h] = l.useState(() => !s);
    s || p || h(!0);
    let g = p || !s,
        y = t >= 300 ? "text-md/medium" : "text-sm/medium";
    return (0, i.jsxs)(m.A, {
        className: f.zr,
        children: [
            (0, i.jsx)("div", { className: f.D7, "aria-hidden": !0 }),
            (0, i.jsx)(r.D, {
                className: f.b,
                onClick: n,
                "aria-label": "Close",
                children: (0, i.jsx)(c.P, { size: "sm", color: "currentColor" }),
            }),
            (0, i.jsx)("img", { className: f.Qw, src: C, alt: "" }),
            (0, i.jsxs)(d.E, {
                className: f.pG,
                variant: y,
                color: "text-default",
                children: [
                    "Automatically capture key gaming moments. ",
                    (0, i.jsx)(d.E, { tag: "span", variant: y, color: "text-link", children: "Learn more" }),
                ],
            }),
            (0, i.jsx)("div", {
                className: f.wq,
                children: (0, i.jsx)(u.d, {
                    label: g ? "Enable Clipping & Autoclipping" : "Enable Autoclipping",
                    checked: g ? s && o : o,
                    onChange: (e) => {
                        g && (0, x.yO)({ clipsEnabled: e, trackAnalytics: !0 }), (0, x.uL)(e);
                    },
                }),
            }),
        ],
    });
}
