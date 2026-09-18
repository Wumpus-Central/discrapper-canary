n.d(e, { openUploadError: () => L, D: () => I });
var c = n(477900);
n(582128);
var o = n(192308),
    i = n(189213),
    a = n(523527),
    s = n(17928),
    r = n(967198),
    d = n(676279),
    l = n(453771),
    p = n(831318),
    f = n(375708);
let b = function (t) {
    let { handleLearnMore: e, effectiveMaxSize: n, ...o } = t,
        i = (0, s.bG)([r.A], () => r.A.getGuildId()),
        a = (0, l.Iu)({ guildId: i, maxSize: n }),
        b = (0, d.TM)()
            ? "https://cdn.discordapp.com/assets/content/951fb14c4f181e23caa1730b070ffd1b04bf13850e686221fc596c3d7fd7b234.mov"
            : "https://cdn.discordapp.com/assets/content/cedc17f03dee621e55eb1b301c68372f08ac64f32ce656ac5b9cbc0fc0d149f0.webm";
    return (0, c.jsx)(p.A, {
        title: f.intl.string(f.t["9C+41g"]),
        subtitle: a,
        graphic: { type: "video", src: b, loop: !0, loopAt: 2.1 },
        secondaryCTA: f.intl.string(f.t.ZnqyZ2),
        onSecondaryClick: e,
        ...o,
    });
};
var u = n(976860),
    A = n(174459),
    _ = n(652215);
function O(t) {
    let { title: e, help: n, showPremiumUpsell: o, effectiveMaxSize: s, transitionState: r, onClose: d } = t;
    return o
        ? (0, c.jsx)(b, {
              transitionState: r,
              onClose: d,
              handleLearnMore: function () {
                  ((0, a.A)(),
                      d(),
                      A.default.track(_.HAw.PREMIUM_PROMOTION_OPENED, {
                          location_section: _.JJy.FILE_UPLOAD_UPSELL_MODAL,
                          location_object: _.ZSU.NAVIGATION_LINK,
                      }),
                      (0, u.pX)(_.BVt.APPLICATION_STORE));
              },
              effectiveMaxSize: s,
          })
        : (0, c.jsx)(i.Modal, {
              title: e,
              subtitle: n,
              transitionState: r,
              actions: [{ text: f.intl.string(f.t["NX+WJN"]), onClick: d, variant: "primary" }],
              onClose: d,
          });
}
let I = "UPLOAD_ERROR_MODAL_KEY";
function L(t) {
    (0, o.openModal)((e) => (0, c.jsx)(O, { ...e, ...t }), { modalKey: I });
}
