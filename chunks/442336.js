n.d(t, { Z: () => b }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(481060),
    s = n(87051),
    o = n(9156),
    c = n(585483),
    d = n(621600),
    u = n(665149),
    h = n(110255),
    p = n(981631),
    f = n(388032);
function g(e) {
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
}
function m(e, t) {
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
        n = i.useRef(null),
        [b, y] = (0, l.Wu)(
            [o.ZP],
            () => [o.ZP.isChannelMuted(t.getGuildId(), t.id), o.ZP.resolvedMessageNotifications(t)],
            [t],
        ),
        [_, j] = i.useState(!1);
    i.useEffect(() => {
        let e = () => j(!0);
        return (
            c.S.subscribe(p.CkL.OPEN_THREAD_NOTIFICATION_SETTINGS, e),
            () => {
                c.S.unsubscribe(p.CkL.OPEN_THREAD_NOTIFICATION_SETTINGS, e);
            }
        );
    }, []);
    let O = (e) => {
            e.shiftKey
                ? s.Z.updateChannelOverrideSettings(t.guild_id, t.id, { muted: !b }, d.UE.muted(!b))
                : j((e) => !e);
        },
        x = f.intl.string(f.t.h850Sk);
    return (0, r.jsx)(a.yRy, {
        targetElementRef: n,
        shouldShow: _,
        animation: a.yRy.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => j(!1),
        renderPopout: (e) =>
            (0, r.jsx)(
                h.Z,
                m(g({}, e), {
                    channel: t,
                    navId: "channel-context",
                    label: f.intl.string(f.t.Xm41aW),
                }),
            ),
        clickTrap: !0,
        children: (e, t) => {
            let { isShown: i } = t;
            return (0, r.jsx)(
                u.ZP.Icon,
                m(g({}, e), {
                    ref: n,
                    onClick: O,
                    tooltip: i ? null : x,
                    icon: b || y !== p.bL.ALL_MESSAGES ? a.owu : a.Dkj,
                    "aria-label": x,
                    selected: i,
                }),
            );
        },
    });
}
