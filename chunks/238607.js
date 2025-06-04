n.d(t, { Z: () => g });
var r = n(255367);
n(73800);
var i = n(481060),
    a = n(456100),
    o = n(841784),
    s = n(103450),
    l = n(652853),
    c = n(475413),
    u = n(614716),
    d = n(228168),
    f = n(388032);
function _(e, t, n) {
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
function p(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
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
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function g(e) {
    let { user: t, activity: n, onAction: _, onClose: h } = e,
        { themeType: g } = (0, l.z)(),
        E = (0, u.Z)({
            applicationId: null == n ? void 0 : n.application_id,
            onClose: h
        }),
        b = (0, s.e)({
            activity: null != n ? n : void 0,
            embeddedActivity: void 0,
            user: t,
            onClose: h
        }),
        { enabled: y } = a.c.useExperiment({ location: 'ActivityButton' }, { autoTrackExposure: !0 }),
        O = y ? i.iWm : i.jje;
    if (null == b && null != n && (0, o.Z)(n))
        return (0, r.jsx)(c.tG, {
            icon: O,
            text: f.intl.string(f.t.RscU7O),
            size: g === d.lY.MODAL_V2 ? i.PhG.TINY : void 0,
            fullWidth: g !== d.lY.MODAL_V2,
            themeColor: 'secondary',
            onClick: (e) => {
                e.stopPropagation(), null == _ || _({ action: 'PRESS_PLAY_BUTTON' }), E();
            }
        });
    if (null == b) return null;
    let { isJoining: v, handleJoinRequest: I, buttonCTA: S, tooltip: T, isEnabled: A, isEmbedded: N } = b;
    return N
        ? (0, r.jsx)(i.ua7, {
              text: T,
              children: (e) =>
                  (0, r.jsx)(
                      c.tG,
                      m(p({}, e), {
                          icon: i.YVR,
                          text: S,
                          disabled: !A,
                          submitting: v,
                          size: g === d.lY.MODAL_V2 ? i.PhG.TINY : void 0,
                          fullWidth: g !== d.lY.MODAL_V2,
                          themeColor: 'secondary',
                          onClick: (e) => {
                              e.stopPropagation(), null == _ || _({ action: 'PRESS_JOIN_BUTTON' }), I();
                          }
                      })
                  )
          })
        : (0, r.jsx)(i.ua7, {
              text: T,
              children: (e) =>
                  (0, r.jsx)(
                      c.tG,
                      m(p({}, e), {
                          icon: i.iWm,
                          text: S,
                          disabled: !A,
                          submitting: v,
                          size: g === d.lY.MODAL_V2 ? i.PhG.TINY : void 0,
                          fullWidth: g !== d.lY.MODAL_V2,
                          themeColor: 'secondary',
                          onClick: (e) => {
                              e.stopPropagation(), null == _ || _({ action: 'PRESS_ASK_TO_JOIN_BUTTON' }), I();
                          }
                      })
                  )
          });
}
