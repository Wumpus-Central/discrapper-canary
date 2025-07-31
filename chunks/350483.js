(n.d(t, { Z: () => x }), n(388685));
var i = n(255367);
n(73800);
var r = n(392711),
    s = n.n(r),
    a = n(481060),
    l = n(358230),
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
            : (0, l.Z)(e, {
                  withVoiceChannels: t,
                  withCurrentVoiceChannel: !0
              }).map((e) => e.id))
    ];
}
let x = s().throttle(function (e, t) {
    var r, s;
    let l,
        { channelPredicate: m = () => !0, guildPredicate: f = () => !0, guildFeaturePredicate: x = () => !1, ensureChatIsVisible: _ = () => !1, withVoiceChannels: j = !1 } = t,
        O = null != (r = o.Z.getState().guildId) ? r : h.ME,
        E = o.Z.getState().channelId,
        C = (function (e, t) {
            let n = [h.ME, ...u.ZP.getFlattenedGuildIds()],
                i = n.indexOf(e);
            return t > 0 ? n.slice(i).concat(n.slice(0, i), e) : (n.splice(i, 0, e), n.slice(i + 1).concat(n.slice(0, i + 1)));
        })(O, e),
        v = e > 0 ? 0 : C.length - 1,
        S = b(O, j),
        T = S.indexOf(E) + e;
    for (; null != O && '' !== O; ) {
        if (((l = S[T]), f(O)))
            for (; null != l && '' !== l; ) {
                if ('string' == typeof l) {
                    if (m(O, l)) return (0, g.K)(O, l, !1, _(O, l));
                } else if ('object' == typeof l && x(l.resourceId, l.type))
                    return (
                        O !== d.Z.getGuildId() && (0, g.K)(O, null == (s = c.ZP.getDefaultChannel(O)) ? void 0 : s.id),
                        (0, a.ZDy)(async () => {
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
                                                ('function' == typeof Object.getOwnPropertySymbols &&
                                                    (i = i.concat(
                                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                        })
                                                    )),
                                                    i.forEach(function (t) {
                                                        var i;
                                                        ((i = n[t]),
                                                            t in e
                                                                ? Object.defineProperty(e, t, {
                                                                      value: i,
                                                                      enumerable: !0,
                                                                      configurable: !0,
                                                                      writable: !0
                                                                  })
                                                                : (e[t] = i));
                                                    }));
                                            }
                                            return e;
                                        })({}, t),
                                        { guildId: O }
                                    )
                                );
                        })
                    );
                ((T += e), (l = S[T]));
            }
        if (((v += e), null == (O = C[v]) || '' === O)) break;
        ((S = b(O, j)), (T = e < 0 ? S.length - 1 : 0));
    }
    p.S.dispatch(h.CkL.SHAKE_APP, {
        duration: 200,
        intensity: 2
    });
}, h.aZC);
