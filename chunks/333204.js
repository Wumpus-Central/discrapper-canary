n.d(t, { V: () => N, _: () => E });
var i = n(477900),
    l = n(582128),
    a = n(17928),
    s = n(866665),
    r = n(939249),
    o = n(176781),
    c = n(789645),
    d = n(834730),
    u = n(243721),
    h = n(517461),
    p = n(793574),
    m = n(780964),
    A = n(766075),
    f = n(272812),
    x = n(915725),
    g = n(572164),
    C = n(693117),
    y = n(118328),
    j = n(300913),
    v = n(253146);
function E() {
    let [e, t] = (0, h.V)("clips-video-call-tile-dismissed", !1),
        n = l.useCallback(() => {
            t(!0);
        }, [t]),
        i = (0, y.A)("useIsClipsVideoCallTileVisible"),
        [a] = l.useState(() => !(0, g.TD)() || !x.Ay.getEnableAutoclipping());
    return [i && !e && a, n];
}
function N(e) {
    let { width: t, handleClose: n } = e;
    return t < 250 ? (0, i.jsx)(I, { handleClose: n }) : (0, i.jsx)(b, { width: t, handleClose: n });
}
function I(e) {
    let { handleClose: t } = e;
    return (0, i.jsxs)(f.A, {
        className: j.VP,
        children: [
            (0, i.jsx)(s.m, {
                asContainer: !0,
                text: "Clips settings",
                children: (0, i.jsx)(r.D, {
                    onClick: function () {
                        (0, A.openUserSettings)(m.X.CLIPS_PANEL);
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
function b(e) {
    let { width: t, handleClose: n } = e,
        s = (0, g.Et)(),
        o = (0, a.bG)([x.Ay], () => x.Ay.getEnableAutoclipping()),
        [h, m] = l.useState(() => !s);
    s || h || m(!0);
    let A = h || !s,
        y = t >= 300 ? "text-md/medium" : "text-sm/medium";
    return (0, i.jsxs)(f.A, {
        className: j.zr,
        children: [
            (0, i.jsx)("div", { className: j.D7, "aria-hidden": !0 }),
            (0, i.jsx)(r.D, {
                className: j.b,
                onClick: n,
                "aria-label": "Close",
                children: (0, i.jsx)(c.P, { size: "sm", color: "currentColor" }),
            }),
            (0, i.jsx)("img", { className: j.Qw, src: v, alt: "" }),
            (0, i.jsxs)(d.E, {
                className: j.pG,
                variant: y,
                color: "text-default",
                children: [
                    "Automatically capture key gaming moments. ",
                    (0, i.jsx)(d.E, { tag: "span", variant: y, color: "text-link", children: "Learn more" }),
                ],
            }),
            (0, i.jsx)("div", {
                className: j.wq,
                children: (0, i.jsx)(u.d, {
                    label: A ? "Enable Clipping & Autoclipping" : "Enable Autoclipping",
                    checked: A ? s && o : o,
                    onChange: function (e) {
                        A &&
                            (0, C.yO)({
                                clipsEnabled: e,
                                trackAnalytics: !0,
                                analyticsLocation: p.A.CLIPS_VIDEO_CALL_TILE,
                            }),
                            (0, C.uL)(e, !0, p.A.CLIPS_VIDEO_CALL_TILE);
                    },
                }),
            }),
        ],
    });
}
