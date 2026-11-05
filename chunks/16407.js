c.d(e, { D: () => h, openUploadError: () => k });
var i = c(477900);
c(582128);
var n = c(189213),
    o = c(192308),
    a = c(523527),
    s = c(855986),
    _ = c(964486),
    d = c(793574),
    l = c(688810),
    L = c(495867),
    A = c(967198),
    r = c(129230),
    E = c(676279),
    p = c(453771),
    P = c(722178),
    f = c(739053),
    u = c(82498),
    I = c(831318),
    U = c(682901),
    O = c(652215),
    b = c(792996),
    M = c(206433),
    D = c(323454);
let R = function (t) {
    let { handleLearnMore: e, effectiveMaxSize: c, ...n } = t,
        o = (0, s.bG)([A.A], () => A.A.getGuildId()),
        { analyticsLocations: a } = (0, l.Ay)(d.A.FILE_UPLOAD_POPOUT, d.A.PREMIUM_UPSELL_MODAL);
    (0, _.Ay)(() => {
        (r.default.track(O.HAw.PREMIUM_UPSELL_VIEWED, {
            type: U.e.LARGER_FILE_UPLOAD_UPSELL,
            location_section: O.JJy.FILE_UPLOAD_UPSELL_MODAL,
            location_stack: a,
            sku_id: (0, P.mH)(U.pe.TIER_2),
            voice_guild_id: L.A.getGuildId() ?? null,
        }),
            (0, f.sq)(O.U7l.PREMIUM_UPSELL_VIEWED, a, () => (0, u.uq)(U.e.LARGER_FILE_UPLOAD_UPSELL)));
    });
    let R = (0, p.Iu)({ guildId: o, maxSize: c }),
        S = (0, E.TM)() ? M.A : D.A;
    return (0, i.jsx)(l.f5, {
        value: a,
        children: (0, i.jsx)(I.A, {
            title: b.intl.string(b.t["9C+41g"]),
            subtitle: R,
            graphic: { type: "video", src: S, loop: !0, loopAt: 2.1 },
            secondaryCTA: b.intl.string(b.t.ZnqyZ2),
            onSecondaryClick: e,
            ...n,
        }),
    });
};
var S = c(976860);
function y(t) {
    let { title: e, help: c, showPremiumUpsell: o, effectiveMaxSize: s, transitionState: _, onClose: d } = t;
    return o
        ? (0, i.jsx)(R, {
              transitionState: _,
              onClose: d,
              handleLearnMore: function () {
                  ((0, a.A)(),
                      d(),
                      r.default.track(O.HAw.PREMIUM_PROMOTION_OPENED, {
                          location_section: O.JJy.FILE_UPLOAD_UPSELL_MODAL,
                          location_object: O.ZSU.NAVIGATION_LINK,
                      }),
                      (0, S.pX)(O.BVt.APPLICATION_STORE));
              },
              effectiveMaxSize: s,
          })
        : (0, i.jsx)(n.a, {
              title: e,
              subtitle: c,
              transitionState: _,
              actions: [{ text: b.intl.string(b.t["NX+WJN"]), onClick: d, variant: "primary" }],
              onClose: d,
          });
}
let h = "UPLOAD_ERROR_MODAL_KEY";
function k(t) {
    (0, o.qf)((e) => (0, i.jsx)(y, { ...e, ...t }), { modalKey: h });
}
