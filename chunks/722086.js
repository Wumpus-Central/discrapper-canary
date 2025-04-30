n.d(t, { Z: () => _ });
var r,
    i = n(442837),
    o = n(570140);
function a(e, t, n) {
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
let s = {};
function l() {
    s = {};
}
function c(e) {
    s[e.id] = {
        loading: !1,
        note: e.note
    };
}
function u(e) {
    let { userId: t } = e;
    s[t] = {
        loading: !0,
        note: null
    };
}
function d(e) {
    let { userId: t, note: n } = e;
    s[t] = {
        loading: !1,
        note: null == n ? void 0 : n.note
    };
}
class f extends (r = i.ZP.Store) {
    getNote(e) {
        return s[e];
    }
}
a(f, 'displayName', 'NoteStore');
let _ = new f(o.Z, {
    CONNECTION_OPEN: l,
    OVERLAY_INITIALIZE: l,
    USER_NOTE_UPDATE: c,
    USER_NOTE_LOAD_START: u,
    USER_NOTE_LOADED: d
});
