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
    let { user: n, guildId: l, disabled: f } = e,
        { analyticsLocations: p } = (0, r.Ay)(),
        m = null != l,
        { guildNameplate: b, pendingNameplate: x } = (0, d.rv)(n, l ?? void 0),
        C = n.collectibles?.nameplate,
        I = m ? b : C,
        A = void 0 !== x,
        k = null === x || (!A && null == I),
        y = m && null != C,
        j = (0, d.lw)({ pendingValue: x, userValue: C, guildValue: b, guildId: l ?? void 0 }),
        { product: N } = (0, i.q)(j?.skuId),
        E = A ? null != x : null != I,
        w =
            null != j && E
                ? {
                      onClick: () => (0, c.p)({ guildId: l ?? void 0, nameplate: null }),
                      type: y ? "reset" : "remove",
                      accessibleLabel: v.intl.string(y ? v.t.neYqhR : v.t["9zwziY"]),
                  }
                : void 0,
        S = a.useCallback(() => {
            (0, o.p)({ analyticsLocations: p, guildId: l ?? void 0, stackingBehavior: "stack" });
        }, [p, l]);
    return (0, t.jsx)(g.V, {
        affordance: k && !y ? "add" : w,
        variant: "bar",
        onClick: S,
        accessibleLabel: v.intl.string(v.t.x5CoXR),
        accessibleValue: (function (e) {
            let { nameplatePreview: n, productName: l, hasPendingSelection: t } = e;
            return null == n
                ? v.intl.string(v.t["3Xph0/"])
                : null != l && "" !== l
                  ? l
                  : v.intl.string(t ? v.t.mo1Huz : v.t.s9kNKK);
        })({ nameplatePreview: j, productName: (0, u.VG)(N), hasPendingSelection: null != x }),
        "aria-haspopup": "dialog",
        disabled: f,
        renderPreview: (e) =>
            (0, t.jsx)("div", {
                className: h.M,
                "aria-hidden": !0,
                children: (0, t.jsx)(s.A, {
                    user: n,
                    guildId: l ?? void 0,
                    nameplate: j,
                    showPlaceholderUser: k || !e,
                    isHighlighted: e,
                }),
            }),
    });
}
