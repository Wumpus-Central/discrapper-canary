n.d(t, { A: () => g });
var i = n(627968);
n(64700);
var a = n(503698),
    l = n.n(a),
    r = n(311907),
    s = n(397927),
    o = n(528767),
    d = n(790381),
    c = n(266080),
    u = n(30529),
    A = n(544105),
    h = n(985018),
    _ = n(839549);
function m(e) {
    let { platform: t } = e;
    return t === A.f$.XBOX
        ? (0, i.jsx)(c.A, { className: _.Kk })
        : t === A.f$.PLAYSTATION
          ? (0, i.jsx)(d.A, { className: _.Kk })
          : null;
}
function g(e) {
    let { voiceState: t, awaitingRemoteSessionInfo: n } = e,
        a = null != n ? (0, u.X)(n.type) : null,
        d = (0, r.bG)([o.A], () => o.A.getSessionById(t?.sessionId ?? "")?.clientInfo.os),
        c = a ?? d;
    if (null == c || !A.hv.has(c)) return null;
    let g = null != n,
        p = g
            ? c === A.f$.XBOX
                ? h.intl.string(h.t.UjA4HX)
                : h.intl.string(h.t.QCw1oW)
            : c === A.f$.XBOX
              ? h.intl.format(h.t["ynEs/Y"], {})
              : h.intl.format(h.t.TZ17Bg, {});
    return (0, i.jsxs)("div", {
        className: l()(_.zr, g ? _.jI : _.aW),
        children: [
            (0, i.jsx)(m, { platform: c }),
            (0, i.jsx)(s.Text, { color: g ? "text-strong" : "always-white", variant: "text-xs/medium", children: p }),
        ],
    });
}
