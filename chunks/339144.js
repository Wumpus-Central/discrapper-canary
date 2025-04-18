n.d(t, {
    J: () => I,
    y: () => x
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
    v = n(944486),
    O = n(626135),
    C = n(870569),
    S = n(981631),
    j = n(388032),
    E = n(903203);
function x(e, t, n) {
    return null != e && (null != n ? n.applicationId === e.id : null != t && t.application_id === e.id && t.type === S.IIU.PLAYING && (0, d.Z)(t, S.xjy.JOIN));
}
let I = i.memo(function (e) {
    let t,
        l,
        d,
        I,
        { stream: N, canGoLive: P, guildId: w, isStreaming: Z, channel: T, canStream: A, runningGame: R, embeddedActivity: D, activity: L, application: k, analyticsContext: M } = e,
        { showRefreshedGoLiveModal: U } = (0, m.a)({
            location: 'Activity Panel',
            autoTrackExposure: !1
        }),
        { parentAnalyticsLocation: G } = (0, p.ZP)(),
        B = x(k, L, D),
        W = i.useCallback(() => {
            o()(null != L, 'Received null activity'),
                (0, f.v)(G, f.d.INVITE),
                O.default.track(S.rMx.OPEN_MODAL, {
                    type: 'Send Join Invite',
                    application_id: L.application_id,
                    location: M.location
                }),
                (0, c.h7)(L, !1);
        }, [L, M, G]),
        V = i.useCallback(
            (e, t) => () => {
                (0, f.v)(G, f.d.LEAVE_ACTIVITY),
                    h.Z.leaveActivity({
                        location: t,
                        applicationId: e,
                        showFeedback: !0
                    });
            },
            [G]
        ),
        H = i.useCallback(() => {
            (0, y.Z)(N);
        }, [N]),
        F = i.useCallback(() => {
            let e = null != T && (0, _.vd)(T.type) ? T : null,
                t = null != e ? e.getGuildId() : w;
            if (U && null != R && null != v.Z.getVoiceChannelId()) {
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
                                selectSource: !1,
                                guildId: t,
                                analyticsLocation: S.Sbl.ACTIVITY_PANEL
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
        }, [T, w, R, U]),
        z =
            (null != R || null == D || (0, u.R)({ isContextless: D.location.kind === s.E.CONTEXTLESS })) && (Z || P)
                ? (Z
                      ? ((t = !1),
                        (l = () => {
                            H(), (0, f.v)(G, f.d.STREAM, !1);
                        }),
                        (d = a.g5r),
                        (I = j.NW.string(j.t.S5anIS)))
                      : A
                        ? ((t = !1),
                          (l = () => {
                              F(), (0, f.v)(G, f.d.STREAM, !0);
                          }),
                          (d = a.hGI),
                          (I = null != R ? j.NW.formatToPlainString(j.t.AB5gT0, { game: R.name }) : j.NW.string(j.t.FeUKeH)))
                        : ((t = !0), (l = null), (d = a.hGI), (I = null != T && (0, _.vd)(T.type) ? j.NW.string(j.t.uQn9Bw) : null != w ? j.NW.string(j.t.fBXEoK) : j.NW.string(j.t.n3feND))),
                  (0, r.jsx)('div', {
                      className: E.panelButtonContainer,
                      children: (0, r.jsx)(C.Z, {
                          tooltipText: I,
                          disabled: t,
                          onClick: l,
                          icon: d
                      })
                  }))
                : null,
        Y =
            B && null == D
                ? (0, r.jsx)(C.Z, {
                      tooltipText: j.NW.string(j.t['hC/Ze3']),
                      onClick: W,
                      icon: a.ejJ
                  })
                : null,
        K =
            null == D
                ? null
                : (0, r.jsx)(C.Z, {
                      tooltipText: j.NW.string(j.t['R/FK4O']),
                      onClick: V(D.applicationId, D.location),
                      icon: a.PBZ
                  }),
        q = null == N ? null : (0, r.jsx)(g.Z, {});
    return null == z && null == Y && null == K
        ? null
        : (0, r.jsxs)('div', {
              className: E.actions,
              children: [z, Y, null != K ? K : q]
          });
});
