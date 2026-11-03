function l(e, t) {
    return e.position.order - t.position.order;
}
function r(e) {
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
function i(e) {
    return a(r(e));
}
function s(e, t, n) {
    let l = r(e),
        i = l[+(n?.column === 1)],
        s = n?.index ?? i.length;
    return (i.splice(Math.max(0, Math.min(s, i.length)), 0, t), a(l));
}
function u(e, t, n, l) {
    let r =
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
    if (null == a) return r.length;
    let i = r.findIndex((e) => {
        let { id: t } = e;
        return t === a.id;
    });
    return -1 === i ? r.length : i;
}
function o(e, t, n, l) {
    let i = e.find((e) => {
        let { id: n } = e;
        return n === t;
    });
    if (null == i) return null;
    let s = r(e),
        u = [
            s[0].filter((e) => {
                let { id: n } = e;
                return n !== t;
            }),
            s[1].filter((e) => {
                let { id: n } = e;
                return n !== t;
            }),
        ],
        o = u[+(1 === n)];
    return (o.splice(Math.max(0, Math.min(l, o.length)), 0, i), a(u));
}
n.d(t, { Gm: () => o, O6: () => u, QD: () => s, Rl: () => r, W$: () => i });
