n.d(t, { Ay: () => g, b9: () => p, w: () => m });
var l = n(477900);
n(582128);
var r = n(683063),
    a = n(56681),
    i = n(615839),
    s = n(115982),
    u = n(566424),
    o = n(16634),
    c = n(308665),
    d = n(809526),
    f = n(105292),
    h = n(59678);
function m(e) {
    let t = (0, s.Jf)(e, !0),
        n = (0, s.SY)(t.steps);
    return null != n ? (0, s.WQ)(n) : (t.tasks.find((e) => null != e.task.groupLabel)?.task.groupLabel ?? null);
}
function p(e) {
    return m(e) ?? f.intl.string(d.default.t8skVB);
}
function g(e) {
    let {
            projectId: t,
            steps: n,
            fallbackLabel: m,
            live: p,
            durationMs: g,
            connectsDown: x = !1,
            closed: y = !1,
            tier: k,
        } = e,
        b = (0, s.SY)(n),
        v = (0, a.Q7)(f.intl.string(d.default.uk6jhJ), k),
        j = p ? void 0 : g,
        w = null != j ? (0, i.nY)(j) : null != b ? (0, s.WQ)(b) : (m ?? f.intl.string(d.default.t8skVB)),
        _ = n.length > 1 || n.some((e) => e.detail.length > 0 || e.screenshots.length > 0 || e.attachments.length > 0);
    return (0, l.jsx)(u.A, {
        glyph: (0, l.jsx)(r.u, {
            asset: (0, l.jsx)(c.A, { size: 32 }),
            assetSize: 32,
            title: v.title,
            body: v.body,
            position: "left",
            children: (0, l.jsx)("span", { className: h.nC, children: (0, l.jsx)(c.A, {}) }),
        }),
        line: w,
        anchor: !0,
        live: p,
        settled: null != j || (!p && y),
        connectsDown: x,
        detail: _
            ? (0, l.jsx)("ol", {
                  className: h.dO,
                  children: n.map((e) =>
                      (0, l.jsx)(o.A, { projectId: t, node: e, presentation: "detail", active: p && e === b }, e.id),
                  ),
              })
            : void 0,
    });
}
