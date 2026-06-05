l.d(n, { A: () => P });
var t = l(627968),
    a = l(64700),
    r = l(503698),
    i = l.n(r),
    s = l(17928),
    o = l(778712),
    u = l(97808),
    d = l(688810),
    c = l(601255),
    v = l(562819),
    g = l(674658),
    h = l(536572),
    f = l(919395),
    p = l(71393),
    m = l(19575),
    b = l(84540),
    x = l(854627),
    C = l(930349),
    I = l(735438),
    A = l.n(I),
    k = l(993408),
    y = l(841702),
    j = l(486020),
    N = l(515718),
    w = l(375708),
    E = l(209150);
let S = o._3.SIZE_72,
    R = m.Ay.getEnableHardwareAcceleration() ? u.Js : u.eu;
function D(e) {
    let {
            user: n,
            guildId: l,
            isEmpty: r,
            isPreviewingMainProfileFallback: s,
            hasPendingChange: o,
            avatarDecorationPreview: u,
            isInteracting: d,
            disabled: c,
        } = e,
        { sampleDecoration: g, refreshSample: h } = (function (e) {
            let { size: n, disabled: l = !1 } = e,
                { categories: t, purchases: r } = (0, y.Ay)({ stalePurchasesOK: !0 }),
                i = a.useMemo(() => (0, k.ps)(r, t).filter((e) => null != e.asset && "" !== e.asset), [r, t]),
                [s, o] = a.useState(null),
                u = a.useRef([]),
                d = a.useRef(0),
                c = a.useCallback(
                    (e) => {
                        let l = (0, j.F_)({
                            avatarDecoration: { asset: e.asset, skuId: e.skuId },
                            canAnimate: !0,
                            size: (0, v.Te)(n),
                        });
                        null != l && (0, N.NN)(l).catch(() => {});
                    },
                    [n],
                );
            return (
                a.useEffect(() => {
                    if (l || 0 === i.length || u.current.length > 0) return;
                    let e = A().shuffle(i);
                    (u.current = e), (d.current = 0), c(e[0]);
                }, [l, i, c]),
                {
                    sampleDecoration: s,
                    refreshSample: a.useCallback(() => {
                        if (l) return;
                        let e = u.current;
                        if (0 === e.length) return;
                        let n = d.current % e.length,
                            t = (n + 1) % e.length,
                            a = e[n],
                            r = e[t];
                        o({ asset: a.asset, skuId: a.skuId }), (d.current = t), c(r);
                    }, [l, c]),
                }
            );
        })({ size: S, disabled: c || !r }),
        f = r && !s && d && null != g,
        p = f ? "placeholder" : s ? "fallback" : "default";
    a.useEffect(() => {
        d && h();
    }, [d]);
    let {
            avatarDecorationSrc: m,
            avatarSrc: b,
            avatarPlaceholderSrc: C,
        } = (0, x.A)({
            userId: n.id,
            guildId: l,
            size: S,
            showPending: !0,
            avatarDecorationOverride: f ? g : o ? u : void 0,
            animateOnHover: !d,
        }),
        I = "default" === p && null != m && d;
    return (0, t.jsx)(R, {
        className: i()({ [E.yT]: null == m, [E.m_]: "placeholder" === p }),
        src: I ? b : C,
        imageClassName: I ? E.WG : void 0,
        avatarDecoration: m,
        size: S,
        "aria-hidden": !0,
    });
}
function P(e) {
    let { user: n, guildId: l, disabled: a } = e,
        { analyticsLocations: r } = (0, d.Ay)(),
        i = (0, s.bG)([p.A], () => (null != l ? p.A.getGuild(l) : null)),
        o = null != l,
        u = (0, f.a4)({ user: n }),
        m = (0, f.a4)({ user: n, guildId: l ?? void 0 }),
        { pendingAvatarDecoration: x } = (0, f.CP)(l ?? void 0),
        I = void 0 !== x,
        A = null === x || (!I && null == m),
        k = o && null != u,
        y = A && k,
        j = (0, c.A)((0, f.lw)({ userValue: u, guildValue: m, pendingValue: x, guildId: l })),
        { product: N } = (0, g.q)(j?.skuId),
        E = I ? null != x : null != m,
        S =
            null != j && E
                ? {
                      onClick: () => (0, b.p)({ guildId: l ?? void 0, avatarDecoration: null }),
                      type: k ? "reset" : "remove",
                      accessibleLabel: w.intl.string(k ? w.t.pJsnPf : w.t["2U4Bga"]),
                  }
                : void 0;
    return (0, t.jsx)(C.V, {
        affordance: A && !k ? "add" : S,
        variant: "square",
        onClick: () => (0, v.L)({ analyticsLocations: r, guild: i ?? void 0, stackingBehavior: "stack" }),
        accessibleLabel: w.intl.string(w.t["7v0T9P"]),
        accessibleValue: (function (e) {
            let { avatarDecorationPreview: n, productName: l, hasPendingSelection: t } = e;
            return null == n
                ? w.intl.string(w.t["3Xph0/"])
                : null != l && "" !== l
                  ? l
                  : w.intl.string(t ? w.t.SZPJG4 : w.t.K77yQe);
        })({ avatarDecorationPreview: j, productName: (0, h.VG)(N), hasPendingSelection: null != x }),
        "aria-haspopup": "dialog",
        disabled: a,
        renderPreview: (e) =>
            (0, t.jsx)(D, {
                user: n,
                guildId: l,
                isEmpty: A,
                isPreviewingMainProfileFallback: y,
                hasPendingChange: I,
                avatarDecorationPreview: j,
                isInteracting: e,
                disabled: a,
            }),
    });
}
