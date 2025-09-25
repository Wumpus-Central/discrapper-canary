n.d(t, { Z: () => v }), n(388685);
var r = n(951288),
    i = n(647438),
    o = n(913527),
    l = n.n(o),
    s = n(442837),
    c = n(481060),
    a = n(11769),
    u = n(300429),
    d = n(585483),
    f = n(70956),
    p = n(923664),
    b = n(981631),
    O = n(388032),
    m = n(917105);
function g(e) {
    let t,
        { isEnabled: n, rateLimitPerUser: o, isBypassSlowmode: s, slowmodeCooldownGuess: u } = e,
        [p, g] = i.useState(!1);
    if (
        (i.useEffect(() => {
            function e() {
                g(!0),
                    setTimeout(() => {
                        g(!1);
                    }, 1000);
            }
            return (
                d.S.subscribe(b.CkL.EMPHASIZE_SLOWMODE_COOLDOWN, e),
                () => {
                    d.S.unsubscribe(b.CkL.EMPHASIZE_SLOWMODE_COOLDOWN, e);
                }
            );
        }, []),
        !n)
    )
        return null;
    let v = (0, a.k)(o);
    if (!s && u > 0) {
        let e = l().duration(u);
        if (u > f.Z.Millis.HOUR) {
            let n = "".concat(e.minutes()).padStart(2, "0"),
                r = "".concat(e.seconds()).padStart(2, "0");
            t = "".concat(e.hours(), ":").concat(n, ":").concat(r);
        } else {
            let n = "".concat(e.seconds()).padStart(2, "0");
            t = "".concat(e.minutes(), ":").concat(n);
        }
    } else t = s ? O.intl.string(O.t["8+NidX"]) : O.intl.string(O.t.Icu3bW);
    let y = (0, r.jsxs)(c.Text, {
        className: m.cooldownText,
        variant: "text-xs/medium",
        color: p ? "text-danger" : "text-muted",
        tabularNumbers: !0,
        children: [
            (0, r.jsx)(c.ANZ, {
                size: "xxs",
                color: "currentColor",
                className: m.slowModeIcon,
            }),
            t,
        ],
    });
    return (0, r.jsx)(c.ua7, {
        text: v,
        children: (e) => {
            var t, n;
            return (0, r.jsx)(
                "div",
                ((t = (function (e) {
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
                })({ className: m.cooldownWrapper }, e)),
                (n = n = { children: y }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(n)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                      }),
                t),
            );
        },
    });
}
function v(e) {
    let { channel: t, isThreadCreation: n = !1 } = e,
        i = (0, s.e7)([u.Z], () => u.Z.getSlowmodeCooldownGuess(t.id, n ? u.S.CreateThread : u.S.SendMessage)),
        o = (0, p.w)(t, n ? u.S.CreateThread : u.S.SendMessage),
        { rateLimitPerUser: l } = t;
    return (0, r.jsx)(g, {
        isEnabled: l > 0,
        rateLimitPerUser: l,
        isBypassSlowmode: o,
        slowmodeCooldownGuess: i,
    });
}
