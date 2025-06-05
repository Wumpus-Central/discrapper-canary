n.d(t, { Z: () => p });
var r = n(255367),
    l = n(73800),
    i = n(120356),
    a = n.n(i),
    o = n(386230),
    s = n(399606),
    c = n(481060),
    d = n(201070),
    u = n(893966),
    m = n(472596),
    x = n(598948),
    h = n(428936),
    j = n(41586),
    b = n(710931);
function f(e) {
    let { guild: t } = e,
        n = (0, d.$j)(t.id),
        l = (0, c.q_F)({
            height: 3 * !!n,
            config: o.config.stiff
        });
    return (0, r.jsx)('div', {
        className: b.loaderContainer,
        children: (0, r.jsx)(o.animated.div, {
            className: b.loaderBar,
            style: l
        })
    });
}
function p(e) {
    let { guild: t, className: n, onPageChange: i, onMemberSelect: o } = e,
        p = t.id,
        g = (0, s.e7)([u.Z], () => u.Z.getEstimatedMemberSearchCountByGuildId(p), [p]),
        v = (0, d.$j)(p),
        C = (0, d.M3)(p),
        _ = l.useCallback(
            (e) => {
                null != e && (null == o || o(e));
            },
            [o]
        ),
        T = (0, m.xb)(C, v, g),
        N = l.useRef(null),
        E = l.useRef(null),
        S = l.useCallback(() => {
            var e;
            null == (e = N.current) || e.resetSearchText();
        }, []);
    return (0, r.jsx)('div', {
        className: a()(b.mainTableContainer, n),
        children: (0, r.jsxs)(c.Den, {
            className: b.horizatonalScroller,
            ref: E,
            orientation: 'horizontal',
            children: [
                (0, r.jsx)(j.Z, {
                    guild: t,
                    ref: N
                }),
                (0, r.jsx)(f, { guild: t }),
                (0, r.jsx)(x.Z, {
                    guild: t,
                    onSelectRow: _,
                    searchState: T,
                    onResetForNewMembers: S
                }),
                T !== m.po.SUCCESS_STILL_INDEXING &&
                    (0, r.jsx)(h.Z, {
                        guildId: t.id,
                        onPageChange: i
                    })
            ]
        })
    });
}
