n.d(t, { Z: () => p });
var l = n(255367),
    r = n(73800),
    a = n(120356),
    i = n.n(a),
    s = n(66546),
    o = n(399606),
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
        r = (0, c.q_F)({
            height: 3 * !!n,
            config: s.config.stiff
        });
    return (0, l.jsx)('div', {
        className: b.loaderContainer,
        children: (0, l.jsx)(s.animated.div, {
            className: b.loaderBar,
            style: r
        })
    });
}
function p(e) {
    let { guild: t, className: n, onPageChange: a, onMemberSelect: s } = e,
        p = t.id,
        C = (0, o.e7)([u.Z], () => u.Z.getEstimatedMemberSearchCountByGuildId(p), [p]),
        v = (0, d.$j)(p),
        g = (0, d.M3)(p),
        _ = r.useCallback(
            (e) => {
                null != e && (null == s || s(e));
            },
            [s]
        ),
        T = (0, m.xb)(g, v, C),
        E = r.useRef(null),
        N = r.useRef(null),
        S = r.useCallback(() => {
            var e;
            null == (e = E.current) || e.resetSearchText();
        }, []);
    return (0, l.jsx)('div', {
        className: i()(b.mainTableContainer, n),
        children: (0, l.jsxs)(c.Den, {
            className: b.horizatonalScroller,
            ref: N,
            orientation: 'horizontal',
            children: [
                (0, l.jsx)(j.Z, {
                    guild: t,
                    ref: E
                }),
                (0, l.jsx)(f, { guild: t }),
                (0, l.jsx)(x.Z, {
                    guild: t,
                    onSelectRow: _,
                    searchState: T,
                    onResetForNewMembers: S
                }),
                T !== m.po.SUCCESS_STILL_INDEXING &&
                    (0, l.jsx)(h.Z, {
                        guildId: t.id,
                        onPageChange: a
                    })
            ]
        })
    });
}
