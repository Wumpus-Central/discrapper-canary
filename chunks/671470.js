t.d(n, { A: () => s });
var i = t(627968),
    r = t(397927),
    l = t(422258),
    a = t(93055),
    d = t(985018);
function s(e) {
    let n = (0, a.DZ)(),
        t = (0, a.Af)(e.id),
        s = (0, a.Rm)();
    if (__OVERLAY__ || !n || null == t) return null;
    let u = s.filter((e) => null != e.id && e.id !== t.parentId),
        c = null != t.parentId;
    if (!c && 0 === u.length) return null;
    function o(e) {
        null != t && (0, l.JD)(t.id, e);
    }
    return (0, i.jsxs)(r.Drp, {
        id: "move-to-category",
        label: d.intl.string(d.t.FAplms),
        children: [
            c &&
                (0, i.jsx)(r.rXV, {
                    children: (0, i.jsx)(r.Drp, {
                        id: "favorite-uncategorized",
                        label: d.intl.string(d.t.GSfOoo),
                        action: () => o(null),
                    }),
                }),
            u.length > 0 &&
                (0, i.jsx)(r.rXV, {
                    children: u.map((e) => {
                        let { id: n, name: t } = e;
                        return (0, i.jsx)(r.Drp, { id: `favorite-${n}`, label: t, action: () => o(n) }, n);
                    }),
                }),
        ],
    });
}
