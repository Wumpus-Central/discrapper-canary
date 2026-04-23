n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    l = n(311907),
    s = n(834730),
    o = n(528767),
    d = n(790381),
    u = n(266080),
    c = n(30529),
    A = n(544105),
    h = n(985018),
    _ = n(674586);
function E(e) {
    let { platform: t } = e;
    return t === A.f$.XBOX
        ? (0, i.jsx)(u.A, { className: _.Kk })
        : t === A.f$.PLAYSTATION
          ? (0, i.jsx)(d.A, { className: _.Kk })
          : null;
}
function p(e) {
    let { voiceState: t, awaitingRemoteSessionInfo: n } = e,
        r = null != n ? (0, c.X)(n.type) : null,
        d = (0, l.bG)([o.A], () => o.A.getSessionById(t?.sessionId ?? "")?.clientInfo.os),
        u = r ?? d;
    if (null == u || !A.hv.has(u)) return null;
    let p = null != n,
        m = p
            ? u === A.f$.XBOX
                ? h.intl.string(h.t.UjA4HX)
                : h.intl.string(h.t.QCw1oW)
            : u === A.f$.XBOX
              ? h.intl.format(h.t["ynEs/Y"], {})
              : h.intl.format(h.t.TZ17Bg, {});
    return (0, i.jsxs)("div", {
        className: a()(_.zr, p ? _.jI : _.aW),
        children: [
            (0, i.jsx)(E, { platform: u }),
            (0, i.jsx)(s.E, { color: p ? "text-strong" : "always-white", variant: "text-xs/medium", children: m }),
        ],
    });
}
