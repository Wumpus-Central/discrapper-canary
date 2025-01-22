var i = r(47120);
var a = r(392711),
    o = r.n(a),
    s = r(846519),
    l = r(147913),
    u = r(314897),
    c = r(70956),
    d = r(557177),
    f = r(697492),
    p = r(37091),
    h = r(721264);
function _(e, n, r) {
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
let m = 15 * c.Z.Millis.SECOND,
    g = 15 * c.Z.Millis.SECOND,
    E = 550,
    v = ['\uD83C\uDDE9', '\uD83C\uDDF4', '\uD83C\uDDF9', '\uD83C\uDDE6'],
    y = v.length,
    b = function (e, n) {
        let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return ''.concat(e, ':').concat(n, ':').concat(r);
    },
    I = new s.V7(),
    T = [],
    S = {},
    A = (0, d.tu)('highfive_whistle', 'highfive_whistle', 0.6),
    C = (0, d.tu)('highfive_clap', 'highfive_clap', 0.6);
function N(e) {
    let { emoji: n, channelId: r, userId: i } = e,
        a = u.default.getId(),
        s = p.Z.getEnabled();
    if (null != n) {
        if (s && (0, h.Z)(n.name)) return O(n.name, i, r);
        i === a && ((T = [...T, n.name].slice(-1 * y)), o().isEqual(T, v) ? (A.play(), I.stop(), (T = []), (0, f.ME)(!s)) : I.start(m, () => (T = [])));
    }
}
function R(e) {
    let { completingUserId: n, waitingUserId: r, channelId: i } = e,
        a = b(''.concat(n).concat(r), i, !0);
    (S[a] = new s.sW(E, () => {
        delete S[a], (0, f.hu)(n, r, i);
    })),
        S[a].delay();
}
function O(e, n, r) {
    var i;
    let a = b(n, r);
    if (null != p.Z.getWaitingHighFive(r, n)) return;
    let [o, l] =
        null !==
            (i = Object.entries(S).find((e) => {
                let [n] = e;
                return n !== a;
            })) && void 0 !== i
            ? i
            : [];
    if (null != o && null != l) l.cancel(), C.play(), delete S[o], (0, f.Ym)(o.split(':')[0], n, r, e);
    else {
        (0, f._g)(e, n, r), A.play();
        let i = new s.sW(g, () => {
            delete S[n], (0, f.Gd)(n, r);
        });
        (S[n] = i), i.delay();
    }
}
class D extends l.Z {
    _terminate() {
        Object.values(S).forEach((e) => e.cancel()), (S = {});
    }
    constructor(...e) {
        super(...e),
            _(this, 'actions', {
                VOICE_CHANNEL_EFFECT_SEND: N,
                HIGH_FIVE_COMPLETE: R
            });
    }
}
n.Z = new D();
