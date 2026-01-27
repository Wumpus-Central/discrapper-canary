n.d(t, {
    A: () => h,
}),
    n(896048);
var r = n(627968);
n(64700);
var i = n(735438),
    l = n.n(i),
    s = n(397927),
    a = n(310953),
    o = n(366811),
    c = n(808728),
    d = n(967198),
    u = n(711014),
    _ = n(645959),
    p = n(203982),
    m = n(265422),
    g = n(652215),
    A = n(790782);

function f(e, t) {
    return [
        {
            resourceId: e,
            type: A.P.GUILD_EVENT,
        },
        ...(e === g.ME
            ? _.A.getPrivateChannelIds()
            : (0, a.A)(e, {
                  withVoiceChannels: t,
                  withCurrentVoiceChannel: !0,
              }).map((e) => e.id)),
    ];
}
let h = l().throttle(function (e, t) {
    var i, l, a;
    let _,
        A,
        h,
        {
            channelPredicate: b = () => !0,
            guildPredicate: E = () => !0,
            guildFeaturePredicate: x = () => !1,
            ensureChatIsVisible: O = () => !1,
            withVoiceChannels: C = !1,
        } = t,
        I = null != (i = o.A.getState().guildId) ? i : g.ME,
        T = o.A.getState().channelId,
        S =
            ((a = I),
            (A = (_ = [g.ME, ...u.Ay.getFlattenedGuildIds()]).indexOf(a)),
            e > 0
                ? _.slice(A).concat(_.slice(0, A), a)
                : (_.splice(A, 0, a), _.slice(A + 1).concat(_.slice(0, A + 1)))),
        j = e > 0 ? 0 : S.length - 1,
        v = f(I, C),
        N = v.indexOf(T) + e;
    for (; null != I && "" !== I; ) {
        if (((h = v[N]), E(I)))
            for (; null != h && "" !== h; ) {
                if ("string" == typeof h) {
                    if (b(I, h)) return (0, m.i)(I, h, !1, O(I, h));
                } else if ("object" == typeof h && x(h.resourceId, h.type))
                    return (
                        I !== d.A.getGuildId() && (0, m.i)(I, null == (l = c.Ay.getDefaultChannel(I)) ? void 0 : l.id),
                        (0, s.mMO)(async () => {
                            let { default: e } = await Promise.all([n.e("51354"), n.e("7453"), n.e("27728")]).then(
                                n.bind(n, 926956),
                            );
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
                                                      Object.defineProperty(
                                                          e,
                                                          n,
                                                          Object.getOwnPropertyDescriptor(t, n),
                                                      );
                                                  }),
                                            e
                                        );
                                    })(
                                        (function (e) {
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
                                                        var r;
                                                        (r = n[t]),
                                                            t in e
                                                                ? Object.defineProperty(e, t, {
                                                                      value: r,
                                                                      enumerable: !0,
                                                                      configurable: !0,
                                                                      writable: !0,
                                                                  })
                                                                : (e[t] = r);
                                                    });
                                            }
                                            return e;
                                        })({}, t),
                                        {
                                            guildId: I,
                                        },
                                    ),
                                );
                        })
                    );
                (N += e), (h = v[N]);
            }
        if (((j += e), null == (I = S[j]) || "" === I)) break;
        (v = f(I, C)), (N = e < 0 ? v.length - 1 : 0);
    }
    p._.dispatch(g.jej.SHAKE_APP, {
        duration: 200,
        intensity: 2,
    });
}, g.ugG);
