n.d(t, { Z: () => I }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(913527),
    a = n.n(o),
    s = n(442837),
    l = n(481060),
    c = n(11769),
    u = n(540059),
    d = n(496675),
    f = n(300429),
    _ = n(585483),
    p = n(70956),
    h = n(981631),
    m = n(388032),
    g = n(873007);
function E(e, t, n) {
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
function b(e) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
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
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function O(e) {
    let t,
        { isEnabled: n, rateLimitPerUser: o, isBypassSlowmode: s, slowmodeCooldownGuess: u, isRefreshChatInputEnabled: d, isRefreshEnabled: f } = e,
        [E, y] = i.useState(!1);
    if (
        (i.useEffect(() => {
            function e() {
                y(!0),
                    setTimeout(() => {
                        y(!1);
                    }, 1000);
            }
            return (
                _.S.subscribe(h.CkL.EMPHASIZE_SLOWMODE_COOLDOWN, e),
                () => {
                    _.S.unsubscribe(h.CkL.EMPHASIZE_SLOWMODE_COOLDOWN, e);
                }
            );
        }, []),
        !n)
    )
        return null;
    let O = (0, c.k)(o);
    if (!s && u > 0) {
        let e = a().duration(u);
        if (u > p.Z.Millis.HOUR) {
            let n = ''.concat(e.minutes()).padStart(2, '0'),
                r = ''.concat(e.seconds()).padStart(2, '0');
            t = ''.concat(e.hours(), ':').concat(n, ':').concat(r);
        } else {
            let n = ''.concat(e.seconds()).padStart(2, '0');
            t = ''.concat(e.minutes(), ':').concat(n);
        }
    } else t = s ? (d ? m.NW.string(m.t['8+NidX']) : m.NW.string(m.t.SSzXvb)) : d ? '' : m.NW.string(m.t.Icu3bW);
    return (0, r.jsx)(l.ua7, {
        text: O,
        children: (e) =>
            (0, r.jsx)(
                'div',
                v(b({ className: g.cooldownWrapper }, e), {
                    children: (0, r.jsxs)(l.Text, {
                        className: g.cooldownText,
                        variant: d ? 'text-xs/medium' : 'text-sm/medium',
                        color: f ? (E ? 'text-danger' : 'text-muted') : 'interactive-normal',
                        tabularNumbers: !0,
                        children: [
                            t,
                            (0, r.jsx)(l.ANZ, {
                                size: 'xs',
                                color: 'currentColor',
                                className: g.slowModeIcon
                            })
                        ]
                    })
                })
            )
    });
}
function I(e) {
    let { channel: t, isThreadCreation: n = !1 } = e,
        i = (0, s.e7)([f.Z], () => f.Z.getSlowmodeCooldownGuess(t.id, n ? f.S.CreateThread : f.S.SendMessage)),
        o = (0, s.e7)([d.Z], () => (n ? d.Z.can(h.Plq.MANAGE_THREADS, t) : d.Z.can(h.Plq.MANAGE_CHANNELS, t) || d.Z.can(h.Plq.MANAGE_MESSAGES, t))),
        { rateLimitPerUser: a } = t,
        l = a > 0,
        c = (0, u.R6)('SlowmodeIndicator'),
        _ = (0, u.Q3)('SlowmodeIndicator');
    return (0, r.jsx)(O, {
        isEnabled: l,
        rateLimitPerUser: a,
        isBypassSlowmode: o,
        slowmodeCooldownGuess: i,
        isRefreshChatInputEnabled: c,
        isRefreshEnabled: _
    });
}
