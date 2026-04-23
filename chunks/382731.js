n.d(t, { h: () => d });
var l = n(627968),
    i = n(64700),
    s = n(520586),
    a = n(465364),
    r = n(291812),
    u = n(652176),
    o = n(253932),
    c = n(816350);
function d(e) {
    let { previewMessage: t } = e,
        n = o.hH.useSetting(),
        { content: d } = (0, a.Ay)(t, { allowHeading: !0, allowLinks: !0 }),
        m = t.attachments.map((e, t) => {
            let n = (0, u.LL)({
                src: e.url,
                containerClassName: c.oz,
                imageContainerClassName: c.oz,
                height: void 0 !== e.height ? e.height : 200,
                width: void 0 !== e.width ? e.width : 200,
                maxHeight: 200,
                maxWidth: 200,
                analyticsSource: "ApplicationCommandSharePreview",
            });
            return (0, l.jsx)(i.Fragment, { children: n }, t);
        });
    return (0, l.jsxs)("div", {
        className: c.i1,
        children: [
            (0, l.jsx)("div", { className: c.hD }),
            (0, l.jsxs)("div", {
                className: c.Qs,
                children: [
                    (0, l.jsx)(r.Ay, { message: t, content: d, compact: n }),
                    m,
                    t.components.length > 0
                        ? (0, l.jsx)(s.Ay, { message: t, shouldDisableInteractiveComponents: !0 })
                        : null,
                ],
            }),
        ],
    });
}
