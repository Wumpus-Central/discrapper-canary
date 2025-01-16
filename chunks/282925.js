r.d(n, {
    Z: function () {
        return d;
    }
});
var i = r(200651);
r(192379);
var a = r(481060),
    s = r(921944),
    o = r(388032),
    l = r(844451),
    u = r(905287);
function c(e) {
    let { onDismissClick: n, onCheckItOutClick: r } = e;
    return (0, i.jsxs)('div', {
        className: l.container,
        children: [
            (0, i.jsx)('img', {
                src: u.Z,
                className: l.image,
                alt: 'Nitroween Gift Box'
            }),
            (0, i.jsx)(a.ModalCloseButton, {
                onClick: n,
                withCircleBackground: !0,
                className: l.closeButton,
                innerClassName: l.popoutCloseButton
            }),
            (0, i.jsxs)('div', {
                className: l.body,
                children: [
                    (0, i.jsx)(a.Heading, {
                        className: l.text,
                        variant: 'heading-sm/semibold',
                        children: o.intl.string(o.t['YMI+UV'])
                    }),
                    (0, i.jsx)(a.Text, {
                        className: l.text,
                        variant: 'text-sm/normal',
                        children: o.intl.string(o.t.BIBwbm)
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: l.buttonContainer,
                children: (0, i.jsx)(a.Button, {
                    className: l.ctaButton,
                    color: a.Button.Colors.BRAND_INVERTED,
                    onClick: () => r(),
                    children: o.intl.string(o.t.RzWDqa)
                })
            }),
            (0, i.jsx)('div', { className: l.pointer })
        ]
    });
}
function d(e) {
    let { onComplete: n, onCheckItOutClick: r, markAsDismissed: o } = e;
    return (0, i.jsx)(a.Popout, {
        spacing: 0,
        shouldShow: !0,
        position: 'top',
        align: 'center',
        renderPopout: (e) =>
            (0, i.jsx)(c, {
                ...e,
                onDismissClick: () => {
                    n(), o(s.L.USER_DISMISS);
                },
                onCheckItOutClick: () => {
                    r(), n(), o(s.L.TAKE_ACTION);
                }
            }),
        onRequestClose: () => void 0,
        closeOnScroll: !1,
        ignoreModalClicks: !0,
        children: () => (0, i.jsx)('div', { className: l.popoutTarget })
    });
}
