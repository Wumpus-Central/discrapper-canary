n.d(e, { openUploadError: () => k, D: () => M });
var o = n(477900);
n(582128);
var i = n(192308),
    c = n(189213),
    a = n(523527),
    r = n(17928),
    s = n(967198),
    l = n(676279),
    d = n(453771),
    p = n(975571),
    b = n(831318),
    f = n(652215),
    A = n(375708);
let u = function (t) {
    let { handleLearnMore: e, kestrelBeta: n, kestrelGA: i, effectiveMaxSize: c, ...a } = t,
        u = (0, r.bG)([s.A], () => s.A.getGuildId()),
        _ = (0, d.Iu)({
            guildId: u,
            maxSize: c,
            hideLearnMore: !0 === i,
            onClick: () => {
                window.open(p.A.getArticleURL(f.MVz.NITRO_FAQ), "_blank");
            },
        }),
        O = (0, l.TM)()
            ? "https://cdn.discordapp.com/assets/content/951fb14c4f181e23caa1730b070ffd1b04bf13850e686221fc596c3d7fd7b234.mov"
            : "https://cdn.discordapp.com/assets/content/cedc17f03dee621e55eb1b301c68372f08ac64f32ce656ac5b9cbc0fc0d149f0.webm";
    return (0, o.jsx)(b.A, {
        title: A.intl.string(A.t["9C+41g"]),
        subtitle: _,
        graphic: { type: "video", src: O, loop: !0, loopAt: 2.1 },
        secondaryCTA: A.intl.string(A.t.ZnqyZ2),
        onSecondaryClick: e,
        badgeType: !0 === n ? "beta" : null,
        ...a,
    });
};
var _ = n(976860),
    O = n(174459);
function L(t) {
    let {
        title: e,
        help: n,
        showPremiumUpsell: i,
        kestrelBeta: r,
        kestrelGA: s,
        effectiveMaxSize: l,
        transitionState: d,
        onClose: p,
    } = t;
    if (i)
        return (0, o.jsx)(u, {
            transitionState: d,
            onClose: p,
            handleLearnMore: function () {
                (0, a.A)(),
                    p(),
                    O.default.track(f.HAw.PREMIUM_PROMOTION_OPENED, {
                        location_section: f.JJy.FILE_UPLOAD_UPSELL_MODAL,
                        location_object: f.ZSU.NAVIGATION_LINK,
                    }),
                    (0, _.pX)(f.BVt.APPLICATION_STORE);
            },
            kestrelBeta: r,
            kestrelGA: s,
            effectiveMaxSize: l,
        });
    let b = !0 === r ? A.intl.string(A.t.bRYgjH) : e;
    return (0, o.jsx)(c.Modal, {
        title: b,
        subtitle: n,
        transitionState: d,
        actions: [{ text: A.intl.string(A.t["NX+WJN"]), onClick: p, variant: "primary" }],
        onClose: p,
    });
}
let M = "UPLOAD_ERROR_MODAL_KEY";
function k(t) {
    (0, i.openModal)((e) => (0, o.jsx)(L, { ...e, ...t }), { modalKey: M });
}
