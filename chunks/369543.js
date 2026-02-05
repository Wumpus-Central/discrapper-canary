"use strict";
n.d(t, { M: () => i, w: () => l });
var r = n(403362);
function i(e, t) {
    let n = e.find((e) => e.processId === t);
    return null == n ? null : l(e, n);
}
let a = "1402418696126992445",
    s = "league of legends.exe";
function o(e, t) {
    let n = t.processPath.length > 1 ? t.processPath[t.processPath.length - 2] : 0,
        r = e.filter((e) => e.applicationId === a && e.processPath.includes(n)),
        i = r.find((e) => e.executableName === s);
    return void 0 !== i ? i : r.length > 0 ? r[0] : null;
}
function l(e, t) {
    if (null == t) return null;
    if (t.applicationId === a) return o(e, t);
    let n = new Map(e.map((e) => [e.processId, e])),
        i = t.processPath.map((e) => n.get(e)).find((e) => null != e);
    if (null == i) return null;
    let s = e
        .map((e) => {
            let t = e.processPath.findIndex((e) => n.has(e));
            return -1 === t ? null : { application: e, rootedPath: e.processPath.slice(t) };
        })
        .filter(r.Vq)
        .filter((e) => e.rootedPath[0] === i.processId);
    s.sort((e, t) => {
        let r = e.rootedPath.map((e) => n.get(e)).filter((e) => null != e && null != e.windowHandle),
            i = u(
                t.rootedPath.map((e) => n.get(e)).filter((e) => null != e && null != e.windowHandle),
                r,
            );
        return 0 !== i ? i : u(t.rootedPath, e.rootedPath);
    });
    let l = s.find((e) => null != e.application.windowHandle) ?? s[0];
    return null == l ? null : l.application;
}
function u(e, t) {
    return e.length - t.length;
}
