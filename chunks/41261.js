n.d(t, { A: () => g });
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    a = n(311907),
    s = n(397927),
    o = n(528767),
    c = n(790381),
    u = n(266080),
    d = n(30529),
    p = n(544105),
    f = n(985018),
    h = n(839549);
function A(e) {
    let { platform: t } = e;
    return t === p.f$.XBOX
        ? (0, r.jsx)(u.A, { className: h.Kk })
        : t === p.f$.PLAYSTATION
          ? (0, r.jsx)(c.A, { className: h.Kk })
          : null;
}
function g(e) {
    let { voiceState: t, awaitingRemoteSessionInfo: n } = e,
        i = null != n ? (0, d.X)(n.type) : null,
        c = (0, a.bG)([o.A], () => {
            var e, n;
            return null == (n = o.A.getSessionById(null != (e = null == t ? void 0 : t.sessionId) ? e : ""))
                ? void 0
                : n.clientInfo.os;
        }),
        u = null != i ? i : c;
    if (null == u || !p.hv.has(u)) return null;
    let g = null != n,
        m = g
            ? u === p.f$.XBOX
                ? f.intl.string(f.t.UjA4HX)
                : f.intl.string(f.t.QCw1oW)
            : u === p.f$.XBOX
              ? f.intl.format(f.t["ynEs/Y"], {})
              : f.intl.format(f.t.TZ17Bg, {});
    return (0, r.jsxs)("div", {
        className: l()(h.zr, g ? h.jI : h.aW),
        children: [
            (0, r.jsx)(A, { platform: u }),
            (0, r.jsx)(s.Text, {
                color: g ? "text-strong" : "always-white",
                variant: "text-xs/medium",
                children: m,
            }),
        ],
    });
}
