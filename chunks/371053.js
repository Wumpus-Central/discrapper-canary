n.d(t, {
    N: () => S,
    P: () => E,
}),
    n(388685);
var i = n(54381),
    r = n(473749),
    a = n(442837),
    l = n(481060),
    o = n(580991),
    s = n(102172),
    c = n(74299),
    u = n(562224),
    d = n(361291),
    f = n(592125),
    h = n(430824),
    p = n(131951),
    m = n(496675),
    g = n(944486),
    b = n(594174),
    y = n(981631),
    O = n(37113),
    v = n(388032);
function E(e) {
    let {
            pid: t,
            analyticsLocation: n,
            allowOneClickGoLive: i = !1,
            onBeforeShowModal: l,
            onOneClickGoLive: o,
            appContext: u,
        } = e,
        d = (0, a.e7)([g.Z], () => g.Z.getVoiceChannelId()),
        y = (0, a.e7)([f.Z], () => f.Z.getChannel(d), [d]),
        O = (0, a.e7)([b.default], () => b.default.getCurrentUser()),
        v = null == y ? void 0 : y.getGuildId(),
        E = (0, a.e7)([p.Z], () => (0, c.Z)(p.Z)),
        S = (0, a.e7)([h.Z, m.Z], () => null != y && (0, s.JL)(y, h.Z, m.Z));
    return r.useCallback(async () => {
        await x({
            pid: t,
            voiceChannelId: d,
            user: O,
            targetGuildId: v,
            canGoLive: E,
            canStream: S,
            analyticsLocation: n,
            allowOneClickGoLive: i,
            onBeforeShowModal: l,
            onOneClickGoLive: o,
            appContext: u,
        });
    }, [t, d, O, v, E, S, n, i, l, o, u]);
}
async function S(e) {
    let {
            pid: t,
            analyticsLocation: n,
            allowOneClickGoLive: i = !1,
            onBeforeShowModal: r,
            onOneClickGoLive: a,
            appContext: l,
        } = e,
        o = g.Z.getVoiceChannelId(),
        u = f.Z.getChannel(o),
        d = b.default.getCurrentUser(),
        y = null == u ? void 0 : u.getGuildId(),
        O = null != u && (0, s.JL)(u, h.Z, m.Z),
        v = (0, c.Z)(p.Z);
    await x({
        pid: t,
        voiceChannelId: o,
        user: d,
        targetGuildId: y,
        canGoLive: v,
        canStream: O,
        analyticsLocation: n,
        allowOneClickGoLive: i,
        onBeforeShowModal: r,
        onOneClickGoLive: a,
        appContext: l,
    });
}
async function x(e) {
    let {
        pid: t,
        voiceChannelId: r,
        user: a,
        targetGuildId: s,
        canGoLive: c,
        canStream: f,
        analyticsLocation: h,
        allowOneClickGoLive: p,
        onBeforeShowModal: m,
        onOneClickGoLive: g,
        appContext: b,
    } = e;
    if (c && f) {
        if (p && null !== r) {
            let e = d.Z.getState().preset;
            if (e === O.ApplicationStreamPresets.PRESET_DOCUMENTS) {
                let { allowAutoQuality: t } = (0, o.IK)({ location: "overlay _goLive" });
                e = t ? O.ApplicationStreamPresets.PRESET_AUTO : O.ApplicationStreamPresets.PRESET_VIDEO;
            }
            let [n] = await (0, u.Z)(t, { preset: e });
            if (n) {
                null == g || g();
                return;
            }
        }
        if (null == a)
            return void (0, l.showToast)(
                (0, l.createToast)(v.intl.string(v.t.OKnWyb), l.ToastType.FAILURE, { appContext: y.IlC.OVERLAY }),
            );
        null == m || m(),
            (0, l.ZDy)(
                async () => {
                    let { default: e } = await Promise.all([
                        n.e("38697"),
                        n.e("4093"),
                        n.e("44183"),
                        n.e("59416"),
                    ]).then(n.bind(n, 60594));
                    return (n) => {
                        var r, a;
                        return (0, i.jsx)(
                            e,
                            ((r = (function (e) {
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
                            })({}, n)),
                            (a = a =
                                {
                                    sourcePID: t,
                                    selectSource: !1,
                                    guildId: s,
                                    selectGuild: null == s,
                                    analyticsLocation: h,
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var i = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, i);
                                      }
                                      return n;
                                  })(Object(a)).forEach(function (e) {
                                      Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e));
                                  }),
                            r),
                        );
                    };
                },
                { contextKey: null != b ? (0, l.VnL)(b) : void 0 },
            );
    }
}
