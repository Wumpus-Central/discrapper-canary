(n.d(t, { Z: () => x }), n(388685));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(921801),
    d = n(131951),
    u = n(962100),
    m = n(445817),
    p = n(726985),
    g = n(65154),
    h = n(388032),
    f = n(20493);
function b() {
    return (0, i.jsx)(o.ToO, {
        type: o.sje.PRIMARY,
        title: h.intl.string(h.t.XLw6FB),
        body: h.intl.string(h.t.wVjKGh),
        button: (0, i.jsx)('div', {
            'data-button-hoisted-classname-wrapper': !0,
            className: f.marginTop20,
            children: (0, i.jsx)(o.zxk, {
                variant: 'primary',
                size: 'sm',
                text: h.intl.string(h.t.BK8LKy),
                onClick: () => (0, u.y)('Video unsupported browser')
            })
        })
    });
}
function x(e) {
    let { refreshStyles: t = !1 } = e,
        n = (0, l.e7)([d.Z], () => d.Z.supports(g.AN.VIDEO)),
        [s, u] = r.useState(!1),
        x = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(c.F, {
                    setting: p.s6.VOICE_AND_VIDEO_VIDEO_CAMERA,
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
        ? x
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(o.y5t, {
                      component: (0, i.jsx)(o.vwX, {
                          tag: o.RB0.H1,
                          className: f.marginBottom20,
                          children: h.intl.string(h.t.LKzQSE)
                      }),
                      children: x
                  }),
                  (0, i.jsx)(o.$i$, { className: a()(f.marginBottom40, f.marginTop40) })
              ]
          });
}
