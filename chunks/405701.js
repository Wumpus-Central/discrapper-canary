i.d(e, { Z: () => b }), i(388685);
var n = i(951288),
    s = i(647438),
    r = i(913527),
    o = i.n(r),
    l = i(442837),
    a = i(481060),
    d = i(11769),
    c = i(338390),
    u = i(300429),
    h = i(585483),
    g = i(70956),
    p = i(923664),
    f = i(981631),
    m = i(388032),
    v = i(799567);
function O(t) {
    let e,
        { isEnabled: i, rateLimitPerUser: r, isBypassSlowmode: l, slowmodeCooldownGuess: u } = t,
        [p, O] = s.useState(!1);
    s.useEffect(() => {
        function t() {
            O(!0),
                setTimeout(() => {
                    O(!1);
                }, 1000);
        }
        return (
            h.S.subscribe(f.CkL.EMPHASIZE_SLOWMODE_COOLDOWN, t),
            () => {
                h.S.unsubscribe(f.CkL.EMPHASIZE_SLOWMODE_COOLDOWN, t);
            }
        );
    }, []);
    let b = (0, c.Z)("SlowmodeIndicator");
    if (!i) return null;
    let S = (0, d.k)(r);
    if (!l && u > 0) {
        let t = o().duration(u);
        if (u > g.Z.Millis.HOUR) {
            let i = "".concat(t.minutes()).padStart(2, "0"),
                n = "".concat(t.seconds()).padStart(2, "0");
            e = "".concat(t.hours(), ":").concat(i, ":").concat(n);
        } else {
            let i = "".concat(t.seconds()).padStart(2, "0");
            e = "".concat(t.minutes(), ":").concat(i);
        }
    } else e = l ? (b ? m.intl.string(m.t["8+NidX"]) : m.intl.string(m.t.SSzXvb)) : m.intl.string(m.t.Icu3bW);
    let y = b
        ? (0, n.jsxs)(a.Text, {
              className: v.cooldownText,
              variant: "text-xs/medium",
              color: p ? "text-danger" : "text-muted",
              tabularNumbers: !0,
              children: [
                  (0, n.jsx)(a.ANZ, {
                      size: "xxs",
                      color: "currentColor",
                      className: v.slowModeIcon,
                  }),
                  e,
              ],
          })
        : (0, n.jsxs)(a.Text, {
              className: v.cooldownText,
              variant: "text-sm/medium",
              color: p ? "text-danger" : "text-muted",
              tabularNumbers: !0,
              children: [
                  e,
                  (0, n.jsx)(a.ANZ, {
                      size: "xs",
                      color: "currentColor",
                      className: v.slowModeIcon,
                  }),
              ],
          });
    return (0, n.jsx)(a.ua7, {
        text: S,
        children: (t) => {
            var e, i;
            return (0, n.jsx)(
                "div",
                ((e = (function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {},
                            n = Object.keys(i);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (n = n.concat(
                                Object.getOwnPropertySymbols(i).filter(function (t) {
                                    return Object.getOwnPropertyDescriptor(i, t).enumerable;
                                }),
                            )),
                            n.forEach(function (e) {
                                var n;
                                (n = i[e]),
                                    e in t
                                        ? Object.defineProperty(t, e, {
                                              value: n,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (t[e] = n);
                            });
                    }
                    return t;
                })({ className: v.cooldownWrapper }, t)),
                (i = i = { children: y }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
                    : (function (t, e) {
                          var i = Object.keys(t);
                          if (Object.getOwnPropertySymbols) {
                              var n = Object.getOwnPropertySymbols(t);
                              i.push.apply(i, n);
                          }
                          return i;
                      })(Object(i)).forEach(function (t) {
                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
                      }),
                e),
            );
        },
    });
}
function b(t) {
    let { channel: e, isThreadCreation: i = !1 } = t,
        s = (0, l.e7)([u.Z], () => u.Z.getSlowmodeCooldownGuess(e.id, i ? u.S.CreateThread : u.S.SendMessage)),
        r = (0, p.w)(e, i ? u.S.CreateThread : u.S.SendMessage),
        { rateLimitPerUser: o } = e;
    return (0, n.jsx)(O, {
        isEnabled: o > 0,
        rateLimitPerUser: o,
        isBypassSlowmode: r,
        slowmodeCooldownGuess: s,
    });
}
