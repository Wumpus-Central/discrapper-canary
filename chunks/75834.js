r.d(n, {
    e: function () {
        return o;
    },
    s: function () {
        return c;
    }
});
var i = r(47120);
var a = r(823379);
function o(e, n) {
    let r = e.find((e) => e.processId === n);
    return null == r ? null : c(e, r);
}
let s = '356869127241072640',
    l = 'league of legends.exe';
function u(e, n) {
    let r = n.processPath.length > 1 ? n.processPath[n.processPath.length - 2] : 0,
        i = e.filter((e) => e.applicationId === s && e.processPath.includes(r)),
        a = i.find((e) => e.executableName === l);
    return void 0 !== a ? a : i.length > 0 ? i[0] : null;
}
function c(e, n) {
    var r;
    if (null == n) return null;
    if (n.applicationId === s) return u(e, n);
    let i = new Map(e.map((e) => [e.processId, e])),
        o = n.processPath.map((e) => i.get(e)).find((e) => null != e);
    if (null == o) return null;
    let l = e
        .map((e) => {
            let n = e.processPath.findIndex((e) => i.has(e));
            return -1 === n
                ? null
                : {
                      application: e,
                      rootedPath: e.processPath.slice(n)
                  };
        })
        .filter(a.lm)
        .filter((e) => e.rootedPath[0] === o.processId);
    l.sort((e, n) => {
        let r = e.rootedPath.map((e) => i.get(e)).filter((e) => null != e && null != e.windowHandle),
            a = d(
                n.rootedPath.map((e) => i.get(e)).filter((e) => null != e && null != e.windowHandle),
                r
            );
        return 0 !== a ? a : d(n.rootedPath, e.rootedPath);
    });
    let c = null !== (r = l.find((e) => null != e.application.windowHandle)) && void 0 !== r ? r : l[0];
    return null == c ? null : c.application;
}
function d(e, n) {
    return e.length - n.length;
}
