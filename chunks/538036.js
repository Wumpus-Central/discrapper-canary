n.d(t, { Z: () => f }), n(653041);
var i = n(981631);
let r = [],
    a = !1;
function s() {
    let e = window.navigator.connection;
    return null == e
        ? {
              type: i.IWh.UNKNOWN,
              effectiveSpeed: i.IyS.UNKNOWN
          }
        : {
              type: null != e.type ? e.type : i.IWh.UNKNOWN,
              effectiveSpeed: e.effectiveType
          };
}
function o() {
    if (!0 === a) return;
    let e = window.navigator.connection;
    null != e && ((a = !0), e.addEventListener('change', u));
}
function l() {
    if (!1 === a) return;
    let e = window.navigator.connection;
    null != e && 0 === r.length && null != e && (e.removeEventListener('change', u), (a = !1));
}
function u() {
    let e = s();
    r.forEach((t) => t(e));
}
function c(e) {
    r.push(e), o();
}
function d(e) {
    let t = r.indexOf(e);
    -1 !== t && (r.splice(t, 1), l());
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
        c(e);
    },
    removeChangeCallback(e) {
        d(e);
    },
    getNetworkInformation: () => Promise.resolve(s()),
    isOnline() {
        let e = navigator.onLine;
        return void 0 === e || e;
    }
};
