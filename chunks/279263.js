n.d(t, { A: () => l });
var r = n(867051),
    i = n(23974);
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
let s = "Note";
class o extends i.f {
    getNote(e) {
        return this.get(e);
    }
}
a(o, "displayName", "NoteStore");
let l = new o(
    {
        CONNECTION_OPEN: (e, t) => t.reset(),
        OVERLAY_INITIALIZE: (e, t) => t.reset(),
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
    "libdiscore",
);
