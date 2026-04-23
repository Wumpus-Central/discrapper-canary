l.d(t, { A: () => f });
var n = l(627968),
    s = l(64700),
    i = l(503698),
    a = l.n(i),
    r = l(419354),
    o = l(417597),
    d = l(717421),
    c = l(599319),
    u = l(343969),
    x = l(266047),
    m = l(189552),
    h = l(508160),
    j = l(749060),
    _ = l(374963),
    A = l(494213);
function g(e) {
    let { guild: t } = e,
        l = (0, u.Ms)(t.id),
        s = (0, d.z)({ height: 3 * !!l, config: r.config.stiff });
    return (0, n.jsx)("div", { className: A.NQ, children: (0, n.jsx)(r.animated.div, { className: A.b0, style: s }) });
}
function f(e) {
    let { guild: t, className: l, onPageChange: i, onMemberSelect: r } = e,
        d = t.id,
        f = (0, o.bG)([x.A], () => x.A.getEstimatedMemberSearchCountByGuildId(d), [d]),
        E = (0, u.Ms)(d),
        v = (0, u.Wl)(d),
        b = s.useCallback(
            (e) => {
                null != e && r?.(e);
            },
            [r],
        ),
        N = (0, m.ii)(v, E, f),
        S = s.useRef(null),
        C = s.useRef(null),
        p = s.useCallback(() => {
            S.current?.resetSearchText();
        }, []);
    return (0, n.jsx)("div", {
        className: a()(A.FV, l),
        children: (0, n.jsxs)(c.Ch, {
            className: A.A0,
            ref: C,
            orientation: "horizontal",
            children: [
                (0, n.jsx)(_.A, { guild: t, ref: S }),
                (0, n.jsx)(g, { guild: t }),
                (0, n.jsx)(h.A, { guild: t, onSelectRow: b, searchState: N, onResetForNewMembers: p }),
                N !== m.IY.SUCCESS_STILL_INDEXING && (0, n.jsx)(j.A, { guildId: t.id, onPageChange: i }),
            ],
        }),
    });
}
