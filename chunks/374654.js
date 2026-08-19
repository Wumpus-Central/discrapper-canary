l.d(n, { A: () => E });
var t = l(477900),
    a = l(582128),
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
    m = l(993408),
    b = l(841702),
    A = l(746002),
    I = l(515718),
    C = l(195292);
function x(e) {
    let n = (0, A.getCollectiblesItemAssetUrl)({ skuId: e.skuId, assetFormat: A.CollectiblesItemAssetFormat.STATIC });
    null != n && (0, I.NN)(n).catch(() => {});
}
var k = l(375708),
    y = l(389328),
    N = l(462397);
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
        I = (function (e) {
            let { enabled: n, isInteracting: l } = e,
                { categories: t, purchases: r } = (0, b.Ay)({ stalePurchasesOK: !0 }),
                i = a.useMemo(() => (0, m.zd)(r, t), [r, t]),
                s = (0, C.A)({ enabled: n, isInteracting: l, items: i, preload: x });
            return null != s ? { skuId: s.skuId, asset: s.asset, label: s.label, palette: s.palette } : null;
        })({ enabled: u && !o && !g, isInteracting: c }),
        k = null != I;
    return (0, t.jsx)("div", {
        className: i()(y.M, { [N.O]: k }),
        "aria-hidden": !0,
        children: (0, t.jsx)(d.A, {
            user: n,
            guildId: l ?? void 0,
            nameplate: k ? I : r,
            showPlaceholderUser: (u && !o) || !c,
            isHighlighted: c,
            pendingGlobalName: v,
            pendingNickname: f,
            pendingDisplayNameStyles: p,
            pendingPrimaryGuildId: A,
        }),
    });
}
function E(e) {
    let { user: n, guildId: l, disabled: r, errorMessageId: i } = e,
        { analyticsLocations: s } = (0, u.Ay)(),
        d = null != l,
        { guildNameplate: h, pendingNameplate: m } = (0, v.rv)(n, l ?? void 0),
        b = n.collectibles?.nameplate,
        A = d ? h : b,
        I = void 0 !== m,
        C = null === m || (!I && null == A),
        x = d && null != b,
        y = (0, v.lw)({ pendingValue: m, userValue: b, guildValue: h, guildId: l ?? void 0 }),
        { product: N } = (0, o.q)(y?.skuId),
        E = I ? null != m : null != A,
        w =
            null != y && E
                ? {
                      onClick: () => (0, f.p)({ guildId: l ?? void 0, nameplate: null }),
                      type: x ? "reset" : "remove",
                      accessibleLabel: k.intl.string(x ? k.t.neYqhR : k.t["9zwziY"]),
                  }
                : void 0,
        P = a.useCallback(() => {
            (0, c.p)({ analyticsLocations: s, guildId: l ?? void 0, stackingBehavior: "stack" });
        }, [s, l]);
    return (0, t.jsx)(p.A, {
        affordance: C && !x ? "add" : w,
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
                isEmpty: C,
                hasMainProfileFallback: x,
                isInteracting: e,
                disabled: r,
            }),
    });
}
