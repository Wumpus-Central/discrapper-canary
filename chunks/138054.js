"use strict";
n.d(t, { A: () => o });
var i = n(17928),
    r = n(228366);
let s = null;
class a extends i.Ay.PersistedStore {
    static displayName = "FamilyCenterPendingConnectionStore";
    static persistKey = "FamilyCenterPendingConnectionStore";
    initialize(e) {
        s = e ?? null;
    }
    getState() {
        return s;
    }
    getPendingConnection() {
        return s;
    }
}
let o = new a(r.h, {
    FAMILY_CENTER_PENDING_CONNECTION_SET: function (e) {
        let { teenId: t, linkCode: n } = e;
        s = { teenId: t, linkCode: n };
    },
    FAMILY_CENTER_PENDING_CONNECTION_CLEAR: function (e) {
        s = null;
    },
    LOGOUT: function () {
        s = null;
    },
});
