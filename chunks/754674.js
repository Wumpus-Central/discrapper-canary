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
function s(e) {
    return a(i(e));
}
function r(e, t, l) {
    let n = i(e),
        s = n[+(l?.column === 1)],
        r = l?.index ?? s.length;
    return (s.splice(Math.max(0, Math.min(r, s.length)), 0, t), a(n));
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
    let s = i.findIndex((e) => {
        let { id: t } = e;
        return t === a.id;
    });
    return -1 === s ? i.length : s;
}
function c(e, t, l, n) {
    let s = e.find((e) => {
        let { id: l } = e;
        return l === t;
    });
    if (null == s) return null;
    let r = i(e),
        d = [
            r[0].filter((e) => {
                let { id: l } = e;
                return l !== t;
            }),
            r[1].filter((e) => {
                let { id: l } = e;
                return l !== t;
            }),
        ],
        c = d[+(1 === l)];
    return (c.splice(Math.max(0, Math.min(n, c.length)), 0, s), a(d));
}
l.d(t, { Gm: () => c, O6: () => d, QD: () => r, Rl: () => i, W$: () => s });
