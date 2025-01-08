t.d(n, {
    Z: function () {
        return g;
    }
});
var l = t(200651),
    i = t(192379),
    r = t(120356),
    a = t.n(r),
    s = t(666912),
    o = t(399606),
    c = t(481060),
    d = t(201070),
    u = t(893966),
    m = t(472596),
    x = t(598948),
    h = t(428936),
    C = t(41586),
    j = t(676391);
function b(e) {
    let { guild: n } = e,
        t = (0, d.$j)(n.id),
        i = (0, c.useSpring)({
            height: t ? 3 : 0,
            config: s.config.stiff
        });
    return (0, l.jsx)('div', {
        className: j.loaderContainer,
        children: (0, l.jsx)(s.animated.div, {
            className: j.loaderBar,
            style: i
        })
    });
}
function g(e) {
    let { guild: n, className: t, onPageChange: r, onMemberSelect: s } = e,
        g = n.id,
        f = (0, o.e7)([u.Z], () => u.Z.getEstimatedMemberSearchCountByGuildId(g), [g]),
        N = (0, d.$j)(g),
        _ = (0, d.M3)(g),
        v = i.useCallback(
            (e) => {
                if (null != e) null == s || s(e);
            },
            [s]
        ),
        E = (0, m.xb)(_, N, f),
        T = i.useRef(null),
        I = i.useRef(null),
        S = i.useCallback(() => {
            var e;
            null === (e = T.current) || void 0 === e || e.resetSearchText();
        }, []);
    return (0, l.jsx)('div', {
        className: a()(j.mainTableContainer, t),
        children: (0, l.jsxs)(c.AdvancedScroller, {
            className: a()(j.horizatonalScroller),
            ref: I,
            orientation: 'horizontal',
            children: [
                (0, l.jsx)(C.Z, {
                    guild: n,
                    ref: T
                }),
                (0, l.jsx)(b, { guild: n }),
                (0, l.jsx)(x.Z, {
                    guild: n,
                    onSelectRow: v,
                    searchState: E,
                    onResetForNewMembers: S
                }),
                E !== m.po.SUCCESS_STILL_INDEXING &&
                    (0, l.jsx)(h.Z, {
                        guildId: n.id,
                        onPageChange: r
                    })
            ]
        })
    });
}
