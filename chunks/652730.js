n.d(t, { Z: () => f });
var r,
    i = n(442837),
    a = n(570140),
    o = n(41776);
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
let l = null,
    c = null;
function u() {
    let e = o.Z.mostRecentLurkedGuildId();
    null != e ? ((l = e), (c = null)) : ((c = null != l ? l : null), (l = null));
}
class d extends (r = i.ZP.Store) {
    initialize() {
        this.syncWith([o.Z], u);
    }
    shouldShowPopout(e) {
        return c === e;
    }
}
s(d, 'displayName', 'LurkerModePopoutStore');
let f = new d(a.Z);
