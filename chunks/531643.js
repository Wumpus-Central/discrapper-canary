r.r(n),
    r.d(n, {
        UPLOAD_ERROR_MODAL_KEY: function () {
            return _;
        },
        default: function () {
            return h;
        },
        openUploadError: function () {
            return m;
        }
    });
var i = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    s = r(952265),
    l = r(466377),
    u = r(313201),
    c = r(355314),
    d = r(310752),
    f = r(731994),
    p = r(55720);
function h(e) {
    let { title: n, help: r, showPremiumUpsell: a, transitionState: s, icons: h, fileSize: _, onClose: m } = e,
        g = (0, u.Dt)(),
        E = null != h ? h : f.J6;
    return a
        ? (0, i.jsx)(c.Z, {
              transitionState: s,
              onClose: m,
              fileSize: _
          })
        : (0, i.jsx)(l.Y0, {
              size: l.Cg.DYNAMIC,
              'aria-labelledby': g,
              transitionState: s,
              children: (0, i.jsx)('div', {
                  className: o()(p.uploadDropModal, p.error),
                  children: (0, i.jsxs)('div', {
                      className: p.inner,
                      children: [
                          (0, i.jsx)(d.Z, { icons: E }),
                          (0, i.jsx)('div', {
                              id: g,
                              className: p.title,
                              children: n
                          }),
                          (0, i.jsx)('div', {
                              className: p.instructions,
                              children: r
                          })
                      ]
                  })
              })
          });
}
let _ = 'UPLOAD_ERROR_MODAL_KEY';
function m(e) {
    (0, s.h7)(
        (n) =>
            (0, i.jsx)(h, {
                ...n,
                ...e
            }),
        { modalKey: _ }
    );
}
