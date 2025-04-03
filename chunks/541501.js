r.d(t, { default: () => f });
var n = r(200651),
    a = r(192379),
    o = r(788347),
    c = r(481060),
    i = r(239091),
    u = r(667142),
    l = r(388032);
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function s(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
function f(e) {
    let { onSelect: t, onClose: r } = e,
        f = (function () {
            let e = u.ZP.useState((e) => e.timeToLiveMs, o.X);
            return (0, n.jsx)(c.II_, {
                id: 'opacity',
                'aria-haspopup': !0,
                label: 'Time To Live',
                control: (t, r) =>
                    (0, n.jsx)(
                        c._wy,
                        s(p({}, t), {
                            ref: r,
                            value: e,
                            maxValue: u.VX,
                            minValue: u.ih,
                            renderValue: (e) => ''.concat(e, 'ms'),
                            onChange: (e) => (0, u.S_)(e),
                            'aria-label': 'Time To Live'
                        })
                    )
            });
        })(),
        b = (function () {
            let e = u.ZP.useState((e) => e.reappearTimeMs, o.X);
            return (0, n.jsx)(c.II_, {
                id: 'opacity',
                'aria-haspopup': !0,
                label: 'Time To Reappear',
                control: (t, r) =>
                    (0, n.jsx)(
                        c._wy,
                        s(p({}, t), {
                            ref: r,
                            value: e,
                            maxValue: u.V5,
                            minValue: u.xc,
                            renderValue: (e) => ''.concat(e, 'ms'),
                            onChange: (e) => (0, u.Df)(e),
                            'aria-label': 'Time To Reappear'
                        })
                    )
            });
        })(),
        y = a.useRef(r);
    return (
        a.useEffect(() => {
            y.current = r;
        }),
        a.useEffect(() => () => y.current(), []),
        (0, n.jsxs)(c.v2r, {
            navId: 'overlay-click-zone-debug-context-menu',
            onClose: i.Zy,
            'aria-label': l.NW.string(l.t.tPfVWl),
            onSelect: t,
            children: [f, b]
        })
    );
}
