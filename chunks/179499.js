n.d(t, {
    A: () => f,
});
var r = n(64700),
    i = n(284009),
    a = n.n(i),
    s = n(417597),
    o = n(397927),
    l = n(871109),
    c = n(666171),
    u = n(960427),
    d = n(985018);

function f(e) {
    var t, n;
    let { guildId: i, productId: f } = e,
        p = (0, s.bG)([l.A], () => l.A.getGuildProduct(f)),
        { isLoading: _, downloadAttachment: h } = (0, c.A)(i, f),
        m = r.useCallback(() => {
            var e, t;
            let n = null == p || null == (t = p.attachments) || null == (e = t[0]) ? void 0 : e.id;
            a()(null != n, "No attachment"), h(n);
        }, [h, null == p ? void 0 : p.attachments]),
        g = r.useCallback(
            () =>
                u.A.open({
                    guildId: i,
                    productId: f,
                }),
            [i, f],
        );
    return (null != (t = null == p || null == (n = p.attachments) ? void 0 : n.length) ? t : 0) > 1
        ? {
              variant: "primary",
              text: d.intl.string(d.t.UyuiUE),
              icon: o.KS6,
              iconPosition: "end",
              onClick: g,
          }
        : {
              variant: "primary",
              text: d.intl.string(d.t.t9bE9b),
              icon: o.s3U,
              iconPosition: "end",
              loading: _,
              onClick: m,
          };
}
