n.d(t, { Ay: () => m, b9: () => c });
var l = n(477900);
n(582128);
var a = n(903586),
    i = n(191521),
    s = n(196582),
    r = n(883455),
    d = n(759967),
    u = n(375708),
    o = n(13699);
function c(e) {
    let t = (0, a.GO)(e, { turnActive: !0 }),
        n = (0, a.SY)(t.steps);
    return null != n
        ? (0, a.WQ)(n)
        : (t.tasks.find((e) => null != e.task.groupLabel)?.task.groupLabel ?? u.intl.string(d.default.nv6pUM));
}
function m(e) {
    let { projectId: t, steps: n, fallbackLabel: c, live: m, durationMs: h, connectsDown: f = !1, closed: g = !1 } = e,
        x = (0, a.SY)(n),
        p = m ? void 0 : h,
        k =
            null != p
                ? (function (e) {
                      let t = Math.max(1, Math.round(e / 1e3));
                      if (t < 60) return u.intl.formatToPlainString(d.default["49T8W0"], { count: t });
                      let n = Math.round(t / 60);
                      return n < 60
                          ? u.intl.formatToPlainString(d.default.NkZO2t, { count: n })
                          : u.intl.formatToPlainString(d.default["2qYUUZ"], {
                                hours: Math.floor(n / 60),
                                minutes: n % 60,
                            });
                  })(p)
                : null != x
                  ? (0, a.WQ)(x)
                  : (c ?? u.intl.string(d.default.nv6pUM)),
        v = n.length > 1 || n.some((e) => e.detail.length > 0 || e.screenshots.length > 0 || e.attachments.length > 0);
    return (0, l.jsx)(s.A, {
        glyph: (0, l.jsx)(i.A, {}),
        line: k,
        anchor: !0,
        live: m,
        settled: null != p || (!m && g),
        connectsDown: f,
        detail: v
            ? (0, l.jsx)("ol", {
                  className: o.dO,
                  children: n.map((e) =>
                      (0, l.jsx)(r.A, { projectId: t, node: e, presentation: "detail", active: m && e === x }, e.id),
                  ),
              })
            : void 0,
    });
}
