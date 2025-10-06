n.d(t, {
    N: () => S,
    P: () => E,
}),
    n(388685);
var i = n(951288),
    r = n(647438),
    l = n(442837),
    o = n(481060),
    a = n(102172),
    s = n(74299),
    u = n(562224),
    c = n(592125),
    d = n(430824),
    h = n(131951),
    p = n(496675),
    f = n(944486),
    m = n(594174),
    g = n(145597),
    y = n(981631),
    O = n(37113),
    v = n(388032);
function E(e) {
    let {
            pid: t,
            analyticsLocation: n,
            allowOneClickGoLive: i = !1,
            onBeforeShowModal: o,
            onOneClickGoLive: u,
            appContext: g,
        } = e,
        y = (0, l.e7)([f.Z], () => f.Z.getVoiceChannelId()),
        O = (0, l.e7)([c.Z], () => c.Z.getChannel(y), [y]),
        v = (0, l.e7)([m.default], () => m.default.getCurrentUser()),
        E = null == O ? void 0 : O.getGuildId(),
        S = (0, l.e7)([h.Z], () => (0, s.Z)(h.Z)),
        x = (0, l.e7)([d.Z, p.Z], () => null != O && (0, a.JL)(O, d.Z, p.Z));
    return r.useCallback(async () => {
        await b({
            pid: t,
            voiceChannelId: y,
            user: v,
            targetGuildId: E,
            canGoLive: S,
            canStream: x,
            analyticsLocation: n,
            allowOneClickGoLive: i,
            onBeforeShowModal: o,
            onOneClickGoLive: u,
            appContext: g,
        });
    }, [t, y, v, E, S, x, n, i, o, u, g]);
}
async function S(e) {
    let {
            pid: t,
            analyticsLocation: n,
            allowOneClickGoLive: i = !1,
            onBeforeShowModal: r,
            onOneClickGoLive: l,
            appContext: o,
        } = e,
        u = f.Z.getVoiceChannelId(),
        g = c.Z.getChannel(u),
        y = m.default.getCurrentUser(),
        O = null == g ? void 0 : g.getGuildId(),
        v = null != g && (0, a.JL)(g, d.Z, p.Z),
        E = (0, s.Z)(h.Z);
    await b({
        pid: t,
        voiceChannelId: u,
        user: y,
        targetGuildId: O,
        canGoLive: E,
        canStream: v,
        analyticsLocation: n,
        allowOneClickGoLive: i,
        onBeforeShowModal: r,
        onOneClickGoLive: l,
        appContext: o,
    });
}
async function b(e) {
    let {
        pid: t,
        voiceChannelId: r,
        user: l,
        targetGuildId: a,
        canGoLive: s,
        canStream: c,
        analyticsLocation: d,
        allowOneClickGoLive: h,
        onBeforeShowModal: p,
        onOneClickGoLive: f,
        appContext: m,
    } = e;
    if (s && c) {
        if (h && null !== r) {
            let [e] = await (0, u.Z)(t, { preset: O.tI.PRESET_VIDEO });
            if (e) {
                null == f || f();
                return;
            }
        }
        if (null == l)
            return void (0, o.showToast)(
                (0, o.createToast)(v.intl.string(v.t.OKnWyc), o.ToastType.FAILURE, { appContext: y.IlC.OVERLAY }),
            );
        null == p || p(),
            (0, o.ZDy)(
                async () => {
                    let { default: e } = await Promise.all([n.e("38697"), n.e("46746"), n.e("53448")]).then(
                        n.bind(n, 60594),
                    );
                    return (t) => {
                        var n, r;
                        return (0, i.jsx)(
                            e,
                            ((n = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        i = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (i = i.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            }),
                                        )),
                                        i.forEach(function (t) {
                                            var i;
                                            (i = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: i,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (e[t] = i);
                                        });
                                }
                                return e;
                            })({}, t)),
                            (r = r =
                                {
                                    sourcePID: (0, g.getPID)(),
                                    selectSource: !1,
                                    guildId: a,
                                    selectGuild: null == a,
                                    analyticsLocation: d,
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var i = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, i);
                                      }
                                      return n;
                                  })(Object(r)).forEach(function (e) {
                                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                                  }),
                            n),
                        );
                    };
                },
                { contextKey: null != m ? (0, o.VnL)(m) : void 0 },
            );
    }
}
