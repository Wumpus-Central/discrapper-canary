a.d(e, {
    $3: () => c,
    $Q: () => l,
    Dt: () => N,
    HH: () => f,
    NP: () => d,
    R2: () => I,
    d8: () => p
});
var r = a(688838);
function n(t, e, a, n) {
    let _ = {
        filename: t,
        function: '<anonymous>' === e ? r.Fi : e,
        in_app: !0
    };
    return void 0 !== a && (_.lineno = a), void 0 !== n && (_.colno = n), _;
}
let _ = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
    o = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
    i = /\((\S*)(?::(\d+))(?::(\d+))\)/,
    c = [
        30,
        (t) => {
            let e = _.exec(t);
            if (e) {
                let [, t, a, _] = e;
                return n(t, r.Fi, +a, +_);
            }
            let a = o.exec(t);
            if (a) {
                if (a[2] && 0 === a[2].indexOf('eval')) {
                    let t = i.exec(a[2]);
                    t && ((a[2] = t[1]), (a[3] = t[2]), (a[4] = t[3]));
                }
                let [t, e] = T(a[1] || r.Fi, a[2]);
                return n(e, t, a[3] ? +a[3] : void 0, a[4] ? +a[4] : void 0);
            }
        }
    ],
    s = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
    E = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
    l = [
        50,
        (t) => {
            let e = s.exec(t);
            if (e) {
                if (e[3] && e[3].indexOf(' > eval') > -1) {
                    let t = E.exec(e[3]);
                    t && ((e[1] = e[1] || 'eval'), (e[3] = t[1]), (e[4] = t[2]), (e[5] = ''));
                }
                let t = e[3],
                    a = e[1] || r.Fi;
                return ([a, t] = T(a, t)), n(t, a, e[4] ? +e[4] : void 0, e[5] ? +e[5] : void 0);
            }
        }
    ],
    u = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
    I = [
        40,
        (t) => {
            let e = u.exec(t);
            return e ? n(e[2], e[1] || r.Fi, +e[3], e[4] ? +e[4] : void 0) : void 0;
        }
    ],
    R = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,
    d = [
        10,
        (t) => {
            let e = R.exec(t);
            return e ? n(e[2], e[3] || r.Fi, +e[1]) : void 0;
        }
    ],
    A = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i,
    f = [
        20,
        (t) => {
            let e = A.exec(t);
            return e ? n(e[5], e[3] || e[4] || r.Fi, +e[1], +e[2]) : void 0;
        }
    ],
    p = [c, l],
    N = (0, r.pE)(...p),
    T = (t, e) => {
        let a = -1 !== t.indexOf('safari-extension'),
            n = -1 !== t.indexOf('safari-web-extension');
        return a || n ? [-1 !== t.indexOf('@') ? t.split('@')[0] : r.Fi, a ? `safari-extension:${e}` : `safari-web-extension:${e}`] : [t, e];
    };
