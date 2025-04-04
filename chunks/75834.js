n.d(t, {
    e: () => i,
    s: () => l
}),
    n(47120),
    n(230036);
var r = n(823379);
function i(e, t) {
    let n = e.find((e) => e.processId === t);
    return null == n ? null : l(e, n);
}
let o = '356869127241072640',
    a = 'league of legends.exe';
function s(e, t) {
    let n = t.processPath.length > 1 ? t.processPath[t.processPath.length - 2] : 0,
        r = e.filter((e) => e.applicationId === o && e.processPath.includes(n)),
        i = r.find((e) => e.executableName === a);
    return void 0 !== i ? i : r.length > 0 ? r[0] : null;
}
function l(e, t) {
    var n;
    if (null == t) return null;
    if (t.applicationId === o) return s(e, t);
    let i = new Map(e.map((e) => [e.processId, e])),
        a = t.processPath.map((e) => i.get(e)).find((e) => null != e);
    if (null == a) return null;
    let l = e
        .map((e) => {
            let t = e.processPath.findIndex((e) => i.has(e));
            return -1 === t
                ? null
                : {
                      application: e,
                      rootedPath: e.processPath.slice(t)
                  };
        })
        .filter(r.lm)
        .filter((e) => e.rootedPath[0] === a.processId);
    l.sort((e, t) => {
        let n = e.rootedPath.map((e) => i.get(e)).filter((e) => null != e && null != e.windowHandle),
            r = c(
                t.rootedPath.map((e) => i.get(e)).filter((e) => null != e && null != e.windowHandle),
                n
            );
        return 0 !== r ? r : c(t.rootedPath, e.rootedPath);
    });
    let u = null != (n = l.find((e) => null != e.application.windowHandle)) ? n : l[0];
    return null == u ? null : u.application;
}
function c(e, t) {
    return e.length - t.length;
}
