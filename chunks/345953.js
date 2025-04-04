n.d(t, { Z: () => Z }), n(47120), n(230036);
var r = n(392711),
    i = n.n(r),
    o = n(51407),
    a = n(524437),
    s = n(433517),
    l = n(147913),
    c = n(254238),
    u = n(258609),
    d = n(763296),
    f = n(314897),
    _ = n(131951),
    p = n(709054),
    h = n(725380),
    m = n(340332),
    g = n(675478),
    E = n(65154);
function b(e, t, n) {
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
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                b(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let I = 300,
    S = 2000,
    T = (e) => 'AudioContextSettingsMigrated:'.concat(e),
    N = (e) => (e === E.Yn.STREAM ? o.h.STREAM : o.h.USER);
function A(e, t, n) {
    return e[t].volume !== N(n) || e[t].muted || e[t].soundboardMuted || delete e[t], e;
}
function C(e) {
    let t = p.default.entries(e),
        n = t.length;
    if (n <= I) return;
    let r = t.sort((e, t) => {
            let [n, { modifiedAt: r }] = e,
                [i, { modifiedAt: o }] = t;
            return Number(r) - Number(o);
        }),
        i = n - I;
    for (let t = 0; t < i; t++) {
        let [n] = r[t];
        delete e[n];
    }
}
function R(e) {
    return a.JY.create({
        muted: !1,
        volume: N(e)
    });
}
function P() {
    s.K.get(T(f.default.getId())) ||
        g.hW.updateAsync(
            'audioContextSettings',
            (e) => {
                let t = !1;
                for (let [n, r] of Object.entries(_.Z.getState().settingsByContext)) {
                    let i = (0, m.z)(n);
                    if (null == i) continue;
                    let o = e[i],
                        a = String(Date.now()),
                        s = {};
                    for (let [e, t] of Object.entries(r.localMutes))
                        s[e] = {
                            muted: t,
                            volume: N(n),
                            modifiedAt: a,
                            soundboardMuted: !1
                        };
                    for (let [e, t] of Object.entries(r.localVolumes))
                        s[e] = O(
                            y(
                                {
                                    muted: !1,
                                    modifiedAt: a
                                },
                                s[e]
                            ),
                            { volume: (0, m.r)(t, n) }
                        );
                    let l = Object.keys(o).length;
                    for (let [e, [n, r]] of Object.entries(s).entries()) {
                        if (I - l - (e + 1) <= 0) break;
                        null == o[n] && ((t = !0), (o[n] = r));
                    }
                }
                return s.K.set(T(f.default.getId()), !0), t;
            },
            g.fy.AUTOMATED
        );
}
function w(e, t, n, r) {
    var i;
    let o = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
        a = (0, m.z)(n);
    if (null == a) return !1;
    let s = e[a];
    return (s[t] = null != (i = s[t]) ? i : R(n)), r(s[t]), (s[t].modifiedAt = String(Date.now())), o && A(s, t, n), C(s), !0;
}
function D() {
    P();
}
let L = i().debounce(() => {
    U();
}, S);
function x(e, t, n) {
    (0, h.RF)(e, t, { volume: n }), L();
}
function M(e, t, n) {
    (0, h.RF)(e, t, { muted: n }), L.cancel(), U();
}
function k(e, t, n) {
    (0, h.RF)(e, t, { soundboardMuted: n }), L.cancel(), U();
}
let j = i().debounce(c.On, 500, { maxWait: 500 });
function U() {
    g.hW.updateAsync(
        'audioContextSettings',
        (e) => {
            let t = !1;
            return (
                (0, h.$E)((n, r, i) => {
                    let o = w(e, r, n, (e) => {
                        Object.assign(e, i);
                    });
                    t = t || o;
                }),
                t
            );
        },
        g.fy.INFREQUENT_USER_ACTION
    );
}
function G(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === f.default.getId()) return;
    let i = u.Z.getRemoteSessionId();
    null != i &&
        j(i, n, t, {
            muted: _.Z.isLocalMute(n, t),
            volume: r
        }),
        x(t, n, r);
}
function B(e) {
    let { context: t, userId: n } = e;
    n !== f.default.getId() && M(t, n, _.Z.isLocalMute(n, t));
}
function F(e) {
    let { context: t, userId: n } = e;
    n !== f.default.getId() && k(t, n, d.Z.isLocalSoundboardMuted(n));
}
class V extends l.Z {
    constructor(...e) {
        super(...e),
            b(this, 'actions', {
                POST_CONNECTION_OPEN: D,
                AUDIO_SET_LOCAL_VOLUME: G,
                AUDIO_TOGGLE_LOCAL_MUTE: B,
                AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: F
            });
    }
}
let Z = new V();
