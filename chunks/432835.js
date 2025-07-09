n.d(t, { Z: () => d });
var r = n(311929),
    i = n(710845),
    a = n(845856),
    o = n(894276);
function s(e, t, n) {
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
let l = new i.Z('NoteStore'),
    c = 'Note';
class u extends a.fE {
    getNote(e) {
        return this.get(e);
    }
}
(s(u, 'displayName', 'NoteStore'), l.info('libdiscore enabled: '.concat(o.I.cachedIsEnabled())));
let d = new u(
    o.I.cachedIsEnabled()
        ? void 0
        : {
              CONNECTION_OPEN: (e, t) => t.reset(),
              OVERLAY_INITIALIZE: (e, t) => t.reset(),
              USER_NOTE_UPDATE: (e, t) => {
                  t.set(
                      e.id,
                      (0, r.bk)(c, {
                          loading: !1,
                          note: e.note
                      })
                  );
              },
              USER_NOTE_LOAD_START: (e, t) => {
                  t.set(
                      e.userId,
                      (0, r.bk)(c, {
                          loading: !0,
                          note: null
                      })
                  );
              }
          }
);
