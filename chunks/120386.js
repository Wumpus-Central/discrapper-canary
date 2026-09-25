l.d(n, { A: () => M });
var a = l(477900),
    t = l(582128),
    r = l(503698),
    i = l.n(r),
    s = l(17928),
    u = l(778712),
    o = l(97808),
    d = l(688810),
    c = l(601255),
    g = l(562819),
    v = l(674658),
    f = l(536572),
    h = l(919395),
    p = l(71393),
    b = l(19575),
    m = l(84540),
    A = l(854627),
    I = l(930349),
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
    R = l(249360);
let w = u._3.SIZE_72,
    S = b.Ay.getEnableHardwareAcceleration() ? o.Js : o.eu;
function D(e) {
    let {
            user: n,
            guildId: l,
            isEmpty: r,
            isPreviewingMainProfileFallback: s,
            hasPendingChange: u,
            avatarDecorationPreview: o,
            isInteracting: d,
            disabled: c,
        } = e,
        v = (function (e) {
            let { size: n, enabled: l, isInteracting: a } = e,
                { categories: r, purchases: i } = (0, y.Ay)({ stalePurchasesOK: !0 }),
                s = t.useMemo(() => (0, C.ps)(i, r).filter(j), [i, r]),
                u = t.useCallback(
                    (e) => {
                        let l = (0, k.F_)({
                            avatarDecoration: { asset: e.asset, skuId: e.skuId },
                            canAnimate: !0,
                            size: (0, g.Te)(n),
                        });
                        null != l && (0, x.NN)(l).catch(() => {});
                    },
                    [n],
                ),
                o = (0, N.A)({ enabled: l, isInteracting: a, items: s, preload: u });
            return null != o ? { asset: o.asset, skuId: o.skuId } : null;
        })({ size: w, enabled: r && !s && !c, isInteracting: d }),
        f = null != v,
        h = f ? "placeholder" : s ? "fallback" : "default",
        {
            avatarDecorationSrc: p,
            avatarSrc: b,
            avatarPlaceholderSrc: m,
        } = (0, A.A)({
            userId: n.id,
            guildId: l,
            size: w,
            showPending: !0,
            avatarDecorationOverride: f ? v : u ? o : void 0,
            animateOnHover: !d,
        }),
        I = "default" === h && null != p && d;
    return (0, a.jsx)(S, {
        className: i()({ [E.yT]: null == p, [R.O]: "placeholder" === h }),
        src: I ? b : m,
        imageClassName: I ? E.WG : void 0,
        avatarDecoration: p,
        size: w,
        "aria-hidden": !0,
    });
}
function M(e) {
    let { user: n, guildId: l, disabled: r, errorMessageId: i } = e,
        u = (0, t.useRef)(null),
        { analyticsLocations: o } = (0, d.Ay)(),
        b = (0, s.bG)([p.A], () => (null != l ? p.A.getGuild(l) : null)),
        A = null != l,
        C = (0, h.a4)({ user: n }),
        y = (0, h.a4)({ user: n, guildId: l ?? void 0 }),
        { pendingAvatarDecoration: k } = (0, h.CP)(l ?? void 0),
        x = void 0 !== k,
        N = null === k || (!x && null == y),
        j = A && null != C,
        E = N && j,
        R = (0, c.A)((0, h.lw)({ userValue: C, guildValue: y, pendingValue: k, guildId: l })),
        { product: w } = (0, v.q)(R?.skuId),
        S = x ? null != k : null != y,
        M =
            null != R && S
                ? {
                      onClick: () => (0, m.p)({ guildId: l ?? void 0, avatarDecoration: null }),
                      type: j ? "reset" : "remove",
                      accessibleLabel: P.intl.string(j ? P.t.pJsnPf : P.t["2U4Bga"]),
                  }
                : void 0;
    return (0, a.jsx)(I.A, {
        buttonRef: u,
        affordance: N && !j ? "add" : M,
        variant: "square",
        onClick: function () {
            return (0, g.L)({ analyticsLocations: o, guild: b ?? void 0, stackingBehavior: "stack", returnRef: u });
        },
        accessibleLabel: P.intl.string(P.t["7v0T9P"]),
        accessibleValue: (function (e) {
            let { avatarDecorationPreview: n, productName: l, hasPendingSelection: a } = e;
            return null == n
                ? P.intl.string(P.t["3Xph0/"])
                : null != l && "" !== l
                  ? l
                  : P.intl.string(a ? P.t.SZPJG4 : P.t.K77yQe);
        })({ avatarDecorationPreview: R, productName: (0, f.VG)(w), hasPendingSelection: null != k }),
        "aria-haspopup": "dialog",
        disabled: r,
        errorMessageId: i,
        renderPreview: (e) =>
            (0, a.jsx)(D, {
                user: n,
                guildId: l,
                isEmpty: N,
                isPreviewingMainProfileFallback: E,
                hasPendingChange: x,
                avatarDecorationPreview: R,
                isInteracting: e,
                disabled: r,
            }),
    });
}
