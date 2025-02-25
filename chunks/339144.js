n.d(t, {
    J: () => C,
    y: () => x
});
var r = n(200651),
    i = n(192379),
    l = n(512722),
    o = n.n(l),
    a = n(481060),
    s = n(24124),
    c = n(636449),
    u = n(620662),
    d = n(513202),
    p = n(311352),
    h = n(668519),
    f = n(803647),
    g = n(810632),
    m = n(131704),
    b = n(944486),
    v = n(626135),
    y = n(870569),
    O = n(981631),
    j = n(388032),
    _ = n(12990);
function x(e, t, n) {
    return null != e && (null != n ? n.applicationId === e.id : null != t && t.application_id === e.id && t.type === O.IIU.PLAYING && (0, u.Z)(t, O.xjy.JOIN));
}
let C = i.memo(function (e) {
    let t,
        l,
        u,
        C,
        { stream: P, canGoLive: S, guildId: N, isStreaming: Z, channel: I, canStream: w, runningGame: E, embeddedActivity: T, activity: D, application: A, analyticsContext: R } = e,
        { showRefreshedGoLiveModal: L } = (0, h.a)({
            location: 'Activity Panel',
            autoTrackExposure: !1
        }),
        M = (0, g.B)(O.IlC.APP),
        k = x(A, D, T),
        G = i.useCallback(() => {
            o()(null != D, 'Received null activity'),
                v.default.track(O.rMx.OPEN_MODAL, {
                    type: 'Send Join Invite',
                    application_id: D.application_id,
                    location: R.location
                }),
                (0, s.h7)(D, !1);
        }, [D, R]),
        B = i.useCallback(
            (e, t) => () => {
                d.Z.leaveActivity({
                    location: t,
                    applicationId: e,
                    showFeedback: !0
                });
            },
            []
        ),
        U = i.useCallback(() => {
            (0, f.Z)(P);
        }, [P]),
        W = i.useCallback(() => {
            let e = null != I && (0, m.vd)(I.type) ? I : null,
                t = null != e ? e.getGuildId() : N;
            if (L && null != b.Z.getVoiceChannelId()) {
                M();
                return;
            }
            (0, a.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e('79477'), n.e('32959')]).then(n.bind(n, 60594));
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
                                sourcePID: null == E ? void 0 : E.pid,
                                selectSource: !1,
                                guildId: t,
                                analyticsLocation: O.Sbl.ACTIVITY_PANEL
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
        }, [I, N, E, M, L]),
        V =
            (null != E || null == T || (0, c.R)()) && (Z || S)
                ? (Z ? ((t = !1), (l = U), (u = a.g5r), (C = j.NW.string(j.t.S5anIS))) : w ? ((t = !1), (l = W), (u = a.hGI), (C = null != E ? j.NW.formatToPlainString(j.t.AB5gT0, { game: E.name }) : j.NW.string(j.t.FeUKeH))) : ((t = !0), (l = null), (u = a.hGI), (C = null != I && (0, m.vd)(I.type) ? j.NW.string(j.t.uQn9Bw) : null != N ? j.NW.string(j.t.fBXEoK) : j.NW.string(j.t.n3feND))),
                  (0, r.jsx)('div', {
                      className: _.panelButtonContainer,
                      children: (0, r.jsx)(y.Z, {
                          tooltipText: C,
                          disabled: t,
                          onClick: l,
                          icon: u
                      })
                  }))
                : null,
        F =
            k && null == T
                ? (0, r.jsx)(y.Z, {
                      tooltipText: j.NW.string(j.t['hC/Ze3']),
                      onClick: G,
                      icon: a.ejJ
                  })
                : null,
        H =
            null == T
                ? null
                : (0, r.jsx)(y.Z, {
                      tooltipText: j.NW.string(j.t['R/FK4O']),
                      onClick: B(T.applicationId, T.location),
                      icon: a.PBZ
                  }),
        z = null == P ? null : (0, r.jsx)(p.Z, {});
    return null == V && null == F && null == H
        ? null
        : (0, r.jsxs)('div', {
              className: _.actions,
              children: [V, F, null != H ? H : z]
          });
});
