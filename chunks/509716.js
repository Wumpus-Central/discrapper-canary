r.d(n, {
    f: function () {
        return c;
    }
});
var i = r(47120);
var a = r(456007),
    o = r(895924),
    s = r(351133),
    l = r(689079),
    u = r(388032);
function c(e) {
    let { option: n, content: r, guildId: i, channelId: c, allowEmptyValues: d, commandOrigin: f = o.bB.CHAT } = e,
        p = null != r ? (0, a.KF)({ content: r }, 'content').trim() : '',
        h = n.required,
        _ = '' === p;
    if (!(null != r))
        return h
            ? {
                  success: !1,
                  error: u.intl.string(u.t.JZJQLy)
              }
            : { success: !0 };
    if (_)
        return d
            ? { success: !0 }
            : h
              ? {
                    success: !1,
                    error: u.intl.string(u.t.JZJQLy)
                }
              : {
                    success: !1,
                    error: (0, l.al)(n)
                };
    let m =
            r.length > 1
                ? {
                      type: 'text',
                      text: p
                  }
                : r[0],
        g = s.Z[n.type](m, n, c, i, f);
    return !g.success && null == g.error && (g.error = (0, l.al)(n)), g;
}
