n.d(t, {
    Q2: () => o,
    i6: () => l,
    rN: () => u
}),
    n(47120),
    n(411104),
    n(653041);
var i = n(147519);
n(364964);
let r = i.Z.listLanguages(),
    a = {};
for (let e of r) {
    e = e.toLowerCase();
    let t = i.Z.getLanguage(e);
    if (null == t) continue;
    let n = t.aliases;
    if (((a[e] = e), null != n)) for (let t of n) a[t.toLowerCase()] = e;
}
let s = /^[a-z0-9_+\-.#]+$/,
    o = /^[a-z0-9_+\-.#]+$/i;
for (let e in a) if (null == e.match(s)) throw Error('Language name does not match regex: '.concat(e));
function l(e) {
    return e.toLowerCase() in a;
}
function u(e) {
    let t;
    let n = [],
        i = /\\|```/g;
    for (; null != (t = i.exec(e)); ) {
        if ('\\' === t[0]) {
            i.lastIndex += 1;
            continue;
        }
        n.push(t.index);
    }
    return n;
}
