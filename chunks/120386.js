a.d(l, { A: () => z });
var i = a(627968),
    n = a(64700),
    r = a(503698),
    t = a.n(r),
    s = a(17928),
    d = a(778712),
    u = a(97808),
    o = a(688810),
    c = a(601255),
    v = a(562819),
    g = a(919395),
    h = a(71393),
    f = a(19575),
    m = a(84540),
    b = a(854627),
    p = a(930349),
    A = a(735438),
    k = a.n(A),
    C = a(993408),
    I = a(841702),
    x = a(486020),
    y = a(515718),
    j = a(375708),
    w = a(209150);
let N = d._3.SIZE_72,
    P = f.Ay.getEnableHardwareAcceleration() ? u.Js : u.eu;
function V(e) {
    let {
            user: l,
            guildId: a,
            isEmpty: r,
            isPreviewingMainProfileFallback: s,
            hasPendingChange: d,
            avatarDecorationPreview: u,
            isInteracting: o,
            disabled: c,
        } = e,
        { sampleDecoration: g, refreshSample: h } = (function (e) {
            let { size: l, disabled: a = !1 } = e,
                { categories: i, purchases: r } = (0, I.Ay)({ stalePurchasesOK: !0 }),
                t = n.useMemo(() => (0, C.ps)(r, i).filter((e) => null != e.asset && "" !== e.asset), [r, i]),
                [s, d] = n.useState(null),
                u = n.useRef([]),
                o = n.useRef(0),
                c = n.useCallback(
                    (e) => {
                        let a = (0, x.F_)({
                            avatarDecoration: { asset: e.asset, skuId: e.skuId },
                            canAnimate: !0,
                            size: (0, v.Te)(l),
                        });
                        null != a && (0, y.NN)(a).catch(() => {});
                    },
                    [l],
                );
            return (
                n.useEffect(() => {
                    if (a || 0 === t.length || u.current.length > 0) return;
                    let e = k().shuffle(t);
                    (u.current = e), (o.current = 0), c(e[0]);
                }, [a, t, c]),
                {
                    sampleDecoration: s,
                    refreshSample: n.useCallback(() => {
                        if (a) return;
                        let e = u.current;
                        if (0 === e.length) return;
                        let l = o.current % e.length,
                            i = (l + 1) % e.length,
                            n = e[l],
                            r = e[i];
                        d({ asset: n.asset, skuId: n.skuId }), (o.current = i), c(r);
                    }, [a, c]),
                }
            );
        })({ size: N, disabled: c || !r }),
        f = r && !s && o && null != g,
        m = f ? "placeholder" : s ? "fallback" : "default";
    n.useEffect(() => {
        o && h();
    }, [o]);
    let {
            avatarDecorationSrc: p,
            avatarSrc: A,
            avatarPlaceholderSrc: j,
        } = (0, b.A)({
            userId: l.id,
            guildId: a,
            size: N,
            showPending: !0,
            avatarDecorationOverride: f ? g : d ? u : void 0,
            animateOnHover: !o,
        }),
        V = "default" === m && null != p && o;
    return (0, i.jsx)(P, {
        className: t()({ [w.yT]: null == p, [w.m_]: "placeholder" === m }),
        src: V ? A : j,
        imageClassName: V ? w.WG : void 0,
        avatarDecoration: p,
        size: N,
        "aria-hidden": !0,
    });
}
function z(e) {
    let { user: l, guildId: a, disabled: n } = e,
        { analyticsLocations: r } = (0, o.Ay)(),
        t = (0, s.bG)([h.A], () => (null != a ? h.A.getGuild(a) : null)),
        d = null != a,
        u = (0, g.a4)({ user: l }),
        f = (0, g.a4)({ user: l, guildId: a ?? void 0 }),
        { pendingAvatarDecoration: b } = (0, g.CP)(a ?? void 0),
        A = void 0 !== b,
        k = null === b || (!A && null == f),
        C = d && null != u,
        I = k && C,
        x = (0, c.A)((0, g.lw)({ userValue: u, guildValue: f, pendingValue: b, guildId: a })),
        y =
            null != x && (A ? null != b : null != f)
                ? {
                      onClick: () => (0, m.p)({ guildId: a ?? void 0, avatarDecoration: null }),
                      type: C ? "reset" : "remove",
                      accessibleLabel: j.intl.string(C ? j.t.pJsnPf : j.t["2U4Bga"]),
                  }
                : void 0;
    return (0, i.jsx)(p.V, {
        affordance: k ? "add" : y,
        variant: "square",
        onClick: () => (0, v.L)({ analyticsLocations: r, guild: t ?? void 0, stackingBehavior: "stack" }),
        accessibleLabel: j.intl.string(j.t.HykynS),
        "aria-haspopup": "dialog",
        disabled: n,
        dimContent: I,
        renderPreview: (e) =>
            (0, i.jsx)(V, {
                user: l,
                guildId: a,
                isEmpty: k,
                isPreviewingMainProfileFallback: I,
                hasPendingChange: A,
                avatarDecorationPreview: x,
                isInteracting: e,
                disabled: n,
            }),
    });
}
