"use strict";
n.d(t, { A: () => D });
var r = n(735438),
    i = n.n(r),
    s = n(947320),
    a = n(873298),
    o = n(506774),
    l = n(439372),
    u = n(108713),
    d = n(643501),
    c = n(209932),
    _ = n(961350),
    f = n(430452),
    E = n(661191),
    h = n(879172),
    p = n(409826),
    m = n(594061),
    g = n(731854);
let A = (e) => `AudioContextSettingsMigrated:${e}`,
    I = (e) => (e === g.x.STREAM ? s.i.STREAM : s.i.USER);
function T() {
    o.w.get(A(_.default.getId())) ||
        m.wc.updateAsync(
            "audioContextSettings",
            (e) => {
                let t = !1;
                for (let [n, r] of Object.entries(f.Ay.getState().settingsByContext)) {
                    let i = (0, p.o)(n);
                    if (null == i) continue;
                    let s = e[i],
                        a = String(Date.now()),
                        o = {};
                    for (let [e, t] of Object.entries(r.localMutes))
                        o[e] = { muted: t, volume: I(n), modifiedAt: a, soundboardMuted: !1 };
                    for (let [e, t] of Object.entries(r.localVolumes))
                        o[e] = { muted: !1, modifiedAt: a, ...o[e], volume: (0, p.z)(t, n) };
                    let l = Object.keys(s).length;
                    for (let [e, [n, r]] of Object.entries(o).entries()) {
                        if (300 - l - (e + 1) <= 0) break;
                        null == s[n] && ((t = !0), (s[n] = r));
                    }
                }
                return o.w.set(A(_.default.getId()), !0), t;
            },
            m.Sb.AUTOMATED,
        );
}
let S = i().debounce(() => {
        N();
    }, 2e3),
    y = i().debounce(u.VR, 500, { maxWait: 500 });
function N() {
    m.wc.updateAsync(
        "audioContextSettings",
        (e) => {
            let t = !1;
            return (
                (0, h.rQ)((n, r, i) => {
                    let s = (function (e, t, n, r) {
                        let i = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
                            s = (0, p.o)(n);
                        if (null == s) return !1;
                        let o = e[s];
                        return (
                            (o[t] = o[t] ?? a.oP.create({ muted: !1, volume: I(n) })),
                            r(o[t]),
                            (o[t].modifiedAt = String(Date.now())),
                            i && (o[t].volume !== I(n) || o[t].muted || o[t].soundboardMuted || delete o[t]),
                            !(function (e) {
                                let t = E.default.entries(e),
                                    n = t.length;
                                if (n <= 300) return;
                                let r = t.sort((e, t) => {
                                        let [n, { modifiedAt: r }] = e,
                                            [i, { modifiedAt: s }] = t;
                                        return Number(r) - Number(s);
                                    }),
                                    i = n - 300;
                                for (let t = 0; t < i; t++) {
                                    let [n] = r[t];
                                    delete e[n];
                                }
                            })(o),
                            !0
                        );
                    })(e, r, n, (e) => {
                        Object.assign(e, i);
                    });
                    t = t || s;
                }),
                t
            );
        },
        m.Sb.INFREQUENT_USER_ACTION,
    );
}
function O(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === _.default.getId()) return;
    let i = d.default.getRemoteSessionId();
    null != i && y(i, n, t, { muted: f.Ay.isLocalMute(n, t), volume: r }), (0, h.gq)(t, n, { volume: r }), S();
}
function R(e) {
    let { context: t, userId: n } = e;
    if (n !== _.default.getId()) {
        var r;
        (r = f.Ay.isLocalMute(n, t)), (0, h.gq)(t, n, { muted: r }), S.cancel(), N();
    }
}
function v(e) {
    let { context: t, userId: n } = e;
    if (n !== _.default.getId()) {
        var r;
        (r = c.A.isLocalSoundboardMuted(n)), (0, h.gq)(t, n, { soundboardMuted: r }), S.cancel(), N();
    }
}
function C(e) {
    let {} = e;
    m.wc.updateAsync(
        "audioContextSettings",
        (e) => {
            (e.user = {}), (e.stream = {});
        },
        m.Sb.INFREQUENT_USER_ACTION,
    );
}
class b extends l.A {
    actions = {
        POST_CONNECTION_OPEN: T,
        AUDIO_SET_LOCAL_VOLUME: O,
        AUDIO_TOGGLE_LOCAL_MUTE: R,
        AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: v,
        MEDIA_ENGINE_RESET_SETTINGS: C,
    };
}
let D = new b();
