var i = r(47120);
var a = r(570140),
    o = r(147913),
    s = r(885110);
function l(e, n, r) {
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
class u extends o.Z {
    constructor(...e) {
        super(...e), l(this, 'stores', new Map().set(s.Z, c));
    }
}
function c() {
    a.Z.dispatch({
        type: 'SELF_PRESENCE_STORE_UPDATE',
        status: s.Z.getStatus(),
        activities: s.Z.getActivities()
    });
}
n.Z = new u();
