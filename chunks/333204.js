n.d(t, { V: () => N, _: () => E });
var i = n(627968),
    l = n(64700),
    a = n(17928),
    s = n(990078),
    r = n(939249),
    o = n(176781),
    c = n(789645),
    d = n(834730),
    u = n(243721),
    p = n(517461),
    h = n(780964),
    m = n(766075),
    A = n(272812),
    x = n(274372),
    g = n(430795),
    f = n(118328),
    C = n(679865),
    y = n(253146);
function E() {
    let [e, t] = (0, p.V)("clips-video-call-tile-dismissed", !1),
        n = l.useCallback(() => {
            t(!0);
        }, [t]),
        i = (0, f.A)("useIsClipsVideoCallTileVisible"),
        [a] = l.useState(() => !x.Ay.getState().clipsSettings.clipsEnabled || !x.Ay.getEnableAutoclipping());
    return [i && !e && a, n];
}
function N(e) {
    let { width: t, handleClose: n } = e;
    return t < 250 ? (0, i.jsx)(j, { handleClose: n }) : (0, i.jsx)(v, { width: t, handleClose: n });
}
function j(e) {
    let { handleClose: t } = e;
    return (0, i.jsxs)(A.A, {
        className: C.VP,
        children: [
            (0, i.jsx)(s.m, {
                asContainer: !0,
                text: "Clips settings",
                children: (0, i.jsx)(r.D, {
                    onClick: () => {
                        (0, m.openUserSettings)(h.X.CLIPS_PANEL);
                    },
                    className: C.F1,
                    children: (0, i.jsx)("div", {
                        className: C.zc,
                        children: (0, i.jsx)(o.x, { size: "custom", color: "currentColor", width: 40, height: 40 }),
                    }),
                }),
            }),
            (0, i.jsx)(r.D, {
                className: C.b,
                onClick: t,
                "aria-label": "Close",
                children: (0, i.jsx)(c.P, { size: "sm", color: "currentColor" }),
            }),
        ],
    });
}
function v(e) {
    let { width: t, handleClose: n } = e,
        s = (0, a.bG)([x.Ay], () => x.Ay.getState().clipsSettings.clipsEnabled),
        o = (0, a.bG)([x.Ay], () => x.Ay.getEnableAutoclipping()),
        [p, h] = l.useState(() => !s);
    s || p || h(!0);
    let m = p || !s,
        f = t >= 300 ? "text-md/medium" : "text-sm/medium";
    return (0, i.jsxs)(A.A, {
        className: C.zr,
        children: [
            (0, i.jsx)("div", { className: C.D7, "aria-hidden": !0 }),
            (0, i.jsx)(r.D, {
                className: C.b,
                onClick: n,
                "aria-label": "Close",
                children: (0, i.jsx)(c.P, { size: "sm", color: "currentColor" }),
            }),
            (0, i.jsx)("img", { className: C.Qw, src: y, alt: "" }),
            (0, i.jsxs)(d.E, {
                className: C.pG,
                variant: f,
                color: "text-default",
                children: [
                    "Automatically capture key gaming moments. ",
                    (0, i.jsx)(d.E, { tag: "span", variant: f, color: "text-link", children: "Learn more" }),
                ],
            }),
            (0, i.jsx)("div", {
                className: C.wq,
                children: (0, i.jsx)(u.d, {
                    label: m ? "Enable Clipping & Autoclipping" : "Enable Autoclipping",
                    checked: m ? s && o : o,
                    onChange: (e) => {
                        m && (0, g.yO)({ clipsEnabled: e, trackAnalytics: !0 }), (0, g.uL)(e);
                    },
                }),
            }),
        ],
    });
}
