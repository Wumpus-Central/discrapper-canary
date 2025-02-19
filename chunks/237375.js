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
    p = n(388032),
    _ = n(988533);
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
let v = 200;
function b(e, t, n) {
    return (0, r.jsx)(
        u.Z,
        {
            className: _.option,
            name: e.displayName,
            state: t,
            onClick: n
        },
        e.name
    );
}
function y(e) {
    let { command: t, optionStates: n, onOptionClick: o } = e,
        {
            requiredOptions: a,
            setOptionalOptions: l,
            unsetOptionalOptions: u
        } = i.useMemo(() => {
            var e, r, i, o;
            let a = null !== (i = null === (e = t.options) || void 0 === e ? void 0 : e.filter((e) => e.required)) && void 0 !== i ? i : [],
                s = null !== (o = null === (r = t.options) || void 0 === r ? void 0 : r.filter((e) => !e.required)) && void 0 !== o ? o : [];
            return {
                requiredOptions: a,
                setOptionalOptions: s.filter((e) => {
                    var t;
                    return null == n ? void 0 : null === (t = n[e.name]) || void 0 === t ? void 0 : t.hasValue;
                }),
                unsetOptionalOptions: s.filter((e) => {
                    var t;
                    return !(null == n ? void 0 : null === (t = n[e.name]) || void 0 === t ? void 0 : t.hasValue);
                })
            };
        }, [t.options, n]),
        d = (0, r.jsx)('div', {
            className: _.optionalNames,
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
        f = a.map((e) => b(e, null == n ? void 0 : n[e.name], o)),
        h =
            l.length > 0
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(s.X6q, {
                              className: _.optionalHeader,
                              variant: 'heading-deprecated-12/semibold',
                              children: p.NW.string(p.t['5C107O'])
                          }),
                          l.map((e) => b(e, null == n ? void 0 : n[e.name], o))
                      ]
                  })
                : null,
        g =
            u.length > 0
                ? (0, r.jsx)(s.ua7, {
                      text: d,
                      'aria-label': !1,
                      delay: v,
                      children: (e) =>
                          (0, r.jsx)(
                              c.Z,
                              E(
                                  m(
                                      {
                                          className: _.optionalCount,
                                          color: c.Z.Colors.MUTED
                                      },
                                      e
                                  ),
                                  { children: 0 === l.length ? p.NW.formatToPlainString(p.t['0mI72t'], { count: u.length }) : p.NW.formatToPlainString(p.t.BP8N0N, { count: u.length }) }
                              )
                          )
                  })
                : null;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            f,
            null != h || null != g
                ? (0, r.jsxs)('div', {
                      className: _.optionals,
                      children: [h, g]
                  })
                : null
        ]
    });
}
function O(e) {
    var t, n, o;
    let s,
        { command: c, activeOptionName: u, channel: p, showOptions: h, showImage: m, optionStates: g, onOptionClick: E, section: v, isSelectable: b = !0 } = e,
        O = i.useMemo(() => {
            var e;
            return null == c ? void 0 : null === (e = c.options) || void 0 === e ? void 0 : e.find((e) => e.name === u);
        }, [u, c]),
        S = null != u ? (null == g ? void 0 : g[u]) : null;
    s = null != S && (null === (t = S.lastValidationResult) || void 0 === t ? void 0 : t.success) === !1 ? (null !== (n = S.lastValidationResult.error) && void 0 !== n ? n : '') : null;
    let I = m && null != v ? (0, d.ky)(v) : null;
    return (0, r.jsxs)('div', {
        className: a()(_.wrapper, b ? null : _.disabled),
        children: [
            null != I
                ? (0, r.jsx)(I, {
                      className: _.image,
                      channel: p,
                      section: v,
                      width: 32,
                      height: 32
                  })
                : null,
            (0, r.jsxs)('div', {
                className: _.infoWrapper,
                children: [
                    (0, r.jsxs)('div', {
                        className: _.usageWrapper,
                        children: [
                            (0, r.jsx)(l.BR, {
                                className: _.title,
                                children: f.GI + c.displayName
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
                        className: a()(_.description, null != s ? _.error : null),
                        children: null !== (o = null != s ? s : null == O ? void 0 : O.displayDescription) && void 0 !== o ? o : c.displayDescription
                    })
                ]
            }),
            (0, r.jsx)(l.dY, {
                className: _.source,
                children: null == v ? void 0 : v.name
            })
        ]
    });
}
