n.d(t, { f: () => l }), n(388685), n(781311);
var r = n(456007),
    i = n(895924),
    a = n(351133),
    o = n(689079),
    s = n(388032);
function l(e) {
    let { option: t, content: n, guildId: l, channelId: c, allowEmptyValues: u, commandOrigin: d = i.bB.CHAT } = e,
        f = null != n ? (0, r.KF)({ content: n }, "content").trim() : "",
        p = t.required,
        _ = "" === f;
    if (null == n)
        return p
            ? {
                  success: !1,
                  error: s.intl.string(s.t.JZJQL2),
              }
            : { success: !0 };
    if (_)
        return u
            ? { success: !0 }
            : p
              ? {
                    success: !1,
                    error: s.intl.string(s.t.JZJQL2),
                }
              : {
                    success: !1,
                    error: (0, o.al)(t),
                };
    let m =
            n.length > 1
                ? {
                      type: "text",
                      text: f,
                  }
                : n[0],
        h = a.Z[t.type](m, t, c, l, d);
    return h.success || null != h.error || (h.error = (0, o.al)(t)), h;
}
