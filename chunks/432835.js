n.d(t, { Z: () => l });
var r = n(311929),
    i = n(516888);
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
class s extends i.f {
    getNote(e) {
        return this.get(e);
    }
}
a(s, "displayName", "NoteStore");
let l = new s(
    {
        CONNECTION_OPEN: (e, t) => t.reset(),
        OVERLAY_INITIALIZE: (e, t) => t.reset(),
        USER_NOTE_UPDATE: (e, t) => {
            t.set(
                e.id,
                (0, r.bk)(o, {
                    loading: !1,
                    note: e.note,
                }),
            );
        },
        USER_NOTE_LOAD_START: (e, t) => {
            t.set(
                e.userId,
                (0, r.bk)(o, {
                    loading: !0,
                    note: null,
                }),
            );
        },
    },
    "libdiscore",
);
