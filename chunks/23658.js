n.d(t, { D: () => A, openUploadError: () => g });
var a = n(627968);
n(64700);
var r = n(192308),
    l = n(189213),
    i = n(523527),
    o = n(218252),
    s = n(976860),
    c = n(954571),
    u = n(652215),
    d = n(985018);
function p(e) {
    let { title: t, help: n, showPremiumUpsell: r, transitionState: p, onClose: A } = e;
    return r
        ? (0, a.jsx)(o.A, {
              transitionState: p,
              onClose: A,
              handleLearnMore: () => {
                  (0, i.A)(),
                      A(),
                      c.default.track(u.HAw.PREMIUM_PROMOTION_OPENED, {
                          location_section: u.JJy.FILE_UPLOAD_UPSELL_MODAL,
                          location_object: u.ZSU.NAVIGATION_LINK,
                      }),
                      (0, s.pX)(u.BVt.APPLICATION_STORE);
              },
          })
        : (0, a.jsx)(l.Modal, {
              title: t,
              subtitle: n,
              transitionState: p,
              actions: [{ text: d.intl.string(d.t["NX+WJN"]), onClick: A, variant: "primary" }],
              onClose: A,
          });
}
let A = "UPLOAD_ERROR_MODAL_KEY";
function g(e) {
    (0, r.openModal)((t) => (0, a.jsx)(p, { ...t, ...e }), { modalKey: A });
}
