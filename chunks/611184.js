n.d(t, { Z: () => u }), n(47120);
var r = n(147913),
    i = n(594190),
    o = n(77498),
    a = n(454293);
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
function l(e) {
    var t, n;
    let { game: r } = e,
        s = i.ZP.isDetectionEnabled(r),
        l = null != (n = r.id) ? n : null == (t = o.Z.getGameByName(r.name)) ? void 0 : t.id;
    null != l && (0, a.M)(l, s);
}
class c extends r.Z {
    constructor(...e) {
        super(...e),
            s(this, 'actions', {
                RUNNING_GAME_TOGGLE_DETECTION: l,
                RUNNING_GAME_DELETE_ENTRY: l
            });
    }
}
let u = new c();
