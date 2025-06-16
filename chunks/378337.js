l.d(n, { Z: () => a }), l(539854), l(388685);
var t = l(131704);
function a(e) {
    let n = [];
    for (let l = 0; l < e._categories.length; l++) {
        let a = e._categories[l].channel,
            i = e[a.id].map((e) => e.channel).filter((e) => t.iR.has(e.type));
        if (null != i && 0 !== i.length) for (let e of ('null' !== a.id && n.push(a), i)) n.push(e);
    }
    return n;
}
