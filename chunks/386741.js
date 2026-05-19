"use strict";
n.d(t, { A: () => D });
var i = n(735438),
    r = n.n(i),
    s = n(947320),
    a = n(873298),
    o = n(506774),
    l = n(439372),
    u = n(469802),
    c = n(643501),
    d = n(209932),
    _ = n(495544),
    f = n(761853),
    h = n(935208),
    p = n(594061),
    E = n(125325),
    m = n(386723),
    g = n(731854);
let A = (e) => `AudioContextSettingsMigrated:${e}`,
    I = (e) => (e === g.x.STREAM ? s.i.STREAM : s.i.USER);
function T() {
    o.w.get(A(_.default.getId())) ||
        p.wc.updateAsync(
            "audioContextSettings",
            (e) => {
                let t = !1;
                for (let [n, i] of Object.entries(f.Ay.getState().settingsByContext)) {
                    let r = (0, m.o)(n);
                    if (null == r) continue;
                    let s = e[r],
                        a = String(Date.now()),
                        o = {};
                    for (let [e, t] of Object.entries(i.localMutes))
                        o[e] = { muted: t, volume: I(n), modifiedAt: a, soundboardMuted: !1 };
                    for (let [e, t] of Object.entries(i.localVolumes))
                        o[e] = { muted: !1, modifiedAt: a, ...o[e], volume: (0, m.z)(t, n) };
                    let l = Object.keys(s).length;
                    for (let [e, [n, i]] of Object.entries(o).entries()) {
                        if (300 - l - (e + 1) <= 0) break;
                        null == s[n] && ((t = !0), (s[n] = i));
                    }
                }
                return o.w.set(A(_.default.getId()), !0), t;
            },
            p.Sb.AUTOMATED,
        );
}
let S = r().debounce(() => {
        y();
    }, 2e3),
    N = r().debounce(u.VR, 500, { maxWait: 500 });
function y() {
    p.wc.updateAsync(
        "audioContextSettings",
        (e) => {
            let t = !1;
            return (
                (0, E.rQ)((n, i, r) => {
                    let s = (function (e, t, n, i) {
                        let r = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
                            s = (0, m.o)(n);
                        if (null == s) return !1;
                        let o = e[s];
                        return (
                            (o[t] = o[t] ?? a.oP.create({ muted: !1, volume: I(n) })),
                            i(o[t]),
                            (o[t].modifiedAt = String(Date.now())),
                            r && (o[t].volume !== I(n) || o[t].muted || o[t].soundboardMuted || delete o[t]),
                            !(function (e) {
                                let t = h.default.entries(e),
                                    n = t.length;
                                if (n <= 300) return;
                                let i = t.sort((e, t) => {
                                        let [n, { modifiedAt: i }] = e,
                                            [r, { modifiedAt: s }] = t;
                                        return Number(i) - Number(s);
                                    }),
                                    r = n - 300;
                                for (let t = 0; t < r; t++) {
                                    let [n] = i[t];
                                    delete e[n];
                                }
                            })(o),
                            !0
                        );
                    })(e, i, n, (e) => {
                        Object.assign(e, r);
                    });
                    t = t || s;
                }),
                t
            );
        },
        p.Sb.INFREQUENT_USER_ACTION,
    );
}
function C(e) {
    let { context: t, userId: n, volume: i } = e;
    if (n === _.default.getId()) return;
    let r = c.default.getRemoteSessionId();
    null != r && N(r, n, t, { muted: f.Ay.isLocalMute(n, t), volume: i }), (0, E.gq)(t, n, { volume: i }), S();
}
function v(e) {
    let { context: t, userId: n } = e;
    if (n !== _.default.getId()) {
        var i;
        (i = f.Ay.isLocalMute(n, t)), (0, E.gq)(t, n, { muted: i }), S.cancel(), y();
    }
}
function O(e) {
    let { context: t, userId: n } = e;
    if (n !== _.default.getId()) {
        var i;
        (i = d.A.isLocalSoundboardMuted(n)), (0, E.gq)(t, n, { soundboardMuted: i }), S.cancel(), y();
    }
}
function R(e) {
    let {} = e;
    p.wc.updateAsync(
        "audioContextSettings",
        (e) => {
            (e.user = {}), (e.stream = {});
        },
        p.Sb.INFREQUENT_USER_ACTION,
    );
}
class b extends l.A {
    actions = {
        POST_CONNECTION_OPEN: T,
        AUDIO_SET_LOCAL_VOLUME: C,
        AUDIO_TOGGLE_LOCAL_MUTE: v,
        AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: O,
        MEDIA_ENGINE_RESET_SETTINGS: R,
    };
}
let D = new b();
