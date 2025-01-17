n.d(t, {
    Z: function () {
        return _;
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
function _() {
    let e = (0, l.e7)([d.Z], () => d.Z.supports(h.AN.VIDEO)),
        [t, n] = r.useState(!1);
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsxs)(o.HeadingLevel, {
                component: (0, i.jsx)(o.FormTitle, {
                    tag: o.FormTitleTags.H1,
                    className: x.marginBottom20,
                    children: p.intl.string(p.t.LKzQSE)
                }),
                children: [
                    (0, i.jsx)(c.F, {
                        setting: g.s6.VOICE_AND_VIDEO_VIDEO_CAMERA,
                        children: (0, i.jsx)(m.Z, {
                            previewEnabled: t,
                            onEnablePreview: () => n(!0),
                            onCancelPreview: () => n(!1)
                        })
                    }),
                    !e && (0, i.jsx)(f, {})
                ]
            }),
            (0, i.jsx)(o.FormDivider, { className: a()(x.marginBottom40, x.marginTop40) })
        ]
    });
}
