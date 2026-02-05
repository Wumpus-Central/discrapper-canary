n.d(t, { w: () => E });
var i = n(627968),
    s = n(64700),
    r = n(284009),
    a = n.n(r),
    l = n(417597),
    o = n(397927),
    c = n(287809),
    d = n(53719),
    u = n(390370),
    _ = n(191627),
    m = n(842130),
    A = n(985018),
    g = n(487693);
function E(e) {
    let { user: t } = e,
        r = (0, l.bG)([c.default], () => c.default.getCurrentUser()),
        E = s.useCallback(() => {
            a()(void 0 !== r, "User must be logged in to accept a link request"),
                (0, o.mMO)(async () => {
                    let { default: e } = await n.e("43139").then(n.bind(n, 179950));
                    return (n) => (0, i.jsx)(e, { ...n, currentUser: r, otherUser: t });
                });
        }, [r, t]);
    return (0, i.jsxs)("div", {
        className: g.kL,
        children: [
            (0, i.jsx)("div", { className: g.zH, children: (0, i.jsx)(u.A, { otherUser: t, status: _.Ef.ACTIVE }) }),
            (0, i.jsx)("div", {
                className: g.o1,
                children: (0, i.jsx)(d.A, { icon: o.PGe, tooltip: A.intl.string(m.default.l20ZZp), onClick: E }),
            }),
        ],
    });
}
