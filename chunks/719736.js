"use strict";
n.d(t, { $2: () => h, Q_: () => m, Vv: () => _, Yj: () => l, c9: () => y, dY: () => d, lG: () => v });
var r = n(968072);
function i(e, t, n, r) {
    let i = { filename: e, function: "<anonymous>" === t ? "?" : t, in_app: !0 };
    return void 0 !== n && (i.lineno = n), void 0 !== r && (i.colno = r), i;
}
let o = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
    a =
        /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
    s = /\((\S*)(?::(\d+))(?::(\d+))\)/,
    l = [
        30,
        (e) => {
            let t = o.exec(e);
            if (t) {
                let [, e, n, r] = t;
                return i(e, "?", +n, +r);
            }
            let n = a.exec(e);
            if (n) {
                if (n[2] && 0 === n[2].indexOf("eval")) {
                    let e = s.exec(n[2]);
                    e && ((n[2] = e[1]), (n[3] = e[2]), (n[4] = e[3]));
                }
                let [e, t] = b(n[1] || "?", n[2]);
                return i(t, e, n[3] ? +n[3] : void 0, n[4] ? +n[4] : void 0);
            }
        },
    ],
    c =
        /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
    u = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
    d = [
        50,
        (e) => {
            let t = c.exec(e);
            if (t) {
                if (t[3] && t[3].indexOf(" > eval") > -1) {
                    let e = u.exec(t[3]);
                    e && ((t[1] = t[1] || "eval"), (t[3] = e[1]), (t[4] = e[2]), (t[5] = ""));
                }
                let e = t[3],
                    n = t[1] || "?";
                return ([n, e] = b(n, e)), i(e, n, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0);
            }
        },
    ],
    p = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
    h = [
        40,
        (e) => {
            let t = p.exec(e);
            return t ? i(t[2], t[1] || "?", +t[3], t[4] ? +t[4] : void 0) : void 0;
        },
    ],
    f = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,
    m = [
        10,
        (e) => {
            let t = f.exec(e);
            return t ? i(t[2], t[3] || "?", +t[1]) : void 0;
        },
    ],
    g = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i,
    _ = [
        20,
        (e) => {
            let t = g.exec(e);
            return t ? i(t[5], t[3] || t[4] || "?", +t[1], +t[2]) : void 0;
        },
    ],
    y = [l, d],
    v = (0, r.gd)(...y),
    b = (e, t) => {
        let n = -1 !== e.indexOf("safari-extension"),
            r = -1 !== e.indexOf("safari-web-extension");
        return n || r
            ? [-1 !== e.indexOf("@") ? e.split("@")[0] : "?", n ? `safari-extension:${t}` : `safari-web-extension:${t}`]
            : [e, t];
    };
