var i = r(47120);
var a = r(147913),
    o = r(594190),
    s = r(77498),
    l = r(454293);
function u(e, n, r) {
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
function c(e) {
    var n, r;
    let { game: i } = e,
        a = o.ZP.isDetectionEnabled(i),
        u = null !== (r = i.id) && void 0 !== r ? r : null === (n = s.Z.getGameByName(i.name)) || void 0 === n ? void 0 : n.id;
    null != u && (0, l.M)(u, a);
}
class d extends a.Z {
    constructor(...e) {
        super(...e),
            u(this, 'actions', {
                RUNNING_GAME_TOGGLE_DETECTION: c,
                RUNNING_GAME_DELETE_ENTRY: c
            });
    }
}
n.Z = new d();
