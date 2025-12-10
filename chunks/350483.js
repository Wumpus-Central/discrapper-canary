n.d(t, { Z: () => T }), n(388685);
var r = n(54381);
n(473749);
var i = n(392711),
    a = n.n(i),
    o = n(481060),
    s = n(358230),
    l = n(905423),
    c = n(984933),
    u = n(914010),
    d = n(771845),
    f = n(55589),
    p = n(585483),
    _ = n(475468),
    m = n(981631),
    h = n(490897);
function g(e, t, n) {
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
function E(e) {
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
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
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
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function O(e, t) {
    let n = [m.ME, ...d.ZP.getFlattenedGuildIds()],
        r = n.indexOf(e);
    return t > 0 ? n.slice(r).concat(n.slice(0, r), e) : (n.splice(r, 0, e), n.slice(r + 1).concat(n.slice(0, r + 1)));
}
function v(e, t) {
    return e === m.ME
        ? f.Z.getPrivateChannelIds()
        : (0, s.Z)(e, {
              withVoiceChannels: t,
              withCurrentVoiceChannel: !0,
          }).map((e) => e.id);
}
function S(e, t) {
    return [
        {
            resourceId: e,
            type: h.W.GUILD_EVENT,
        },
        ...v(e, t),
    ];
}
function I(e, t) {
    var i, a;
    let s,
        {
            channelPredicate: d = () => !0,
            guildPredicate: f = () => !0,
            guildFeaturePredicate: h = () => !1,
            ensureChatIsVisible: g = () => !1,
            withVoiceChannels: b = !1,
        } = t,
        v = null != (i = l.Z.getState().guildId) ? i : m.ME,
        I = l.Z.getState().channelId,
        T = O(v, e),
        C = e > 0 ? 0 : T.length - 1,
        A = S(v, b),
        N = A.indexOf(I) + e;
    for (; null != v && "" !== v; ) {
        if (((s = A[N]), f(v)))
            for (; null != s && "" !== s; ) {
                if ("string" == typeof s) {
                    if (d(v, s)) return (0, _.K)(v, s, !1, g(v, s));
                } else if ("object" == typeof s && h(s.resourceId, s.type))
                    return (
                        v !== u.Z.getGuildId() && (0, _.K)(v, null == (a = c.ZP.getDefaultChannel(v)) ? void 0 : a.id),
                        (0, o.ZDy)(async () => {
                            let { default: e } = await Promise.all([n.e("4096"), n.e("56236"), n.e("74103")]).then(
                                n.bind(n, 17671),
                            );
                            return (t) => (0, r.jsx)(e, y(E({}, t), { guildId: v }));
                        })
                    );
                (N += e), (s = A[N]);
            }
        if (((C += e), null == (v = T[C]) || "" === v)) break;
        (A = S(v, b)), (N = e < 0 ? A.length - 1 : 0);
    }
    p.S.dispatch(m.CkL.SHAKE_APP, {
        duration: 200,
        intensity: 2,
    });
}
let T = a().throttle(I, m.aZC);
