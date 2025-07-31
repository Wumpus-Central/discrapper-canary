n.d(t, {
    A: () => v,
    openUploadError: () => I
});
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(952265),
    s = n(466377),
    l = n(313201),
    c = n(174609),
    u = n(998076),
    d = n(355314),
    _ = n(911311),
    f = n(703656),
    p = n(626135),
    h = n(310752),
    m = n(731994),
    g = n(981631),
    E = n(948979);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                b(e, t, n[t]);
            }));
    }
    return e;
}
function O(e) {
    let { title: t, help: n, showPremiumUpsell: i, transitionState: o, icons: b, fileSize: y, onClose: O } = e,
        v = (0, l.Dt)(),
        I = null != b ? b : m.J6,
        T = (0, u.Z)({ location: 'UploadError' }),
        S = () => {
            ((0, c.Z)(),
                O(),
                p.default.track(g.rMx.PREMIUM_PROMOTION_OPENED, {
                    location_section: g.jXE.FILE_UPLOAD_UPSELL_MODAL,
                    location_object: g.qAy.NAVIGATION_LINK
                }),
                (0, f.uL)(g.Z5c.APPLICATION_STORE));
        };
    return i
        ? T
            ? (0, r.jsx)(_.Z, {
                  transitionState: o,
                  onClose: O,
                  handleLearnMore: S
              })
            : (0, r.jsx)(d.Z, {
                  transitionState: o,
                  onClose: O,
                  handleLearnMore: S,
                  fileSize: y
              })
        : (0, r.jsx)(s.Y0, {
              size: s.Cg.DYNAMIC,
              'aria-labelledby': v,
              transitionState: o,
              parentComponent: 'UploadError',
              children: (0, r.jsx)('div', {
                  className: a()(E.uploadDropModal, E.error),
                  children: (0, r.jsxs)('div', {
                      className: E.inner,
                      children: [
                          (0, r.jsx)(h.Z, { icons: I }),
                          (0, r.jsx)('div', {
                              id: v,
                              className: E.title,
                              children: t
                          }),
                          (0, r.jsx)('div', {
                              className: E.instructions,
                              children: n
                          })
                      ]
                  })
              })
          });
}
let v = 'UPLOAD_ERROR_MODAL_KEY';
function I(e) {
    (0, o.h7)((t) => (0, r.jsx)(O, y({}, t, e)), { modalKey: v });
}
