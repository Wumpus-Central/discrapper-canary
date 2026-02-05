"use strict";
n.d(t, { A: () => l });
var r = n(867051),
    i = n(548965),
    a = n(942269);
let s = "Note";
class o extends a.yW {
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
        CONNECTION_OPEN: (e, t) => t.clear(),
        OVERLAY_INITIALIZE: (e, t) => t.clear(),
        USER_NOTE_UPDATE: (e, t) => {
            t.set(e.id, (0, r.yE)(s, { loading: !1, note: e.note }));
        },
        USER_NOTE_LOAD_START: (e, t) => {
            t.set(e.userId, (0, r.yE)(s, { loading: !0, note: null }));
        },
    },
    i.P4.getCachedBridgedStoreMode(),
);
