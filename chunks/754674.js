function n(e, t) {
    return e.position.order - t.position.order;
}
function i(e) {
    return [
        e
            .filter((e) => {
                let { position: t } = e;
                return 1 !== t.column;
            })
            .sort(n),
        e
            .filter((e) => {
                let { position: t } = e;
                return 1 === t.column;
            })
            .sort(n),
    ];
}
function a(e) {
    return e.flatMap((e, t) =>
        e.map((e, l) =>
            e.position.column === t && e.position.order === l ? e : { ...e, position: { column: t, order: l } },
        ),
    );
}
function r(e) {
    return a(i(e));
}
function s(e, t, l) {
    let n = i(e),
        r = n[+(l?.column === 1)],
        s = l?.index ?? r.length;
    return (r.splice(Math.max(0, Math.min(s, r.length)), 0, t), a(n));
}
function d(e, t, l, n) {
    let i =
            null == n
                ? e
                : e.filter((e) => {
                      let { id: t } = e;
                      return t !== n;
                  }),
        a = (
            null == n
                ? t
                : t.filter((e) => {
                      let { id: t } = e;
                      return t !== n;
                  })
        )[l];
    if (null == a) return i.length;
    let r = i.findIndex((e) => {
        let { id: t } = e;
        return t === a.id;
    });
    return -1 === r ? i.length : r;
}
function o(e, t, l, n) {
    let r = e.find((e) => {
        let { id: l } = e;
        return l === t;
    });
    if (null == r) return null;
    let s = i(e),
        d = [
            s[0].filter((e) => {
                let { id: l } = e;
                return l !== t;
            }),
            s[1].filter((e) => {
                let { id: l } = e;
                return l !== t;
            }),
        ],
        o = d[+(1 === l)];
    return (o.splice(Math.max(0, Math.min(n, o.length)), 0, r), a(d));
}
l.d(t, { Gm: () => o, O6: () => d, QD: () => s, Rl: () => i, W$: () => r });
