n.d(t, { t: () => d });
var i = n(200651),
    l = n(192379),
    a = n(481060),
    r = n(296023),
    s = n(768581),
    o = n(585835);
function d(e) {
    var t;
    let { channel: d, application: c, showApplicationImage: u, ...m } = e,
        h = (0, r.w)(d),
        x = l.useCallback(
            () =>
                (0, a.ZDy)(async () => {
                    let { default: e } = await n.e('30019').then(n.bind(n, 719498));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            channel: d,
                            application: c
                        });
                }),
            [c, d]
        ),
        g = u ? (null !== (t = c.getIconURL(48)) && void 0 !== t ? t : s.pK['0']) : void 0;
    return (0, i.jsx)(o.Z, {
        imageSrc: g,
        onButtonClick: x,
        details: null != h ? [{ text: h }] : void 0,
        ...m
    });
}
