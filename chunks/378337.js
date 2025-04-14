l.d(n, { Z: () => i }), l(539854), l(388685);
var t = l(131704);
function i(e) {
    let n = [];
    for (let l = 0; l < e._categories.length; l++) {
        let i = e._categories[l].channel,
            o = e[i.id].map((e) => e.channel).filter((e) => t.iR.has(e.type));
        if (null != o && 0 !== o.length) for (let e of ('null' !== i.id && n.push(i), o)) n.push(e);
    }
    return n;
}
