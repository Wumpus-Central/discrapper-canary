n.d(t, {
    J: () => I,
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
    _ = n(131704),
    O = n(944486),
    y = n(626135),
    v = n(77880),
    C = n(870569),
    j = n(981631),
    E = n(388032),
    S = n(390648);
function x(e, t, n) {
    return null != e && (null != n ? n.applicationId === e.id : null != t && t.application_id === e.id && t.type === j.IIU.PLAYING && (0, u.Z)(t, j.xjy.JOIN));
}
let I = i.memo(function (e) {
    let t,
        l,
        u,
        I,
        { stream: P, canGoLive: N, guildId: w, isStreaming: Z, channel: T, canStream: A, runningGame: R, embeddedActivity: D, activity: L, application: M, analyticsContext: k } = e,
        { skipModalForGame: U, showRefreshedGoLiveModal: G } = (0, g.a)({
            location: 'Activity Panel',
            autoTrackExposure: !1
        }),
        { parentAnalyticsLocation: B } = (0, h.ZP)(),
        { changeLeaveCallAndActivityIcons: F } = (0, v.A)({ location: 'Activity Actions' }),
        V = x(M, L, D),
        H = i.useCallback(() => {
            o()(null != L, 'Received null activity'),
                (0, p.v)(B, p.d.INVITE),
                y.default.track(j.rMx.OPEN_MODAL, {
                    type: 'Send Join Invite',
                    application_id: L.application_id,
                    location: k.location
                }),
                (0, a.h7)(L, !1);
        }, [L, k, B]),
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
            (0, b.Z)(P);
        }, [P]),
        K = i.useCallback(() => {
            let e = null != T && (0, _.vd)(T.type) ? T : null,
                t = null != e ? e.getGuildId() : w;
            if (U && null != R && null != O.Z.getVoiceChannelId()) {
                (0, g.s)('Activity Panel'), (0, m.Z)(R.pid);
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
                                sourcePID: null == R ? void 0 : R.pid,
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
        }, [T, w, R, G, U]),
        Y =
            (null != R || null == D || (0, c.R)()) && (Z || N)
                ? (Z
                      ? ((t = !1),
                        (l = () => {
                            W(), (0, p.v)(B, p.d.STREAM, !1);
                        }),
                        (u = s.g5r),
                        (I = E.intl.string(E.t.S5anIS)))
                      : A
                        ? ((t = !1),
                          (l = () => {
                              K(), (0, p.v)(B, p.d.STREAM, !0);
                          }),
                          (u = s.hGI),
                          (I = null != R ? E.intl.formatToPlainString(E.t.AB5gT0, { game: R.name }) : E.intl.string(E.t.FeUKeH)))
                        : ((t = !0), (l = null), (u = s.hGI), (I = null != T && (0, _.vd)(T.type) ? E.intl.string(E.t.uQn9Bw) : null != w ? E.intl.string(E.t.fBXEoK) : E.intl.string(E.t.n3feND))),
                  (0, r.jsx)('div', {
                      className: S.panelButtonContainer,
                      children: (0, r.jsx)(C.Z, {
                          tooltipText: I,
                          disabled: t,
                          onClick: l,
                          icon: u
                      })
                  }))
                : null,
        q =
            V && null == D
                ? (0, r.jsx)(C.Z, {
                      tooltipText: E.intl.string(E.t['hC/Ze3']),
                      onClick: H,
                      icon: s.ejJ
                  })
                : null,
        X =
            null == D
                ? null
                : (0, r.jsx)(C.Z, {
                      tooltipText: E.intl.string(E.t['R/FK4O']),
                      onClick: z(D.applicationId, D.location),
                      icon: F ? s.Dio : s.PBZ
                  }),
        Q = null == P ? null : (0, r.jsx)(f.Z, {});
    return null == Y && null == q && null == X
        ? null
        : (0, r.jsxs)('div', {
              className: S.actions,
              children: [Y, q, null != X ? X : Q]
          });
});
