l.d(n, { Z: () => C }), l(47120);
var t = l(200651),
    i = l(192379),
    r = l(120356),
    a = l.n(r),
    s = l(481060),
    o = l(596454),
    u = l(911969),
    c = l(739754),
    d = l(970184),
    m = l(280501),
    h = l(388032),
    p = l(440078);
function x(e) {
    let { emoji: n, label: l, description: i, isDisabled: r, isOffset: s } = e,
        u = a()(p.labelContainer, {
            [p.disabled]: r,
            [p.offset]: null == n && s
        });
    return (0, t.jsxs)('div', {
        className: p.option,
        children: [
            null != n
                ? (0, t.jsx)(o.Z, {
                      className: p.emoji,
                      emojiId: n.id,
                      emojiName: n.name,
                      animated: n.animated
                  })
                : null,
            (0, t.jsxs)('div', {
                className: u,
                children: [
                    (0, t.jsx)('strong', {
                        className: p.label,
                        children: l
                    }),
                    null != i
                        ? (0, t.jsx)('span', {
                              className: p.description,
                              children: i
                          })
                        : null
                ]
            })
        ]
    });
}
function v(e) {
    let { emoji: n, label: l } = e;
    return (0, t.jsx)('div', {
        className: p.option,
        children: (0, t.jsxs)('div', {
            className: a()(p.value, p.singleValue),
            children: [
                null != n
                    ? (0, t.jsx)(o.Z, {
                          className: p.emoji,
                          src: n.src,
                          emojiId: n.id,
                          emojiName: n.name,
                          animated: n.animated
                      })
                    : null,
                (0, t.jsx)('span', {
                    className: p.singleValueLabel,
                    children: l
                })
            ]
        })
    });
}
function f(e) {
    let { options: n } = e;
    return (0, t.jsx)('div', {
        className: p.option,
        children: (0, t.jsx)('div', {
            className: p.value,
            children: n.map((e, n) =>
                (0, t.jsxs)(
                    'div',
                    {
                        className: p.optionTag,
                        children: [
                            null != e.emoji
                                ? (0, t.jsx)(o.Z, {
                                      className: p.smallEmoji,
                                      src: e.emoji.src,
                                      emojiId: e.emoji.id,
                                      emojiName: e.emoji.name,
                                      animated: e.emoji.animated
                                  })
                                : null,
                            (0, t.jsx)(
                                'span',
                                {
                                    className: p.tag,
                                    children: e.label
                                },
                                e.value
                            )
                        ]
                    },
                    n
                )
            )
        })
    });
}
function C(e) {
    let { type: n, options: l, id: r, placeholder: a, maxValues: o, minValues: C, disabled: g } = e,
        j = i.useMemo(() => l.filter((e) => e.default).map((e) => e.value), [l]),
        {
            state: N,
            executeStateUpdate: S,
            visualState: E,
            isDisabled: I,
            error: Z
        } = (0, d.Ee)(e, {
            type: n,
            values: j
        }),
        T = o > 1,
        b = E === m.gH.LOADING,
        [y, L] = i.useState(!1),
        [k, _] = i.useState(() => new Set(l.filter((e) => e.default).map((e) => e.value))),
        [R, P] = i.useState(k),
        O = i.useMemo(() => l.some((e) => null != e.emoji), [l]);
    i.useEffect(() => {
        if ((null == N ? void 0 : N.type) === u.re.STRING_SELECT) {
            let e = new Set(N.values);
            _(e), P(e);
        } else {
            let e = new Set(j);
            _(e), P(e);
        }
    }, [r, j, N]);
    let A = i.useCallback(() => {
        R !== k &&
            S({
                type: u.re.STRING_SELECT,
                values: Array.from(k)
            }) &&
            P(k);
    }, [k, R, P, S]);
    i.useEffect(() => {
        !(y || (k.size === R.size && Array.from(R).every((e) => k.has(e)))) && A();
    }, [y, k, R, A]);
    let M = s.UNb;
    T ? (M = s.gzz) : 0 === C && (M = s.s6k);
    let w = (0, s.cYr)({
        value: k,
        onChange: (e) => _(e),
        onSelectInteraction: M
    });
    return (0, t.jsxs)(i.Fragment, {
        children: [
            (0, t.jsxs)('div', {
                className: p.container,
                children: [
                    (0, t.jsx)(s.PhF, {
                        isDisabled: g || I,
                        className: p.select,
                        options: l.map((e) => ({
                            ...e,
                            disabled: T && !k.has(e.value) && k.size === o
                        })),
                        placeholder: null != a ? a : h.intl.string(h.t.Otr6W1),
                        onClose: () => L(!1),
                        onOpen: () => L(!0),
                        maxVisibleItems: 5,
                        closeOnSelect: !T,
                        optionClassName: p.selectOption,
                        renderOptionLabel: (e) =>
                            (0, t.jsx)(x, {
                                ...e,
                                isDisabled: T && !k.has(e.value) && k.size === o,
                                isOffset: O
                            }),
                        renderOptionValue: (e) => (T ? (0, t.jsx)(f, { options: e }) : (0, t.jsx)(v, { ...e[0] })),
                        ...w
                    }),
                    b
                        ? (0, t.jsx)('div', {
                              className: p.__invalid_loading,
                              children: (0, t.jsx)(s.bbz, {
                                  dotRadius: 3.5,
                                  themed: !0
                              })
                          })
                        : null
                ]
            }),
            null != Z
                ? (0, t.jsx)(c.st, {
                      ...(0, c.c4)(Z),
                      className: p.error
                  })
                : null
        ]
    });
}
