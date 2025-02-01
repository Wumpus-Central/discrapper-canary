n.d(t, { Z: () => c }), n(47120);
var i = n(147913),
    r = n(594190),
    a = n(77498),
    s = n(454293);
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
function l(e) {
    var t, n;
    let { game: i } = e,
        o = r.ZP.isDetectionEnabled(i),
        l = null !== (n = i.id) && void 0 !== n ? n : null === (t = a.Z.getGameByName(i.name)) || void 0 === t ? void 0 : t.id;
    null != l && (0, s.M)(l, o);
}
class u extends i.Z {
    constructor(...e) {
        super(...e),
            o(this, 'actions', {
                RUNNING_GAME_TOGGLE_DETECTION: l,
                RUNNING_GAME_DELETE_ENTRY: l
            });
    }
}
let c = new u();
