l.d(n, { Z: () => i }), l(653041), l(47120);
var t = l(131704);
function i(e) {
    let n = [];
    for (let l = 0; l < e._categories.length; l++) {
        let i = e._categories[l].channel,
            a = e[i.id].map((e) => e.channel).filter((e) => t.iR.has(e.type));
        if (null != a && 0 !== a.length) for (let e of ('null' !== i.id && n.push(i), a)) n.push(e);
    }
    return n;
}
