n.d(t, { Z: () => Z }), n(47120);
var i = n(392711),
    r = n.n(i),
    a = n(51407),
    s = n(524437),
    o = n(433517),
    l = n(147913),
    u = n(254238),
    c = n(258609),
    d = n(763296),
    f = n(314897),
    _ = n(131951),
    p = n(709054),
    h = n(725380),
    m = n(340332),
    g = n(675478),
    E = n(65154);
function v(e, t, n) {
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
let y = 300,
    I = 2000,
    T = (e) => 'AudioContextSettingsMigrated:'.concat(e),
    b = (e) => (e === E.Yn.STREAM ? a.h.STREAM : a.h.USER);
function S(e, t, n) {
    return e[t].volume !== b(n) || e[t].muted || e[t].soundboardMuted || delete e[t], e;
}
function A(e) {
    let t = p.default.entries(e),
        n = t.length;
    if (n <= y) return;
    let i = t.sort((e, t) => {
            let [n, { modifiedAt: i }] = e,
                [r, { modifiedAt: a }] = t;
            return Number(i) - Number(a);
        }),
        r = n - y;
    for (let t = 0; t < r; t++) {
        let [n] = i[t];
        delete e[n];
    }
}
function N(e) {
    return s.JY.create({
        muted: !1,
        volume: b(e)
    });
}
function C() {
    o.K.get(T(f.default.getId())) ||
        g.hW.updateAsync(
            'audioContextSettings',
            (e) => {
                let t = !1;
                for (let [n, i] of Object.entries(_.Z.getState().settingsByContext)) {
                    let r = (0, m.z)(n);
                    if (null == r) continue;
                    let a = e[r],
                        s = String(Date.now()),
                        o = {};
                    for (let [e, t] of Object.entries(i.localMutes))
                        o[e] = {
                            muted: t,
                            volume: b(n),
                            modifiedAt: s,
                            soundboardMuted: !1
                        };
                    for (let [e, t] of Object.entries(i.localVolumes))
                        o[e] = {
                            muted: !1,
                            modifiedAt: s,
                            ...o[e],
                            volume: (0, m.r)(t, n)
                        };
                    let l = Object.keys(a).length;
                    for (let [e, [n, i]] of Object.entries(o).entries()) {
                        if (y - l - (e + 1) <= 0) break;
                        null == a[n] && ((t = !0), (a[n] = i));
                    }
                }
                return o.K.set(T(f.default.getId()), !0), t;
            },
            g.fy.AUTOMATED
        );
}
function R(e, t, n, i) {
    var r;
    let a = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
        s = (0, m.z)(n);
    if (null == s) return !1;
    let o = e[s];
    return (o[t] = null !== (r = o[t]) && void 0 !== r ? r : N(n)), i(o[t]), (o[t].modifiedAt = String(Date.now())), a && S(o, t, n), A(o), !0;
}
function O() {
    C();
}
let D = r().debounce(() => {
    M();
}, I);
function L(e, t, n) {
    (0, h.RF)(e, t, { volume: n }), D();
}
function x(e, t, n) {
    (0, h.RF)(e, t, { muted: n }), D.cancel(), M();
}
function P(e, t, n) {
    (0, h.RF)(e, t, { soundboardMuted: n }), D.cancel(), M();
}
let w = r().debounce(u.On, 500, { maxWait: 500 });
function M() {
    g.hW.updateAsync(
        'audioContextSettings',
        (e) => {
            let t = !1;
            return (
                (0, h.$E)((n, i, r) => {
                    let a = R(e, i, n, (e) => {
                        Object.assign(e, r);
                    });
                    t = t || a;
                }),
                t
            );
        },
        g.fy.INFREQUENT_USER_ACTION
    );
}
function k(e) {
    let { context: t, userId: n, volume: i } = e;
    if (n === f.default.getId()) return;
    let r = c.Z.getRemoteSessionId();
    null != r &&
        w(r, n, t, {
            muted: _.Z.isLocalMute(n, t),
            volume: i
        }),
        L(t, n, i);
}
function U(e) {
    let { context: t, userId: n } = e;
    n !== f.default.getId() && x(t, n, _.Z.isLocalMute(n, t));
}
function G(e) {
    let { context: t, userId: n } = e;
    n !== f.default.getId() && P(t, n, d.Z.isLocalSoundboardMuted(n));
}
class B extends l.Z {
    constructor(...e) {
        super(...e),
            v(this, 'actions', {
                POST_CONNECTION_OPEN: O,
                AUDIO_SET_LOCAL_VOLUME: k,
                AUDIO_TOGGLE_LOCAL_MUTE: U,
                AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: G
            });
    }
}
let Z = new B();
