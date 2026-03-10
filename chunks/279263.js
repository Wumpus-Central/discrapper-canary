"use strict";
n.d(t, { A: () => l });
var r = n(867051),
    i = n(548965),
    s = n(942269);
let a = "Note";
class o extends s.yW {
    static displayName = "NoteStore";
    database = this.addKVDatabase("notes");
    getNote(e) {
        return this.database.get(e);
    }
    stateWrapper() {
        return this.database;
    }
}
let l = new o(
    {
        LOGOUT: (e, t) => t.clear(),
        RESET_SOCKET: (e, t) => t.clear(),
        CONNECTION_OPEN: (e, t) => t.clear(),
        OVERLAY_INITIALIZE: (e, t) => t.clear(),
        USER_NOTE_UPDATE: (e, t) => {
            t.set(e.id, (0, r.yE)(a, { loading: !1, note: e.note }));
        },
        USER_NOTE_LOAD_START: (e, t) => {
            t.set(e.userId, (0, r.yE)(a, { loading: !0, note: null }));
        },
    },
    i.P4.getCachedBridgedStoreMode(),
);
