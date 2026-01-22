r.d(t, { A: () => c }), r(801541);
var n = r(627968);
r(64700);
var i = r(889137),
    s = r(963334),
    a = r(871210),
    o = r(565478),
    l = r(885168);
function c(e) {
    let { username: t, oneClickFlow: r = !1 } = e,
        c = (0, o.W)((0, a.h_)(t), !0, !1, r);
    if (null == c) return null;
    let u = (0, i.YW)(c.type)
        .with(s.q.RATE_LIMIT, () => "info")
        .with(s.q.ERROR, () => "error")
        .with(s.q.AVAILABLE, () => "success")
        .with(s.q.INTERNAL_ERROR, () => null)
        .exhaustive();
    return null == u
        ? null
        : (0, n.jsx)(l.A, {
              type: u,
              children: c.message,
          });
}
