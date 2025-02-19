r.d(t, { Z: () => h }), r(266796), r(47120);
var n = r(200651),
    l = r(192379),
    i = r(120356),
    o = r.n(i),
    a = r(481060),
    c = r(596454),
    s = r(911969),
    u = r(739754),
    d = r(970184),
    p = r(280501),
    b = r(388032),
    f = r(601445);
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
        s = o()(f.labelContainer, {
            [f.disabled]: i,
            [f.offset]: null == t && a
        });
    return (0, n.jsxs)('div', {
        className: f.option,
        children: [
            null != t
                ? (0, n.jsx)(c.Z, {
                      className: f.emoji,
                      emojiId: t.id,
                      emojiName: t.name,
                      animated: t.animated
                  })
                : null,
            (0, n.jsxs)('div', {
                className: s,
                children: [
                    (0, n.jsx)('strong', {
                        className: f.label,
                        children: r
                    }),
                    null != l
                        ? (0, n.jsx)('span', {
                              className: f.description,
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
        className: f.option,
        children: (0, n.jsxs)('div', {
            className: o()(f.value, f.singleValue),
            children: [
                null != t
                    ? (0, n.jsx)(c.Z, {
                          className: f.emoji,
                          src: t.src,
                          emojiId: t.id,
                          emojiName: t.name,
                          animated: t.animated
                      })
                    : null,
                (0, n.jsx)('span', {
                    className: f.singleValueLabel,
                    children: r
                })
            ]
        })
    });
}
function g(e) {
    let { options: t } = e;
    return (0, n.jsx)('div', {
        className: f.option,
        children: (0, n.jsx)('div', {
            className: f.value,
            children: t.map((e, t) =>
                (0, n.jsxs)(
                    'div',
                    {
                        className: f.optionTag,
                        children: [
                            null != e.emoji
                                ? (0, n.jsx)(c.Z, {
                                      className: f.smallEmoji,
                                      src: e.emoji.src,
                                      emojiId: e.emoji.id,
                                      emojiName: e.emoji.name,
                                      animated: e.emoji.animated
                                  })
                                : null,
                            (0, n.jsx)(
                                'span',
                                {
                                    className: f.tag,
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
        } = (0, d.Ee)(e, {
            type: t,
            values: P
        }),
        N = c > 1,
        I = S === p.gH.LOADING,
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
        !(k || (T.size === L.size && Array.from(L).every((e) => T.has(e)))) && A();
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
                className: f.container,
                children: [
                    (0, n.jsx)(
                        a.PhF,
                        O(
                            {
                                isDisabled: v || C,
                                className: f.select,
                                options: r.map((e) => y(O({}, e), { disabled: N && !T.has(e.value) && T.size === c })),
                                placeholder: null != o ? o : b.NW.string(b.t.Otr6W1),
                                onClose: () => Z(!1),
                                onOpen: () => Z(!0),
                                maxVisibleItems: 5,
                                closeOnSelect: !N,
                                optionClassName: f.selectOption,
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
                              className: f.__invalid_loading,
                              children: (0, n.jsx)(a.bbz, {
                                  dotRadius: 3.5,
                                  themed: !0
                              })
                          })
                        : null
                ]
            }),
            null != E ? (0, n.jsx)(u.st, y(O({}, (0, u.c4)(E)), { className: f.error })) : null
        ]
    });
}
