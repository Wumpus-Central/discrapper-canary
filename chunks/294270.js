n.d(t, { Z: () => R }), n(388685), n(35282);
var r = n(392711),
    i = n.n(r),
    a = n(846519),
    o = n(147913),
    s = n(460181),
    l = n(314897),
    c = n(70956),
    u = n(697492),
    d = n(37091),
    f = n(721264);
function _(e, t, n) {
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
let p = 15 * c.Z.Millis.SECOND,
    h = 15 * c.Z.Millis.SECOND,
    m = 550,
    g = ['\uD83C\uDDE9', '\uD83C\uDDF4', '\uD83C\uDDF9', '\uD83C\uDDE6'],
    E = g.length,
    b = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return ''.concat(e, ':').concat(t, ':').concat(n);
    },
    y = new a.V7(),
    O = [],
    v = {},
    I = (0, s.tu)('highfive_whistle', 'highfive_whistle', 0.6),
    S = (0, s.tu)('highfive_clap', 'highfive_clap', 0.6);
function T(e) {
    let { emoji: t, channelId: n, userId: r } = e,
        a = l.default.getId(),
        o = d.Z.getEnabled();
    if (null != t) {
        if (o && (0, f.Z)(t.name)) return N(t.name, r, n);
        r === a && ((O = [...O, t.name].slice(-1 * E)), i().isEqual(O, g) ? (I.play(), y.stop(), (O = []), (0, u.ME)(!o)) : y.start(p, () => (O = [])));
    }
}
function A(e) {
    let { completingUserId: t, waitingUserId: n, channelId: r } = e,
        i = b(''.concat(t).concat(n), r, !0);
    (v[i] = new a.sW(m, () => {
        delete v[i], (0, u.hu)(t, n, r);
    })),
        v[i].delay();
}
function N(e, t, n) {
    var r;
    let i = b(t, n);
    if (null != d.Z.getWaitingHighFive(n, t)) return;
    let [o, s] =
        null !=
        (r = Object.entries(v).find((e) => {
            let [t] = e;
            return t !== i;
        }))
            ? r
            : [];
    if (null != o && null != s) s.cancel(), S.play(), delete v[o], (0, u.Ym)(o.split(':')[0], t, n, e);
    else {
        (0, u._g)(e, t, n), I.play();
        let r = new a.sW(h, () => {
            delete v[t], (0, u.Gd)(t, n);
        });
        (v[t] = r), r.delay();
    }
}
class C extends o.Z {
    _terminate() {
        Object.values(v).forEach((e) => e.cancel()), (v = {});
    }
    constructor(...e) {
        super(...e),
            _(this, 'actions', {
                VOICE_CHANNEL_EFFECT_SEND: T,
                HIGH_FIVE_COMPLETE: A
            });
    }
}
let R = new C();
