t.d(n, { Z: () => f });
var l = t(200651),
    i = t(192379),
    r = t(120356),
    a = t.n(r),
    s = t(642128),
    o = t(399606),
    c = t(481060),
    d = t(201070),
    u = t(893966),
    m = t(472596),
    x = t(598948),
    h = t(428936),
    j = t(41586),
    C = t(501747);
function _(e) {
    let { guild: n } = e,
        t = (0, d.$j)(n.id),
        i = (0, c.q_F)({
            height: t ? 3 : 0,
            config: s.config.stiff
        });
    return (0, l.jsx)('div', {
        className: C.loaderContainer,
        children: (0, l.jsx)(s.animated.div, {
            className: C.loaderBar,
            style: i
        })
    });
}
function f(e) {
    let { guild: n, className: t, onPageChange: r, onMemberSelect: s } = e,
        f = n.id,
        b = (0, o.e7)([u.Z], () => u.Z.getEstimatedMemberSearchCountByGuildId(f), [f]),
        v = (0, d.$j)(f),
        N = (0, d.M3)(f),
        g = i.useCallback(
            (e) => {
                null != e && (null == s || s(e));
            },
            [s]
        ),
        T = (0, m.xb)(N, v, b),
        p = i.useRef(null),
        I = i.useRef(null),
        E = i.useCallback(() => {
            var e;
            null === (e = p.current) || void 0 === e || e.resetSearchText();
        }, []);
    return (0, l.jsx)('div', {
        className: a()(C.mainTableContainer, t),
        children: (0, l.jsxs)(c.Den, {
            className: a()(C.horizatonalScroller),
            ref: I,
            orientation: 'horizontal',
            children: [
                (0, l.jsx)(j.Z, {
                    guild: n,
                    ref: p
                }),
                (0, l.jsx)(_, { guild: n }),
                (0, l.jsx)(x.Z, {
                    guild: n,
                    onSelectRow: g,
                    searchState: T,
                    onResetForNewMembers: E
                }),
                T !== m.po.SUCCESS_STILL_INDEXING &&
                    (0, l.jsx)(h.Z, {
                        guildId: n.id,
                        onPageChange: r
                    })
            ]
        })
    });
}
