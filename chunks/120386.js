n.d(l, { A: () => H });
var i = n(627968),
    a = n(64700),
    t = n(503698),
    r = n.n(t),
    s = n(17928),
    d = n(778712),
    u = n(97808),
    c = n(688810),
    o = n(601255),
    v = n(562819),
    g = n(713517),
    h = n(919395),
    b = n(71393),
    f = n(19575),
    m = n(84540),
    k = n(854627),
    x = n(930349),
    p = n(735438),
    j = n.n(p),
    A = n(993408),
    y = n(841702),
    C = n(486020),
    I = n(515718),
    N = n(985018),
    L = n(209150);
let w = d._3.SIZE_72,
    z = f.Ay.getEnableHardwareAcceleration() ? u.Js : u.eu;
function B(e) {
    let { user: l, guildId: n, avatarDecorationOverride: a, decorationStyle: t, isHovered: s, disabled: d } = e,
        {
            avatarDecorationSrc: u,
            avatarSrc: c,
            avatarPlaceholderSrc: o,
            eventHandlers: v,
        } = (0, k.A)({
            userId: l.id,
            guildId: n,
            size: w,
            showPending: !0,
            avatarDecorationOverride: a,
            animateOnHover: !s,
        }),
        g = "default" === t && null != u && s;
    return (0, i.jsx)(z, {
        className: r()({ [L.yT]: null == u, [L.m_]: "placeholder" === t }),
        src: g ? c : o,
        imageClassName: g && !d ? L.WG : void 0,
        avatarDecoration: u,
        size: w,
        "aria-hidden": !0,
        ...v,
    });
}
function H(e) {
    let { user: l, guildId: n, disabled: t } = e,
        { analyticsLocations: r } = (0, c.Ay)(),
        d = (0, s.bG)([b.A], () => (null != n ? b.A.getGuild(n) : null)),
        u = null != n,
        f = a.useRef(null),
        { isHoveringOrFocusing: k } = (0, g.A)(f),
        p = (0, h.a4)({ user: l }),
        L = (0, h.a4)({ user: l, guildId: n ?? void 0 }),
        { pendingAvatarDecoration: z } = (0, h.CP)(n ?? void 0),
        H = (0, o.A)((0, h.lw)({ userValue: p, guildValue: L, pendingValue: z, guildId: n })),
        O = void 0 !== z,
        { sampleDecoration: D, refreshSample: P } = (function (e) {
            let { categories: l, purchases: n } = (0, y.Ay)({ stalePurchasesOK: !0 }),
                i = a.useMemo(() => (0, A.ps)(n, l).filter((e) => null != e.asset && "" !== e.asset), [n, l]),
                [t, r] = a.useState(null),
                s = a.useRef([]),
                d = a.useRef(0),
                u = a.useCallback(
                    (l) => {
                        let n = (0, C.F_)({
                            avatarDecoration: { asset: l.asset, skuId: l.skuId },
                            canAnimate: !0,
                            size: (0, v.Te)(e),
                        });
                        null != n && (0, I.NN)(n).catch(() => {});
                    },
                    [e],
                );
            return (
                a.useEffect(() => {
                    if (0 === i.length) return;
                    let e = j().shuffle(i);
                    (s.current = e), (d.current = 0), u(e[0]);
                }, [i, u]),
                {
                    sampleDecoration: t,
                    refreshSample: a.useCallback(() => {
                        let e = s.current;
                        if (0 === e.length) return;
                        let l = d.current % e.length,
                            n = (l + 1) % e.length,
                            i = e[l],
                            a = e[n];
                        r({ asset: i.asset, skuId: i.skuId }), (d.current = n), u(a);
                    }, [u]),
                }
            );
        })(w),
        R = null == H,
        S = R && k && null != D;
    a.useEffect(() => {
        R && (k && null == D ? P() : k || P());
    }, [k]);
    let V = () => (0, v.L)({ analyticsLocations: r, guild: d ?? void 0, stackingBehavior: "stack" }),
        _ = u && null != p,
        W =
            null != H && (O ? null != z : null != L)
                ? {
                      onClick: () => (0, m.p)({ guildId: n ?? void 0, avatarDecoration: null }),
                      type: _ ? "reset" : "remove",
                      accessibleLabel: N.intl.string(_ ? N.t.pJsnPf : N.t["2U4Bga"]),
                  }
                : void 0,
        M = (0, i.jsx)(B, {
            user: l,
            guildId: n,
            avatarDecorationOverride: O ? H : S ? D : void 0,
            decorationStyle: S ? "placeholder" : "default",
            isHovered: k,
            disabled: t,
        });
    return (0, i.jsx)("div", {
        ref: f,
        children: R
            ? (0, i.jsx)(x.kL, {
                  variant: "square",
                  onClick: V,
                  accessibleLabel: N.intl.string(N.t.HykynS),
                  disabled: t,
                  children: M,
              })
            : (0, i.jsx)(x.NW, {
                  variant: "square",
                  onClick: V,
                  accessibleLabel: N.intl.string(N.t.HykynS),
                  deleteButtonConfig: W,
                  disabled: t,
                  children: M,
              }),
    });
}
