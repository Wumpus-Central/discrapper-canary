n.r(t), n.d(t, { default: () => x });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(311907),
    o = n(289873),
    d = n(305866),
    c = n(793574),
    u = n(688810),
    m = n(250527),
    _ = n(837011),
    h = n(90084),
    p = n(635853),
    g = n(42780),
    A = n(576055),
    f = n(781516);
function x(e) {
    let { guildId: t, name: n, setPopoutRef: a, onClose: x } = e,
        { analyticsLocations: C } = (0, u.Ay)(c.A.GUILD_PROFILE),
        { guildProfile: E, fetchGuildProfile: I, fetchStatus: v } = (0, h.u)(t),
        b = (0, r.bG)([_.A], () => _.A.getErrorCode(t)),
        T = l.useRef(null),
        S = l.useCallback(() => {
            I(!0);
        }, [I]);
    l.useEffect(() => {
        I();
    }, [I]),
        l.useEffect(() => {
            (0, m.sf)(t, C);
        }, [t, C]),
        l.useEffect(() => {
            a?.(T?.current);
        }, [T, a]);
    let y = l.useMemo(
        () =>
            v === _.X.NOT_FETCHED || v === _.X.FETCHING
                ? (0, i.jsx)("div", { className: s()(f.k, f.d), children: (0, i.jsx)(o.y, {}) })
                : null == E && 50001 === b
                  ? (0, i.jsx)("div", { className: f.k, children: (0, i.jsx)(A.A, { guildId: t, name: n }) })
                  : null == E
                    ? (0, i.jsx)("div", { className: f.k, children: (0, i.jsx)(p.A, { name: n, onRetry: S }) })
                    : (0, i.jsx)("div", { className: f.k, children: (0, i.jsx)(g.Ay, { profile: E, onClose: x }) }),
        [v, E, b, t, n, S, x],
    );
    return (0, i.jsx)(d.l, { ref: T, "aria-label": E?.name, children: y });
}
