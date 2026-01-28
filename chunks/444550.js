n.d(t, {
    p: () => k,
}),
    n(896048),
    n(733351);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(896170),
    l = n(52724),
    c = n(884362),
    u = n(837381),
    d = n(602034),
    f = n(66455),
    p = n(172218),
    _ = n(158954),
    h = n(862482),
    m = n(504345),
    g = n(265872),
    E = n(571356),
    y = n(397927),
    b = n(765671),
    O = n(194498),
    v = n(138101),
    A = n(985018),
    I = n(511630);

function S(e, t, n) {
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

function T(e) {
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
                S(e, t, n[t]);
            });
    }
    return e;
}

function C(e, t) {
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

function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : C(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function w(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = R(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function R(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let P = 44,
    D = {
        keys: ["label"],
    };

function L(e) {
    return e.label;
}

function x(e) {
    let { active: t, loadableOptions: n, debounceTime: r } = e,
        a = "function" == typeof n,
        [o, s] = i.useState({
            options: a ? [] : n,
            query: "",
            debouncedQuery: "",
            loading: !1,
        }),
        { options: l, loading: c, query: u, debouncedQuery: d } = o,
        f = i.useCallback(
            (e) =>
                s((t) =>
                    N(T({}, t), {
                        loading: a,
                        query: e,
                        debouncedQuery: e,
                    }),
                ),
            [a],
        );
    return (
        i.useEffect(() => {
            t && f("");
        }, [t, f]),
        i.useEffect(() => {
            let e;
            return (
                a
                    ? (s((e) =>
                          N(T({}, e), {
                              loading: !0,
                              debouncedQuery: null,
                          }),
                      ),
                      (e = setTimeout(
                          () => {
                              f(u);
                          },
                          null != r ? r : 500,
                      )))
                    : f(u),
                () => {
                    clearTimeout(e);
                }
            );
        }, [a, u, r, f]),
        i.useEffect(() => {
            let e = !1;

            function r() {
                return "function" == typeof n ? n(d) : Promise.resolve(n);
            }
            return (
                t &&
                    null !== d &&
                    r().then((t) => {
                        e ||
                            s((e) =>
                                N(T({}, e), {
                                    options: t,
                                    loading: !1,
                                }),
                            );
                    }),
                () => {
                    e = !0;
                }
            );
        }, [t, n, d]),
        {
            options: l,
            loading: c,
            onQueryChange: i.useCallback((e) => {
                s((t) =>
                    N(T({}, t), {
                        query: e,
                    }),
                );
            }, []),
        }
    );
}

function M(e, t) {
    return null == t
        ? []
        : (Array.isArray(t) ? t : [t])
              .map((t) => ("object" == typeof t && (null == t || "value" in t) ? t : e.find((e) => e.value === t)))
              .filter(Boolean);
}
let j = i.forwardRef(function (e, t) {
    let [n, ...a] = [e, t],
        {
            options: l,
            value: d,
            onChange: h,
            clearable: E = !1,
            multi: O = !1,
            closeOnSelect: v = !0,
            onOpen: S,
            onClose: C,
            placeholder: R = A.intl.string(A.t.XqMe3N),
            wrapperClassName: P,
            className: j,
            isDisabled: k = !1,
            isProcessing: G = !1,
            maxVisibleItems: B = 7,
            autoFocus: H = !1,
            popoutPosition: K = "bottom",
            popoutWidth: z,
            filter: q = !0,
            debounceTime: Z,
            renderOptionLabel: Q = L,
            onSearchChange: X,
            renderOptionPrefix: J = () => null,
            renderOptionSuffix: $ = () => null,
            "aria-describedby": ee,
            "aria-invalid": et,
            "aria-labelledby": en,
            "aria-required": er,
            inputClassNames: ei,
            onBlur: ea,
            onFocus: eo,
            matchSorterOptions: es,
            clearQueryOnSelect: el = !1,
            hidePills: ec,
            renderCustomPill: eu,
            customPillContainerClassName: ed,
        } = n,
        ef = w(n, [
            "options",
            "value",
            "onChange",
            "clearable",
            "multi",
            "closeOnSelect",
            "onOpen",
            "onClose",
            "placeholder",
            "wrapperClassName",
            "className",
            "isDisabled",
            "isProcessing",
            "maxVisibleItems",
            "autoFocus",
            "popoutPosition",
            "popoutWidth",
            "filter",
            "debounceTime",
            "renderOptionLabel",
            "onSearchChange",
            "renderOptionPrefix",
            "renderOptionSuffix",
            "aria-describedby",
            "aria-invalid",
            "aria-labelledby",
            "aria-required",
            "inputClassNames",
            "onBlur",
            "onFocus",
            "matchSorterOptions",
            "clearQueryOnSelect",
            "hidePills",
            "renderCustomPill",
            "customPillContainerClassName",
        ]),
        [ep] = a,
        { fieldProps: e_, props: eh } = (0, _.ndh)(ef),
        { ref: em, width: eg } = (0, b.Ay)(),
        { titleId: eE, errorId: ey, error: eb } = (0, m.xW)(),
        { ref: eO, width: ev } = (0, b.Ay)(),
        eA = i.useRef(null),
        [eI, eS] = i.useState(null),
        [eT, eC] = i.useState(!1),
        [eN, ew] = i.useState(null),
        [eR, eP] = i.useState(!1),
        eD = i.useRef(null),
        eL = i.useRef(null),
        {
            options: ex,
            loading: eM,
            onQueryChange: ej,
        } = x({
            active: eT,
            loadableOptions: l,
            debounceTime: Z,
        }),
        ek = i.useMemo(() => M(ex, d), [ex, d]),
        eU = i.useMemo(() => ek.map((e) => e.value), [ek]),
        eG = ek[ek.length - 1],
        eF = (0, f.A)(eG),
        eV = i.useId(),
        eB = i.useId(),
        eH = i.useCallback(
            (e) => {
                eT === e || k || (eC(e), e ? null == S || S() : null == C || C());
            },
            [k, C, S, eT],
        ),
        eY = i.useCallback(
            (e) => {
                eT && !e && eH(!1);
            },
            [eH, eT],
        ),
        eW = (0, p.K)(eY);
    i.useImperativeHandle(ep, () => ({
        close() {
            eH(!1);
        },
    }));
    let eK = i.useCallback((e, t) => {
            let n = document.querySelector(e),
                r = eD.current;
            eS(t),
                null != r &&
                    null != n &&
                    r.scrollIntoViewNode({
                        node: n,
                    });
        }, []),
        ez = i.useCallback(
            () =>
                new Promise((e) => {
                    let t = eD.current;
                    if (null == t) return e();
                    t.scrollToTop({
                        callback: () => requestAnimationFrame(() => e()),
                    });
                }),
            [],
        ),
        eq = i.useCallback(
            () =>
                new Promise((e) => {
                    let t = eD.current;
                    if (null == t) return e();
                    t.scrollToBottom({
                        callback: () => requestAnimationFrame(() => e()),
                    });
                }),
            [],
        ),
        eZ = (0, c.Ay)({
            id: eB,
            defaultFocused: null != eG ? String(eG.value) : void 0,
            scrollToStart: ez,
            scrollToEnd: eq,
            isEnabled: eT,
            wrap: !0,
            useVirtualFocus: !0,
            setFocus: eK,
            disableClickOnSpace: !0,
        }),
        eQ = (0, f.A)(eZ),
        eX = (0, f.A)(ex);
    i.useEffect(() => {
        let e = eX.current,
            t = eF.current;
        eT &&
            null != t &&
            !eM &&
            requestAnimationFrame(() => {
                let n = eD.current,
                    r = e.indexOf(t);
                null == n ||
                    n.scrollToIndex({
                        section: 0,
                        row: r,
                    });
            });
    }, [eT, eM, eX, eF]),
        i.useEffect(() => {
            if (eT) {
                var e;
                null == (e = eA.current) || e.scrollIntoView();
            }
        }, [eT]),
        i.useEffect(() => {
            let e = eQ.current;
            if (eT && !eM) {
                var t;
                let n = eA.current;
                if (null != n) {
                    n.focus();
                    let { value: e } = n;
                    (n.value = " "), (n.value = e);
                }
                eS(null != (t = e.focusedItemId()) ? t : null);
            } else {
                let t = eF.current,
                    n = null != t ? String(t.value) : null;
                e.setFocus(n), eS(null);
            }
        }, [eT, eM, eQ, eF]),
        i.useLayoutEffect(() => {
            eT || (O ? ew("") : null != eG && ew(eG.label));
        }, [O, eG, eT]),
        i.useLayoutEffect(() => {
            O && ew("");
        }, [O, ek.length]);
    let eJ = i.useCallback(
        function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            if (null == e) return void h(O ? [] : void 0);
            let n = "function" == typeof l,
                r = n ? ex.find((t) => t.value === e) : e;
            if (O) {
                let a = null != d ? d : [];
                if (
                    (a.some((t) => (n ? t.value : t) === e)
                        ? h(a.filter((t) => (n ? t.value : t) !== e))
                        : h([...a, r]),
                    t)
                ) {
                    var i;
                    null == (i = eA.current) || i.focus();
                }
            } else h(r);
            eS(null), (!O || v) && eH(!1), eP(!1), el && ew("");
        },
        [l, ex, O, v, el, h, d, eH],
    );
    i.useLayoutEffect(() => {
        if (H) {
            var e;
            null == (e = eA.current) || e.focus();
        }
    }, [H]);
    let e$ = i.useCallback(() => {
            ew(""), eJ(null), eH(!0);
        }, [eJ, eH]),
        e0 = i.useCallback(
            (e) => {
                switch (e.key) {
                    case "Escape":
                        eT && (e.stopPropagation(), eH(!1));
                        break;
                    case "ArrowDown":
                    case "ArrowUp":
                        eH(!0);
                }
            },
            [eH, eT],
        ),
        e1 = ex;
    eR && null != eN && !1 !== q && (e1 = "function" == typeof q ? q(ex, eN) : (0, s.Ht)(ex, eN, null != es ? es : D)),
        i.useEffect(() => {
            let e = eD.current;
            null == e || e.scrollToTop();
        }, [eN]),
        i.useEffect(() => {
            !eM && eR && null !== eN && requestAnimationFrame(() => eZ.focusFirstVisibleItem());
        }, [eM, eR, eN, eZ]);
    let e2 = O ? W : Y,
        e3 = i.useRef(null),
        { focusPreviousItem: e6, focusNextItem: e4 } = F(e3, eA, ek);
    return (0, r.jsxs)(u.hD, {
        navigator: eZ,
        children: [
            (0, r.jsx)(g.Y, {
                targetElementRef: eL,
                spacing: 0,
                animation: g.Y.Animation.NONE,
                shouldShow: eT,
                onRequestClose: () => eH(!1),
                layerContext: eh.popoutLayerContext,
                renderPopout: (e) => {
                    let { closePopout: t, position: n, updatePosition: i } = e;
                    return (0, r.jsx)(U, {
                        loading: eM,
                        multi: !!O,
                        listRef: eD,
                        listId: eV,
                        maxVisibleItems: B,
                        width: null != z && "auto" !== z ? z : ev,
                        selectedValues: eU,
                        closePopout: t,
                        onSelect: eJ,
                        closeOnSelect: v,
                        options: e1,
                        activeDescendant: eI,
                        renderOptionLabel: Q,
                        updatePosition: i,
                        popoutPosition: n,
                        renderOptionPrefix: J,
                        renderOptionSuffix: $,
                    });
                },
                position: K,
                children: (e, t) => {
                    let { "aria-expanded": n, "aria-controls": i } = e,
                        { isShown: a } = t,
                        s = a ? y.tN5 : y.abt,
                        { ref: l, onKeyDown: c } = eZ.containerProps,
                        u = (e) => {
                            var t;
                            null == (t = eh.onKeyDown) || t.call(eh, e), c(e), e0(e);
                        };
                    return (0, r.jsx)(
                        _.D0$,
                        N(T({}, e_), {
                            children: (e) => {
                                var t;
                                let i = null == e ? void 0 : e.controlId;
                                return (0, r.jsxs)(_.FON, {
                                    as: "div",
                                    disabled: k,
                                    ref: eL,
                                    className: o()(P, I.iE),
                                    containerClassName: j,
                                    style: {
                                        "--icons-width": "".concat(eg, "px"),
                                    },
                                    onBlur: (e) => {
                                        var t, n, r;
                                        (null == (t = eL.current) ? void 0 : t.contains(e.relatedTarget)) ||
                                            (null == (r = eD.current) || null == (n = r.getScrollerNode())
                                                ? void 0
                                                : n.contains(e.relatedTarget)) ||
                                            (O || null == eG || ew(eG.label), eP(!1), eH(!1), null == ea || ea(e));
                                    },
                                    children: [
                                        (0, r.jsx)(_.vN3, {
                                            ringTarget: eO,
                                            focusTarget: eA,
                                            offset: 4,
                                            children: (0, r.jsx)("div", {
                                                onClick: k
                                                    ? void 0
                                                    : (e) => {
                                                          e.stopPropagation(), e.preventDefault(), ew(""), eH(!0);
                                                      },
                                                onMouseDown: (e) => {
                                                    e.preventDefault();
                                                },
                                                ref: (e) => {
                                                    (eO.current = e), (eW.current = e);
                                                },
                                                className: o()(I.Lt, I.Vk, {
                                                    [I.m3]: O,
                                                }),
                                                children: (0, r.jsx)("div", {
                                                    className: o()(I.Uq, {
                                                        [I.m3]: O,
                                                    }),
                                                    children: (0, r.jsx)(e2, {
                                                        query: eN,
                                                        selectedOptions: ek,
                                                        loading: eM,
                                                        renderOptionPrefix: J,
                                                        renderOptionSuffix: $,
                                                        isDisabled: k,
                                                        isEditing: eR,
                                                        isProcessing: G,
                                                        inputRef: eA,
                                                        "aria-describedby":
                                                            null != ee ? ee : null == e ? void 0 : e.describedById,
                                                        "aria-errormessage":
                                                            null != (t = null == e ? void 0 : e.errorMessageId)
                                                                ? t
                                                                : ey,
                                                        "aria-invalid":
                                                            null != et
                                                                ? et
                                                                : (null == e ? void 0 : e.errorMessageId) != null ||
                                                                  null != eb,
                                                        "aria-required": null != er ? er : e_.required,
                                                        "aria-labelledby": null != en ? en : eE,
                                                        "aria-expanded": n,
                                                        setInputRef: (e) => {
                                                            (l.current = e), (eA.current = e);
                                                        },
                                                        onFocus: (e) => {
                                                            var t, n;
                                                            null == (n = eA.current) ||
                                                                n.setSelectionRange(
                                                                    0,
                                                                    null != (t = null == eN ? void 0 : eN.length)
                                                                        ? t
                                                                        : 0,
                                                                ),
                                                                null == eo || eo(e);
                                                        },
                                                        onChange: (e) => {
                                                            ej(e), null == X || X(e), ew(e), eH(!0), eP(!0);
                                                        },
                                                        onKeyDown: u,
                                                        activeDescendant: eI,
                                                        placeholder: R,
                                                        inputId: i,
                                                        listboxId: eV,
                                                        navigatorId: eB,
                                                        selectValue: function (e) {
                                                            let t =
                                                                !(arguments.length > 1) ||
                                                                void 0 === arguments[1] ||
                                                                arguments[1];
                                                            eJ(e, t);
                                                        },
                                                        inputClassNames: ei,
                                                        hidePills: ec,
                                                    }),
                                                }),
                                            }),
                                        }),
                                        (0, r.jsx)("div", {
                                            className: o()(I.Pt, I._q, {
                                                [I.m3]: O,
                                            }),
                                            ref: em,
                                            children: G
                                                ? (0, r.jsx)(y.nvX, {
                                                      dotRadius: 3.5,
                                                      themed: !0,
                                                  })
                                                : (0, r.jsxs)(r.Fragment, {
                                                      children: [
                                                          E && ((null != eN && "" !== eN) || ek.length > 0)
                                                              ? (0, r.jsx)(_.DUT, {
                                                                    "aria-label": A.intl.string(A.t.VkKicb),
                                                                    "aria-controls": i,
                                                                    onClick: e$,
                                                                    children: (0, r.jsx)(y.PGe, {
                                                                        size: "xs",
                                                                        color: "currentColor",
                                                                        className: I.IU,
                                                                    }),
                                                                })
                                                              : null,
                                                          (0, r.jsx)(_.DUT, {
                                                              "aria-label": eT
                                                                  ? A.intl.string(A.t.cpT0Cq)
                                                                  : A.intl.string(A.t["3xjX0U"]),
                                                              "aria-controls": i,
                                                              onClick: () => {
                                                                  eH(!eT);
                                                              },
                                                              children: (0, r.jsx)(s, {
                                                                  className: I.vP,
                                                                  size: "sm",
                                                              }),
                                                          }),
                                                      ],
                                                  }),
                                        }),
                                    ],
                                });
                            },
                        }),
                    );
                },
            }),
            ek.length > 0 &&
                null != eu &&
                (0, r.jsx)("div", {
                    children: (0, r.jsx)(V, {
                        listRef: e3,
                        selectedOptions: ek,
                        selectValue: function (e) {
                            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                            eJ(e, t);
                        },
                        focusNextItem: e4,
                        focusPreviousItem: e6,
                        renderCustomPill: eu,
                        customPillContainerClassName: ed,
                    }),
                }),
        ],
    });
});

function k(e) {
    let t = (0, v.w)("SearchableSelect"),
        {
            id: n,
            options: a,
            required: o,
            disabled: s,
            isDisabled: l,
            value: c,
            multi: u,
            clearable: d,
            closeOnSelect: f = !0,
            filter: p,
            matchSorterOptions: h,
            placeholder: m,
            "aria-required": g,
            onChange: E,
            onSearchChange: b,
            onKeyDown: O,
            onFocus: A,
            onBlur: I,
            debounceTime: S,
            hidePills: C,
            renderOptionLabel: w,
            renderOptionPrefix: R,
            renderOptionSuffix: P,
        } = e,
        { fieldProps: D } = (0, _.ndh)(e),
        L = null != S || "function" == typeof a || null != w,
        x = i.useCallback(
            (e) => {
                let { key: t, value: n, label: r, disabled: i } = e;
                return {
                    id: null != t ? t : n,
                    value: n,
                    label: r,
                    disabled: i,
                    leading:
                        null == R
                            ? void 0
                            : R(e, {
                                  inPill: !1,
                                  inDropdown: !0,
                              }),
                    trailing:
                        null == P
                            ? void 0
                            : P(e, {
                                  inPill: !1,
                                  inDropdown: !0,
                              }),
                };
            },
            [R, P],
        );
    if (t && !L) {
        let e = null != p && "function" == typeof p ? p : void 0;
        return (0, r.jsx)(
            y.ZiE,
            N(
                T(
                    {
                        id: n,
                        selectionMode: u ? "multiple" : "single",
                        required: o || g,
                        disabled: s || l,
                        hideTags: C,
                    },
                    D,
                ),
                {
                    value: c,
                    options: a,
                    formatOption: x,
                    onSelectionChange: E,
                    customMatchSorter: e,
                    matchSorterOptions: h,
                    placeholder: m,
                    onQueryChange: (e) => (null == b ? void 0 : b(e.target.value)),
                    onKeyDown: O,
                    onFocus: A,
                    onBlur: I,
                    clearable: d,
                    closeOnSelect: f,
                },
            ),
        );
    }
    return (0, r.jsx)(j, T({}, e));
}

function U(e) {
    let {
            onSelect: t,
            closePopout: n,
            selectedValues: a,
            options: s,
            width: l,
            maxVisibleItems: c,
            activeDescendant: d,
            listRef: f,
            listId: p,
            renderOptionLabel: h,
            updatePosition: m,
            loading: g = !1,
            multi: y,
            popoutPosition: b,
            closeOnSelect: v,
            renderOptionPrefix: S = () => null,
            renderOptionSuffix: C = () => null,
        } = e,
        R = i.useRef(null),
        D = i.useCallback(
            (e) => {
                t(e), v && n();
            },
            [v, n, t],
        );
    return ((0, O.A)(m), g)
        ? (0, r.jsx)("div", {
              "aria-busy": !0,
              className: o()(I.SW, I.Lq, {
                  [I.O3]: "top" === b,
              }),
              style: {
                  width: l,
              },
              children: (0, r.jsx)(_.y$y, {
                  itemClassName: I.S,
                  type: _.tVU.PULSING_ELLIPSIS,
              }),
          })
        : 0 === s.length
          ? (0, r.jsx)("div", {
                className: o()(I.SW, I.wV, {
                    [I.O3]: "top" === b,
                }),
                style: {
                    width: l,
                },
                children: (0, r.jsx)(E.E, {
                    color: "text-muted",
                    variant: "text-md/normal",
                    children: A.intl.string(A.t["Xe+fJM"]),
                }),
            })
          : (0, r.jsx)(u.PR, {
                children: (e) => {
                    let { ref: t, onKeyDown: n } = e,
                        i = w(e, ["ref", "onKeyDown"]);
                    return (0, r.jsx)(
                        _.Eie,
                        N(
                            T(
                                {
                                    className: o()(I.SW, I.HJ, {
                                        [I.a_]: s.length <= c,
                                        [I.O3]: "top" === b,
                                    }),
                                    style: {
                                        width: l,
                                        maxHeight: c * P,
                                    },
                                    ref: (e) => {
                                        var n;
                                        f.current = e;
                                        let r = null != (n = null == e ? void 0 : e.getScrollerNode()) ? n : null;
                                        (R.current = r), (t.current = r);
                                    },
                                },
                                i,
                            ),
                            {
                                role: void 0,
                                innerRole: "listbox",
                                innerAriaMultiselectable: y,
                                innerId: p,
                                rowHeight: P,
                                sections: [s.length],
                                sectionHeight: 0,
                                renderRow: (e) => {
                                    var t;
                                    let { row: n } = e,
                                        i = s[n],
                                        o = h(i);
                                    return (0, r.jsx)(
                                        B,
                                        {
                                            multi: y,
                                            "aria-posinset": n,
                                            "aria-setsize": s.length,
                                            isSelected: a.includes(i.value),
                                            isFocused: d === String(i.value),
                                            value: i.value,
                                            label: o,
                                            onSelect: D,
                                            prefix: S(i, {
                                                inPill: !1,
                                                inDropdown: !0,
                                            }),
                                            suffix: C(i, {
                                                inPill: !1,
                                                inDropdown: !0,
                                            }),
                                        },
                                        null != (t = i.key) ? t : n,
                                    );
                                },
                                renderSection: () => null,
                            },
                        ),
                    );
                },
            });
}

function G(e, t) {
    if (null == e || null == t) return !1;
    let n = Node.DOCUMENT_POSITION_CONTAINED_BY | Node.DOCUMENT_POSITION_FOLLOWING;
    return (e.compareDocumentPosition(t) & n) === n;
}

function F(e, t, n) {
    let r = i.useMemo(
            () =>
                (0, l.C)({
                    getFocusableElements() {
                        let t = e.current;
                        return null != t ? Array.from(t.querySelectorAll("[data-option-pill-value]")) : [];
                    },
                    getActiveElement() {
                        var t, n;
                        return null == e || null == (n = e.current) || null == (t = n.ownerDocument)
                            ? void 0
                            : t.activeElement;
                    },
                }),
            [n, e],
        ),
        a = i.useCallback(
            (t) => {
                var n, r;
                return t === (null == (r = e.current) || null == (n = r.ownerDocument) ? void 0 : n.activeElement);
            },
            [e],
        ),
        o = i.useCallback(
            async function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    n = await r.getPreviousFocusableElement({
                        wrap: !e,
                    });
                if (e && ((null == n || a(n)) && (n = await r.getNextFocusableElement()), null == n || a(n))) {
                    var i;
                    return null == (i = t.current) ? void 0 : i.focus();
                }
                return null == n ? void 0 : n.focus();
            },
            [r, a, t],
        );
    return {
        focusPreviousItem: o,
        focusNextItem: i.useCallback(
            async function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    n = await r.getNextFocusableElement({
                        wrap: !e,
                    });
                if (e && ((null == n || a(n)) && (n = await r.getPreviousFocusableElement()), null == n || a(n))) {
                    var i;
                    return null == (i = t.current) ? void 0 : i.focus();
                }
                return null == n ? void 0 : n.focus();
            },
            [r, a, t],
        ),
        focusLastItem: i.useCallback(async () => {
            let e = await r.getLastFocusableElement();
            return null == e ? void 0 : e.focus();
        }, [r]),
    };
}

function V(e) {
    let {
            selectedOptions: t,
            selectValue: n,
            listRef: a,
            focusPreviousItem: o,
            focusNextItem: s,
            renderOptionSuffix: l,
            renderOptionPrefix: c,
            renderCustomPill: u,
            customPillContainerClassName: d,
        } = e,
        f = null != u,
        p = i.useCallback(
            (e) => {
                if (null != a.current)
                    switch (e.key) {
                        case "ArrowRight":
                            return e.stopPropagation(), e.preventDefault(), s();
                        case "ArrowLeft":
                            return e.stopPropagation(), e.preventDefault(), o();
                    }
            },
            [a, o, s],
        ),
        [_, h] = i.useState(null);
    return (0, r.jsx)("ul", {
        className: f ? d : I.I6,
        ref: a,
        onKeyDown: p,
        onFocus: (e) => {
            let t = e.target;
            null != a.current && G(a.current, t) && h(t.getAttribute("data-option-pill-value"));
        },
        onBlur: (e) => {
            let t = e.relatedTarget;
            G(a.current, t) || h(null);
        },
        children: t.map((e, t) => {
            var i;
            return (0, r.jsx)(
                "li",
                {
                    className: f ? void 0 : I.kf,
                    children: (0, r.jsx)(z, {
                        isCustomPill: f,
                        option: e,
                        focused: null == _ ? 0 === t : _ === String(e.value),
                        onClick: () => n(e.value),
                        renderOptionPrefix: c,
                        renderOptionSuffix: l,
                        onKeyDown: async (t) => {
                            "Backspace" === t.key
                                ? (await o(!0), n(e.value, !1))
                                : "Delete" === t.key && (await s(!0), n(e.value, !1));
                        },
                        children: f
                            ? u(e)
                            : (0, r.jsx)("div", {
                                  className: I.Qs,
                                  children: e.label,
                              }),
                    }),
                },
                null != (i = e.key) ? i : "".concat(e.label, "-").concat(e.value),
            );
        }),
    });
}

function B(e) {
    let { value: t, label: n, prefix: i, suffix: a, onSelect: s, isSelected: l, isFocused: c, multi: d } = e,
        f = w(e, ["value", "label", "prefix", "suffix", "onSelect", "isSelected", "isFocused", "multi"]),
        p = (0, u.rm)(String(t));
    return (0, r.jsxs)(
        _.DUT,
        N(
            T(
                {
                    tag: "li",
                    style: {
                        height: P,
                    },
                    focusProps: {
                        enabled: !1,
                    },
                    className: o()(I.uK, {
                        [I.in]: c,
                        [I.m3]: d,
                    }),
                    onClick: () => s(t),
                },
                p,
                f,
            ),
            {
                "aria-selected": l,
                id: p["data-list-item-id"],
                "data-searchable-select-option": !0,
                role: "option",
                children: [
                    (0, r.jsxs)("div", {
                        className: I.Qs,
                        children: [n, "\xa0"],
                    }),
                    null != i &&
                        (0, r.jsx)("div", {
                            className: I.Pl,
                            children: i,
                        }),
                    " ",
                    null != a &&
                        (0, r.jsx)("div", {
                            className: I.ei,
                            children: a,
                        }),
                    " ",
                    (0, r.jsx)(H, {
                        isSelected: l,
                        multi: d,
                    }),
                ],
            },
        ),
    );
}

function H(e) {
    let { isSelected: t, multi: n } = e,
        i = 24;
    return n
        ? (0, r.jsx)(_.P7L, {
              checked: t,
              size: 20,
          })
        : t
          ? (0, r.jsx)(y.yr3, {
                size: "custom",
                color: "currentColor",
                "aria-hidden": !0,
                secondaryColor: "white",
                className: I.Dt,
                width: i,
                height: i,
            })
          : null;
}

function Y(e) {
    let { selectedOptions: t, renderOptionPrefix: n, renderOptionSuffix: i } = e,
        a = w(e, ["selectedOptions", "renderOptionPrefix", "renderOptionSuffix"]),
        o = t[0],
        s =
            null == n
                ? void 0
                : n(null != o ? o : null, {
                      inPill: !1,
                      inDropdown: !1,
                  }),
        l =
            null == i
                ? void 0
                : i(null != o ? o : null, {
                      inPill: !1,
                      inDropdown: !1,
                  });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != s
                ? (0, r.jsx)("div", {
                      "aria-hidden": !0,
                      children: s,
                  })
                : null,
            (0, r.jsx)(
                K,
                T(
                    {
                        selectedOptions: t,
                    },
                    a,
                ),
            ),
            null != l
                ? (0, r.jsx)("div", {
                      "aria-hidden": !0,
                      children: l,
                  })
                : null,
        ],
    });
}

