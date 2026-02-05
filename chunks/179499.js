n.d(t, { A: () => m });
var i = n(64700),
    l = n(284009),
    a = n.n(l),
    r = n(417597),
    s = n(397927),
    o = n(871109),
    d = n(666171),
    c = n(960427),
    u = n(985018);
function m(e) {
    let { guildId: t, productId: n } = e,
        l = (0, r.bG)([o.A], () => o.A.getGuildProduct(n)),
        { isLoading: m, downloadAttachment: _ } = (0, d.A)(t, n),
        h = i.useCallback(() => {
            let e = l?.attachments?.[0]?.id;
            a()(null != e, "No attachment"), _(e);
        }, [_, l?.attachments]),
        p = i.useCallback(() => c.A.open({ guildId: t, productId: n }), [t, n]);
    return (l?.attachments?.length ?? 0) > 1
        ? { variant: "primary", text: u.intl.string(u.t.UyuiUE), icon: s.KS6, iconPosition: "end", onClick: p }
        : {
              variant: "primary",
              text: u.intl.string(u.t.t9bE9b),
              icon: s.s3U,
              iconPosition: "end",
              loading: m,
              onClick: h,
          };
}
