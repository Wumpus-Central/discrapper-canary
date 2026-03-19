n.d(t, { A: () => m });
var a = n(627968),
    l = n(64700),
    i = n(60465),
    r = n(476464),
    s = n(357599),
    c = n(37948),
    o = n(306897),
    d = n(301979),
    u = n(985018);
let m = function (e) {
    let { detectedGame: t, trackAction: n } = e,
        m = (0, r.y)("GameProfileStoreLinks"),
        x = (0, s._)(t),
        f = (0, c.A)(),
        h = l.useMemo(() => x.map(o.A).filter((e) => null != e), [x]);
    if (!m || 0 === h.length || null == t) return null;
    if (1 === h.length) {
        let [e] = h;
        return (0, a.jsx)(d.u, {
            icon: e.icon,
            text: e.text,
            "aria-label": e.ariaLabel,
            onClick: () => {
                n(e.action), f(e.url);
            },
        });
    }
    return (0, a.jsx)(d.u, {
        text: u.intl.string(u.t["/hMurx"]),
        "aria-label": u.intl.string(u.t.nK60cc),
        onClick: () => i.A.openGameProfileStoreLinksModal({ detectedGame: t, websiteButtons: h, trackAction: n }),
    });
};
