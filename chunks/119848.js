(r.d(t, { Z: () => c }), r(314940));
var n = r(255367);
r(73800);
var i = r(278074),
    a = r(219496),
    o = r(346585),
    s = r(363577),
    l = r(81259);
function c(e) {
    let { username: t, oneClickFlow: r = !1 } = e,
        c = (0, s.M)((0, o.R_)(t), !0, !1, r);
    if (null == c) return null;
    let u = (0, i.EQ)(c.type)
        .with(a.K.RATE_LIMIT, () => 'info')
        .with(a.K.ERROR, () => 'error')
        .with(a.K.AVAILABLE, () => 'success')
        .with(a.K.INTERNAL_ERROR, () => null)
        .exhaustive();
    return null == u
        ? null
        : (0, n.jsx)(l.Z, {
              type: u,
              children: c.message
          });
}
