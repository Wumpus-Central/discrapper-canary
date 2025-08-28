n.d(t, {
    N: () => b,
    P: () => O,
}),
    n(388685);
var i = n(951288),
    r = n(647438),
    o = n(442837),
    l = n(481060),
    a = n(102172),
    s = n(74299),
    c = n(562224),
    u = n(592125),
    d = n(430824),
    p = n(131951),
    f = n(496675),
    h = n(944486),
    m = n(594174),
    g = n(145597),
    y = n(388032);
function O(e) {
    let {
            pid: t,
            analyticsLocation: n,
            allowOneClickGoLive: i = !1,
            onBeforeShowModal: l,
            onOneClickGoLive: c,
            appContext: g,
        } = e,
        y = (0, o.e7)([h.Z], () => h.Z.getVoiceChannelId()),
        O = (0, o.e7)([u.Z], () => u.Z.getChannel(y), [y]),
        b = (0, o.e7)([m.default], () => m.default.getCurrentUser()),
        E = null == O ? void 0 : O.getGuildId(),
        _ = (0, o.e7)([p.Z], () => (0, s.Z)(p.Z)),
        S = (0, o.e7)([d.Z, f.Z], () => null != O && (0, a.JL)(O, d.Z, f.Z));
    return r.useCallback(async () => {
        await v({
            pid: t,
            voiceChannelId: y,
            user: b,
            targetGuildId: E,
            canGoLive: _,
            canStream: S,
            analyticsLocation: n,
            allowOneClickGoLive: i,
            onBeforeShowModal: l,
            onOneClickGoLive: c,
            appContext: g,
        });
    }, [t, y, b, E, _, S, n, i, l, c, g]);
}
async function b(e) {
    let {
            pid: t,
            analyticsLocation: n,
            allowOneClickGoLive: i = !1,
            onBeforeShowModal: r,
            onOneClickGoLive: o,
            appContext: l,
        } = e,
        c = h.Z.getVoiceChannelId(),
        g = u.Z.getChannel(c),
        y = m.default.getCurrentUser(),
        O = null == g ? void 0 : g.getGuildId(),
        b = null != g && (0, a.JL)(g, d.Z, f.Z),
        E = (0, s.Z)(p.Z);
    await v({
        pid: t,
        voiceChannelId: c,
        user: y,
        targetGuildId: O,
        canGoLive: E,
        canStream: b,
        analyticsLocation: n,
        allowOneClickGoLive: i,
        onBeforeShowModal: r,
        onOneClickGoLive: o,
        appContext: l,
    });
}
async function v(e) {
    let {
        pid: t,
        voiceChannelId: r,
        user: o,
        targetGuildId: a,
        canGoLive: s,
        canStream: u,
        analyticsLocation: d,
        allowOneClickGoLive: p,
        onBeforeShowModal: f,
        onOneClickGoLive: h,
        appContext: m,
    } = e;
    if (s && u) {
        if (p && null !== r) {
            let [e] = await (0, c.Z)(t);
            if (e) {
                null == h || h();
                return;
            }
        }
        if (null == o) return void (0, l.showToast)((0, l.createToast)(y.intl.string(y.t.OKnWyc), l.ToastType.FAILURE));
        null == f || f(),
            (0, l.ZDy)(
                async () => {
                    let { default: e } = await Promise.all([n.e("38697"), n.e("46746"), n.e("79839")]).then(
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
                { contextKey: null != m ? (0, l.VnL)(m) : void 0 },
            );
    }
}
