l.d(n, { A: () => P });
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
    b = l(993408),
    m = l(841702),
    A = l(746002),
    I = l(515718),
    y = l(195292);
function k(e) {
    let n = (0, A.getCollectiblesItemAssetUrl)({ skuId: e.skuId, assetFormat: A.CollectiblesItemAssetFormat.STATIC });
    null != n && (0, I.NN)(n).catch(() => {});
}
var C = l(105292),
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
        C = (function (e) {
            let { enabled: n, isInteracting: l } = e,
                { categories: t, purchases: r } = (0, m.Ay)({ stalePurchasesOK: !0, skipFetch: !n }),
                i = a.useMemo(() => (0, b.zd)(r, t), [r, t]),
                s = (0, y.A)({ enabled: n, isInteracting: l, items: i, preload: k });
            return null != s ? { skuId: s.skuId, asset: s.asset, label: s.label, palette: s.palette } : null;
        })({ enabled: u && !o && !g, isInteracting: c }),
        j = null != C,
        P = j ? void 0 : r?.label;
    return (0, t.jsx)("div", {
        className: i()(x.M, { [N.O]: j }),
        role: null != P ? "img" : void 0,
        "aria-label": P,
        children: (0, t.jsx)("div", {
            "aria-hidden": !0,
            children: (0, t.jsx)(d.A, {
                user: n,
                guildId: l ?? void 0,
                nameplate: j ? C : r,
                showPlaceholderUser: (u && !o) || !c,
                isHighlighted: c,
                pendingGlobalName: v,
                pendingNickname: f,
                pendingDisplayNameStyles: p,
                pendingPrimaryGuildId: A,
                pendingAvatar: I,
            }),
        }),
    });
}
function P(e) {
    let { user: n, guildId: l, disabled: r, errorMessageId: i } = e,
        s = a.useRef(null),
        { analyticsLocations: d } = (0, u.Ay)(),
        h = null != l,
        { guildNameplate: b, pendingNameplate: m } = (0, v.rv)(n, l ?? void 0),
        A = n.collectibles?.nameplate,
        I = h ? b : A,
        y = void 0 !== m,
        k = null === m || (!y && null == I),
        x = h && null != A,
        N = (0, v.lw)({ pendingValue: m, userValue: A, guildValue: b, guildId: l ?? void 0 }),
        { product: P } = (0, o.q)(N?.skuId),
        E = y ? null != m : null != I,
        w =
            null != N && E
                ? {
                      onClick: () => (0, f.p)({ guildId: l ?? void 0, nameplate: null }),
                      type: x ? "reset" : "remove",
                      accessibleLabel: C.intl.string(x ? C.t.neYqhR : C.t["9zwziY"]),
                  }
                : void 0,
        R = a.useCallback(() => {
            (0, c.p)({ analyticsLocations: d, guildId: l ?? void 0, stackingBehavior: "stack", returnRef: s });
        }, [d, l]);
    return (0, t.jsx)(p.A, {
        buttonRef: s,
        affordance: k && !x ? "add" : w,
        variant: "bar",
        onClick: R,
        fieldA11yLabel: C.intl.string(C.t.x5CoXR),
        editButtonA11yLabel: C.intl.string(C.t.BwdeM1),
        currentValueA11yLabel: (function (e) {
            let { nameplatePreview: n, productName: l, hasPendingSelection: t } = e;
            return null == n
                ? C.intl.string(C.t["3Xph0/"])
                : null != l && "" !== l
                  ? l
                  : C.intl.string(t ? C.t.mo1Huz : C.t.s9kNKK);
        })({ nameplatePreview: N, productName: (0, g.VG)(P), hasPendingSelection: null != m }),
        "aria-haspopup": "dialog",
        disabled: r,
        errorMessageId: i,
        renderPreview: (e) =>
            (0, t.jsx)(j, {
                user: n,
                guildId: l,
                nameplatePreview: N,
                isEmpty: k,
                hasMainProfileFallback: x,
                isInteracting: e,
                disabled: r,
            }),
    });
}
