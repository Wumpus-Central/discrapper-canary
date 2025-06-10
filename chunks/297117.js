a.d(e, {
    $3: () => c,
    $Q: () => l,
    Dt: () => T,
    HH: () => A,
    NP: () => d,
    R2: () => I,
    d8: () => f
});
var r = a(688838);
function _(t, e, a, _) {
    let n = {
        filename: t,
        function: '<anonymous>' === e ? r.Fi : e,
        in_app: !0
    };
    return void 0 !== a && (n.lineno = a), void 0 !== _ && (n.colno = _), n;
}
let n = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
    o = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
    i = /\((\S*)(?::(\d+))(?::(\d+))\)/,
    c = [
        30,
        (t) => {
            let e = n.exec(t);
            if (e) {
                let [, t, a, n] = e;
                return _(t, r.Fi, +a, +n);
            }
            let a = o.exec(t);
            if (a) {
                if (a[2] && 0 === a[2].indexOf('eval')) {
                    let t = i.exec(a[2]);
                    t && ((a[2] = t[1]), (a[3] = t[2]), (a[4] = t[3]));
                }
                let [t, e] = p(a[1] || r.Fi, a[2]);
                return _(e, t, a[3] ? +a[3] : void 0, a[4] ? +a[4] : void 0);
            }
        }
    ],
    E = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
    s = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
    l = [
        50,
        (t) => {
            let e = E.exec(t);
            if (e) {
                if (e[3] && e[3].indexOf(' > eval') > -1) {
                    let t = s.exec(e[3]);
                    t && ((e[1] = e[1] || 'eval'), (e[3] = t[1]), (e[4] = t[2]), (e[5] = ''));
                }
                let t = e[3],
                    a = e[1] || r.Fi;
                return ([a, t] = p(a, t)), _(t, a, e[4] ? +e[4] : void 0, e[5] ? +e[5] : void 0);
            }
        }
    ],
    u = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
    I = [
        40,
        (t) => {
            let e = u.exec(t);
            return e ? _(e[2], e[1] || r.Fi, +e[3], e[4] ? +e[4] : void 0) : void 0;
        }
    ],
    R = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,
    d = [
        10,
        (t) => {
            let e = R.exec(t);
            return e ? _(e[2], e[3] || r.Fi, +e[1]) : void 0;
        }
    ],
    N = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i,
    A = [
        20,
        (t) => {
            let e = N.exec(t);
            return e ? _(e[5], e[3] || e[4] || r.Fi, +e[1], +e[2]) : void 0;
        }
    ],
    f = [c, l],
    T = (0, r.pE)(...f),
    p = (t, e) => {
        let a = -1 !== t.indexOf('safari-extension'),
            _ = -1 !== t.indexOf('safari-web-extension');
        return a || _ ? [-1 !== t.indexOf('@') ? t.split('@')[0] : r.Fi, a ? `safari-extension:${e}` : `safari-web-extension:${e}`] : [t, e];
    };
