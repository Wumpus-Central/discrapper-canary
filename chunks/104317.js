n.d(t, { Ay: () => p, b9: () => g, w: () => h });
var l = n(477900);
n(582128);
var a = n(683063),
    i = n(56681),
    r = n(615839),
    s = n(115982),
    o = n(566424),
    u = n(16634),
    d = n(308665),
    c = n(261425),
    f = n(105292),
    m = n(59678);
function h(e) {
    let t = (0, s.Jf)(e, !0),
        n = (0, s.SY)(t.steps);
    return null != n ? (0, s.WQ)(n) : (t.tasks.find((e) => null != e.task.groupLabel)?.task.groupLabel ?? null);
}
function g(e) {
    return h(e) ?? f.intl.string(c.default.t8skVB);
}
function p(e) {
    let {
            projectId: t,
            steps: n,
            fallbackLabel: h,
            live: g,
            durationMs: p,
            connectsDown: x = !1,
            closed: k = !1,
            tier: b,
        } = e,
        v = (0, s.SY)(n),
        j = (0, i.Q7)(f.intl.string(c.default.uk6jhJ), b),
        y = g ? void 0 : p,
        w = null != y ? (0, r.nY)(y) : null != v ? (0, s.WQ)(v) : (h ?? f.intl.string(c.default.t8skVB)),
        _ = n.length > 1 || n.some((e) => e.detail.length > 0 || e.screenshots.length > 0 || e.attachments.length > 0);
    return (0, l.jsx)(o.A, {
        glyph: (0, l.jsx)(a.u, {
            asset: (0, l.jsx)(d.Ay, { size: 32 }),
            assetSize: 32,
            title: j.title,
            body: j.body,
            position: "left",
            children: (0, l.jsx)("span", { className: m.nC, children: (0, l.jsx)(d.Ay, {}) }),
        }),
        line: w,
        anchor: !0,
        live: g,
        settled: null != y || (!g && k),
        connectsDown: x,
        detail: _
            ? (0, l.jsx)("ol", {
                  className: m.dO,
                  children: n.map((e) =>
                      (0, l.jsx)(u.A, { projectId: t, node: e, presentation: "detail", active: g && e === v }, e.id),
                  ),
              })
            : void 0,
    });
}
