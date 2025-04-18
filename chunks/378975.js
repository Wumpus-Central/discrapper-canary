r.d(t, { Z: () => h }), r(953529), r(388685);
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
    f = r(388032),
    b = r(391317);
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
function m(e, t) {
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
function y(e) {
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
            executeStateUpdate: S,
            visualState: w,
            isDisabled: C,
            error: E
        } = (0, d.Ee)(e, {
            type: t,
            values: P
        }),
        N = c > 1,
        I = w === p.gH.LOADING,
        [T, k] = l.useState(!1),
        [Z, L] = l.useState(() => new Set(r.filter((e) => e.default).map((e) => e.value))),
        [D, R] = l.useState(Z),
        _ = l.useMemo(() => r.some((e) => null != e.emoji), [r]);
    l.useEffect(() => {
        if ((null == x ? void 0 : x.type) === s.re.STRING_SELECT) {
            let e = new Set(x.values);
            L(e), R(e);
        } else {
            let e = new Set(P);
            L(e), R(e);
        }
    }, [i, P, x]);
    let A = l.useCallback(() => {
        D !== Z &&
            S({
                type: s.re.STRING_SELECT,
                values: Array.from(Z)
            }) &&
            R(Z);
    }, [Z, D, R, S]);
    l.useEffect(() => {
        !T && ((Z.size === D.size && Array.from(D).every((e) => Z.has(e))) || A());
    }, [T, Z, D, A]);
    let M = a.UNb;
    N ? (M = a.gzz) : 0 === h && (M = a.s6k);
    let U = (0, a.cYr)({
        value: Z,
        onChange: (e) => L(e),
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
                                options: r.map((e) => m(O({}, e), { disabled: N && !Z.has(e.value) && Z.size === c })),
                                placeholder: null != o ? o : f.NW.string(f.t.Otr6W1),
                                onClose: () => k(!1),
                                onOpen: () => k(!0),
                                maxVisibleItems: 5,
                                closeOnSelect: !N,
                                optionClassName: b.selectOption,
                                renderOptionLabel: (e) =>
                                    (0, n.jsx)(
                                        y,
                                        m(O({}, e), {
                                            isDisabled: N && !Z.has(e.value) && Z.size === c,
                                            isOffset: _
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
            null != E ? (0, n.jsx)(u.st, m(O({}, (0, u.c4)(E)), { className: b.error })) : null
        ]
    });
}
