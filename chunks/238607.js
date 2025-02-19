n.d(t, { Z: () => S });
var r = n(200651);
n(192379);
var i = n(442837),
    o = n(481060),
    a = n(40851),
    s = n(841784),
    l = n(906732),
    c = n(499254),
    u = n(827498),
    d = n(397698),
    f = n(541716),
    p = n(103450),
    _ = n(592125),
    h = n(944486),
    m = n(475413),
    g = n(981631),
    E = n(388032);
function v(e, t, n) {
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
function b(e) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
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
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function S(e) {
    let { user: t, activity: n, onAction: v, onClose: y } = e,
        { newestAnalyticsLocation: S } = (0, l.ZP)(),
        I = (0, a.bp)() === g.IlC.POPOUT,
        T = (0, i.e7)([_.Z, h.Z], () => _.Z.getChannel(h.Z.getChannelId())),
        N = (0, p.e)({
            activity: null != n ? n : void 0,
            embeddedActivity: void 0,
            user: t,
            onClose: y
        });
    if (null == N && null != n && (0, s.Z)(n))
        return (0, r.jsx)(m.tG, {
            icon: o.jje,
            text: E.NW.string(E.t.RscU7O),
            color: o.Ttl.BRAND,
            themeColor: 'none',
            fullWidth: !0,
            onClick: (e) => {
                e.stopPropagation(),
                    null == y || y(),
                    null == v || v({ action: 'PRESS_PLAY_BUTTON' }),
                    (null == T ? void 0 : T.isVocal())
                        ? (0, d.Z)({
                              context: {
                                  type: 'channel',
                                  channel: T
                              },
                              analyticsLocation: S,
                              openInPopout: I
                          })
                        : (0, c.__)(u._b.TEXT, f.Ie.NORMAL, { applicationId: n.application_id });
            }
        });
    if (null == N) return null;
    let { isJoining: A, handleJoinRequest: C, buttonCTA: R, tooltip: P, isEnabled: w, isEmbedded: D } = N;
    return D
        ? (0, r.jsx)(o.ua7, {
              text: P,
              children: (e) =>
                  (0, r.jsx)(
                      m.tG,
                      O(b({}, e), {
                          icon: o.YVR,
                          text: R,
                          disabled: !w,
                          submitting: A,
                          fullWidth: !0,
                          onClick: (e) => {
                              e.stopPropagation(), null == v || v({ action: 'PRESS_JOIN_BUTTON' }), C();
                          }
                      })
                  )
          })
        : (0, r.jsx)(o.ua7, {
              text: P,
              children: (e) =>
                  (0, r.jsx)(
                      m.tG,
                      O(b({}, e), {
                          icon: o.iWm,
                          text: R,
                          disabled: !w,
                          submitting: A,
                          fullWidth: !0,
                          onClick: (e) => {
                              e.stopPropagation(), null == v || v({ action: 'PRESS_ASK_TO_JOIN_BUTTON' }), C();
                          }
                      })
                  )
          });
}
