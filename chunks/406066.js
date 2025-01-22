var i,
    a = r(653041);
var o = r(47120);
var s = r(348327),
    l = r.n(s),
    u = r(442837),
    c = r(570140);
function d(e, n, r) {
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
let f = [r(742738).Z],
    p = [];
function h() {
    let e = [];
    for (let n of f) {
        let r = n.getActivity();
        null != r && e.push(r);
    }
    return !l()(e, p) && ((p = e), !0);
}
class _ extends (i = u.ZP.Store) {
    initialize() {
        this.syncWith(f, h);
    }
    getActivities() {
        return p;
    }
}
d(_, 'displayName', 'FirstPartyRichPresenceStore'), (n.Z = new _(c.Z));
