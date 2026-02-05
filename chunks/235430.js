"use strict";
n.d(t, { A: () => m });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(105330),
    o = n(961350),
    l = n(559908),
    u = n(620141),
    c = n(224964),
    d = n(31408),
    _ = n(851110);
let f = 16,
    p = 0.05;
function h(e) {
    let { editorHeight: t, textValue: n, channelId: r } = e,
        u = i.useRef(n),
        d = (0, s.l)({ editorHeight: t }),
        h = (0, c.A)(),
        m = (0, a.bG)([l.Ay, o.default], () => l.Ay.isComboing(o.default.getId(), r)),
        g = d?.left ?? 0,
        E = (d?.top ?? 0) - f,
        A = 0 === n.length,
        I = i.useMemo(() => Math.random() < p, [A]);
    return (
        i.useEffect(() => {
            0 !== n.length && n !== u.current && m && (h.fire(g, E, I ? { sprite: _.dR } : null), (u.current = n));
        }, [n, m, g, E, I, h]),
        null
    );
}
function m(e) {
    return (0, r.jsx)(u.A, { confettiLocation: d.k.CHAT_INPUT, children: (0, r.jsx)(h, { ...e }) });
}
