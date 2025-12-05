n.d(t, {
    Z: () => y,
    i: () => g,
}),
    n(388685);
var l,
    i,
    r = n(442837),
    a = n(570140),
    o = n(914010),
    s = n(979651);
function u(e, t, n) {
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
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var g =
    (((i = {}).GENTLE_AMBIENT = "GENTLE_AMBIENT"),
    (i.GENTLE_AMBIENT_WITH_INTRO = "GENTLE_AMBIENT_WITH_INTRO"),
    (i.HIGH_CONTRAST = "HIGH_CONTRAST"),
    i);
let f = {},
    h = {},
    m = null;
function N(e) {
    null != h[e] && (clearTimeout(h[e]), delete h[e]);
}
function E(e) {
    N(e),
        (h[e] = setTimeout(() => {
            let t = f[e];
            null != t && ((f[e] = d(c({}, t), { style: "GENTLE_AMBIENT" })), O.emitChange()), delete h[e];
        }, 2000));
}
function v() {
    for (let e of Object.keys(h)) clearTimeout(h[e]);
    (h = {}), (f = {});
}
function p() {
    return v(), !0;
}
class T extends (l = r.ZP.Store) {
    initialize() {
        this.waitFor(s.Z, o.Z);
    }
    getAnimationStyle(e) {
        var t, n;
        return null != (n = null == (t = f[e]) ? void 0 : t.style) ? n : "GENTLE_AMBIENT";
    }
    getUserCount(e) {
        var t, n;
        return null != (n = null == (t = f[e]) ? void 0 : t.userCount) ? n : 0;
    }
}
u(T, "displayName", "VoiceChannelAnimationStateStore");
let O = new T(a.Z, {
        VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t } = e,
                n = o.Z.getGuildId();
            n !== m && null != n && (m = n);
            let l = {};
            for (let e of t) {
                var i, r;
                e.guildId === n &&
                    (null != e.oldChannelId && (l[e.oldChannelId] = (null != (i = l[e.oldChannelId]) ? i : 0) - 1),
                    null != e.channelId && (l[e.channelId] = (null != (r = l[e.channelId]) ? r : 0) + 1));
            }
            let a = !1;
            for (let [e, t] of Object.entries(l))
                (function (e, t) {
                    var n;
                    let l = f[e],
                        i = null != (n = null == l ? void 0 : l.userCount) ? n : 0,
                        r = Math.max(0, i + t);
                    return 0 === i && r > 0
                        ? ((f[e] = {
                              style: "GENTLE_AMBIENT_WITH_INTRO",
                              userCount: r,
                          }),
                          E(e),
                          !0)
                        : i > 0 && r > i
                          ? ((f[e] = {
                                style: "HIGH_CONTRAST",
                                userCount: r,
                            }),
                            E(e),
                            !0)
                          : 0 === r
                            ? (N(e), delete f[e], !0)
                            : null != l && r !== i && ((f[e] = d(c({}, l), { userCount: r })), !0);
                })(e, t) && (a = !0);
            return a;
        },
        CHANNEL_SELECT: function (e) {
            let { guildId: t } = e;
            if (t === m || null == t) return !1;
            (m = t), v();
            let n = s.Z.getVoiceStates(t),
                l = {};
            for (let e of Object.values(n))
                if (null != e.channelId) {
                    var i;
                    l[e.channelId] = (null != (i = l[e.channelId]) ? i : 0) + 1;
                }
            for (let [e, t] of Object.entries(l))
                t > 0 &&
                    (f[e] = {
                        style: "GENTLE_AMBIENT",
                        userCount: t,
                    });
            return !0;
        },
        CONNECTION_OPEN: p,
        LOGOUT: p,
    }),
    y = O;
