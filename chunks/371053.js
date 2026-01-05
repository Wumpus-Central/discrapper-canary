n.d(t, {
    N: () => S,
    P: () => b,
}),
    n(388685);
var i = n(54381),
    r = n(473749),
    l = n(442837),
    o = n(481060),
    a = n(580991),
    s = n(102172),
    u = n(74299),
    c = n(562224),
    d = n(361291),
    h = n(592125),
    p = n(430824),
    f = n(131951),
    m = n(496675),
    g = n(944486),
    O = n(594174),
    y = n(981631),
    E = n(37113),
    v = n(388032);
function b(e) {
    let {
            pid: t,
            analyticsLocation: n,
            allowOneClickGoLive: i = !1,
            onBeforeShowModal: o,
            onOneClickGoLive: a,
            appContext: c,
        } = e,
        d = (0, l.e7)([g.Z], () => g.Z.getVoiceChannelId()),
        y = (0, l.e7)([h.Z], () => h.Z.getChannel(d), [d]),
        E = (0, l.e7)([O.default], () => O.default.getCurrentUser()),
        v = (0, l.e7)([f.Z], () => (0, u.Z)(f.Z)),
        b = (0, l.e7)([p.Z, m.Z], () => null != y && (0, s.JL)(y, p.Z, m.Z));
    return r.useCallback(async () => {
        await x({
            pid: t,
            voiceChannelId: d,
            user: E,
            canGoLive: v,
            canStream: b,
            analyticsLocation: n,
            allowOneClickGoLive: i,
            onBeforeShowModal: o,
            onOneClickGoLive: a,
            appContext: c,
        });
    }, [t, d, E, v, b, n, i, o, a, c]);
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
        a = g.Z.getVoiceChannelId(),
        c = h.Z.getChannel(a),
        d = O.default.getCurrentUser(),
        y = null != c && (0, s.JL)(c, p.Z, m.Z),
        E = (0, u.Z)(f.Z);
    await x({
        pid: t,
        voiceChannelId: a,
        user: d,
        canGoLive: E,
        canStream: y,
        analyticsLocation: n,
        allowOneClickGoLive: i,
        onBeforeShowModal: r,
        onOneClickGoLive: l,
        appContext: o,
    });
}
async function x(e) {
    let {
        pid: t,
        voiceChannelId: r,
        user: l,
        canGoLive: s,
        canStream: u,
        allowOneClickGoLive: h,
        onBeforeShowModal: p,
        onOneClickGoLive: f,
        appContext: m,
    } = e;
    if (s && u) {
        if (h && null !== r) {
            let e = d.Z.getState().preset;
            if (e === E.tI.PRESET_DOCUMENTS) {
                let { allowAutoQuality: t } = (0, a.IK)({ location: "overlay _goLive" });
                e = t ? E.tI.PRESET_AUTO : E.tI.PRESET_VIDEO;
            }
            let [n] = await (0, c.Z)(t, { preset: e });
            if (n) {
                null == f || f();
                return;
            }
        }
        if (null == l)
            return void (0, o.showToast)(
                (0, o.createToast)(v.intl.string(v.t.OKnWyb), o.ToastType.FAILURE, { appContext: y.IlC.OVERLAY }),
            );
        null == p || p(),
            (0, o.ZDy)(
                async () => {
                    let { default: e } = await Promise.all([n.e("46746"), n.e("84064")]).then(n.bind(n, 60594));
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
                { contextKey: null != m ? (0, o.VnL)(m) : void 0 },
            );
    }
}
