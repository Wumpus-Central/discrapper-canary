n.d(t, { Z: () => N });
var r = n(200651),
    l = n(192379),
    a = n(120356),
    i = n.n(a),
    s = n(200100),
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
        l = (0, c.q_F)({
            height: 3 * !!n,
            config: s.config.stiff
        });
    return (0, r.jsx)('div', {
        className: b.loaderContainer,
        children: (0, r.jsx)(s.animated.div, {
            className: b.loaderBar,
            style: l
        })
    });
}
function N(e) {
    let { guild: t, className: n, onPageChange: a, onMemberSelect: s } = e,
        N = t.id,
        C = (0, o.e7)([u.Z], () => u.Z.getEstimatedMemberSearchCountByGuildId(N), [N]),
        p = (0, d.$j)(N),
        v = (0, d.M3)(N),
        g = l.useCallback(
            (e) => {
                null != e && (null == s || s(e));
            },
            [s]
        ),
        _ = (0, m.xb)(v, p, C),
        T = l.useRef(null),
        I = l.useRef(null),
        E = l.useCallback(() => {
            var e;
            null == (e = T.current) || e.resetSearchText();
        }, []);
    return (0, r.jsx)('div', {
        className: i()(b.mainTableContainer, n),
        children: (0, r.jsxs)(c.Den, {
            className: b.horizatonalScroller,
            ref: I,
            orientation: 'horizontal',
            children: [
                (0, r.jsx)(j.Z, {
                    guild: t,
                    ref: T
                }),
                (0, r.jsx)(f, { guild: t }),
                (0, r.jsx)(x.Z, {
                    guild: t,
                    onSelectRow: g,
                    searchState: _,
                    onResetForNewMembers: E
                }),
                _ !== m.po.SUCCESS_STILL_INDEXING &&
                    (0, r.jsx)(h.Z, {
                        guildId: t.id,
                        onPageChange: a
                    })
            ]
        })
    });
}
