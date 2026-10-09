n.d(t, { V: () => S, _: () => _ });
var i = n(477900),
    l = n(582128),
    a = n(17928),
    s = n(866665),
    r = n(939249),
    o = n(176781),
    c = n(789645),
    d = n(834730),
    u = n(193249),
    h = n(517461),
    p = n(793574),
    m = n(780964),
    A = n(766075),
    f = n(272812),
    x = n(975571),
    g = n(915725),
    C = n(572164),
    j = n(614584),
    y = n(118328),
    I = n(652215),
    N = n(268378),
    E = n(660183),
    v = n(771124),
    b = n(253146);
function _() {
    let [e, t] = (0, h.V)("clips-video-call-tile-dismissed", !1),
        n = l.useCallback(() => {
            t(!0);
        }, [t]),
        i = (0, y.A)("useIsClipsVideoCallTileVisible"),
        [a] = l.useState(() => !(0, C.T)() || !g.Ay.getEnableAutoclipping());
    return [i && !e && a, n];
}
function S(e) {
    let { width: t, handleClose: n } = e;
    return t < 250 ? (0, i.jsx)(T, { handleClose: n }) : (0, i.jsx)(R, { width: t, handleClose: n });
}
function T(e) {
    let { handleClose: t } = e;
    return (0, i.jsxs)(f.A, {
        className: v.VP,
        children: [
            (0, i.jsx)(s.m, {
                asContainer: !0,
                text: E.intl.string(E.t.J1hsY2),
                children: (0, i.jsx)(r.D, {
                    onClick: function () {
                        (0, A.openUserSettings)(m.X.CLIPS_PANEL);
                    },
                    className: v.F1,
                    children: (0, i.jsx)("div", {
                        className: v.zc,
                        children: (0, i.jsx)(o.x, { size: "custom", color: "currentColor", width: 40, height: 40 }),
                    }),
                }),
            }),
            (0, i.jsx)(r.D, {
                className: v.b,
                onClick: t,
                "aria-label": "Close",
                children: (0, i.jsx)(c.P, { size: "sm", color: "currentColor" }),
            }),
        ],
    });
}
function R(e) {
    let { width: t, handleClose: n } = e,
        s = (0, C.E)(),
        o = (0, a.bG)([g.Ay], () => g.Ay.getEnableAutoclipping()),
        [h, m] = l.useState(() => !s);
    s || h || m(!0);
    let A = h || !s,
        y = A ? E.intl.string(N.default.oaIXoz) : E.intl.string(N.default.DpZqVj);
    return (0, i.jsxs)(f.A, {
        className: v.zr,
        children: [
            (0, i.jsx)("div", { className: v.D7, "aria-hidden": !0 }),
            (0, i.jsx)(r.D, {
                className: v.b,
                onClick: n,
                "aria-label": "Close",
                children: (0, i.jsx)(c.P, { size: "sm", color: "currentColor" }),
            }),
            (0, i.jsx)("img", { className: v.Qw, src: b, alt: "" }),
            (0, i.jsx)(d.E, {
                className: v.pG,
                variant: t >= 300 ? "text-md/medium" : "text-sm/medium",
                color: "text-default",
                children: E.intl.format(N.default.GqojUr, { learnMoreLink: x.A.getArticleURL(I.MVz.CLIPS) }),
            }),
            (0, i.jsx)("div", {
                className: v.wq,
                children: (0, i.jsx)(u.d, {
                    label: y,
                    checked: A ? s && o : o,
                    onChange: function (e) {
                        (A &&
                            (0, j.yO)({
                                clipsEnabled: e,
                                trackAnalytics: !0,
                                analyticsLocation: p.A.CLIPS_VIDEO_CALL_TILE,
                            }),
                            (0, j.uL)(e, !0, p.A.CLIPS_VIDEO_CALL_TILE));
                    },
                }),
            }),
        ],
    });
}
