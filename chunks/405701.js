i.d(t, { Z: () => b }), i(388685);
var n = i(951288),
    r = i(647438),
    s = i(913527),
    o = i.n(s),
    l = i(442837),
    a = i(481060),
    d = i(11769),
    c = i(338390),
    u = i(496675),
    h = i(300429),
    p = i(585483),
    g = i(70956),
    m = i(981631),
    f = i(388032),
    v = i(799567);
function O(e) {
    let t,
        { isEnabled: i, rateLimitPerUser: s, isBypassSlowmode: l, slowmodeCooldownGuess: u } = e,
        [h, O] = r.useState(!1);
    r.useEffect(() => {
        function e() {
            O(!0),
                setTimeout(() => {
                    O(!1);
                }, 1000);
        }
        return (
            p.S.subscribe(m.CkL.EMPHASIZE_SLOWMODE_COOLDOWN, e),
            () => {
                p.S.unsubscribe(m.CkL.EMPHASIZE_SLOWMODE_COOLDOWN, e);
            }
        );
    }, []);
    let b = (0, c.Z)("SlowmodeIndicator");
    if (!i) return null;
    let S = (0, d.k)(s);
    if (!l && u > 0) {
        let e = o().duration(u);
        if (u > g.Z.Millis.HOUR) {
            let i = "".concat(e.minutes()).padStart(2, "0"),
                n = "".concat(e.seconds()).padStart(2, "0");
            t = "".concat(e.hours(), ":").concat(i, ":").concat(n);
        } else {
            let i = "".concat(e.seconds()).padStart(2, "0");
            t = "".concat(e.minutes(), ":").concat(i);
        }
    } else t = l ? (b ? f.intl.string(f.t["8+NidX"]) : f.intl.string(f.t.SSzXvb)) : f.intl.string(f.t.Icu3bW);
    let y = b
        ? (0, n.jsxs)(a.Text, {
              className: v.cooldownText,
              variant: "text-xs/medium",
              color: h ? "text-danger" : "text-muted",
              tabularNumbers: !0,
              children: [
                  (0, n.jsx)(a.ANZ, {
                      size: "xxs",
                      color: "currentColor",
                      className: v.slowModeIcon,
                  }),
                  t,
              ],
          })
        : (0, n.jsxs)(a.Text, {
              className: v.cooldownText,
              variant: "text-sm/medium",
              color: h ? "text-danger" : "text-muted",
              tabularNumbers: !0,
              children: [
                  t,
                  (0, n.jsx)(a.ANZ, {
                      size: "xs",
                      color: "currentColor",
                      className: v.slowModeIcon,
                  }),
              ],
          });
    return (0, n.jsx)(a.ua7, {
        text: S,
        children: (e) => {
            var t, i;
            return (0, n.jsx)(
                "div",
                ((t = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(i);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (n = n.concat(
                                Object.getOwnPropertySymbols(i).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(i, e).enumerable;
                                }),
                            )),
                            n.forEach(function (t) {
                                var n;
                                (n = i[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: n,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = n);
                            });
                    }
                    return e;
                })({ className: v.cooldownWrapper }, e)),
                (i = i = { children: y }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                    : (function (e, t) {
                          var i = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var n = Object.getOwnPropertySymbols(e);
                              i.push.apply(i, n);
                          }
                          return i;
                      })(Object(i)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                      }),
                t),
            );
        },
    });
}
function b(e) {
    let { channel: t, isThreadCreation: i = !1 } = e,
        r = (0, l.e7)([h.Z], () => h.Z.getSlowmodeCooldownGuess(t.id, i ? h.S.CreateThread : h.S.SendMessage)),
        s = (0, l.e7)([u.Z], () =>
            i
                ? u.Z.can(m.Plq.MANAGE_THREADS, t)
                : u.Z.can(m.Plq.MANAGE_CHANNELS, t) || u.Z.can(m.Plq.MANAGE_MESSAGES, t),
        ),
        { rateLimitPerUser: o } = t;
    return (0, n.jsx)(O, {
        isEnabled: o > 0,
        rateLimitPerUser: o,
        isBypassSlowmode: s,
        slowmodeCooldownGuess: r,
    });
}
