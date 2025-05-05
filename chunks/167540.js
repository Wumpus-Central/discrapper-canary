n.d(t, { Z: () => _ }), n(388685);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(442837),
    o = n(481060),
    c = n(921801),
    d = n(131951),
    u = n(962100),
    m = n(445817),
    g = n(726985),
    p = n(65154),
    h = n(388032),
    f = n(20493);
function b() {
    return (0, i.jsx)(o.ToO, {
        type: o.sje.PRIMARY,
        title: h.intl.string(h.t.XLw6FB),
        body: h.intl.string(h.t.wVjKGh),
        button: (0, i.jsx)(o.zxk, {
            size: o.zxk.Sizes.SMALL,
            className: f.marginTop20,
            onClick: () => (0, u.y)('Video unsupported browser'),
            children: h.intl.string(h.t.BK8LKy)
        })
    });
}
function _(e) {
    let { refreshStyles: t = !1 } = e,
        n = (0, a.e7)([d.Z], () => d.Z.supports(p.AN.VIDEO)),
        [s, u] = r.useState(!1),
        _ = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(c.F, {
                    setting: g.s6.VOICE_AND_VIDEO_VIDEO_CAMERA,
                    children: (0, i.jsx)(m.Z, {
                        previewEnabled: s,
                        onEnablePreview: () => u(!0),
                        onCancelPreview: () => u(!1)
                    })
                }),
                !n && (0, i.jsx)(b, {})
            ]
        });
    return t
        ? _
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(o.y5t, {
                      component: (0, i.jsx)(o.vwX, {
                          tag: o.RB0.H1,
                          className: f.marginBottom20,
                          children: h.intl.string(h.t.LKzQSE)
                      }),
                      children: _
                  }),
                  (0, i.jsx)(o.$i$, { className: l()(f.marginBottom40, f.marginTop40) })
              ]
          });
}
