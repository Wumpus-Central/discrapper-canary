n.d(t, { Z: () => _ }), n(388685);
var i = n(200651);
n(192379);
var r = n(392711),
    s = n.n(r),
    l = n(481060),
    a = n(358230),
    o = n(905423),
    c = n(984933),
    d = n(914010),
    u = n(771845),
    m = n(55589),
    p = n(585483),
    g = n(475468),
    h = n(981631),
    f = n(490897);
function b(e, t) {
    return [
        {
            resourceId: e,
            type: f.W.GUILD_EVENT
        },
        ...(e === h.ME
            ? m.Z.getPrivateChannelIds()
            : (0, a.Z)(e, {
                  withVoiceChannels: t,
                  withCurrentVoiceChannel: !0
              }).map((e) => e.id))
    ];
}
let _ = s().throttle(function (e, t) {
    var r, s;
    let a,
        { channelPredicate: m = () => !0, guildPredicate: f = () => !0, guildFeaturePredicate: _ = () => !1, ensureChatIsVisible: x = () => !1, withVoiceChannels: E = !1 } = t,
        C = null != (r = o.Z.getState().guildId) ? r : h.ME,
        j = o.Z.getState().channelId,
        O = (function (e, t) {
            let n = [h.ME, ...u.ZP.getFlattenedGuildIds()],
                i = n.indexOf(e);
            return t > 0 ? n.slice(i).concat(n.slice(0, i), e) : (n.splice(i, 0, e), n.slice(i + 1).concat(n.slice(0, i + 1)));
        })(C, e),
        S = e > 0 ? 0 : O.length - 1,
        v = b(C, E),
        T = v.indexOf(j) + e;
    for (; null != C && '' !== C; ) {
        if (((a = v[T]), f(C)))
            for (; null != a && '' !== a; ) {
                if ('string' == typeof a) {
                    if (m(C, a)) return (0, g.K)(C, a, !1, x(C, a));
                } else if ('object' == typeof a && _(a.resourceId, a.type))
                    return (
                        C !== d.Z.getGuildId() && (0, g.K)(C, null == (s = c.ZP.getDefaultChannel(C)) ? void 0 : s.id),
                        (0, l.ZDy)(async () => {
                            let { default: e } = await Promise.all([n.e('42743'), n.e('22347'), n.e('56236'), n.e('7549')]).then(n.bind(n, 17671));
                            return (t) =>
                                (0, i.jsx)(
                                    e,
                                    (function (e, t) {
                                        return (
                                            (t = null != t ? t : {}),
                                            Object.getOwnPropertyDescriptors
                                                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                                                : (function (e, t) {
                                                      var n = Object.keys(e);
                                                      if (Object.getOwnPropertySymbols) {
                                                          var i = Object.getOwnPropertySymbols(e);
                                                          n.push.apply(n, i);
                                                      }
                                                      return n;
                                                  })(Object(t)).forEach(function (n) {
                                                      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                                                  }),
                                            e
                                        );
                                    })(
                                        (function (e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var n = null != arguments[t] ? arguments[t] : {},
                                                    i = Object.keys(n);
                                                'function' == typeof Object.getOwnPropertySymbols &&
                                                    (i = i.concat(
                                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                        })
                                                    )),
                                                    i.forEach(function (t) {
                                                        var i;
                                                        (i = n[t]),
                                                            t in e
                                                                ? Object.defineProperty(e, t, {
                                                                      value: i,
                                                                      enumerable: !0,
                                                                      configurable: !0,
                                                                      writable: !0
                                                                  })
                                                                : (e[t] = i);
                                                    });
                                            }
                                            return e;
                                        })({}, t),
                                        { guildId: C }
                                    )
                                );
                        })
                    );
                (T += e), (a = v[T]);
            }
        if (((S += e), null == (C = O[S]) || '' === C)) break;
        (v = b(C, E)), (T = e < 0 ? v.length - 1 : 0);
    }
    p.S.dispatch(h.CkL.SHAKE_APP, {
        duration: 200,
        intensity: 2
    });
}, h.aZC);
