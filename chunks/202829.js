n.d(t, {
    $3: () => s,
    $Q: () => l,
    Dt: () => A,
    HH: () => T,
    NP: () => f,
    R2: () => d,
    d8: () => R,
});
var r = n(521257);
function i(e, t, n, i) {
    let a = {
        filename: e,
        function: "<anonymous>" === t ? r.Fi : t,
        in_app: !0,
    };
    return void 0 !== n && (a.lineno = n), void 0 !== i && (a.colno = i), a;
}
let a = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
    o =
        /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
    _ = /\((\S*)(?::(\d+))(?::(\d+))\)/,
    s = [
        30,
        (e) => {
            let t = a.exec(e);
            if (t) {
                let [, e, n, a] = t;
                return i(e, r.Fi, +n, +a);
            }
            let n = o.exec(e);
            if (n) {
                if (n[2] && 0 === n[2].indexOf("eval")) {
                    let e = _.exec(n[2]);
                    e && ((n[2] = e[1]), (n[3] = e[2]), (n[4] = e[3]));
                }
                let [e, t] = N(n[1] || r.Fi, n[2]);
                return i(t, e, n[3] ? +n[3] : void 0, n[4] ? +n[4] : void 0);
            }
        },
    ],
    c =
        /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
    E = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
    l = [
        50,
        (e) => {
            let t = c.exec(e);
            if (t) {
                if (t[3] && t[3].indexOf(" > eval") > -1) {
                    let e = E.exec(t[3]);
                    e && ((t[1] = t[1] || "eval"), (t[3] = e[1]), (t[4] = e[2]), (t[5] = ""));
                }
                let e = t[3],
                    n = t[1] || r.Fi;
                return ([n, e] = N(n, e)), i(e, n, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0);
            }
        },
    ],
    u = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
    d = [
        40,
        (e) => {
            let t = u.exec(e);
            return t ? i(t[2], t[1] || r.Fi, +t[3], t[4] ? +t[4] : void 0) : void 0;
        },
    ],
    p = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,
    f = [
        10,
        (e) => {
            let t = p.exec(e);
            return t ? i(t[2], t[3] || r.Fi, +t[1]) : void 0;
        },
    ],
    I = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i,
    T = [
        20,
        (e) => {
            let t = I.exec(e);
            return t ? i(t[5], t[3] || t[4] || r.Fi, +t[1], +t[2]) : void 0;
        },
    ],
    R = [s, l],
    A = (0, r.pE)(...R),
    N = (e, t) => {
        let n = -1 !== e.indexOf("safari-extension"),
            i = -1 !== e.indexOf("safari-web-extension");
        return n || i
            ? [
                  -1 !== e.indexOf("@") ? e.split("@")[0] : r.Fi,
                  n ? `safari-extension:${t}` : `safari-web-extension:${t}`,
              ]
            : [e, t];
    };
