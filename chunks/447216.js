"use strict";
n.d(t, { A: () => F });
var r = n(735438),
    i = n.n(r),
    a = n(947320),
    s = n(873298),
    o = n(506774),
    l = n(439372),
    u = n(108713),
    c = n(643501),
    d = n(209932),
    _ = n(961350),
    f = n(430452),
    p = n(661191),
    h = n(879172),
    m = n(409826),
    g = n(594061),
    E = n(731854);
let A = 300,
    I = 2e3,
    T = (e) => `AudioContextSettingsMigrated:${e}`,
    y = (e) => (e === E.x.STREAM ? a.i.STREAM : a.i.USER);
function S(e, t, n) {
    return e[t].volume !== y(n) || e[t].muted || e[t].soundboardMuted || delete e[t], e;
}
function v(e) {
    let t = p.default.entries(e),
        n = t.length;
    if (n <= A) return;
    let r = t.sort((e, t) => {
            let [n, { modifiedAt: r }] = e,
                [i, { modifiedAt: a }] = t;
            return Number(r) - Number(a);
        }),
        i = n - A;
    for (let t = 0; t < i; t++) {
        let [n] = r[t];
        delete e[n];
    }
}
function C(e) {
    return s.oP.create({ muted: !1, volume: y(e) });
}
function b() {
    o.w.get(T(_.default.getId())) ||
        g.wc.updateAsync(
            "audioContextSettings",
            (e) => {
                let t = !1;
                for (let [n, r] of Object.entries(f.A.getState().settingsByContext)) {
                    let i = (0, m.o)(n);
                    if (null == i) continue;
                    let a = e[i],
                        s = String(Date.now()),
                        o = {};
                    for (let [e, t] of Object.entries(r.localMutes))
                        o[e] = { muted: t, volume: y(n), modifiedAt: s, soundboardMuted: !1 };
                    for (let [e, t] of Object.entries(r.localVolumes))
                        o[e] = { muted: !1, modifiedAt: s, ...o[e], volume: (0, m.z)(t, n) };
                    let l = Object.keys(a).length;
                    for (let [e, [n, r]] of Object.entries(o).entries()) {
                        if (A - l - (e + 1) <= 0) break;
                        null == a[n] && ((t = !0), (a[n] = r));
                    }
                }
                return o.w.set(T(_.default.getId()), !0), t;
            },
            g.Sb.AUTOMATED,
        );
}
function N(e, t, n, r) {
    let i = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
        a = (0, m.o)(n);
    if (null == a) return !1;
    let s = e[a];
    return (s[t] = s[t] ?? C(n)), r(s[t]), (s[t].modifiedAt = String(Date.now())), i && S(s, t, n), v(s), !0;
}
function R() {
    b();
}
let O = i().debounce(() => {
    P();
}, I);
function D(e, t, n) {
    (0, h.gq)(e, t, { volume: n }), O();
}
function L(e, t, n) {
    (0, h.gq)(e, t, { muted: n }), O.cancel(), P();
}
function w(e, t, n) {
    (0, h.gq)(e, t, { soundboardMuted: n }), O.cancel(), P();
}
let x = i().debounce(u.VR, 500, { maxWait: 500 });
function P() {
    g.wc.updateAsync(
        "audioContextSettings",
        (e) => {
            let t = !1;
            return (
                (0, h.rQ)((n, r, i) => {
                    let a = N(e, r, n, (e) => {
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
function M(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === _.default.getId()) return;
    let i = c.default.getRemoteSessionId();
    null != i && x(i, n, t, { muted: f.A.isLocalMute(n, t), volume: r }), D(t, n, r);
}
function k(e) {
    let { context: t, userId: n } = e;
    n !== _.default.getId() && L(t, n, f.A.isLocalMute(n, t));
}
function U(e) {
    let { context: t, userId: n } = e;
    n !== _.default.getId() && w(t, n, d.A.isLocalSoundboardMuted(n));
}
function G(e) {
    let {} = e;
    g.wc.updateAsync(
        "audioContextSettings",
        (e) => {
            (e.user = {}), (e.stream = {});
        },
        g.Sb.INFREQUENT_USER_ACTION,
    );
}
class V extends l.A {
    actions = {
        POST_CONNECTION_OPEN: R,
        AUDIO_SET_LOCAL_VOLUME: M,
        AUDIO_TOGGLE_LOCAL_MUTE: k,
        AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: U,
        MEDIA_ENGINE_RESET_SETTINGS: G,
    };
}
let F = new V();
