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
    A = n(766075),
    f = n(272812),
    x = n(975571),
    g = n(915725),
    C = n(572164),
    y = n(539572),
    j = n(118328),
    I = n(652215),
    v = n(16590),
    E = n(375708),
    N = n(300913),
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
    return (0, i.jsxs)(f.A, {
        className: N.VP,
        children: [
            (0, i.jsx)(s.m, {
                asContainer: !0,
                text: E.intl.string(E.t.J1hsY2),
                children: (0, i.jsx)(r.D, {
                    onClick: function () {
                        (0, A.openUserSettings)(m.X.CLIPS_PANEL);
                    },
                    className: N.F1,
                    children: (0, i.jsx)("div", {
                        className: N.zc,
                        children: (0, i.jsx)(o.x, { size: "custom", color: "currentColor", width: 40, height: 40 }),
                    }),
                }),
            }),
            (0, i.jsx)(r.D, {
                className: N.b,
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
    let A = h || !s,
        j = A ? E.intl.string(v.default.oaIXoz) : E.intl.string(v.default.DpZqVj);
    return (0, i.jsxs)(f.A, {
        className: N.zr,
        children: [
            (0, i.jsx)("div", { className: N.D7, "aria-hidden": !0 }),
            (0, i.jsx)(r.D, {
                className: N.b,
                onClick: n,
                "aria-label": "Close",
                children: (0, i.jsx)(c.P, { size: "sm", color: "currentColor" }),
            }),
            (0, i.jsx)("img", { className: N.Qw, src: b, alt: "" }),
            (0, i.jsx)(d.E, {
                className: N.pG,
                variant: t >= 300 ? "text-md/medium" : "text-sm/medium",
                color: "text-default",
                children: E.intl.format(v.default.GqojUr, { learnMoreLink: x.A.getArticleURL(I.MVz.CLIPS) }),
            }),
            (0, i.jsx)("div", {
                className: N.wq,
                children: (0, i.jsx)(u.d, {
                    label: j,
                    checked: A ? s && o : o,
                    onChange: function (e) {
                        A &&
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
