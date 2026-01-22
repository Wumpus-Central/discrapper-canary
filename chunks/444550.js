n.d(t, { p: () => U }), n(896048), n(733351);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(896170),
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
    b = n(783878),
    y = n(397927),
    O = n(765671),
    A = n(194498),
    v = n(138101),
    S = n(985018),
    I = n(511630);
function T(e, t, n) {
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
function C(e) {
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
                T(e, t, n[t]);
            });
    }
    return e;
}
function N(e, t) {
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
function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : N(Object(t)).forEach(function (n) {
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
    if (((a = P(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function P(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let D = 44,
    x = { keys: ["label"] };
function L(e) {
    return e.label;
}
function j(e) {
    let { active: t, loadableOptions: n, debounceTime: r } = e,
        a = "function" == typeof n,
        [s, o] = i.useState({
            options: a ? [] : n,
            query: "",
            debouncedQuery: "",
            loading: !1,
        }),
        { options: l, loading: c, query: u, debouncedQuery: d } = s,
        f = i.useCallback(
            (e) =>
                o((t) =>
                    R(C({}, t), {
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
                    ? (o((e) =>
                          R(C({}, e), {
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
                            o((e) =>
                                R(C({}, e), {
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
                o((t) => R(C({}, t), { query: e }));
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
let k = i.forwardRef(function (e, t) {
    let [n, ...a] = [e, t],
        {
            options: l,
            value: d,
            onChange: h,
            clearable: E = !1,
            multi: b = !1,
            closeOnSelect: A = !0,
            onOpen: v,
            onClose: T,
            placeholder: N = S.intl.string(S.t.XqMe3N),
            wrapperClassName: P,
            className: D,
            isDisabled: k = !1,
            isProcessing: U = !1,
            maxVisibleItems: V = 7,
            autoFocus: H = !1,
            popoutPosition: Y = "bottom",
            popoutWidth: z,
            filter: q = !0,
            debounceTime: X,
            renderOptionLabel: Z = L,
            onSearchChange: Q,
            renderOptionPrefix: $ = () => null,
            renderOptionSuffix: J = () => null,
            "aria-describedby": ee,
            "aria-invalid": et,
            "aria-labelledby": en,
            "aria-required": er,
            inputClassNames: ei,
            onBlur: ea,
            onFocus: es,
            matchSorterOptions: eo,
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
        { ref: em, width: eg } = (0, O.Ay)(),
        { titleId: eE, errorId: eb, error: ey } = (0, m.xW)(),
        { ref: eO, width: eA } = (0, O.Ay)(),
        ev = i.useRef(null),
        [eS, eI] = i.useState(null),
        [eT, eC] = i.useState(!1),
        [eN, eR] = i.useState(null),
        [ew, eP] = i.useState(!1),
        eD = i.useRef(null),
        ex = i.useRef(null),
        {
            options: eL,
            loading: ej,
            onQueryChange: eM,
        } = j({
            active: eT,
            loadableOptions: l,
            debounceTime: X,
        }),
        ek = i.useMemo(() => M(eL, d), [eL, d]),
        eU = i.useMemo(() => ek.map((e) => e.value), [ek]),
        eG = ek[ek.length - 1],
        eV = (0, f.A)(eG),
        eF = i.useId(),
        eB = i.useId(),
        eH = i.useCallback(
            (e) => {
                eT === e || k || (eC(e), e ? null == v || v() : null == T || T());
            },
            [k, T, v, eT],
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
            eI(t), null != r && null != n && r.scrollIntoViewNode({ node: n });
        }, []),
        ez = i.useCallback(
            () =>
                new Promise((e) => {
                    let t = eD.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        eq = i.useCallback(
            () =>
                new Promise((e) => {
                    let t = eD.current;
                    if (null == t) return e();
                    t.scrollToBottom({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        eX = (0, c.Ay)({
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
        eZ = (0, f.A)(eX),
        eQ = (0, f.A)(eL);
    i.useEffect(() => {
        let e = eQ.current,
            t = eV.current;
        eT &&
            null != t &&
            !ej &&
            requestAnimationFrame(() => {
                let n = eD.current,
                    r = e.indexOf(t);
                null == n ||
                    n.scrollToIndex({
                        section: 0,
                        row: r,
                    });
            });
    }, [eT, ej, eQ, eV]),
        i.useEffect(() => {
            if (eT) {
                var e;
                null == (e = ev.current) || e.scrollIntoView();
            }
        }, [eT]),
        i.useEffect(() => {
            let e = eZ.current;
            if (eT && !ej) {
                var t;
                let n = ev.current;
                if (null != n) {
                    n.focus();
                    let { value: e } = n;
                    (n.value = " "), (n.value = e);
                }
                eI(null != (t = e.focusedItemId()) ? t : null);
            } else {
                let t = eV.current,
                    n = null != t ? String(t.value) : null;
                e.setFocus(n), eI(null);
            }
        }, [eT, ej, eZ, eV]),
        i.useLayoutEffect(() => {
            eT || (b ? eR("") : null != eG && eR(eG.label));
        }, [b, eG, eT]),
        i.useLayoutEffect(() => {
            b && eR("");
        }, [b, ek.length]);
    let e$ = i.useCallback(
        function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            if (null == e) return void h(b ? [] : void 0);
            let n = "function" == typeof l,
                r = n ? eL.find((t) => t.value === e) : e;
            if (b) {
                let a = null != d ? d : [];
                if (
                    (a.some((t) => (n ? t.value : t) === e)
                        ? h(a.filter((t) => (n ? t.value : t) !== e))
                        : h([...a, r]),
                    t)
                ) {
                    var i;
                    null == (i = ev.current) || i.focus();
                }
            } else h(r);
            eI(null), (!b || A) && eH(!1), eP(!1), el && eR("");
        },
        [l, eL, b, A, el, h, d, eH],
    );
    i.useLayoutEffect(() => {
        if (H) {
            var e;
            null == (e = ev.current) || e.focus();
        }
    }, [H]);
    let eJ = i.useCallback(() => {
            eR(""), e$(null), eH(!0);
        }, [e$, eH]),
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
        e1 = eL;
    ew && null != eN && !1 !== q && (e1 = "function" == typeof q ? q(eL, eN) : (0, o.Ht)(eL, eN, null != eo ? eo : x)),
        i.useEffect(() => {
            let e = eD.current;
            null == e || e.scrollToTop();
        }, [eN]),
        i.useEffect(() => {
            !ej && ew && null !== eN && requestAnimationFrame(() => eX.focusFirstVisibleItem());
        }, [ej, ew, eN, eX]);
    let e2 = b ? K : W,
        e3 = i.useRef(null),
        { focusPreviousItem: e6, focusNextItem: e4 } = F(e3, ev, ek);
    return (0, r.jsxs)(u.hD, {
        navigator: eX,
        children: [
            (0, r.jsx)(g.Y, {
                targetElementRef: ex,
                spacing: 0,
                animation: g.Y.Animation.NONE,
                shouldShow: eT,
                onRequestClose: () => eH(!1),
                layerContext: eh.popoutLayerContext,
                renderPopout: (e) => {
                    let { closePopout: t, position: n, updatePosition: i } = e;
                    return (0, r.jsx)(G, {
                        loading: ej,
                        multi: !!b,
                        listRef: eD,
                        listId: eF,
                        maxVisibleItems: V,
                        width: null != z && "auto" !== z ? z : eA,
                        selectedValues: eU,
                        closePopout: t,
                        onSelect: e$,
                        closeOnSelect: A,
                        options: e1,
                        activeDescendant: eS,
                        renderOptionLabel: Z,
                        updatePosition: i,
                        popoutPosition: n,
                        renderOptionPrefix: $,
                        renderOptionSuffix: J,
                    });
                },
                position: Y,
                children: (e, t) => {
                    let { "aria-expanded": n, "aria-controls": i } = e,
                        { isShown: a } = t,
                        o = a ? y.tN5 : y.abt,
                        { ref: l, onKeyDown: c } = eX.containerProps,
                        u = (e) => {
                            var t;
                            null == (t = eh.onKeyDown) || t.call(eh, e), c(e), e0(e);
                        };
                    return (0, r.jsx)(
                        _.D0$,
                        R(C({}, e_), {
                            children: (e) => {
                                var t;
                                let i = null == e ? void 0 : e.controlId;
                                return (0, r.jsxs)(_.FON, {
                                    as: "div",
                                    disabled: k,
                                    ref: ex,
                                    className: s()(P, I.iE),
                                    containerClassName: D,
                                    style: { "--icons-width": "".concat(eg, "px") },
                                    onBlur: (e) => {
                                        var t, n, r;
                                        (null == (t = ex.current) ? void 0 : t.contains(e.relatedTarget)) ||
                                            (null == (r = eD.current) || null == (n = r.getScrollerNode())
                                                ? void 0
                                                : n.contains(e.relatedTarget)) ||
                                            (b || null == eG || eR(eG.label), eP(!1), eH(!1), null == ea || ea(e));
                                    },
                                    children: [
                                        (0, r.jsx)(_.vN3, {
                                            ringTarget: eO,
                                            focusTarget: ev,
                                            offset: 4,
                                            children: (0, r.jsx)("div", {
                                                onClick: k
                                                    ? void 0
                                                    : (e) => {
                                                          e.stopPropagation(), e.preventDefault(), eR(""), eH(!0);
                                                      },
                                                onMouseDown: (e) => {
                                                    e.preventDefault();
                                                },
                                                ref: (e) => {
                                                    (eO.current = e), (eW.current = e);
                                                },
                                                className: s()(I.Lt, I.Vk, { [I.m3]: b }),
                                                children: (0, r.jsx)("div", {
                                                    className: s()(I.Uq, { [I.m3]: b }),
                                                    children: (0, r.jsx)(e2, {
                                                        query: eN,
                                                        selectedOptions: ek,
                                                        loading: ej,
                                                        renderOptionPrefix: $,
                                                        renderOptionSuffix: J,
                                                        isDisabled: k,
                                                        isEditing: ew,
                                                        isProcessing: U,
                                                        inputRef: ev,
                                                        "aria-describedby":
                                                            null != ee ? ee : null == e ? void 0 : e.describedById,
                                                        "aria-errormessage":
                                                            null != (t = null == e ? void 0 : e.errorMessageId)
                                                                ? t
                                                                : eb,
                                                        "aria-invalid":
                                                            null != et
                                                                ? et
                                                                : (null == e ? void 0 : e.errorMessageId) != null ||
                                                                  null != ey,
                                                        "aria-required": null != er ? er : e_.required,
                                                        "aria-labelledby": null != en ? en : eE,
                                                        "aria-expanded": n,
                                                        setInputRef: (e) => {
                                                            (l.current = e), (ev.current = e);
                                                        },
                                                        onFocus: (e) => {
                                                            var t, n;
                                                            null == (n = ev.current) ||
                                                                n.setSelectionRange(
                                                                    0,
                                                                    null != (t = null == eN ? void 0 : eN.length)
                                                                        ? t
                                                                        : 0,
                                                                ),
                                                                null == es || es(e);
                                                        },
                                                        onChange: (e) => {
                                                            eM(e), null == Q || Q(e), eR(e), eH(!0), eP(!0);
                                                        },
                                                        onKeyDown: u,
                                                        activeDescendant: eS,
                                                        placeholder: N,
                                                        inputId: i,
                                                        listboxId: eF,
                                                        navigatorId: eB,
                                                        selectValue: function (e) {
                                                            let t =
                                                                !(arguments.length > 1) ||
                                                                void 0 === arguments[1] ||
                                                                arguments[1];
                                                            e$(e, t);
                                                        },
                                                        inputClassNames: ei,
                                                        hidePills: ec,
                                                    }),
                                                }),
                                            }),
                                        }),
                                        (0, r.jsx)("div", {
                                            className: s()(I.Pt, I._q, { [I.m3]: b }),
                                            ref: em,
                                            children: U
                                                ? (0, r.jsx)(y.nvX, {
                                                      dotRadius: 3.5,
                                                      themed: !0,
                                                  })
                                                : (0, r.jsxs)(r.Fragment, {
                                                      children: [
                                                          E && ((null != eN && "" !== eN) || ek.length > 0)
                                                              ? (0, r.jsx)(_.DUT, {
                                                                    "aria-label": S.intl.string(S.t.VkKicb),
                                                                    "aria-controls": i,
                                                                    onClick: eJ,
                                                                    children: (0, r.jsx)(y.PGe, {
                                                                        size: "xs",
                                                                        color: "currentColor",
                                                                        className: I.IU,
                                                                    }),
                                                                })
                                                              : null,
                                                          (0, r.jsx)(_.DUT, {
                                                              "aria-label": eT
                                                                  ? S.intl.string(S.t.cpT0Cq)
                                                                  : S.intl.string(S.t["3xjX0U"]),
                                                              "aria-controls": i,
                                                              onClick: () => {
                                                                  eH(!eT);
                                                              },
                                                              children: (0, r.jsx)(o, {
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
                    children: (0, r.jsx)(B, {
                        listRef: e3,
                        selectedOptions: ek,
                        selectValue: function (e) {
                            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                            e$(e, t);
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
function U(e) {
    let t = (0, v.w)("SearchableSelect"),
        {
            id: n,
            options: a,
            required: s,
            disabled: o,
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
            onSearchChange: y,
            onKeyDown: O,
            onFocus: A,
            onBlur: S,
            debounceTime: I,
            hidePills: T,
            renderOptionLabel: N,
            renderOptionPrefix: w,
            renderOptionSuffix: P,
        } = e,
        { fieldProps: D } = (0, _.ndh)(e),
        x = null != I || "function" == typeof a || null != N,
        L = i.useCallback(
            (e) => {
                let { key: t, value: n, label: r, disabled: i } = e;
                return {
                    id: null != t ? t : n,
                    value: n,
                    label: r,
                    disabled: i,
                    leading:
                        null == w
                            ? void 0
                            : w(e, {
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
            [w, P],
        );
    if (t && !x) {
        let e = null != p && "function" == typeof p ? p : void 0;
        return (0, r.jsx)(
            b.Z,
            R(
                C(
                    {
                        id: n,
                        selectionMode: u ? "multiple" : "single",
                        required: s || g,
                        disabled: o || l,
                        hideTags: T,
                    },
                    D,
                ),
                {
                    value: c,
                    options: a,
                    formatOption: L,
                    onSelectionChange: E,
                    customMatchSorter: e,
                    matchSorterOptions: h,
                    placeholder: m,
                    onQueryChange: (e) => (null == y ? void 0 : y(e.target.value)),
                    onKeyDown: O,
                    onFocus: A,
                    onBlur: S,
                    clearable: d,
                    closeOnSelect: f,
                },
            ),
        );
    }
    return (0, r.jsx)(k, C({}, e));
}
function G(e) {
    let {
            onSelect: t,
            closePopout: n,
            selectedValues: a,
            options: o,
            width: l,
            maxVisibleItems: c,
            activeDescendant: d,
            listRef: f,
            listId: p,
            renderOptionLabel: h,
            updatePosition: m,
            loading: g = !1,
            multi: b,
            popoutPosition: y,
            closeOnSelect: O,
            renderOptionPrefix: v = () => null,
            renderOptionSuffix: T = () => null,
        } = e,
        N = i.useRef(null),
        P = i.useCallback(
            (e) => {
                t(e), O && n();
            },
            [O, n, t],
        );
    return ((0, A.A)(m), g)
        ? (0, r.jsx)("div", {
              "aria-busy": !0,
              className: s()(I.SW, I.Lq, { [I.O3]: "top" === y }),
              style: { width: l },
              children: (0, r.jsx)(_.y$y, {
                  itemClassName: I.S,
                  type: _.tVU.PULSING_ELLIPSIS,
              }),
          })
        : 0 === o.length
          ? (0, r.jsx)("div", {
                className: s()(I.SW, I.wV, { [I.O3]: "top" === y }),
                style: { width: l },
                children: (0, r.jsx)(E.E, {
                    color: "text-muted",
                    variant: "text-md/normal",
                    children: S.intl.string(S.t["Xe+fJM"]),
                }),
            })
          : (0, r.jsx)(u.PR, {
                children: (e) => {
                    let { ref: t, onKeyDown: n } = e,
                        i = w(e, ["ref", "onKeyDown"]);
                    return (0, r.jsx)(
                        _.Eie,
                        R(
                            C(
                                {
                                    className: s()(I.SW, I.HJ, {
                                        [I.a_]: o.length <= c,
                                        [I.O3]: "top" === y,
                                    }),
                                    style: {
                                        width: l,
                                        maxHeight: c * D,
                                    },
                                    ref: (e) => {
                                        var n;
                                        f.current = e;
                                        let r = null != (n = null == e ? void 0 : e.getScrollerNode()) ? n : null;
                                        (N.current = r), (t.current = r);
                                    },
                                },
                                i,
                            ),
                            {
                                role: void 0,
                                innerRole: "listbox",
                                innerAriaMultiselectable: b,
                                innerId: p,
                                rowHeight: D,
                                sections: [o.length],
                                sectionHeight: 0,
                                renderRow: (e) => {
                                    var t;
                                    let { row: n } = e,
                                        i = o[n],
                                        s = h(i);
                                    return (0, r.jsx)(
                                        H,
                                        {
                                            multi: b,
                                            "aria-posinset": n,
                                            "aria-setsize": o.length,
                                            isSelected: a.includes(i.value),
                                            isFocused: d === String(i.value),
                                            value: i.value,
                                            label: s,
                                            onSelect: P,
                                            prefix: v(i, {
                                                inPill: !1,
                                                inDropdown: !0,
                                            }),
                                            suffix: T(i, {
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
function V(e, t) {
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
        s = i.useCallback(
            async function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    n = await r.getPreviousFocusableElement({ wrap: !e });
                if (e && ((null == n || a(n)) && (n = await r.getNextFocusableElement()), null == n || a(n))) {
                    var i;
                    return null == (i = t.current) ? void 0 : i.focus();
                }
                return null == n ? void 0 : n.focus();
            },
            [r, a, t],
        );
    return {
        focusPreviousItem: s,
        focusNextItem: i.useCallback(
            async function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    n = await r.getNextFocusableElement({ wrap: !e });
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
function B(e) {
    let {
            selectedOptions: t,
            selectValue: n,
            listRef: a,
            focusPreviousItem: s,
            focusNextItem: o,
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
                            return e.stopPropagation(), e.preventDefault(), o();
                        case "ArrowLeft":
                            return e.stopPropagation(), e.preventDefault(), s();
                    }
            },
            [a, s, o],
        ),
        [_, h] = i.useState(null);
    return (0, r.jsx)("ul", {
        className: f ? d : I.I6,
        ref: a,
        onKeyDown: p,
        onFocus: (e) => {
            let t = e.target;
            null != a.current && V(a.current, t) && h(t.getAttribute("data-option-pill-value"));
        },
        onBlur: (e) => {
            let t = e.relatedTarget;
            V(a.current, t) || h(null);
        },
        children: t.map((e, t) => {
            var i;
            return (0, r.jsx)(
                "li",
                {
                    className: f ? void 0 : I.kf,
                    children: (0, r.jsx)(q, {
                        isCustomPill: f,
                        option: e,
                        focused: null == _ ? 0 === t : _ === String(e.value),
                        onClick: () => n(e.value),
                        renderOptionPrefix: c,
                        renderOptionSuffix: l,
                        onKeyDown: async (t) => {
                            "Backspace" === t.key
                                ? (await s(!0), n(e.value, !1))
                                : "Delete" === t.key && (await o(!0), n(e.value, !1));
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
function H(e) {
    let { value: t, label: n, prefix: i, suffix: a, onSelect: o, isSelected: l, isFocused: c, multi: d } = e,
        f = w(e, ["value", "label", "prefix", "suffix", "onSelect", "isSelected", "isFocused", "multi"]),
        p = (0, u.rm)(String(t));
    return (0, r.jsxs)(
        _.DUT,
        R(
            C(
                {
                    tag: "li",
                    style: { height: D },
                    focusProps: { enabled: !1 },
                    className: s()(I.uK, {
                        [I.in]: c,
                        [I.m3]: d,
                    }),
                    onClick: () => o(t),
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
                        children: [n, "\xA0"],
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
                    (0, r.jsx)(Y, {
                        isSelected: l,
                        multi: d,
                    }),
                ],
            },
        ),
    );
}
function Y(e) {
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
function W(e) {
    let { selectedOptions: t, renderOptionPrefix: n, renderOptionSuffix: i } = e,
        a = w(e, ["selectedOptions", "renderOptionPrefix", "renderOptionSuffix"]),
        s = t[0],
        o =
            null == n
                ? void 0
                : n(null != s ? s : null, {
                      inPill: !1,
                      inDropdown: !1,
                  }),
        l =
            null == i
                ? void 0
                : i(null != s ? s : null, {
                      inPill: !1,
                      inDropdown: !1,
                  });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != o
                ? (0, r.jsx)("div", {
                      "aria-hidden": !0,
                      children: o,
                  })
                : null,
            (0, r.jsx)(z, C({ selectedOptions: t }, a)),
            null != l
                ? (0, r.jsx)("div", {
                      "aria-hidden": !0,
                      children: l,
                  })
                : null,
        ],
    });
}
function K(e) {
    let {
            query: t,
            placeholder: n,
            selectedOptions: a,
            selectValue: o,
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
        b = i.useRef(null),
        { focusPreviousItem: y, focusNextItem: O, focusLastItem: A } = F(b, f, a);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            a.length > 0 &&
                !m &&
                (0, r.jsx)(B, {
                    listRef: b,
                    selectedOptions: a,
                    renderOptionPrefix: p,
                    renderOptionSuffix: _,
                    selectValue: o,
                    focusNextItem: O,
                    focusPreviousItem: y,
                }),
            (0, r.jsx)(
                z,
                C(
                    {
                        style: { width: "".concat(E, "ch") },
                        className: s()(I.m3, h),
                        query: t,
                        placeholder: n,
                        selectValue: o,
                        selectedOptions: a,
                        hidePills: m,
                        isEditing: c,
                        isDisabled: u,
                        isProcessing: d,
                        inputRef: f,
                        onKeyDown: (e) => {
                            ["ArrowLeft", "Backspace"].includes(e.key) && ("" === t || null == t) && a.length > 0
                                ? A()
                                : l(e);
                        },
                    },
                    g,
                ),
            ),
        ],
    });
}
function z(e) {
    let {
        query: t,
        inputId: n,
        "aria-describedby": i,
        "aria-invalid": a,
        "aria-required": o,
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
        onKeyDown: b,
        placeholder: y,
        isProcessing: O,
        loading: A,
        style: v,
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
        "aria-required": o,
        "aria-busy": A || O,
        style: null != v ? v : {},
        "aria-activedescendant": null != p ? (0, d.t$)(_, p) : "",
        disabled: u,
        value: null != t ? t : "",
        onChange: (e) => {
            h(e.target.value);
        },
        onFocus: m,
        className: s()(I.Rt, S, {
            [I.Dy]: E,
            [I.r9]: u,
        }),
        onKeyDown: b,
        placeholder: "" !== (null != t ? t : "").trim() || (T.length > 0 && !C) ? void 0 : y,
        ref: g,
    });
}
function q(e) {
    let {
            option: t,
            focused: n,
            onClick: i,
            onKeyDown: a,
            renderOptionPrefix: s,
            renderOptionSuffix: o,
            children: l,
            isCustomPill: c,
        } = e,
        u =
            !c &&
            (null == s
                ? void 0
                : s(t, {
                      inPill: !0,
                      inDropdown: !1,
                  })),
        d =
            !c &&
            (null == o
                ? void 0
                : o(t, {
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
                (0, r.jsx)(_.AC4, { children: S.intl.string(S.t.N86XcP) }),
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
