var i = r(47120);
var a = r(355467),
    o = r(147913),
    s = r(400407);
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
        super(...e),
            l(this, 'actions', {
                POST_CONNECTION_OPEN: () => {
                    let { enabled: e } = s.A.getCurrentConfig({ location: 'cd74f0_1' }, { autoTrackExposure: !1 });
                    e && (0, a.B$)();
                }
            });
    }
}
n.Z = new u();
