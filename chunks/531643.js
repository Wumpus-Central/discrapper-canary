n.d(t, {
    A: () => p,
    openUploadError: () => h
});
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(952265),
    o = n(466377),
    l = n(313201),
    u = n(355314),
    c = n(310752),
    d = n(731994),
    f = n(988336);
function _(e) {
    let { title: t, help: n, showPremiumUpsell: r, transitionState: s, icons: _, fileSize: p, onClose: h } = e,
        m = (0, l.Dt)(),
        g = null != _ ? _ : d.J6;
    return r
        ? (0, i.jsx)(u.Z, {
              transitionState: s,
              onClose: h,
              fileSize: p
          })
        : (0, i.jsx)(o.Y0, {
              size: o.Cg.DYNAMIC,
              'aria-labelledby': m,
              transitionState: s,
              children: (0, i.jsx)('div', {
                  className: a()(f.uploadDropModal, f.error),
                  children: (0, i.jsxs)('div', {
                      className: f.inner,
                      children: [
                          (0, i.jsx)(c.Z, { icons: g }),
                          (0, i.jsx)('div', {
                              id: m,
                              className: f.title,
                              children: t
                          }),
                          (0, i.jsx)('div', {
                              className: f.instructions,
                              children: n
                          })
                      ]
                  })
              })
          });
}
let p = 'UPLOAD_ERROR_MODAL_KEY';
function h(e) {
    (0, s.h7)(
        (t) =>
            (0, i.jsx)(_, {
                ...t,
                ...e
            }),
        { modalKey: p }
    );
}
