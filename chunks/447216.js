"use strict";
n.d(t, { A: () => B });
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
    h = n(661191),
    p = n(879172),
    g = n(409826),
    E = n(594061),
    A = n(731854);
let I = 300,
    T = 2e3,
    y = (e) => `AudioContextSettingsMigrated:${e}`,
    S = (e) => (e === A.x.STREAM ? a.i.STREAM : a.i.USER);
function v(e, t, n) {
    return e[t].volume !== S(n) || e[t].muted || e[t].soundboardMuted || delete e[t], e;
}
function C(e) {
    let t = h.default.entries(e),
        n = t.length;
    if (n <= I) return;
    let r = t.sort((e, t) => {
            let [n, { modifiedAt: r }] = e,
                [i, { modifiedAt: a }] = t;
            return Number(r) - Number(a);
        }),
        i = n - I;
    for (let t = 0; t < i; t++) {
        let [n] = r[t];
        delete e[n];
    }
}
function b(e) {
    return s.oP.create({ muted: !1, volume: S(e) });
}
function N() {
    o.w.get(y(_.default.getId())) ||
        E.wc.updateAsync(
            "audioContextSettings",
            (e) => {
                let t = !1;
                for (let [n, r] of Object.entries(f.Ay.getState().settingsByContext)) {
                    let i = (0, g.o)(n);
                    if (null == i) continue;
                    let a = e[i],
                        s = String(Date.now()),
                        o = {};
                    for (let [e, t] of Object.entries(r.localMutes))
                        o[e] = { muted: t, volume: S(n), modifiedAt: s, soundboardMuted: !1 };
                    for (let [e, t] of Object.entries(r.localVolumes))
                        o[e] = { muted: !1, modifiedAt: s, ...o[e], volume: (0, g.z)(t, n) };
                    let l = Object.keys(a).length;
                    for (let [e, [n, r]] of Object.entries(o).entries()) {
                        if (I - l - (e + 1) <= 0) break;
                        null == a[n] && ((t = !0), (a[n] = r));
                    }
                }
                return o.w.set(y(_.default.getId()), !0), t;
            },
            E.Sb.AUTOMATED,
        );
}
function R(e, t, n, r) {
    let i = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
        a = (0, g.o)(n);
    if (null == a) return !1;
    let s = e[a];
    return (s[t] = s[t] ?? b(n)), r(s[t]), (s[t].modifiedAt = String(Date.now())), i && v(s, t, n), C(s), !0;
}
function O() {
    N();
}
let D = i().debounce(() => {
    M();
}, T);
function L(e, t, n) {
    (0, p.gq)(e, t, { volume: n }), D();
}
function w(e, t, n) {
    (0, p.gq)(e, t, { muted: n }), D.cancel(), M();
}
function x(e, t, n) {
    (0, p.gq)(e, t, { soundboardMuted: n }), D.cancel(), M();
}
let P = i().debounce(u.VR, 500, { maxWait: 500 });
function M() {
    E.wc.updateAsync(
        "audioContextSettings",
        (e) => {
            let t = !1;
            return (
                (0, p.rQ)((n, r, i) => {
                    let a = R(e, r, n, (e) => {
                        Object.assign(e, i);
                    });
                    t = t || a;
                }),
                t
            );
        },
        E.Sb.INFREQUENT_USER_ACTION,
    );
}
function k(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === _.default.getId()) return;
    let i = c.default.getRemoteSessionId();
    null != i && P(i, n, t, { muted: f.Ay.isLocalMute(n, t), volume: r }), L(t, n, r);
}
function U(e) {
    let { context: t, userId: n } = e;
    n !== _.default.getId() && w(t, n, f.Ay.isLocalMute(n, t));
}
function G(e) {
    let { context: t, userId: n } = e;
    n !== _.default.getId() && x(t, n, d.A.isLocalSoundboardMuted(n));
}
function F(e) {
    let {} = e;
    E.wc.updateAsync(
        "audioContextSettings",
        (e) => {
            (e.user = {}), (e.stream = {});
        },
        E.Sb.INFREQUENT_USER_ACTION,
    );
}
class V extends l.A {
    actions = {
        POST_CONNECTION_OPEN: O,
        AUDIO_SET_LOCAL_VOLUME: k,
        AUDIO_TOGGLE_LOCAL_MUTE: U,
        AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: G,
        MEDIA_ENGINE_RESET_SETTINGS: F,
    };
}
let B = new V();
