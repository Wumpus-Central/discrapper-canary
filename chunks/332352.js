l.d(t, {
    A: () => g,
});
var n = l(627968),
    r = l(64700),
    i = l(503698),
    s = l.n(i),
    a = l(92674),
    o = l(417597),
    c = l(397927),
    d = l(343969),
    u = l(266047),
    x = l(189552),
    m = l(508160),
    j = l(749060),
    b = l(374963),
    h = l(663282);

function f(e) {
    let { guild: t } = e,
        l = (0, d.Ms)(t.id),
        r = (0, c.zhh)({
            height: 3 * !!l,
            config: a.config.stiff,
        });
    return (0, n.jsx)("div", {
        className: h.NQ,
        children: (0, n.jsx)(a.animated.div, {
            className: h.b0,
            style: r,
        }),
    });
}

function g(e) {
    let { guild: t, className: l, onPageChange: i, onMemberSelect: a } = e,
        g = t.id,
        v = (0, o.bG)([u.A], () => u.A.getEstimatedMemberSearchCountByGuildId(g), [g]),
        _ = (0, d.Ms)(g),
        A = (0, d.Wl)(g),
        p = r.useCallback(
            (e) => {
                null != e && (null == a || a(e));
            },
            [a],
        ),
        T = (0, x.ii)(A, _, v),
        E = r.useRef(null),
        S = r.useRef(null),
        y = r.useCallback(() => {
            var e;
            null == (e = E.current) || e.resetSearchText();
        }, []);
    return (0, n.jsx)("div", {
        className: s()(h.FV, l),
        children: (0, n.jsxs)(c.T7Y, {
            className: h.A0,
            ref: S,
            orientation: "horizontal",
            children: [
                (0, n.jsx)(b.A, {
                    guild: t,
                    ref: E,
                }),
                (0, n.jsx)(f, {
                    guild: t,
                }),
                (0, n.jsx)(m.A, {
                    guild: t,
                    onSelectRow: p,
                    searchState: T,
                    onResetForNewMembers: y,
                }),
                T !== x.IY.SUCCESS_STILL_INDEXING &&
                    (0, n.jsx)(j.A, {
                        guildId: t.id,
                        onPageChange: i,
                    }),
            ],
        }),
    });
}
