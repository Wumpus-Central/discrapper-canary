var l = n(477900);
n(582128);
var a = n(683063),
    r = n(56681),
    s = n(615839),
    i = n(115982),
    u = n(566424),
    o = n(101147),
    d = n(308665),
    c = n(191850),
    m = n(792996),
    f = n(59678);
function h(e) {
    let t = (0, i.Jf)(e, !0),
        n = (0, i.SY)(t.steps);
    return null != n ? (0, i.WQ)(n) : (t.tasks.find((e) => null != e.task.groupLabel)?.task.groupLabel ?? null);
}
n.d(
    t,
    {},
    {
        Ay: function (e) {
            let {
                    projectId: t,
                    steps: n,
                    fallbackLabel: h,
                    live: k,
                    durationMs: p,
                    connectsDown: x = !1,
                    closed: g = !1,
                    tier: j,
                } = e,
                _ = (0, i.SY)(n),
                b = (0, r.Q7)(m.intl.string(c.default.uk6jhJ), j),
                v = k ? void 0 : p,
                y = null != v ? (0, s.nY)(v) : null != _ ? (0, i.WQ)(_) : (h ?? m.intl.string(c.default.t8skVB)),
                w =
                    n.length > 1 ||
                    n.some((e) => e.detail.length > 0 || e.screenshots.length > 0 || e.attachments.length > 0);
            return (0, l.jsx)(u.A, {
                glyph: (0, l.jsx)(a.u, {
                    asset: (0, l.jsx)(d.A, { size: 32 }),
                    assetSize: 32,
                    title: b.title,
                    body: b.body,
                    position: "left",
                    children: (0, l.jsx)("span", { className: f.nC, children: (0, l.jsx)(d.A, {}) }),
                }),
                line: y,
                anchor: !0,
                live: k,
                settled: null != v || (!k && g),
                connectsDown: x,
                detail: w
                    ? (0, l.jsx)("ol", {
                          className: f.dO,
                          children: n.map((e) =>
                              (0, l.jsx)(
                                  o.A,
                                  { projectId: t, node: e, presentation: "detail", active: k && e === _ },
                                  e.id,
                              ),
                          ),
                      })
                    : void 0,
            });
        },
        b9: function (e) {
            return h(e) ?? m.intl.string(c.default.t8skVB);
        },
        w: h,
    },
);
