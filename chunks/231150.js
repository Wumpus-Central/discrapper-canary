t.d(n, { A: () => i }), t(321073);
var r = t(95701);
function i(e) {
    let n = [];
    for (let t = 0; t < e._categories.length; t++) {
        let i = e._categories[t].channel,
            a = e[i.id].map((e) => e.channel).filter((e) => r.kr.has(e.type));
        if (null != a && 0 !== a.length) for (let e of ("null" !== i.id && n.push(i), a)) n.push(e);
    }
    return n;
}
