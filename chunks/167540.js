n.d(t, {
    Z: function () {
        return E;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(921801),
    d = n(131951),
    u = n(962100),
    m = n(445817),
    g = n(726985),
    h = n(65154),
    p = n(388032),
    x = n(232186);
function f() {
    return (0, i.jsx)(o.FormNotice, {
        type: o.CardTypes.PRIMARY,
        title: p.intl.string(p.t.XLw6FB),
        body: p.intl.string(p.t.wVjKGh),
        button: (0, i.jsx)(o.Button, {
            size: o.Button.Sizes.SMALL,
            className: x.marginTop20,
            onClick: () => (0, u.y)('Video unsupported browser'),
            children: p.intl.string(p.t.BK8LKy)
        })
    });
}
function E(e) {
    let { refreshStyles: t = !1 } = e,
        n = (0, l.e7)([d.Z], () => d.Z.supports(h.AN.VIDEO)),
        [s, u] = r.useState(!1),
        E = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(c.F, {
                    setting: g.s6.VOICE_AND_VIDEO_VIDEO_CAMERA,
                    children: (0, i.jsx)(m.Z, {
                        previewEnabled: s,
                        onEnablePreview: () => u(!0),
                        onCancelPreview: () => u(!1)
                    })
                }),
                !n && (0, i.jsx)(f, {})
            ]
        });
    return t
        ? E
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(o.HeadingLevel, {
                      component: (0, i.jsx)(o.FormTitle, {
                          tag: o.FormTitleTags.H1,
                          className: x.marginBottom20,
                          children: p.intl.string(p.t.LKzQSE)
                      }),
                      children: E
                  }),
                  (0, i.jsx)(o.FormDivider, { className: a()(x.marginBottom40, x.marginTop40) })
              ]
          });
}
