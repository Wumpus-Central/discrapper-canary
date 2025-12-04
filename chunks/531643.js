n.d(t, {
    A: () => g,
    openUploadError: () => E,
});
var r = n(54381);
n(473749);
var i = n(952265),
    a = n(159691),
    o = n(174609),
    s = n(283066),
    l = n(355314),
    c = n(911311),
    u = n(703656),
    d = n(626135),
    f = n(981631),
    p = n(388032);
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
function m(e) {
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
function h(e) {
    let { title: t, help: n, showPremiumUpsell: i, transitionState: _, fileSize: m, onClose: h } = e,
        g = (0, s.Z)({ location: "UploadError" }),
        E = () => {
            (0, o.Z)(),
                h(),
                d.default.track(f.rMx.PREMIUM_PROMOTION_OPENED, {
                    location_section: f.jXE.FILE_UPLOAD_UPSELL_MODAL,
                    location_object: f.qAy.NAVIGATION_LINK,
                }),
                (0, u.uL)(f.Z5c.APPLICATION_STORE);
        };
    return i
        ? g
            ? (0, r.jsx)(c.Z, {
                  transitionState: _,
                  onClose: h,
                  handleLearnMore: E,
              })
            : (0, r.jsx)(l.Z, {
                  transitionState: _,
                  onClose: h,
                  handleLearnMore: E,
                  fileSize: m,
              })
        : (0, r.jsx)(a.u_l, {
              title: t,
              subtitle: n,
              transitionState: _,
              actions: [
                  {
                      text: p.intl.string(p.t["NX+WJN"]),
                      onClick: h,
                      variant: "primary",
                  },
              ],
              onClose: h,
          });
}
let g = "UPLOAD_ERROR_MODAL_KEY";
function E(e) {
    (0, i.openModal)((t) => (0, r.jsx)(h, m({}, t, e)), { modalKey: g });
}
