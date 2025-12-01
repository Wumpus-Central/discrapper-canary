n.d(t, { Z: () => f });
var r = n(473749),
    i = n(512722),
    a = n.n(i),
    o = n(399606),
    s = n(481060),
    l = n(240864),
    c = n(406877),
    u = n(613810),
    d = n(388032);
function f(e) {
    var t, n;
    let { guildId: i, productId: f } = e,
        p = (0, o.e7)([l.Z], () => l.Z.getGuildProduct(f)),
        { isLoading: _, downloadAttachment: m } = (0, c.Z)(i, f),
        h = r.useCallback(() => {
            var e, t;
            let n = null == p || null == (t = p.attachments) || null == (e = t[0]) ? void 0 : e.id;
            a()(null != n, "No attachment"), m(n);
        }, [m, null == p ? void 0 : p.attachments]),
        g = r.useCallback(
            () =>
                u.Z.open({
                    guildId: i,
                    productId: f,
                }),
            [i, f],
        );
    return (null != (n = null == p || null == (t = p.attachments) ? void 0 : t.length) ? n : 0) > 1
        ? {
              variant: "primary",
              text: d.intl.string(d.t.UyuiUE),
              icon: s.d4D,
              iconPosition: "end",
              onClick: g,
          }
        : {
              variant: "primary",
              text: d.intl.string(d.t.t9bE9b),
              icon: s._8t,
              iconPosition: "end",
              loading: _,
              onClick: h,
          };
}
