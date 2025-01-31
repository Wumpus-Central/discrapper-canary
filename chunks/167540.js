n.d(t, { Z: () => E }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(442837),
    o = n(481060),
    c = n(921801),
    d = n(131951),
    u = n(962100),
    m = n(445817),
    h = n(726985),
    g = n(65154),
    _ = n(388032),
    x = n(232186);
function p() {
    return (0, i.jsx)(o.ToO, {
        type: o.sje.PRIMARY,
        title: _.intl.string(_.t.XLw6FB),
        body: _.intl.string(_.t.wVjKGh),
        button: (0, i.jsx)(o.zxk, {
            size: o.zxk.Sizes.SMALL,
            className: x.marginTop20,
            onClick: () => (0, u.y)('Video unsupported browser'),
            children: _.intl.string(_.t.BK8LKy)
        })
    });
}
function E(e) {
    let { refreshStyles: t = !1 } = e,
        n = (0, a.e7)([d.Z], () => d.Z.supports(g.AN.VIDEO)),
        [r, u] = s.useState(!1),
        E = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(c.F, {
                    setting: h.s6.VOICE_AND_VIDEO_VIDEO_CAMERA,
                    children: (0, i.jsx)(m.Z, {
                        previewEnabled: r,
                        onEnablePreview: () => u(!0),
                        onCancelPreview: () => u(!1)
                    })
                }),
                !n && (0, i.jsx)(p, {})
            ]
        });
    return t
        ? E
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(o.y5t, {
                      component: (0, i.jsx)(o.vwX, {
                          tag: o.RB0.H1,
                          className: x.marginBottom20,
                          children: _.intl.string(_.t.LKzQSE)
                      }),
                      children: E
                  }),
                  (0, i.jsx)(o.$i$, { className: l()(x.marginBottom40, x.marginTop40) })
              ]
          });
}
