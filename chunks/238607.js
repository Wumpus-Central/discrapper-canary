n.d(t, { Z: () => E });
var r = n(255367);
n(73800);
var i = n(755721),
    a = n(481060),
    o = n(456100),
    s = n(841784),
    l = n(103450),
    c = n(652853),
    u = n(475413),
    d = n(614716),
    f = n(228168),
    _ = n(388032);
function p(e, t, n) {
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
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            }));
    }
    return e;
}
function m(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E(e) {
    let { user: t, activity: n, onAction: p, onClose: m } = e,
        { themeType: E } = (0, c.z)(),
        b = (0, d.Z)({
            applicationId: null == n ? void 0 : n.application_id,
            onClose: m
        }),
        y = (0, l.e)({
            activity: null != n ? n : void 0,
            embeddedActivity: void 0,
            user: t,
            onClose: m
        }),
        { enabled: O } = o.c.useExperiment({ location: 'ActivityButton' }, { autoTrackExposure: !0 }),
        v = O ? a.iWm : a.jje;
    if (null == y && null != n && (0, s.Z)(n))
        return (0, r.jsx)(u.tG, {
            icon: v,
            text: _.intl.string(_.t.RscU7O),
            size: E === f.lY.MODAL_V2 ? i.Ph.TINY : i.Ph.SMALL,
            fullWidth: E !== f.lY.MODAL_V2,
            themeColor: 'secondary',
            onClick: (e) => {
                (e.stopPropagation(), null == p || p({ action: 'PRESS_PLAY_BUTTON' }), b());
            }
        });
    if (null == y) return null;
    let { isJoining: I, handleJoinRequest: T, buttonCTA: S, tooltip: A, isEnabled: N, isEmbedded: C } = y;
    return C
        ? (0, r.jsx)(a.ua7, {
              text: A,
              children: (e) =>
                  (0, r.jsx)(
                      u.tG,
                      g(h({}, e), {
                          icon: a.YVR,
                          text: S,
                          disabled: !N,
                          submitting: I,
                          size: E === f.lY.MODAL_V2 ? i.Ph.TINY : i.Ph.SMALL,
                          fullWidth: E !== f.lY.MODAL_V2,
                          themeColor: 'secondary',
                          onClick: (e) => {
                              (e.stopPropagation(), null == p || p({ action: 'PRESS_JOIN_BUTTON' }), T());
                          }
                      })
                  )
          })
        : (0, r.jsx)(a.ua7, {
              text: A,
              children: (e) =>
                  (0, r.jsx)(
                      u.tG,
                      g(h({}, e), {
                          icon: a.iWm,
                          text: S,
                          disabled: !N,
                          submitting: I,
                          size: E === f.lY.MODAL_V2 ? i.Ph.TINY : i.Ph.SMALL,
                          fullWidth: E !== f.lY.MODAL_V2,
                          themeColor: 'secondary',
                          onClick: (e) => {
                              (e.stopPropagation(), null == p || p({ action: 'PRESS_ASK_TO_JOIN_BUTTON' }), T());
                          }
                      })
                  )
          });
}
