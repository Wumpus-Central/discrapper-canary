"use strict";
n.d(t, { A: () => v });
var i = n(435558),
    r = n.n(i),
    a = n(947320),
    s = n(873298),
    l = n(506774),
    o = n(439372),
    d = n(469802),
    c = n(643501),
    u = n(209932),
    _ = n(280450),
    E = n(453028),
    A = n(935208),
    h = n(594061),
    I = n(125325),
    f = n(386723),
    p = n(731854);
let T = (e) => `AudioContextSettingsMigrated:${e}`,
    m = (e) => (e === p.x.STREAM ? a.i.STREAM : a.i.USER);
function g() {
    l.w.get(T(_.default.getId())) ||
        h.wc.updateAsync(
            "audioContextSettings",
            (e) => {
                let t = !1;
                for (let [n, i] of Object.entries(E.Ay.getState().settingsByContext)) {
                    let r = (0, f.o)(n);
                    if (null == r) continue;
                    let a = e[r],
                        s = String(Date.now()),
                        l = {};
                    for (let [e, t] of Object.entries(i.localMutes))
                        l[e] = { muted: t, volume: m(n), modifiedAt: s, soundboardMuted: !1 };
                    for (let [e, t] of Object.entries(i.localVolumes))
                        l[e] = { muted: !1, modifiedAt: s, ...l[e], volume: (0, f.z)(t, n) };
                    let o = Object.keys(a).length;
                    for (let [e, [n, i]] of Object.entries(l).entries()) {
                        if (300 - o - (e + 1) <= 0) break;
                        null == a[n] && ((t = !0), (a[n] = i));
                    }
                }
                return l.w.set(T(_.default.getId()), !0), t;
            },
            h.Sb.AUTOMATED,
        );
}
let S = r().debounce(() => {
        C();
    }, 2e3),
    N = r().debounce(d.VR, 500, { maxWait: 500 });
function C() {
    h.wc.updateAsync(
        "audioContextSettings",
        (e) => {
            let t = !1;
            return (
                (0, I.rQ)((n, i, r) => {
                    let a = (function (e, t, n, i) {
                        let r = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
                            a = (0, f.o)(n);
                        if (null == a) return !1;
                        let l = e[a];
                        return (
                            (l[t] = l[t] ?? s.oP.create({ muted: !1, volume: m(n) })),
                            i(l[t]),
                            (l[t].modifiedAt = String(Date.now())),
                            r && (l[t].volume !== m(n) || l[t].muted || l[t].soundboardMuted || delete l[t]),
                            !(function (e) {
                                let t = A.default.entries(e),
                                    n = t.length;
                                if (n <= 300) return;
                                let i = t.sort((e, t) => {
                                        let [n, { modifiedAt: i }] = e,
                                            [r, { modifiedAt: a }] = t;
                                        return Number(i) - Number(a);
                                    }),
                                    r = n - 300;
                                for (let t = 0; t < r; t++) {
                                    let [n] = i[t];
                                    delete e[n];
                                }
                            })(l),
                            !0
                        );
                    })(e, i, n, (e) => {
                        Object.assign(e, r);
                    });
                    t = t || a;
                }),
                t
            );
        },
        h.Sb.INFREQUENT_USER_ACTION,
    );
}
function O(e) {
    let { context: t, userId: n, volume: i } = e;
    if (n === _.default.getId()) return;
    let r = c.default.getRemoteSessionId();
    null != r && N(r, n, t, { muted: E.Ay.isLocalMute(n, t), volume: i }), (0, I.gq)(t, n, { volume: i }), S();
}
function R(e) {
    let { context: t, userId: n } = e;
    if (n !== _.default.getId()) {
        var i;
        (i = E.Ay.isLocalMute(n, t)), (0, I.gq)(t, n, { muted: i }), S.cancel(), C();
    }
}
function L(e) {
    let { context: t, userId: n } = e;
    if (n !== _.default.getId()) {
        var i;
        (i = u.A.isLocalSoundboardMuted(n)), (0, I.gq)(t, n, { soundboardMuted: i }), S.cancel(), C();
    }
}
function y(e) {
    let {} = e;
    h.wc.updateAsync(
        "audioContextSettings",
        (e) => {
            (e.user = {}), (e.stream = {});
        },
        h.Sb.INFREQUENT_USER_ACTION,
    );
}
class D extends o.A {
    actions = {
        POST_CONNECTION_OPEN: g,
        AUDIO_SET_LOCAL_VOLUME: O,
        AUDIO_TOGGLE_LOCAL_MUTE: R,
        AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: L,
        MEDIA_ENGINE_RESET_SETTINGS: y,
    };
}
let v = new D();
