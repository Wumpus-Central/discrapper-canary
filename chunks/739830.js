n.d(t, { Z: () => b }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(481060),
    s = n(665149),
    o = n(41776),
    c = n(585483),
    d = n(723170),
    u = n(64247),
    p = n(124368),
    h = n(981631),
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
        n = (0, d.B)(t),
        [b, y] = i.useState(!1),
        O = i.useRef(null),
        x = (0, l.e7)([o.Z], () => null != t.guild_id && o.Z.isLurking(t.guild_id));
    if (
        (i.useEffect(() => {
            let e = () => y(!0);
            return (
                c.S.subscribe(h.CkL.OPEN_THREAD_NOTIFICATION_SETTINGS, e),
                () => {
                    c.S.unsubscribe(h.CkL.OPEN_THREAD_NOTIFICATION_SETTINGS, e);
                }
            );
        }, []),
        x)
    )
        return null;
    let j = f.intl.string(f.t.h850Ss);
    return (0, r.jsx)(a.yRy, {
        targetElementRef: O,
        shouldShow: b,
        animation: a.yRy.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => y(!1),
        renderPopout: (e) =>
            (0, r.jsx)(
                u.Z,
                m(g({}, e), {
                    channel: t,
                    navId: "thread-context",
                    label: f.intl.string(f.t["1NBjqb"]),
                }),
            ),
        children: (e, t) => {
            let { isShown: i } = t;
            return (0, r.jsx)(
                s.ZP.Icon,
                m(g({}, e), {
                    ref: O,
                    onClick: () => y((e) => !e),
                    tooltip: i ? null : j,
                    icon: n === p.iN.NO_MESSAGES ? a.owu : a.Dkj,
                    "aria-label": j,
                    selected: i,
                }),
            );
        },
    });
}
