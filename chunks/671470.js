e.d(t, { A: () => s }), e(321073);
var i = e(627968);
e(64700);
var r = e(397927),
    l = e(422258),
    a = e(93055),
    d = e(985018);
function s(n) {
    let t = (0, a.Fe)(),
        e = (0, a.Af)(n.id),
        s = (0, a.Rm)();
    if (__OVERLAY__ || !t || null == e) return null;
    let [u, o] = (function (n) {
        let t = [],
            e = null;
        for (let i of n) null == i.id ? (e = i) : t.push(i);
        return [e, t];
    })(s.filter((n) => n.id !== e?.parentId));
    function c(n) {
        null != e && (0, l.JD)(e.id, n);
    }
    if (null == u && 0 === o.length) return null;
    let A = u?.id ?? null,
        f = u?.name ?? d.intl.string(d.t.GSfOoo);
    return (0, i.jsxs)(r.Drp, {
        id: "move-to-category",
        label: d.intl.string(d.t.FAplms),
        children: [
            null != u &&
                (0, i.jsx)(r.rXV, {
                    children: (0, i.jsx)(r.Drp, { id: "favorite-uncategorized", label: f, action: () => c(A) }),
                }),
            o.length > 0 &&
                (0, i.jsx)(r.rXV, {
                    children: o.map((n) => {
                        let { id: t, name: e } = n;
                        return (0, i.jsx)(r.Drp, { id: `favorite-${t}`, label: e, action: () => c(t) }, t);
                    }),
                }),
        ],
    });
}
