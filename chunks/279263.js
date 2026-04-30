"use strict";
n.d(t, { A: () => l });
var i = n(867051),
    r = n(892842),
    s = n(137903);
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
            t.set(e.id, (0, i.yE)(a, { loading: !1, note: e.note }));
        },
        USER_NOTE_LOAD_START: (e, t) => {
            t.set(e.userId, (0, i.yE)(a, { loading: !0, note: null }));
        },
    },
    r.P4.getCachedBridgedStoreMode(),
);
