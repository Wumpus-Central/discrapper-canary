l.d(t, { A: () => f, b: () => m });
var n = l(477900);
l(582128);
var a = l(76275),
    s = l(903586),
    i = l(191521),
    r = l(196582),
    u = l(883455),
    d = l(759967),
    o = l(375708),
    c = l(13699);
function m(e) {
    let t = (0, s.GO)(e, { turnActive: !0 }),
        l = (0, s.SY)(t.steps);
    return null != l
        ? (0, s.WQ)(l)
        : (t.tasks.find((e) => null != e.task.groupLabel)?.task.groupLabel ?? o.intl.string(d.default.nv6pUM));
}
function f(e) {
    let { projectId: t, steps: l, fallbackLabel: m, live: f, durationMs: h, connectsDown: x = !1, closed: p = !1 } = e,
        g = (0, s.SY)(l),
        k = f ? void 0 : h,
        v = null != k ? (0, a.n)(k) : null != g ? (0, s.WQ)(g) : (m ?? o.intl.string(d.default.nv6pUM)),
        j = l.length > 1 || l.some((e) => e.detail.length > 0 || e.screenshots.length > 0 || e.attachments.length > 0);
    return (0, n.jsx)(r.A, {
        glyph: (0, n.jsx)(i.A, {}),
        line: v,
        anchor: !0,
        live: f,
        settled: null != k || (!f && p),
        connectsDown: x,
        detail: j
            ? (0, n.jsx)("ol", {
                  className: c.dO,
                  children: l.map((e) =>
                      (0, n.jsx)(u.A, { projectId: t, node: e, presentation: "detail", active: f && e === g }, e.id),
                  ),
              })
            : void 0,
    });
}
