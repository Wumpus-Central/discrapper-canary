"use strict";
n.d(t, { A: () => v });
var i = n(735438),
    r = n.n(i),
    s = n(947320),
    a = n(873298),
    o = n(506774),
    l = n(439372),
    _ = n(108713),
    d = n(643501),
    u = n(209932),
    c = n(495544),
    E = n(51760),
    h = n(935208),
    m = n(879172),
    f = n(409826),
    g = n(594061),
    I = n(731854);
let A = (e) => `AudioContextSettingsMigrated:${e}`,
    p = (e) => (e === I.x.STREAM ? s.i.STREAM : s.i.USER);
function T() {
    o.w.get(A(c.default.getId())) ||
        g.wc.updateAsync(
            "audioContextSettings",
            (e) => {
                let t = !1;
                for (let [n, i] of Object.entries(E.Ay.getState().settingsByContext)) {
                    let r = (0, f.o)(n);
                    if (null == r) continue;
                    let s = e[r],
                        a = String(Date.now()),
                        o = {};
                    for (let [e, t] of Object.entries(i.localMutes))
                        o[e] = { muted: t, volume: p(n), modifiedAt: a, soundboardMuted: !1 };
                    for (let [e, t] of Object.entries(i.localVolumes))
                        o[e] = { muted: !1, modifiedAt: a, ...o[e], volume: (0, f.z)(t, n) };
                    let l = Object.keys(s).length;
                    for (let [e, [n, i]] of Object.entries(o).entries()) {
                        if (300 - l - (e + 1) <= 0) break;
                        null == s[n] && ((t = !0), (s[n] = i));
                    }
                }
                return o.w.set(A(c.default.getId()), !0), t;
            },
            g.Sb.AUTOMATED,
        );
}
let S = r().debounce(() => {
        O();
    }, 2e3),
    N = r().debounce(_.VR, 500, { maxWait: 500 });
function O() {
    g.wc.updateAsync(
        "audioContextSettings",
        (e) => {
            let t = !1;
            return (
                (0, m.rQ)((n, i, r) => {
                    let s = (function (e, t, n, i) {
                        let r = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
                            s = (0, f.o)(n);
                        if (null == s) return !1;
                        let o = e[s];
                        return (
                            (o[t] = o[t] ?? a.oP.create({ muted: !1, volume: p(n) })),
                            i(o[t]),
                            (o[t].modifiedAt = String(Date.now())),
                            r && (o[t].volume !== p(n) || o[t].muted || o[t].soundboardMuted || delete o[t]),
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
        g.Sb.INFREQUENT_USER_ACTION,
    );
}
function R(e) {
    let { context: t, userId: n, volume: i } = e;
    if (n === c.default.getId()) return;
    let r = d.default.getRemoteSessionId();
    null != r && N(r, n, t, { muted: E.Ay.isLocalMute(n, t), volume: i }), (0, m.gq)(t, n, { volume: i }), S();
}
function C(e) {
    let { context: t, userId: n } = e;
    if (n !== c.default.getId()) {
        var i;
        (i = E.Ay.isLocalMute(n, t)), (0, m.gq)(t, n, { muted: i }), S.cancel(), O();
    }
}
function y(e) {
    let { context: t, userId: n } = e;
    if (n !== c.default.getId()) {
        var i;
        (i = u.A.isLocalSoundboardMuted(n)), (0, m.gq)(t, n, { soundboardMuted: i }), S.cancel(), O();
    }
}
function D(e) {
    let {} = e;
    g.wc.updateAsync(
        "audioContextSettings",
        (e) => {
            (e.user = {}), (e.stream = {});
        },
        g.Sb.INFREQUENT_USER_ACTION,
    );
}
class L extends l.A {
    actions = {
        POST_CONNECTION_OPEN: T,
        AUDIO_SET_LOCAL_VOLUME: R,
        AUDIO_TOGGLE_LOCAL_MUTE: C,
        AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: y,
        MEDIA_ENGINE_RESET_SETTINGS: D,
    };
}
let v = new L();
