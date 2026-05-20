a.d(l, { A: () => g });
var i = a(627968),
    n = a(64700),
    r = a(688810),
    t = a(344346),
    s = a(637193),
    d = a(919395),
    u = a(84540),
    c = a(930349),
    o = a(375708),
    v = a(535592);
function g(e) {
    let { user: l, guildId: a, disabled: g } = e,
        { analyticsLocations: f } = (0, r.Ay)(),
        h = null != a,
        { guildNameplate: b, pendingNameplate: p } = (0, d.rv)(l, a ?? void 0),
        m = l.collectibles?.nameplate,
        k = h ? b : m,
        A = void 0 !== p,
        I = null === p || (!A && null == k),
        C = h && null != m,
        x = (0, d.lw)({ pendingValue: p, userValue: m, guildValue: b, guildId: a ?? void 0 }),
        y =
            null != x && (A ? null != p : null != k)
                ? {
                      onClick: () => (0, u.p)({ guildId: a ?? void 0, nameplate: null }),
                      type: C ? "reset" : "remove",
                      accessibleLabel: o.intl.string(C ? o.t.neYqhR : o.t["9zwziY"]),
                  }
                : void 0,
        j = n.useCallback(() => {
            (0, s.p)({ analyticsLocations: f, guildId: a ?? void 0, stackingBehavior: "stack" });
        }, [f, a]);
    return (0, i.jsx)(c.V, {
        affordance: I && !C ? "add" : y,
        variant: "bar",
        onClick: j,
        accessibleLabel: o.intl.string(o.t.BwdeM1),
        "aria-haspopup": "dialog",
        disabled: g,
        renderPreview: (e) =>
            (0, i.jsx)("div", {
                className: v.M,
                "aria-hidden": !0,
                children: (0, i.jsx)(t.A, {
                    user: l,
                    guildId: a ?? void 0,
                    nameplate: x,
                    showPlaceholderUser: I || !e,
                    isHighlighted: e,
                }),
            }),
    });
}
