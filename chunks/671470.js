t.d(n, { A: () => s });
var i = t(627968),
    r = t(477782),
    l = t(422258),
    d = t(313281),
    a = t(985018);
function s(e) {
    let n = (0, d.DZ)(),
        t = (0, d.Af)(e.id),
        s = (0, d.Rm)();
    if (__OVERLAY__ || !n || null == t) return null;
    let u = s.filter((e) => null != e.id && e.id !== t.parentId),
        c = null != t.parentId;
    if (!c && 0 === u.length) return null;
    function o(e) {
        null != t && (0, l.JD)(t.id, e);
    }
    return (0, i.jsxs)(r.Dr, {
        id: "move-to-category",
        label: a.intl.string(a.t.FAplms),
        children: [
            c &&
                (0, i.jsx)(r.rX, {
                    children: (0, i.jsx)(r.Dr, {
                        id: "favorite-uncategorized",
                        label: a.intl.string(a.t.GSfOoo),
                        action: () => o(null),
                    }),
                }),
            u.length > 0 &&
                (0, i.jsx)(r.rX, {
                    children: u.map((e) => {
                        let { id: n, name: t } = e;
                        return (0, i.jsx)(r.Dr, { id: `favorite-${n}`, label: t, action: () => o(n) }, n);
                    }),
                }),
        ],
    });
}
