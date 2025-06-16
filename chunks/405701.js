n.d(t, { Z: () => I }), n(388685);
var r = n(255367),
    i = n(73800),
    a = n(913527),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(11769),
    u = n(338390),
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
function O(e, t) {
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
function v(e) {
    let t,
        { isEnabled: n, rateLimitPerUser: a, isBypassSlowmode: s, slowmodeCooldownGuess: d } = e,
        [f, E] = i.useState(!1);
    i.useEffect(() => {
        function e() {
            E(!0),
                setTimeout(() => {
                    E(!1);
                }, 1000);
        }
        return (
            _.S.subscribe(h.CkL.EMPHASIZE_SLOWMODE_COOLDOWN, e),
            () => {
                _.S.unsubscribe(h.CkL.EMPHASIZE_SLOWMODE_COOLDOWN, e);
            }
        );
    }, []);
    let y = (0, u.Z)('SlowmodeIndicator');
    if (!n) return null;
    let v = (0, c.k)(a);
    if (!s && d > 0) {
        let e = o().duration(d);
        if (d > p.Z.Millis.HOUR) {
            let n = ''.concat(e.minutes()).padStart(2, '0'),
                r = ''.concat(e.seconds()).padStart(2, '0');
            t = ''.concat(e.hours(), ':').concat(n, ':').concat(r);
        } else {
            let n = ''.concat(e.seconds()).padStart(2, '0');
            t = ''.concat(e.minutes(), ':').concat(n);
        }
    } else t = s ? (y ? m.intl.string(m.t['8+NidX']) : m.intl.string(m.t.SSzXvb)) : m.intl.string(m.t.Icu3bW);
    let I = y
        ? (0, r.jsxs)(l.Text, {
              className: g.cooldownText,
              variant: 'text-xs/medium',
              color: f ? 'text-danger' : 'text-muted',
              tabularNumbers: !0,
              children: [
                  (0, r.jsx)(l.ANZ, {
                      size: 'xxs',
                      color: 'currentColor',
                      className: g.slowModeIcon
                  }),
                  t
              ]
          })
        : (0, r.jsxs)(l.Text, {
              className: g.cooldownText,
              variant: 'text-sm/medium',
              color: f ? 'text-danger' : 'text-muted',
              tabularNumbers: !0,
              children: [
                  t,
                  (0, r.jsx)(l.ANZ, {
                      size: 'xs',
                      color: 'currentColor',
                      className: g.slowModeIcon
                  })
              ]
          });
    return (0, r.jsx)(l.ua7, {
        text: v,
        children: (e) => (0, r.jsx)('div', O(b({ className: g.cooldownWrapper }, e), { children: I }))
    });
}
function I(e) {
    let { channel: t, isThreadCreation: n = !1 } = e,
        i = (0, s.e7)([f.Z], () => f.Z.getSlowmodeCooldownGuess(t.id, n ? f.S.CreateThread : f.S.SendMessage)),
        a = (0, s.e7)([d.Z], () => (n ? d.Z.can(h.Plq.MANAGE_THREADS, t) : d.Z.can(h.Plq.MANAGE_CHANNELS, t) || d.Z.can(h.Plq.MANAGE_MESSAGES, t))),
        { rateLimitPerUser: o } = t,
        l = o > 0;
    return (0, r.jsx)(v, {
        isEnabled: l,
        rateLimitPerUser: o,
        isBypassSlowmode: a,
        slowmodeCooldownGuess: i
    });
}
