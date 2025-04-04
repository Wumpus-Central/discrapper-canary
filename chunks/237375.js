n.d(t, { Z: () => O }), n(266796);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(481060),
    l = n(965386),
    c = n(118012),
    u = n(987826),
    d = n(826298),
    f = n(665692),
    _ = n(388032),
    p = n(893541);
function h(e, t, n) {
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
function m(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
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
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let b = 200;
function y(e, t, n) {
    return (0, r.jsx)(
        u.Z,
        {
            className: p.option,
            name: e.displayName,
            state: t,
            onClick: n
        },
        e.name
    );
}
function v(e) {
    let { command: t, optionStates: n, onOptionClick: o } = e,
        {
            requiredOptions: a,
            setOptionalOptions: l,
            unsetOptionalOptions: u
        } = i.useMemo(() => {
            var e, r, i, o;
            let a = null != (i = null == (e = t.options) ? void 0 : e.filter((e) => e.required)) ? i : [],
                s = null != (o = null == (r = t.options) ? void 0 : r.filter((e) => !e.required)) ? o : [];
            return {
                requiredOptions: a,
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
        d = (0, r.jsx)('div', {
            className: p.optionalNames,
            children: u.map((e) =>
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
        f = a.map((e) => y(e, null == n ? void 0 : n[e.name], o)),
        h =
            l.length > 0
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(s.X6q, {
                              className: p.optionalHeader,
                              variant: 'heading-deprecated-12/semibold',
                              children: _.NW.string(_.t['5C107O'])
                          }),
                          l.map((e) => y(e, null == n ? void 0 : n[e.name], o))
                      ]
                  })
                : null,
        g =
            u.length > 0
                ? (0, r.jsx)(s.ua7, {
                      text: d,
                      'aria-label': !1,
                      delay: b,
                      children: (e) =>
                          (0, r.jsx)(
                              c.Z,
                              E(
                                  m(
                                      {
                                          className: p.optionalCount,
                                          color: c.Z.Colors.MUTED
                                      },
                                      e
                                  ),
                                  { children: 0 === l.length ? _.NW.formatToPlainString(_.t['0mI72t'], { count: u.length }) : _.NW.formatToPlainString(_.t.BP8N0N, { count: u.length }) }
                              )
                          )
                  })
                : null;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            f,
            null != h || null != g
                ? (0, r.jsxs)('div', {
                      className: p.optionals,
                      children: [h, g]
                  })
                : null
        ]
    });
}
function O(e) {
    var t, n, o;
    let s,
        { command: c, activeOptionName: u, channel: _, showOptions: h, showImage: m, optionStates: g, onOptionClick: E, section: b, isSelectable: y = !0 } = e,
        O = i.useMemo(() => {
            var e;
            return null == c || null == (e = c.options) ? void 0 : e.find((e) => e.name === u);
        }, [u, c]),
        I = null != u ? (null == g ? void 0 : g[u]) : null;
    s = null != I && (null == (t = I.lastValidationResult) ? void 0 : t.success) === !1 ? (null != (n = I.lastValidationResult.error) ? n : '') : null;
    let S = m && null != b ? (0, d.ky)(b) : null;
    return (0, r.jsxs)('div', {
        className: a()(p.wrapper, y ? null : p.disabled),
        children: [
            null != S
                ? (0, r.jsx)(S, {
                      className: p.image,
                      channel: _,
                      section: b,
                      width: 32,
                      height: 32
                  })
                : null,
            (0, r.jsxs)('div', {
                className: p.infoWrapper,
                children: [
                    (0, r.jsxs)('div', {
                        className: p.usageWrapper,
                        children: [
                            (0, r.jsx)(l.BR, {
                                className: p.title,
                                children: f.GI + c.displayName
                            }),
                            h
                                ? (0, r.jsx)(v, {
                                      command: c,
                                      optionStates: g,
                                      onOptionClick: E
                                  })
                                : null
                        ]
                    }),
                    (0, r.jsx)(l.wL, {
                        className: a()(p.description, null != s ? p.error : null),
                        children: null != (o = null != s ? s : null == O ? void 0 : O.displayDescription) ? o : c.displayDescription
                    })
                ]
            }),
            (0, r.jsx)(l.dY, {
                className: p.source,
                children: null == b ? void 0 : b.name
            })
        ]
    });
}
