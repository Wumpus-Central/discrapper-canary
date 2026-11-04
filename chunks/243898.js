function n(e, t) {
    if (t < 0) return;
    let r = 0;
    for (let n of e) {
        if (r === t) return n;
        r++;
    }
}
function i(e, t) {
    let r = [],
        n = t;
    for (; n?.parentKey != null;) (n = e.getItem(n.parentKey)) && r.unshift(n);
    return r;
}
r.d(
    t,
    {},
    {
        W: function (e) {
            let t;
            for (let r of e) t = r;
            return t;
        },
        cj: n,
        iQ: function (e, t) {
            return "function" == typeof t.getChildren ? t.getChildren(e.key) : e.childNodes;
        },
        o3: function (e, t, r) {
            if (t.parentKey === r.parentKey) return t.index - r.index;
            let n = [...i(e, t), t],
                o = [...i(e, r), r],
                a = n.slice(0, o.length).findIndex((e, t) => e !== o[t]);
            return -1 !== a
                ? ((t = n[a]), (r = o[a]), t.index - r.index)
                : n.findIndex((e) => e === r) >= 0
                  ? 1
                  : (o.findIndex((e) => e === t), -1);
        },
        ue: function (e) {
            return n(e, 0);
        },
    },
);
