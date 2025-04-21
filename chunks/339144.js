n.d(t, {
    J: () => I,
    y: () => E
});
var r = n(200651),
    i = n(192379),
    l = n(512722),
    o = n.n(l),
    s = n(252258),
    a = n(481060),
    c = n(24124),
    u = n(636449),
    d = n(620662),
    h = n(513202),
    p = n(906732),
    f = n(522651),
    g = n(311352),
    m = n(668519),
    b = n(562224),
    y = n(803647),
    _ = n(131704),
    O = n(944486),
    v = n(626135),
    C = n(870569),
    j = n(981631),
    S = n(388032),
    x = n(390648);
function E(e, t, n) {
    return null != e && (null != n ? n.applicationId === e.id : null != t && t.application_id === e.id && t.type === j.IIU.PLAYING && (0, d.Z)(t, j.xjy.JOIN));
}
let I = i.memo(function (e) {
    let t,
        l,
        d,
        I,
        { stream: P, canGoLive: w, guildId: N, isStreaming: Z, channel: T, canStream: A, runningGame: R, embeddedActivity: D, activity: L, application: k, analyticsContext: M } = e,
        { skipModalForGame: U, showRefreshedGoLiveModal: G } = (0, m.a)({
            location: 'Activity Panel',
            autoTrackExposure: !1
        }),
        { parentAnalyticsLocation: B } = (0, p.ZP)(),
        V = E(k, L, D),
        F = i.useCallback(() => {
            o()(null != L, 'Received null activity'),
                (0, f.v)(B, f.d.INVITE),
                v.default.track(j.rMx.OPEN_MODAL, {
                    type: 'Send Join Invite',
                    application_id: L.application_id,
                    location: M.location
                }),
                (0, c.h7)(L, !1);
        }, [L, M, B]),
        H = i.useCallback(
            (e, t) => () => {
                (0, f.v)(B, f.d.LEAVE_ACTIVITY),
                    h.Z.leaveActivity({
                        location: t,
                        applicationId: e,
                        showFeedback: !0
                    });
            },
            [B]
        ),
        z = i.useCallback(() => {
            (0, y.Z)(P);
        }, [P]),
        W = i.useCallback(() => {
            let e = null != T && (0, _.vd)(T.type) ? T : null,
                t = null != e ? e.getGuildId() : N;
            if (U && null != R && null != O.Z.getVoiceChannelId()) {
                (0, m.s)('Activity Panel'), (0, b.Z)(R.pid);
                return;
            }
            (0, a.ZDy)(async () => {
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
        }, [T, N, R, G, U]),
        Y =
            (null != R || null == D || (0, u.R)({ isContextless: D.location.kind === s.E.CONTEXTLESS })) && (Z || w)
                ? (Z
                      ? ((t = !1),
                        (l = () => {
                            z(), (0, f.v)(B, f.d.STREAM, !1);
                        }),
                        (d = a.g5r),
                        (I = S.intl.string(S.t.S5anIS)))
                      : A
                        ? ((t = !1),
                          (l = () => {
                              W(), (0, f.v)(B, f.d.STREAM, !0);
                          }),
                          (d = a.hGI),
                          (I = null != R ? S.intl.formatToPlainString(S.t.AB5gT0, { game: R.name }) : S.intl.string(S.t.FeUKeH)))
                        : ((t = !0), (l = null), (d = a.hGI), (I = null != T && (0, _.vd)(T.type) ? S.intl.string(S.t.uQn9Bw) : null != N ? S.intl.string(S.t.fBXEoK) : S.intl.string(S.t.n3feND))),
                  (0, r.jsx)('div', {
                      className: x.panelButtonContainer,
                      children: (0, r.jsx)(C.Z, {
                          tooltipText: I,
                          disabled: t,
                          onClick: l,
                          icon: d
                      })
                  }))
                : null,
        K =
            V && null == D
                ? (0, r.jsx)(C.Z, {
                      tooltipText: S.intl.string(S.t['hC/Ze3']),
                      onClick: F,
                      icon: a.ejJ
                  })
                : null,
        q =
            null == D
                ? null
                : (0, r.jsx)(C.Z, {
                      tooltipText: S.intl.string(S.t['R/FK4O']),
                      onClick: H(D.applicationId, D.location),
                      icon: a.PBZ
                  }),
        Q = null == P ? null : (0, r.jsx)(g.Z, {});
    return null == Y && null == K && null == q
        ? null
        : (0, r.jsxs)('div', {
              className: x.actions,
              children: [Y, K, null != q ? q : Q]
          });
});
