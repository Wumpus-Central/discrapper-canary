r.d(t, { Z: () => h }), r(266796), r(47120);
var n = r(200651),
    l = r(192379),
    i = r(120356),
    o = r.n(i),
    a = r(481060),
    c = r(596454),
    s = r(911969),
    u = r(739754),
    p = r(970184),
    d = r(280501),
    f = r(388032),
    b = r(950386);
function O(e) {
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
function y(e, t) {
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
function m(e) {
    let { emoji: t, label: r, description: l, isDisabled: i, isOffset: a } = e,
        s = o()(b.labelContainer, {
            [b.disabled]: i,
            [b.offset]: null == t && a
        });
    return (0, n.jsxs)('div', {
        className: b.option,
        children: [
            null != t
                ? (0, n.jsx)(c.Z, {
                      className: b.emoji,
                      emojiId: t.id,
                      emojiName: t.name,
                      animated: t.animated
                  })
                : null,
            (0, n.jsxs)('div', {
                className: s,
                children: [
                    (0, n.jsx)('strong', {
                        className: b.label,
                        children: r
                    }),
                    null != l
                        ? (0, n.jsx)('span', {
                              className: b.description,
                              children: l
                          })
                        : null
                ]
            })
        ]
    });
}
function j(e) {
    let { emoji: t, label: r } = e;
    return (0, n.jsx)('div', {
        className: b.option,
        children: (0, n.jsxs)('div', {
            className: o()(b.value, b.singleValue),
            children: [
                null != t
                    ? (0, n.jsx)(c.Z, {
                          className: b.emoji,
                          src: t.src,
                          emojiId: t.id,
                          emojiName: t.name,
                          animated: t.animated
                      })
                    : null,
                (0, n.jsx)('span', {
                    className: b.singleValueLabel,
                    children: r
                })
            ]
        })
    });
}
function g(e) {
    let { options: t } = e;
    return (0, n.jsx)('div', {
        className: b.option,
        children: (0, n.jsx)('div', {
            className: b.value,
            children: t.map((e, t) =>
                (0, n.jsxs)(
                    'div',
                    {
                        className: b.optionTag,
                        children: [
                            null != e.emoji
                                ? (0, n.jsx)(c.Z, {
                                      className: b.smallEmoji,
                                      src: e.emoji.src,
                                      emojiId: e.emoji.id,
                                      emojiName: e.emoji.name,
                                      animated: e.emoji.animated
                                  })
                                : null,
                            (0, n.jsx)(
                                'span',
                                {
                                    className: b.tag,
                                    children: e.label
                                },
                                e.value
                            )
                        ]
                    },
                    t
                )
            )
        })
    });
}
function h(e) {
    let { type: t, options: r, id: i, placeholder: o, maxValues: c, minValues: h, disabled: v } = e,
        P = l.useMemo(() => r.filter((e) => e.default).map((e) => e.value), [r]),
        {
            state: x,
            executeStateUpdate: w,
            visualState: S,
            isDisabled: C,
            error: E
        } = (0, p.Ee)(e, {
            type: t,
            values: P
        }),
        N = c > 1,
        I = S === d.gH.LOADING,
        [k, Z] = l.useState(!1),
        [T, D] = l.useState(() => new Set(r.filter((e) => e.default).map((e) => e.value))),
        [L, _] = l.useState(T),
        R = l.useMemo(() => r.some((e) => null != e.emoji), [r]);
    l.useEffect(() => {
        if ((null == x ? void 0 : x.type) === s.re.STRING_SELECT) {
            let e = new Set(x.values);
            D(e), _(e);
        } else {
            let e = new Set(P);
            D(e), _(e);
        }
    }, [i, P, x]);
    let A = l.useCallback(() => {
        L !== T &&
            w({
                type: s.re.STRING_SELECT,
                values: Array.from(T)
            }) &&
            _(T);
    }, [T, L, _, w]);
    l.useEffect(() => {
        !k && ((T.size === L.size && Array.from(L).every((e) => T.has(e))) || A());
    }, [k, T, L, A]);
    let M = a.UNb;
    N ? (M = a.gzz) : 0 === h && (M = a.s6k);
    let U = (0, a.cYr)({
        value: T,
        onChange: (e) => D(e),
        onSelectInteraction: M
    });
    return (0, n.jsxs)(l.Fragment, {
        children: [
            (0, n.jsxs)('div', {
                className: b.container,
                children: [
                    (0, n.jsx)(
                        a.PhF,
                        O(
                            {
                                isDisabled: v || C,
                                className: b.select,
                                options: r.map((e) => y(O({}, e), { disabled: N && !T.has(e.value) && T.size === c })),
                                placeholder: null != o ? o : f.NW.string(f.t.Otr6W1),
                                onClose: () => Z(!1),
                                onOpen: () => Z(!0),
                                maxVisibleItems: 5,
                                closeOnSelect: !N,
                                optionClassName: b.selectOption,
                                renderOptionLabel: (e) =>
                                    (0, n.jsx)(
                                        m,
                                        y(O({}, e), {
                                            isDisabled: N && !T.has(e.value) && T.size === c,
                                            isOffset: R
                                        })
                                    ),
                                renderOptionValue: (e) => (N ? (0, n.jsx)(g, { options: e }) : (0, n.jsx)(j, O({}, e[0])))
                            },
                            U
                        )
                    ),
                    I
                        ? (0, n.jsx)('div', {
                              className: b.__invalid_loading,
                              children: (0, n.jsx)(a.bbz, {
                                  dotRadius: 3.5,
                                  themed: !0
                              })
                          })
                        : null
                ]
            }),
            null != E ? (0, n.jsx)(u.st, y(O({}, (0, u.c4)(E)), { className: b.error })) : null
        ]
    });
}
