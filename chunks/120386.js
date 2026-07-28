l.d(n, { A: () => M });
var t = l(477900),
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
    p = l(19575),
    m = l(84540),
    b = l(854627),
    I = l(930349),
    A = l(582128),
    x = l(993408),
    C = l(841702),
    k = l(486020),
    y = l(515718),
    N = l(195292);
function j(e) {
    return null != e.asset && "" !== e.asset;
}
var E = l(375708),
    w = l(172742),
    P = l(462397);
let S = s._3.SIZE_72,
    R = p.Ay.getEnableHardwareAcceleration() ? u.Js : u.eu;
function D(e) {
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
                i = A.useMemo(() => (0, x.ps)(r, a).filter(j), [r, a]),
                s = A.useCallback(
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
                u = (0, N.A)({ enabled: l, isInteracting: t, items: i, preload: s });
            return null != u ? { asset: u.asset, skuId: u.skuId } : null;
        })({ size: S, enabled: a && !i && !d, isInteracting: o }),
        v = null != g,
        h = v ? "placeholder" : i ? "fallback" : "default",
        {
            avatarDecorationSrc: f,
            avatarSrc: p,
            avatarPlaceholderSrc: m,
        } = (0, b.A)({
            userId: n.id,
            guildId: l,
            size: S,
            showPending: !0,
            avatarDecorationOverride: v ? g : s ? u : void 0,
            animateOnHover: !o,
        }),
        I = "default" === h && null != f && o;
    return (0, t.jsx)(R, {
        className: r()({ [w.yT]: null == f, [P.O]: "placeholder" === h }),
        src: I ? p : m,
        imageClassName: I ? w.WG : void 0,
        avatarDecoration: f,
        size: S,
        "aria-hidden": !0,
    });
}
function M(e) {
    let { user: n, guildId: l, disabled: a, errorMessageId: r } = e,
        { analyticsLocations: s } = (0, o.Ay)(),
        u = (0, i.bG)([f.A], () => (null != l ? f.A.getGuild(l) : null)),
        p = null != l,
        b = (0, h.a4)({ user: n }),
        A = (0, h.a4)({ user: n, guildId: l ?? void 0 }),
        { pendingAvatarDecoration: x } = (0, h.CP)(l ?? void 0),
        C = void 0 !== x,
        k = null === x || (!C && null == A),
        y = p && null != b,
        N = k && y,
        j = (0, d.A)((0, h.lw)({ userValue: b, guildValue: A, pendingValue: x, guildId: l })),
        { product: w } = (0, g.q)(j?.skuId),
        P = C ? null != x : null != A,
        S =
            null != j && P
                ? {
                      onClick: () => (0, m.p)({ guildId: l ?? void 0, avatarDecoration: null }),
                      type: y ? "reset" : "remove",
                      accessibleLabel: E.intl.string(y ? E.t.pJsnPf : E.t["2U4Bga"]),
                  }
                : void 0;
    return (0, t.jsx)(I.V, {
        affordance: k && !y ? "add" : S,
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
        })({ avatarDecorationPreview: j, productName: (0, v.VG)(w), hasPendingSelection: null != x }),
        "aria-haspopup": "dialog",
        disabled: a,
        errorMessageId: r,
        renderPreview: (e) =>
            (0, t.jsx)(D, {
                user: n,
                guildId: l,
                isEmpty: k,
                isPreviewingMainProfileFallback: N,
                hasPendingChange: C,
                avatarDecorationPreview: j,
                isInteracting: e,
                disabled: a,
            }),
    });
}
