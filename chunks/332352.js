l.d(t, { A: () => g });
var n = l(627968),
    r = l(64700),
    i = l(503698),
    s = l.n(i),
    a = l(432022),
    c = l(417597),
    d = l(397927),
    o = l(343969),
    u = l(266047),
    x = l(189552),
    m = l(508160),
    j = l(749060),
    b = l(374963),
    f = l(663282);
function h(e) {
    let { guild: t } = e,
        l = (0, o.Ms)(t.id),
        r = (0, d.zhh)({
            height: 3 * !!l,
            config: a.config.stiff,
        });
    return (0, n.jsx)("div", {
        className: f.NQ,
        children: (0, n.jsx)(a.animated.div, {
            className: f.b0,
            style: r,
        }),
    });
}
function g(e) {
    let { guild: t, className: l, onPageChange: i, onMemberSelect: a } = e,
        g = t.id,
        v = (0, c.bG)([u.A], () => u.A.getEstimatedMemberSearchCountByGuildId(g), [g]),
        A = (0, o.Ms)(g),
        p = (0, o.Wl)(g),
        E = r.useCallback(
            (e) => {
                null != e && (null == a || a(e));
            },
            [a],
        ),
        S = (0, x.ii)(p, A, v),
        T = r.useRef(null),
        y = r.useRef(null),
        _ = r.useCallback(() => {
            var e;
            null == (e = T.current) || e.resetSearchText();
        }, []);
    return (0, n.jsx)("div", {
        className: s()(f.FV, l),
        children: (0, n.jsxs)(d.T7Y, {
            className: f.A0,
            ref: y,
            orientation: "horizontal",
            children: [
                (0, n.jsx)(b.A, {
                    guild: t,
                    ref: T,
                }),
                (0, n.jsx)(h, { guild: t }),
                (0, n.jsx)(m.A, {
                    guild: t,
                    onSelectRow: E,
                    searchState: S,
                    onResetForNewMembers: _,
                }),
                S !== x.IY.SUCCESS_STILL_INDEXING &&
                    (0, n.jsx)(j.A, {
                        guildId: t.id,
                        onPageChange: i,
                    }),
            ],
        }),
    });
}
