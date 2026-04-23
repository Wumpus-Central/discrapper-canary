"use strict";
n.d(t, { A: () => p });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(105330),
    o = n(961350),
    l = n(559908),
    u = n(620141),
    c = n(224964),
    d = n(31408),
    _ = n(851110);
function f(e) {
    let { editorHeight: t, textValue: n, channelId: r } = e,
        u = i.useRef(n),
        d = (0, a.l)({ editorHeight: t }),
        f = (0, c.A)(),
        p = (0, s.bG)([l.Ay, o.default], () => l.Ay.isComboing(o.default.getId(), r)),
        h = d?.left ?? 0,
        E = (d?.top ?? 0) - 16,
        m = 0 === n.length,
        g = i.useMemo(() => 0.05 > Math.random(), [m]);
    return (
        i.useEffect(() => {
            0 !== n.length && n !== u.current && p && (f.fire(h, E, g ? { sprite: _.dR } : null), (u.current = n));
        }, [n, p, h, E, g, f]),
        null
    );
}
function p(e) {
    return (0, r.jsx)(u.A, { confettiLocation: d.k.CHAT_INPUT, children: (0, r.jsx)(f, { ...e }) });
}
