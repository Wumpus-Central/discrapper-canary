n.d(t, { A: () => x, b: () => h });
var l = n(477900);
n(582128);
var a = n(683063),
    i = n(76275),
    r = n(313265),
    s = n(903586),
    u = n(191521),
    o = n(196582),
    d = n(883455),
    c = n(50617),
    m = n(375708),
    f = n(13699);
function h(e) {
    let t = (0, s.GO)(e, { turnActive: !0 }),
        n = (0, s.SY)(t.steps);
    return null != n
        ? (0, s.WQ)(n)
        : (t.tasks.find((e) => null != e.task.groupLabel)?.task.groupLabel ?? m.intl.string(c.default.nv6pUM));
}
function x(e) {
    let {
            projectId: t,
            steps: n,
            fallbackLabel: h,
            live: x,
            durationMs: g,
            connectsDown: p = !1,
            closed: k = !1,
            tier: v,
        } = e,
        b = (0, s.SY)(n),
        j = (0, r.Q7)(m.intl.string(c.default.ZnvpQR), v),
        _ = x ? void 0 : g,
        y = null != _ ? (0, i.nY)(_) : null != b ? (0, s.WQ)(b) : (h ?? m.intl.string(c.default.nv6pUM)),
        S = n.length > 1 || n.some((e) => e.detail.length > 0 || e.screenshots.length > 0 || e.attachments.length > 0);
    return (0, l.jsx)(o.A, {
        glyph: (0, l.jsx)(a.u, {
            asset: (0, l.jsx)(u.A, { size: 32 }),
            assetSize: 32,
            title: j.title,
            body: j.body,
            position: "left",
            children: (0, l.jsx)("span", { className: f.nC, children: (0, l.jsx)(u.A, {}) }),
        }),
        line: y,
        anchor: !0,
        live: x,
        settled: null != _ || (!x && k),
        connectsDown: p,
        detail: S
            ? (0, l.jsx)("ol", {
                  className: f.dO,
                  children: n.map((e) =>
                      (0, l.jsx)(d.A, { projectId: t, node: e, presentation: "detail", active: x && e === b }, e.id),
                  ),
              })
            : void 0,
    });
}
