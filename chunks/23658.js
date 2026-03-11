"use strict";
n.d(t, { D: () => f, openUploadError: () => p });
var r = n(627968);
n(64700);
var i = n(192308),
    s = n(732955),
    a = n(523527),
    o = n(218252),
    l = n(976860),
    u = n(954571),
    c = n(652215),
    d = n(985018);
function _(e) {
    let { title: t, help: n, showPremiumUpsell: i, transitionState: _, onClose: f } = e,
        p = () => {
            (0, a.A)(),
                f(),
                u.default.track(c.HAw.PREMIUM_PROMOTION_OPENED, {
                    location_section: c.JJy.FILE_UPLOAD_UPSELL_MODAL,
                    location_object: c.ZSU.NAVIGATION_LINK,
                }),
                (0, l.pX)(c.BVt.APPLICATION_STORE);
        };
    return i
        ? (0, r.jsx)(o.A, { transitionState: _, onClose: f, handleLearnMore: p })
        : (0, r.jsx)(s.aFV, {
              title: t,
              subtitle: n,
              transitionState: _,
              actions: [{ text: d.intl.string(d.t["NX+WJN"]), onClick: f, variant: "primary" }],
              onClose: f,
          });
}
let f = "UPLOAD_ERROR_MODAL_KEY";
function p(e) {
    (0, i.openModal)((t) => (0, r.jsx)(_, { ...t, ...e }), { modalKey: f });
}
