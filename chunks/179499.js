n.d(e, { A: () => y });
var r = n(582128),
    a = n(284009),
    i = n.n(a),
    c = n(702841),
    o = n(554830),
    s = n(32880),
    l = n(871109),
    h = n(882863),
    u = n(960427),
    d = n(375708);
function y(t) {
    let { guildId: e, productId: n } = t,
        a = (0, c.bG)([l.A], () => l.A.getGuildProduct(n)),
        { isLoading: y, downloadAttachment: _ } = (0, h.A)(e, n),
        T = r.useCallback(() => {
            let t = a?.attachments?.[0]?.id;
            i()(null != t, "No attachment"), _(t);
        }, [_, a?.attachments]),
        p = r.useCallback(() => u.A.open({ guildId: e, productId: n }), [e, n]);
    return (a?.attachments?.length ?? 0) > 1
        ? { variant: "primary", text: d.intl.string(d.t.UyuiUE), icon: o.K, iconPosition: "end", onClick: p }
        : {
              variant: "primary",
              text: d.intl.string(d.t.t9bE9b),
              icon: s.s,
              iconPosition: "end",
              loading: y,
              onClick: T,
          };
}
