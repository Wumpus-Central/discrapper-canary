n.d(t, { f: () => l }), n(47120), n(566702);
var r = n(456007),
    i = n(895924),
    o = n(351133),
    a = n(689079),
    s = n(388032);
function l(e) {
    let { option: t, content: n, guildId: l, channelId: c, allowEmptyValues: u, commandOrigin: d = i.bB.CHAT } = e,
        f = null != n ? (0, r.KF)({ content: n }, 'content').trim() : '',
        p = t.required,
        _ = '' === f;
    if (null == n)
        return p
            ? {
                  success: !1,
                  error: s.NW.string(s.t.JZJQLy)
              }
            : { success: !0 };
    if (_)
        return u
            ? { success: !0 }
            : p
              ? {
                    success: !1,
                    error: s.NW.string(s.t.JZJQLy)
                }
              : {
                    success: !1,
                    error: (0, a.al)(t)
                };
    let h =
            n.length > 1
                ? {
                      type: 'text',
                      text: f
                  }
                : n[0],
        m = o.Z[t.type](h, t, c, l, d);
    return m.success || null != m.error || (m.error = (0, a.al)(t)), m;
}
