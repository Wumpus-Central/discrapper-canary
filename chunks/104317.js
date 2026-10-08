n.d(t, { A: () => g, b: () => h });
var l = n(477900);
n(582128);
var a = n(683063),
    i = n(56681),
    r = n(615839),
    s = n(115982),
    u = n(566424),
    o = n(16634),
    d = n(308665),
    c = n(261425),
    m = n(660183),
    f = n(59678);
function h(e) {
    let t = (0, s.GO)(e, { turnActive: !0 }),
        n = (0, s.SY)(t.steps);
    return null != n
        ? (0, s.WQ)(n)
        : (t.tasks.find((e) => null != e.task.groupLabel)?.task.groupLabel ?? m.intl.string(c.default.t8skVB));
}
function g(e) {
    let {
            projectId: t,
            steps: n,
            fallbackLabel: h,
            live: g,
            durationMs: x,
            connectsDown: p = !1,
            closed: k = !1,
            tier: v,
        } = e,
        j = (0, s.SY)(n),
        b = (0, i.Q7)(m.intl.string(c.default.uk6jhJ), v),
        _ = g ? void 0 : x,
        y = null != _ ? (0, r.nY)(_) : null != j ? (0, s.WQ)(j) : (h ?? m.intl.string(c.default.t8skVB)),
        S = n.length > 1 || n.some((e) => e.detail.length > 0 || e.screenshots.length > 0 || e.attachments.length > 0);
    return (0, l.jsx)(u.A, {
        glyph: (0, l.jsx)(a.u, {
            asset: (0, l.jsx)(d.Ay, { size: 32 }),
            assetSize: 32,
            title: b.title,
            body: b.body,
            position: "left",
            children: (0, l.jsx)("span", { className: f.nC, children: (0, l.jsx)(d.Ay, {}) }),
        }),
        line: y,
        anchor: !0,
        live: g,
        settled: null != _ || (!g && k),
        connectsDown: p,
        detail: S
            ? (0, l.jsx)("ol", {
                  className: f.dO,
                  children: n.map((e) =>
                      (0, l.jsx)(o.A, { projectId: t, node: e, presentation: "detail", active: g && e === j }, e.id),
                  ),
              })
            : void 0,
    });
}
