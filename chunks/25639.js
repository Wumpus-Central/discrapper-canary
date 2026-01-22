n.d(t, {
    A: () => O,
    s: () => f,
}),
    n(896048);
var l,
    r,
    i = n(311907),
    a = n(73153),
    s = n(967198),
    o = n(977997);

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
var f =
    (((r = {}).GENTLE_AMBIENT = "GENTLE_AMBIENT"),
    (r.GENTLE_AMBIENT_WITH_INTRO = "GENTLE_AMBIENT_WITH_INTRO"),
    (r.HIGH_CONTRAST = "HIGH_CONTRAST"),
    r);
let g = {},
    h = {},
    m = null;

function b(e) {
    null != h[e] && (clearTimeout(h[e]), delete h[e]);
}

function y(e) {
    b(e),
        (h[e] = setTimeout(() => {
            let t = g[e];
            null != t &&
                ((g[e] = d(c({}, t), {
                    style: "GENTLE_AMBIENT",
                })),
                p.emitChange()),
                delete h[e];
        }, 2e3));
}

function N() {
    for (let e of Object.keys(h)) clearTimeout(h[e]);
    (h = {}), (g = {});
}

function A() {
    return N(), !0;
}
class E extends (l = i.Ay.Store) {
    initialize() {
        this.waitFor(o.A, s.A);
    }
    getAnimationStyle(e) {
        var t, n;
        return null != (t = null == (n = g[e]) ? void 0 : n.style) ? t : "GENTLE_AMBIENT";
    }
    getUserCount(e) {
        var t, n;
        return null != (t = null == (n = g[e]) ? void 0 : n.userCount) ? t : 0;
    }
}
u(E, "displayName", "VoiceChannelAnimationStateStore");
let p = new E(a.h, {
        VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t } = e,
                n = s.A.getGuildId();
            n !== m && null != n && (m = n);
            let l = {};
            for (let e of t) {
                var r, i;
                e.guildId === n &&
                    (null != e.oldChannelId && (l[e.oldChannelId] = (null != (r = l[e.oldChannelId]) ? r : 0) - 1),
                    null != e.channelId && (l[e.channelId] = (null != (i = l[e.channelId]) ? i : 0) + 1));
            }
            let a = !1;
            for (let [e, t] of Object.entries(l))
                (function (e, t) {
                    var n;
                    let l = g[e],
                        r = null != (n = null == l ? void 0 : l.userCount) ? n : 0,
                        i = Math.max(0, r + t);
                    return 0 === r && i > 0
                        ? ((g[e] = {
                              style: "GENTLE_AMBIENT_WITH_INTRO",
                              userCount: i,
                          }),
                          y(e),
                          !0)
                        : r > 0 && i > r
                          ? ((g[e] = {
                                style: "HIGH_CONTRAST",
                                userCount: i,
                            }),
                            y(e),
                            !0)
                          : 0 === i
                            ? (b(e), delete g[e], !0)
                            : null != l &&
                              i !== r &&
                              ((g[e] = d(c({}, l), {
                                  userCount: i,
                              })),
                              !0);
                })(e, t) && (a = !0);
            return a;
        },
        CHANNEL_SELECT: function (e) {
            let { guildId: t } = e;
            if (t === m || null == t) return !1;
            (m = t), N();
            let n = o.A.getVoiceStates(t),
                l = {};
            for (let e of Object.values(n))
                if (null != e.channelId) {
                    var r;
                    l[e.channelId] = (null != (r = l[e.channelId]) ? r : 0) + 1;
                }
            for (let [e, t] of Object.entries(l))
                t > 0 &&
                    (g[e] = {
                        style: "GENTLE_AMBIENT",
                        userCount: t,
                    });
            return !0;
        },
        CONNECTION_OPEN: A,
        LOGOUT: A,
    }),
    O = p;
