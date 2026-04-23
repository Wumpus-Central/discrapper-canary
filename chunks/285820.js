n.d(t, { A: () => h, D: () => m });
var l = n(627968),
    a = n(64700),
    i = n(476464),
    r = n(357599),
    s = n(37948),
    o = n(306897),
    c = n(753756),
    d = n(301979),
    u = n(985018);
function m(e) {
    let t = (0, i.y)("GameProfileStoreLinks"),
        n = (0, r._)(e);
    return { storeWebsites: n, showsStoreLinks: t && n.length > 0 && null != e };
}
let h = function (e) {
    let { game: t, trackAction: n } = e,
        i = (0, s.A)(),
        { showsStoreLinks: r, storeWebsites: h } = m(t),
        f = a.useMemo(() => h.map(o.A).filter((e) => null != e), [h]);
    if (!r) return null;
    if (1 === f.length) {
        let [e] = f;
        return (0, l.jsx)(d.u, {
            icon: e.icon,
            text: e.text,
            "aria-label": e.ariaLabel,
            onClick: () => {
                n(e.action), i(e.url);
            },
        });
    }
    return (0, l.jsx)(d.u, {
        text: u.intl.string(u.t["/hMurx"]),
        "aria-label": u.intl.string(u.t.nK60cc),
        onClick: () => (0, c.N)({ game: t, websiteButtons: f, trackAction: n }),
    });
};
