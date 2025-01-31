n.d(t, { J: () => r });
let i = '_errors';
function r(e) {
    let t = {};
    for (let n in e) {
        let r = e[n];
        if (null == r || (n === i && (t._misc = e[n].map((e) => e.message)), Array.isArray(r))) continue;
        let a = r[i];
        null != a ? (t[n] = a.map((e) => e.message)) : (t[n] = [Object.keys(r)[0]]);
    }
    return t;
}
