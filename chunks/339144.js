n.d(t, {
    J: () => O,
    y: () => _
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
    h = n(803647),
    f = n(131704),
    g = n(626135),
    m = n(870569),
    b = n(981631),
    v = n(388032),
    y = n(12990);
function _(e, t, n) {
    return null != e && (null != n ? n.applicationId === e.id : null != t && t.application_id === e.id && t.type === b.IIU.PLAYING && (0, u.Z)(t, b.xjy.JOIN));
}
let O = i.memo(function (e) {
    let t,
        l,
        u,
        O,
        { stream: j, canGoLive: C, guildId: x, isStreaming: P, channel: S, canStream: I, runningGame: N, embeddedActivity: Z, activity: w, application: E, analyticsContext: T } = e,
        A = _(E, w, Z),
        D = i.useCallback(() => {
            o()(null != w, 'Received null activity'),
                g.default.track(b.rMx.OPEN_MODAL, {
                    type: 'Send Join Invite',
                    application_id: w.application_id,
                    location: T.location
                }),
                (0, s.h7)(w, !1);
        }, [w, T]),
        R = i.useCallback(
            (e, t) => () => {
                d.Z.leaveActivity({
                    location: t,
                    applicationId: e,
                    showFeedback: !0
                });
            },
            []
        ),
        L = i.useCallback(() => {
            (0, h.Z)(j);
        }, [j]),
        M = i.useCallback(() => {
            let e = null != S && (0, f.vd)(S.type) ? S : null,
                t = null != e ? e.getGuildId() : x;
            (0, a.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e('93382'), n.e('79477'), n.e('93290')]).then(n.bind(n, 60594));
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
                                selectSource: !1,
                                guildId: t,
                                analyticsLocation: b.Sbl.ACTIVITY_PANEL
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
        }, [S, x]),
        k =
            (null != N || null == Z || (0, c.R)()) && (P || C)
                ? (P ? ((t = !1), (l = L), (u = a.g5r), (O = v.NW.string(v.t.S5anIS))) : I ? ((t = !1), (l = M), (u = a.hGI), (O = null != N ? v.NW.formatToPlainString(v.t.AB5gT0, { game: N.name }) : v.NW.string(v.t.FeUKeH))) : ((t = !0), (l = null), (u = a.hGI), (O = null != S && (0, f.vd)(S.type) ? v.NW.string(v.t.uQn9Bw) : null != x ? v.NW.string(v.t.fBXEoK) : v.NW.string(v.t.n3feND))),
                  (0, r.jsx)('div', {
                      className: y.panelButtonContainer,
                      children: (0, r.jsx)(m.Z, {
                          tooltipText: O,
                          disabled: t,
                          onClick: l,
                          icon: u
                      })
                  }))
                : null,
        G =
            A && null == Z
                ? (0, r.jsx)(m.Z, {
                      tooltipText: v.NW.string(v.t['hC/Ze3']),
                      onClick: D,
                      icon: a.ejJ
                  })
                : null,
        B =
            null == Z || null == S
                ? null
                : (0, r.jsx)(m.Z, {
                      tooltipText: v.NW.string(v.t['R/FK4O']),
                      onClick: R(Z.applicationId, Z.location),
                      icon: a.PBZ
                  }),
        U = null == j ? null : (0, r.jsx)(p.Z, {});
    return null == k && null == G && null == B
        ? null
        : (0, r.jsxs)('div', {
              className: y.actions,
              children: [k, G, null != B ? B : U]
          });
});
