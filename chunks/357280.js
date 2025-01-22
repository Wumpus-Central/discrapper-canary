r.d(n, {
    J: function () {
        return a;
    }
});
let i = '_errors';
function a(e) {
    let n = {};
    for (let r in e) {
        let a = e[r];
        if (null == a) continue;
        if ((r === i && (n._misc = e[r].map((e) => e.message)), Array.isArray(a))) continue;
        let o = a[i];
        null != o ? (n[r] = o.map((e) => e.message)) : (n[r] = [Object.keys(a)[0]]);
    }
    return n;
}
