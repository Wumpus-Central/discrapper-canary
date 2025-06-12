n.r(t), n.d(t, { default: () => _ });
var r,
    i = n(442837),
    a = n(570140);
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
class d extends (r = i.ZP.Store) {
    getNote(e) {
        return s[e];
    }
}
o(d, 'displayName', 'NoteStore');
let _ = new d(a.Z, {
    CONNECTION_OPEN: l,
    OVERLAY_INITIALIZE: l,
    USER_NOTE_UPDATE: c,
    USER_NOTE_LOAD_START: u
});
