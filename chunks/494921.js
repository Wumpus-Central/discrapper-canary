c.d(e, { openUploadError: () => y, D: () => S });
var n = c(477900);
c(582128);
var i = c(189213),
    o = c(192308),
    a = c(523527),
    s = c(17928),
    _ = c(964486),
    l = c(793574),
    d = c(688810),
    L = c(763827),
    r = c(967198),
    A = c(174459),
    E = c(676279),
    p = c(453771),
    P = c(158045),
    u = c(10392),
    f = c(82498),
    I = c(831318),
    U = c(202541),
    O = c(652215),
    M = c(660183);
let b = function (t) {
    let { handleLearnMore: e, effectiveMaxSize: c, ...i } = t,
        o = (0, s.bG)([r.A], () => r.A.getGuildId()),
        { analyticsLocations: a } = (0, d.Ay)(l.A.FILE_UPLOAD_POPOUT, l.A.PREMIUM_UPSELL_MODAL);
    (0, _.Ay)(() => {
        (A.default.track(O.HAw.PREMIUM_UPSELL_VIEWED, {
            type: U.e.LARGER_FILE_UPLOAD_UPSELL,
            location_section: O.JJy.FILE_UPLOAD_UPSELL_MODAL,
            location_stack: a,
            sku_id: (0, P.mH)(U.pe.TIER_2),
            voice_guild_id: L.A.getGuildId() ?? null,
        }),
            (0, u.sq)(O.U7l.PREMIUM_UPSELL_VIEWED, a, () => (0, f.uq)(U.e.LARGER_FILE_UPLOAD_UPSELL)));
    });
    let b = (0, p.Iu)({ guildId: o, maxSize: c }),
        D = (0, E.TM)()
            ? "https://cdn.discordapp.com/assets/content/951fb14c4f181e23caa1730b070ffd1b04bf13850e686221fc596c3d7fd7b234.mov"
            : "https://cdn.discordapp.com/assets/content/cedc17f03dee621e55eb1b301c68372f08ac64f32ce656ac5b9cbc0fc0d149f0.webm";
    return (0, n.jsx)(d.f5, {
        value: a,
        children: (0, n.jsx)(I.A, {
            title: M.intl.string(M.t["9C+41g"]),
            subtitle: b,
            graphic: { type: "video", src: D, loop: !0, loopAt: 2.1 },
            secondaryCTA: M.intl.string(M.t.ZnqyZ2),
            onSecondaryClick: e,
            ...i,
        }),
    });
};
var D = c(976860);
function R(t) {
    let { title: e, help: c, showPremiumUpsell: o, effectiveMaxSize: s, transitionState: _, onClose: l } = t;
    return o
        ? (0, n.jsx)(b, {
              transitionState: _,
              onClose: l,
              handleLearnMore: function () {
                  ((0, a.A)(),
                      l(),
                      A.default.track(O.HAw.PREMIUM_PROMOTION_OPENED, {
                          location_section: O.JJy.FILE_UPLOAD_UPSELL_MODAL,
                          location_object: O.ZSU.NAVIGATION_LINK,
                      }),
                      (0, D.pX)(O.BVt.APPLICATION_STORE));
              },
              effectiveMaxSize: s,
          })
        : (0, n.jsx)(i.a, {
              title: e,
              subtitle: c,
              transitionState: _,
              actions: [{ text: M.intl.string(M.t["NX+WJN"]), onClick: l, variant: "primary" }],
              onClose: l,
          });
}
let S = "UPLOAD_ERROR_MODAL_KEY";
function y(t) {
    (0, o.openModal)((e) => (0, n.jsx)(R, { ...e, ...t }), { modalKey: S });
}
