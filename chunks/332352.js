l.d(t, { A: () => g });
var n = l(627968),
    s = l(64700),
    i = l(503698),
    a = l.n(i),
    r = l(382222),
    d = l(417597),
    c = l(397927),
    o = l(343969),
    u = l(266047),
    x = l(189552),
    m = l(508160),
    h = l(749060),
    j = l(597344),
    _ = l(522549);
function A(e) {
    let { guild: t } = e,
        l = (0, o.Ms)(t.id),
        s = (0, c.zhh)({ height: 3 * !!l, config: r.config.stiff });
    return (0, n.jsx)("div", { className: _.NQ, children: (0, n.jsx)(r.animated.div, { className: _.b0, style: s }) });
}
function g(e) {
    let { guild: t, className: l, onPageChange: i, onMemberSelect: r } = e,
        g = t.id,
        b = (0, d.bG)([u.A], () => u.A.getEstimatedMemberSearchCountByGuildId(g), [g]),
        T = (0, o.Ms)(g),
        f = (0, o.Wl)(g),
        E = s.useCallback(
            (e) => {
                null != e && r?.(e);
            },
            [r],
        ),
        v = (0, x.ii)(f, T, b),
        S = s.useRef(null),
        N = s.useRef(null),
        I = s.useCallback(() => {
            S.current?.resetSearchText();
        }, []);
    return (0, n.jsx)("div", {
        className: a()(_.FV, l),
        children: (0, n.jsxs)(c.T7Y, {
            className: _.A0,
            ref: N,
            orientation: "horizontal",
            children: [
                (0, n.jsx)(j.A, { guild: t, ref: S }),
                (0, n.jsx)(A, { guild: t }),
                (0, n.jsx)(m.A, { guild: t, onSelectRow: E, searchState: v, onResetForNewMembers: I }),
                v !== x.IY.SUCCESS_STILL_INDEXING && (0, n.jsx)(h.A, { guildId: t.id, onPageChange: i }),
            ],
        }),
    });
}