function W(e) {
    let {
            query: t,
            placeholder: n,
            selectedOptions: a,
            selectValue: s,
            onKeyDown: l,
            isEditing: c,
            isDisabled: u,
            isProcessing: d,
            inputRef: f,
            renderOptionPrefix: p,
            renderOptionSuffix: _,
            inputClassNames: h,
            hidePills: m,
        } = e,
        g = w(e, [
            "query",
            "placeholder",
            "selectedOptions",
            "selectValue",
            "onKeyDown",
            "isEditing",
            "isDisabled",
            "isProcessing",
            "inputRef",
            "renderOptionPrefix",
            "renderOptionSuffix",
            "inputClassNames",
            "hidePills",
        ]),
        E = Math.max(n.length, (null != t ? t : "").length),
        y = i.useRef(null),
        { focusPreviousItem: b, focusNextItem: O, focusLastItem: v } = F(y, f, a);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            a.length > 0 &&
                !m &&
                (0, r.jsx)(V, {
                    listRef: y,
                    selectedOptions: a,
                    renderOptionPrefix: p,
                    renderOptionSuffix: _,
                    selectValue: s,
                    focusNextItem: O,
                    focusPreviousItem: b,
                }),
            (0, r.jsx)(
                K,
                T(
                    {
                        style: {
                            width: "".concat(E, "ch"),
                        },
                        className: o()(I.m3, h),
                        query: t,
                        placeholder: n,
                        selectValue: s,
                        selectedOptions: a,
                        hidePills: m,
                        isEditing: c,
                        isDisabled: u,
                        isProcessing: d,
                        inputRef: f,
                        onKeyDown: (e) => {
                            ["ArrowLeft", "Backspace"].includes(e.key) && ("" === t || null == t) && a.length > 0
                                ? v()
                                : l(e);
                        },
                    },
                    g,
                ),
            ),
        ],
    });
}

