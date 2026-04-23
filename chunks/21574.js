r.d(t, { h: () => l }), r(321073);
let n = 0,
    a = null;
function l(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    try {
        let r = (function (e) {
            if (2 === n) return null;
            0 === n &&
                (function (e) {
                    let t = e;
                    for (; null != t && t !== document.body; ) {
                        for (let t of Object.keys(e))
                            if (t.startsWith("__reactFiber$")) {
                                (a = t), (n = 1);
                                return;
                            }
                        t = t.parentElement;
                    }
                    null == a && (n = 2);
                })(e);
            let t = a,
                r = e;
            for (; null != r && r !== document.body; ) {
                if (t in r) return r[t];
                r = r.parentElement;
            }
            return null;
        })(e);
        if (null != r)
            return (function (e, t) {
                let r = [],
                    n = e;
                for (; null != n; ) {
                    let e = n?._debugSource?.fileName,
                        a = n?._debugSource?.lineNumber;
                    if (null != e && null != a) {
                        let n = `${e}:${a}`;
                        if (t) {
                            let e = n.split("/discord/");
                            0 !== e.length && r.push(e[e.length - 1]);
                        } else r.push(n);
                    }
                    n = n?._debugOwner;
                }
                return r;
            })(r, t);
        return null;
    } catch {
        return null;
    }
}
