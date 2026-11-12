var i = e(477900);
e(582128);
var a = e(189213),
    o = e(192308),
    r = e(523527),
    s = e(218252),
    c = e(976860),
    l = e(129230),
    _ = e(652215),
    O = e(792996);
function p(t) {
    let { title: n, help: e, showPremiumUpsell: o, effectiveMaxSize: p, transitionState: A, onClose: u } = t;
    return o
        ? (0, i.jsx)(s.A, {
              transitionState: A,
              onClose: u,
              handleLearnMore: function () {
                  ((0, r.A)(),
                      u(),
                      l.default.track(_.HAw.PREMIUM_PROMOTION_OPENED, {
                          location_section: _.JJy.FILE_UPLOAD_UPSELL_MODAL,
                          location_object: _.ZSU.NAVIGATION_LINK,
                      }),
                      (0, c.pX)(_.BVt.APPLICATION_STORE));
              },
              effectiveMaxSize: p,
          })
        : (0, i.jsx)(a.a, {
              title: n,
              subtitle: e,
              transitionState: A,
              actions: [{ text: O.intl.string(O.t["NX+WJN"]), onClick: u, variant: "primary" }],
              onClose: u,
          });
}
let A = "UPLOAD_ERROR_MODAL_KEY";
e.d(
    n,
    {},
    {
        D: A,
        openUploadError: function (t) {
            (0, o.qf)((n) => (0, i.jsx)(p, { ...n, ...t }), { modalKey: A });
        },
    },
);
