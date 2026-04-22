l.d(t, { A: () => I });
var n = l(627968),
    a = l(64700),
    s = l(503698),
    i = l.n(s),
    r = l(311907),
    d = l(459192),
    o = l(821609),
    c = l(492349),
    u = l(939249),
    m = l(534514),
    v = l(363487),
    x = l(410212),
    g = l(890942),
    f = l(522055),
    j = l(225180),
    h = l(146995),
    b = l(853513),
    p = l(985018),
    N = l(980876);
function A(e) {
    let { guildId: t, gameInstance: l, cost: a } = e;
    return (0, n.jsx)(d.u, {
        "aria-label": p.intl.string(b.default.TZsu1U),
        title: p.intl.string(b.default.TZsu1U),
        body: p.intl.formatToPlainString(b.default["5HQUzD"], { boostCount: a }),
        children: (0, n.jsx)("div", {
            className: N.vI,
            children: (0, n.jsx)(o.$, {
                icon: { type: "icon", asset: c.x },
                text: a.toString(),
                variant: "secondary",
                size: "sm",
                "aria-label": p.intl.string(b.default.TZsu1U),
                onClick: (e) => {
                    e.stopPropagation(), (0, h.m)(t, l);
                },
            }),
        }),
    });
}
function I(e) {
    let { guildId: t, gameInstance: l, onClick: s } = e,
        d = (0, r.bG)([f.A], () => f.A.getStateForGuild(t)),
        o = a.useMemo(() => d?.entitlements?.[l.entitlementId], [d?.entitlements, l.entitlementId]),
        c = o?.ends_at != null,
        h = (0, x.A)(o),
        I = (0, j.A)(l.gameId, "icon"),
        S = (0, v.A)(t);
    return null == h
        ? null
        : (0, n.jsxs)(u.D, {
              className: i()(N.LO, { [N.r9]: !S }),
              onClick: S ? () => s(l) : void 0,
              "aria-disabled": !S,
              children: [
                  (0, n.jsx)("img", { className: N.Sl, alt: "", src: I }),
                  (0, n.jsxs)("div", {
                      className: N.FS,
                      children: [
                          (0, n.jsx)(m.D, { variant: "heading-sm/semibold", children: l.name }),
                          c
                              ? (0, n.jsx)(g.P5, { dateString: o.ends_at })
                              : (0, n.jsx)(g.TG, { text: p.intl.string(b.default.FFLkmx) }),
                      ],
                  }),
                  S && (0, n.jsx)(A, { guildId: t, gameInstance: l, cost: h }),
              ],
          });
}
