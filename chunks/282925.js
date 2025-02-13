n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(921944),
    s = n(388032),
    o = n(344815),
    l = n(905287);
function u(e) {
    let { onDismissClick: t, onCheckItOutClick: n } = e;
    return (0, i.jsxs)('div', {
        className: o.container,
        children: [
            (0, i.jsx)('img', {
                src: l.Z,
                className: o.image,
                alt: 'Nitroween Gift Box'
            }),
            (0, i.jsx)(r.olH, {
                onClick: t,
                withCircleBackground: !0,
                className: o.closeButton,
                innerClassName: o.popoutCloseButton
            }),
            (0, i.jsxs)('div', {
                className: o.body,
                children: [
                    (0, i.jsx)(r.X6q, {
                        className: o.text,
                        variant: 'heading-sm/semibold',
                        children: s.intl.string(s.t['YMI+UV'])
                    }),
                    (0, i.jsx)(r.Text, {
                        className: o.text,
                        variant: 'text-sm/normal',
                        children: s.intl.string(s.t.BIBwbm)
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: o.buttonContainer,
                children: (0, i.jsx)(r.zxk, {
                    className: o.ctaButton,
                    color: r.zxk.Colors.BRAND_INVERTED,
                    onClick: () => n(),
                    children: s.intl.string(s.t.RzWDqa)
                })
            }),
            (0, i.jsx)('div', { className: o.pointer })
        ]
    });
}
function c(e) {
    let { onComplete: t, onCheckItOutClick: n, markAsDismissed: s } = e;
    return (0, i.jsx)(r.yRy, {
        spacing: 0,
        shouldShow: !0,
        position: 'top',
        align: 'center',
        renderPopout: (e) =>
            (0, i.jsx)(u, {
                ...e,
                onDismissClick: () => {
                    t(), s(a.L.USER_DISMISS);
                },
                onCheckItOutClick: () => {
                    n(), t(), s(a.L.TAKE_ACTION);
                }
            }),
        onRequestClose: () => void 0,
        closeOnScroll: !1,
        ignoreModalClicks: !0,
        children: () => (0, i.jsx)('div', { className: o.popoutTarget })
    });
}
