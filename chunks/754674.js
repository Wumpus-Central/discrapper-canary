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
function i(e) {
    return e.flatMap((e, t) =>
        e.map((e, n) =>
            e.position.column === t && e.position.order === n ? e : { ...e, position: { column: t, order: n } },
        ),
    );
}
function a(e) {
    return i(r(e));
}
function s(e, t, n) {
    let l = r(e),
        a = l[+(n?.column === 1)],
        s = n?.index ?? a.length;
    return (a.splice(Math.max(0, Math.min(s, a.length)), 0, t), i(l));
}
function o(e, t, n, l) {
    let r =
            null == l
                ? e
                : e.filter((e) => {
                      let { id: t } = e;
                      return t !== l;
                  }),
        i = (
            null == l
                ? t
                : t.filter((e) => {
                      let { id: t } = e;
                      return t !== l;
                  })
        )[n];
    if (null == i) return r.length;
    let a = r.findIndex((e) => {
        let { id: t } = e;
        return t === i.id;
    });
    return -1 === a ? r.length : a;
}
function u(e, t, n, l) {
    let a = e.find((e) => {
        let { id: n } = e;
        return n === t;
    });
    if (null == a) return null;
    let s = r(e),
        o = [
            s[0].filter((e) => {
                let { id: n } = e;
                return n !== t;
            }),
            s[1].filter((e) => {
                let { id: n } = e;
                return n !== t;
            }),
        ],
        u = o[+(1 === n)];
    return (u.splice(Math.max(0, Math.min(l, u.length)), 0, a), i(o));
}
n.d(t, { Gm: () => u, O6: () => o, QD: () => s, Rl: () => r, W$: () => a });
