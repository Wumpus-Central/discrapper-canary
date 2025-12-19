n.d(t, { Z: () => g });
var l = n(54381),
    r = n(473749),
    a = n(120356),
    i = n.n(a),
    s = n(620792),
    o = n(399606),
    c = n(481060),
    d = n(201070),
    u = n(893966),
    m = n(472596),
    x = n(598948),
    b = n(428936),
    j = n(41586),
    f = n(803767);
function h(e) {
    let { guild: t } = e,
        n = (0, d.$j)(t.id),
        r = (0, c.q_F)({
            height: 3 * !!n,
            config: s.config.stiff,
        });
    return (0, l.jsx)("div", {
        className: f.loaderContainer,
        children: (0, l.jsx)(s.animated.div, {
            className: f.loaderBar,
            style: r,
        }),
    });
}
function g(e) {
    let { guild: t, className: n, onPageChange: a, onMemberSelect: s } = e,
        g = t.id,
        p = (0, o.e7)([u.Z], () => u.Z.getEstimatedMemberSearchCountByGuildId(g), [g]),
        v = (0, d.$j)(g),
        C = (0, d.M3)(g),
        T = r.useCallback(
            (e) => {
                null != e && (null == s || s(e));
            },
            [s],
        ),
        S = (0, m.xb)(C, v, p),
        E = r.useRef(null),
        N = r.useRef(null),
        O = r.useCallback(() => {
            var e;
            null == (e = E.current) || e.resetSearchText();
        }, []);
    return (0, l.jsx)("div", {
        className: i()(f.mainTableContainer, n),
        children: (0, l.jsxs)(c.Den, {
            className: f.horizatonalScroller,
            ref: N,
            orientation: "horizontal",
            children: [
                (0, l.jsx)(j.Z, {
                    guild: t,
                    ref: E,
                }),
                (0, l.jsx)(h, { guild: t }),
                (0, l.jsx)(x.Z, {
                    guild: t,
                    onSelectRow: T,
                    searchState: S,
                    onResetForNewMembers: O,
                }),
                S !== m.po.SUCCESS_STILL_INDEXING &&
                    (0, l.jsx)(b.Z, {
                        guildId: t.id,
                        onPageChange: a,
                    }),
            ],
        }),
    });
}
