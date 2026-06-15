l.d(n, { A: () => f });
var t = l(627968),
    a = l(64700),
    r = l(688810),
    i = l(674658),
    s = l(344346),
    o = l(637193),
    u = l(536572),
    d = l(919395),
    c = l(84540),
    g = l(930349),
    v = l(375708),
    h = l(535592);
function f(e) {
    let { user: n, guildId: l, disabled: f, errorMessageId: p } = e,
        { analyticsLocations: m } = (0, r.Ay)(),
        b = null != l,
        { guildNameplate: x, pendingNameplate: I } = (0, d.rv)(n, l ?? void 0),
        C = n.collectibles?.nameplate,
        A = b ? x : C,
        k = void 0 !== I,
        y = null === I || (!k && null == A),
        j = b && null != C,
        N = (0, d.lw)({ pendingValue: I, userValue: C, guildValue: x, guildId: l ?? void 0 }),
        { product: E } = (0, i.q)(N?.skuId),
        w = k ? null != I : null != A,
        S =
            null != N && w
                ? {
                      onClick: () => (0, c.p)({ guildId: l ?? void 0, nameplate: null }),
                      type: j ? "reset" : "remove",
                      accessibleLabel: v.intl.string(j ? v.t.neYqhR : v.t["9zwziY"]),
                  }
                : void 0,
        R = a.useCallback(() => {
            (0, o.p)({ analyticsLocations: m, guildId: l ?? void 0, stackingBehavior: "stack" });
        }, [m, l]);
    return (0, t.jsx)(g.V, {
        affordance: y && !j ? "add" : S,
        variant: "bar",
        onClick: R,
        accessibleLabel: v.intl.string(v.t.x5CoXR),
        accessibleValue: (function (e) {
            let { nameplatePreview: n, productName: l, hasPendingSelection: t } = e;
            return null == n
                ? v.intl.string(v.t["3Xph0/"])
                : null != l && "" !== l
                  ? l
                  : v.intl.string(t ? v.t.mo1Huz : v.t.s9kNKK);
        })({ nameplatePreview: N, productName: (0, u.VG)(E), hasPendingSelection: null != I }),
        "aria-haspopup": "dialog",
        disabled: f,
        errorMessageId: p,
        renderPreview: (e) =>
            (0, t.jsx)("div", {
                className: h.M,
                "aria-hidden": !0,
                children: (0, t.jsx)(s.A, {
                    user: n,
                    guildId: l ?? void 0,
                    nameplate: N,
                    showPlaceholderUser: y || !e,
                    isHighlighted: e,
                }),
            }),
    });
}
