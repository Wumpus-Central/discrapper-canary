l.d(n, { A: () => M });
var a = l(477900),
    t = l(503698),
    r = l.n(t),
    i = l(17928),
    s = l(778712),
    u = l(97808),
    o = l(688810),
    d = l(601255),
    c = l(562819),
    g = l(674658),
    v = l(536572),
    f = l(919395),
    h = l(71393),
    p = l(19575),
    b = l(84540),
    m = l(854627),
    A = l(930349),
    I = l(582128),
    C = l(993408),
    y = l(841702),
    k = l(486020),
    x = l(515718),
    N = l(195292);
function j(e) {
    return null != e.asset && "" !== e.asset;
}
var P = l(375708),
    E = l(214097),
    w = l(249360);
let R = s._3.SIZE_72,
    S = p.Ay.getEnableHardwareAcceleration() ? u.Js : u.eu;
function D(e) {
    let {
            user: n,
            guildId: l,
            isEmpty: t,
            isPreviewingMainProfileFallback: i,
            hasPendingChange: s,
            avatarDecorationPreview: u,
            isInteracting: o,
            disabled: d,
        } = e,
        g = (function (e) {
            let { size: n, enabled: l, isInteracting: a } = e,
                { categories: t, purchases: r } = (0, y.Ay)({ stalePurchasesOK: !0 }),
                i = I.useMemo(() => (0, C.ps)(r, t).filter(j), [r, t]),
                s = I.useCallback(
                    (e) => {
                        let l = (0, k.F_)({
                            avatarDecoration: { asset: e.asset, skuId: e.skuId },
                            canAnimate: !0,
                            size: (0, c.Te)(n),
                        });
                        null != l && (0, x.NN)(l).catch(() => {});
                    },
                    [n],
                ),
                u = (0, N.A)({ enabled: l, isInteracting: a, items: i, preload: s });
            return null != u ? { asset: u.asset, skuId: u.skuId } : null;
        })({ size: R, enabled: t && !i && !d, isInteracting: o }),
        v = null != g,
        f = v ? "placeholder" : i ? "fallback" : "default",
        {
            avatarDecorationSrc: h,
            avatarSrc: p,
            avatarPlaceholderSrc: b,
        } = (0, m.A)({
            userId: n.id,
            guildId: l,
            size: R,
            showPending: !0,
            avatarDecorationOverride: v ? g : s ? u : void 0,
            animateOnHover: !o,
        }),
        A = "default" === f && null != h && o;
    return (0, a.jsx)(S, {
        className: r()({ [E.yT]: null == h, [w.O]: "placeholder" === f }),
        src: A ? p : b,
        imageClassName: A ? E.WG : void 0,
        avatarDecoration: h,
        size: R,
        "aria-hidden": !0,
    });
}
function M(e) {
    let { user: n, guildId: l, disabled: t, errorMessageId: r } = e,
        { analyticsLocations: s } = (0, o.Ay)(),
        u = (0, i.bG)([h.A], () => (null != l ? h.A.getGuild(l) : null)),
        p = null != l,
        m = (0, f.a4)({ user: n }),
        I = (0, f.a4)({ user: n, guildId: l ?? void 0 }),
        { pendingAvatarDecoration: C } = (0, f.CP)(l ?? void 0),
        y = void 0 !== C,
        k = null === C || (!y && null == I),
        x = p && null != m,
        N = k && x,
        j = (0, d.A)((0, f.lw)({ userValue: m, guildValue: I, pendingValue: C, guildId: l })),
        { product: E } = (0, g.q)(j?.skuId),
        w = y ? null != C : null != I,
        R =
            null != j && w
                ? {
                      onClick: () => (0, b.p)({ guildId: l ?? void 0, avatarDecoration: null }),
                      type: x ? "reset" : "remove",
                      accessibleLabel: P.intl.string(x ? P.t.pJsnPf : P.t["2U4Bga"]),
                  }
                : void 0;
    return (0, a.jsx)(A.A, {
        affordance: k && !x ? "add" : R,
        variant: "square",
        onClick: function () {
            return (0, c.L)({ analyticsLocations: s, guild: u ?? void 0, stackingBehavior: "stack" });
        },
        accessibleLabel: P.intl.string(P.t["7v0T9P"]),
        accessibleValue: (function (e) {
            let { avatarDecorationPreview: n, productName: l, hasPendingSelection: a } = e;
            return null == n
                ? P.intl.string(P.t["3Xph0/"])
                : null != l && "" !== l
                  ? l
                  : P.intl.string(a ? P.t.SZPJG4 : P.t.K77yQe);
        })({ avatarDecorationPreview: j, productName: (0, v.VG)(E), hasPendingSelection: null != C }),
        "aria-haspopup": "dialog",
        disabled: t,
        errorMessageId: r,
        renderPreview: (e) =>
            (0, a.jsx)(D, {
                user: n,
                guildId: l,
                isEmpty: k,
                isPreviewingMainProfileFallback: N,
                hasPendingChange: y,
                avatarDecorationPreview: j,
                isInteracting: e,
                disabled: t,
            }),
    });
}
