t.d(e, { Premium3PRewardsModalEntry: () => C });
var i = t(477900);
t(582128);
var r = t(325499),
    n = t(289873),
    a = t(189213),
    l = t(975571),
    d = t(792656),
    c = t(962644),
    o = t(35587),
    u = t(593687),
    h = t(194261),
    m = t(297264),
    b = t(144165),
    x = t(375708),
    j = t(428685),
    p = t(341973);
function f() {
    return (0, i.jsx)("div", {
        className: p.lA,
        children: (0, i.jsxs)("div", {
            className: p.LV,
            children: [
                (0, i.jsxs)("div", {
                    className: p.JN,
                    children: [
                        (0, i.jsx)("div", {
                            className: p.MC,
                            children: (0, i.jsx)(h.LockIcon, { size: "refresh_sm" }),
                        }),
                        (0, i.jsxs)("div", {
                            className: p.yO,
                            children: [
                                (0, i.jsx)(m.D, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: x.intl.string(j.default.oDfh3O),
                                }),
                                (0, i.jsx)(m.D, {
                                    variant: "heading-sm/medium",
                                    color: "text-subtle",
                                    children: x.intl.string(j.default.nDEuO1),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: p.R4,
                    children: (0, i.jsx)(b._, {
                        src: "https://cdn.discordapp.com/assets/content/7ce3849519c8d8cd4657b08bd2c689ea934bb60f53b959a04eb3b1db5d2f002a.png",
                        className: p.Ys,
                        width: 100,
                        height: 100,
                        zoomable: !1,
                        imageClassName: p.EM,
                    }),
                }),
            ],
        }),
    });
}
var v = t(294219),
    N = t(202541),
    g = t(652215);
function k(s) {
    let { transitionState: e, onClose: t, partnerIds: h } = s,
        m = (0, v.G)(h, { isLockedCardView: !0 }),
        { promotionsLoaded: b } = (0, o.y7)(),
        p = (0, r.b)("Premium3PRewardsLockedModal");
    if (!1 === b) return (0, i.jsx)(n.y, {});
    let k = l.A.getArticleURL(g.MVz.NITRO_2_POINT_0),
        w = p ? f : null;
    return (0, i.jsxs)(a.Modal, {
        title: x.intl.string(x.t.NG1e6l),
        subtitle: x.intl.format(j.default.zS4GBR, { termsLink: k }),
        actions: [],
        preview: (0, i.jsx)(d.A, {
            subscriptionTier: N.pe.TIER_2,
            fullWidth: !0,
            onClick: () => {
                t();
            },
            onSubscribeModalClose: (s) => {
                if (s) return c.Ay.fetchActivePromotions();
            },
        }),
        transitionState: e,
        onClose: t,
        children: [null != w && (0, i.jsx)(w, {}), (0, i.jsx)(u._, { partnerIds: m })],
    });
}
var w = t(161319);
function C(s) {
    let { transitionState: e, onClose: t, partnerIds: n, isLocked: a } = s,
        l = (0, r.b)("NitroRewards3PRewardsModalEntry");
    return a && l
        ? (0, i.jsx)(k, { transitionState: e, onClose: t, partnerIds: n })
        : (0, i.jsx)(w.w, { transitionState: e, onClose: t, partnerIds: n, isLocked: a });
}
