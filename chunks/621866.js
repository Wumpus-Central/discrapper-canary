i.d(t, { A: () => d }), i(801541);
var n = i(627968);
i(64700);
var s = i(889137),
    a = i(963334),
    r = i(871210),
    l = i(565478),
    o = i(885168);
function d(e) {
    let { username: t, oneClickFlow: i = !1 } = e,
        d = (0, l.W)((0, r.h_)(t), !0, !1, i);
    if (null == d) return null;
    let u = (0, s.YW)(d.type)
        .with(a.q.RATE_LIMIT, () => "info")
        .with(a.q.ERROR, () => "error")
        .with(a.q.AVAILABLE, () => "success")
        .with(a.q.INTERNAL_ERROR, () => null)
        .exhaustive();
    return null == u ? null : (0, n.jsx)(o.A, { type: u, children: d.message });
}
