n.d(t, {
    A: () => c,
}),
    n(896048);
var r = n(867051),
    i = n(548965),
    a = n(942269);

function o(e, t, n) {
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
let s = "Note";
class l extends a.yW {
    getNote(e) {
        return this.database.get(e);
    }
    stateWrapper() {
        return this.database;
    }
    constructor(...e) {
        super(...e), o(this, "database", this.addKVDatabase("notes"));
    }
}
o(l, "displayName", "NoteStore");
let c = new l(
    {
        CONNECTION_OPEN: (e, t) => t.clear(),
        OVERLAY_INITIALIZE: (e, t) => t.clear(),
        USER_NOTE_UPDATE: (e, t) => {
            t.set(
                e.id,
                (0, r.yE)(s, {
                    loading: !1,
                    note: e.note,
                }),
            );
        },
        USER_NOTE_LOAD_START: (e, t) => {
            t.set(
                e.userId,
                (0, r.yE)(s, {
                    loading: !0,
                    note: null,
                }),
            );
        },
    },
    i.P4.getCachedBridgedStoreMode(),
);
