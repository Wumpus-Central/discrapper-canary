l.d(n, { A: () => j });
var t = l(627968),
    a = l(64700),
    r = l(503698),
    i = l.n(r),
    s = l(688810),
    u = l(674658),
    o = l(344346),
    d = l(637193),
    c = l(536572),
    g = l(919395),
    v = l(84540),
    h = l(930349),
    f = l(993408),
    m = l(841702),
    p = l(746002),
    b = l(515718),
    I = l(195292);
function x(e) {
    let n = (0, p.getCollectiblesItemAssetUrl)({ skuId: e.skuId, assetFormat: p.CollectiblesItemAssetFormat.STATIC });
    null != n && (0, b.NN)(n).catch(() => {});
}
var A = l(375708),
    C = l(535592),
    k = l(970389);
function y(e) {
    let {
            user: n,
            guildId: l,
            nameplatePreview: r,
            isEmpty: s,
            hasMainProfileFallback: u,
            isInteracting: d,
            disabled: c,
        } = e,
        g = (function (e) {
            let { enabled: n, isInteracting: l } = e,
                { categories: t, purchases: r } = (0, m.Ay)({ stalePurchasesOK: !0 }),
                i = a.useMemo(() => (0, f.zd)(r, t), [r, t]),
                s = (0, I.A)({ enabled: n, isInteracting: l, items: i, preload: x });
            return null != s ? { skuId: s.skuId, asset: s.asset, label: s.label, palette: s.palette } : null;
        })({ enabled: s && !u && !c, isInteracting: d }),
        v = null != g;
    return (0, t.jsx)("div", {
        className: i()(C.M, { [k.O]: v }),
        "aria-hidden": !0,
        children: (0, t.jsx)(o.A, {
            user: n,
            guildId: l ?? void 0,
            nameplate: v ? g : r,
            showPlaceholderUser: s || !d,
            isHighlighted: d,
        }),
    });
}
function j(e) {
    let { user: n, guildId: l, disabled: r, errorMessageId: i } = e,
        { analyticsLocations: o } = (0, s.Ay)(),
        f = null != l,
        { guildNameplate: m, pendingNameplate: p } = (0, g.rv)(n, l ?? void 0),
        b = n.collectibles?.nameplate,
        I = f ? m : b,
        x = void 0 !== p,
        C = null === p || (!x && null == I),
        k = f && null != b,
        j = (0, g.lw)({ pendingValue: p, userValue: b, guildValue: m, guildId: l ?? void 0 }),
        { product: N } = (0, u.q)(j?.skuId),
        E = x ? null != p : null != I,
        w =
            null != j && E
                ? {
                      onClick: () => (0, v.p)({ guildId: l ?? void 0, nameplate: null }),
                      type: k ? "reset" : "remove",
                      accessibleLabel: A.intl.string(k ? A.t.neYqhR : A.t["9zwziY"]),
                  }
                : void 0,
        S = a.useCallback(() => {
            (0, d.p)({ analyticsLocations: o, guildId: l ?? void 0, stackingBehavior: "stack" });
        }, [o, l]);
    return (0, t.jsx)(h.V, {
        affordance: C && !k ? "add" : w,
        variant: "bar",
        onClick: S,
        accessibleLabel: A.intl.string(A.t.x5CoXR),
        accessibleValue: (function (e) {
            let { nameplatePreview: n, productName: l, hasPendingSelection: t } = e;
            return null == n
                ? A.intl.string(A.t["3Xph0/"])
                : null != l && "" !== l
                  ? l
                  : A.intl.string(t ? A.t.mo1Huz : A.t.s9kNKK);
        })({ nameplatePreview: j, productName: (0, c.VG)(N), hasPendingSelection: null != p }),
        "aria-haspopup": "dialog",
        disabled: r,
        errorMessageId: i,
        renderPreview: (e) =>
            (0, t.jsx)(y, {
                user: n,
                guildId: l,
                nameplatePreview: j,
                isEmpty: C,
                hasMainProfileFallback: k,
                isInteracting: e,
                disabled: r,
            }),
    });
}
