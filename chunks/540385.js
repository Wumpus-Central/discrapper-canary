n.d(t, { Ay: () => u, bW: () => d }), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(735438),
    s = n.n(a),
    r = n(114212),
    o = n(652215),
    c = n(615170);
function d(e) {
    let { compact: t, messageGroups: n, groupRange: i, attachments: l, fontSize: a, groupSpacing: c } = e;
    if (l > n) throw Error(`generateMessageSpecs: too many attachments relative to messageGroups: ${n}, ${l}`);
    let d = a / o.hH7.FONT_SIZE_DEFAULT,
        u = t ? r.BP : r.B5,
        h = t ? r.Uj : r._G,
        m = 0,
        A = Array(n)
            .fill(null)
            .map(() => {
                let e = s().random(1, i);
                return (m += c * d), (m += u * d), (m += (e - 1) * h * d), e;
            }),
        g = A.map((e, t) => t),
        _ = [];
    for (; _.length < l; ) {
        let e = { width: s().random(140, 400), height: s().random(100, 320) };
        _.push([g.splice(s().random(0, g.length - 1), 1)[0], e]), (m += e.height + r.VF * d);
    }
    return { messages: A, attachmentSpecs: _, totalHeight: m, groupSpacing: c };
}
function u(e) {
    let { compact: t, messages: n, attachmentSpecs: a, totalHeight: s, groupSpacing: o } = e;
    return l.useMemo(() => {
        let e = Array(n.length).fill(void 0);
        for (let [t, n] of a) e[t] = n;
        return (0, i.jsx)("div", {
            className: c.i,
            style: { height: s },
            children: n.map((n, l) =>
                (0, i.jsx)(r.Ay, { groupSpacing: o, compact: t, messages: n, attachmentSpecs: e[l] }, l),
            ),
        });
    }, [t, n, a, s, o]);
}
