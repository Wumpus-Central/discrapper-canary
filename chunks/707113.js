n.d(t, { Z: () => g });
var l = n(951288),
    r = n(647438),
    i = n(120356),
    a = n.n(i),
    s = n(358458),
    o = n(399606),
    c = n(481060),
    d = n(201070),
    u = n(893966),
    m = n(472596),
    x = n(598948),
    j = n(428936),
    b = n(41586),
    h = n(243194);
function f(e) {
    let { guild: t } = e,
        n = (0, d.$j)(t.id),
        r = (0, c.q_F)({
            height: 3 * !!n,
            config: s.config.stiff,
        });
    return (0, l.jsx)("div", {
        className: h.loaderContainer,
        children: (0, l.jsx)(s.animated.div, {
            className: h.loaderBar,
            style: r,
        }),
    });
}
function g(e) {
    let { guild: t, className: n, onPageChange: i, onMemberSelect: s } = e,
        g = t.id,
        p = (0, o.e7)([u.Z], () => u.Z.getEstimatedMemberSearchCountByGuildId(g), [g]),
        v = (0, d.$j)(g),
        _ = (0, d.M3)(g),
        C = r.useCallback(
            (e) => {
                null != e && (null == s || s(e));
            },
            [s],
        ),
        E = (0, m.xb)(_, v, p),
        S = r.useRef(null),
        T = r.useRef(null),
        N = r.useCallback(() => {
            var e;
            null == (e = S.current) || e.resetSearchText();
        }, []);
    return (0, l.jsx)("div", {
        className: a()(h.mainTableContainer, n),
        children: (0, l.jsxs)(c.Den, {
            className: h.horizatonalScroller,
            ref: T,
            orientation: "horizontal",
            children: [
                (0, l.jsx)(b.Z, {
                    guild: t,
                    ref: S,
                }),
                (0, l.jsx)(f, { guild: t }),
                (0, l.jsx)(x.Z, {
                    guild: t,
                    onSelectRow: C,
                    searchState: E,
                    onResetForNewMembers: N,
                }),
                E !== m.po.SUCCESS_STILL_INDEXING &&
                    (0, l.jsx)(j.Z, {
                        guildId: t.id,
                        onPageChange: i,
                    }),
            ],
        }),
    });
}
