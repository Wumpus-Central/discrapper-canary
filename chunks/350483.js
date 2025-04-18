n.d(t, { Z: () => _ }), n(388685);
var r = n(200651);
n(192379);
var i = n(392711),
    s = n.n(i),
    a = n(481060),
    l = n(358230),
    o = n(905423),
    c = n(984933),
    d = n(914010),
    u = n(771845),
    m = n(55589),
    g = n(585483),
    p = n(475468),
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
let _ = s().throttle(function (e, t) {
    var i, s;
    let l,
        { channelPredicate: m = () => !0, guildPredicate: f = () => !0, guildFeaturePredicate: _ = () => !1, ensureChatIsVisible: N = () => !1, withVoiceChannels: x = !1 } = t,
        E = null != (i = o.Z.getState().guildId) ? i : h.ME,
        j = o.Z.getState().channelId,
        C = (function (e, t) {
            let n = [h.ME, ...u.ZP.getFlattenedGuildIds()],
                r = n.indexOf(e);
            return t > 0 ? n.slice(r).concat(n.slice(0, r), e) : (n.splice(r, 0, e), n.slice(r + 1).concat(n.slice(0, r + 1)));
        })(E, e),
        O = e > 0 ? 0 : C.length - 1,
        S = b(E, x),
        v = S.indexOf(j) + e;
    for (; null != E && '' !== E; ) {
        if (((l = S[v]), f(E)))
            for (; null != l && '' !== l; ) {
                if ('string' == typeof l) {
                    if (m(E, l)) return (0, p.K)(E, l, !1, N(E, l));
                } else if ('object' == typeof l && _(l.resourceId, l.type))
                    return (
                        E !== d.Z.getGuildId() && (0, p.K)(E, null == (s = c.ZP.getDefaultChannel(E)) ? void 0 : s.id),
                        (0, a.ZDy)(async () => {
                            let { default: e } = await Promise.all([n.e('42743'), n.e('22347'), n.e('56236'), n.e('529')]).then(n.bind(n, 17671));
                            return (t) =>
                                (0, r.jsx)(
                                    e,
                                    (function (e, t) {
                                        return (
                                            (t = null != t ? t : {}),
                                            Object.getOwnPropertyDescriptors
                                                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                                                : (function (e, t) {
                                                      var n = Object.keys(e);
                                                      if (Object.getOwnPropertySymbols) {
                                                          var r = Object.getOwnPropertySymbols(e);
                                                          n.push.apply(n, r);
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
                                                    r = Object.keys(n);
                                                'function' == typeof Object.getOwnPropertySymbols &&
                                                    (r = r.concat(
                                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                        })
                                                    )),
                                                    r.forEach(function (t) {
                                                        var r;
                                                        (r = n[t]),
                                                            t in e
                                                                ? Object.defineProperty(e, t, {
                                                                      value: r,
                                                                      enumerable: !0,
                                                                      configurable: !0,
                                                                      writable: !0
                                                                  })
                                                                : (e[t] = r);
                                                    });
                                            }
                                            return e;
                                        })({}, t),
                                        { guildId: E }
                                    )
                                );
                        })
                    );
                (v += e), (l = S[v]);
            }
        if (((O += e), null == (E = C[O]) || '' === E)) break;
        (S = b(E, x)), (v = e < 0 ? S.length - 1 : 0);
    }
    g.S.dispatch(h.CkL.SHAKE_APP, {
        duration: 200,
        intensity: 2
    });
}, h.aZC);
