n.d(t, { Z: () => u }), n(627341);
var i = n(200651);
n(192379);
var s = n(278074),
    a = n(219496),
    l = n(346585),
    r = n(363577),
    o = n(81259);
function u(e) {
    let { username: t, oneClickFlow: n = !1 } = e,
        u = (0, r.M)((0, l.R_)(t), !0, !1, n);
    if (null == u) return null;
    let d = (0, s.EQ)(u.type)
        .with(a.K.RATE_LIMIT, () => 'info')
        .with(a.K.ERROR, () => 'error')
        .with(a.K.AVAILABLE, () => 'success')
        .with(a.K.INTERNAL_ERROR, () => null)
        .exhaustive();
    return null == d
        ? null
        : (0, i.jsx)(o.Z, {
              type: d,
              children: u.message
          });
}
