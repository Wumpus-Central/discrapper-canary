n.d(t, { Z: () => T }), n(953529), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(512722),
    l = n.n(s),
    c = n(481060),
    u = n(596454),
    d = n(911969),
    f = n(739754),
    _ = n(970184),
    p = n(280501),
    h = n(292419),
    m = n(219879);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
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
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function O(e) {
    let { emoji: t, label: n, description: i, isDisabled: a, isOffset: s } = e,
        l = o()(m.labelContainer, {
            [m.disabled]: a,
            [m.offset]: null == t && s,
        });
    return (0, r.jsxs)("div", {
        className: m.option,
        children: [
            null != t
                ? (0, r.jsx)(u.Z, {
                      className: m.emoji,
                      emojiId: t.id,
                      emojiName: t.name,
                      animated: t.animated,
                  })
                : null,
            (0, r.jsxs)("div", {
                className: l,
                children: [
                    (0, r.jsx)("strong", {
                        className: m.label,
                        children: n,
                    }),
                    null != i
                        ? (0, r.jsx)("span", {
                              className: m.description,
                              children: i,
                          })
                        : null,
                ],
            }),
        ],
    });
}
function v(e) {
    let { emoji: t, label: n } = e;
    return (0, r.jsx)("div", {
        className: m.option,
        children: (0, r.jsxs)("div", {
            className: o()(m.value, m.singleValue),
            children: [
                null != t
                    ? (0, r.jsx)(u.Z, {
                          className: m.emoji,
                          src: t.src,
                          emojiId: t.id,
                          emojiName: t.name,
                          animated: t.animated,
                      })
                    : null,
                (0, r.jsx)("span", {
                    className: m.singleValueLabel,
                    children: n,
                }),
            ],
        }),
    });
}
function I(e) {
    let { options: t } = e;
    return (0, r.jsx)("div", {
        className: m.option,
        children: (0, r.jsx)("div", {
            className: m.value,
            children: t.map((e, t) =>
                (0, r.jsxs)(
                    "div",
                    {
                        className: m.optionTag,
                        children: [
                            null != e.emoji
                                ? (0, r.jsx)(u.Z, {
                                      className: m.smallEmoji,
                                      src: e.emoji.src,
                                      emojiId: e.emoji.id,
                                      emojiName: e.emoji.name,
                                      animated: e.emoji.animated,
                                  })
                                : null,
                            (0, r.jsx)(
                                "span",
                                {
                                    className: m.tag,
                                    children: e.label,
                                },
                                e.value,
                            ),
                        ],
                    },
                    t,
                ),
            ),
        }),
    });
}
function T(e) {
    let { type: t, options: n, id: a, maxValues: s, minValues: u, disabled: g } = e,
        b = (0, h.Wo)(e),
        T = i.useMemo(() => n.filter((e) => e.default).map((e) => e.value), [n]),
        S = (0, _.CJ)();
    l()(null != S, "StringSelectActionComponent must be rendered inside a ComponentStateContext");
    let {
            state: A,
            executeStateUpdate: C,
            visualState: N,
            isDisabled: R,
            error: P,
        } = S.useComponentState(
            e,
            T.length > 0
                ? {
                      type: t,
                      values: T,
                  }
                : void 0,
        ),
        D = null != S.modal,
        w = s > 1,
        L = N === p.gH.LOADING,
        [x, M] = i.useState(!1),
        [k, j] = i.useState(() => new Set(n.filter((e) => e.default).map((e) => e.value))),
        [U, G] = i.useState(k),
        B = i.useMemo(() => n.some((e) => null != e.emoji), [n]);
    i.useEffect(() => {
        if ((null == A ? void 0 : A.type) === d.re.STRING_SELECT) {
            let e = new Set(A.values);
            j(e), G(e);
        } else {
            let e = new Set(T);
            j(e), G(e);
        }
    }, [a, T, A]);
    let Z = i.useCallback(() => {
        U !== k &&
            C({
                type: d.re.STRING_SELECT,
                values: Array.from(k),
            }) &&
            G(k);
    }, [k, U, G, C]);
    i.useEffect(() => {
        !x && ((k.size === U.size && Array.from(U).every((e) => k.has(e))) || Z());
    }, [x, k, U, Z]);
    let F = c.UNb;
    w ? (F = c.gzz) : 0 === u && (F = c.s6k);
    let V = (0, c.cYr)({
        value: k,
        onChange: (e) => j(e),
        onSelectInteraction: F,
    });
    return (0, r.jsxs)(i.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: m.container,
                children: (0, r.jsx)(
                    c.PhF,
                    E(
                        {
                            isProcessing: L,
                            isDisabled: g || N === p.gH.DISABLED || R,
                            className: o()(m.select, { [m.inModal]: D }),
                            options: n.map((e) => y(E({}, e), { disabled: w && !k.has(e.value) && k.size === s })),
                            placeholder: b,
                            onClose: () => M(!1),
                            onOpen: () => M(!0),
                            maxVisibleItems: 5,
                            closeOnSelect: !w,
                            optionClassName: m.selectOption,
                            renderOptionLabel: (e) =>
                                (0, r.jsx)(
                                    O,
                                    y(E({}, e), {
                                        isDisabled: w && !k.has(e.value) && k.size === s,
                                        isOffset: B,
                                    }),
                                ),
                            renderOptionValue: (e) => (w ? (0, r.jsx)(I, { options: e }) : (0, r.jsx)(v, E({}, e[0]))),
                        },
                        V,
                    ),
                ),
            }),
            null == P || D ? null : (0, r.jsx)(f.st, y(E({}, (0, f.c4)(P)), { className: m.error })),
        ],
    });
}
