e.d(n, { A: () => y });
var r = e(582128),
    a = e(284009),
    i = e.n(a),
    c = e(702841),
    o = e(554830),
    s = e(32880),
    l = e(871109),
    h = e(882863),
    u = e(960427),
    d = e(375708);
function y(t) {
    let { guildId: n, productId: e } = t,
        a = (0, c.bG)([l.A], () => l.A.getGuildProduct(e)),
        { isLoading: y, downloadAttachment: _ } = (0, h.A)(n, e),
        T = r.useCallback(() => {
            let t = a?.attachments?.[0]?.id;
            i()(null != t, "No attachment"), _(t);
        }, [_, a?.attachments]),
        p = r.useCallback(() => u.A.open({ guildId: n, productId: e }), [n, e]);
    return (a?.attachments?.length ?? 0) > 1
        ? { variant: "primary", text: d.intl.string(d.t.UyuiUE), icon: o.K, iconPosition: "end", onClick: p }
        : {
              variant: "primary",
              text: d.intl.string(d.t.t9bE9b),
              icon: s.DownloadIcon,
              iconPosition: "end",
              loading: y,
              onClick: T,
          };
}
