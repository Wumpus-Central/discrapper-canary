n.d(t, { Z: () => l }), n(47120);
var i = n(355467),
    r = n(147913),
    a = n(400407);
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
class o extends r.Z {
    constructor(...e) {
        super(...e),
            s(this, 'actions', {
                POST_CONNECTION_OPEN: () => {
                    let { enabled: e } = a.A.getCurrentConfig({ location: 'cd74f0_1' }, { autoTrackExposure: !1 });
                    e && (0, i.B$)();
                }
            });
    }
}
let l = new o();
