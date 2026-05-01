n.d(t, { A: () => o });
var i = n(867051),
    l = n(548965),
    a = n(137903);
let r = "Note";
class s extends a.yW {
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
            t.set(e.id, (0, i.yE)(r, { loading: !1, note: e.note }));
        },
        USER_NOTE_LOAD_START: (e, t) => {
            t.set(e.userId, (0, i.yE)(r, { loading: !0, note: null }));
        },
    },
    l.P4.getCachedBridgedStoreMode(),
);
