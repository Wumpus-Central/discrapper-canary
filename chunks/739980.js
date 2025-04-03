n.d(t, { z: () => c });
var r = n(200651),
    l = n(192379),
    a = n(954654),
    s = n(937889),
    i = n(930282),
    o = n(524444),
    u = n(136831);
function c(e) {
    let { previewMessage: t } = e,
        { content: n } = (0, s.ZP)(t, {
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
            return (0, r.jsx)(l.Fragment, { children: n }, t);
        });
    return (0, r.jsxs)('div', {
        className: u.previewContainer,
        children: [
            (0, r.jsx)('div', { className: u.quote }),
            (0, r.jsxs)('div', {
                className: u.content,
                children: [
                    (0, r.jsx)(i.ZP, {
                        message: t,
                        content: n
                    }),
                    c,
                    t.components.length > 0
                        ? (0, r.jsx)(a.ZP, {
                              message: t,
                              shouldDisableInteractiveComponents: !0
                          })
                        : null
                ]
            })
        ]
    });
}
