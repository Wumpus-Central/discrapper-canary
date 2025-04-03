n.d(t, { Z: () => m }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(481060),
    o = n(665149),
    a = n(585483),
    s = n(723170),
    c = n(64247),
    u = n(124368),
    d = n(981631),
    p = n(388032);
function h(e) {
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
}
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m(e) {
    let { channel: t } = e,
        n = (0, s.B)(t),
        [m, g] = i.useState(!1);
    i.useEffect(() => {
        let e = () => g(!0);
        return (
            a.S.subscribe(d.CkL.OPEN_THREAD_NOTIFICATION_SETTINGS, e),
            () => {
                a.S.unsubscribe(d.CkL.OPEN_THREAD_NOTIFICATION_SETTINGS, e);
            }
        );
    }, []);
    let b = p.NW.string(p.t.h850Sk);
    return (0, r.jsx)(l.yRy, {
        shouldShow: m,
        animation: l.yRy.Animation.NONE,
        position: 'bottom',
        align: 'right',
        autoInvert: !1,
        onRequestClose: () => g(!1),
        renderPopout: (e) =>
            (0, r.jsx)(
                c.Z,
                f(h({}, e), {
                    channel: t,
                    navId: 'thread-context',
                    label: p.NW.string(p.t['1NBjqa'])
                })
            ),
        children: (e, t) => {
            let { isShown: i } = t;
            return (0, r.jsx)(
                o.ZP.Icon,
                f(h({}, e), {
                    onClick: () => g((e) => !e),
                    tooltip: i ? null : b,
                    icon: n === u.iN.NO_MESSAGES ? l.owu : l.Dkj,
                    'aria-label': b,
                    selected: i
                })
            );
        }
    });
}
