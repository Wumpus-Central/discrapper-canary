n.d(t, { V: () => _, _: () => T });
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
    f = n(766075),
    A = n(272812),
    x = n(975571),
    g = n(915725),
    C = n(572164),
    y = n(539572),
    j = n(118328),
    I = n(652215),
    N = n(711918),
    v = n(375708),
    E = n(771124),
    b = n(253146);
function T() {
    let [e, t] = (0, h.V)("clips-video-call-tile-dismissed", !1),
        n = l.useCallback(() => {
            t(!0);
        }, [t]),
        i = (0, j.A)("useIsClipsVideoCallTileVisible"),
        [a] = l.useState(() => !(0, C.TD)() || !g.Ay.getEnableAutoclipping());
    return [i && !e && a, n];
}
function _(e) {
    let { width: t, handleClose: n } = e;
    return t < 250 ? (0, i.jsx)(R, { handleClose: n }) : (0, i.jsx)(S, { width: t, handleClose: n });
}
function R(e) {
    let { handleClose: t } = e;
    return (0, i.jsxs)(A.A, {
        className: E.VP,
        children: [
            (0, i.jsx)(s.m, {
                asContainer: !0,
                text: v.intl.string(v.t.J1hsY2),
                children: (0, i.jsx)(r.D, {
                    onClick: function () {
                        (0, f.openUserSettings)(m.X.CLIPS_PANEL);
                    },
                    className: E.F1,
                    children: (0, i.jsx)("div", {
                        className: E.zc,
                        children: (0, i.jsx)(o.x, { size: "custom", color: "currentColor", width: 40, height: 40 }),
                    }),
                }),
            }),
            (0, i.jsx)(r.D, {
                className: E.b,
                onClick: t,
                "aria-label": "Close",
                children: (0, i.jsx)(c.P, { size: "sm", color: "currentColor" }),
            }),
        ],
    });
}
function S(e) {
    let { width: t, handleClose: n } = e,
        s = (0, C.Et)(),
        o = (0, a.bG)([g.Ay], () => g.Ay.getEnableAutoclipping()),
        [h, m] = l.useState(() => !s);
    s || h || m(!0);
    let f = h || !s,
        j = f ? v.intl.string(N.default.oaIXoz) : v.intl.string(N.default.DpZqVj);
    return (0, i.jsxs)(A.A, {
        className: E.zr,
        children: [
            (0, i.jsx)("div", { className: E.D7, "aria-hidden": !0 }),
            (0, i.jsx)(r.D, {
                className: E.b,
                onClick: n,
                "aria-label": "Close",
                children: (0, i.jsx)(c.P, { size: "sm", color: "currentColor" }),
            }),
            (0, i.jsx)("img", { className: E.Qw, src: b, alt: "" }),
            (0, i.jsx)(d.E, {
                className: E.pG,
                variant: t >= 300 ? "text-md/medium" : "text-sm/medium",
                color: "text-default",
                children: v.intl.format(N.default.GqojUr, { learnMoreLink: x.A.getArticleURL(I.MVz.CLIPS) }),
            }),
            (0, i.jsx)("div", {
                className: E.wq,
                children: (0, i.jsx)(u.d, {
                    label: j,
                    checked: f ? s && o : o,
                    onChange: function (e) {
                        f &&
                            (0, y.yO)({
                                clipsEnabled: e,
                                trackAnalytics: !0,
                                analyticsLocation: p.A.CLIPS_VIDEO_CALL_TILE,
                            }),
                            (0, y.uL)(e, !0, p.A.CLIPS_VIDEO_CALL_TILE);
                    },
                }),
            }),
        ],
    });
}
