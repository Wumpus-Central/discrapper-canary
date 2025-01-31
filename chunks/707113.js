t.d(n, { Z: () => f });
var l = t(200651),
    i = t(192379),
    r = t(120356),
    a = t.n(r),
    s = t(642128),
    o = t(399606),
    d = t(481060),
    c = t(201070),
    u = t(893966),
    m = t(472596),
    x = t(598948),
    h = t(428936),
    j = t(41586),
    _ = t(676391);
function C(e) {
    let { guild: n } = e,
        t = (0, c.$j)(n.id),
        i = (0, d.q_F)({
            height: t ? 3 : 0,
            config: s.config.stiff
        });
    return (0, l.jsx)('div', {
        className: _.loaderContainer,
        children: (0, l.jsx)(s.animated.div, {
            className: _.loaderBar,
            style: i
        })
    });
}
function f(e) {
    let { guild: n, className: t, onPageChange: r, onMemberSelect: s } = e,
        f = n.id,
        v = (0, o.e7)([u.Z], () => u.Z.getEstimatedMemberSearchCountByGuildId(f), [f]),
        N = (0, c.$j)(f),
        b = (0, c.M3)(f),
        E = i.useCallback(
            (e) => {
                null != e && (null == s || s(e));
            },
            [s]
        ),
        g = (0, m.xb)(b, N, v),
        T = i.useRef(null),
        I = i.useRef(null),
        S = i.useCallback(() => {
            var e;
            null === (e = T.current) || void 0 === e || e.resetSearchText();
        }, []);
    return (0, l.jsx)('div', {
        className: a()(_.mainTableContainer, t),
        children: (0, l.jsxs)(d.Den, {
            className: a()(_.horizatonalScroller),
            ref: I,
            orientation: 'horizontal',
            children: [
                (0, l.jsx)(j.Z, {
                    guild: n,
                    ref: T
                }),
                (0, l.jsx)(C, { guild: n }),
                (0, l.jsx)(x.Z, {
                    guild: n,
                    onSelectRow: E,
                    searchState: g,
                    onResetForNewMembers: S
                }),
                g !== m.po.SUCCESS_STILL_INDEXING &&
                    (0, l.jsx)(h.Z, {
                        guildId: n.id,
                        onPageChange: r
                    })
            ]
        })
    });
}
