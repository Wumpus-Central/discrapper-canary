n.d(t, {
    Ay: () => d,
    bW: () => u,
}),
    n(65821),
    n(321073),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(735438),
    a = n.n(i),
    s = n(114212),
    o = n(652215),
    c = n(525853);

function u(e) {
    let { compact: t, messageGroups: n, groupRange: r, attachments: l, fontSize: i, groupSpacing: c } = e;
    if (l > n)
        throw Error("generateMessageSpecs: too many attachments relative to messageGroups: ".concat(n, ", ").concat(l));
    let u = i / o.hH7.FONT_SIZE_DEFAULT,
        d = t ? s.BP : s.B5,
        f = t ? s.Uj : s._G,
        p = 0,
        h = Array(n)
            .fill(null)
            .map(() => {
                let e = a().random(1, r);
                return (p += c * u), (p += d * u), (p += (e - 1) * f * u), e;
            }),
        b = h.map((e, t) => t),
        g = [];
    for (; g.length < l; ) {
        let e = {
            width: a().random(140, 400),
            height: a().random(100, 320),
        };
        g.push([b.splice(a().random(0, b.length - 1), 1)[0], e]), (p += e.height + s.VF * u);
    }
    return {
        messages: h,
        attachmentSpecs: g,
        totalHeight: p,
        groupSpacing: c,
    };
}

function d(e) {
    let { compact: t, messages: n, attachmentSpecs: i, totalHeight: a, groupSpacing: o } = e;
    return l.useMemo(() => {
        let e = Array(n.length).fill(void 0);
        for (let [t, n] of i) e[t] = n;
        return (0, r.jsx)("div", {
            className: c.i,
            style: {
                height: a,
            },
            children: n.map((n, l) =>
                (0, r.jsx)(
                    s.Ay,
                    {
                        groupSpacing: o,
                        compact: t,
                        messages: n,
                        attachmentSpecs: e[l],
                    },
                    l,
                ),
            ),
        });
    }, [t, n, i, a, o]);
}
