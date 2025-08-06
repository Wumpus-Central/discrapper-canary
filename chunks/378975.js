(n.d(t, { Z: () => v }), n(953529), n(388685));
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(481060),
    l = n(596454),
    c = n(911969),
    u = n(739754),
    d = n(970184),
    f = n(280501),
    _ = n(388032),
    p = n(950386);
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
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                h(e, t, n[t]);
            }));
    }
    return e;
}
function g(e, t) {
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
function b(e) {
    let { emoji: t, label: n, description: i, isDisabled: o, isOffset: s } = e,
        c = a()(p.labelContainer, {
            [p.disabled]: o,
            [p.offset]: null == t && s
        });
    return (0, r.jsxs)('div', {
        className: p.option,
        children: [
            null != t
                ? (0, r.jsx)(l.Z, {
                      className: p.emoji,
                      emojiId: t.id,
                      emojiName: t.name,
                      animated: t.animated
                  })
                : null,
            (0, r.jsxs)('div', {
                className: c,
                children: [
                    (0, r.jsx)('strong', {
                        className: p.label,
                        children: n
                    }),
                    null != i
                        ? (0, r.jsx)('span', {
                              className: p.description,
                              children: i
                          })
                        : null
                ]
            })
        ]
    });
}
function y(e) {
    let { emoji: t, label: n } = e;
    return (0, r.jsx)('div', {
        className: p.option,
        children: (0, r.jsxs)('div', {
            className: a()(p.value, p.singleValue),
            children: [
                null != t
                    ? (0, r.jsx)(l.Z, {
                          className: p.emoji,
                          src: t.src,
                          emojiId: t.id,
                          emojiName: t.name,
                          animated: t.animated
                      })
                    : null,
                (0, r.jsx)('span', {
                    className: p.singleValueLabel,
                    children: n
                })
            ]
        })
    });
}
function O(e) {
    let { options: t } = e;
    return (0, r.jsx)('div', {
        className: p.option,
        children: (0, r.jsx)('div', {
            className: p.value,
            children: t.map((e, t) =>
                (0, r.jsxs)(
                    'div',
                    {
                        className: p.optionTag,
                        children: [
                            null != e.emoji
                                ? (0, r.jsx)(l.Z, {
                                      className: p.smallEmoji,
                                      src: e.emoji.src,
                                      emojiId: e.emoji.id,
                                      emojiName: e.emoji.name,
                                      animated: e.emoji.animated
                                  })
                                : null,
                            (0, r.jsx)(
                                'span',
                                {
                                    className: p.tag,
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
function v(e) {
    let { type: t, options: n, id: o, placeholder: a, maxValues: l, minValues: h, disabled: g } = e,
        v = i.useMemo(() => n.filter((e) => e.default).map((e) => e.value), [n]),
        {
            state: I,
            executeStateUpdate: T,
            visualState: S,
            isDisabled: A,
            error: N
        } = (0, d.Ee)(e, {
            type: t,
            values: v
        }),
        C = l > 1,
        R = S === f.gH.LOADING,
        [P, w] = i.useState(!1),
        [D, L] = i.useState(() => new Set(n.filter((e) => e.default).map((e) => e.value))),
        [x, M] = i.useState(D),
        k = i.useMemo(() => n.some((e) => null != e.emoji), [n]);
    i.useEffect(() => {
        if ((null == I ? void 0 : I.type) === c.re.STRING_SELECT) {
            let e = new Set(I.values);
            (L(e), M(e));
        } else {
            let e = new Set(v);
            (L(e), M(e));
        }
    }, [o, v, I]);
    let j = i.useCallback(() => {
        x !== D &&
            T({
                type: c.re.STRING_SELECT,
                values: Array.from(D)
            }) &&
            M(D);
    }, [D, x, M, T]);
    i.useEffect(() => {
        !P && ((D.size === x.size && Array.from(x).every((e) => D.has(e))) || j());
    }, [P, D, x, j]);
    let U = s.UNb;
    C ? (U = s.gzz) : 0 === h && (U = s.s6k);
    let G = (0, s.cYr)({
        value: D,
        onChange: (e) => L(e),
        onSelectInteraction: U
    });
    return (0, r.jsxs)(i.Fragment, {
        children: [
            (0, r.jsx)('div', {
                className: p.container,
                children: (0, r.jsx)(
                    s.PhF,
                    m(
                        {
                            isProcessing: R,
                            isDisabled: g || S === f.gH.DISABLED || A,
                            className: p.select,
                            options: n.map((e) => E(m({}, e), { disabled: C && !D.has(e.value) && D.size === l })),
                            placeholder: null != a ? a : _.intl.string(_.t.Otr6W1),
                            onClose: () => w(!1),
                            onOpen: () => w(!0),
                            maxVisibleItems: 5,
                            closeOnSelect: !C,
                            optionClassName: p.selectOption,
                            renderOptionLabel: (e) =>
                                (0, r.jsx)(
                                    b,
                                    E(m({}, e), {
                                        isDisabled: C && !D.has(e.value) && D.size === l,
                                        isOffset: k
                                    })
                                ),
                            renderOptionValue: (e) => (C ? (0, r.jsx)(O, { options: e }) : (0, r.jsx)(y, m({}, e[0])))
                        },
                        G
                    )
                )
            }),
            null != N ? (0, r.jsx)(u.st, E(m({}, (0, u.c4)(N)), { className: p.error })) : null
        ]
    });
}
