n.d(t, { Z: () => b }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(481060),
    a = n(87051),
    s = n(9156),
    c = n(585483),
    u = n(621600),
    d = n(665149),
    p = n(110255),
    h = n(981631),
    f = n(388032);
function m(e) {
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
function g(e, t) {
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
function b(e) {
    let { channel: t } = e,
        [n, b] = (0, l.Wu)([s.ZP], () => [s.ZP.isChannelMuted(t.getGuildId(), t.id), s.ZP.resolvedMessageNotifications(t)], [t]),
        [_, C] = i.useState(!1);
    i.useEffect(() => {
        let e = () => C(!0);
        return (
            c.S.subscribe(h.CkL.OPEN_THREAD_NOTIFICATION_SETTINGS, e),
            () => {
                c.S.unsubscribe(h.CkL.OPEN_THREAD_NOTIFICATION_SETTINGS, e);
            }
        );
    }, []);
    let y = (e) => {
            e.shiftKey ? a.Z.updateChannelOverrideSettings(t.guild_id, t.id, { muted: !n }, u.UE.muted(!n)) : C((e) => !e);
        },
        x = f.NW.string(f.t.h850Sk);
    return (0, r.jsx)(o.yRy, {
        shouldShow: _,
        animation: o.yRy.Animation.NONE,
        position: 'bottom',
        align: 'right',
        autoInvert: !1,
        onRequestClose: () => C(!1),
        renderPopout: (e) =>
            (0, r.jsx)(
                p.Z,
                g(m({}, e), {
                    channel: t,
                    navId: 'channel-context',
                    label: f.NW.string(f.t.Xm41aW)
                })
            ),
        clickTrap: !0,
        children: (e, t) => {
            let { isShown: i } = t;
            return (0, r.jsx)(
                d.ZP.Icon,
                g(m({}, e), {
                    onClick: y,
                    tooltip: i ? null : x,
                    icon: n || b !== h.bL.ALL_MESSAGES ? o.owu : o.Dkj,
                    'aria-label': x,
                    selected: i
                })
            );
        }
    });
}
