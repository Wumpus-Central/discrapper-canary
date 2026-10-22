n.d(t, { Ay: () => g, b9: () => x, w: () => h });
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
    m = n(105292),
    f = n(59678);
function h(e) {
    let t = (0, s.Jf)(e, !0),
        n = (0, s.SY)(t.steps);
    return null != n ? (0, s.WQ)(n) : (t.tasks.find((e) => null != e.task.groupLabel)?.task.groupLabel ?? null);
}
function x(e) {
    return h(e) ?? m.intl.string(c.default.t8skVB);
}
function g(e) {
    let {
            projectId: t,
            steps: n,
            fallbackLabel: h,
            live: x,
            durationMs: g,
            connectsDown: p = !1,
            closed: j = !1,
            tier: k,
        } = e,
        v = (0, s.SY)(n),
        b = (0, r.Q7)(m.intl.string(c.default.uk6jhJ), k),
        _ = x ? void 0 : g,
        A = null != _ ? (0, i.nY)(_) : null != v ? (0, s.WQ)(v) : (h ?? m.intl.string(c.default.t8skVB)),
        y = n.length > 1 || n.some((e) => e.detail.length > 0 || e.screenshots.length > 0 || e.attachments.length > 0);
    return (0, l.jsx)(u.A, {
        glyph: (0, l.jsx)(a.u, {
            asset: (0, l.jsx)(o.Ay, { size: 32 }),
            assetSize: 32,
            title: b.title,
            body: b.body,
            position: "left",
            children: (0, l.jsx)("span", { className: f.nC, children: (0, l.jsx)(o.Ay, {}) }),
        }),
        line: A,
        anchor: !0,
        live: x,
        settled: null != _ || (!x && j),
        connectsDown: p,
        detail: y
            ? (0, l.jsx)("ol", {
                  className: f.dO,
                  children: n.map((e) =>
                      (0, l.jsx)(d.A, { projectId: t, node: e, presentation: "detail", active: x && e === v }, e.id),
                  ),
              })
            : void 0,
    });
}
