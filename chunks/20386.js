n.d(e, { A: () => g, T: () => b });
var t = n(627968),
    i = n(64700),
    u = n(503698),
    a = n.n(u),
    s = n(17928),
    r = n(783791),
    d = n(957907),
    o = n(818085),
    c = n(375708),
    p = n(554177);
function b(l) {
    let { className: e } = l;
    return (0, t.jsx)("span", {
        role: "img",
        "aria-label": c.intl.string(o.default.ui2IQ2),
        className: a()(p.lU, p.jP, e),
    });
}
function g(l) {
    let { channel: e } = l,
        n = (0, d.A)(e),
        u = n?.id ?? null,
        g = (0, s.bG)([r.A], () => null != u && r.A.isThinking(u), [u]),
        h = (0, s.bG)([r.A], () => (null != u ? r.A.getFinishedAt(u) : null), [u]),
        [f, m] = i.useState(() => (null != h && Date.now() - h >= 6e4 ? h : null));
    i.useEffect(() => {
        if (g || null == h) return;
        let l = setTimeout(() => m(h), Math.max(0, 6e4 - (Date.now() - h)));
        return () => clearTimeout(l);
    }, [g, h]);
    let A = g ? "building" : null != h && f !== h ? "done" : "idle";
    return "idle" === A
        ? null
        : "building" === A
          ? (0, t.jsx)(b, {})
          : (0, t.jsx)("span", {
                role: "img",
                "aria-label": c.intl.string(o.default.WxL0ot),
                className: a()(p.lU, p.vv),
            });
}
