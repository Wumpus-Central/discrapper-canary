n.d(t, { Z: () => H }), n(388685), n(642613);
var r = n(392711),
    i = n.n(r),
    a = n(51407),
    o = n(524437),
    s = n(433517),
    l = n(147913),
    c = n(254238),
    u = n(258609),
    d = n(763296),
    f = n(314897),
    p = n(131951),
    _ = n(709054),
    m = n(725380),
    h = n(340332),
    g = n(675478),
    E = n(65154);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
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
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let S = 300,
    I = 2000,
    T = (e) => "AudioContextSettingsMigrated:".concat(e),
    A = (e) => (e === E.Yn.STREAM ? a.h.STREAM : a.h.USER);
function C(e, t, n) {
    return e[t].volume !== A(n) || e[t].muted || e[t].soundboardMuted || delete e[t], e;
}
function N(e) {
    let t = _.default.entries(e),
        n = t.length;
    if (n <= S) return;
    let r = t.sort((e, t) => {
            let [n, { modifiedAt: r }] = e,
                [i, { modifiedAt: a }] = t;
            return Number(r) - Number(a);
        }),
        i = n - S;
    for (let t = 0; t < i; t++) {
        let [n] = r[t];
        delete e[n];
    }
}
function P(e) {
    return o.JY.create({
        muted: !1,
        volume: A(e),
    });
}
function R() {
    s.K.get(T(f.default.getId())) ||
        g.hW.updateAsync(
            "audioContextSettings",
            (e) => {
                let t = !1;
                for (let [n, r] of Object.entries(p.Z.getState().settingsByContext)) {
                    let i = (0, h.z)(n);
                    if (null == i) continue;
                    let a = e[i],
                        o = String(Date.now()),
                        s = {};
                    for (let [e, t] of Object.entries(r.localMutes))
                        s[e] = {
                            muted: t,
                            volume: A(n),
                            modifiedAt: o,
                            soundboardMuted: !1,
                        };
                    for (let [e, t] of Object.entries(r.localVolumes))
                        s[e] = v(
                            y(
                                {
                                    muted: !1,
                                    modifiedAt: o,
                                },
                                s[e],
                            ),
                            { volume: (0, h.r)(t, n) },
                        );
                    let l = Object.keys(a).length;
                    for (let [e, [n, r]] of Object.entries(s).entries()) {
                        if (S - l - (e + 1) <= 0) break;
                        null == a[n] && ((t = !0), (a[n] = r));
                    }
                }
                return s.K.set(T(f.default.getId()), !0), t;
            },
            g.fy.AUTOMATED,
        );
}
function D(e, t, n, r) {
    var i;
    let a = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
        o = (0, h.z)(n);
    if (null == o) return !1;
    let s = e[o];
    return (
        (s[t] = null != (i = s[t]) ? i : P(n)),
        r(s[t]),
        (s[t].modifiedAt = String(Date.now())),
        a && C(s, t, n),
        N(s),
        !0
    );
}
function w() {
    R();
}
let x = i().debounce(() => {
    U();
}, I);
function L(e, t, n) {
    (0, m.RF)(e, t, { volume: n }), x();
}
function j(e, t, n) {
    (0, m.RF)(e, t, { muted: n }), x.cancel(), U();
}
function M(e, t, n) {
    (0, m.RF)(e, t, { soundboardMuted: n }), x.cancel(), U();
}
let k = i().debounce(c.On, 500, { maxWait: 500 });
function U() {
    g.hW.updateAsync(
        "audioContextSettings",
        (e) => {
            let t = !1;
            return (
                (0, m.$E)((n, r, i) => {
                    let a = D(e, r, n, (e) => {
                        Object.assign(e, i);
                    });
                    t = t || a;
                }),
                t
            );
        },
        g.fy.INFREQUENT_USER_ACTION,
    );
}
function G(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === f.default.getId()) return;
    let i = u.default.getRemoteSessionId();
    null != i &&
        k(i, n, t, {
            muted: p.Z.isLocalMute(n, t),
            volume: r,
        }),
        L(t, n, r);
}
function Z(e) {
    let { context: t, userId: n } = e;
    n !== f.default.getId() && j(t, n, p.Z.isLocalMute(n, t));
}
function B(e) {
    let { context: t, userId: n } = e;
    n !== f.default.getId() && M(t, n, d.Z.isLocalSoundboardMuted(n));
}
function F(e) {
    let {} = e;
    g.hW.updateAsync(
        "audioContextSettings",
        (e) => {
            (e.user = {}), (e.stream = {});
        },
        g.fy.INFREQUENT_USER_ACTION,
    );
}
class V extends l.Z {
    constructor(...e) {
        super(...e),
            b(this, "actions", {
                POST_CONNECTION_OPEN: w,
                AUDIO_SET_LOCAL_VOLUME: G,
                AUDIO_TOGGLE_LOCAL_MUTE: Z,
                AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: B,
                MEDIA_ENGINE_RESET_SETTINGS: F,
            });
    }
}
let H = new V();
