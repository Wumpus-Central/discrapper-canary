n.d(t, { A: () => S });
var l = n(627968),
    r = n(64700),
    i = n(503698),
    o = n.n(i),
    a = n(17928),
    s = n(783791),
    u = n(957907),
    c = n(818085),
    E = n(375708),
    T = n(554177);
function S(e) {
    let { channel: t } = e,
        n = (0, u.A)(t),
        i = n?.id ?? null,
        S = (0, a.bG)([s.A], () => null != i && s.A.isThinking(i), [i]),
        _ = (0, a.bG)([s.A], () => (null != i ? s.A.getFinishedAt(i) : null), [i]),
        [p, d] = r.useState(() => (null != _ && Date.now() - _ >= 6e4 ? _ : null));
    r.useEffect(() => {
        if (S || null == _) return;
        let e = setTimeout(() => d(_), Math.max(0, 6e4 - (Date.now() - _)));
        return () => clearTimeout(e);
    }, [S, _]);
    let A = S ? "building" : null != _ && p !== _ ? "done" : "idle";
    return "idle" === A
        ? null
        : (0, l.jsx)("span", {
              role: "img",
              "aria-label": "building" === A ? E.intl.string(c.default.ui2IQ2) : E.intl.string(c.default.WxL0ot),
              className: o()(T.lU, { [T.jP]: "building" === A, [T.vv]: "done" === A }),
          });
}
