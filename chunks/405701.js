(i.d(e, { Z: () => b }), i(388685));
var n = i(255367),
    r = i(73800),
    s = i(913527),
    o = i.n(s),
    l = i(442837),
    a = i(481060),
    d = i(11769),
    u = i(338390),
    c = i(496675),
    h = i(300429),
    p = i(585483),
    g = i(70956),
    f = i(981631),
    m = i(388032),
    v = i(873007);
function O(t) {
    let e,
        { isEnabled: i, rateLimitPerUser: s, isBypassSlowmode: l, slowmodeCooldownGuess: c } = t,
        [h, O] = r.useState(!1);
    r.useEffect(() => {
        function t() {
            (O(!0),
                setTimeout(() => {
                    O(!1);
                }, 1000));
        }
        return (
            p.S.subscribe(f.CkL.EMPHASIZE_SLOWMODE_COOLDOWN, t),
            () => {
                p.S.unsubscribe(f.CkL.EMPHASIZE_SLOWMODE_COOLDOWN, t);
            }
        );
    }, []);
    let b = (0, u.Z)('SlowmodeIndicator');
    if (!i) return null;
    let S = (0, d.k)(s);
    if (!l && c > 0) {
        let t = o().duration(c);
        if (c > g.Z.Millis.HOUR) {
            let i = ''.concat(t.minutes()).padStart(2, '0'),
                n = ''.concat(t.seconds()).padStart(2, '0');
            e = ''.concat(t.hours(), ':').concat(i, ':').concat(n);
        } else {
            let i = ''.concat(t.seconds()).padStart(2, '0');
            e = ''.concat(t.minutes(), ':').concat(i);
        }
    } else e = l ? (b ? m.intl.string(m.t['8+NidX']) : m.intl.string(m.t.SSzXvb)) : m.intl.string(m.t.Icu3bW);
    let y = b
        ? (0, n.jsxs)(a.Text, {
              className: v.cooldownText,
              variant: 'text-xs/medium',
              color: h ? 'text-danger' : 'text-muted',
              tabularNumbers: !0,
              children: [
                  (0, n.jsx)(a.ANZ, {
                      size: 'xxs',
                      color: 'currentColor',
                      className: v.slowModeIcon
                  }),
                  e
              ]
          })
        : (0, n.jsxs)(a.Text, {
              className: v.cooldownText,
              variant: 'text-sm/medium',
              color: h ? 'text-danger' : 'text-muted',
              tabularNumbers: !0,
              children: [
                  e,
                  (0, n.jsx)(a.ANZ, {
                      size: 'xs',
                      color: 'currentColor',
                      className: v.slowModeIcon
                  })
              ]
          });
    return (0, n.jsx)(a.ua7, {
        text: S,
        children: (t) => {
            var e, i;
            return (0, n.jsx)(
                'div',
                ((e = (function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {},
                            n = Object.keys(i);
                        ('function' == typeof Object.getOwnPropertySymbols &&
                            (n = n.concat(
                                Object.getOwnPropertySymbols(i).filter(function (t) {
                                    return Object.getOwnPropertyDescriptor(i, t).enumerable;
                                })
                            )),
                            n.forEach(function (e) {
                                var n;
                                ((n = i[e]),
                                    e in t
                                        ? Object.defineProperty(t, e, {
                                              value: n,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (t[e] = n));
                            }));
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
                e)
            );
        }
    });
}
function b(t) {
    let { channel: e, isThreadCreation: i = !1 } = t,
        r = (0, l.e7)([h.Z], () => h.Z.getSlowmodeCooldownGuess(e.id, i ? h.S.CreateThread : h.S.SendMessage)),
        s = (0, l.e7)([c.Z], () => (i ? c.Z.can(f.Plq.MANAGE_THREADS, e) : c.Z.can(f.Plq.MANAGE_CHANNELS, e) || c.Z.can(f.Plq.MANAGE_MESSAGES, e))),
        { rateLimitPerUser: o } = e;
    return (0, n.jsx)(O, {
        isEnabled: o > 0,
        rateLimitPerUser: o,
        isBypassSlowmode: s,
        slowmodeCooldownGuess: r
    });
}
