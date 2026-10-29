l.d(n, { A: () => M });
var t = l(477900),
    a = l(582128),
    r = l(503698),
    i = l.n(r),
    s = l(17928),
    u = l(778712),
    o = l(97808),
    d = l(688810),
    c = l(601255),
    g = l(562819),
    v = l(674658),
    f = l(898461),
    h = l(536572),
    p = l(919395),
    b = l(71393),
    m = l(19575),
    A = l(84540),
    I = l(854627),
    y = l(930349),
    C = l(993408),
    k = l(841702),
    x = l(486020),
    N = l(515718),
    j = l(195292);
function P(e) {
    return null != e.asset && "" !== e.asset;
}
var E = l(105292),
    w = l(214097),
    R = l(249360);
let S = u._3.SIZE_72,
    D = m.Ay.getEnableHardwareAcceleration() ? o.Js : o.eu;
function L(e) {
    let {
            user: n,
            guildId: l,
            isEmpty: r,
            isPreviewingMainProfileFallback: s,
            hasPendingChange: u,
            avatarDecorationPreview: o,
            isInteracting: d,
            disabled: c,
            imageDescription: v,
        } = e,
        f = (function (e) {
            let { size: n, enabled: l, isInteracting: t } = e,
                { categories: r, purchases: i } = (0, k.Ay)({ stalePurchasesOK: !0 }),
                s = a.useMemo(() => (0, C.ps)(i, r).filter(P), [i, r]),
                u = a.useCallback(
                    (e) => {
                        let l = (0, x.F_)({
                            avatarDecoration: { asset: e.asset, skuId: e.skuId },
                            canAnimate: !0,
                            size: (0, g.Te)(n),
                        });
                        null != l && (0, N.NN)(l).catch(() => {});
                    },
                    [n],
                ),
                o = (0, j.A)({ enabled: l, isInteracting: t, items: s, preload: u });
            return null != o ? { asset: o.asset, skuId: o.skuId } : null;
        })({ size: S, enabled: r && !s && !c, isInteracting: d }),
        h = null != f,
        p = h ? "placeholder" : s ? "fallback" : "default",
        {
            avatarDecorationSrc: b,
            avatarSrc: m,
            avatarPlaceholderSrc: A,
        } = (0, I.A)({
            userId: n.id,
            guildId: l,
            size: S,
            showPending: !0,
            avatarDecorationOverride: h ? f : u ? o : void 0,
            animateOnHover: !d,
        }),
        y = "default" === p && null != b && d;
    return (0, t.jsx)(D, {
        className: i()({ [w.yT]: null == b, [R.O]: "placeholder" === p }),
        src: y ? m : A,
        imageClassName: y ? w.WG : void 0,
        avatarDecoration: b,
        size: S,
        "aria-label": v ?? void 0,
        "aria-hidden": null == v,
    });
}
function M(e) {
    let { user: n, guildId: l, disabled: r, errorMessageId: i } = e,
        u = (0, a.useRef)(null),
        { analyticsLocations: o } = (0, d.Ay)(),
        m = (0, s.bG)([b.A], () => (null != l ? b.A.getGuild(l) : null)),
        I = null != l,
        C = (0, p.a4)({ user: n }),
        k = (0, p.a4)({ user: n, guildId: l ?? void 0 }),
        { pendingAvatarDecoration: x } = (0, p.CP)(l ?? void 0),
        N = void 0 !== x,
        j = null === x || (!N && null == k),
        P = I && null != C,
        w = j && P,
        R = (0, c.A)((0, p.lw)({ userValue: C, guildValue: k, pendingValue: x, guildId: l })),
        { product: S } = (0, v.q)(R?.skuId),
        D = j ? null : S?.items.find(f.T)?.label,
        M = N ? null != x : null != k,
        T =
            null != R && M
                ? {
                      onClick: () => (0, A.p)({ guildId: l ?? void 0, avatarDecoration: null }),
                      type: P ? "reset" : "remove",
                      accessibleLabel: E.intl.string(P ? E.t.pJsnPf : E.t["2U4Bga"]),
                  }
                : void 0;
    return (0, t.jsx)(y.A, {
        buttonRef: u,
        affordance: j && !P ? "add" : T,
        variant: "square",
        onClick: function () {
            return (0, g.L)({ analyticsLocations: o, guild: m ?? void 0, stackingBehavior: "stack", returnRef: u });
        },
        fieldA11yLabel: E.intl.string(E.t["7v0T9P"]),
        editButtonA11yLabel: E.intl.string(E.t.HykynS),
        currentValueA11yLabel: (function (e) {
            let { avatarDecorationPreview: n, productName: l, hasPendingSelection: t } = e;
            return null == n
                ? E.intl.string(E.t["3Xph0/"])
                : null != l && "" !== l
                  ? l
                  : E.intl.string(t ? E.t.SZPJG4 : E.t.K77yQe);
        })({ avatarDecorationPreview: R, productName: (0, h.VG)(S), hasPendingSelection: null != x }),
        "aria-haspopup": "dialog",
        disabled: r,
        errorMessageId: i,
        renderPreview: (e) =>
            (0, t.jsx)(L, {
                user: n,
                guildId: l,
                isEmpty: j,
                isPreviewingMainProfileFallback: w,
                hasPendingChange: N,
                avatarDecorationPreview: R,
                isInteracting: e,
                disabled: r,
                imageDescription: D,
            }),
    });
}
