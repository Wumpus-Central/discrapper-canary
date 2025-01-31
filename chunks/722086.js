n.d(t, { Z: () => _ });
var i,
    r = n(442837),
    a = n(570140);
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
let o = {};
function l() {
    o = {};
}
function u(e) {
    o[e.id] = {
        loading: !1,
        note: e.note
    };
}
function c(e) {
    let { userId: t } = e;
    o[t] = {
        loading: !0,
        note: null
    };
}
function d(e) {
    let { userId: t, note: n } = e;
    o[t] = {
        loading: !1,
        note: null == n ? void 0 : n.note
    };
}
class f extends (i = r.ZP.Store) {
    getNote(e) {
        return o[e];
    }
}
s(f, 'displayName', 'NoteStore');
let _ = new f(a.Z, {
    CONNECTION_OPEN: l,
    OVERLAY_INITIALIZE: l,
    USER_NOTE_UPDATE: u,
    USER_NOTE_LOAD_START: c,
    USER_NOTE_LOADED: d
});
