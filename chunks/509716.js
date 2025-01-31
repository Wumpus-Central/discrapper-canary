n.d(t, { f: () => l }), n(47120);
var i = n(456007),
    r = n(895924),
    a = n(351133),
    s = n(689079),
    o = n(388032);
function l(e) {
    let { option: t, content: n, guildId: l, channelId: u, allowEmptyValues: c, commandOrigin: d = r.bB.CHAT } = e,
        f = null != n ? (0, i.KF)({ content: n }, 'content').trim() : '',
        _ = t.required,
        p = '' === f;
    if (!(null != n))
        return _
            ? {
                  success: !1,
                  error: o.intl.string(o.t.JZJQLy)
              }
            : { success: !0 };
    if (p)
        return c
            ? { success: !0 }
            : _
              ? {
                    success: !1,
                    error: o.intl.string(o.t.JZJQLy)
                }
              : {
                    success: !1,
                    error: (0, s.al)(t)
                };
    let h =
            n.length > 1
                ? {
                      type: 'text',
                      text: f
                  }
                : n[0],
        m = a.Z[t.type](h, t, u, l, d);
    return m.success || null != m.error || (m.error = (0, s.al)(t)), m;
}
