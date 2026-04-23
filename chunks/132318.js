n.d(t, { A: () => o });
var l = n(627968),
    a = n(64700),
    i = n(512950),
    r = n(46054),
    s = n(861662),
    d = n(21883);
let o = (e) => {
    let {
            node: { info: t },
        } = e,
        n = a.useMemo(() => r.A.reactParserFor({ ...r.A.defaultRules, link: s.B }), []);
    return null == t ? null : (0, l.jsx)(i.p, { className: d.e, messageType: i.Y.INFO, children: n(t) });
};
