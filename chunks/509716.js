(n.d(t, { f: () => l }), n(388685), n(781311));
var r = n(456007),
    i = n(895924),
    a = n(351133),
    o = n(689079),
    s = n(388032);
function l(e) {
    let { option: t, content: n, guildId: l, channelId: c, allowEmptyValues: u, commandOrigin: d = i.bB.CHAT } = e,
        _ = null != n ? (0, r.KF)({ content: n }, 'content').trim() : '',
        f = t.required,
        p = '' === _;
    if (null == n)
        return f
            ? {
                  success: !1,
                  error: s.intl.string(s.t.JZJQLy)
              }
            : { success: !0 };
    if (p)
        return u
            ? { success: !0 }
            : f
              ? {
                    success: !1,
                    error: s.intl.string(s.t.JZJQLy)
                }
              : {
                    success: !1,
                    error: (0, o.al)(t)
                };
    let h =
            n.length > 1
                ? {
                      type: 'text',
                      text: _
                  }
                : n[0],
        m = a.Z[t.type](h, t, c, l, d);
    return (m.success || null != m.error || (m.error = (0, o.al)(t)), m);
}
