n.r(t), n.d(t, { default: () => f }), n(49124);
var r,
    i = n(442837),
    o = n(668757),
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
let l = (0, o.I3)();
function c(e) {
    l.handleAction(JSON.stringify(e));
}
function u(e) {
    l.handleReset();
}
class d extends (r = i.ZP.Store) {
    getNote(e) {
        return l.getNote(e);
    }
}
s(d, 'displayName', 'NoteStore');
let f = new d(a.Z, {
    CONNECTION_OPEN: u,
    OVERLAY_INITIALIZE: u,
    USER_NOTE_UPDATE: c,
    USER_NOTE_LOAD_START: c
});
