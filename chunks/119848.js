r.d(t, { Z: () => c }), r(314940);
var n = r(951288);
r(647438);
var i = r(278074),
    o = r(219496),
    a = r(346585),
    s = r(363577),
    l = r(81259);
function c(e) {
    let { username: t, oneClickFlow: r = !1 } = e,
        c = (0, s.M)((0, a.R_)(t), !0, !1, r);
    if (null == c) return null;
    let u = (0, i.EQ)(c.type)
        .with(o.K.RATE_LIMIT, () => "info")
        .with(o.K.ERROR, () => "error")
        .with(o.K.AVAILABLE, () => "success")
        .with(o.K.INTERNAL_ERROR, () => null)
        .exhaustive();
    return null == u
        ? null
        : (0, n.jsx)(l.Z, {
              type: u,
              children: c.message,
          });
}
