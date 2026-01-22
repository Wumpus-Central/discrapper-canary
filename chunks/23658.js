n.d(t, {
    D: () => g,
    openUploadError: () => E,
});
var r = n(627968);
n(64700);
var i = n(192308),
    a = n(732955),
    s = n(523527),
    o = n(170887),
    l = n(997351),
    c = n(218252),
    u = n(976860),
    d = n(954571),
    f = n(652215),
    p = n(985018);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            });
    }
    return e;
}
function m(e) {
    let { title: t, help: n, showPremiumUpsell: i, transitionState: _, fileSize: h, onClose: m } = e,
        g = (0, o.A)({ location: "UploadError" }),
        E = () => {
            (0, s.A)(),
                m(),
                d.default.track(f.HAw.PREMIUM_PROMOTION_OPENED, {
                    location_section: f.JJy.FILE_UPLOAD_UPSELL_MODAL,
                    location_object: f.ZSU.NAVIGATION_LINK,
                }),
                (0, u.pX)(f.BVt.APPLICATION_STORE);
        };
    return i
        ? g
            ? (0, r.jsx)(c.A, {
                  transitionState: _,
                  onClose: m,
                  handleLearnMore: E,
              })
            : (0, r.jsx)(l.A, {
                  transitionState: _,
                  onClose: m,
                  handleLearnMore: E,
                  fileSize: h,
              })
        : (0, r.jsx)(a.aFV, {
              title: t,
              subtitle: n,
              transitionState: _,
              actions: [
                  {
                      text: p.intl.string(p.t["NX+WJN"]),
                      onClick: m,
                      variant: "primary",
                  },
              ],
              onClose: m,
          });
}
let g = "UPLOAD_ERROR_MODAL_KEY";
function E(e) {
    (0, i.openModal)((t) => (0, r.jsx)(m, h({}, t, e)), { modalKey: g });
}
