t.d(n, {
    Z: function () {
        return f;
    }
});
var l = t(200651),
    r = t(192379),
    i = t(120356),
    a = t.n(i),
    s = t(642128),
    o = t(399606),
    c = t(481060),
    d = t(201070),
    u = t(893966),
    m = t(472596),
    x = t(598948),
    h = t(428936),
    j = t(41586),
    C = t(676391);
function b(e) {
    let { guild: n } = e,
        t = (0, d.$j)(n.id),
        r = (0, c.useSpring)({
            height: t ? 3 : 0,
            config: s.config.stiff
        });
    return (0, l.jsx)('div', {
        className: C.loaderContainer,
        children: (0, l.jsx)(s.animated.div, {
            className: C.loaderBar,
            style: r
        })
    });
}
function f(e) {
    let { guild: n, className: t, onPageChange: i, onMemberSelect: s } = e,
        f = n.id,
        v = (0, o.e7)([u.Z], () => u.Z.getEstimatedMemberSearchCountByGuildId(f), [f]),
        g = (0, d.$j)(f),
        N = (0, d.M3)(f),
        I = r.useCallback(
            (e) => {
                if (null != e) null == s || s(e);
            },
            [s]
        ),
        _ = (0, m.xb)(N, g, v),
        T = r.useRef(null),
        E = r.useRef(null),
        S = r.useCallback(() => {
            var e;
            null === (e = T.current) || void 0 === e || e.resetSearchText();
        }, []);
    return (0, l.jsx)('div', {
        className: a()(C.mainTableContainer, t),
        children: (0, l.jsxs)(c.AdvancedScroller, {
            className: a()(C.horizatonalScroller),
            ref: E,
            orientation: 'horizontal',
            children: [
                (0, l.jsx)(j.Z, {
                    guild: n,
                    ref: T
                }),
                (0, l.jsx)(b, { guild: n }),
                (0, l.jsx)(x.Z, {
                    guild: n,
                    onSelectRow: I,
                    searchState: _,
                    onResetForNewMembers: S
                }),
                _ !== m.po.SUCCESS_STILL_INDEXING &&
                    (0, l.jsx)(h.Z, {
                        guildId: n.id,
                        onPageChange: i
                    })
            ]
        })
    });
}
