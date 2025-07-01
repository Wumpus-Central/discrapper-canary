n.d(t, { Z: () => c });
var r = n(710845),
    i = n(845856),
    a = n(894276);
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
let s = new r.Z('NoteStore');
class l extends i.fE {
    getNote(e) {
        return this.get(e);
    }
}
(o(l, 'displayName', 'NoteStore'), s.info('libdiscore enabled: '.concat(a.I.cachedIsEnabled())));
let c = new l(
    a.I.cachedIsEnabled()
        ? void 0
        : {
              CONNECTION_OPEN: (e, t) => t.reset(),
              OVERLAY_INITIALIZE: (e, t) => t.reset(),
              USER_NOTE_UPDATE: (e, t) => {
                  t.set(e.id, {
                      loading: !1,
                      note: e.note
                  });
              },
              USER_NOTE_LOAD_START: (e, t) => {
                  t.set(e.userId, {
                      loading: !0,
                      note: null
                  });
              }
          }
);
