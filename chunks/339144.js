n.d(t, {
    J: () => P,
    y: () => S,
});
var r = n(951288),
    i = n(647438),
    l = n(512722),
    o = n.n(l),
    a = n(144269),
    s = n(481060),
    c = n(24124),
    u = n(636449),
    d = n(620662),
    p = n(513202),
    h = n(906732),
    f = n(522651),
    g = n(311352),
    m = n(668519),
    b = n(803647),
    O = n(131704),
    y = n(944486),
    _ = n(626135),
    v = n(381096),
    j = n(870569),
    x = n(981631),
    C = n(388032),
    E = n(258628);
function S(e, t, n) {
    return (
        null != e &&
        (null != n
            ? n.applicationId === e.id
            : null != t && t.application_id === e.id && t.type === x.IIU.PLAYING && (0, d.Z)(t, x.xjy.JOIN))
    );
}
let P = i.memo(function (e) {
    let t,
        l,
        d,
        P,
        {
            stream: I,
            canGoLive: N,
            guildId: Z,
            isStreaming: w,
            channel: T,
            canStream: A,
            runningGame: R,
            embeddedActivity: D,
            activity: M,
            application: L,
            analyticsContext: k,
        } = e,
        { showRefreshedGoLiveModal: U } = (0, m.a)({
            location: "Activity Panel",
            autoTrackExposure: !1,
        }),
        { parentAnalyticsLocation: G } = (0, h.ZP)(),
        B = S(L, M, D),
        F = i.useCallback(() => {
            o()(null != M, "Received null activity"),
                (0, f.v)(G, f.d.INVITE),
                _.default.track(x.rMx.OPEN_MODAL, {
                    type: "Send Join Invite",
                    application_id: M.application_id,
                    location: k.location,
                }),
                (0, c.h7)(M, !1);
        }, [M, k, G]),
        V = i.useCallback(
            (e, t) => () => {
                (0, f.v)(G, f.d.LEAVE_ACTIVITY),
                    p.Z.leaveActivity({
                        location: t,
                        applicationId: e,
                        showFeedback: !0,
                    });
            },
            [G],
        ),
        H = i.useCallback(() => {
            (0, b.Z)(I);
        }, [I]),
        z = i.useCallback(() => {
            let e = null != T && (0, O.vd)(T.type) ? T : null,
                t = null != e ? e.getGuildId() : Z;
            (0, s.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e("46746"), n.e("33641")]).then(n.bind(n, 60594));
                return (n) => {
                    var i, l;
                    return (0, r.jsx)(
                        e,
                        ((i = (function (e) {
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
                        })({}, n)),
                        (l = l =
                            {
                                sourcePID: null == R ? void 0 : R.pid,
                                selectSource: !!U && null != y.Z.getVoiceChannelId(),
                                guildId: t,
                                analyticsLocation: x.Sbl.ACTIVITY_PANEL,
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(l)).forEach(function (e) {
                                  Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                              }),
                        i),
                    );
                };
            });
        }, [T, Z, R, U]),
        W =
            (null != R || null == D || (0, u.R)()) && (w || N)
                ? (w
                      ? ((t = !1),
                        (l = () => {
                            H(), (0, f.v)(G, f.d.STREAM, !1);
                        }),
                        (d = s.g5r),
                        (P = C.intl.string(C.t.S5anIS)))
                      : A
                        ? ((t = !1),
                          (l = () => {
                              z(), (0, f.v)(G, f.d.STREAM, !0);
                          }),
                          (d = s.hGI),
                          (P =
                              null != R
                                  ? C.intl.formatToPlainString(C.t.AB5gT0, { game: R.name })
                                  : C.intl.string(C.t.FeUKeH)))
                        : ((t = !0),
                          (l = null),
                          (d = s.hGI),
                          (P =
                              null != T && (0, O.vd)(T.type)
                                  ? C.intl.string(C.t.uQn9Bw)
                                  : null != Z
                                    ? C.intl.string(C.t.fBXEoK)
                                    : C.intl.string(C.t.n3feND))),
                  (0, r.jsx)("div", {
                      className: E.panelButtonContainer,
                      children: (0, r.jsx)(j.Z, {
                          tooltipText: P,
                          disabled: t,
                          onClick: l,
                          icon: d,
                      }),
                  }))
                : null,
        K =
            B && null == D
                ? (0, r.jsx)(j.Z, {
                      tooltipText: C.intl.string(C.t["hC/Ze3"]),
                      onClick: F,
                      icon: s.ejJ,
                  })
                : null,
        Y =
            null == D
                ? null
                : (0, r.jsx)(j.Z, {
                      tooltipText: C.intl.string(C.t["R/FK4O"]),
                      onClick: V(D.applicationId, D.location),
                      icon: s.PBZ,
                  }),
        q = null == I ? null : (0, r.jsx)(g.Z, {}),
        X = v.Z.getConfig({ location: "ActivityActions" }).enabled
            ? (0, r.jsx)(j.Z, {
                  icon: a.u,
                  tooltipText: C.intl.string(C.t.sbdnp6),
              })
            : null;
    return null == W && null == K && null == Y
        ? null
        : (0, r.jsxs)("div", {
              className: E.actions,
              children: [X, W, K, null != Y ? Y : q],
          });
});
