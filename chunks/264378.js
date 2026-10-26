n.d(t, { A: () => j });
var i = n(477900);
n(582128);
var l = n(503698),
    s = n.n(l),
    r = n(17928),
    a = n(192308),
    o = n(821609),
    u = n(403581),
    c = n(793574),
    d = n(688810),
    m = n(287809),
    p = n(174459),
    g = n(927578),
    x = n(834708),
    f = n(154486);
let h = (0, n(945810).mj)({
    name: "2026-10-hd-streaming-contextual-referrals",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var A = n(232198),
    v = n(652215),
    E = n(105292),
    C = n(890054);
function j(e) {
    let { streamerId: t, idle: n } = e,
        l = (0, r.bG)([m.default], () => m.default.getUser(t) ?? null, [t]),
        s = g.Ay.canStreamQuality(g.Ay.StreamQuality.HIGH, l),
        a = (0, x.d)(l),
        o = h.useConfig({ location: "HD_STREAMING_CONTEXTUAL_UPSELL" }).enabled;
    return null != l && a && !s && o ? (0, i.jsx)(I, { streamer: l, idle: n }) : null;
}
function I(e) {
    let { streamer: t, idle: n } = e;
    return (0, f.p)(t.id) ? (0, i.jsx)(S, { recipient: t, idle: n }) : null;
}
function S(e) {
    let { recipient: t, idle: l } = e,
        { analyticsLocations: r } = (0, d.Ay)(c.A.HD_STREAMING_CONTEXTUAL_UPSELL);
    return (0, i.jsx)("div", {
        className: s()(C.x, { [C.N]: l }),
        children: (0, i.jsx)(o.$, {
            variant: "overlay-primary",
            size: "sm",
            text: E.intl.string(E.t.JSSBzo),
            icon: u.t,
            onClick: function (e) {
                (e.stopPropagation(),
                    p.default.track(v.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: r }),
                    (0, a.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([
                            n.e("768071"),
                            n.e("492599"),
                            n.e("868214"),
                            n.e("661814"),
                            n.e("819305"),
                            n.e("313699"),
                        ]).then(n.bind(n, 536110));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                recipient: t,
                                sourceAnalyticsLocation: c.A.HD_STREAMING_CONTEXTUAL_UPSELL,
                                modalVariant: A.H.HD_STREAMING,
                            });
                    }));
            },
            onDoubleClick: (e) => e.stopPropagation(),
            onMouseDown: (e) => e.stopPropagation(),
        }),
    });
}
