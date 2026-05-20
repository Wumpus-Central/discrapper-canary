a.d(l, { A: () => z });
var i = a(627968),
    n = a(64700),
    r = a(503698),
    t = a.n(r),
    s = a(17928),
    d = a(778712),
    u = a(97808),
    c = a(688810),
    o = a(601255),
    v = a(562819),
    g = a(919395),
    f = a(71393),
    h = a(19575),
    b = a(84540),
    p = a(854627),
    m = a(930349),
    k = a(735438),
    A = a.n(k),
    I = a(993408),
    C = a(841702),
    x = a(486020),
    y = a(515718),
    j = a(375708),
    w = a(209150);
let N = d._3.SIZE_72,
    P = h.Ay.getEnableHardwareAcceleration() ? u.Js : u.eu;
function V(e) {
    let {
            user: l,
            guildId: a,
            isEmpty: r,
            isPreviewingMainProfileFallback: s,
            hasPendingChange: d,
            avatarDecorationPreview: u,
            isInteracting: c,
            disabled: o,
        } = e,
        { sampleDecoration: g, refreshSample: f } = (function (e) {
            let { size: l, disabled: a = !1 } = e,
                { categories: i, purchases: r } = (0, C.Ay)({ stalePurchasesOK: !0 }),
                t = n.useMemo(() => (0, I.ps)(r, i).filter((e) => null != e.asset && "" !== e.asset), [r, i]),
                [s, d] = n.useState(null),
                u = n.useRef([]),
                c = n.useRef(0),
                o = n.useCallback(
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
                    let e = A().shuffle(t);
                    (u.current = e), (c.current = 0), o(e[0]);
                }, [a, t, o]),
                {
                    sampleDecoration: s,
                    refreshSample: n.useCallback(() => {
                        if (a) return;
                        let e = u.current;
                        if (0 === e.length) return;
                        let l = c.current % e.length,
                            i = (l + 1) % e.length,
                            n = e[l],
                            r = e[i];
                        d({ asset: n.asset, skuId: n.skuId }), (c.current = i), o(r);
                    }, [a, o]),
                }
            );
        })({ size: N, disabled: o || !r }),
        h = r && !s && c && null != g,
        b = h ? "placeholder" : s ? "fallback" : "default";
    n.useEffect(() => {
        c && f();
    }, [c]);
    let {
            avatarDecorationSrc: m,
            avatarSrc: k,
            avatarPlaceholderSrc: j,
        } = (0, p.A)({
            userId: l.id,
            guildId: a,
            size: N,
            showPending: !0,
            avatarDecorationOverride: h ? g : d ? u : void 0,
            animateOnHover: !c,
        }),
        V = "default" === b && null != m && c;
    return (0, i.jsx)(P, {
        className: t()({ [w.yT]: null == m, [w.m_]: "placeholder" === b }),
        src: V ? k : j,
        imageClassName: V ? w.WG : void 0,
        avatarDecoration: m,
        size: N,
        "aria-hidden": !0,
    });
}
function z(e) {
    let { user: l, guildId: a, disabled: n } = e,
        { analyticsLocations: r } = (0, c.Ay)(),
        t = (0, s.bG)([f.A], () => (null != a ? f.A.getGuild(a) : null)),
        d = null != a,
        u = (0, g.a4)({ user: l }),
        h = (0, g.a4)({ user: l, guildId: a ?? void 0 }),
        { pendingAvatarDecoration: p } = (0, g.CP)(a ?? void 0),
        k = void 0 !== p,
        A = null === p || (!k && null == h),
        I = d && null != u,
        C = A && I,
        x = (0, o.A)((0, g.lw)({ userValue: u, guildValue: h, pendingValue: p, guildId: a })),
        y =
            null != x && (k ? null != p : null != h)
                ? {
                      onClick: () => (0, b.p)({ guildId: a ?? void 0, avatarDecoration: null }),
                      type: I ? "reset" : "remove",
                      accessibleLabel: j.intl.string(I ? j.t.pJsnPf : j.t["2U4Bga"]),
                  }
                : void 0;
    return (0, i.jsx)(m.V, {
        affordance: A && !I ? "add" : y,
        variant: "square",
        onClick: () => (0, v.L)({ analyticsLocations: r, guild: t ?? void 0, stackingBehavior: "stack" }),
        accessibleLabel: j.intl.string(j.t.HykynS),
        "aria-haspopup": "dialog",
        disabled: n,
        renderPreview: (e) =>
            (0, i.jsx)(V, {
                user: l,
                guildId: a,
                isEmpty: A,
                isPreviewingMainProfileFallback: C,
                hasPendingChange: k,
                avatarDecorationPreview: x,
                isInteracting: e,
                disabled: n,
            }),
    });
}
