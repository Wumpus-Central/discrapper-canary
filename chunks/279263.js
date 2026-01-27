n.d(t, {
    A: () => l,
}),
    n(896048);
var r = n(867051),
    i = n(942269);

function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let o = "Note";
class s extends i.yW {
    getNote(e) {
        return this.database.get(e);
    }
    stateWrapper() {
        return this.database;
    }
    constructor(...e) {
        super(...e), a(this, "database", this.addKVDatabase("notes"));
    }
}
a(s, "displayName", "NoteStore");
let l = new s({
    CONNECTION_OPEN: (e, t) => t.clear(),
    OVERLAY_INITIALIZE: (e, t) => t.clear(),
    USER_NOTE_UPDATE: (e, t) => {
        t.set(
            e.id,
            (0, r.yE)(o, {
                loading: !1,
                note: e.note,
            }),
        );
    },
    USER_NOTE_LOAD_START: (e, t) => {
        t.set(
            e.userId,
            (0, r.yE)(o, {
                loading: !0,
                note: null,
            }),
        );
    },
});
