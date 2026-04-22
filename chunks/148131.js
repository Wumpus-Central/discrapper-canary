l.d(t, { w: () => A });
var n = l(627968),
    i = l(64700),
    s = l(284009),
    a = l.n(s),
    r = l(417597),
    d = l(192308),
    c = l(789645),
    u = l(287809),
    o = l(53719),
    x = l(390370),
    h = l(191627),
    m = l(602339),
    g = l(985018),
    j = l(528218);
function A(e) {
    let { user: t } = e,
        s = (0, r.bG)([u.default], () => u.default.getCurrentUser()),
        A = i.useCallback(() => {
            a()(void 0 !== s, "User must be logged in to accept a link request"),
                (0, d.openModalLazy)(async () => {
                    let { default: e } = await l.e("43139").then(l.bind(l, 179950));
                    return (l) => (0, n.jsx)(e, { ...l, currentUser: s, otherUser: t });
                });
        }, [s, t]);
    return (0, n.jsxs)("div", {
        className: j.kL,
        children: [
            (0, n.jsx)("div", { className: j.zH, children: (0, n.jsx)(x.A, { otherUser: t, status: h.Ef.ACTIVE }) }),
            (0, n.jsx)("div", {
                className: j.o1,
                children: (0, n.jsx)(o.A, { icon: c.P, tooltip: g.intl.string(m.default.l20ZZp), onClick: A }),
            }),
        ],
    });
}
