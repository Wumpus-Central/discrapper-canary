n.d(t, { Z: () => g }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(481060),
    a = n(665149),
    s = n(585483),
    o = n(723170),
    c = n(64247),
    d = n(124368),
    u = n(981631),
    p = n(388032);
function h(e) {
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
function g(e) {
    let { channel: t } = e,
        n = (0, o.B)(t),
        [g, m] = i.useState(!1),
        b = i.useRef(null);
    i.useEffect(() => {
        let e = () => m(!0);
        return (
            s.S.subscribe(u.CkL.OPEN_THREAD_NOTIFICATION_SETTINGS, e),
            () => {
                s.S.unsubscribe(u.CkL.OPEN_THREAD_NOTIFICATION_SETTINGS, e);
            }
        );
    }, []);
    let y = p.intl.string(p.t.h850Ss);
    return (0, r.jsx)(l.yRy, {
        targetElementRef: b,
        shouldShow: g,
        animation: l.yRy.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => m(!1),
        renderPopout: (e) =>
            (0, r.jsx)(
                c.Z,
                f(h({}, e), {
                    channel: t,
                    navId: "thread-context",
                    label: p.intl.string(p.t["1NBjqb"]),
                }),
            ),
        children: (e, t) => {
            let { isShown: i } = t;
            return (0, r.jsx)(
                a.ZP.Icon,
                f(h({}, e), {
                    ref: b,
                    onClick: () => m((e) => !e),
                    tooltip: i ? null : y,
                    icon: n === d.iN.NO_MESSAGES ? l.owu : l.Dkj,
                    "aria-label": y,
                    selected: i,
                }),
            );
        },
    });
}
