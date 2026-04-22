"use strict";
n.d(t, { A: () => o });
var a = n(627968),
    i = n(64700),
    r = n(512950),
    l = n(46054),
    s = n(861662),
    d = n(127803);
let o = (e) => {
    let {
            node: { info: t },
        } = e,
        n = i.useMemo(() => l.A.reactParserFor({ ...l.A.defaultRules, link: s.B }), []);
    return null == t ? null : (0, a.jsx)(r.p, { className: d.e, messageType: r.Y.INFO, children: n(t) });
};
