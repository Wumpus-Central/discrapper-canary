n.d(e, { openUploadError: () => M, D: () => L });
var o = n(627968);
n(64700);
var c = n(192308),
    i = n(189213),
    a = n(523527),
    r = n(17928),
    s = n(967198),
    l = n(676279),
    d = n(453771),
    p = n(975571),
    b = n(831318),
    f = n(652215),
    A = n(375708);
let _ = (t) => {
    let { handleLearnMore: e, kestrelTreated: n, effectiveMaxSize: c, ...i } = t,
        a = (0, r.bG)([s.A], () => s.A.getGuildId()),
        _ = (0, d.Iu)({
            guildId: a,
            maxSize: c,
            onClick: () => {
                window.open(p.A.getArticleURL(f.MVz.NITRO_FAQ), "_blank");
            },
        }),
        u = (0, l.TM)()
            ? "https://cdn.discordapp.com/assets/content/951fb14c4f181e23caa1730b070ffd1b04bf13850e686221fc596c3d7fd7b234.mov"
            : "https://cdn.discordapp.com/assets/content/cedc17f03dee621e55eb1b301c68372f08ac64f32ce656ac5b9cbc0fc0d149f0.webm";
    return (0, o.jsx)(b.A, {
        title: A.intl.string(A.t["9C+41g"]),
        subtitle: _,
        graphic: { type: "video", src: u, loop: !0, loopAt: 2.1 },
        secondaryCTA: A.intl.string(A.t.ZnqyZ2),
        onSecondaryClick: e,
        badgeType: !0 === n ? "beta" : null,
        ...i,
    });
};
var u = n(976860),
    O = n(174459);
function I(t) {
    let {
        title: e,
        help: n,
        showPremiumUpsell: c,
        kestrelTreated: r,
        effectiveMaxSize: s,
        transitionState: l,
        onClose: d,
    } = t;
    if (c)
        return (0, o.jsx)(_, {
            transitionState: l,
            onClose: d,
            handleLearnMore: () => {
                (0, a.A)(),
                    d(),
                    O.default.track(f.HAw.PREMIUM_PROMOTION_OPENED, {
                        location_section: f.JJy.FILE_UPLOAD_UPSELL_MODAL,
                        location_object: f.ZSU.NAVIGATION_LINK,
                    }),
                    (0, u.pX)(f.BVt.APPLICATION_STORE);
            },
            kestrelTreated: r,
            effectiveMaxSize: s,
        });
    let p = !0 === r ? A.intl.string(A.t.bRYgjH) : e;
    return (0, o.jsx)(i.Modal, {
        title: p,
        subtitle: n,
        transitionState: l,
        actions: [{ text: A.intl.string(A.t["NX+WJN"]), onClick: d, variant: "primary" }],
        onClose: d,
    });
}
let L = "UPLOAD_ERROR_MODAL_KEY";
function M(t) {
    (0, c.openModal)((e) => (0, o.jsx)(I, { ...e, ...t }), { modalKey: L });
}
