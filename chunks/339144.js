n.d(t, {
    J: () => I,
    y: () => P
});
var r = n(200651),
    i = n(192379),
    l = n(512722),
    o = n.n(l),
    a = n(252258),
    s = n(481060),
    c = n(24124),
    u = n(636449),
    d = n(620662),
    p = n(513202),
    h = n(906732),
    f = n(522651),
    g = n(311352),
    m = n(668519),
    b = n(562224),
    y = n(803647),
    _ = n(131704),
    v = n(944486),
    O = n(626135),
    j = n(870569),
    x = n(981631),
    C = n(388032),
    S = n(390648);
function P(e, t, n) {
    return null != e && (null != n ? n.applicationId === e.id : null != t && t.application_id === e.id && t.type === x.IIU.PLAYING && (0, d.Z)(t, x.xjy.JOIN));
}
let I = i.memo(function (e) {
    let t,
        l,
        d,
        I,
        { stream: N, canGoLive: Z, guildId: w, isStreaming: E, channel: T, canStream: A, runningGame: D, embeddedActivity: R, activity: L, application: k, analyticsContext: M } = e,
        { showRefreshedGoLiveModal: G } = (0, m.a)({
            location: 'Activity Panel',
            autoTrackExposure: !1
        }),
        { parentAnalyticsLocation: B } = (0, h.ZP)(),
        U = P(k, L, R),
        W = i.useCallback(() => {
            o()(null != L, 'Received null activity'),
                (0, f.v)(B, f.d.INVITE),
                O.default.track(x.rMx.OPEN_MODAL, {
                    type: 'Send Join Invite',
                    application_id: L.application_id,
                    location: M.location
                }),
                (0, c.h7)(L, !1);
        }, [L, M, B]),
        V = i.useCallback(
            (e, t) => () => {
                (0, f.v)(B, f.d.LEAVE_ACTIVITY),
                    p.Z.leaveActivity({
                        location: t,
                        applicationId: e,
                        showFeedback: !0
                    });
            },
            [B]
        ),
        F = i.useCallback(() => {
            (0, y.Z)(N);
        }, [N]),
        H = i.useCallback(() => {
            let e = null != T && (0, _.vd)(T.type) ? T : null,
                t = null != e ? e.getGuildId() : w;
            if (G && null != D && null != v.Z.getVoiceChannelId()) {
                (0, m.s)('Activity Panel'), (0, b.Z)(D.pid);
                return;
            }
            (0, s.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e('46746'), n.e('50844')]).then(n.bind(n, 60594));
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
                                sourcePID: null == D ? void 0 : D.pid,
                                selectSource: !1,
                                guildId: t,
                                analyticsLocation: x.Sbl.ACTIVITY_PANEL
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
        }, [T, w, D, G]),
        z =
            (null != D || null == R || (0, u.R)({ isContextless: R.location.kind === a.E.CONTEXTLESS })) && (E || Z)
                ? (E
                      ? ((t = !1),
                        (l = () => {
                            F(), (0, f.v)(B, f.d.STREAM, !1);
                        }),
                        (d = s.g5r),
                        (I = C.NW.string(C.t.S5anIS)))
                      : A
                        ? ((t = !1),
                          (l = () => {
                              H(), (0, f.v)(B, f.d.STREAM, !0);
                          }),
                          (d = s.hGI),
                          (I = null != D ? C.NW.formatToPlainString(C.t.AB5gT0, { game: D.name }) : C.NW.string(C.t.FeUKeH)))
                        : ((t = !0), (l = null), (d = s.hGI), (I = null != T && (0, _.vd)(T.type) ? C.NW.string(C.t.uQn9Bw) : null != w ? C.NW.string(C.t.fBXEoK) : C.NW.string(C.t.n3feND))),
                  (0, r.jsx)('div', {
                      className: S.panelButtonContainer,
                      children: (0, r.jsx)(j.Z, {
                          tooltipText: I,
                          disabled: t,
                          onClick: l,
                          icon: d
                      })
                  }))
                : null,
        Y =
            U && null == R
                ? (0, r.jsx)(j.Z, {
                      tooltipText: C.NW.string(C.t['hC/Ze3']),
                      onClick: W,
                      icon: s.ejJ
                  })
                : null,
        q =
            null == R
                ? null
                : (0, r.jsx)(j.Z, {
                      tooltipText: C.NW.string(C.t['R/FK4O']),
                      onClick: V(R.applicationId, R.location),
                      icon: s.PBZ
                  }),
        Q = null == N ? null : (0, r.jsx)(g.Z, {});
    return null == z && null == Y && null == q
        ? null
        : (0, r.jsxs)('div', {
              className: S.actions,
              children: [z, Y, null != q ? q : Q]
          });
});
