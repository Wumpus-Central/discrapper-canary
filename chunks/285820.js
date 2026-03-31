n.d(t, { A: () => m });
var a = n(627968),
    i = n(64700),
    l = n(476464),
    r = n(357599),
    s = n(37948),
    c = n(306897),
    o = n(753756),
    d = n(301979),
    u = n(985018);
let m = function (e) {
    let { detectedGame: t, trackAction: n } = e,
        m = (0, l.y)("GameProfileStoreLinks"),
        x = (0, r._)(t),
        h = (0, s.A)(),
        f = i.useMemo(() => x.map(c.A).filter((e) => null != e), [x]);
    if (!m || 0 === f.length || null == t) return null;
    if (1 === f.length) {
        let [e] = f;
        return (0, a.jsx)(d.u, {
            icon: e.icon,
            text: e.text,
            "aria-label": e.ariaLabel,
            onClick: () => {
                n(e.action), h(e.url);
            },
        });
    }
    return (0, a.jsx)(d.u, {
        text: u.intl.string(u.t["/hMurx"]),
        "aria-label": u.intl.string(u.t.nK60cc),
        onClick: () => (0, o.N)({ detectedGame: t, websiteButtons: f, trackAction: n }),
    });
};
