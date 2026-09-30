n.d(t, { A: () => x, b: () => h });
var l = n(477900);
n(582128);
var a = n(683063),
    i = n(76275),
    s = n(313265),
    r = n(903586),
    o = n(191521),
    u = n(196582),
    d = n(883455),
    c = n(759967),
    m = n(375708),
    f = n(13699);
function h(e) {
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
            fallbackLabel: h,
            live: x,
            durationMs: p,
            connectsDown: k = !1,
            closed: g = !1,
            tier: v,
        } = e,
        j = (0, r.SY)(n),
        b = (0, s.Q7)(m.intl.string(c.default.ZnvpQR), v),
        _ = x ? void 0 : p,
        S = null != _ ? (0, i.nY)(_) : null != j ? (0, r.WQ)(j) : (h ?? m.intl.string(c.default.nv6pUM)),
        N = n.length > 1 || n.some((e) => e.detail.length > 0 || e.screenshots.length > 0 || e.attachments.length > 0);
    return (0, l.jsx)(u.A, {
        glyph: (0, l.jsx)(a.u, {
            asset: (0, l.jsx)(o.A, { size: 32 }),
            assetSize: 32,
            title: b.title,
            body: b.body,
            position: "left",
            children: (0, l.jsx)("span", { className: f.nC, children: (0, l.jsx)(o.A, {}) }),
        }),
        line: S,
        anchor: !0,
        live: x,
        settled: null != _ || (!x && g),
        connectsDown: k,
        detail: N
            ? (0, l.jsx)("ol", {
                  className: f.dO,
                  children: n.map((e) =>
                      (0, l.jsx)(d.A, { projectId: t, node: e, presentation: "detail", active: x && e === j }, e.id),
                  ),
              })
            : void 0,
    });
}
