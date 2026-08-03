"use strict";
n.d(t, { openUploadError: () => m, D: () => T });
var i = n(477900);
n(582128);
var r = n(192308),
    a = n(189213),
    s = n(523527),
    l = n(17928),
    o = n(967198),
    d = n(676279),
    c = n(453771),
    u = n(975571),
    _ = n(831318),
    E = n(652215),
    A = n(375708);
let h = function (e) {
    let { handleLearnMore: t, kestrelBeta: n, kestrelGA: r, effectiveMaxSize: a, ...s } = e,
        h = (0, l.bG)([o.A], () => o.A.getGuildId()),
        I = (0, c.Iu)({
            guildId: h,
            maxSize: a,
            hideLearnMore: !0 === r,
            onClick: () => {
                window.open(u.A.getArticleURL(E.MVz.NITRO_FAQ), "_blank");
            },
        }),
        f = (0, d.TM)()
            ? "https://cdn.discordapp.com/assets/content/951fb14c4f181e23caa1730b070ffd1b04bf13850e686221fc596c3d7fd7b234.mov"
            : "https://cdn.discordapp.com/assets/content/cedc17f03dee621e55eb1b301c68372f08ac64f32ce656ac5b9cbc0fc0d149f0.webm";
    return (0, i.jsx)(_.A, {
        title: A.intl.string(A.t["9C+41g"]),
        subtitle: I,
        graphic: { type: "video", src: f, loop: !0, loopAt: 2.1 },
        secondaryCTA: A.intl.string(A.t.ZnqyZ2),
        onSecondaryClick: t,
        badgeType: !0 === n ? "beta" : null,
        ...s,
    });
};
var I = n(976860),
    f = n(174459);
function p(e) {
    let {
        title: t,
        help: n,
        showPremiumUpsell: r,
        kestrelBeta: l,
        kestrelGA: o,
        effectiveMaxSize: d,
        transitionState: c,
        onClose: u,
    } = e;
    if (r)
        return (0, i.jsx)(h, {
            transitionState: c,
            onClose: u,
            handleLearnMore: function () {
                (0, s.A)(),
                    u(),
                    f.default.track(E.HAw.PREMIUM_PROMOTION_OPENED, {
                        location_section: E.JJy.FILE_UPLOAD_UPSELL_MODAL,
                        location_object: E.ZSU.NAVIGATION_LINK,
                    }),
                    (0, I.pX)(E.BVt.APPLICATION_STORE);
            },
            kestrelBeta: l,
            kestrelGA: o,
            effectiveMaxSize: d,
        });
    let _ = !0 === l ? A.intl.string(A.t.bRYgjH) : t;
    return (0, i.jsx)(a.Modal, {
        title: _,
        subtitle: n,
        transitionState: c,
        actions: [{ text: A.intl.string(A.t["NX+WJN"]), onClick: u, variant: "primary" }],
        onClose: u,
    });
}
let T = "UPLOAD_ERROR_MODAL_KEY";
function m(e) {
    (0, r.openModal)((t) => (0, i.jsx)(p, { ...t, ...e }), { modalKey: T });
}
