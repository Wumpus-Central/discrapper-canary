n.d(t, { z: () => d });
var r = n(255367),
    l = n(73800),
    i = n(954654),
    a = n(937889),
    s = n(930282),
    o = n(524444),
    u = n(695346),
    c = n(136831);
function d(e) {
    let { previewMessage: t } = e,
        n = u.jU.useSetting(),
        { content: d } = (0, a.ZP)(t, {
            allowHeading: !0,
            allowLinks: !0
        }),
        f = t.attachments.map((e, t) => {
            let n = (0, o.Yi)({
                src: e.url,
                containerClassName: c.previewImage,
                imageContainerClassName: c.previewImage,
                height: void 0 !== e.height ? e.height : 225,
                width: void 0 !== e.width ? e.width : 225,
                maxHeight: 225,
                maxWidth: 225,
                analyticsSource: 'ApplicationCommandSharePreview'
            });
            return (0, r.jsx)(l.Fragment, { children: n }, t);
        });
    return (0, r.jsxs)('div', {
        className: c.previewContainer,
        children: [
            (0, r.jsx)('div', { className: c.quote }),
            (0, r.jsxs)('div', {
                className: c.content,
                children: [
                    (0, r.jsx)(s.ZP, {
                        message: t,
                        content: d,
                        compact: n
                    }),
                    f,
                    t.components.length > 0
                        ? (0, r.jsx)(i.ZP, {
                              message: t,
                              shouldDisableInteractiveComponents: !0
                          })
                        : null
                ]
            })
        ]
    });
}
