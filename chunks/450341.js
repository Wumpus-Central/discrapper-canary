i.d(e, { default: () => R });
var n = i(477900);
i(582128);
var o = i(87719),
    a = i(620295),
    s = i(772707),
    c = i(403581),
    r = i(964486),
    l = i(793574),
    d = i(688810),
    u = i(495867),
    _ = i(129230),
    p = i(448645),
    b = i(739053),
    A = i(82498),
    U = i(423814),
    D = i(77528),
    E = i(783420),
    L = i(572079),
    O = i(511484),
    M = i(682901),
    g = i(652215),
    C = i(792996);
let f = M.pe.TIER_2,
    I = { page: g.liQ.PREMIUM_UPSELL_MODAL_VIDEO_BACKGROUNDS, object: g.ZSU.BUTTON_CTA };
function k(t) {
    let { analyticsSource: e, subtitle: i, onViewAllPerks: o, onClose: a, ...k } = t,
        S = (0, D.V)(),
        v = (0, p.LE)(S, f),
        R = (0, U.O)(),
        { analyticsLocations: y } = (0, d.Ay)(l.A.PREMIUM_UPSELL_MODAL),
        T = C.intl.string(C.t.pj0XBN);
    null != v
        ? (T = v)
        : (0, O.U9)(R, f) && null != R && (T = C.intl.formatToPlainString(C.t.bkQ4bH, { percent: R.discount.amount }));
    let { buttonText: P, disabled: h } = (0, L.A)({ subscriptionTier: f, buttonTextOverride: T });
    return (
        (0, r.Ay)(() => {
            (_.default.track(g.HAw.PREMIUM_UPSELL_VIEWED, {
                type: M.e.VIDEO_BACKGROUNDS_MODAL,
                source: e,
                location: I,
                location_stack: y,
                sku_id: f,
                voice_guild_id: u.A.getGuildId() ?? null,
            }),
                (0, b.sq)(g.U7l.PREMIUM_UPSELL_VIEWED, y, () => (0, A.uq)(M.e.VIDEO_BACKGROUNDS_MODAL)));
        }),
        (0, n.jsx)(E.A, {
            subscriptionTier: f,
            premiumModalAnalyticsLocation: I,
            onClick: a,
            children: (t) => {
                let { onClick: e } = t;
                return (0, n.jsx)(s.k, {
                    ...k,
                    onClose: a,
                    title: C.intl.string(C.t.fHqiDW),
                    subtitle: i,
                    graphic: {
                        type: "image",
                        src: "https://cdn.discordapp.com/assets/content/bb6cef786066b656da1254585792bb6df2c9a0e7f8b2ad8518df13427536644c.svg",
                    },
                    gradientColor: "nitro-pink",
                    badge: null != v ? { type: "free_trial", variant: "expressive" } : void 0,
                    actions: [
                        { text: C.intl.string(C.t.ZnqyZ2), variant: "secondary", size: "md", onClick: o },
                        { text: P, variant: "expressive", size: "md", icon: c.NitroWheelIcon, disabled: h, onClick: e },
                    ],
                });
            },
        })
    );
}
var S = i(945240),
    v = i(960329);
function R(t) {
    let { onClose: e, analyticsSource: i, onLearnMore: s, ...c } = t,
        r = a.R.useConfig({ location: "video_background_roadblock" });
    function l() {
        (s?.(), e(), (0, o.e)());
    }
    let d = M.pe.TIER_2,
        u = C.intl.format(C.t.hDMlqD, { onLearnMore: l });
    return r
        ? (0, n.jsx)(k, { ...c, onClose: e, analyticsSource: i, subtitle: u, onViewAllPerks: l })
        : (0, n.jsx)(S.A, {
              artURL: "https://cdn.discordapp.com/assets/content/2d563ce5f261ca4793e70ca87ccd10fd2b224ba302a5cd36414a5e4b4a374725.svg",
              artContainerClassName: v.z,
              type: M.e.VIDEO_BACKGROUNDS_MODAL,
              title: C.intl.string(C.t.fHqiDW),
              body: u,
              glowUp: u,
              analyticsSource: i,
              analyticsLocation: { page: g.liQ.PREMIUM_UPSELL_MODAL_VIDEO_BACKGROUNDS, object: g.ZSU.BUTTON_CTA },
              onClose: e,
              subscriptionTier: d,
              ...c,
          });
}
