n.d(t, { q: () => d });
var i = n(627968),
    l = n(64700),
    s = n(192308),
    a = n(514810),
    r = n(486020),
    o = n(517765);
function d(e) {
    let { channel: t, application: d, showApplicationImage: c, ...u } = e,
        m = (0, a.N)(t),
        g = l.useCallback(
            () =>
                (0, s.openModalLazy)(async () => {
                    let { default: e } = await n.e("73380").then(n.bind(n, 106895));
                    return (n) => (0, i.jsx)(e, { ...n, channel: t, application: d });
                }),
            [d, t],
        ),
        h = c ? (d.getIconURL(48) ?? r.vI["0"]) : void 0;
    return (0, i.jsx)(o.A, { imageSrc: h, onButtonClick: g, details: null != m ? [{ text: m }] : void 0, ...u });
}