function K(e) {
    let {
        query: t,
        inputId: n,
        "aria-describedby": i,
        "aria-invalid": a,
        "aria-required": s,
        "aria-labelledby": l,
        "aria-expanded": c,
        isDisabled: u,
        listboxId: f,
        activeDescendant: p,
        navigatorId: _,
        onChange: h,
        onFocus: m,
        setInputRef: g,
        isEditing: E,
        onKeyDown: y,
        placeholder: b,
        isProcessing: O,
        loading: v,
        style: A,
        className: S,
        selectedOptions: T,
        hidePills: C,
    } = e;
    return (0, r.jsx)("input", {
        role: "combobox",
        id: n,
        "aria-haspopup": "listbox",
        "aria-invalid": a,
        "aria-labelledby": l,
        "aria-autocomplete": "list",
        "aria-expanded": c,
        "aria-describedby": i,
        "aria-disabled": u,
        "aria-controls": f,
        "aria-required": s,
        "aria-busy": v || O,
        style: null != A ? A : {},
        "aria-activedescendant": null != p ? (0, d.t$)(_, p) : "",
        disabled: u,
        value: null != t ? t : "",
        onChange: (e) => {
            h(e.target.value);
        },
        onFocus: m,
        className: o()(I.Rt, S, {
            [I.Dy]: E,
            [I.r9]: u,
        }),
        onKeyDown: y,
        placeholder: "" !== (null != t ? t : "").trim() || (T.length > 0 && !C) ? void 0 : b,
        ref: g,
    });
}

