"use strict";
n.d(t, { openUploadError: () => m, D: () => T });
var i = n(627968);
n(64700);
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
    let { handleLearnMore: t, kestrelTreated: n, effectiveMaxSize: r, ...a } = e,
        s = (0, l.bG)([o.A], () => o.A.getGuildId()),
        h = (0, c.Iu)({
            guildId: s,
            maxSize: r,
            onClick: () => {
                window.open(u.A.getArticleURL(E.MVz.NITRO_FAQ), "_blank");
            },
        }),
        I = (0, d.TM)()
            ? "https://cdn.discordapp.com/assets/content/951fb14c4f181e23caa1730b070ffd1b04bf13850e686221fc596c3d7fd7b234.mov"
            : "https://cdn.discordapp.com/assets/content/cedc17f03dee621e55eb1b301c68372f08ac64f32ce656ac5b9cbc0fc0d149f0.webm";
    return (0, i.jsx)(_.A, {
        title: A.intl.string(A.t["9C+41g"]),
        subtitle: h,
        graphic: { type: "video", src: I, loop: !0, loopAt: 2.1 },
        secondaryCTA: A.intl.string(A.t.ZnqyZ2),
        onSecondaryClick: t,
        badgeType: !0 === n ? "beta" : null,
        ...a,
    });
};
var I = n(976860),
    f = n(174459);
function p(e) {
    let {
        title: t,
        help: n,
        showPremiumUpsell: r,
        kestrelTreated: l,
        effectiveMaxSize: o,
        transitionState: d,
        onClose: c,
    } = e;
    if (r)
        return (0, i.jsx)(h, {
            transitionState: d,
            onClose: c,
            handleLearnMore: function () {
                (0, s.A)(),
                    c(),
                    f.default.track(E.HAw.PREMIUM_PROMOTION_OPENED, {
                        location_section: E.JJy.FILE_UPLOAD_UPSELL_MODAL,
                        location_object: E.ZSU.NAVIGATION_LINK,
                    }),
                    (0, I.pX)(E.BVt.APPLICATION_STORE);
            },
            kestrelTreated: l,
            effectiveMaxSize: o,
        });
    let u = !0 === l ? A.intl.string(A.t.bRYgjH) : t;
    return (0, i.jsx)(a.Modal, {
        title: u,
        subtitle: n,
        transitionState: d,
        actions: [{ text: A.intl.string(A.t["NX+WJN"]), onClick: c, variant: "primary" }],
        onClose: c,
    });
}
let T = "UPLOAD_ERROR_MODAL_KEY";
function m(e) {
    (0, r.openModal)((t) => (0, i.jsx)(p, { ...t, ...e }), { modalKey: T });
}
