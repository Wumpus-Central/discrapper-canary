n.d(t, { A: () => x, b: () => h });
var l = n(477900);
n(582128);
var a = n(683063),
    i = n(485303),
    r = n(50277),
    s = n(177446),
    u = n(148992),
    d = n(169656),
    o = n(677649),
    c = n(248675),
    m = n(375708),
    f = n(508769);
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
            durationMs: p,
            connectsDown: g = !1,
            closed: k = !1,
            tier: v,
        } = e,
        j = (0, s.SY)(n),
        b = (0, r.Q7)(m.intl.string(c.default.ZnvpQR), v),
        _ = x ? void 0 : p,
        y = null != _ ? (0, i.nY)(_) : null != j ? (0, s.WQ)(j) : (h ?? m.intl.string(c.default.nv6pUM)),
        S = n.length > 1 || n.some((e) => e.detail.length > 0 || e.screenshots.length > 0 || e.attachments.length > 0);
    return (0, l.jsx)(u.A, {
        glyph: (0, l.jsx)(a.u, {
            asset: (0, l.jsx)(o.Ay, { size: 32 }),
            assetSize: 32,
            title: b.title,
            body: b.body,
            position: "left",
            children: (0, l.jsx)("span", { className: f.nC, children: (0, l.jsx)(o.Ay, {}) }),
        }),
        line: y,
        anchor: !0,
        live: x,
        settled: null != _ || (!x && k),
        connectsDown: g,
        detail: S
            ? (0, l.jsx)("ol", {
                  className: f.dO,
                  children: n.map((e) =>
                      (0, l.jsx)(d.A, { projectId: t, node: e, presentation: "detail", active: x && e === j }, e.id),
                  ),
              })
            : void 0,
    });
}
