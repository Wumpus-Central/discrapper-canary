n.d(l, { A: () => O });
var i = n(627968),
    a = n(64700),
    t = n(503698),
    s = n.n(t),
    r = n(17928),
    d = n(778712),
    u = n(97808),
    c = n(688810),
    o = n(601255),
    v = n(562819),
    g = n(713517),
    b = n(919395),
    h = n(71393),
    f = n(19575),
    m = n(84540),
    k = n(854627),
    C = n(930349),
    A = n(735438),
    x = n.n(A),
    p = n(993408),
    y = n(841702),
    j = n(486020),
    I = n(515718),
    N = n(375708),
    L = n(209150);
let w = d._3.SIZE_72,
    z = f.Ay.getEnableHardwareAcceleration() ? u.Js : u.eu;
function B(e) {
    let { user: l, guildId: n, avatarDecorationOverride: a, decorationStyle: t, shouldAnimate: r } = e,
        {
            avatarDecorationSrc: d,
            avatarSrc: u,
            avatarPlaceholderSrc: c,
        } = (0, k.A)({
            userId: l.id,
            guildId: n,
            size: w,
            showPending: !0,
            avatarDecorationOverride: a,
            animateOnHover: !r,
        }),
        o = "default" === t && null != d && r;
    return (0, i.jsx)(z, {
        className: s()({ [L.yT]: null == d, [L.m_]: "placeholder" === t }),
        src: o ? u : c,
        imageClassName: o ? L.WG : void 0,
        avatarDecoration: d,
        size: w,
        "aria-hidden": !0,
    });
}
function O(e) {
    let { user: l, guildId: n, disabled: t } = e,
        { analyticsLocations: s } = (0, c.Ay)(),
        d = (0, r.bG)([h.A], () => (null != n ? h.A.getGuild(n) : null)),
        u = null != n,
        f = a.useRef(null),
        { isHoveringOrFocusing: k } = (0, g.A)(f),
        A = k && !t,
        L = (0, b.a4)({ user: l }),
        z = (0, b.a4)({ user: l, guildId: n ?? void 0 }),
        { pendingAvatarDecoration: O } = (0, b.CP)(n ?? void 0),
        R = void 0 !== O,
        S = null === O || (!R && null == z),
        _ = u && null != L,
        V = S && _,
        D = (0, o.A)((0, b.lw)({ userValue: L, guildValue: z, pendingValue: O, guildId: n })),
        { sampleDecoration: P, refreshSample: H } = (function (e) {
            let { size: l, disabled: n = !1 } = e,
                { categories: i, purchases: t } = (0, y.Ay)({ stalePurchasesOK: !0 }),
                s = a.useMemo(() => (0, p.ps)(t, i).filter((e) => null != e.asset && "" !== e.asset), [t, i]),
                [r, d] = a.useState(null),
                u = a.useRef([]),
                c = a.useRef(0),
                o = a.useCallback(
                    (e) => {
                        let n = (0, j.F_)({
                            avatarDecoration: { asset: e.asset, skuId: e.skuId },
                            canAnimate: !0,
                            size: (0, v.Te)(l),
                        });
                        null != n && (0, I.NN)(n).catch(() => {});
                    },
                    [l],
                );
            return (
                a.useEffect(() => {
                    if (n || 0 === s.length || u.current.length > 0) return;
                    let e = x().shuffle(s);
                    (u.current = e), (c.current = 0), o(e[0]);
                }, [n, s, o]),
                {
                    sampleDecoration: r,
                    refreshSample: a.useCallback(() => {
                        if (n) return;
                        let e = u.current;
                        if (0 === e.length) return;
                        let l = c.current % e.length,
                            i = (l + 1) % e.length,
                            a = e[l],
                            t = e[i];
                        d({ asset: a.asset, skuId: a.skuId }), (c.current = i), o(t);
                    }, [n, o]),
                }
            );
        })({ size: w, disabled: t || !S }),
        W = S && !V && A && null != P;
    a.useEffect(() => {
        k && H();
    }, [k]);
    let q =
            null != D && (R ? null != O : null != z)
                ? {
                      onClick: () => (0, m.p)({ guildId: n ?? void 0, avatarDecoration: null }),
                      type: _ ? "reset" : "remove",
                      accessibleLabel: N.intl.string(_ ? N.t.pJsnPf : N.t["2U4Bga"]),
                  }
                : void 0,
        E = () => (0, v.L)({ analyticsLocations: s, guild: d ?? void 0, stackingBehavior: "stack" }),
        G = (0, i.jsx)(B, {
            user: l,
            guildId: n,
            avatarDecorationOverride: W ? P : R ? D : void 0,
            decorationStyle: W ? "placeholder" : V ? "fallback" : "default",
            shouldAnimate: A,
        });
    return (0, i.jsx)("div", {
        ref: f,
        children: S
            ? (0, i.jsx)(C.kL, {
                  variant: "square",
                  onClick: E,
                  accessibleLabel: N.intl.string(N.t.HykynS),
                  disabled: t,
                  dimContent: V,
                  children: G,
              })
            : (0, i.jsx)(C.NW, {
                  variant: "square",
                  onClick: E,
                  accessibleLabel: N.intl.string(N.t.HykynS),
                  deleteButtonConfig: q,
                  disabled: t,
                  children: G,
              }),
    });
}
