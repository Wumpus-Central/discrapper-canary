n.d(t, { Z: () => g });
var l = n(54381),
    r = n(473749),
    i = n(120356),
    a = n.n(i),
    s = n(636606),
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
        C = (0, d.M3)(g),
        _ = r.useCallback(
            (e) => {
                null != e && (null == s || s(e));
            },
            [s],
        ),
        S = (0, m.xb)(C, v, p),
        T = r.useRef(null),
        E = r.useRef(null),
        N = r.useCallback(() => {
            var e;
            null == (e = T.current) || e.resetSearchText();
        }, []);
    return (0, l.jsx)("div", {
        className: a()(h.mainTableContainer, n),
        children: (0, l.jsxs)(c.Den, {
            className: h.horizatonalScroller,
            ref: E,
            orientation: "horizontal",
            children: [
                (0, l.jsx)(b.Z, {
                    guild: t,
                    ref: T,
                }),
                (0, l.jsx)(f, { guild: t }),
                (0, l.jsx)(x.Z, {
                    guild: t,
                    onSelectRow: _,
                    searchState: S,
                    onResetForNewMembers: N,
                }),
                S !== m.po.SUCCESS_STILL_INDEXING &&
                    (0, l.jsx)(j.Z, {
                        guildId: t.id,
                        onPageChange: i,
                    }),
            ],
        }),
    });
}
