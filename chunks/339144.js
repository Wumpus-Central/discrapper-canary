n.d(t, {
    J: () => N,
    y: () => P
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
    p = n(906732),
    h = n(522651),
    f = n(311352),
    g = n(668519),
    m = n(803647),
    b = n(810632),
    y = n(131704),
    v = n(944486),
    O = n(626135),
    j = n(870569),
    _ = n(981631),
    C = n(388032),
    x = n(172241);
function P(e, t, n) {
    return null != e && (null != n ? n.applicationId === e.id : null != t && t.application_id === e.id && t.type === _.IIU.PLAYING && (0, u.Z)(t, _.xjy.JOIN));
}
let N = i.memo(function (e) {
    let t,
        l,
        u,
        N,
        { stream: S, canGoLive: I, guildId: Z, isStreaming: E, channel: w, canStream: T, runningGame: A, embeddedActivity: D, activity: R, application: L, analyticsContext: M } = e,
        { showRefreshedGoLiveModal: k } = (0, g.a)({
            location: 'Activity Panel',
            autoTrackExposure: !1
        }),
        G = (0, b.B)(_.IlC.APP),
        { parentAnalyticsLocation: U } = (0, p.ZP)(),
        B = P(L, R, D),
        W = i.useCallback(() => {
            o()(null != R, 'Received null activity'),
                (0, h.v)(U, h.d.INVITE),
                O.default.track(_.rMx.OPEN_MODAL, {
                    type: 'Send Join Invite',
                    application_id: R.application_id,
                    location: M.location
                }),
                (0, s.h7)(R, !1);
        }, [R, M, U]),
        V = i.useCallback(
            (e, t) => () => {
                (0, h.v)(U, h.d.LEAVE_ACTIVITY),
                    d.Z.leaveActivity({
                        location: t,
                        applicationId: e,
                        showFeedback: !0
                    });
            },
            [U]
        ),
        F = i.useCallback(() => {
            (0, m.Z)(S);
        }, [S]),
        H = i.useCallback(() => {
            let e = null != w && (0, y.vd)(w.type) ? w : null,
                t = null != e ? e.getGuildId() : Z;
            if (k && null != v.Z.getVoiceChannelId()) {
                G();
                return;
            }
            (0, a.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e('79477'), n.e('15670')]).then(n.bind(n, 60594));
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
                                selectSource: !1,
                                guildId: t,
                                analyticsLocation: _.Sbl.ACTIVITY_PANEL
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
        }, [w, Z, A, G, k]),
        z =
            (null != A || null == D || (0, c.R)()) && (E || I)
                ? (E
                      ? ((t = !1),
                        (l = () => {
                            F(), (0, h.v)(U, h.d.STREAM, !1);
                        }),
                        (u = a.g5r),
                        (N = C.NW.string(C.t.S5anIS)))
                      : T
                        ? ((t = !1),
                          (l = () => {
                              H(), (0, h.v)(U, h.d.STREAM, !0);
                          }),
                          (u = a.hGI),
                          (N = null != A ? C.NW.formatToPlainString(C.t.AB5gT0, { game: A.name }) : C.NW.string(C.t.FeUKeH)))
                        : ((t = !0), (l = null), (u = a.hGI), (N = null != w && (0, y.vd)(w.type) ? C.NW.string(C.t.uQn9Bw) : null != Z ? C.NW.string(C.t.fBXEoK) : C.NW.string(C.t.n3feND))),
                  (0, r.jsx)('div', {
                      className: x.panelButtonContainer,
                      children: (0, r.jsx)(j.Z, {
                          tooltipText: N,
                          disabled: t,
                          onClick: l,
                          icon: u
                      })
                  }))
                : null,
        Y =
            B && null == D
                ? (0, r.jsx)(j.Z, {
                      tooltipText: C.NW.string(C.t['hC/Ze3']),
                      onClick: W,
                      icon: a.ejJ
                  })
                : null,
        q =
            null == D
                ? null
                : (0, r.jsx)(j.Z, {
                      tooltipText: C.NW.string(C.t['R/FK4O']),
                      onClick: V(D.applicationId, D.location),
                      icon: a.PBZ
                  }),
        Q = null == S ? null : (0, r.jsx)(f.Z, {});
    return null == z && null == Y && null == q
        ? null
        : (0, r.jsxs)('div', {
              className: x.actions,
              children: [z, Y, null != q ? q : Q]
          });
});
