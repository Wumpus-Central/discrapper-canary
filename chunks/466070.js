n.d(t, {
    t: function () {
        return c;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(481060),
    a = n(296023),
    o = n(768581),
    s = n(585835);
function c(e) {
    var t;
    let { channel: c, application: d, showApplicationImage: u, ...m } = e,
        h = (0, a.w)(c),
        p = l.useCallback(
            () =>
                (0, r.openModalLazy)(async () => {
                    let { default: e } = await n.e('30019').then(n.bind(n, 719498));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            channel: c,
                            application: d
                        });
                }),
            [d, c]
        ),
        g = u ? (null !== (t = d.getIconURL(48)) && void 0 !== t ? t : o.pK['0']) : void 0;
    return (0, i.jsx)(s.Z, {
        imageSrc: g,
        onButtonClick: p,
        details: null != h ? [{ text: h }] : void 0,
        ...m
    });
}
