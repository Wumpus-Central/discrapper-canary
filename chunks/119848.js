n.d(t, { Z: () => c }), n(314940);
var r = n(255367);
n(73800);
var i = n(278074),
    s = n(219496),
    o = n(346585),
    l = n(363577),
    a = n(81259);
function c(e) {
    let { username: t, oneClickFlow: n = !1 } = e,
        c = (0, l.M)((0, o.R_)(t), !0, !1, n);
    if (null == c) return null;
    let u = (0, i.EQ)(c.type)
        .with(s.K.RATE_LIMIT, () => 'info')
        .with(s.K.ERROR, () => 'error')
        .with(s.K.AVAILABLE, () => 'success')
        .with(s.K.INTERNAL_ERROR, () => null)
        .exhaustive();
    return null == u
        ? null
        : (0, r.jsx)(a.Z, {
              type: u,
              children: c.message
          });
}
