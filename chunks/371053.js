n.d(t, {
    N: () => _,
    P: () => b,
}),
    n(388685);
var i = n(54381),
    r = n(473749),
    l = n(442837),
    o = n(481060),
    a = n(580991),
    s = n(102172),
    c = n(74299),
    u = n(562224),
    d = n(361291),
    h = n(592125),
    p = n(430824),
    f = n(131951),
    m = n(496675),
    g = n(944486),
    y = n(594174),
    O = n(981631),
    v = n(37113),
    E = n(388032);
function b(e) {
    let {
            pid: t,
            analyticsLocation: n,
            allowOneClickGoLive: i = !1,
            onBeforeShowModal: o,
            onOneClickGoLive: a,
            appContext: u,
        } = e,
        d = (0, l.e7)([g.Z], () => g.Z.getVoiceChannelId()),
        O = (0, l.e7)([h.Z], () => h.Z.getChannel(d), [d]),
        v = (0, l.e7)([y.default], () => y.default.getCurrentUser()),
        E = null == O ? void 0 : O.getGuildId(),
        b = (0, l.e7)([f.Z], () => (0, c.Z)(f.Z)),
        _ = (0, l.e7)([p.Z, m.Z], () => null != O && (0, s.JL)(O, p.Z, m.Z));
    return r.useCallback(async () => {
        await S({
            pid: t,
            voiceChannelId: d,
            user: v,
            targetGuildId: E,
            canGoLive: b,
            canStream: _,
            analyticsLocation: n,
            allowOneClickGoLive: i,
            onBeforeShowModal: o,
            onOneClickGoLive: a,
            appContext: u,
        });
    }, [t, d, v, E, b, _, n, i, o, a, u]);
}
async function _(e) {
    let {
            pid: t,
            analyticsLocation: n,
            allowOneClickGoLive: i = !1,
            onBeforeShowModal: r,
            onOneClickGoLive: l,
            appContext: o,
        } = e,
        a = g.Z.getVoiceChannelId(),
        u = h.Z.getChannel(a),
        d = y.default.getCurrentUser(),
        O = null == u ? void 0 : u.getGuildId(),
        v = null != u && (0, s.JL)(u, p.Z, m.Z),
        E = (0, c.Z)(f.Z);
    await S({
        pid: t,
        voiceChannelId: a,
        user: d,
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
async function S(e) {
    let {
        pid: t,
        voiceChannelId: r,
        user: l,
        targetGuildId: s,
        canGoLive: c,
        canStream: h,
        analyticsLocation: p,
        allowOneClickGoLive: f,
        onBeforeShowModal: m,
        onOneClickGoLive: g,
        appContext: y,
    } = e;
    if (c && h) {
        if (f && null !== r) {
            let e = d.Z.getState().preset;
            if (e === v.ApplicationStreamPresets.PRESET_DOCUMENTS) {
                let { allowAutoQuality: t } = (0, a.IK)({ location: "overlay _goLive" });
                e = t ? v.ApplicationStreamPresets.PRESET_AUTO : v.ApplicationStreamPresets.PRESET_VIDEO;
            }
            let [n] = await (0, u.Z)(t, { preset: e });
            if (n) {
                null == g || g();
                return;
            }
        }
        if (null == l)
            return void (0, o.showToast)(
                (0, o.createToast)(E.intl.string(E.t.OKnWyb), o.ToastType.FAILURE, { appContext: O.IlC.OVERLAY }),
            );
        null == m || m(),
            (0, o.ZDy)(
                async () => {
                    let { default: e } = await Promise.all([
                        n.e("38697"),
                        n.e("4093"),
                        n.e("33840"),
                        n.e("39173"),
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
                { contextKey: null != y ? (0, o.VnL)(y) : void 0 },
            );
    }
}
