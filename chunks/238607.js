n.d(t, { Z: () => A });
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
    g = n(652853),
    E = n(475413),
    b = n(228168),
    y = n(981631),
    O = n(388032);
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
function I(e) {
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
function S(e, t) {
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
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function A(e) {
    let { user: t, activity: n, onAction: v, onClose: S } = e,
        { newestAnalyticsLocation: A } = (0, c.ZP)(),
        { themeType: N } = (0, g.z)(),
        C = (0, a.bp)() === y.IlC.POPOUT,
        R = (0, i.e7)([h.Z, m.Z], () => h.Z.getChannel(m.Z.getChannelId())),
        P = (0, p.e)({
            activity: null != n ? n : void 0,
            embeddedActivity: void 0,
            user: t,
            onClose: S
        }),
        { enabled: w } = s.c.useExperiment({ location: 'ActivityButton' }, { autoTrackExposure: !0 }),
        D = w ? o.iWm : o.jje;
    if (null == P && null != n && (0, l.Z)(n))
        return (0, r.jsx)(E.tG, {
            icon: D,
            text: O.intl.string(O.t.RscU7O),
            color: o.Ttl.BRAND,
            size: N === b.lY.MODAL_V2 ? o.PhG.TINY : void 0,
            fullWidth: N !== b.lY.MODAL_V2,
            themeColor: 'none',
            onClick: (e) => {
                e.stopPropagation(),
                    null == S || S(),
                    null == v || v({ action: 'PRESS_PLAY_BUTTON' }),
                    (null == R ? void 0 : R.isVocal())
                        ? (0, f.Z)({
                              context: {
                                  type: 'channel',
                                  channel: R
                              },
                              analyticsLocation: A,
                              openInPopout: C
                          })
                        : (0, u.__)(d._b.TEXT, _.Ie.NORMAL, { applicationId: n.application_id });
            }
        });
    if (null == P) return null;
    let { isJoining: L, handleJoinRequest: x, buttonCTA: M, tooltip: k, isEnabled: j, isEmbedded: U } = P;
    return U
        ? (0, r.jsx)(o.ua7, {
              text: k,
              children: (e) =>
                  (0, r.jsx)(
                      E.tG,
                      T(I({}, e), {
                          icon: o.YVR,
                          text: M,
                          disabled: !j,
                          submitting: L,
                          size: N === b.lY.MODAL_V2 ? o.PhG.TINY : void 0,
                          fullWidth: N !== b.lY.MODAL_V2,
                          themeColor: N === b.lY.MODAL_V2 ? 'secondary' : void 0,
                          onClick: (e) => {
                              e.stopPropagation(), null == v || v({ action: 'PRESS_JOIN_BUTTON' }), x();
                          }
                      })
                  )
          })
        : (0, r.jsx)(o.ua7, {
              text: k,
              children: (e) =>
                  (0, r.jsx)(
                      E.tG,
                      T(I({}, e), {
                          icon: o.iWm,
                          text: M,
                          disabled: !j,
                          submitting: L,
                          size: N === b.lY.MODAL_V2 ? o.PhG.TINY : void 0,
                          fullWidth: N !== b.lY.MODAL_V2,
                          themeColor: N === b.lY.MODAL_V2 ? 'secondary' : void 0,
                          onClick: (e) => {
                              e.stopPropagation(), null == v || v({ action: 'PRESS_ASK_TO_JOIN_BUTTON' }), x();
                          }
                      })
                  )
          });
}
