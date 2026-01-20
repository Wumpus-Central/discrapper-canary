n.d(t, { Z: () => I }), n(953529), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(512722),
    l = n.n(s),
    c = n(199849),
    u = n(596454),
    d = n(911969),
    f = n(739754),
    p = n(970184),
    _ = n(280501),
    h = n(292419),
    m = n(543098);
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
function S(e) {
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
function I(e) {
    let { type: t, options: n, id: a, maxValues: s, minValues: u, disabled: g } = e,
        b = (0, h.Wo)(e),
        I = i.useMemo(() => n.filter((e) => e.default).map((e) => e.value), [n]),
        T = (0, p.CJ)();
    l()(null != T, "StringSelectActionComponent must be rendered inside a ComponentStateContext");
    let {
            state: C,
            executeStateUpdate: A,
            visualState: N,
            isDisabled: P,
            error: w,
        } = T.useComponentState(
            e,
            I.length > 0
                ? {
                      type: t,
                      values: I,
                  }
                : void 0,
        ),
        R = null != T.modal,
        D = s > 1,
        x = N === _.gH.LOADING,
        [L, j] = i.useState(!1),
        [M, k] = i.useState(() => new Set(n.filter((e) => e.default).map((e) => e.value))),
        [U, G] = i.useState(M),
        Z = i.useMemo(() => n.some((e) => null != e.emoji), [n]);
    i.useEffect(() => {
        if ((null == C ? void 0 : C.type) === d.re.STRING_SELECT) {
            let e = new Set(C.values);
            k(e), G(e);
        } else {
            let e = new Set(I);
            k(e), G(e);
        }
    }, [a, I, C]);
    let F = i.useCallback(() => {
        U !== M &&
            A({
                type: d.re.STRING_SELECT,
                values: Array.from(M),
            }) &&
            G(M);
    }, [M, U, G, A]);
    i.useEffect(() => {
        !L && ((M.size === U.size && Array.from(U).every((e) => M.has(e))) || F());
    }, [L, M, U, F]);
    let B = c.UN;
    D ? (B = c.gz) : 0 === u && (B = c.s6);
    let V = (0, c.cY)({
        value: M,
        onChange: (e) => k(e),
        onSelectInteraction: B,
    });
    return (0, r.jsxs)(i.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: m.container,
                children: (0, r.jsx)(
                    c.B6,
                    y(
                        E(
                            {
                                isProcessing: x,
                                isDisabled: g || N === _.gH.DISABLED || P,
                                className: o()(m.select, { [m.inModal]: R }),
                                options: n.map((e) => y(E({}, e), { disabled: D && !M.has(e.value) && M.size === s })),
                                placeholder: b,
                                onClose: () => j(!1),
                                onOpen: () => j(!0),
                                maxVisibleItems: 5,
                                closeOnSelect: !D,
                                optionClassName: m.selectOption,
                                renderOptionLabel: (e) =>
                                    (0, r.jsx)(
                                        O,
                                        y(E({}, e), {
                                            isDisabled: D && !M.has(e.value) && M.size === s,
                                            isOffset: Z,
                                        }),
                                    ),
                                renderOptionValue: (e) =>
                                    D ? (0, r.jsx)(S, { options: e }) : (0, r.jsx)(v, E({}, e[0])),
                            },
                            V,
                        ),
                        { "data-migration-pending": !0 },
                    ),
                ),
            }),
            null == w || R ? null : (0, r.jsx)(f.st, y(E({}, (0, f.c4)(w)), { className: m.error })),
        ],
    });
}
