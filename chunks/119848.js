r.d(t, { Z: () => c }), r(627341);
var n = r(200651);
r(192379);
var i = r(278074),
    s = r(219496),
    o = r(346585),
    a = r(363577),
    l = r(81259);
function c(e) {
    let { username: t, oneClickFlow: r = !1 } = e,
        c = (0, a.M)((0, o.R_)(t), !0, !1, r);
    if (null == c) return null;
    let u = (0, i.EQ)(c.type)
        .with(s.K.RATE_LIMIT, () => 'info')
        .with(s.K.ERROR, () => 'error')
        .with(s.K.AVAILABLE, () => 'success')
        .with(s.K.INTERNAL_ERROR, () => null)
        .exhaustive();
    return null == u
        ? null
        : (0, n.jsx)(l.Z, {
              type: u,
              children: c.message
          });
}
