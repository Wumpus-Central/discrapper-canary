n.d(t, {
    N: () => b,
    P: () => S,
}),
    n(388685);
var i = n(54381),
    r = n(473749),
    l = n(442837),
    a = n(481060),
    o = n(580991),
    s = n(102172),
    u = n(74299),
    c = n(562224),
    d = n(361291),
    h = n(592125),
    p = n(430824),
    f = n(131951),
    m = n(496675),
    g = n(944486),
    y = n(594174),
    O = n(981631),
    E = n(37113),
    v = n(388032);
function S(e) {
    let {
            pid: t,
            analyticsLocation: n,
            allowOneClickGoLive: i = !1,
            onBeforeShowModal: a,
            onOneClickGoLive: o,
            appContext: c,
        } = e,
        d = (0, l.e7)([g.Z], () => g.Z.getVoiceChannelId()),
        O = (0, l.e7)([h.Z], () => h.Z.getChannel(d), [d]),
        E = (0, l.e7)([y.default], () => y.default.getCurrentUser()),
        v = null == O ? void 0 : O.getGuildId(),
        S = (0, l.e7)([f.Z], () => (0, u.Z)(f.Z)),
        b = (0, l.e7)([p.Z, m.Z], () => null != O && (0, s.JL)(O, p.Z, m.Z));
    return r.useCallback(async () => {
        await x({
            pid: t,
            voiceChannelId: d,
            user: E,
            targetGuildId: v,
            canGoLive: S,
            canStream: b,
            analyticsLocation: n,
            allowOneClickGoLive: i,
            onBeforeShowModal: a,
            onOneClickGoLive: o,
            appContext: c,
        });
    }, [t, d, E, v, S, b, n, i, a, o, c]);
}
async function b(e) {
    let {
            pid: t,
            analyticsLocation: n,
            allowOneClickGoLive: i = !1,
            onBeforeShowModal: r,
            onOneClickGoLive: l,
            appContext: a,
        } = e,
        o = g.Z.getVoiceChannelId(),
        c = h.Z.getChannel(o),
        d = y.default.getCurrentUser(),
        O = null == c ? void 0 : c.getGuildId(),
        E = null != c && (0, s.JL)(c, p.Z, m.Z),
        v = (0, u.Z)(f.Z);
    await x({
        pid: t,
        voiceChannelId: o,
        user: d,
        targetGuildId: O,
        canGoLive: v,
        canStream: E,
        analyticsLocation: n,
        allowOneClickGoLive: i,
        onBeforeShowModal: r,
        onOneClickGoLive: l,
        appContext: a,
    });
}
async function x(e) {
    let {
        pid: t,
        voiceChannelId: r,
        user: l,
        targetGuildId: s,
        canGoLive: u,
        canStream: h,
        analyticsLocation: p,
        allowOneClickGoLive: f,
        onBeforeShowModal: m,
        onOneClickGoLive: g,
        appContext: y,
    } = e;
    if (u && h) {
        if (f && null !== r) {
            let e = d.Z.getState().preset;
            if (e === E.ApplicationStreamPresets.PRESET_DOCUMENTS) {
                let { allowAutoQuality: t } = (0, o.IK)({ location: "overlay _goLive" });
                e = t ? E.ApplicationStreamPresets.PRESET_AUTO : E.ApplicationStreamPresets.PRESET_VIDEO;
            }
            let [n] = await (0, c.Z)(t, { preset: e });
            if (n) {
                null == g || g();
                return;
            }
        }
        if (null == l)
            return void (0, a.showToast)(
                (0, a.createToast)(v.intl.string(v.t.OKnWyb), a.ToastType.FAILURE, { appContext: O.IlC.OVERLAY }),
            );
        null == m || m(),
            (0, a.ZDy)(
                async () => {
                    let { default: e } = await Promise.all([
                        n.e("38697"),
                        n.e("4093"),
                        n.e("47863"),
                        n.e("59416"),
                    ]).then(n.bind(n, 60594));
                    return (n) => {
                        var r, l;
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
                            (l = l =
                                {
                                    sourcePID: t,
                                    selectSource: !1,
                                    guildId: s,
                                    selectGuild: null == s,
                                    analyticsLocation: p,
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var i = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, i);
                                      }
                                      return n;
                                  })(Object(l)).forEach(function (e) {
                                      Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e));
                                  }),
                            r),
                        );
                    };
                },
                { contextKey: null != y ? (0, a.VnL)(y) : void 0 },
            );
    }
}
