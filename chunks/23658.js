n.d(t, { D: () => p, openUploadError: () => m });
var i = n(627968);
n(64700);
var r = n(192308),
    l = n(189213),
    a = n(523527),
    s = n(191244),
    o = n(976860),
    u = n(954571),
    c = n(652215),
    d = n(985018);
function f(e) {
    let { title: t, help: n, showPremiumUpsell: r, transitionState: f, onClose: p } = e;
    return r
        ? (0, i.jsx)(s.A, {
              transitionState: f,
              onClose: p,
              handleLearnMore: () => {
                  (0, a.A)(),
                      p(),
                      u.default.track(c.HAw.PREMIUM_PROMOTION_OPENED, {
                          location_section: c.JJy.FILE_UPLOAD_UPSELL_MODAL,
                          location_object: c.ZSU.NAVIGATION_LINK,
                      }),
                      (0, o.pX)(c.BVt.APPLICATION_STORE);
              },
          })
        : (0, i.jsx)(l.Modal, {
              title: t,
              subtitle: n,
              transitionState: f,
              actions: [{ text: d.intl.string(d.t["NX+WJN"]), onClick: p, variant: "primary" }],
              onClose: p,
          });
}
let p = "UPLOAD_ERROR_MODAL_KEY";
function m(e) {
    (0, r.openModal)((t) => (0, i.jsx)(f, { ...t, ...e }), { modalKey: p });
}
