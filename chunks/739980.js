n.d(t, { z: () => c });
var l = n(200651),
    s = n(192379),
    i = n(954654),
    a = n(937889),
    r = n(930282),
    o = n(524444),
    u = n(315971);
function c(e) {
    let { previewMessage: t } = e,
        { content: n } = (0, a.ZP)(t, {
            allowHeading: !0,
            allowLinks: !0
        }),
        c = t.attachments.map((e, t) => {
            let n = (0, o.Yi)({
                src: e.url,
                containerClassName: u.previewImage,
                imageContainerClassName: u.previewImage,
                height: void 0 !== e.height ? e.height : 225,
                width: void 0 !== e.width ? e.width : 225,
                maxHeight: 225,
                maxWidth: 225,
                analyticsSource: 'ApplicationCommandSharePreview'
            });
            return (0, l.jsx)(s.Fragment, { children: n }, t);
        });
    return (0, l.jsxs)('div', {
        className: u.previewContainer,
        children: [
            (0, l.jsx)('div', { className: u.quote }),
            (0, l.jsxs)('div', {
                className: u.content,
                children: [
                    (0, l.jsx)(r.ZP, {
                        message: t,
                        content: n
                    }),
                    c,
                    t.components.length > 0
                        ? (0, l.jsx)(i.ZP, {
                              message: t,
                              shouldDisableInteractiveComponents: !0
                          })
                        : null
                ]
            })
        ]
    });
}
