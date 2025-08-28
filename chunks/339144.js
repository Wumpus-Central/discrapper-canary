n.d(t, {
    J: () => E,
    y: () => C,
});
var r = n(951288),
    i = n(647438),
    l = n(512722),
    o = n.n(l),
    a = n(481060),
    s = n(24124),
    c = n(636449),
    u = n(620662),
    d = n(513202),
    p = n(906732),
    h = n(522651),
    f = n(311352),
    g = n(668519),
    m = n(803647),
    b = n(131704),
    O = n(944486),
    y = n(626135),
    _ = n(870569),
    v = n(981631),
    j = n(388032),
    x = n(258628);
function C(e, t, n) {
    return (
        null != e &&
        (null != n
            ? n.applicationId === e.id
            : null != t && t.application_id === e.id && t.type === v.IIU.PLAYING && (0, u.Z)(t, v.xjy.JOIN))
    );
}
let E = i.memo(function (e) {
    let t,
        l,
        u,
        E,
        {
            stream: S,
            canGoLive: P,
            guildId: I,
            isStreaming: N,
            channel: Z,
            canStream: w,
            runningGame: T,
            embeddedActivity: A,
            activity: R,
            application: D,
            analyticsContext: M,
        } = e,
        { showRefreshedGoLiveModal: L } = (0, g.a)({
            location: "Activity Panel",
            autoTrackExposure: !1,
        }),
        { parentAnalyticsLocation: k } = (0, p.ZP)(),
        U = C(D, R, A),
        G = i.useCallback(() => {
            o()(null != R, "Received null activity"),
                (0, h.v)(k, h.d.INVITE),
                y.default.track(v.rMx.OPEN_MODAL, {
                    type: "Send Join Invite",
                    application_id: R.application_id,
                    location: M.location,
                }),
                (0, s.h7)(R, !1);
        }, [R, M, k]),
        B = i.useCallback(
            (e, t) => () => {
                (0, h.v)(k, h.d.LEAVE_ACTIVITY),
                    d.Z.leaveActivity({
                        location: t,
                        applicationId: e,
                        showFeedback: !0,
                    });
            },
            [k],
        ),
        F = i.useCallback(() => {
            (0, m.Z)(S);
        }, [S]),
        V = i.useCallback(() => {
            let e = null != Z && (0, b.vd)(Z.type) ? Z : null,
                t = null != e ? e.getGuildId() : I;
            (0, a.ZDy)(async () => {
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
                                sourcePID: null == T ? void 0 : T.pid,
                                selectSource: !!L && null != O.Z.getVoiceChannelId(),
                                guildId: t,
                                analyticsLocation: v.Sbl.ACTIVITY_PANEL,
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
        }, [Z, I, T, L]),
        H =
            (null != T || null == A || (0, c.R)()) && (N || P)
                ? (N
                      ? ((t = !1),
                        (l = () => {
                            F(), (0, h.v)(k, h.d.STREAM, !1);
                        }),
                        (u = a.g5r),
                        (E = j.intl.string(j.t.S5anIS)))
                      : w
                        ? ((t = !1),
                          (l = () => {
                              V(), (0, h.v)(k, h.d.STREAM, !0);
                          }),
                          (u = a.hGI),
                          (E =
                              null != T
                                  ? j.intl.formatToPlainString(j.t.AB5gT0, { game: T.name })
                                  : j.intl.string(j.t.FeUKeH)))
                        : ((t = !0),
                          (l = null),
                          (u = a.hGI),
                          (E =
                              null != Z && (0, b.vd)(Z.type)
                                  ? j.intl.string(j.t.uQn9Bw)
                                  : null != I
                                    ? j.intl.string(j.t.fBXEoK)
                                    : j.intl.string(j.t.n3feND))),
                  (0, r.jsx)("div", {
                      className: x.panelButtonContainer,
                      children: (0, r.jsx)(_.Z, {
                          tooltipText: E,
                          disabled: t,
                          onClick: l,
                          icon: u,
                      }),
                  }))
                : null,
        z =
            U && null == A
                ? (0, r.jsx)(_.Z, {
                      tooltipText: j.intl.string(j.t["hC/Ze3"]),
                      onClick: G,
                      icon: a.ejJ,
                  })
                : null,
        W =
            null == A
                ? null
                : (0, r.jsx)(_.Z, {
                      tooltipText: j.intl.string(j.t["R/FK4O"]),
                      onClick: B(A.applicationId, A.location),
                      icon: a.PBZ,
                  }),
        K = null == S ? null : (0, r.jsx)(f.Z, {});
    return null == H && null == z && null == W
        ? null
        : (0, r.jsxs)("div", {
              className: x.actions,
              children: [H, z, null != W ? W : K],
          });
});
