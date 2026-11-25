var i = n(477900);
n(582128);
var s = n(206248),
    l = n(403581),
    r = n(423814),
    a = n(77528),
    o = n(783420),
    c = n(448645),
    u = n(652215),
    d = n(682901),
    m = n(792996);
let f = { object: u.ZSU.BUTTON_CTA, section: u.JJy.SUPER_REACTION_PICKER };
n.d(
    t,
    {},
    {
        A: function (e) {
            let { targetElementRef: t, shouldShow: n, onDismiss: u } = e,
                E = m.intl.string(m.t.eikz43),
                I = (0, a.V)(),
                h = (0, r.O)(),
                g = I?.subscriptionTrial,
                A = null != g || null != h,
                p = g?.skuId ?? d.pe.TIER_2,
                _ = A
                    ? null != h
                        ? m.intl.formatToPlainString(m.t.bkQ4bH, { percent: h.discount.amount })
                        : (0, c.FY)({ intervalType: g?.interval, intervalCount: g?.intervalCount })
                    : m.intl.string(m.t.sEAnVH);
            return (0, i.jsx)(o.A, {
                subscriptionTier: p,
                premiumModalAnalyticsLocation: f,
                onSubscribeModalClose: (e) => {
                    e && u();
                },
                children: (e) => {
                    let { onClick: r } = e;
                    return (0, i.jsx)(s.H, {
                        targetElementRef: t,
                        shouldShow: n,
                        onRequestClose: u,
                        position: "bottom",
                        assetUrl: "https://cdn.discordapp.com/assets/22_211_SuperReactions_GTM_Hero_v09.mp4",
                        disableMediaViewer: !0,
                        badge: A ? { type: "free_trial", variant: "expressive" } : void 0,
                        title: m.intl.string(m.t.N4SCJ0),
                        body: E,
                        action: { text: _, variant: "expressive", icon: l.NitroWheelIcon, onClick: r },
                    });
                },
            });
        },
    },
);
