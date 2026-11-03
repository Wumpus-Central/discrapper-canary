n.d(t, { Ay: () => p, b9: () => x, w: () => h });
var l = n(477900);
n(582128);
var a = n(683063),
    s = n(56681),
    r = n(615839),
    i = n(115982),
    u = n(566424),
    d = n(16634),
    o = n(308665),
    c = n(809526),
    m = n(105292),
    f = n(59678);
function h(e) {
    let t = (0, i.Jf)(e, !0),
        n = (0, i.SY)(t.steps);
    return null != n ? (0, i.WQ)(n) : (t.tasks.find((e) => null != e.task.groupLabel)?.task.groupLabel ?? null);
}
function x(e) {
    return h(e) ?? m.intl.string(c.default.t8skVB);
}
function p(e) {
    let {
            projectId: t,
            steps: n,
            fallbackLabel: h,
            live: x,
            durationMs: p,
            connectsDown: k = !1,
            closed: g = !1,
            tier: _,
        } = e,
        j = (0, i.SY)(n),
        v = (0, s.Q7)(m.intl.string(c.default.uk6jhJ), _),
        b = x ? void 0 : p,
        y = null != b ? (0, r.nY)(b) : null != j ? (0, i.WQ)(j) : (h ?? m.intl.string(c.default.t8skVB)),
        w = n.length > 1 || n.some((e) => e.detail.length > 0 || e.screenshots.length > 0 || e.attachments.length > 0);
    return (0, l.jsx)(u.A, {
        glyph: (0, l.jsx)(a.u, {
            asset: (0, l.jsx)(o.A, { size: 32 }),
            assetSize: 32,
            title: v.title,
            body: v.body,
            position: "left",
            children: (0, l.jsx)("span", { className: f.nC, children: (0, l.jsx)(o.A, {}) }),
        }),
        line: y,
        anchor: !0,
        live: x,
        settled: null != b || (!x && g),
        connectsDown: k,
        detail: w
            ? (0, l.jsx)("ol", {
                  className: f.dO,
                  children: n.map((e) =>
                      (0, l.jsx)(d.A, { projectId: t, node: e, presentation: "detail", active: x && e === j }, e.id),
                  ),
              })
            : void 0,
    });
}
