"use strict";
n.d(t, { M: () => i, w: () => a });
var r = n(403362);
function i(e, t) {
    let n = e.find((e) => e.processId === t);
    return null == n ? null : a(e, n);
}
let s = "1402418696126992445";
function a(e, t) {
    if (null == t) return null;
    if (t.applicationId === s) {
        let n, r, i;
        return (
            (n = t.processPath.length > 1 ? t.processPath[t.processPath.length - 2] : 0),
            void 0 !==
            (i = (r = e.filter((e) => e.applicationId === s && e.processPath.includes(n))).find(
                (e) => "league of legends.exe" === e.executableName,
            ))
                ? i
                : r.length > 0
                  ? r[0]
                  : null
        );
    }
    let n = new Map(e.map((e) => [e.processId, e])),
        i = t.processPath.map((e) => n.get(e)).find((e) => null != e);
    if (null == i) return null;
    let a = e
        .map((e) => {
            let t = e.processPath.findIndex((e) => n.has(e));
            return -1 === t ? null : { application: e, rootedPath: e.processPath.slice(t) };
        })
        .filter(r.Vq)
        .filter((e) => e.rootedPath[0] === i.processId);
    a.sort((e, t) => {
        let r = e.rootedPath.map((e) => n.get(e)).filter((e) => null != e && null != e.windowHandle),
            i = o(
                t.rootedPath.map((e) => n.get(e)).filter((e) => null != e && null != e.windowHandle),
                r,
            );
        return 0 !== i ? i : o(t.rootedPath, e.rootedPath);
    });
    let l = a.find((e) => null != e.application.windowHandle) ?? a[0];
    return null == l ? null : l.application;
}
function o(e, t) {
    return e.length - t.length;
}
