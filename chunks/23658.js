"use strict";
n.d(t, { D: () => h, openUploadError: () => m });
var r = n(627968);
n(64700);
var i = n(192308),
    s = n(732955),
    a = n(523527),
    o = n(170887),
    l = n(997351),
    u = n(218252),
    c = n(976860),
    d = n(954571),
    _ = n(652215),
    f = n(985018);
function p(e) {
    let { title: t, help: n, showPremiumUpsell: i, transitionState: p, fileSize: h, onClose: m } = e,
        E = (0, o.A)({ location: "UploadError" }),
        g = () => {
            (0, a.A)(),
                m(),
                d.default.track(_.HAw.PREMIUM_PROMOTION_OPENED, {
                    location_section: _.JJy.FILE_UPLOAD_UPSELL_MODAL,
                    location_object: _.ZSU.NAVIGATION_LINK,
                }),
                (0, c.pX)(_.BVt.APPLICATION_STORE);
        };
    return i
        ? E
            ? (0, r.jsx)(u.A, { transitionState: p, onClose: m, handleLearnMore: g })
            : (0, r.jsx)(l.default, { transitionState: p, onClose: m, handleLearnMore: g, fileSize: h })
        : (0, r.jsx)(s.aFV, {
              title: t,
              subtitle: n,
              transitionState: p,
              actions: [{ text: f.intl.string(f.t["NX+WJN"]), onClick: m, variant: "primary" }],
              onClose: m,
          });
}
let h = "UPLOAD_ERROR_MODAL_KEY";
function m(e) {
    (0, i.openModal)((t) => (0, r.jsx)(p, { ...t, ...e }), { modalKey: h });
}
