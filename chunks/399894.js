n.d(t, { Z: () => m });
var r = n(200651);
n(192379);
var a = n(120356),
    i = n.n(a),
    l = n(913527),
    s = n.n(l),
    o = n(481060),
    c = n(70956),
    d = n(388032),
    u = n(350337);
let m = (e) => {
    let t,
        n,
        { rateLimitPerUser: a, slowmodeCooldownGuess: l, isBypassSlowmode: m, leadingIcon: h = !1 } = e;
    if (a >= c.Z.Seconds.HOUR) {
        let e = Math.floor(a / c.Z.Seconds.HOUR),
            t = Math.floor((a - e * c.Z.Seconds.HOUR) / c.Z.Seconds.MINUTE),
            r = a - e * c.Z.Seconds.HOUR - t * c.Z.Seconds.MINUTE;
        n = d.NW.formatToPlainString(d.t.oEwLe3, {
            hours: e,
            minutes: t,
            seconds: r
        });
    } else if (a >= 60) {
        let e = Math.floor(a / 60);
        n = d.NW.formatToPlainString(d.t.DARKYm, {
            minutes: e,
            seconds: a - 60 * e
        });
    } else n = d.NW.formatToPlainString(d.t['9yE8GR'], { seconds: a });
    if (!m && l > 0) {
        let e = s().duration(l);
        if (l > c.Z.Millis.HOUR) {
            let n = ''.concat(e.minutes()).padStart(2, '0'),
                r = ''.concat(e.seconds()).padStart(2, '0');
            t = ''.concat(e.hours(), ':').concat(n, ':').concat(r);
        } else {
            let n = ''.concat(e.seconds()).padStart(2, '0');
            t = ''.concat(e.minutes(), ':').concat(n);
        }
    } else t = m ? d.NW.string(d.t.SSzXvb) : d.NW.string(d.t.Icu3bW);
    let g = (0, r.jsx)(o.Text, {
            variant: 'text-sm/normal',
            color: 'text-muted',
            children: t
        }),
        f = (0, r.jsx)(o.ANZ, {
            size: 'xs',
            color: 'currentColor',
            className: i()(u.slowModeIcon, { [u.leadingIcon]: h })
        });
    return (0, r.jsx)(o.ua7, {
        text: n,
        children: (e) => {
            var t, n;
            return (0, r.jsx)(
                'div',
                ((t = (function (e) {
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
                })({ className: u.cooldownWrapper }, e)),
                (n = n =
                    {
                        children: h
                            ? (0, r.jsxs)(r.Fragment, {
                                  children: [f, g]
                              })
                            : (0, r.jsxs)(r.Fragment, {
                                  children: [g, f]
                              })
                    }),
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
                t)
            );
        }
    });
};
