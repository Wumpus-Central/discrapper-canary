t.d(n, { Z: () => a }), t(539854), t(388685);
var l = t(131704);
function a(e) {
    let n = [];
    for (let t = 0; t < e._categories.length; t++) {
        let a = e._categories[t].channel,
            i = e[a.id].map((e) => e.channel).filter((e) => l.iR.has(e.type));
        if (null != i && 0 !== i.length) for (let e of ("null" !== a.id && n.push(a), i)) n.push(e);
    }
    return n;
}
