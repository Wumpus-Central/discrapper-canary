n.d(t, { Z: () => f }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(772848),
    s = n(481060),
    c = n(871499),
    u = n(388032),
    d = n(730288);
function p(e) {
    let { width: t = 24, height: n = 24, isBadged: l = !1 } = e,
        [o] = i.useState(() => (0, a.Z)());
    return (0, r.jsxs)('svg', {
        width: t,
        height: n,
        viewBox: '0 0 24 24',
        children: [
            (0, r.jsx)('defs', {
                children: (0, r.jsxs)('mask', {
                    id: o,
                    children: [
                        (0, r.jsx)('rect', {
                            fill: 'white',
                            width: '100%',
                            height: '100%'
                        }),
                        l &&
                            (0, r.jsx)('circle', {
                                cx: '20',
                                cy: '19',
                                r: '10',
                                fill: 'black'
                            })
                    ]
                })
            }),
            (0, r.jsx)('g', {
                mask: 'url(#'.concat(o, ')'),
                children: (0, r.jsx)(s.E0I, {})
            })
        ]
    });
}
function h(e) {
    let { className: t, numRequestToSpeak: n } = e,
        i = n > 0;
    return (0, r.jsxs)('div', {
        className: o()(d.raisedHandIcon, t),
        children: [
            (0, r.jsx)(p, { isBadged: i }),
            i
                ? (0, r.jsx)(s.Text, {
                      className: d.raisedHandCount,
                      variant: 'text-xs/semibold',
                      children: n > 99 ? '99+' : n
                  })
                : null
        ]
    });
}
function f(e) {
    var { toggleRequestToSpeakSidebar: t, showRequestToSpeakSidebar: n, className: l, numRequestToSpeak: o, onClick: a } = e,
        s = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['toggleRequestToSpeakSidebar', 'showRequestToSpeakSidebar', 'className', 'numRequestToSpeak', 'onClick']);
    let d = i.useCallback(() => {
        null == a || a(), t();
    }, [a, t]);
    return (0, r.jsx)(
        c.Z,
        (function (e) {
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
        })(
            {
                onClick: d,
                label: n ? u.NW.string(u.t.gKGz7O) : u.NW.string(u.t.ImQ4dX),
                className: l,
                iconComponent: () =>
                    (0, r.jsx)(h, {
                        numRequestToSpeak: o,
                        className: l
                    })
            },
            s
        )
    );
}
