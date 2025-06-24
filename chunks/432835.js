n.d(t, { Z: () => u });
var r = n(259443),
    i = n(570140),
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
let l = new r.Yd('NoteStore');
class c extends a.f {
    getNote(e) {
        var t;
        return null != (t = this.kv[e]) ? t : null;
    }
}
s(c, 'displayName', 'NoteStore'), l.info('libdiscore enabled: '.concat(o.I.cachedIsEnabled()));
let u = new c(
    i.Z,
    o.I.cachedIsEnabled()
        ? void 0
        : (e) => ({
              CONNECTION_OPEN: () => e.reset(),
              OVERLAY_INITIALIZE: () => e.reset(),
              USER_NOTE_UPDATE: (t) => {
                  e.set(t.id, {
                      loading: !1,
                      note: t.note
                  });
              },
              USER_NOTE_LOAD_START: (t) => {
                  e.set(t.userId, {
                      loading: !0,
                      note: null
                  });
              }
          })
);
