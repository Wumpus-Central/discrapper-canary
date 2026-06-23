l.d(n, { A: () => D });
var t = l(627968),
    a = l(503698),
    r = l.n(a),
    i = l(17928),
    s = l(778712),
    u = l(97808),
    o = l(688810),
    d = l(601255),
    c = l(562819),
    g = l(674658),
    v = l(536572),
    h = l(919395),
    f = l(71393),
    m = l(19575),
    p = l(84540),
    b = l(854627),
    I = l(930349),
    x = l(64700),
    A = l(993408),
    C = l(841702),
    k = l(486020),
    y = l(515718),
    j = l(195292);
function N(e) {
    return null != e.asset && "" !== e.asset;
}
var E = l(375708),
    w = l(209150),
    S = l(970389);
let P = s._3.SIZE_72,
    R = m.Ay.getEnableHardwareAcceleration() ? u.Js : u.eu;
function M(e) {
    let {
            user: n,
            guildId: l,
            isEmpty: a,
            isPreviewingMainProfileFallback: i,
            hasPendingChange: s,
            avatarDecorationPreview: u,
            isInteracting: o,
            disabled: d,
        } = e,
        g = (function (e) {
            let { size: n, enabled: l, isInteracting: t } = e,
                { categories: a, purchases: r } = (0, C.Ay)({ stalePurchasesOK: !0 }),
                i = x.useMemo(() => (0, A.ps)(r, a).filter(N), [r, a]),
                s = x.useCallback(
                    (e) => {
                        let l = (0, k.F_)({
                            avatarDecoration: { asset: e.asset, skuId: e.skuId },
                            canAnimate: !0,
                            size: (0, c.Te)(n),
                        });
                        null != l && (0, y.NN)(l).catch(() => {});
                    },
                    [n],
                ),
                u = (0, j.A)({ enabled: l, isInteracting: t, items: i, preload: s });
            return null != u ? { asset: u.asset, skuId: u.skuId } : null;
        })({ size: P, enabled: a && !i && !d, isInteracting: o }),
        v = null != g,
        h = v ? "placeholder" : i ? "fallback" : "default",
        {
            avatarDecorationSrc: f,
            avatarSrc: m,
            avatarPlaceholderSrc: p,
        } = (0, b.A)({
            userId: n.id,
            guildId: l,
            size: P,
            showPending: !0,
            avatarDecorationOverride: v ? g : s ? u : void 0,
            animateOnHover: !o,
        }),
        I = "default" === h && null != f && o;
    return (0, t.jsx)(R, {
        className: r()({ [w.yT]: null == f, [S.O]: "placeholder" === h }),
        src: I ? m : p,
        imageClassName: I ? w.WG : void 0,
        avatarDecoration: f,
        size: P,
        "aria-hidden": !0,
    });
}
function D(e) {
    let { user: n, guildId: l, disabled: a, errorMessageId: r } = e,
        { analyticsLocations: s } = (0, o.Ay)(),
        u = (0, i.bG)([f.A], () => (null != l ? f.A.getGuild(l) : null)),
        m = null != l,
        b = (0, h.a4)({ user: n }),
        x = (0, h.a4)({ user: n, guildId: l ?? void 0 }),
        { pendingAvatarDecoration: A } = (0, h.CP)(l ?? void 0),
        C = void 0 !== A,
        k = null === A || (!C && null == x),
        y = m && null != b,
        j = k && y,
        N = (0, d.A)((0, h.lw)({ userValue: b, guildValue: x, pendingValue: A, guildId: l })),
        { product: w } = (0, g.q)(N?.skuId),
        S = C ? null != A : null != x,
        P =
            null != N && S
                ? {
                      onClick: () => (0, p.p)({ guildId: l ?? void 0, avatarDecoration: null }),
                      type: y ? "reset" : "remove",
                      accessibleLabel: E.intl.string(y ? E.t.pJsnPf : E.t["2U4Bga"]),
                  }
                : void 0;
    return (0, t.jsx)(I.V, {
        affordance: k && !y ? "add" : P,
        variant: "square",
        onClick: function () {
            return (0, c.L)({ analyticsLocations: s, guild: u ?? void 0, stackingBehavior: "stack" });
        },
        accessibleLabel: E.intl.string(E.t["7v0T9P"]),
        accessibleValue: (function (e) {
            let { avatarDecorationPreview: n, productName: l, hasPendingSelection: t } = e;
            return null == n
                ? E.intl.string(E.t["3Xph0/"])
                : null != l && "" !== l
                  ? l
                  : E.intl.string(t ? E.t.SZPJG4 : E.t.K77yQe);
        })({ avatarDecorationPreview: N, productName: (0, v.VG)(w), hasPendingSelection: null != A }),
        "aria-haspopup": "dialog",
        disabled: a,
        errorMessageId: r,
        renderPreview: (e) =>
            (0, t.jsx)(M, {
                user: n,
                guildId: l,
                isEmpty: k,
                isPreviewingMainProfileFallback: j,
                hasPendingChange: C,
                avatarDecorationPreview: N,
                isInteracting: e,
                disabled: a,
            }),
    });
}
