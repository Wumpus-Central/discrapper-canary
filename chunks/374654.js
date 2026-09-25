l.d(n, { A: () => P });
var a = l(477900),
    t = l(582128),
    r = l(503698),
    i = l.n(r),
    s = l(17928),
    u = l(688810),
    o = l(674658),
    d = l(344346),
    c = l(637193),
    g = l(536572),
    v = l(919395),
    f = l(84540),
    h = l(836602),
    p = l(930349),
    b = l(993408),
    m = l(841702),
    A = l(746002),
    I = l(515718),
    C = l(195292);
function y(e) {
    let n = (0, A.getCollectiblesItemAssetUrl)({ skuId: e.skuId, assetFormat: A.CollectiblesItemAssetFormat.STATIC });
    null != n && (0, I.NN)(n).catch(() => {});
}
var k = l(375708),
    x = l(352497),
    N = l(249360);
function j(e) {
    let {
            user: n,
            guildId: l,
            nameplatePreview: r,
            isEmpty: u,
            hasMainProfileFallback: o,
            isInteracting: c,
            disabled: g,
        } = e,
        v = (0, s.bG)([h.A], () => h.A.getPendingChanges(null).pendingGlobalName),
        f = (0, s.bG)([h.A], () => h.A.getPendingChanges(l ?? null).pendingNickname),
        p = (0, s.bG)([h.A], () => h.A.getPendingChanges(l ?? null).pendingDisplayNameStyles),
        A = (0, s.bG)([h.A], () => h.A.getPendingChanges(null).pendingPrimaryGuildId),
        I = (0, s.bG)([h.A], () => h.A.getPendingChanges(l ?? null).pendingAvatar),
        k = (function (e) {
            let { enabled: n, isInteracting: l } = e,
                { categories: a, purchases: r } = (0, m.Ay)({ stalePurchasesOK: !0 }),
                i = t.useMemo(() => (0, b.zd)(r, a), [r, a]),
                s = (0, C.A)({ enabled: n, isInteracting: l, items: i, preload: y });
            return null != s ? { skuId: s.skuId, asset: s.asset, label: s.label, palette: s.palette } : null;
        })({ enabled: u && !o && !g, isInteracting: c }),
        j = null != k;
    return (0, a.jsx)("div", {
        className: i()(x.M, { [N.O]: j }),
        "aria-hidden": !0,
        children: (0, a.jsx)(d.A, {
            user: n,
            guildId: l ?? void 0,
            nameplate: j ? k : r,
            showPlaceholderUser: (u && !o) || !c,
            isHighlighted: c,
            pendingGlobalName: v,
            pendingNickname: f,
            pendingDisplayNameStyles: p,
            pendingPrimaryGuildId: A,
            pendingAvatar: I,
        }),
    });
}
function P(e) {
    let { user: n, guildId: l, disabled: r, errorMessageId: i } = e,
        s = t.useRef(null),
        { analyticsLocations: d } = (0, u.Ay)(),
        h = null != l,
        { guildNameplate: b, pendingNameplate: m } = (0, v.rv)(n, l ?? void 0),
        A = n.collectibles?.nameplate,
        I = h ? b : A,
        C = void 0 !== m,
        y = null === m || (!C && null == I),
        x = h && null != A,
        N = (0, v.lw)({ pendingValue: m, userValue: A, guildValue: b, guildId: l ?? void 0 }),
        { product: P } = (0, o.q)(N?.skuId),
        E = C ? null != m : null != I,
        R =
            null != N && E
                ? {
                      onClick: () => (0, f.p)({ guildId: l ?? void 0, nameplate: null }),
                      type: x ? "reset" : "remove",
                      accessibleLabel: k.intl.string(x ? k.t.neYqhR : k.t["9zwziY"]),
                  }
                : void 0,
        w = t.useCallback(() => {
            (0, c.p)({ analyticsLocations: d, guildId: l ?? void 0, stackingBehavior: "stack", returnRef: s });
        }, [d, l]);
    return (0, a.jsx)(p.A, {
        buttonRef: s,
        affordance: y && !x ? "add" : R,
        variant: "bar",
        onClick: w,
        accessibleLabel: k.intl.string(k.t.x5CoXR),
        accessibleValue: (function (e) {
            let { nameplatePreview: n, productName: l, hasPendingSelection: a } = e;
            return null == n
                ? k.intl.string(k.t["3Xph0/"])
                : null != l && "" !== l
                  ? l
                  : k.intl.string(a ? k.t.mo1Huz : k.t.s9kNKK);
        })({ nameplatePreview: N, productName: (0, g.VG)(P), hasPendingSelection: null != m }),
        "aria-haspopup": "dialog",
        disabled: r,
        errorMessageId: i,
        renderPreview: (e) =>
            (0, a.jsx)(j, {
                user: n,
                guildId: l,
                nameplatePreview: N,
                isEmpty: y,
                hasMainProfileFallback: x,
                isInteracting: e,
                disabled: r,
            }),
    });
}
