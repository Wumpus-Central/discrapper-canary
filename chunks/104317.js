n.d(t, { Ay: () => x, b9: () => g, w: () => h });
var l = n(477900);
n(582128);
var a = n(683063),
    r = n(56681),
    i = n(615839),
    s = n(115982),
    u = n(566424),
    d = n(16634),
    o = n(308665),
    c = n(248675),
    f = n(660183),
    m = n(59678);
function h(e) {
    let t = (0, s.Jf)(e, !0),
        n = (0, s.SY)(t.steps);
    return null != n ? (0, s.WQ)(n) : (t.tasks.find((e) => null != e.task.groupLabel)?.task.groupLabel ?? null);
}
function g(e) {
    return h(e) ?? f.intl.string(c.default.t8skVB);
}
function x(e) {
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
        b = (0, r.Q7)(f.intl.string(c.default.uk6jhJ), v),
        _ = g ? void 0 : x,
        y = null != _ ? (0, i.nY)(_) : null != j ? (0, s.WQ)(j) : (h ?? f.intl.string(c.default.t8skVB)),
        S = n.length > 1 || n.some((e) => e.detail.length > 0 || e.screenshots.length > 0 || e.attachments.length > 0);
    return (0, l.jsx)(u.A, {
        glyph: (0, l.jsx)(a.u, {
            asset: (0, l.jsx)(o.Ay, { size: 32 }),
            assetSize: 32,
            title: b.title,
            body: b.body,
            position: "left",
            children: (0, l.jsx)("span", { className: m.nC, children: (0, l.jsx)(o.Ay, {}) }),
        }),
        line: y,
        anchor: !0,
        live: g,
        settled: null != _ || (!g && k),
        connectsDown: p,
        detail: S
            ? (0, l.jsx)("ol", {
                  className: m.dO,
                  children: n.map((e) =>
                      (0, l.jsx)(d.A, { projectId: t, node: e, presentation: "detail", active: g && e === j }, e.id),
                  ),
              })
            : void 0,
    });
}
