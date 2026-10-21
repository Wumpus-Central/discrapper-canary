n.d(t, { V: () => b, _: () => E });
var i = n(477900),
    l = n(582128),
    a = n(866665),
    s = n(939249),
    r = n(176781),
    o = n(789645),
    c = n(834730),
    d = n(193249),
    u = n(517461),
    h = n(793574),
    p = n(780964),
    m = n(766075),
    A = n(272812),
    f = n(975571),
    x = n(572164),
    g = n(614584),
    C = n(118328),
    j = n(652215),
    y = n(268378),
    I = n(105292),
    N = n(771124),
    v = n(253146);
function E() {
    let [e, t] = (0, u.V)("clips-video-call-tile-dismissed", !1),
        n = l.useCallback(() => {
            t(!0);
        }, [t]),
        i = (0, C.A)("useIsClipsVideoCallTileVisible"),
        [a] = l.useState(() => !(0, x.T)());
    return [i && !e && a, n];
}
function b(e) {
    let { width: t, handleClose: n } = e;
    return t < 250 ? (0, i.jsx)(S, { handleClose: n }) : (0, i.jsx)(_, { width: t, handleClose: n });
}
function S(e) {
    let { handleClose: t } = e;
    return (0, i.jsxs)(A.A, {
        className: N.VP,
        children: [
            (0, i.jsx)(a.m, {
                asContainer: !0,
                text: I.intl.string(I.t.J1hsY2),
                children: (0, i.jsx)(s.D, {
                    onClick: function () {
                        (0, m.openUserSettings)(p.X.CLIPS_PANEL);
                    },
                    className: N.F1,
                    children: (0, i.jsx)("div", {
                        className: N.zc,
                        children: (0, i.jsx)(r.x, { size: "custom", color: "currentColor", width: 40, height: 40 }),
                    }),
                }),
            }),
            (0, i.jsx)(s.D, {
                className: N.b,
                onClick: t,
                "aria-label": "Close",
                children: (0, i.jsx)(o.P, { size: "sm", color: "currentColor" }),
            }),
        ],
    });
}
function _(e) {
    let { width: t, handleClose: n } = e,
        l = (0, x.E)();
    return (0, i.jsxs)(A.A, {
        className: N.zr,
        children: [
            (0, i.jsx)("div", { className: N.D7, "aria-hidden": !0 }),
            (0, i.jsx)(s.D, {
                className: N.b,
                onClick: n,
                "aria-label": "Close",
                children: (0, i.jsx)(o.P, { size: "sm", color: "currentColor" }),
            }),
            (0, i.jsx)("img", { className: N.Qw, src: v, alt: "" }),
            (0, i.jsx)(c.E, {
                className: N.pG,
                variant: t >= 300 ? "text-md/medium" : "text-sm/medium",
                color: "text-default",
                children: I.intl.format(y.default.GqojUr, { learnMoreLink: f.A.getArticleURL(j.MVz.CLIPS) }),
            }),
            (0, i.jsx)("div", {
                className: N.wq,
                children: (0, i.jsx)(d.d, {
                    label: I.intl.string(y.default.oaIXoz),
                    checked: l,
                    onChange: function (e) {
                        (0, g.yO)({
                            clipsEnabled: e,
                            trackAnalytics: !0,
                            analyticsLocation: h.A.CLIPS_VIDEO_CALL_TILE,
                        });
                    },
                }),
            }),
        ],
    });
}
