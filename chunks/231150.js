t.d(n, {
    A: () => a,
}),
    t(321073),
    t(896048);
var i = t(95701);

function a(e) {
    let n = [];
    for (let t = 0; t < e._categories.length; t++) {
        let a = e._categories[t].channel,
            r = e[a.id].map((e) => e.channel).filter((e) => i.kr.has(e.type));
        if (null != r && 0 !== r.length) for (let e of ("null" !== a.id && n.push(a), r)) n.push(e);
    }
    return n;
}
