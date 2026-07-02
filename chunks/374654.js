l.d(n, { A: () => E });
var t = l(627968),
    a = l(64700),
    r = l(503698),
    i = l.n(r),
    s = l(17928),
    u = l(688810),
    o = l(674658),
    d = l(344346),
    c = l(637193),
    g = l(536572),
    v = l(919395),
    h = l(84540),
    f = l(836602),
    p = l(930349),
    m = l(993408),
    b = l(841702),
    I = l(746002),
    A = l(515718),
    x = l(195292);
function C(e) {
    let n = (0, I.getCollectiblesItemAssetUrl)({ skuId: e.skuId, assetFormat: I.CollectiblesItemAssetFormat.STATIC });
    null != n && (0, A.NN)(n).catch(() => {});
}
var k = l(375708),
    y = l(535592),
    N = l(970389);
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
        v = (0, s.bG)([f.A], () => f.A.getPendingChanges(null).pendingGlobalName),
        h = (0, s.bG)([f.A], () => f.A.getPendingChanges(l ?? null).pendingNickname),
        p = (0, s.bG)([f.A], () => f.A.getPendingChanges(l ?? null).pendingDisplayNameStyles),
        I = (0, s.bG)([f.A], () => f.A.getPendingChanges(null).pendingPrimaryGuildId),
        A = (function (e) {
            let { enabled: n, isInteracting: l } = e,
                { categories: t, purchases: r } = (0, b.Ay)({ stalePurchasesOK: !0 }),
                i = a.useMemo(() => (0, m.zd)(r, t), [r, t]),
                s = (0, x.A)({ enabled: n, isInteracting: l, items: i, preload: C });
            return null != s ? { skuId: s.skuId, asset: s.asset, label: s.label, palette: s.palette } : null;
        })({ enabled: u && !o && !g, isInteracting: c }),
        k = null != A;
    return (0, t.jsx)("div", {
        className: i()(y.M, { [N.O]: k }),
        "aria-hidden": !0,
        children: (0, t.jsx)(d.A, {
            user: n,
            guildId: l ?? void 0,
            nameplate: k ? A : r,
            showPlaceholderUser: (u && !o) || !c,
            isHighlighted: c,
            pendingGlobalName: v,
            pendingNickname: h,
            pendingDisplayNameStyles: p,
            pendingPrimaryGuildId: I,
        }),
    });
}
function E(e) {
    let { user: n, guildId: l, disabled: r, errorMessageId: i } = e,
        { analyticsLocations: s } = (0, u.Ay)(),
        d = null != l,
        { guildNameplate: f, pendingNameplate: m } = (0, v.rv)(n, l ?? void 0),
        b = n.collectibles?.nameplate,
        I = d ? f : b,
        A = void 0 !== m,
        x = null === m || (!A && null == I),
        C = d && null != b,
        y = (0, v.lw)({ pendingValue: m, userValue: b, guildValue: f, guildId: l ?? void 0 }),
        { product: N } = (0, o.q)(y?.skuId),
        E = A ? null != m : null != I,
        w =
            null != y && E
                ? {
                      onClick: () => (0, h.p)({ guildId: l ?? void 0, nameplate: null }),
                      type: C ? "reset" : "remove",
                      accessibleLabel: k.intl.string(C ? k.t.neYqhR : k.t["9zwziY"]),
                  }
                : void 0,
        P = a.useCallback(() => {
            (0, c.p)({ analyticsLocations: s, guildId: l ?? void 0, stackingBehavior: "stack" });
        }, [s, l]);
    return (0, t.jsx)(p.V, {
        affordance: x && !C ? "add" : w,
        variant: "bar",
        onClick: P,
        accessibleLabel: k.intl.string(k.t.x5CoXR),
        accessibleValue: (function (e) {
            let { nameplatePreview: n, productName: l, hasPendingSelection: t } = e;
            return null == n
                ? k.intl.string(k.t["3Xph0/"])
                : null != l && "" !== l
                  ? l
                  : k.intl.string(t ? k.t.mo1Huz : k.t.s9kNKK);
        })({ nameplatePreview: y, productName: (0, g.VG)(N), hasPendingSelection: null != m }),
        "aria-haspopup": "dialog",
        disabled: r,
        errorMessageId: i,
        renderPreview: (e) =>
            (0, t.jsx)(j, {
                user: n,
                guildId: l,
                nameplatePreview: y,
                isEmpty: x,
                hasMainProfileFallback: C,
                isInteracting: e,
                disabled: r,
            }),
    });
}
