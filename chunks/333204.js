n.d(t, { V: () => E, _: () => v });
var i = n(627968),
    l = n(64700),
    a = n(17928),
    s = n(990078),
    r = n(939249),
    o = n(176781),
    c = n(789645),
    d = n(834730),
    u = n(243721),
    h = n(517461),
    p = n(780964),
    m = n(766075),
    A = n(272812),
    x = n(915725),
    g = n(572164),
    f = n(430795),
    C = n(118328),
    j = n(679865),
    y = n(253146);
function v() {
    let [e, t] = (0, h.V)("clips-video-call-tile-dismissed", !1),
        n = l.useCallback(() => {
            t(!0);
        }, [t]),
        i = (0, C.A)("useIsClipsVideoCallTileVisible"),
        [a] = l.useState(() => !(0, g.TD)() || !x.Ay.getEnableAutoclipping());
    return [i && !e && a, n];
}
function E(e) {
    let { width: t, handleClose: n } = e;
    return t < 250 ? (0, i.jsx)(N, { handleClose: n }) : (0, i.jsx)(I, { width: t, handleClose: n });
}
function N(e) {
    let { handleClose: t } = e;
    return (0, i.jsxs)(A.A, {
        className: j.VP,
        children: [
            (0, i.jsx)(s.m, {
                asContainer: !0,
                text: "Clips settings",
                children: (0, i.jsx)(r.D, {
                    onClick: () => {
                        (0, m.openUserSettings)(p.X.CLIPS_PANEL);
                    },
                    className: j.F1,
                    children: (0, i.jsx)("div", {
                        className: j.zc,
                        children: (0, i.jsx)(o.x, { size: "custom", color: "currentColor", width: 40, height: 40 }),
                    }),
                }),
            }),
            (0, i.jsx)(r.D, {
                className: j.b,
                onClick: t,
                "aria-label": "Close",
                children: (0, i.jsx)(c.P, { size: "sm", color: "currentColor" }),
            }),
        ],
    });
}
function I(e) {
    let { width: t, handleClose: n } = e,
        s = (0, g.Et)(),
        o = (0, a.bG)([x.Ay], () => x.Ay.getEnableAutoclipping()),
        [h, p] = l.useState(() => !s);
    s || h || p(!0);
    let m = h || !s,
        C = t >= 300 ? "text-md/medium" : "text-sm/medium";
    return (0, i.jsxs)(A.A, {
        className: j.zr,
        children: [
            (0, i.jsx)("div", { className: j.D7, "aria-hidden": !0 }),
            (0, i.jsx)(r.D, {
                className: j.b,
                onClick: n,
                "aria-label": "Close",
                children: (0, i.jsx)(c.P, { size: "sm", color: "currentColor" }),
            }),
            (0, i.jsx)("img", { className: j.Qw, src: y, alt: "" }),
            (0, i.jsxs)(d.E, {
                className: j.pG,
                variant: C,
                color: "text-default",
                children: [
                    "Automatically capture key gaming moments. ",
                    (0, i.jsx)(d.E, { tag: "span", variant: C, color: "text-link", children: "Learn more" }),
                ],
            }),
            (0, i.jsx)("div", {
                className: j.wq,
                children: (0, i.jsx)(u.d, {
                    label: m ? "Enable Clipping & Autoclipping" : "Enable Autoclipping",
                    checked: m ? s && o : o,
                    onChange: (e) => {
                        m && (0, f.yO)({ clipsEnabled: e, trackAnalytics: !0 }), (0, f.uL)(e);
                    },
                }),
            }),
        ],
    });
}
