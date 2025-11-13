n.d(t, { z: () => d });
var l = n(951288),
    r = n(647438),
    i = n(954654),
    a = n(937889),
    s = n(930282),
    u = n(524444),
    o = n(695346),
    c = n(315934);
function d(e) {
    let { previewMessage: t } = e,
        n = o.jU.useSetting(),
        { content: d } = (0, a.ZP)(t, {
            allowHeading: !0,
            allowLinks: !0,
        }),
        f = t.attachments.map((e, t) => {
            let n = (0, u.Yi)({
                src: e.url,
                containerClassName: c.previewImage,
                imageContainerClassName: c.previewImage,
                height: void 0 !== e.height ? e.height : 200,
                width: void 0 !== e.width ? e.width : 200,
                maxHeight: 200,
                maxWidth: 200,
                analyticsSource: "ApplicationCommandSharePreview",
            });
            return (0, l.jsx)(r.Fragment, { children: n }, t);
        });
    return (0, l.jsxs)("div", {
        className: c.previewContainer,
        children: [
            (0, l.jsx)("div", { className: c.quote }),
            (0, l.jsxs)("div", {
                className: c.content,
                children: [
                    (0, l.jsx)(s.ZP, {
                        message: t,
                        content: d,
                        compact: n,
                    }),
                    f,
                    t.components.length > 0
                        ? (0, l.jsx)(i.ZP, {
                              message: t,
                              shouldDisableInteractiveComponents: !0,
                          })
                        : null,
                ],
            }),
        ],
    });
}
