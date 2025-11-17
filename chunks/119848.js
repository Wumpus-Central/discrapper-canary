n.d(t, { Z: () => c }), n(314940);
var r = n(54381);
n(473749);
var i = n(278074),
    a = n(219496),
    o = n(346585),
    s = n(363577),
    l = n(81259);
function c(e) {
    let { username: t, oneClickFlow: n = !1 } = e,
        c = (0, s.M)((0, o.R_)(t), !0, !1, n);
    if (null == c) return null;
    let u = (0, i.EQ)(c.type)
        .with(a.K.RATE_LIMIT, () => "info")
        .with(a.K.ERROR, () => "error")
        .with(a.K.AVAILABLE, () => "success")
        .with(a.K.INTERNAL_ERROR, () => null)
        .exhaustive();
    return null == u
        ? null
        : (0, r.jsx)(l.Z, {
              type: u,
              children: c.message,
          });
}
