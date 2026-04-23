n.d(t, { A: () => _ });
var i = n(64700),
    l = n(284009),
    a = n.n(l),
    s = n(417597),
    r = n(554830),
    o = n(32880),
    d = n(871109),
    c = n(666171),
    u = n(960427),
    m = n(985018);
function _(e) {
    let { guildId: t, productId: n } = e,
        l = (0, s.bG)([d.A], () => d.A.getGuildProduct(n)),
        { isLoading: _, downloadAttachment: h } = (0, c.A)(t, n),
        p = i.useCallback(() => {
            let e = l?.attachments?.[0]?.id;
            a()(null != e, "No attachment"), h(e);
        }, [h, l?.attachments]),
        g = i.useCallback(() => u.A.open({ guildId: t, productId: n }), [t, n]);
    return (l?.attachments?.length ?? 0) > 1
        ? { variant: "primary", text: m.intl.string(m.t.UyuiUE), icon: r.K, iconPosition: "end", onClick: g }
        : {
              variant: "primary",
              text: m.intl.string(m.t.t9bE9b),
              icon: o.s,
              iconPosition: "end",
              loading: _,
              onClick: p,
          };
}
