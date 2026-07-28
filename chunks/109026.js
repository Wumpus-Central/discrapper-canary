l.r(s), l.d(s, { default: () => w });
var i = l(477900),
    a = l(582128),
    n = l(503698),
    r = l.n(n),
    c = l(17928),
    d = l(289873),
    t = l(305866),
    x = l(793574),
    m = l(688810),
    h = l(250527),
    u = l(837011),
    o = l(90084),
    j = l(297264),
    N = l(939249),
    v = l(695366),
    g = l(834730),
    f = l(573435),
    k = l(145497),
    C = l(649640),
    b = l(375708),
    A = l(342949);
function E(e) {
    let { name: s, onRetry: l } = e,
        a = (0, C.b2)(),
        n = (0, C.n6)(a.hex()),
        r = s ?? b.intl.string(b.t.DmIUGK);
    return (0, i.jsxs)("div", {
        className: A.kL,
        children: [
            (0, i.jsx)("div", { className: A.vK, style: { background: n } }),
            (0, i.jsx)("div", {
                className: A.H,
                children: (0, i.jsx)(f.Ay, {
                    mask: f.hW.CLAN_ICON,
                    width: 70,
                    height: 70,
                    children: (0, i.jsx)("div", {
                        className: A.R3,
                        children: (0, i.jsx)(k.B$, { guildName: r, iconSize: 64 }),
                    }),
                }),
            }),
            (0, i.jsxs)("div", {
                className: A.wx,
                children: [
                    (0, i.jsx)(j.D, { variant: "heading-lg/medium", color: "text-strong", children: r }),
                    (0, i.jsxs)(N.D, {
                        className: A.z3,
                        onClick: l,
                        children: [
                            (0, i.jsx)(v.E, { size: "sm", color: "currentColor" }),
                            (0, i.jsx)(g.E, {
                                variant: "text-sm/normal",
                                color: "text-feedback-warning",
                                children: b.intl.string(b.t.tmGHjc),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var y = l(42780),
    I = l(576055),
    p = l(161620);
function w(e) {
    let { guildId: s, name: l, setPopoutRef: n, onClose: j } = e,
        { analyticsLocations: N } = (0, m.Ay)(x.A.GUILD_PROFILE),
        { guildProfile: v, fetchGuildProfile: g, fetchStatus: f } = (0, o.u)(s),
        k = (0, c.bG)([u.A], () => u.A.getErrorCode(s)),
        C = a.useRef(null),
        b = a.useCallback(() => {
            g(!0);
        }, [g]);
    a.useEffect(() => {
        g();
    }, [g]),
        a.useEffect(() => {
            (0, h.sf)(s, N);
        }, [s, N]),
        a.useEffect(() => {
            n?.(C?.current);
        }, [C, n]);
    let A = a.useMemo(
        () =>
            f === u.X.NOT_FETCHED || f === u.X.FETCHING
                ? (0, i.jsx)("div", { className: r()(p.k, p.d), children: (0, i.jsx)(d.y, {}) })
                : null == v && 50001 === k
                  ? (0, i.jsx)("div", { className: p.k, children: (0, i.jsx)(I.A, { guildId: s, name: l }) })
                  : null == v
                    ? (0, i.jsx)("div", { className: p.k, children: (0, i.jsx)(E, { name: l, onRetry: b }) })
                    : (0, i.jsx)("div", { className: p.k, children: (0, i.jsx)(y.Ay, { profile: v, onClose: j }) }),
        [f, v, k, s, l, b, j],
    );
    return (0, i.jsx)(t.l, { ref: C, "aria-label": v?.name, children: A });
}
