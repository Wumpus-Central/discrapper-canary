r.r(n),
    r.d(n, {
        UPLOAD_ERROR_MODAL_KEY: function () {
            return p;
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
    s = r.n(a),
    o = r(952265),
    l = r(466377),
    u = r(313201),
    c = r(355314),
    d = r(310752),
    f = r(731994),
    _ = r(55720);
function h(e) {
    let { title: n, help: r, showPremiumUpsell: a, transitionState: o, icons: h, fileSize: p, onClose: m } = e,
        g = (0, u.Dt)(),
        E = null != h ? h : f.J6;
    return a
        ? (0, i.jsx)(c.Z, {
              transitionState: o,
              onClose: m,
              fileSize: p
          })
        : (0, i.jsx)(l.Y0, {
              size: l.Cg.DYNAMIC,
              'aria-labelledby': g,
              transitionState: o,
              children: (0, i.jsx)('div', {
                  className: s()(_.uploadDropModal, _.error),
                  children: (0, i.jsxs)('div', {
                      className: _.inner,
                      children: [
                          (0, i.jsx)(d.Z, { icons: E }),
                          (0, i.jsx)('div', {
                              id: g,
                              className: _.title,
                              children: n
                          }),
                          (0, i.jsx)('div', {
                              className: _.instructions,
                              children: r
                          })
                      ]
                  })
              })
          });
}
let p = 'UPLOAD_ERROR_MODAL_KEY';
function m(e) {
    (0, o.h7)(
        (n) =>
            (0, i.jsx)(h, {
                ...n,
                ...e
            }),
        { modalKey: p }
    );
}
