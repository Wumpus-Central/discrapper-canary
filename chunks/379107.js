n.d(t, {
    A: () => C,
}),
    n(228524),
    n(896048);
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(284009),
    o = n.n(s),
    c = n(843282),
    u = n(565645),
    d = n(155718),
    m = n(594808),
    f = n(207963),
    p = n(489414),
    h = n(814890),
    b = n(979811);

function g(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function x(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function y(e) {
    let { emoji: t, label: n, description: l, isDisabled: a, isOffset: s } = e,
        o = i()(b._A, {
            [b.r9]: a,
            [b.cY]: null == t && s,
        });
    return (0, r.jsxs)("div", {
        className: b.uK,
        children: [
            null != t
                ? (0, r.jsx)(u.A, {
                      className: b.Zg,
                      emojiId: t.id,
                      emojiName: t.name,
                      animated: t.animated,
                  })
                : null,
            (0, r.jsxs)("div", {
                className: o,
                children: [
                    (0, r.jsx)("strong", {
                        className: b.Pf,
                        children: n,
                    }),
                    null != l
                        ? (0, r.jsx)("span", {
                              className: b.h_,
                              children: l,
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
        className: b.uK,
        children: (0, r.jsxs)("div", {
            className: i()(b.Uq, b.u9),
            children: [
                null != t
                    ? (0, r.jsx)(u.A, {
                          className: b.Zg,
                          src: t.src,
                          emojiId: t.id,
                          emojiName: t.name,
                          animated: t.animated,
                      })
                    : null,
                (0, r.jsx)("span", {
                    className: b.oX,
                    children: n,
                }),
            ],
        }),
    });
}

function j(e) {
    let { options: t } = e;
    return (0, r.jsx)("div", {
        className: b.uK,
        children: (0, r.jsx)("div", {
            className: b.Uq,
            children: t.map((e, t) =>
                (0, r.jsxs)(
                    "div",
                    {
                        className: b.mK,
                        children: [
                            null != e.emoji
                                ? (0, r.jsx)(u.A, {
                                      className: b.eh,
                                      src: e.emoji.src,
                                      emojiId: e.emoji.id,
                                      emojiName: e.emoji.name,
                                      animated: e.emoji.animated,
                                  })
                                : null,
                            (0, r.jsx)(
                                "span",
                                {
                                    className: b.Tc,
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

function C(e) {
    let { type: t, options: n, id: a, maxValues: s, minValues: u, disabled: C } = e,
        _ = (0, h.c7)(e),
        A = l.useMemo(() => n.filter((e) => e.default).map((e) => e.value), [n]),
        O = (0, f.jc)();
    o()(null != O, "StringSelectActionComponent must be rendered inside a ComponentStateContext");
    let {
            state: E,
            executeStateUpdate: S,
            visualState: N,
            isDisabled: I,
            error: P,
        } = O.useComponentState(
            e,
            A.length > 0
                ? {
                      type: t,
                      values: A,
                  }
                : void 0,
        ),
        w = null != O.modal,
        T = s > 1,
        R = N === p.BB.LOADING,
        [L, D] = l.useState(!1),
        [k, M] = l.useState(() => new Set(n.filter((e) => e.default).map((e) => e.value))),
        [H, U] = l.useState(k),
        F = l.useMemo(() => n.some((e) => null != e.emoji), [n]);
    l.useEffect(() => {
        if ((null == E ? void 0 : E.type) === d.I5.STRING_SELECT) {
            let e = new Set(E.values);
            M(e), U(e);
        } else {
            let e = new Set(A);
            M(e), U(e);
        }
    }, [a, A, E]);
    let G = l.useCallback(() => {
        H !== k &&
            S({
                type: d.I5.STRING_SELECT,
                values: Array.from(k),
            }) &&
            U(k);
    }, [k, H, U, S]);
    l.useEffect(() => {
        L || (k.size === H.size && Array.from(H).every((e) => k.has(e))) || G();
    }, [L, k, H, G]);
    let V = c.lS;
    T ? (V = c.M8) : 0 === u && (V = c.$l);
    let B = (0, c.Ev)({
        value: k,
        onChange: (e) => M(e),
        onSelectInteraction: V,
    });
    return (0, r.jsxs)(l.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: b.kL,
                children: (0, r.jsx)(
                    c.Pw,
                    x(
                        g(
                            {
                                isProcessing: R,
                                isDisabled: C || N === p.BB.DISABLED || I,
                                className: i()(b.Lt, {
                                    [b.zE]: w,
                                }),
                                options: n.map((e) =>
                                    x(g({}, e), {
                                        disabled: T && !k.has(e.value) && k.size === s,
                                    }),
                                ),
                                placeholder: _,
                                onClose: () => D(!1),
                                onOpen: () => D(!0),
                                maxVisibleItems: 5,
                                closeOnSelect: !T,
                                optionClassName: b.MT,
                                renderOptionLabel: (e) =>
                                    (0, r.jsx)(
                                        y,
                                        x(g({}, e), {
                                            isDisabled: T && !k.has(e.value) && k.size === s,
                                            isOffset: F,
                                        }),
                                    ),
                                renderOptionValue: (e) =>
                                    T
                                        ? (0, r.jsx)(j, {
                                              options: e,
                                          })
                                        : (0, r.jsx)(v, g({}, e[0])),
                            },
                            B,
                        ),
                        {
                            "data-migration-pending": !0,
                        },
                    ),
                ),
            }),
            null == P || w
                ? null
                : (0, r.jsx)(
                      m.S0,
                      x(g({}, (0, m.PS)(P)), {
                          className: b.z3,
                      }),
                  ),
        ],
    });
}
