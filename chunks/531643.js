n.d(t, {
    A: () => I,
    openUploadError: () => T,
});
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(952265),
    s = n(466377),
    l = n(313201),
    c = n(174609),
    u = n(47280),
    d = n(998076),
    f = n(355314),
    _ = n(911311),
    p = n(703656),
    h = n(626135),
    m = n(310752),
    g = n(731994),
    E = n(981631),
    b = n(995751);
function y(e, t, n) {
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
function O(e) {
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
                y(e, t, n[t]);
            });
    }
    return e;
}
function v(e) {
    let { title: t, help: n, showPremiumUpsell: i, transitionState: o, icons: y, fileSize: O, onClose: v } = e,
        I = (0, l.Dt)(),
        T = null != y ? y : g.J6,
        S = (0, u.ZP)({ location: "UploadError" }),
        A = (0, d.Z)({ location: "UploadError" }),
        C = S || A,
        N = () => {
            (0, c.Z)(),
                v(),
                h.default.track(E.rMx.PREMIUM_PROMOTION_OPENED, {
                    location_section: E.jXE.FILE_UPLOAD_UPSELL_MODAL,
                    location_object: E.qAy.NAVIGATION_LINK,
                }),
                (0, p.uL)(E.Z5c.APPLICATION_STORE);
        };
    return i
        ? C
            ? (0, r.jsx)(_.Z, {
                  transitionState: o,
                  onClose: v,
                  handleLearnMore: N,
              })
            : (0, r.jsx)(f.Z, {
                  transitionState: o,
                  onClose: v,
                  handleLearnMore: N,
                  fileSize: O,
              })
        : (0, r.jsx)(s.Y0, {
              size: s.Cg.DYNAMIC,
              "aria-labelledby": I,
              transitionState: o,
              parentComponent: "UploadError",
              children: (0, r.jsx)("div", {
                  className: a()(b.uploadDropModal, b.error),
                  children: (0, r.jsxs)("div", {
                      className: b.inner,
                      children: [
                          (0, r.jsx)(m.Z, { icons: T }),
                          (0, r.jsx)("div", {
                              id: I,
                              className: b.title,
                              children: t,
                          }),
                          (0, r.jsx)("div", {
                              className: b.instructions,
                              children: n,
                          }),
                      ],
                  }),
              }),
          });
}
let I = "UPLOAD_ERROR_MODAL_KEY";
function T(e) {
    (0, o.h7)((t) => (0, r.jsx)(v, O({}, t, e)), { modalKey: I });
}
