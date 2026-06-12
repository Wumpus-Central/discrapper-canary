r.d(e, { A: () => y });
var n = r(64700),
    a = r(284009),
    i = r.n(a),
    c = r(702841),
    o = r(554830),
    s = r(32880),
    l = r(871109),
    h = r(882863),
    u = r(960427),
    d = r(375708);
function y(t) {
    let { guildId: e, productId: r } = t,
        a = (0, c.bG)([l.A], () => l.A.getGuildProduct(r)),
        { isLoading: y, downloadAttachment: _ } = (0, h.A)(e, r),
        p = n.useCallback(() => {
            let t = a?.attachments?.[0]?.id;
            i()(null != t, "No attachment"), _(t);
        }, [_, a?.attachments]),
        U = n.useCallback(() => u.A.open({ guildId: e, productId: r }), [e, r]);
    return (a?.attachments?.length ?? 0) > 1
        ? { variant: "primary", text: d.intl.string(d.t.UyuiUE), icon: o.K, iconPosition: "end", onClick: U }
        : {
              variant: "primary",
              text: d.intl.string(d.t.t9bE9b),
              icon: s.s,
              iconPosition: "end",
              loading: y,
              onClick: p,
          };
}
