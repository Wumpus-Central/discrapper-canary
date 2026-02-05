t.d(s, { default: () => l });
var a = t(627968),
    i = t(158954),
    r = t(397927),
    n = t(363487),
    d = t(539085),
    o = t(154);
function l(e) {
    let { guildId: s, title: t, description: l, powerups: c, footerInfoText: x, footerAction: u, ...p } = e,
        m = (0, n.A)(s),
        v =
            null != x && x.length > 0
                ? (0, a.jsx)("div", {
                      className: o.x,
                      children: (0, a.jsx)(r.Text, { variant: "text-sm/medium", children: x }),
                  })
                : void 0;
    return (0, a.jsx)(i.Modal, {
        title: t,
        subtitle: l,
        actionBarInput: v,
        actions: null != u ? [u] : [],
        ...p,
        children: (0, a.jsx)("div", {
            className: o.p,
            children: c.map((e) => (0, a.jsx)(d.A, { guildId: s, powerup: e, canUseBoosts: m ?? !1 }, e.skuId)),
        }),
    });
}
