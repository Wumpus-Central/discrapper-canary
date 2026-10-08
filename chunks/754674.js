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
function s(e) {
    return e.flatMap((e, t) =>
        e.map((e, l) =>
            e.position.column === t && e.position.order === l ? e : { ...e, position: { column: t, order: l } },
        ),
    );
}
function a(e) {
    return s(i(e));
}
function r(e, t, l) {
    let n = i(e),
        a = n[+(l?.column === 1)],
        r = l?.index ?? a.length;
    return (a.splice(Math.max(0, Math.min(r, a.length)), 0, t), s(n));
}
function d(e, t, l, n) {
    let i =
            null == n
                ? e
                : e.filter((e) => {
                      let { id: t } = e;
                      return t !== n;
                  }),
        s = (
            null == n
                ? t
                : t.filter((e) => {
                      let { id: t } = e;
                      return t !== n;
                  })
        )[l];
    if (null == s) return i.length;
    let a = i.findIndex((e) => {
        let { id: t } = e;
        return t === s.id;
    });
    return -1 === a ? i.length : a;
}
function c(e, t, l, n) {
    let a = e.find((e) => {
        let { id: l } = e;
        return l === t;
    });
    if (null == a) return null;
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
    return (c.splice(Math.max(0, Math.min(n, c.length)), 0, a), s(d));
}
l.d(t, { Gm: () => c, O6: () => d, QD: () => r, Rl: () => i, W$: () => a });
