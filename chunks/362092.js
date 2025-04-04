n.d(t, {
    Q2: () => s,
    i6: () => l,
    rN: () => c
}),
    n(47120),
    n(301563),
    n(411104),
    n(653041);
var r = n(147519);
n(364964);
let i = r.Z.listLanguages(),
    o = {};
for (let e of i) {
    e = e.toLowerCase();
    let t = r.Z.getLanguage(e);
    if (null == t) continue;
    let n = t.aliases;
    if (((o[e] = e), null != n)) for (let t of n) o[t.toLowerCase()] = e;
}
let a = /^[a-z0-9_+\-.#]+$/,
    s = /^[a-z0-9_+\-.#]+$/i;
for (let e in o) if (null == e.match(a)) throw Error('Language name does not match regex: '.concat(e));
function l(e) {
    return e.toLowerCase() in o;
}
function c(e) {
    let t,
        n = [],
        r = /\\|```/g;
    for (; null != (t = r.exec(e)); ) {
        if ('\\' === t[0]) {
            r.lastIndex += 1;
            continue;
        }
        n.push(t.index);
    }
    return n;
}
