n.d(t, { Z: () => S }), n(388685);
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
    _ = n(585483),
    p = n(475468),
    h = n(981631),
    m = n(490897);
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
    let n = [h.ME, ...d.ZP.getFlattenedGuildIds()],
        r = n.indexOf(e);
    return t > 0 ? n.slice(r).concat(n.slice(0, r), e) : (n.splice(r, 0, e), n.slice(r + 1).concat(n.slice(0, r + 1)));
}
function v(e, t) {
    return e === h.ME
        ? f.Z.getPrivateChannelIds()
        : (0, s.Z)(e, {
              withVoiceChannels: t,
              withCurrentVoiceChannel: !0,
          }).map((e) => e.id);
}
function I(e, t) {
    return [
        {
            resourceId: e,
            type: m.W.GUILD_EVENT,
        },
        ...v(e, t),
    ];
}
function T(e, t) {
    var i, a;
    let s,
        {
            channelPredicate: d = () => !0,
            guildPredicate: f = () => !0,
            guildFeaturePredicate: m = () => !1,
            ensureChatIsVisible: g = () => !1,
            withVoiceChannels: b = !1,
        } = t,
        v = null != (i = l.Z.getState().guildId) ? i : h.ME,
        T = l.Z.getState().channelId,
        S = O(v, e),
        A = e > 0 ? 0 : S.length - 1,
        C = I(v, b),
        N = C.indexOf(T) + e;
    for (; null != v && "" !== v; ) {
        if (((s = C[N]), f(v)))
            for (; null != s && "" !== s; ) {
                if ("string" == typeof s) {
                    if (d(v, s)) return (0, p.K)(v, s, !1, g(v, s));
                } else if ("object" == typeof s && m(s.resourceId, s.type))
                    return (
                        v !== u.Z.getGuildId() && (0, p.K)(v, null == (a = c.ZP.getDefaultChannel(v)) ? void 0 : a.id),
                        (0, o.ZDy)(async () => {
                            let { default: e } = await Promise.all([n.e("4096"), n.e("56236"), n.e("74103")]).then(
                                n.bind(n, 17671),
                            );
                            return (t) => (0, r.jsx)(e, y(E({}, t), { guildId: v }));
                        })
                    );
                (N += e), (s = C[N]);
            }
        if (((A += e), null == (v = S[A]) || "" === v)) break;
        (C = I(v, b)), (N = e < 0 ? C.length - 1 : 0);
    }
    _.S.dispatch(h.CkL.SHAKE_APP, {
        duration: 200,
        intensity: 2,
    });
}
let S = a().throttle(T, h.aZC);
