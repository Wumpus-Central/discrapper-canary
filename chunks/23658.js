"use strict";
n.d(t, { D: () => E, openUploadError: () => h });
var i = n(627968);
n(64700);
var r = n(192308),
    s = n(189213),
    a = n(523527),
    o = n(191244),
    l = n(976860),
    _ = n(954571),
    d = n(652215),
    u = n(985018);
function c(e) {
    let { title: t, help: n, showPremiumUpsell: r, transitionState: c, onClose: E } = e;
    return r
        ? (0, i.jsx)(o.A, {
              transitionState: c,
              onClose: E,
              handleLearnMore: () => {
                  (0, a.A)(),
                      E(),
                      _.default.track(d.HAw.PREMIUM_PROMOTION_OPENED, {
                          location_section: d.JJy.FILE_UPLOAD_UPSELL_MODAL,
                          location_object: d.ZSU.NAVIGATION_LINK,
                      }),
                      (0, l.pX)(d.BVt.APPLICATION_STORE);
              },
          })
        : (0, i.jsx)(s.Modal, {
              title: t,
              subtitle: n,
              transitionState: c,
              actions: [{ text: u.intl.string(u.t["NX+WJN"]), onClick: E, variant: "primary" }],
              onClose: E,
          });
}
let E = "UPLOAD_ERROR_MODAL_KEY";
function h(e) {
    (0, r.openModal)((t) => (0, i.jsx)(c, { ...t, ...e }), { modalKey: E });
}
