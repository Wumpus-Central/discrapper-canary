i.r(t), i.d(t, { default: () => y });
var n = i(627968),
    r = i(64700),
    l = i(503698),
    a = i.n(l),
    s = i(17928),
    o = i(289873),
    d = i(305866),
    c = i(793574),
    u = i(688810),
    _ = i(250527),
    m = i(837011),
    h = i(90084),
    E = i(534514),
    f = i(939249),
    N = i(695366),
    I = i(834730),
    v = i(573435),
    x = i(145497),
    A = i(649640),
    g = i(985018),
    T = i(890653);
function R(e) {
    let { name: t, onRetry: i } = e,
        r = (0, A.b2)(),
        l = (0, A.n6)(r.hex()),
        a = t ?? g.intl.string(g.t.DmIUGK);
    return (0, n.jsxs)("div", {
        className: T.kL,
        children: [
            (0, n.jsx)("div", { className: T.vK, style: { background: l } }),
            (0, n.jsx)("div", {
                className: T.H,
                children: (0, n.jsx)(v.Ay, {
                    mask: v.hW.CLAN_ICON,
                    width: 70,
                    height: 70,
                    children: (0, n.jsx)("div", {
                        className: T.R3,
                        children: (0, n.jsx)(x.B$, { guildName: a, iconSize: 64 }),
                    }),
                }),
            }),
            (0, n.jsxs)("div", {
                className: T.wx,
                children: [
                    (0, n.jsx)(E.D, { variant: "heading-lg/medium", color: "text-strong", children: a }),
                    (0, n.jsxs)(f.D, {
                        className: T.z3,
                        onClick: i,
                        children: [
                            (0, n.jsx)(N.E, { size: "sm", color: "currentColor" }),
                            (0, n.jsx)(I.E, {
                                variant: "text-sm/normal",
                                color: "text-feedback-warning",
                                children: g.intl.string(g.t.tmGHjc),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var C = i(42780),
    p = i(576055),
    j = i(781516);
function y(e) {
    let { guildId: t, name: i, setPopoutRef: l, onClose: E } = e,
        { analyticsLocations: f } = (0, u.Ay)(c.A.GUILD_PROFILE),
        { guildProfile: N, fetchGuildProfile: I, fetchStatus: v } = (0, h.u)(t),
        x = (0, s.bG)([m.A], () => m.A.getErrorCode(t)),
        A = r.useRef(null),
        g = r.useCallback(() => {
            I(!0);
        }, [I]);
    r.useEffect(() => {
        I();
    }, [I]),
        r.useEffect(() => {
            (0, _.sf)(t, f);
        }, [t, f]),
        r.useEffect(() => {
            l?.(A?.current);
        }, [A, l]);
    let T = r.useMemo(
        () =>
            v === m.X.NOT_FETCHED || v === m.X.FETCHING
                ? (0, n.jsx)("div", { className: a()(j.k, j.d), children: (0, n.jsx)(o.y, {}) })
                : null == N && 50001 === x
                  ? (0, n.jsx)("div", { className: j.k, children: (0, n.jsx)(p.A, { guildId: t, name: i }) })
                  : null == N
                    ? (0, n.jsx)("div", { className: j.k, children: (0, n.jsx)(R, { name: i, onRetry: g }) })
                    : (0, n.jsx)("div", { className: j.k, children: (0, n.jsx)(C.Ay, { profile: N, onClose: E }) }),
        [v, N, x, t, i, g, E],
    );
    return (0, n.jsx)(d.l, { ref: A, "aria-label": N?.name, children: T });
}
