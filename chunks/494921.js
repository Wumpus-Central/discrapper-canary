"use strict";
n.d(t, { openUploadError: () => I, D: () => A });
var i = n(627968);
n(64700);
var r = n(192308),
    s = n(189213),
    a = n(523527),
    o = n(17928),
    l = n(967198),
    u = n(676279),
    c = n(453771),
    d = n(975571),
    _ = n(831318),
    f = n(652215),
    h = n(375708);
let p = (e) => {
    let { handleLearnMore: t, kestrelTreated: n, effectiveMaxSize: r, ...s } = e,
        a = (0, o.bG)([l.A], () => l.A.getGuildId()),
        p = (0, c.Iu)({
            guildId: a,
            maxSize: r,
            onClick: () => {
                window.open(d.A.getArticleURL(f.MVz.NITRO_FAQ), "_blank");
            },
        }),
        E = (0, u.TM)()
            ? "https://cdn.discordapp.com/assets/content/951fb14c4f181e23caa1730b070ffd1b04bf13850e686221fc596c3d7fd7b234.mov"
            : "https://cdn.discordapp.com/assets/content/cedc17f03dee621e55eb1b301c68372f08ac64f32ce656ac5b9cbc0fc0d149f0.webm";
    return (0, i.jsx)(_.A, {
        title: h.intl.string(h.t["9C+41g"]),
        subtitle: p,
        graphic: { type: "video", src: E, loop: !0, loopAt: 2.1 },
        secondaryCTA: h.intl.string(h.t.ZnqyZ2),
        onSecondaryClick: t,
        badgeType: !0 === n ? "beta" : null,
        ...s,
    });
};
var E = n(976860),
    m = n(174459);
function g(e) {
    let {
        title: t,
        help: n,
        showPremiumUpsell: r,
        kestrelTreated: o,
        effectiveMaxSize: l,
        transitionState: u,
        onClose: c,
    } = e;
    if (r)
        return (0, i.jsx)(p, {
            transitionState: u,
            onClose: c,
            handleLearnMore: () => {
                (0, a.A)(),
                    c(),
                    m.default.track(f.HAw.PREMIUM_PROMOTION_OPENED, {
                        location_section: f.JJy.FILE_UPLOAD_UPSELL_MODAL,
                        location_object: f.ZSU.NAVIGATION_LINK,
                    }),
                    (0, E.pX)(f.BVt.APPLICATION_STORE);
            },
            kestrelTreated: o,
            effectiveMaxSize: l,
        });
    let d = !0 === o ? h.intl.string(h.t.bRYgjH) : t;
    return (0, i.jsx)(s.Modal, {
        title: d,
        subtitle: n,
        transitionState: u,
        actions: [{ text: h.intl.string(h.t["NX+WJN"]), onClick: c, variant: "primary" }],
        onClose: c,
    });
}
let A = "UPLOAD_ERROR_MODAL_KEY";
function I(e) {
    (0, r.openModal)((t) => (0, i.jsx)(g, { ...t, ...e }), { modalKey: A });
}
