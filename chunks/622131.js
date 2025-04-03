n.d(t, { P: () => l }), n(47120), n(301563), n(653041);
let r = 0,
    a = null;
function l(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    try {
        let n = (function (e) {
            if (2 === r) return null;
            0 === r &&
                (function (e) {
                    let t = e;
                    for (; null != t && t !== document.body; ) {
                        for (let t of Object.keys(e))
                            if (t.startsWith('__reactFiber$')) {
                                (a = t), (r = 1);
                                return;
                            }
                        t = t.parentElement;
                    }
                    null == a && (r = 2);
                })(e);
            let t = a,
                n = e;
            for (; null != n && n !== document.body; ) {
                if (t in n) return n[t];
                n = n.parentElement;
            }
            return null;
        })(e);
        if (null != n)
            return (function (e, t) {
                let n = [],
                    r = e;
                for (; null != r; ) {
                    var a, l;
                    let e = null == r || null == (a = r._debugSource) ? void 0 : a.fileName,
                        i = null == r || null == (l = r._debugSource) ? void 0 : l.lineNumber;
                    if (null != e && null != i) {
                        let r = ''.concat(e, ':').concat(i);
                        if (t) {
                            let e = r.split('/discord/');
                            0 !== e.length && n.push(e[e.length - 1]);
                        } else n.push(r);
                    }
                    r = null == r ? void 0 : r._debugOwner;
                }
                return n;
            })(n, t);
        return null;
    } catch (e) {
        return null;
    }
}
