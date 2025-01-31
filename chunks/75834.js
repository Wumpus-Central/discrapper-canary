n.d(t, {
    e: () => r,
    s: () => l
}),
    n(47120);
var i = n(823379);
function r(e, t) {
    let n = e.find((e) => e.processId === t);
    return null == n ? null : l(e, n);
}
let a = '356869127241072640',
    s = 'league of legends.exe';
function o(e, t) {
    let n = t.processPath.length > 1 ? t.processPath[t.processPath.length - 2] : 0,
        i = e.filter((e) => e.applicationId === a && e.processPath.includes(n)),
        r = i.find((e) => e.executableName === s);
    return void 0 !== r ? r : i.length > 0 ? i[0] : null;
}
function l(e, t) {
    var n;
    if (null == t) return null;
    if (t.applicationId === a) return o(e, t);
    let r = new Map(e.map((e) => [e.processId, e])),
        s = t.processPath.map((e) => r.get(e)).find((e) => null != e);
    if (null == s) return null;
    let l = e
        .map((e) => {
            let t = e.processPath.findIndex((e) => r.has(e));
            return -1 === t
                ? null
                : {
                      application: e,
                      rootedPath: e.processPath.slice(t)
                  };
        })
        .filter(i.lm)
        .filter((e) => e.rootedPath[0] === s.processId);
    l.sort((e, t) => {
        let n = e.rootedPath.map((e) => r.get(e)).filter((e) => null != e && null != e.windowHandle),
            i = u(
                t.rootedPath.map((e) => r.get(e)).filter((e) => null != e && null != e.windowHandle),
                n
            );
        return 0 !== i ? i : u(t.rootedPath, e.rootedPath);
    });
    let c = null !== (n = l.find((e) => null != e.application.windowHandle)) && void 0 !== n ? n : l[0];
    return null == c ? null : c.application;
}
function u(e, t) {
    return e.length - t.length;
}
