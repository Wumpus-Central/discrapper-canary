_.d(e, {
    $3: () => i,
    $Q: () => l,
    Dt: () => f,
    HH: () => T,
    NP: () => A,
    R2: () => R,
    d8: () => d,
});
var a = _(688838);
function r(t, e, _, r) {
    let n = {
        filename: t,
        function: "<anonymous>" === e ? a.Fi : e,
        in_app: !0,
    };
    return void 0 !== _ && (n.lineno = _), void 0 !== r && (n.colno = r), n;
}
let n = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
    o =
        /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
    E = /\((\S*)(?::(\d+))(?::(\d+))\)/,
    i = [
        30,
        (t) => {
            let e = n.exec(t);
            if (e) {
                let [, t, _, n] = e;
                return r(t, a.Fi, +_, +n);
            }
            let _ = o.exec(t);
            if (_) {
                if (_[2] && 0 === _[2].indexOf("eval")) {
                    let t = E.exec(_[2]);
                    t && ((_[2] = t[1]), (_[3] = t[2]), (_[4] = t[3]));
                }
                let [t, e] = O(_[1] || a.Fi, _[2]);
                return r(e, t, _[3] ? +_[3] : void 0, _[4] ? +_[4] : void 0);
            }
        },
    ],
    c =
        /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
    s = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
    l = [
        50,
        (t) => {
            let e = c.exec(t);
            if (e) {
                if (e[3] && e[3].indexOf(" > eval") > -1) {
                    let t = s.exec(e[3]);
                    t && ((e[1] = e[1] || "eval"), (e[3] = t[1]), (e[4] = t[2]), (e[5] = ""));
                }
                let t = e[3],
                    _ = e[1] || a.Fi;
                return ([_, t] = O(_, t)), r(t, _, e[4] ? +e[4] : void 0, e[5] ? +e[5] : void 0);
            }
        },
    ],
    I = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
    R = [
        40,
        (t) => {
            let e = I.exec(t);
            return e ? r(e[2], e[1] || a.Fi, +e[3], e[4] ? +e[4] : void 0) : void 0;
        },
    ],
    N = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,
    A = [
        10,
        (t) => {
            let e = N.exec(t);
            return e ? r(e[2], e[3] || a.Fi, +e[1]) : void 0;
        },
    ],
    u = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i,
    T = [
        20,
        (t) => {
            let e = u.exec(t);
            return e ? r(e[5], e[3] || e[4] || a.Fi, +e[1], +e[2]) : void 0;
        },
    ],
    d = [i, l],
    f = (0, a.pE)(...d),
    O = (t, e) => {
        let _ = -1 !== t.indexOf("safari-extension"),
            r = -1 !== t.indexOf("safari-web-extension");
        return _ || r
            ? [
                  -1 !== t.indexOf("@") ? t.split("@")[0] : a.Fi,
                  _ ? `safari-extension:${e}` : `safari-web-extension:${e}`,
              ]
            : [t, e];
    };
