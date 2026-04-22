"use strict";
n.d(t, { A: () => l }), n(321073);
var r = n(652215);
let i = [],
    s = !1;
function a() {
    let e = window.navigator.connection;
    return null == e
        ? { type: r.wY_.UNKNOWN, effectiveSpeed: r.NKC.UNKNOWN }
        : { type: null != e.type ? e.type : r.wY_.UNKNOWN, effectiveSpeed: e.effectiveType };
}
function o() {
    let e = a();
    i.forEach((t) => t(e));
}
let l = {
    addOnlineCallback(e) {
        window.addEventListener("online", e);
    },
    removeOnlineCallback(e) {
        window.removeEventListener("online", e);
    },
    addOfflineCallback(e) {
        window.addEventListener("offline", e);
    },
    removeOfflineCallback(e) {
        window.removeEventListener("offline", e);
    },
    addChangeCallback(e) {
        i.push(e),
            (function () {
                if (!0 === s) return;
                let e = window.navigator.connection;
                null != e && ((s = !0), e.addEventListener("change", o));
            })();
    },
    removeChangeCallback(e) {
        let t;
        -1 !== (t = i.indexOf(e)) &&
            (i.splice(t, 1),
            (function () {
                if (!1 === s) return;
                let e = window.navigator.connection;
                null != e && 0 === i.length && null != e && (e.removeEventListener("change", o), (s = !1));
            })());
    },
    getNetworkInformation: () => Promise.resolve(a()),
    isOnline() {
        let e = navigator.onLine;
        return void 0 === e || e;
    },
};
