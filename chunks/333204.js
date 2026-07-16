n.d(t, { V: () => E, _: () => v });
var i = n(627968),
    l = n(64700),
    a = n(17928),
    s = n(866665),
    r = n(939249),
    o = n(176781),
    c = n(789645),
    d = n(834730),
    u = n(243721),
    p = n(517461),
    h = n(780964),
    m = n(766075),
    A = n(272812),
    x = n(915725),
    g = n(572164),
    f = n(430795),
    C = n(118328),
    y = n(679865),
    j = n(253146);
function v() {
    let [e, t] = (0, p.V)("clips-video-call-tile-dismissed", !1),
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
        className: y.VP,
        children: [
            (0, i.jsx)(s.m, {
                asContainer: !0,
                text: "Clips settings",
                children: (0, i.jsx)(r.D, {
                    onClick: function () {
                        (0, m.openUserSettings)(h.X.CLIPS_PANEL);
                    },
                    className: y.F1,
                    children: (0, i.jsx)("div", {
                        className: y.zc,
                        children: (0, i.jsx)(o.x, { size: "custom", color: "currentColor", width: 40, height: 40 }),
                    }),
                }),
            }),
            (0, i.jsx)(r.D, {
                className: y.b,
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
        [p, h] = l.useState(() => !s);
    s || p || h(!0);
    let m = p || !s,
        C = t >= 300 ? "text-md/medium" : "text-sm/medium";
    return (0, i.jsxs)(A.A, {
        className: y.zr,
        children: [
            (0, i.jsx)("div", { className: y.D7, "aria-hidden": !0 }),
            (0, i.jsx)(r.D, {
                className: y.b,
                onClick: n,
                "aria-label": "Close",
                children: (0, i.jsx)(c.P, { size: "sm", color: "currentColor" }),
            }),
            (0, i.jsx)("img", { className: y.Qw, src: j, alt: "" }),
            (0, i.jsxs)(d.E, {
                className: y.pG,
                variant: C,
                color: "text-default",
                children: [
                    "Automatically capture key gaming moments. ",
                    (0, i.jsx)(d.E, { tag: "span", variant: C, color: "text-link", children: "Learn more" }),
                ],
            }),
            (0, i.jsx)("div", {
                className: y.wq,
                children: (0, i.jsx)(u.d, {
                    label: m ? "Enable Clipping & Autoclipping" : "Enable Autoclipping",
                    checked: m ? s && o : o,
                    onChange: function (e) {
                        m && (0, f.yO)({ clipsEnabled: e, trackAnalytics: !0 }), (0, f.uL)(e);
                    },
                }),
            }),
        ],
    });
}
