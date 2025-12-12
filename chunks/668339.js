n.d(t, { d: () => U }), n(388685), n(781311);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(423802),
    l = n(372817),
    c = n(924826),
    u = n(91192),
    d = n(260866),
    f = n(872175),
    p = n(907331),
    _ = n(793030),
    m = n(693789),
    h = n(15127),
    g = n(235874),
    E = n(993365),
    b = n(333200),
    y = n(481060),
    O = n(393238),
    v = n(98650),
    S = n(383056),
    I = n(388032),
    T = n(703098);
function C(e, t, n) {
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
function A(e) {
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
                C(e, t, n[t]);
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
function P(e, t) {
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
function R(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = w(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function w(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
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
                    P(A({}, t), {
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
                          P(A({}, e), {
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
                                P(A({}, e), {
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
                s((t) => P(A({}, t), { query: e }));
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
    var {
            options: n,
            value: a,
            onChange: l,
            clearable: d = !1,
            multi: m = !1,
            closeOnSelect: E = !0,
            onOpen: b,
            onClose: v,
            placeholder: S = I.intl.string(I.t.XqMe3N),
            wrapperClassName: C,
            className: N,
            isDisabled: w = !1,
            isProcessing: D = !1,
            maxVisibleItems: k = 7,
            autoFocus: U = !1,
            popoutPosition: Z = "bottom",
            popoutWidth: V,
            filter: H = !0,
            debounceTime: K,
            renderOptionLabel: z = L,
            onSearchChange: q,
            renderOptionPrefix: Q = () => null,
            renderOptionSuffix: X = () => null,
            "aria-describedby": J,
            "aria-invalid": $,
            "aria-labelledby": ee,
            "aria-required": et,
            inputClassNames: en,
            onBlur: er,
            onFocus: ei,
            matchSorterOptions: ea,
            clearQueryOnSelect: eo = !1,
            hidePills: es,
            renderCustomPill: el,
            customPillContainerClassName: ec,
        } = e,
        eu = R(e, [
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
        ]);
    let { fieldProps: ed, props: ef } = (0, _.XF_)(eu),
        { ref: ep, width: e_ } = (0, O.ZP)(),
        { titleId: em, errorId: eh, error: eg } = (0, h.Gc)(),
        { ref: eE, width: eb } = (0, O.ZP)(),
        ey = i.useRef(null),
        [eO, ev] = i.useState(null),
        [eS, eI] = i.useState(!1),
        [eT, eC] = i.useState(null),
        [eA, eN] = i.useState(!1),
        eP = i.useRef(null),
        eR = i.useRef(null),
        {
            options: ew,
            loading: eD,
            onQueryChange: ex,
        } = j({
            active: eS,
            loadableOptions: n,
            debounceTime: K,
        }),
        eL = i.useMemo(() => M(ew, a), [ew, a]),
        ej = i.useMemo(() => eL.map((e) => e.value), [eL]),
        eM = eL[eL.length - 1],
        ek = (0, f.Z)(eM),
        eU = i.useId(),
        eG = i.useId(),
        eZ = i.useCallback(
            (e) => {
                eS === e || w || (eI(e), e ? null == b || b() : null == v || v());
            },
            [w, v, b, eS],
        ),
        eF = i.useCallback(
            (e) => {
                eS && !e && eZ(!1);
            },
            [eZ, eS],
        ),
        eB = (0, p.O)(eF);
    i.useImperativeHandle(t, () => ({
        close() {
            eZ(!1);
        },
    }));
    let eV = i.useCallback((e, t) => {
            let n = document.querySelector(e),
                r = eP.current;
            ev(t), null != r && null != n && r.scrollIntoViewNode({ node: n });
        }, []),
        eH = i.useCallback(
            () =>
                new Promise((e) => {
                    let t = eP.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        eY = i.useCallback(
            () =>
                new Promise((e) => {
                    let t = eP.current;
                    if (null == t) return e();
                    t.scrollToBottom({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        eW = (0, c.ZP)({
            id: eG,
            defaultFocused: null != eM ? String(eM.value) : void 0,
            scrollToStart: eH,
            scrollToEnd: eY,
            isEnabled: eS,
            wrap: !0,
            useVirtualFocus: !0,
            setFocus: eV,
            disableClickOnSpace: !0,
        }),
        eK = (0, f.Z)(eW),
        ez = (0, f.Z)(ew);
    i.useEffect(() => {
        let e = ez.current,
            t = ek.current;
        eS &&
            null != t &&
            !eD &&
            requestAnimationFrame(() => {
                let n = eP.current,
                    r = e.indexOf(t);
                null == n ||
                    n.scrollToIndex({
                        section: 0,
                        row: r,
                    });
            });
    }, [eS, eD, ez, ek]),
        i.useEffect(() => {
            let e = eK.current;
            if (eS && !eD) {
                var t;
                let n = ey.current;
                if (null != n) {
                    n.focus();
                    let { value: e } = n;
                    (n.value = " "), (n.value = e);
                }
                ev(null != (t = e.focusedItemId()) ? t : null);
            } else {
                let t = ek.current,
                    n = null != t ? String(t.value) : null;
                e.setFocus(n), ev(null);
            }
        }, [eS, eD, eK, ek]),
        i.useLayoutEffect(() => {
            eS || (m ? eC("") : null != eM && eC(eM.label));
        }, [m, eM, eS]),
        i.useLayoutEffect(() => {
            m && eC("");
        }, [m, eL.length]);
    let eq = i.useCallback(
        function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            if (null == e) return void l(m ? [] : void 0);
            let r = "function" == typeof n,
                i = r ? ew.find((t) => t.value === e) : e;
            if (m) {
                let n = null != a ? a : [];
                if (
                    (n.some((t) => (r ? t.value : t) === e)
                        ? l(n.filter((t) => (r ? t.value : t) !== e))
                        : l([...n, i]),
                    t)
                ) {
                    var o;
                    null == (o = ey.current) || o.focus();
                }
            } else l(i);
            ev(null), (!m || E) && eZ(!1), eN(!1), eo && eC("");
        },
        [n, ew, m, E, eo, l, a, eZ],
    );
    i.useLayoutEffect(() => {
        if (U) {
            var e;
            null == (e = ey.current) || e.focus();
        }
    }, [U]);
    let eQ = i.useCallback(() => {
            eC(""), eq(null), eZ(!0);
        }, [eq, eZ]),
        eX = i.useCallback(
            (e) => {
                switch (e.key) {
                    case "Escape":
                        eS && (e.stopPropagation(), eZ(!1));
                        break;
                    case "ArrowDown":
                    case "ArrowUp":
                        eZ(!0);
                }
            },
            [eZ, eS],
        ),
        eJ = ew;
    eA && null != eT && !1 !== H && (eJ = "function" == typeof H ? H(ew, eT) : (0, s.Lu)(ew, eT, null != ea ? ea : x)),
        i.useEffect(() => {
            let e = eP.current;
            null == e || e.scrollToTop();
        }, [eT]),
        i.useEffect(() => {
            !eD && eA && null !== eT && requestAnimationFrame(() => eW.focusFirstVisibleItem());
        }, [eD, eA, eT, eW]);
    let e$ = m ? W : Y,
        e0 = i.useRef(null),
        { focusPreviousItem: e1, focusNextItem: e3 } = F(e0, ey, eL);
    return (0, r.jsxs)(u.bG, {
        navigator: eW,
        children: [
            (0, r.jsx)(g.y, {
                targetElementRef: eR,
                spacing: 0,
                animation: g.y.Animation.NONE,
                shouldShow: eS,
                onRequestClose: () => eZ(!1),
                layerContext: ef.popoutLayerContext,
                renderPopout: (e) => {
                    let { closePopout: t, position: n, updatePosition: i } = e;
                    return (0, r.jsx)(G, {
                        loading: eD,
                        multi: !!m,
                        listRef: eP,
                        listId: eU,
                        maxVisibleItems: k,
                        width: null != V && "auto" !== V ? V : eb,
                        selectedValues: ej,
                        closePopout: t,
                        onSelect: eq,
                        closeOnSelect: E,
                        options: eJ,
                        activeDescendant: eO,
                        renderOptionLabel: z,
                        updatePosition: i,
                        popoutPosition: n,
                        renderOptionPrefix: Q,
                        renderOptionSuffix: X,
                    });
                },
                position: Z,
                children: (e, t) => {
                    let { "aria-expanded": n, "aria-controls": i } = e,
                        { isShown: a } = t,
                        s = a ? y.u04 : y.CJ0,
                        { ref: l, onKeyDown: c } = eW.containerProps,
                        u = (e) => {
                            var t;
                            null == (t = ef.onKeyDown) || t.call(ef, e), c(e), eX(e);
                        };
                    return (0, r.jsx)(
                        _.gNt,
                        P(A({}, ed), {
                            children: (e) => {
                                var t;
                                let i = null == e ? void 0 : e.controlId;
                                return (0, r.jsxs)(_.UPk, {
                                    as: "div",
                                    disabled: w,
                                    ref: eR,
                                    className: o()(C, T.wrapper),
                                    containerClassName: N,
                                    style: { "--icons-width": "".concat(e_, "px") },
                                    onBlur: (e) => {
                                        var t, n, r;
                                        (null == (t = eR.current) ? void 0 : t.contains(e.relatedTarget)) ||
                                            (null == (r = eP.current) || null == (n = r.getScrollerNode())
                                                ? void 0
                                                : n.contains(e.relatedTarget)) ||
                                            (m || null == eM || eC(eM.label), eN(!1), eZ(!1), null == er || er(e));
                                    },
                                    children: [
                                        (0, r.jsx)(_.tEY, {
                                            ringTarget: eE,
                                            focusTarget: ey,
                                            offset: 4,
                                            children: (0, r.jsx)("div", {
                                                onClick: w
                                                    ? void 0
                                                    : (e) => {
                                                          e.stopPropagation(), e.preventDefault(), eC(""), eZ(!0);
                                                      },
                                                onMouseDown: (e) => {
                                                    e.preventDefault();
                                                },
                                                ref: (e) => {
                                                    (eE.current = e), (eB.current = e);
                                                },
                                                className: o()(T.select, T.searchable, { [T.multi]: m }),
                                                children: (0, r.jsx)("div", {
                                                    className: o()(T.value, { [T.multi]: m }),
                                                    children: (0, r.jsx)(e$, {
                                                        query: eT,
                                                        selectedOptions: eL,
                                                        loading: eD,
                                                        renderOptionPrefix: Q,
                                                        renderOptionSuffix: X,
                                                        isDisabled: w,
                                                        isEditing: eA,
                                                        isProcessing: D,
                                                        inputRef: ey,
                                                        "aria-describedby":
                                                            null != J ? J : null == e ? void 0 : e.describedById,
                                                        "aria-errormessage":
                                                            null != (t = null == e ? void 0 : e.errorMessageId)
                                                                ? t
                                                                : eh,
                                                        "aria-invalid":
                                                            null != $
                                                                ? $
                                                                : (null == e ? void 0 : e.errorMessageId) != null ||
                                                                  null != eg,
                                                        "aria-required": null != et ? et : ed.required,
                                                        "aria-labelledby": null != ee ? ee : em,
                                                        "aria-expanded": n,
                                                        setInputRef: (e) => {
                                                            (l.current = e), (ey.current = e);
                                                        },
                                                        onFocus: (e) => {
                                                            var t, n;
                                                            null == (t = ey.current) ||
                                                                t.setSelectionRange(
                                                                    0,
                                                                    null != (n = null == eT ? void 0 : eT.length)
                                                                        ? n
                                                                        : 0,
                                                                ),
                                                                null == ei || ei(e);
                                                        },
                                                        onChange: (e) => {
                                                            ex(e), null == q || q(e), eC(e), eZ(!0), eN(!0);
                                                        },
                                                        onKeyDown: u,
                                                        activeDescendant: eO,
                                                        placeholder: S,
                                                        inputId: i,
                                                        listboxId: eU,
                                                        navigatorId: eG,
                                                        selectValue: function (e) {
                                                            let t =
                                                                !(arguments.length > 1) ||
                                                                void 0 === arguments[1] ||
                                                                arguments[1];
                                                            eq(e, t);
                                                        },
                                                        inputClassNames: en,
                                                        hidePills: es,
                                                    }),
                                                }),
                                            }),
                                        }),
                                        (0, r.jsx)("div", {
                                            className: o()(T.icons, T.iconsContainer, { [T.multi]: m }),
                                            ref: ep,
                                            children: D
                                                ? (0, r.jsx)(y.bbz, {
                                                      dotRadius: 3.5,
                                                      themed: !0,
                                                  })
                                                : (0, r.jsxs)(r.Fragment, {
                                                      children: [
                                                          d && ((null != eT && "" !== eT) || eL.length > 0)
                                                              ? (0, r.jsx)(_.P3F, {
                                                                    "aria-label": I.intl.string(I.t.VkKicb),
                                                                    "aria-controls": i,
                                                                    onClick: eQ,
                                                                    children: (0, r.jsx)(y.Dio, {
                                                                        size: "xs",
                                                                        color: "currentColor",
                                                                        className: T.clear,
                                                                    }),
                                                                })
                                                              : null,
                                                          (0, r.jsx)(_.P3F, {
                                                              "aria-label": eS
                                                                  ? I.intl.string(I.t.cpT0Cq)
                                                                  : I.intl.string(I.t["3xjX0U"]),
                                                              "aria-controls": i,
                                                              onClick: () => {
                                                                  eZ(!eS);
                                                              },
                                                              children: (0, r.jsx)(s, {
                                                                  className: T.dropdownIcon,
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
            eL.length > 0 &&
                null != el &&
                (0, r.jsx)("div", {
                    children: (0, r.jsx)(B, {
                        listRef: e0,
                        selectedOptions: eL,
                        selectValue: function (e) {
                            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                            eq(e, t);
                        },
                        focusNextItem: e3,
                        focusPreviousItem: e1,
                        renderCustomPill: el,
                        customPillContainerClassName: ec,
                    }),
                }),
        ],
    });
});
function U(e) {
    let t = (0, S.l)("SearchableSelect"),
        {
            id: n,
            options: i,
            required: a,
            disabled: o,
            isDisabled: s,
            value: l,
            multi: c,
            clearable: u,
            closeOnSelect: d = !0,
            filter: f,
            matchSorterOptions: p,
            placeholder: m,
            "aria-required": h,
            onChange: g,
            onSearchChange: E,
            onKeyDown: y,
            onFocus: O,
            onBlur: v,
            debounceTime: I,
            hidePills: T,
            renderOptionLabel: C,
            renderOptionPrefix: N,
            renderOptionSuffix: R,
        } = e,
        { fieldProps: w } = (0, _.XF_)(e),
        D = null != I || "function" == typeof i || null != C;
    if (t && !D) {
        let e = null != f && "function" == typeof f ? f : void 0;
        return (0, r.jsx)(
            b.V,
            P(
                A(
                    {
                        id: n,
                        selectionMode: c ? "multiple" : "single",
                        required: a || h,
                        disabled: o || s,
                        hideTags: T,
                    },
                    w,
                ),
                {
                    value: l,
                    options: i,
                    formatOption: (e) => {
                        let { key: t, value: n, label: r, disabled: i } = e;
                        return {
                            id: null != t ? t : n,
                            value: n,
                            label: r,
                            disabled: i,
                            leading:
                                null == N
                                    ? void 0
                                    : N(e, {
                                          inPill: !1,
                                          inDropdown: !0,
                                      }),
                            trailing:
                                null == R
                                    ? void 0
                                    : R(e, {
                                          inPill: !1,
                                          inDropdown: !0,
                                      }),
                        };
                    },
                    onSelectionChange: g,
                    customMatchSorter: e,
                    matchSorterOptions: p,
                    placeholder: m,
                    onQueryChange: (e) => (null == E ? void 0 : E(e.target.value)),
                    onKeyDown: y,
                    onFocus: O,
                    onBlur: v,
                    clearable: u,
                    closeOnSelect: d,
                },
            ),
        );
    }
    return (0, r.jsx)(k, A({}, e));
}
function G(e) {
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
            renderOptionLabel: m,
            updatePosition: h,
            loading: g = !1,
            multi: b,
            popoutPosition: y,
            closeOnSelect: O,
            renderOptionPrefix: S = () => null,
            renderOptionSuffix: C = () => null,
        } = e,
        N = i.useRef(null),
        w = i.useCallback(
            (e) => {
                t(e), O && n();
            },
            [O, n, t],
        );
    return ((0, v.Z)(h), g)
        ? (0, r.jsx)("div", {
              "aria-busy": !0,
              className: o()(T.popout, T.loading, { [T.popoutPositionTop]: "top" === y }),
              style: { width: l },
              children: (0, r.jsx)(_.$jN, {
                  itemClassName: T.loadingSpinner,
                  type: _.RAz.PULSING_ELLIPSIS,
              }),
          })
        : 0 === s.length
          ? (0, r.jsx)("div", {
                className: o()(T.popout, T.noResults, { [T.popoutPositionTop]: "top" === y }),
                style: { width: l },
                children: (0, r.jsx)(E.x, {
                    color: "text-muted",
                    variant: "text-md/normal",
                    children: I.intl.string(I.t["Xe+fJM"]),
                }),
            })
          : (0, r.jsx)(u.SJ, {
                children: (e) => {
                    var { ref: t, onKeyDown: n } = e,
                        i = R(e, ["ref", "onKeyDown"]);
                    return (0, r.jsx)(
                        _._2F,
                        P(
                            A(
                                {
                                    className: o()(T.popout, T.searchableSelect, {
                                        [T.noScrollbar]: s.length <= c,
                                        [T.popoutPositionTop]: "top" === y,
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
                                sections: [s.length],
                                sectionHeight: 0,
                                renderRow: (e) => {
                                    var t;
                                    let { row: n } = e,
                                        i = s[n],
                                        o = m(i);
                                    return (0, r.jsx)(
                                        V,
                                        {
                                            multi: b,
                                            "aria-posinset": n,
                                            "aria-setsize": s.length,
                                            isSelected: a.includes(i.value),
                                            isFocused: d === String(i.value),
                                            value: i.value,
                                            label: o,
                                            onSelect: w,
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
function Z(e, t) {
    if (null == e || null == t) return !1;
    let n = Node.DOCUMENT_POSITION_CONTAINED_BY | Node.DOCUMENT_POSITION_FOLLOWING;
    return (e.compareDocumentPosition(t) & n) === n;
}
function F(e, t, n) {
    let r = i.useMemo(
            () =>
                (0, l.E)({
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
        focusPreviousItem: o,
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
        [_, m] = i.useState(null);
    return (0, r.jsx)("ul", {
        className: f ? d : T.optionPillContainer,
        ref: a,
        onKeyDown: p,
        onFocus: (e) => {
            let t = e.target;
            null != a.current && Z(a.current, t) && m(t.getAttribute("data-option-pill-value"));
        },
        onBlur: (e) => {
            let t = e.relatedTarget;
            Z(a.current, t) || m(null);
        },
        children: t.map((e, t) => {
            var i;
            return (0, r.jsx)(
                "li",
                {
                    className: f ? void 0 : T.optionPillItem,
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
                                  className: T.content,
                                  children: e.label,
                              }),
                    }),
                },
                null != (i = e.key) ? i : "".concat(e.label, "-").concat(e.value),
            );
        }),
    });
}
function V(e) {
    var { value: t, label: n, prefix: i, suffix: a, onSelect: s, isSelected: l, isFocused: c, multi: d } = e,
        f = R(e, ["value", "label", "prefix", "suffix", "onSelect", "isSelected", "isFocused", "multi"]);
    let p = (0, u.JA)(String(t));
    return (0, r.jsxs)(
        _.P3F,
        P(
            A(
                {
                    tag: "li",
                    style: { height: D },
                    focusProps: { enabled: !1 },
                    className: o()(T.option, {
                        [T.focused]: c,
                        [T.multi]: d,
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
                        className: T.content,
                        children: [n, "\xA0"],
                    }),
                    null != i &&
                        (0, r.jsx)("div", {
                            className: T.prefix,
                            children: i,
                        }),
                    " ",
                    null != a &&
                        (0, r.jsx)("div", {
                            className: T.suffix,
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
        ? (0, r.jsx)(_.FZ5, {
              checked: t,
              size: 20,
          })
        : t
          ? (0, r.jsx)(y.owK, {
                size: "custom",
                color: "currentColor",
                "aria-hidden": !0,
                secondaryColor: "white",
                className: T.selectedIcon,
                width: i,
                height: i,
            })
          : null;
}
function Y(e) {
    var { selectedOptions: t, renderOptionPrefix: n, renderOptionSuffix: i } = e,
        a = R(e, ["selectedOptions", "renderOptionPrefix", "renderOptionSuffix"]);
    let o = t[0],
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
            (0, r.jsx)(K, A({ selectedOptions: t }, a)),
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
    var {
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
            inputClassNames: m,
            hidePills: h,
        } = e,
        g = R(e, [
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
        ]);
    let E = Math.max(n.length, (null != t ? t : "").length),
        b = i.useRef(null),
        { focusPreviousItem: y, focusNextItem: O, focusLastItem: v } = F(b, f, a);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            a.length > 0 &&
                !h &&
                (0, r.jsx)(B, {
                    listRef: b,
                    selectedOptions: a,
                    renderOptionPrefix: p,
                    renderOptionSuffix: _,
                    selectValue: s,
                    focusNextItem: O,
                    focusPreviousItem: y,
                }),
            (0, r.jsx)(
                K,
                A(
                    {
                        style: { width: "".concat(E, "ch") },
                        className: o()(T.multi, m),
                        query: t,
                        placeholder: n,
                        selectValue: s,
                        selectedOptions: a,
                        hidePills: h,
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
        onChange: m,
        onFocus: h,
        setInputRef: g,
        isEditing: E,
        onKeyDown: b,
        placeholder: y,
        isProcessing: O,
        loading: v,
        style: S,
        className: I,
        selectedOptions: C,
        hidePills: A,
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
        style: null != S ? S : {},
        "aria-activedescendant": null != p ? (0, d.jb)(_, p) : "",
        disabled: u,
        value: null != t ? t : "",
        onChange: (e) => {
            m(e.target.value);
        },
        onFocus: h,
        className: o()(T.searchInput, I, {
            [T.editing]: E,
            [T.disabled]: u,
        }),
        onKeyDown: b,
        placeholder: "" !== (null != t ? t : "").trim() || (C.length > 0 && !A) ? void 0 : y,
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
    return (0, r.jsx)(_.tEY, {
        offset: 3,
        children: (0, r.jsxs)(m.zx, {
            "data-migration-pending": !0,
            look: m.zx.Looks.BLANK,
            tabIndex: n ? 0 : -1,
            "data-option-pill-value": t.value,
            className: T.optionPillBtn,
            innerClassName: c ? null : T.optionPill,
            onClick: () => (null == i ? void 0 : i(t.value)),
            onKeyDown: a,
            children: [
                l,
                null != u &&
                    (0, r.jsx)("div", {
                        className: T.prefix,
                        children: u,
                    }),
                " ",
                null != d &&
                    (0, r.jsx)("div", {
                        className: T.suffix,
                        children: d,
                    }),
                (0, r.jsx)(_.nn4, { children: I.intl.string(I.t.N86XcP) }),
                !c &&
                    (0, r.jsx)(y.Dio, {
                        size: "custom",
                        color: "currentColor",
                        className: T.deleteOptionIcon,
                        width: 14,
                        height: 14,
                    }),
            ],
        }),
    });
}
