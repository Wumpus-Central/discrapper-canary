r.d(t, { Z: () => P }), r(953529), r(388685);
var n = r(255367),
    l = r(73800),
    i = r(120356),
    o = r.n(i),
    a = r(512722),
    c = r.n(a),
    s = r(481060),
    u = r(596454),
    d = r(911969),
    p = r(739754),
    f = r(970184),
    b = r(280501),
    m = r(388032),
    O = r(623734);
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function j(e, t) {
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
function g(e) {
    let { emoji: t, label: r, description: l, isDisabled: i, isOffset: a } = e,
        c = o()(O.labelContainer, {
            [O.disabled]: i,
            [O.offset]: null == t && a,
        });
    return (0, n.jsxs)("div", {
        className: O.option,
        children: [
            null != t
                ? (0, n.jsx)(u.Z, {
                      className: O.emoji,
                      emojiId: t.id,
                      emojiName: t.name,
                      animated: t.animated,
                  })
                : null,
            (0, n.jsxs)("div", {
                className: c,
                children: [
                    (0, n.jsx)("strong", {
                        className: O.label,
                        children: r,
                    }),
                    null != l
                        ? (0, n.jsx)("span", {
                              className: O.description,
                              children: l,
                          })
                        : null,
                ],
            }),
        ],
    });
}
function h(e) {
    let { emoji: t, label: r } = e;
    return (0, n.jsx)("div", {
        className: O.option,
        children: (0, n.jsxs)("div", {
            className: o()(O.value, O.singleValue),
            children: [
                null != t
                    ? (0, n.jsx)(u.Z, {
                          className: O.emoji,
                          src: t.src,
                          emojiId: t.id,
                          emojiName: t.name,
                          animated: t.animated,
                      })
                    : null,
                (0, n.jsx)("span", {
                    className: O.singleValueLabel,
                    children: r,
                }),
            ],
        }),
    });
}
function v(e) {
    let { options: t } = e;
    return (0, n.jsx)("div", {
        className: O.option,
        children: (0, n.jsx)("div", {
            className: O.value,
            children: t.map((e, t) =>
                (0, n.jsxs)(
                    "div",
                    {
                        className: O.optionTag,
                        children: [
                            null != e.emoji
                                ? (0, n.jsx)(u.Z, {
                                      className: O.smallEmoji,
                                      src: e.emoji.src,
                                      emojiId: e.emoji.id,
                                      emojiName: e.emoji.name,
                                      animated: e.emoji.animated,
                                  })
                                : null,
                            (0, n.jsx)(
                                "span",
                                {
                                    className: O.tag,
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
function P(e) {
    let { type: t, options: r, id: i, placeholder: a, maxValues: u, minValues: P, disabled: x } = e,
        S = l.useMemo(() => r.filter((e) => e.default).map((e) => e.value), [r]),
        w = (0, f.CJ)();
    c()(null != w, "SelectActionComponent must be rendered inside a ComponentStateContext");
    let {
            state: C,
            executeStateUpdate: E,
            visualState: N,
            isDisabled: I,
            error: T,
        } = w.useComponentState(
            e,
            S.length > 0
                ? {
                      type: t,
                      values: S,
                  }
                : void 0,
        ),
        Z = null != w.modal,
        k = u > 1,
        L = N === b.gH.LOADING,
        [D, R] = l.useState(!1),
        [A, _] = l.useState(() => new Set(r.filter((e) => e.default).map((e) => e.value))),
        [M, U] = l.useState(A),
        H = l.useMemo(() => r.some((e) => null != e.emoji), [r]);
    l.useEffect(() => {
        if ((null == C ? void 0 : C.type) === d.re.STRING_SELECT) {
            let e = new Set(C.values);
            _(e), U(e);
        } else {
            let e = new Set(S);
            _(e), U(e);
        }
    }, [i, S, C]);
    let F = l.useCallback(() => {
        M !== A &&
            E({
                type: d.re.STRING_SELECT,
                values: Array.from(A),
            }) &&
            U(A);
    }, [A, M, U, E]);
    l.useEffect(() => {
        !D && ((A.size === M.size && Array.from(M).every((e) => A.has(e))) || F());
    }, [D, A, M, F]);
    let G = s.UNb;
    k ? (G = s.gzz) : 0 === P && (G = s.s6k);
    let z = (0, s.cYr)({
        value: A,
        onChange: (e) => _(e),
        onSelectInteraction: G,
    });
    return (0, n.jsxs)(l.Fragment, {
        children: [
            (0, n.jsx)("div", {
                className: O.container,
                children: (0, n.jsx)(
                    s.PhF,
                    y(
                        {
                            isProcessing: L,
                            isDisabled: x || N === b.gH.DISABLED || I,
                            className: o()(O.select, { [O.inModal]: Z }),
                            options: r.map((e) => j(y({}, e), { disabled: k && !A.has(e.value) && A.size === u })),
                            placeholder: null != a ? a : m.intl.string(m.t.Otr6W1),
                            onClose: () => R(!1),
                            onOpen: () => R(!0),
                            maxVisibleItems: 5,
                            closeOnSelect: !k,
                            optionClassName: O.selectOption,
                            renderOptionLabel: (e) =>
                                (0, n.jsx)(
                                    g,
                                    j(y({}, e), {
                                        isDisabled: k && !A.has(e.value) && A.size === u,
                                        isOffset: H,
                                    }),
                                ),
                            renderOptionValue: (e) => (k ? (0, n.jsx)(v, { options: e }) : (0, n.jsx)(h, y({}, e[0]))),
                        },
                        z,
                    ),
                ),
            }),
            null == T || Z ? null : (0, n.jsx)(p.st, j(y({}, (0, p.c4)(T)), { className: O.error })),
        ],
    });
}
