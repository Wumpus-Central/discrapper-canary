s.d(a, { default: () => l });
var t = s(627968),
    i = s(189213),
    r = s(834730),
    n = s(363487),
    d = s(539085),
    o = s(422699);
function l(e) {
    let {
            guildId: a,
            title: s,
            description: l,
            powerups: c,
            newPowerupSkuIdSet: x,
            forceStaticImages: u,
            footerInfoText: m,
            footerAction: p,
            ...v
        } = e,
        h = (0, n.A)(a),
        j =
            null != m && m.length > 0
                ? (0, t.jsx)("div", {
                      className: o.x,
                      children: (0, t.jsx)(r.E, {
                          variant: "text-sm/semibold",
                          color: "text-feedback-warning",
                          children: m,
                      }),
                  })
                : void 0;
    return (0, t.jsx)(i.Modal, {
        title: s,
        subtitle: l,
        actionBarInput: j,
        actions: null != p ? [p] : [],
        ...v,
        children: (0, t.jsx)("div", {
            className: o.p,
            children: c.map((e) =>
                (0, t.jsx)(
                    d.A,
                    { guildId: a, powerup: e, canUseBoosts: h ?? !1, isNewPerk: x?.has(e.skuId), forceStaticImages: u },
                    e.skuId,
                ),
            ),
        }),
    });
}
