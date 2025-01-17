var i = r(47120);
var a = r(392711),
    s = r.n(a),
    o = r(51407),
    l = r(524437),
    u = r(433517),
    c = r(147913),
    d = r(254238),
    f = r(258609),
    _ = r(763296),
    h = r(314897),
    p = r(131951),
    m = r(709054),
    g = r(725380),
    E = r(340332),
    v = r(675478),
    I = r(65154);
function T(e, n, r) {
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
let b = 300,
    y = 2000,
    S = (e) => 'AudioContextSettingsMigrated:'.concat(e),
    A = (e) => (e === I.Yn.STREAM ? o.h.STREAM : o.h.USER);
function N(e, n, r) {
    return e[n].volume === A(r) && !e[n].muted && !e[n].soundboardMuted && delete e[n], e;
}
function C(e) {
    let n = m.default.entries(e),
        r = n.length;
    if (r <= b) return;
    let i = n.sort((e, n) => {
            let [r, { modifiedAt: i }] = e,
                [a, { modifiedAt: s }] = n;
            return Number(i) - Number(s);
        }),
        a = r - b;
    for (let n = 0; n < a; n++) {
        let [r] = i[n];
        delete e[r];
    }
}
function R(e) {
    return l.JY.create({
        muted: !1,
        volume: A(e)
    });
}
function O() {
    !u.K.get(S(h.default.getId())) &&
        v.hW.updateAsync(
            'audioContextSettings',
            (e) => {
                let n = !1;
                for (let [r, i] of Object.entries(p.Z.getState().settingsByContext)) {
                    let a = (0, E.z)(r);
                    if (null == a) continue;
                    let s = e[a],
                        o = String(Date.now()),
                        l = {};
                    for (let [e, n] of Object.entries(i.localMutes))
                        l[e] = {
                            muted: n,
                            volume: A(r),
                            modifiedAt: o,
                            soundboardMuted: !1
                        };
                    for (let [e, n] of Object.entries(i.localVolumes))
                        l[e] = {
                            muted: !1,
                            modifiedAt: o,
                            ...l[e],
                            volume: (0, E.r)(n, r)
                        };
                    let u = Object.keys(s).length;
                    for (let [e, [r, i]] of Object.entries(l).entries()) {
                        if (b - u - (e + 1) <= 0) break;
                        null == s[r] && ((n = !0), (s[r] = i));
                    }
                }
                return u.K.set(S(h.default.getId()), !0), n;
            },
            v.fy.AUTOMATED
        );
}
function D(e, n, r, i) {
    var a;
    let s = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
        o = (0, E.z)(r);
    if (null == o) return !1;
    let l = e[o];
    return (l[n] = null !== (a = l[n]) && void 0 !== a ? a : R(r)), i(l[n]), (l[n].modifiedAt = String(Date.now())), s && N(l, n, r), C(l), !0;
}
function L() {
    O();
}
let x = s().debounce(() => {
    U();
}, y);
function w(e, n, r) {
    (0, g.RF)(e, n, { volume: r }), x();
}
function P(e, n, r) {
    (0, g.RF)(e, n, { muted: r }), x.cancel(), U();
}
function M(e, n, r) {
    (0, g.RF)(e, n, { soundboardMuted: r }), x.cancel(), U();
}
let k = s().debounce(d.On, 500, { maxWait: 500 });
function U() {
    v.hW.updateAsync(
        'audioContextSettings',
        (e) => {
            let n = !1;
            return (
                (0, g.$E)((r, i, a) => {
                    let s = D(e, i, r, (e) => {
                        Object.assign(e, a);
                    });
                    n = n || s;
                }),
                n
            );
        },
        v.fy.INFREQUENT_USER_ACTION
    );
}
function B(e) {
    let { context: n, userId: r, volume: i } = e;
    if (r === h.default.getId()) return;
    let a = f.Z.getRemoteSessionId();
    null != a &&
        k(a, r, n, {
            muted: p.Z.isLocalMute(r, n),
            volume: i
        }),
        w(n, r, i);
}
function G(e) {
    let { context: n, userId: r } = e;
    r !== h.default.getId() && P(n, r, p.Z.isLocalMute(r, n));
}
function Z(e) {
    let { context: n, userId: r } = e;
    r !== h.default.getId() && M(n, r, _.Z.isLocalSoundboardMuted(r));
}
class F extends c.Z {
    constructor(...e) {
        super(...e),
            T(this, 'actions', {
                POST_CONNECTION_OPEN: L,
                AUDIO_SET_LOCAL_VOLUME: B,
                AUDIO_TOGGLE_LOCAL_MUTE: G,
                AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: Z
            });
    }
}
n.Z = new F();
