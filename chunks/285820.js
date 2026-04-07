n.d(t, { A: () => x, D: () => m });
var a = n(627968),
    i = n(64700),
    l = n(476464),
    r = n(357599),
    s = n(37948),
    o = n(306897),
    c = n(753756),
    d = n(301979),
    u = n(985018);
function m(e) {
    let t = (0, l.y)("GameProfileStoreLinks"),
        n = (0, r._)(e);
    return { storeWebsites: n, showsStoreLinks: t && n.length > 0 && null != e };
}
let x = function (e) {
    let { game: t, trackAction: n } = e,
        l = (0, s.A)(),
        { showsStoreLinks: r, storeWebsites: x } = m(t),
        g = i.useMemo(() => x.map(o.A).filter((e) => null != e), [x]);
    if (!r) return null;
    if (1 === g.length) {
        let [e] = g;
        return (0, a.jsx)(d.u, {
            icon: e.icon,
            text: e.text,
            "aria-label": e.ariaLabel,
            onClick: () => {
                n(e.action), l(e.url);
            },
        });
    }
    return (0, a.jsx)(d.u, {
        text: u.intl.string(u.t["/hMurx"]),
        "aria-label": u.intl.string(u.t.nK60cc),
        onClick: () => (0, c.N)({ game: t, websiteButtons: g, trackAction: n }),
    });
};
