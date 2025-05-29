n.d(t, {
    J: () => P,
    y: () => x
});
var r = n(255367),
    i = n(73800),
    l = n(512722),
    o = n.n(l),
    s = n(481060),
    a = n(24124),
    c = n(636449),
    u = n(620662),
    d = n(513202),
    h = n(906732),
    p = n(522651),
    f = n(311352),
    g = n(668519),
    m = n(562224),
    b = n(803647),
    y = n(131704),
    O = n(944486),
    _ = n(626135),
    v = n(77880),
    C = n(870569),
    j = n(981631),
    S = n(388032),
    E = n(390648);
function x(e, t, n) {
    return null != e && (null != n ? n.applicationId === e.id : null != t && t.application_id === e.id && t.type === j.IIU.PLAYING && (0, u.Z)(t, j.xjy.JOIN));
}
let P = i.memo(function (e) {
    let t,
        l,
        u,
        P,
        { stream: I, canGoLive: w, guildId: N, isStreaming: Z, channel: T, canStream: R, runningGame: A, embeddedActivity: D, activity: L, application: k, analyticsContext: M } = e,
        { skipModalForGame: U, showRefreshedGoLiveModal: G } = (0, g.a)({
            location: 'Activity Panel',
            autoTrackExposure: !1
        }),
        { parentAnalyticsLocation: B } = (0, h.ZP)(),
        { changeLeaveCallAndActivityIcons: V } = (0, v.A)({ location: 'Activity Actions' }),
        H = x(k, L, D),
        F = i.useCallback(() => {
            o()(null != L, 'Received null activity'),
                (0, p.v)(B, p.d.INVITE),
                _.default.track(j.rMx.OPEN_MODAL, {
                    type: 'Send Join Invite',
                    application_id: L.application_id,
                    location: M.location
                }),
                (0, a.h7)(L, !1);
        }, [L, M, B]),
        z = i.useCallback(
            (e, t) => () => {
                (0, p.v)(B, p.d.LEAVE_ACTIVITY),
                    d.Z.leaveActivity({
                        location: t,
                        applicationId: e,
                        showFeedback: !0
                    });
            },
            [B]
        ),
        W = i.useCallback(() => {
            (0, b.Z)(I);
        }, [I]),
        Y = i.useCallback(() => {
            let e = null != T && (0, y.vd)(T.type) ? T : null,
                t = null != e ? e.getGuildId() : N;
            if (U && null != A && null != O.Z.getVoiceChannelId()) {
                (0, g.s)('Activity Panel'), (0, m.Z)(A.pid);
                return;
            }
            (0, s.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e('46746'), n.e('33641')]).then(n.bind(n, 60594));
                return (n) => {
                    var i, l;
                    return (0, r.jsx)(
                        e,
                        ((i = (function (e) {
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
                        })({}, n)),
                        (l = l =
                            {
                                sourcePID: null == A ? void 0 : A.pid,
                                selectSource: !!G && null != O.Z.getVoiceChannelId(),
                                guildId: t,
                                analyticsLocation: j.Sbl.ACTIVITY_PANEL
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
                        i)
                    );
                };
            });
        }, [T, N, A, G, U]),
        K =
            (null != A || null == D || (0, c.R)()) && (Z || w)
                ? (Z
                      ? ((t = !1),
                        (l = () => {
                            W(), (0, p.v)(B, p.d.STREAM, !1);
                        }),
                        (u = s.g5r),
                        (P = S.intl.string(S.t.S5anIS)))
                      : R
                        ? ((t = !1),
                          (l = () => {
                              Y(), (0, p.v)(B, p.d.STREAM, !0);
                          }),
                          (u = s.hGI),
                          (P = null != A ? S.intl.formatToPlainString(S.t.AB5gT0, { game: A.name }) : S.intl.string(S.t.FeUKeH)))
                        : ((t = !0), (l = null), (u = s.hGI), (P = null != T && (0, y.vd)(T.type) ? S.intl.string(S.t.uQn9Bw) : null != N ? S.intl.string(S.t.fBXEoK) : S.intl.string(S.t.n3feND))),
                  (0, r.jsx)('div', {
                      className: E.panelButtonContainer,
                      children: (0, r.jsx)(C.Z, {
                          tooltipText: P,
                          disabled: t,
                          onClick: l,
                          icon: u
                      })
                  }))
                : null,
        q =
            H && null == D
                ? (0, r.jsx)(C.Z, {
                      tooltipText: S.intl.string(S.t['hC/Ze3']),
                      onClick: F,
                      icon: s.ejJ
                  })
                : null,
        Q =
            null == D
                ? null
                : (0, r.jsx)(C.Z, {
                      tooltipText: S.intl.string(S.t['R/FK4O']),
                      onClick: z(D.applicationId, D.location),
                      icon: V ? s.Dio : s.PBZ
                  }),
        X = null == I ? null : (0, r.jsx)(f.Z, {});
    return null == K && null == q && null == Q
        ? null
        : (0, r.jsxs)('div', {
              className: E.actions,
              children: [K, q, null != Q ? Q : X]
          });
});
