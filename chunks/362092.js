r.d(n, {
    Q2: function () {
        return d;
    },
    i6: function () {
        return f;
    },
    rN: function () {
        return _;
    }
});
var i = r(47120);
var a = r(411104);
var s = r(653041);
var o = r(147519);
r(364964);
let l = o.Z.listLanguages(),
    u = {};
for (let e of l) {
    e = e.toLowerCase();
    let n = o.Z.getLanguage(e);
    if (null == n) continue;
    let r = n.aliases;
    if (((u[e] = e), null != r)) for (let n of r) u[n.toLowerCase()] = e;
}
let c = /^[a-z0-9_+\-.#]+$/,
    d = /^[a-z0-9_+\-.#]+$/i;
for (let e in u) if (null == e.match(c)) throw Error('Language name does not match regex: '.concat(e));
function f(e) {
    return e.toLowerCase() in u;
}
function _(e) {
    let n;
    let r = [],
        i = /\\|```/g;
    for (; null != (n = i.exec(e)); ) {
        if ('\\' === n[0]) {
            i.lastIndex += 1;
            continue;
        }
        r.push(n.index);
    }
    return r;
}
