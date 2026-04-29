n.d(l, { A: () => b });
var i = n(627968),
    a = n(64700),
    t = n(688810),
    s = n(344346),
    r = n(637193),
    d = n(713517),
    u = n(919395),
    c = n(84540),
    o = n(930349),
    v = n(985018),
    g = n(535592);
function b(e) {
    let { user: l, guildId: n, disabled: b } = e,
        { analyticsLocations: h } = (0, t.Ay)(),
        f = null != n,
        m = a.useRef(null),
        { isHoveringOrFocusing: k } = (0, d.A)(m),
        { guildNameplate: C, pendingNameplate: x } = (0, u.rv)(l, n ?? void 0),
        A = l.collectibles?.nameplate,
        p = f ? C : A,
        y = void 0 !== x,
        j = null === x || (!y && null == p),
        I = f && null != A,
        N = j && I,
        L = (0, u.lw)({ pendingValue: x, userValue: A, guildValue: C, guildId: n ?? void 0 }),
        w =
            null != L && (y ? null != x : null != p)
                ? {
                      onClick: () => (0, c.p)({ guildId: n ?? void 0, nameplate: null }),
                      type: I ? "reset" : "remove",
                      accessibleLabel: v.intl.string(I ? v.t.neYqhR : v.t["9zwziY"]),
                  }
                : void 0,
        B = a.useCallback(() => {
            (0, r.p)({ analyticsLocations: h, guildId: n ?? void 0, stackingBehavior: "stack" });
        }, [h, n]),
        z = (0, i.jsx)("div", {
            className: g.M,
            "aria-hidden": !0,
            children: (0, i.jsx)(s.A, {
                user: l,
                guildId: n ?? void 0,
                nameplate: L,
                showPlaceholderUser: j || !k || b,
            }),
        });
    return (0, i.jsx)("div", {
        ref: m,
        children: j
            ? (0, i.jsx)(o.kL, {
                  variant: "bar",
                  onClick: B,
                  accessibleLabel: v.intl.string(v.t.BwdeM1),
                  disabled: b,
                  dimContent: N,
                  children: z,
              })
            : (0, i.jsx)(o.NW, {
                  variant: "bar",
                  onClick: B,
                  accessibleLabel: v.intl.string(v.t.BwdeM1),
                  deleteButtonConfig: w,
                  disabled: b,
                  children: z,
              }),
    });
}
