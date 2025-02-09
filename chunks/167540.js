n.d(t, { Z: () => E }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(120356),
    r = n.n(l),
    a = n(442837),
    o = n(481060),
    c = n(921801),
    d = n(131951),
    u = n(962100),
    h = n(445817),
    m = n(726985),
    g = n(65154),
    x = n(388032),
    _ = n(814632);
function p() {
    return (0, i.jsx)(o.ToO, {
        type: o.sje.PRIMARY,
        title: x.intl.string(x.t.XLw6FB),
        body: x.intl.string(x.t.wVjKGh),
        button: (0, i.jsx)(o.zxk, {
            size: o.zxk.Sizes.SMALL,
            className: _.marginTop20,
            onClick: () => (0, u.y)('Video unsupported browser'),
            children: x.intl.string(x.t.BK8LKy)
        })
    });
}
function E(e) {
    let { refreshStyles: t = !1 } = e,
        n = (0, a.e7)([d.Z], () => d.Z.supports(g.AN.VIDEO)),
        [l, u] = s.useState(!1),
        E = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(c.F, {
                    setting: m.s6.VOICE_AND_VIDEO_VIDEO_CAMERA,
                    children: (0, i.jsx)(h.Z, {
                        previewEnabled: l,
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
                          className: _.marginBottom20,
                          children: x.intl.string(x.t.LKzQSE)
                      }),
                      children: E
                  }),
                  (0, i.jsx)(o.$i$, { className: r()(_.marginBottom40, _.marginTop40) })
              ]
          });
}
