var i,
    a = r(442837),
    o = r(570140);
function s(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let l = {};
function u() {
    l = {};
}
function c(e) {
    l[e.id] = {
        loading: !1,
        note: e.note
    };
}
function d(e) {
    let { userId: n } = e;
    l[n] = {
        loading: !0,
        note: null
    };
}
function f(e) {
    let { userId: n, note: r } = e;
    l[n] = {
        loading: !1,
        note: null == r ? void 0 : r.note
    };
}
class p extends (i = a.ZP.Store) {
    getNote(e) {
        return l[e];
    }
}
s(p, 'displayName', 'NoteStore'),
    (n.Z = new p(o.Z, {
        CONNECTION_OPEN: u,
        OVERLAY_INITIALIZE: u,
        USER_NOTE_UPDATE: c,
        USER_NOTE_LOAD_START: d,
        USER_NOTE_LOADED: f
    }));
