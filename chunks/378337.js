t.d(e, { Z: () => i }), t(539854), t(388685);
var l = t(131704);
function i(n) {
    let e = [];
    for (let t = 0; t < n._categories.length; t++) {
        let i = n._categories[t].channel,
            a = n[i.id].map((n) => n.channel).filter((n) => l.iR.has(n.type));
        if (null != a && 0 !== a.length) for (let n of ("null" !== i.id && e.push(i), a)) e.push(n);
    }
    return e;
}
