var i = r(653041);
var a = r(981631);
let o = [],
    s = !1;
function l() {
    let e = window.navigator.connection;
    return null == e
        ? {
              type: a.IWh.UNKNOWN,
              effectiveSpeed: a.IyS.UNKNOWN
          }
        : {
              type: null != e.type ? e.type : a.IWh.UNKNOWN,
              effectiveSpeed: e.effectiveType
          };
}
function u() {
    if (!0 === s) return;
    let e = window.navigator.connection;
    null != e && ((s = !0), e.addEventListener('change', d));
}
function c() {
    if (!1 === s) return;
    let e = window.navigator.connection;
    null != e && 0 === o.length && null != e && (e.removeEventListener('change', d), (s = !1));
}
function d() {
    let e = l();
    o.forEach((n) => n(e));
}
function f(e) {
    o.push(e), u();
}
function p(e) {
    let n = o.indexOf(e);
    -1 !== n && (o.splice(n, 1), c());
}
n.Z = {
    addOnlineCallback(e) {
        window.addEventListener('online', e);
    },
    removeOnlineCallback(e) {
        window.removeEventListener('online', e);
    },
    addOfflineCallback(e) {
        window.addEventListener('offline', e);
    },
    removeOfflineCallback(e) {
        window.removeEventListener('offline', e);
    },
    addChangeCallback(e) {
        f(e);
    },
    removeChangeCallback(e) {
        p(e);
    },
    getNetworkInformation: () => Promise.resolve(l()),
    isOnline() {
        let e = navigator.onLine;
        return void 0 === e || e;
    }
};
