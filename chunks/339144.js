n.d(t, {
    J: () => P,
    y: () => S
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
    m = n(562224),
    b = n(803647),
    v = n(131704),
    y = n(944486),
    _ = n(626135),
    O = n(870569),
    j = n(981631),
    C = n(388032),
    x = n(172241);
function S(e, t, n) {
    return null != e && (null != n ? n.applicationId === e.id : null != t && t.application_id === e.id && t.type === j.IIU.PLAYING && (0, u.Z)(t, j.xjy.JOIN));
}
let P = i.memo(function (e) {
    let t,
        l,
        u,
        P,
        { stream: I, canGoLive: N, guildId: Z, isStreaming: w, channel: E, canStream: T, runningGame: A, embeddedActivity: D, activity: R, application: L, analyticsContext: k } = e,
        { showRefreshedGoLiveModal: M } = (0, g.a)({
            location: 'Activity Panel',
            autoTrackExposure: !1
        }),
        { parentAnalyticsLocation: G } = (0, p.ZP)(),
        B = S(L, R, D),
        U = i.useCallback(() => {
            o()(null != R, 'Received null activity'),
                (0, h.v)(G, h.d.INVITE),
                _.default.track(j.rMx.OPEN_MODAL, {
                    type: 'Send Join Invite',
                    application_id: R.application_id,
                    location: k.location
                }),
                (0, s.h7)(R, !1);
        }, [R, k, G]),
        W = i.useCallback(
            (e, t) => () => {
                (0, h.v)(G, h.d.LEAVE_ACTIVITY),
                    d.Z.leaveActivity({
                        location: t,
                        applicationId: e,
                        showFeedback: !0
                    });
            },
            [G]
        ),
        V = i.useCallback(() => {
            (0, b.Z)(I);
        }, [I]),
        F = i.useCallback(() => {
            let e = null != E && (0, v.vd)(E.type) ? E : null,
                t = null != e ? e.getGuildId() : Z;
            if (M && null != A && null != y.Z.getVoiceChannelId()) {
                (0, m.Z)(A.pid);
                return;
            }
            (0, a.ZDy)(async () => {
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
                                sourcePID: null == A ? void 0 : A.pid,
                                selectSource: !1,
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
        }, [E, Z, A, M]),
        H =
            (null != A || null == D || (0, c.R)()) && (w || N)
                ? (w
                      ? ((t = !1),
                        (l = () => {
                            V(), (0, h.v)(G, h.d.STREAM, !1);
                        }),
                        (u = a.g5r),
                        (P = C.NW.string(C.t.S5anIS)))
                      : T
                        ? ((t = !1),
                          (l = () => {
                              F(), (0, h.v)(G, h.d.STREAM, !0);
                          }),
                          (u = a.hGI),
                          (P = null != A ? C.NW.formatToPlainString(C.t.AB5gT0, { game: A.name }) : C.NW.string(C.t.FeUKeH)))
                        : ((t = !0), (l = null), (u = a.hGI), (P = null != E && (0, v.vd)(E.type) ? C.NW.string(C.t.uQn9Bw) : null != Z ? C.NW.string(C.t.fBXEoK) : C.NW.string(C.t.n3feND))),
                  (0, r.jsx)('div', {
                      className: x.panelButtonContainer,
                      children: (0, r.jsx)(O.Z, {
                          tooltipText: P,
                          disabled: t,
                          onClick: l,
                          icon: u
                      })
                  }))
                : null,
        z =
            B && null == D
                ? (0, r.jsx)(O.Z, {
                      tooltipText: C.NW.string(C.t['hC/Ze3']),
                      onClick: U,
                      icon: a.ejJ
                  })
                : null,
        Y =
            null == D
                ? null
                : (0, r.jsx)(O.Z, {
                      tooltipText: C.NW.string(C.t['R/FK4O']),
                      onClick: W(D.applicationId, D.location),
                      icon: a.PBZ
                  }),
        q = null == I ? null : (0, r.jsx)(f.Z, {});
    return null == H && null == z && null == Y
        ? null
        : (0, r.jsxs)('div', {
              className: x.actions,
              children: [H, z, null != Y ? Y : q]
          });
});
