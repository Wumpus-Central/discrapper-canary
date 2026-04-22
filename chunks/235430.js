"use strict";
n.d(t, { A: () => p });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    r = n(105330),
    a = n(961350),
    o = n(559908),
    c = n(620141),
    u = n(224964),
    d = n(31408),
    h = n(851110);
function m(e) {
    let { editorHeight: t, textValue: n, channelId: i } = e,
        c = l.useRef(n),
        d = (0, r.l)({ editorHeight: t }),
        m = (0, u.A)(),
        p = (0, s.bG)([o.Ay, a.default], () => o.Ay.isComboing(a.default.getId(), i)),
        f = d?.left ?? 0,
        g = (d?.top ?? 0) - 16,
        _ = 0 === n.length,
        x = l.useMemo(() => 0.05 > Math.random(), [_]);
    return (
        l.useEffect(() => {
            0 !== n.length && n !== c.current && p && (m.fire(f, g, x ? { sprite: h.dR } : null), (c.current = n));
        }, [n, p, f, g, x, m]),
        null
    );
}
function p(e) {
    return (0, i.jsx)(c.A, { confettiLocation: d.k.CHAT_INPUT, children: (0, i.jsx)(m, { ...e }) });
}
