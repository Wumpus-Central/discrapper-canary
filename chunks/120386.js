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
    x = n(735438),
    A = n.n(x),
    p = n(993408),
    y = n(841702),
    j = n(486020),
    I = n(515718),
    N = n(985018),
    L = n(209150);
let w = d._3.SIZE_72,
    B = f.Ay.getEnableHardwareAcceleration() ? u.Js : u.eu;
function z(e) {
    let { user: l, guildId: n, avatarDecorationOverride: a, decorationStyle: t, isHovered: r, disabled: d } = e,
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
            animateOnHover: !r,
        }),
        g = "default" === t && null != u && r;
    return (0, i.jsx)(B, {
        className: s()({ [L.yT]: null == u, [L.m_]: "placeholder" === t }),
        src: g ? c : o,
        imageClassName: g && !d ? L.WG : void 0,
        avatarDecoration: u,
        size: w,
        "aria-hidden": !0,
        ...v,
    });
}
function O(e) {
    let { user: l, guildId: n, disabled: t } = e,
        { analyticsLocations: s } = (0, c.Ay)(),
        d = (0, r.bG)([h.A], () => (null != n ? h.A.getGuild(n) : null)),
        u = null != n,
        f = a.useRef(null),
        { isHoveringOrFocusing: k } = (0, g.A)(f),
        x = (0, b.a4)({ user: l }),
        L = (0, b.a4)({ user: l, guildId: n ?? void 0 }),
        { pendingAvatarDecoration: B } = (0, b.CP)(n ?? void 0),
        O = void 0 !== B,
        R = null === B || (!O && null == L),
        S = u && null != x,
        _ = R && S,
        H = (0, o.A)((0, b.lw)({ userValue: x, guildValue: L, pendingValue: B, guildId: n })),
        { sampleDecoration: V, refreshSample: D } = (function (e) {
            let { categories: l, purchases: n } = (0, y.Ay)({ stalePurchasesOK: !0 }),
                i = a.useMemo(() => (0, p.ps)(n, l).filter((e) => null != e.asset && "" !== e.asset), [n, l]),
                [t, s] = a.useState(null),
                r = a.useRef([]),
                d = a.useRef(0),
                u = a.useCallback(
                    (l) => {
                        let n = (0, j.F_)({
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
                    let e = A().shuffle(i);
                    (r.current = e), (d.current = 0), u(e[0]);
                }, [i, u]),
                {
                    sampleDecoration: t,
                    refreshSample: a.useCallback(() => {
                        let e = r.current;
                        if (0 === e.length) return;
                        let l = d.current % e.length,
                            n = (l + 1) % e.length,
                            i = e[l],
                            a = e[n];
                        s({ asset: i.asset, skuId: i.skuId }), (d.current = n), u(a);
                    }, [u]),
                }
            );
        })(w),
        P = R && k && null != V && !_;
    a.useEffect(() => {
        R && ((null != V && k) || D());
    }, [k]);
    let W =
            null != H && (O ? null != B : null != L)
                ? {
                      onClick: () => (0, m.p)({ guildId: n ?? void 0, avatarDecoration: null }),
                      type: S ? "reset" : "remove",
                      accessibleLabel: N.intl.string(S ? N.t.pJsnPf : N.t["2U4Bga"]),
                  }
                : void 0,
        q = () => (0, v.L)({ analyticsLocations: s, guild: d ?? void 0, stackingBehavior: "stack" }),
        E = (0, i.jsx)(z, {
            user: l,
            guildId: n,
            avatarDecorationOverride: P ? V : O ? H : void 0,
            decorationStyle: P ? "placeholder" : _ ? "fallback" : "default",
            isHovered: k,
            disabled: t,
        });
    return (0, i.jsx)("div", {
        ref: f,
        children: R
            ? (0, i.jsx)(C.kL, {
                  variant: "square",
                  onClick: q,
                  accessibleLabel: N.intl.string(N.t.HykynS),
                  disabled: t,
                  dimContent: _,
                  children: E,
              })
            : (0, i.jsx)(C.NW, {
                  variant: "square",
                  onClick: q,
                  accessibleLabel: N.intl.string(N.t.HykynS),
                  deleteButtonConfig: W,
                  disabled: t,
                  children: E,
              }),
    });
}
