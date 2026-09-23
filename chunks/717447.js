n.d(t, { A: () => x, b: () => f });
var l = n(477900);
n(582128);
var a = n(683063),
    s = n(76275),
    i = n(313265),
    r = n(903586),
    u = n(191521),
    d = n(196582),
    o = n(883455),
    c = n(759967),
    m = n(375708),
    h = n(13699);
function f(e) {
    let t = (0, r.GO)(e, { turnActive: !0 }),
        n = (0, r.SY)(t.steps);
    return null != n
        ? (0, r.WQ)(n)
        : (t.tasks.find((e) => null != e.task.groupLabel)?.task.groupLabel ?? m.intl.string(c.default.nv6pUM));
}
function x(e) {
    let {
            projectId: t,
            steps: n,
            fallbackLabel: f,
            live: x,
            durationMs: p,
            connectsDown: g = !1,
            closed: k = !1,
            tier: v,
        } = e,
        b = (0, r.SY)(n),
        j = (0, i.Q7)(m.intl.string(c.default.ZnvpQR), v),
        _ = x ? void 0 : p,
        y = null != _ ? (0, s.n)(_) : null != b ? (0, r.WQ)(b) : (f ?? m.intl.string(c.default.nv6pUM)),
        w = n.length > 1 || n.some((e) => e.detail.length > 0 || e.screenshots.length > 0 || e.attachments.length > 0);
    return (0, l.jsx)(d.A, {
        glyph: (0, l.jsx)(a.u, {
            asset: (0, l.jsx)(u.A, { size: 32 }),
            assetSize: 32,
            title: j.title,
            body: j.body,
            position: "left",
            children: (0, l.jsx)("span", { className: h.nC, children: (0, l.jsx)(u.A, {}) }),
        }),
        line: y,
        anchor: !0,
        live: x,
        settled: null != _ || (!x && k),
        connectsDown: g,
        detail: w
            ? (0, l.jsx)("ol", {
                  className: h.dO,
                  children: n.map((e) =>
                      (0, l.jsx)(o.A, { projectId: t, node: e, presentation: "detail", active: x && e === b }, e.id),
                  ),
              })
            : void 0,
    });
}
