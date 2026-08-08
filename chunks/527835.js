t.d(e, { A: () => c });
var l = t(477900),
    r = t(477782),
    i = t(422258),
    a = t(93055),
    d = t(17928),
    u = t(181079);
function s(n, e) {
    return n.length === e.length && n.every((n, t) => n.id === e[t].id && n.name === e[t].name);
}
var o = t(375708);
function c(n) {
    let e = (0, a.DZ)(),
        t = (0, a.Af)(n.id),
        c = (0, d.bG)([u.A], () => (0, a.m_)(u.A.getFavoriteChannels()), [], s);
    if (__OVERLAY__ || !e || null == t) return null;
    let h = c.filter((n) => null != n.id && n.id !== t.parentId),
        p = null != t.parentId;
    if (!p && 0 === h.length) return null;
    function f(n) {
        null != t && (0, i.JD)(t.id, n);
    }
    return (0, l.jsxs)(r.Dr, {
        id: "move-to-category",
        label: o.intl.string(o.t.FAplms),
        children: [
            p &&
                (0, l.jsx)(r.rX, {
                    children: (0, l.jsx)(r.Dr, {
                        id: "favorite-uncategorized",
                        label: o.intl.string(o.t.GSfOoo),
                        action: () => f(null),
                    }),
                }),
            h.length > 0 &&
                (0, l.jsx)(r.rX, {
                    children: h.map((n) => {
                        let { id: e, name: t } = n;
                        return (0, l.jsx)(r.Dr, { id: `favorite-${e}`, label: t, action: () => f(e) }, e);
                    }),
                }),
        ],
    });
}
