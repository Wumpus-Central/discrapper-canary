n.d(t, { Z: () => f }), n(653041);
var r = n(981631);
let i = [],
    o = !1;
function a() {
    let e = window.navigator.connection;
    return null == e
        ? {
              type: r.IWh.UNKNOWN,
              effectiveSpeed: r.IyS.UNKNOWN
          }
        : {
              type: null != e.type ? e.type : r.IWh.UNKNOWN,
              effectiveSpeed: e.effectiveType
          };
}
function s() {
    if (!0 === o) return;
    let e = window.navigator.connection;
    null != e && ((o = !0), e.addEventListener('change', c));
}
function l() {
    if (!1 === o) return;
    let e = window.navigator.connection;
    null != e && 0 === i.length && null != e && (e.removeEventListener('change', c), (o = !1));
}
function c() {
    let e = a();
    i.forEach((t) => t(e));
}
function u(e) {
    i.push(e), s();
}
function d(e) {
    let t = i.indexOf(e);
    -1 !== t && (i.splice(t, 1), l());
}
let f = {
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
        u(e);
    },
    removeChangeCallback(e) {
        d(e);
    },
    getNetworkInformation: () => Promise.resolve(a()),
    isOnline() {
        let e = navigator.onLine;
        return void 0 === e || e;
    }
};