function z(e) {
    let {
            option: t,
            focused: n,
            onClick: i,
            onKeyDown: a,
            renderOptionPrefix: o,
            renderOptionSuffix: s,
            children: l,
            isCustomPill: c,
        } = e,
        u =
            !c &&
            (null == o
                ? void 0
                : o(t, {
                      inPill: !0,
                      inDropdown: !1,
                  })),
        d =
            !c &&
            (null == s
                ? void 0
                : s(t, {
                      inPill: !0,
                      inDropdown: !1,
                  }));
    return (0, r.jsx)(_.vN3, {
        offset: 3,
        children: (0, r.jsxs)(h.$n, {
            "data-migration-pending": !0,
            look: h.$n.Looks.BLANK,
            tabIndex: n ? 0 : -1,
            "data-option-pill-value": t.value,
            className: I.Nm,
            innerClassName: c ? null : I.xP,
            onClick: () => (null == i ? void 0 : i(t.value)),
            onKeyDown: a,
            children: [
                l,
                null != u &&
                    (0, r.jsx)("div", {
                        className: I.Pl,
                        children: u,
                    }),
                " ",
                null != d &&
                    (0, r.jsx)("div", {
                        className: I.ei,
                        children: d,
                    }),
                (0, r.jsx)(_.AC4, {
                    children: A.intl.string(A.t.N86XcP),
                }),
                !c &&
                    (0, r.jsx)(y.PGe, {
                        size: "custom",
                        color: "currentColor",
                        className: I.gU,
                        width: 14,
                        height: 14,
                    }),
            ],
        }),
    });
}
