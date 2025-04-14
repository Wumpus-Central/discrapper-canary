n.d(t, { Z: () => S });
var r = n(200651);
n(192379);
var i = n(442837),
    o = n(481060),
    a = n(40851),
    s = n(456100),
    l = n(841784),
    c = n(906732),
    u = n(499254),
    d = n(827498),
    f = n(397698),
    _ = n(541716),
    p = n(103450),
    h = n(592125),
    m = n(944486),
    g = n(475413),
    E = n(981631),
    b = n(388032);
function y(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function v(e) {
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
                y(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function S(e) {
    let { user: t, activity: n, onAction: y, onClose: O } = e,
        { newestAnalyticsLocation: S } = (0, c.ZP)(),
        T = (0, a.bp)() === E.IlC.POPOUT,
        N = (0, i.e7)([h.Z, m.Z], () => h.Z.getChannel(m.Z.getChannelId())),
        A = (0, p.e)({
            activity: null != n ? n : void 0,
            embeddedActivity: void 0,
            user: t,
            onClose: O
        }),
        { enabled: C } = s.c.useExperiment({ location: 'ActivityButton' }, { autoTrackExposure: !0 }),
        R = C ? o.iWm : o.jje;
    if (null == A && null != n && (0, l.Z)(n))
        return (0, r.jsx)(g.tG, {
            icon: R,
            text: b.NW.string(b.t.RscU7O),
            color: o.Ttl.BRAND,
            themeColor: 'none',
            fullWidth: !0,
            onClick: (e) => {
                e.stopPropagation(),
                    null == O || O(),
                    null == y || y({ action: 'PRESS_PLAY_BUTTON' }),
                    (null == N ? void 0 : N.isVocal())
                        ? (0, f.Z)({
                              context: {
                                  type: 'channel',
                                  channel: N
                              },
                              analyticsLocation: S,
                              openInPopout: T
                          })
                        : (0, u.__)(d._b.TEXT, _.Ie.NORMAL, { applicationId: n.application_id });
            }
        });
    if (null == A) return null;
    let { isJoining: P, handleJoinRequest: w, buttonCTA: D, tooltip: L, isEnabled: x, isEmbedded: M } = A;
    return M
        ? (0, r.jsx)(o.ua7, {
              text: L,
              children: (e) =>
                  (0, r.jsx)(
                      g.tG,
                      I(v({}, e), {
                          icon: o.YVR,
                          text: D,
                          disabled: !x,
                          submitting: P,
                          fullWidth: !0,
                          onClick: (e) => {
                              e.stopPropagation(), null == y || y({ action: 'PRESS_JOIN_BUTTON' }), w();
                          }
                      })
                  )
          })
        : (0, r.jsx)(o.ua7, {
              text: L,
              children: (e) =>
                  (0, r.jsx)(
                      g.tG,
                      I(v({}, e), {
                          icon: o.iWm,
                          text: D,
                          disabled: !x,
                          submitting: P,
                          fullWidth: !0,
                          onClick: (e) => {
                              e.stopPropagation(), null == y || y({ action: 'PRESS_ASK_TO_JOIN_BUTTON' }), w();
                          }
                      })
                  )
          });
}
