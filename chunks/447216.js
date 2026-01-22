n.d(t, { A: () => Y }), n(896048), n(638769);
var r = n(735438),
    i = n.n(r),
    a = n(947320),
    s = n(873298),
    o = n(506774),
    l = n(439372),
    c = n(108713),
    u = n(643501),
    d = n(209932),
    f = n(961350),
    p = n(430452),
    _ = n(661191),
    h = n(879172),
    m = n(409826),
    g = n(594061),
    E = n(731854);
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
function A(e, t) {
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
let v = 300,
    S = 2000,
    I = (e) => "AudioContextSettingsMigrated:".concat(e),
    T = (e) => (e === E.x.STREAM ? a.i.STREAM : a.i.USER);
function C(e, t, n) {
    return e[t].volume !== T(n) || e[t].muted || e[t].soundboardMuted || delete e[t], e;
}
function N(e) {
    let t = _.default.entries(e),
        n = t.length;
    if (n <= v) return;
    let r = t.sort((e, t) => {
            let [n, { modifiedAt: r }] = e,
                [i, { modifiedAt: a }] = t;
            return Number(r) - Number(a);
        }),
        i = n - v;
    for (let t = 0; t < i; t++) {
        let [n] = r[t];
        delete e[n];
    }
}
function R(e) {
    return s.oP.create({
        muted: !1,
        volume: T(e),
    });
}
function w() {
    o.w.get(I(f.default.getId())) ||
        g.wc.updateAsync(
            "audioContextSettings",
            (e) => {
                let t = !1;
                for (let [n, r] of Object.entries(p.A.getState().settingsByContext)) {
                    let i = (0, m.o)(n);
                    if (null == i) continue;
                    let a = e[i],
                        s = String(Date.now()),
                        o = {};
                    for (let [e, t] of Object.entries(r.localMutes))
                        o[e] = {
                            muted: t,
                            volume: T(n),
                            modifiedAt: s,
                            soundboardMuted: !1,
                        };
                    for (let [e, t] of Object.entries(r.localVolumes))
                        o[e] = A(
                            y(
                                {
                                    muted: !1,
                                    modifiedAt: s,
                                },
                                o[e],
                            ),
                            { volume: (0, m.z)(t, n) },
                        );
                    let l = Object.keys(a).length;
                    for (let [e, [n, r]] of Object.entries(o).entries()) {
                        if (v - l - (e + 1) <= 0) break;
                        null == a[n] && ((t = !0), (a[n] = r));
                    }
                }
                return o.w.set(I(f.default.getId()), !0), t;
            },
            g.Sb.AUTOMATED,
        );
}
function P(e, t, n, r) {
    var i;
    let a = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
        s = (0, m.o)(n);
    if (null == s) return !1;
    let o = e[s];
    return (
        (o[t] = null != (i = o[t]) ? i : R(n)),
        r(o[t]),
        (o[t].modifiedAt = String(Date.now())),
        a && C(o, t, n),
        N(o),
        !0
    );
}
function D() {
    w();
}
let x = i().debounce(() => {
    U();
}, S);
function L(e, t, n) {
    (0, h.gq)(e, t, { volume: n }), x();
}
function j(e, t, n) {
    (0, h.gq)(e, t, { muted: n }), x.cancel(), U();
}
function M(e, t, n) {
    (0, h.gq)(e, t, { soundboardMuted: n }), x.cancel(), U();
}
let k = i().debounce(c.VR, 500, { maxWait: 500 });
function U() {
    g.wc.updateAsync(
        "audioContextSettings",
        (e) => {
            let t = !1;
            return (
                (0, h.rQ)((n, r, i) => {
                    let a = P(e, r, n, (e) => {
                        Object.assign(e, i);
                    });
                    t = t || a;
                }),
                t
            );
        },
        g.Sb.INFREQUENT_USER_ACTION,
    );
}
function G(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === f.default.getId()) return;
    let i = u.default.getRemoteSessionId();
    null != i &&
        k(i, n, t, {
            muted: p.A.isLocalMute(n, t),
            volume: r,
        }),
        L(t, n, r);
}
function V(e) {
    let { context: t, userId: n } = e;
    n !== f.default.getId() && j(t, n, p.A.isLocalMute(n, t));
}
function F(e) {
    let { context: t, userId: n } = e;
    n !== f.default.getId() && M(t, n, d.A.isLocalSoundboardMuted(n));
}
function B(e) {
    let {} = e;
    g.wc.updateAsync(
        "audioContextSettings",
        (e) => {
            (e.user = {}), (e.stream = {});
        },
        g.Sb.INFREQUENT_USER_ACTION,
    );
}
class H extends l.A {
    constructor(...e) {
        super(...e),
            b(this, "actions", {
                POST_CONNECTION_OPEN: D,
                AUDIO_SET_LOCAL_VOLUME: G,
                AUDIO_TOGGLE_LOCAL_MUTE: V,
                AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: F,
                MEDIA_ENGINE_RESET_SETTINGS: B,
            });
    }
}
let Y = new H();
