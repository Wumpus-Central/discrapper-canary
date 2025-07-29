(n.d(t, { Z: () => O }), n(953529));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(965386),
    c = n(987826),
    u = n(826298),
    d = n(761652),
    _ = n(388032),
    f = n(893541);
function p(e, t, n) {
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
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            }));
    }
    return e;
}
function m(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let E = 200;
function b(e, t, n) {
    return (0, r.jsx)(
        c.Z,
        {
            className: f.option,
            name: e.displayName,
            state: t,
            onClick: n
        },
        e.name
    );
}
function y(e) {
    let { command: t, optionStates: n, onOptionClick: a } = e,
        {
            requiredOptions: o,
            setOptionalOptions: l,
            unsetOptionalOptions: c
        } = i.useMemo(() => {
            var e, r, i, a;
            let o = null != (i = null == (e = t.options) ? void 0 : e.filter((e) => e.required)) ? i : [],
                s = null != (a = null == (r = t.options) ? void 0 : r.filter((e) => !e.required)) ? a : [];
            return {
                requiredOptions: o,
                setOptionalOptions: s.filter((e) => {
                    var t;
                    return null == n || null == (t = n[e.name]) ? void 0 : t.hasValue;
                }),
                unsetOptionalOptions: s.filter((e) => {
                    var t;
                    return !(null == n || null == (t = n[e.name]) ? void 0 : t.hasValue);
                })
            };
        }, [t.options, n]),
        u = (0, r.jsx)('div', {
            className: f.optionalNames,
            children: c.map((e) =>
                (0, r.jsx)(
                    s.Text,
                    {
                        variant: 'text-sm/normal',
                        children: e.displayName
                    },
                    e.name
                )
            )
        }),
        d = o.map((e) => b(e, null == n ? void 0 : n[e.name], a)),
        p =
            l.length > 0
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(s.X6q, {
                              className: f.optionalHeader,
                              variant: 'heading-deprecated-12/semibold',
                              children: _.intl.string(_.t['5C107O'])
                          }),
                          l.map((e) => b(e, null == n ? void 0 : n[e.name], a))
                      ]
                  })
                : null,
        m =
            c.length > 0
                ? (0, r.jsx)(s.ua7, {
                      text: u,
                      'aria-label': !1,
                      delay: E,
                      children: (e) =>
                          (0, r.jsx)(
                              s.Text,
                              g(
                                  h(
                                      {
                                          className: f.optionalCount,
                                          color: 'text-muted',
                                          variant: 'text-sm/normal'
                                      },
                                      e
                                  ),
                                  { children: 0 === l.length ? _.intl.formatToPlainString(_.t['0mI72t'], { count: c.length }) : _.intl.formatToPlainString(_.t.BP8N0N, { count: c.length }) }
                              )
                          )
                  })
                : null;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            d,
            null != p || null != m
                ? (0, r.jsxs)('div', {
                      className: f.optionals,
                      children: [p, m]
                  })
                : null
        ]
    });
}
function O(e) {
    var t, n, a;
    let s,
        { command: c, activeOptionName: _, channel: p, showOptions: h, showImage: m, optionStates: g, onOptionClick: E, section: b, isSelectable: O = !0 } = e,
        v = i.useMemo(() => {
            var e;
            return null == c || null == (e = c.options) ? void 0 : e.find((e) => e.name === _);
        }, [_, c]),
        I = null != _ ? (null == g ? void 0 : g[_]) : null;
    s = null != I && (null == (t = I.lastValidationResult) ? void 0 : t.success) === !1 ? (null != (n = I.lastValidationResult.error) ? n : '') : null;
    let T = m && null != b ? (0, u.ky)(b) : null;
    return (0, r.jsxs)('div', {
        className: o()(f.wrapper, O ? null : f.disabled),
        children: [
            null != T
                ? (0, r.jsx)(T, {
                      className: f.image,
                      channel: p,
                      section: b,
                      width: 32,
                      height: 32
                  })
                : null,
            (0, r.jsxs)('div', {
                className: f.infoWrapper,
                children: [
                    (0, r.jsxs)('div', {
                        className: f.usageWrapper,
                        children: [
                            (0, r.jsx)(l.BR, {
                                className: f.title,
                                children: d.GI + c.displayName
                            }),
                            h
                                ? (0, r.jsx)(y, {
                                      command: c,
                                      optionStates: g,
                                      onOptionClick: E
                                  })
                                : null
                        ]
                    }),
                    (0, r.jsx)(l.wL, {
                        className: o()(f.description, null != s ? f.error : null),
                        children: null != (a = null != s ? s : null == v ? void 0 : v.displayDescription) ? a : c.displayDescription
                    })
                ]
            }),
            (0, r.jsx)(l.dY, {
                className: f.source,
                children: null == b ? void 0 : b.name
            })
        ]
    });
}
