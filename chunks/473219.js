a.d(l, { A: () => g });
var i = a(627968),
    n = a(64700),
    r = a(688810),
    t = a(344346),
    s = a(637193),
    d = a(919395),
    u = a(84540),
    o = a(930349),
    c = a(375708),
    v = a(535592);
function g(e) {
    let { user: l, guildId: a, disabled: g } = e,
        { analyticsLocations: h } = (0, r.Ay)(),
        f = null != a,
        { guildNameplate: m, pendingNameplate: b } = (0, d.rv)(l, a ?? void 0),
        p = l.collectibles?.nameplate,
        A = f ? m : p,
        k = void 0 !== b,
        C = null === b || (!k && null == A),
        I = f && null != p,
        x = C && I,
        y = (0, d.lw)({ pendingValue: b, userValue: p, guildValue: m, guildId: a ?? void 0 }),
        j =
            null != y && (k ? null != b : null != A)
                ? {
                      onClick: () => (0, u.p)({ guildId: a ?? void 0, nameplate: null }),
                      type: I ? "reset" : "remove",
                      accessibleLabel: c.intl.string(I ? c.t.neYqhR : c.t["9zwziY"]),
                  }
                : void 0,
        w = n.useCallback(() => {
            (0, s.p)({ analyticsLocations: h, guildId: a ?? void 0, stackingBehavior: "stack" });
        }, [h, a]);
    return (0, i.jsx)(o.V, {
        affordance: C ? "add" : j,
        variant: "bar",
        onClick: w,
        accessibleLabel: c.intl.string(c.t.BwdeM1),
        "aria-haspopup": "dialog",
        disabled: g,
        dimContent: x,
        renderPreview: (e) =>
            (0, i.jsx)("div", {
                className: v.M,
                "aria-hidden": !0,
                children: (0, i.jsx)(t.A, {
                    user: l,
                    guildId: a ?? void 0,
                    nameplate: y,
                    showPlaceholderUser: C || !e,
                    isHighlighted: e,
                }),
            }),
    });
}
