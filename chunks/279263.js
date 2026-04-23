n.d(t, { A: () => o });
var i = n(867051),
    r = n(548965),
    l = n(137903);
let a = "Note";
class s extends l.yW {
    static displayName = "NoteStore";
    database = this.addKVDatabase("notes");
    getNote(e) {
        return this.database.get(e);
    }
    stateWrapper() {
        return this.database;
    }
}
let o = new s(
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
