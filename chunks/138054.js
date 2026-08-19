"use strict";
n.d(t, { A: () => l });
var i = n(17928),
    r = n(228366);
let a = null;
class s extends i.Ay.PersistedStore {
    static displayName = "FamilyCenterPendingConnectionStore";
    static persistKey = "FamilyCenterPendingConnectionStore";
    initialize(e) {
        a = e ?? null;
    }
    getState() {
        return a;
    }
    getPendingConnection() {
        return a;
    }
}
let l = new s(r.h, {
    FAMILY_CENTER_PENDING_CONNECTION_SET: function (e) {
        let { teenId: t, linkCode: n } = e;
        a = { teenId: t, linkCode: n };
    },
    FAMILY_CENTER_PENDING_CONNECTION_CLEAR: function (e) {
        a = null;
    },
    LOGOUT: function () {
        a = null;
    },
});
