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
    let { handleLearnMore: t, ...n } = e,
        r = (0, o.bG)([l.A], () => l.A.getGuildId()),
        s = (0, c.Iu)({
            guildId: r,
            onClick: () => {
                window.open(d.A.getArticleURL(f.MVz.NITRO_FAQ), "_blank");
            },
        }),
        a = (0, u.TM)()
            ? "https://cdn.discordapp.com/assets/content/951fb14c4f181e23caa1730b070ffd1b04bf13850e686221fc596c3d7fd7b234.mov"
            : "https://cdn.discordapp.com/assets/content/cedc17f03dee621e55eb1b301c68372f08ac64f32ce656ac5b9cbc0fc0d149f0.webm";
    return (0, i.jsx)(_.A, {
        title: h.intl.string(h.t["9C+41g"]),
        subtitle: s,
        graphic: { type: "video", src: a, loop: !0, loopAt: 2.1 },
        secondaryCTA: h.intl.string(h.t.ZnqyZ2),
        onSecondaryClick: t,
        ...n,
    });
};
var E = n(976860),
    m = n(174459);
function g(e) {
    let { title: t, help: n, showPremiumUpsell: r, transitionState: o, onClose: l } = e;
    return r
        ? (0, i.jsx)(p, {
              transitionState: o,
              onClose: l,
              handleLearnMore: () => {
                  (0, a.A)(),
                      l(),
                      m.default.track(f.HAw.PREMIUM_PROMOTION_OPENED, {
                          location_section: f.JJy.FILE_UPLOAD_UPSELL_MODAL,
                          location_object: f.ZSU.NAVIGATION_LINK,
                      }),
                      (0, E.pX)(f.BVt.APPLICATION_STORE);
              },
          })
        : (0, i.jsx)(s.Modal, {
              title: t,
              subtitle: n,
              transitionState: o,
              actions: [{ text: h.intl.string(h.t["NX+WJN"]), onClick: l, variant: "primary" }],
              onClose: l,
          });
}
let A = "UPLOAD_ERROR_MODAL_KEY";
function I(e) {
    (0, r.openModal)((t) => (0, i.jsx)(g, { ...t, ...e }), { modalKey: A });
}
