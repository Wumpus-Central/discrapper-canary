function l(e, t) {
    return e.position.order - t.position.order;
}
function i(e) {
    return [
        e
            .filter((e) => {
                let { position: t } = e;
                return 1 !== t.column;
            })
            .sort(l),
        e
            .filter((e) => {
                let { position: t } = e;
                return 1 === t.column;
            })
            .sort(l),
    ];
}
function a(e) {
    return e.flatMap((e, t) =>
        e.map((e, n) =>
            e.position.column === t && e.position.order === n ? e : { ...e, position: { column: t, order: n } },
        ),
    );
}
function s(e) {
    return a(i(e));
}
function r(e, t, n) {
    let l = i(e),
        s = l[+(n?.column === 1)],
        r = n?.index ?? s.length;
    return (s.splice(Math.max(0, Math.min(r, s.length)), 0, t), a(l));
}
function d(e, t, n, l) {
    let i =
            null == l
                ? e
                : e.filter((e) => {
                      let { id: t } = e;
                      return t !== l;
                  }),
        a = (
            null == l
                ? t
                : t.filter((e) => {
                      let { id: t } = e;
                      return t !== l;
                  })
        )[n];
    if (null == a) return i.length;
    let s = i.findIndex((e) => {
        let { id: t } = e;
        return t === a.id;
    });
    return -1 === s ? i.length : s;
}
function c(e, t, n, l) {
    let s = e.find((e) => {
        let { id: n } = e;
        return n === t;
    });
    if (null == s) return null;
    let r = i(e),
        d = [
            r[0].filter((e) => {
                let { id: n } = e;
                return n !== t;
            }),
            r[1].filter((e) => {
                let { id: n } = e;
                return n !== t;
            }),
        ],
        c = d[+(1 === n)];
    return (c.splice(Math.max(0, Math.min(l, c.length)), 0, s), a(d));
}
n.d(t, { Gm: () => c, O6: () => d, QD: () => r, Rl: () => i, W$: () => s });
