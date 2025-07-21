n.d(t, { Z: () => c });
var r = n(311929),
    i = n(894276),
    a = n(516888);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let s = 'Note';
class l extends a.fE {
    getNote(e) {
        return this.get(e);
    }
}
o(l, 'displayName', 'NoteStore');
let c = new l(
    {
        CONNECTION_OPEN: (e, t) => t.reset(),
        OVERLAY_INITIALIZE: (e, t) => t.reset(),
        USER_NOTE_UPDATE: (e, t) => {
            t.set(
                e.id,
                (0, r.bk)(s, {
                    loading: !1,
                    note: e.note
                })
            );
        },
        USER_NOTE_LOAD_START: (e, t) => {
            t.set(
                e.userId,
                (0, r.bk)(s, {
                    loading: !0,
                    note: null
                })
            );
        }
    },
    i.IZ.getCachedKvStoreMode()
);
