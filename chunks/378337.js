t.d(n, { Z: () => i }), t(539854), t(388685);
var a = t(131704);
function i(e) {
    let n = [];
    for (let t = 0; t < e._categories.length; t++) {
        let i = e._categories[t].channel,
            l = e[i.id].map((e) => e.channel).filter((e) => a.iR.has(e.type));
        if (null != l && 0 !== l.length) for (let e of ("null" !== i.id && n.push(i), l)) n.push(e);
    }
    return n;
}
