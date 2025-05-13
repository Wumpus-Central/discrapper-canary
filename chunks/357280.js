n.d(t, { J: () => i });
let r = '_errors';
function i(e) {
    let t = {};
    for (let n in e) {
        let i = e[n];
        if (null == i || (n === r && (t._misc = e[n].map((e) => e.message)), Array.isArray(i))) continue;
        let a = i[r];
        null != a ? (t[n] = a.map((e) => e.message)) : (t[n] = [Object.keys(i)[0]]);
    }
    return t;
}
