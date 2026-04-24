n.d(t, { A: () => m });
var i = n(64700),
    l = n(284009),
    a = n.n(l),
    r = n(702841),
    s = n(554830),
    o = n(32880),
    c = n(871109),
    d = n(882863),
    u = n(960427),
    _ = n(985018);
function m(e) {
    let { guildId: t, productId: n } = e,
        l = (0, r.bG)([c.A], () => c.A.getGuildProduct(n)),
        { isLoading: m, downloadAttachment: h } = (0, d.A)(t, n),
        p = i.useCallback(() => {
            let e = l?.attachments?.[0]?.id;
            a()(null != e, "No attachment"), h(e);
        }, [h, l?.attachments]),
        g = i.useCallback(() => u.A.open({ guildId: t, productId: n }), [t, n]);
    return (l?.attachments?.length ?? 0) > 1
        ? { variant: "primary", text: _.intl.string(_.t.UyuiUE), icon: s.K, iconPosition: "end", onClick: g }
        : {
              variant: "primary",
              text: _.intl.string(_.t.t9bE9b),
              icon: o.s,
              iconPosition: "end",
              loading: m,
              onClick: p,
          };
}
