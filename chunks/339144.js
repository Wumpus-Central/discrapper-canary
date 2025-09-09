n.d(t, {
    J: () => I,
    y: () => P,
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
    f = n(906732),
    h = n(20471),
    g = n(522651),
    m = n(311352),
    b = n(668519),
    O = n(803647),
    y = n(131704),
    _ = n(944486),
    v = n(626135),
    j = n(381096),
    x = n(870569),
    C = n(981631),
    E = n(388032),
    S = n(258628);
function P(e, t, n) {
    if (null == e) return !1;
    if (null != n) return n.applicationId === e.id;
    if (null != t) {
        var r;
        return (
            (t.application_id === e.id ||
                (null == (r = e.linkedGames) ? void 0 : r.some((e) => e.id === t.application_id))) &&
            t.type === C.IIU.PLAYING &&
            (0, d.Z)(t, C.xjy.JOIN)
        );
    }
    return !1;
}
let I = i.memo(function (e) {
    let t,
        l,
        d,
        I,
        {
            stream: N,
            canGoLive: Z,
            guildId: w,
            isStreaming: T,
            channel: A,
            canStream: R,
            runningGame: D,
            embeddedActivity: M,
            activity: L,
            application: k,
            analyticsContext: U,
        } = e,
        { showRefreshedGoLiveModal: G } = (0, b.a)({
            location: "Activity Panel",
            autoTrackExposure: !1,
        }),
        { parentAnalyticsLocation: B } = (0, f.ZP)(),
        V = P(k, L, M),
        F = i.useCallback(() => {
            o()(null != L, "Received null activity"),
                (0, g.v)(B, g.d.INVITE),
                v.default.track(C.rMx.OPEN_MODAL, {
                    type: "Send Join Invite",
                    application_id: L.application_id,
                    location: U.location,
                }),
                (0, c.h7)(L, !1);
        }, [L, U, B]),
        H = i.useCallback(
            (e, t) => () => {
                (0, g.v)(B, g.d.LEAVE_ACTIVITY),
                    p.Z.leaveActivity({
                        location: t,
                        applicationId: e,
                        showFeedback: !0,
                    });
            },
            [B],
        ),
        z = i.useCallback(() => {
            (0, O.Z)(N);
        }, [N]),
        W = i.useCallback(() => {
            let e = null != A && (0, y.vd)(A.type) ? A : null,
                t = null != e ? e.getGuildId() : w;
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
                                sourcePID: null == D ? void 0 : D.pid,
                                selectSource: !!G && null != _.Z.getVoiceChannelId(),
                                guildId: t,
                                analyticsLocation: C.Sbl.ACTIVITY_PANEL,
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
        }, [A, w, D, G]),
        { canStartAuthorization: K, startAuthorization: Y, hasAlreadyLinked: q } = (0, h.F)(k),
        X = j.Z.useConfig({ location: "ActivityActions" }).enabled,
        Q =
            (null != D || null == M || (0, u.R)()) && (T || Z)
                ? (T
                      ? ((t = !1),
                        (l = () => {
                            z(), (0, g.v)(B, g.d.STREAM, !1);
                        }),
                        (d = s.g5r),
                        (I = E.intl.string(E.t.S5anIS)))
                      : R
                        ? ((t = !1),
                          (l = () => {
                              W(), (0, g.v)(B, g.d.STREAM, !0);
                          }),
                          (d = s.hGI),
                          (I =
                              null != D
                                  ? E.intl.formatToPlainString(E.t.AB5gT0, { game: D.name })
                                  : E.intl.string(E.t.FeUKeH)))
                        : ((t = !0),
                          (l = null),
                          (d = s.hGI),
                          (I =
                              null != A && (0, y.vd)(A.type)
                                  ? E.intl.string(E.t.uQn9Bw)
                                  : null != w
                                    ? E.intl.string(E.t.fBXEoK)
                                    : E.intl.string(E.t.n3feND))),
                  (0, r.jsx)("div", {
                      className: S.panelButtonContainer,
                      children: (0, r.jsx)(x.Z, {
                          tooltipText: I,
                          disabled: t,
                          onClick: l,
                          icon: d,
                      }),
                  }))
                : null,
        J =
            V && null == M
                ? (0, r.jsx)(x.Z, {
                      tooltipText: E.intl.string(E.t["hC/Ze3"]),
                      onClick: F,
                      icon: s.ejJ,
                  })
                : null,
        $ =
            null == M
                ? null
                : (0, r.jsx)(x.Z, {
                      tooltipText: E.intl.string(E.t["R/FK4O"]),
                      onClick: H(M.applicationId, M.location),
                      icon: s.PBZ,
                  }),
        ee = null == N ? null : (0, r.jsx)(m.Z, {}),
        et =
            X && K && !q
                ? (0, r.jsx)(x.Z, {
                      onClick: Y,
                      icon: a.u,
                      tooltipText: E.intl.string(E.t.sbdnp6),
                  })
                : null;
    return null == Q && null == J && null == $
        ? null
        : (0, r.jsxs)("div", {
              className: S.actions,
              children: [et, Q, J, null != $ ? $ : ee],
          });
});
