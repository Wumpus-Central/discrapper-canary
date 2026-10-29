n.d(t, { Ay: () => h, b9: () => g, w: () => p });
var l = n(477900);
n(582128);
var a = n(683063),
    i = n(56681),
    r = n(615839),
    s = n(115982),
    o = n(566424),
    u = n(16634),
    d = n(308665),
    c = n(248675),
    f = n(105292),
    m = n(59678);
function p(e) {
    let t = (0, s.Jf)(e, !0),
        n = (0, s.SY)(t.steps);
    return null != n ? (0, s.WQ)(n) : (t.tasks.find((e) => null != e.task.groupLabel)?.task.groupLabel ?? null);
}
function g(e) {
    return p(e) ?? f.intl.string(c.default.t8skVB);
}
function h(e) {
    let {
            projectId: t,
            steps: n,
            fallbackLabel: p,
            live: g,
            durationMs: h,
            connectsDown: x = !1,
            closed: j = !1,
            tier: k,
        } = e,
        v = (0, s.SY)(n),
        b = (0, i.Q7)(f.intl.string(c.default.uk6jhJ), k),
        y = g ? void 0 : h,
        _ = null != y ? (0, r.nY)(y) : null != v ? (0, s.WQ)(v) : (p ?? f.intl.string(c.default.t8skVB)),
        A = n.length > 1 || n.some((e) => e.detail.length > 0 || e.screenshots.length > 0 || e.attachments.length > 0);
    return (0, l.jsx)(o.A, {
        glyph: (0, l.jsx)(a.u, {
            asset: (0, l.jsx)(d.A, { size: 32 }),
            assetSize: 32,
            title: b.title,
            body: b.body,
            position: "left",
            children: (0, l.jsx)("span", { className: m.nC, children: (0, l.jsx)(d.A, {}) }),
        }),
        line: _,
        anchor: !0,
        live: g,
        settled: null != y || (!g && j),
        connectsDown: x,
        detail: A
            ? (0, l.jsx)("ol", {
                  className: m.dO,
                  children: n.map((e) =>
                      (0, l.jsx)(u.A, { projectId: t, node: e, presentation: "detail", active: g && e === v }, e.id),
                  ),
              })
            : void 0,
    });
}
