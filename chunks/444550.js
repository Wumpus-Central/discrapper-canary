"use strict";
n.d(t, { p: () => w });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(896170),
    l = n(52724),
    u = n(884362),
    c = n(837381),
    d = n(602034),
    _ = n(66455),
    f = n(172218),
    h = n(158954),
    p = n(862482),
    g = n(504345),
    E = n(265872),
    A = n(571356),
    I = n(397927),
    T = n(765671),
    y = n(194498),
    S = n(138101),
    v = n(985018),
    C = n(511630);
let b = 44,
    N = { keys: ["label"] };
function R(e) {
    return e.label;
}
function O(e) {
    let { active: t, loadableOptions: n, debounceTime: r } = e,
        a = "function" == typeof n,
        [s, o] = i.useState({ options: a ? [] : n, query: "", debouncedQuery: "", loading: !1 }),
        { options: l, loading: u, query: c, debouncedQuery: d } = s,
        _ = i.useCallback((e) => o((t) => ({ ...t, loading: a, query: e, debouncedQuery: e })), [a]);
    return (
        i.useEffect(() => {
            t && _("");
        }, [t, _]),
        i.useEffect(() => {
            let e;
            return (
                a
                    ? (o((e) => ({ ...e, loading: !0, debouncedQuery: null })),
                      (e = setTimeout(() => {
                          _(c);
                      }, r ?? 500)))
                    : _(c),
                () => {
                    clearTimeout(e);
                }
            );
        }, [a, c, r, _]),
        i.useEffect(() => {
            let e = !1;
            function r() {
                return "function" == typeof n ? n(d) : Promise.resolve(n);
            }
            return (
                t &&
                    null !== d &&
                    r().then((t) => {
                        e || o((e) => ({ ...e, options: t, loading: !1 }));
                    }),
                () => {
                    e = !0;
                }
            );
        }, [t, n, d]),
        {
            options: l,
            loading: u,
            onQueryChange: i.useCallback((e) => {
                o((t) => ({ ...t, query: e }));
            }, []),
        }
    );
}
function D(e, t) {
    return null == t
        ? []
        : (Array.isArray(t) ? t : [t])
              .map((t) => ("object" == typeof t && (null == t || "value" in t) ? t : e.find((e) => e.value === t)))
              .filter(Boolean);
}
let L = i.forwardRef(function (e, t) {
    let {
            options: n,
            value: a,
            onChange: l,
            clearable: d = !1,
            multi: p = !1,
            closeOnSelect: A = !0,
            onOpen: y,
            onClose: S,
            placeholder: b = v.intl.string(v.t.XqMe3N),
            wrapperClassName: L,
            className: w,
            isDisabled: P = !1,
            isProcessing: U = !1,
            maxVisibleItems: G = 7,
            autoFocus: B = !1,
            popoutPosition: j = "bottom",
            popoutWidth: H,
            filter: Y = !0,
            debounceTime: W,
            renderOptionLabel: K = R,
            onSearchChange: $,
            renderOptionPrefix: z = () => null,
            renderOptionSuffix: q = () => null,
            "aria-describedby": X,
            "aria-invalid": Z,
            "aria-labelledby": Q,
            "aria-required": J,
            inputClassNames: ee,
            onBlur: et,
            onFocus: en,
            matchSorterOptions: er,
            clearQueryOnSelect: ei = !1,
            hidePills: ea,
            renderCustomPill: es,
            customPillContainerClassName: eo,
            ...el
        } = e,
        { fieldProps: eu, props: ec } = (0, h.ndh)(el),
        { ref: ed, width: e_ } = (0, T.Ay)(),
        { titleId: ef, errorId: eh, error: ep } = (0, g.xW)(),
        { ref: em, width: eg } = (0, T.Ay)(),
        eE = i.useRef(null),
        [eA, eI] = i.useState(null),
        [eT, ey] = i.useState(!1),
        [eS, ev] = i.useState(null),
        [eC, eb] = i.useState(!1),
        eN = i.useRef(null),
        eR = i.useRef(null),
        { options: eO, loading: eD, onQueryChange: eL } = O({ active: eT, loadableOptions: n, debounceTime: W }),
        ew = i.useMemo(() => D(eO, a), [eO, a]),
        ex = i.useMemo(() => ew.map((e) => e.value), [ew]),
        eP = ew[ew.length - 1],
        eM = (0, _.A)(eP),
        ek = i.useId(),
        eU = i.useId(),
        eG = i.useCallback(
            (e) => {
                eT === e || P || (ey(e), e ? y?.() : S?.());
            },
            [P, S, y, eT],
        ),
        eF = i.useCallback(
            (e) => {
                eT && !e && eG(!1);
            },
            [eG, eT],
        ),
        eV = (0, f.K)(eF);
    i.useImperativeHandle(t, () => ({
        close() {
            eG(!1);
        },
    }));
    let eB = i.useCallback((e, t) => {
            let n = document.querySelector(e),
                r = eN.current;
            eI(t), null != r && null != n && r.scrollIntoViewNode({ node: n });
        }, []),
        ej = i.useCallback(
            () =>
                new Promise((e) => {
                    let t = eN.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        eH = i.useCallback(
            () =>
                new Promise((e) => {
                    let t = eN.current;
                    if (null == t) return e();
                    t.scrollToBottom({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        eY = (0, u.Ay)({
            id: eU,
            defaultFocused: null != eP ? String(eP.value) : void 0,
            scrollToStart: ej,
            scrollToEnd: eH,
            isEnabled: eT,
            wrap: !0,
            useVirtualFocus: !0,
            setFocus: eB,
            disableClickOnSpace: !0,
        }),
        eW = (0, _.A)(eY),
        eK = (0, _.A)(eO);
    i.useEffect(() => {
        let e = eK.current,
            t = eM.current;
        eT &&
            null != t &&
            !eD &&
            requestAnimationFrame(() => {
                let n = eN.current,
                    r = e.indexOf(t);
                n?.scrollToIndex({ section: 0, row: r });
            });
    }, [eT, eD, eK, eM]),
        i.useEffect(() => {
            eT && eE.current?.scrollIntoView();
        }, [eT]),
        i.useEffect(() => {
            let e = eW.current;
            if (eT && !eD) {
                let t = eE.current;
                if (null != t) {
                    t.focus();
                    let { value: e } = t;
                    (t.value = " "), (t.value = e);
                }
                eI(e.focusedItemId() ?? null);
            } else {
                let t = eM.current,
                    n = null != t ? String(t.value) : null;
                e.setFocus(n), eI(null);
            }
        }, [eT, eD, eW, eM]),
        i.useLayoutEffect(() => {
            eT || (p ? ev("") : null != eP && ev(eP.label));
        }, [p, eP, eT]),
        i.useLayoutEffect(() => {
            p && ev("");
        }, [p, ew.length]);
    let e$ = i.useCallback(
        function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            if (null == e) return void l(p ? [] : void 0);
            let r = "function" == typeof n,
                i = r ? eO.find((t) => t.value === e) : e;
            if (p) {
                let n = a ?? [];
                n.some((t) => (r ? t.value : t) === e) ? l(n.filter((t) => (r ? t.value : t) !== e)) : l([...n, i]),
                    t && eE.current?.focus();
            } else l(i);
            eI(null), (!p || A) && eG(!1), eb(!1), ei && ev("");
        },
        [n, eO, p, A, ei, l, a, eG],
    );
    i.useLayoutEffect(() => {
        B && eE.current?.focus();
    }, [B]);
    let ez = i.useCallback(() => {
            ev(""), e$(null), eG(!0);
        }, [e$, eG]),
        eq = i.useCallback(
            (e) => {
                switch (e.key) {
                    case "Escape":
                        eT && (e.stopPropagation(), eG(!1));
                        break;
                    case "ArrowDown":
                    case "ArrowUp":
                        eG(!0);
                }
            },
            [eG, eT],
        ),
        eX = eO;
    eC && null != eS && !1 !== Y && (eX = "function" == typeof Y ? Y(eO, eS) : (0, o.Ht)(eO, eS, er ?? N)),
        i.useEffect(() => {
            let e = eN.current;
            e?.scrollToTop();
        }, [eS]),
        i.useEffect(() => {
            !eD && eC && null !== eS && requestAnimationFrame(() => eY.focusFirstVisibleItem());
        }, [eD, eC, eS, eY]);
    let eZ = p ? V : F,
        eQ = i.useRef(null),
        { focusPreviousItem: eJ, focusNextItem: e0 } = M(eQ, eE, ew);
    return (0, r.jsxs)(c.hD, {
        navigator: eY,
        children: [
            (0, r.jsx)(E.Y, {
                targetElementRef: eR,
                spacing: 0,
                animation: E.Y.Animation.NONE,
                shouldShow: eT,
                onRequestClose: () => eG(!1),
                layerContext: ec.popoutLayerContext,
                renderPopout: (e) => {
                    let { closePopout: t, position: n, updatePosition: i } = e;
                    return (0, r.jsx)(x, {
                        loading: eD,
                        multi: !!p,
                        listRef: eN,
                        listId: ek,
                        maxVisibleItems: G,
                        width: null != H && "auto" !== H ? H : eg,
                        selectedValues: ex,
                        closePopout: t,
                        onSelect: e$,
                        closeOnSelect: A,
                        options: eX,
                        activeDescendant: eA,
                        renderOptionLabel: K,
                        updatePosition: i,
                        popoutPosition: n,
                        renderOptionPrefix: z,
                        renderOptionSuffix: q,
                    });
                },
                position: j,
                children: (e, t) => {
                    let { "aria-expanded": n, "aria-controls": i } = e,
                        { isShown: a } = t,
                        o = a ? I.tN5 : I.abt,
                        { ref: l, onKeyDown: u } = eY.containerProps,
                        c = (e) => {
                            ec.onKeyDown?.(e), u(e), eq(e);
                        };
                    return (0, r.jsx)(h.D0$, {
                        ...eu,
                        children: (e) => {
                            let t = e?.controlId;
                            return (0, r.jsxs)(h.FON, {
                                as: "div",
                                disabled: P,
                                ref: eR,
                                className: s()(L, C.iE),
                                containerClassName: w,
                                style: { "--icons-width": `${e_}px` },
                                onBlur: (e) => {
                                    eR.current?.contains(e.relatedTarget) ||
                                        eN.current?.getScrollerNode()?.contains(e.relatedTarget) ||
                                        (p || null == eP || ev(eP.label), eb(!1), eG(!1), et?.(e));
                                },
                                children: [
                                    (0, r.jsx)(h.vN3, {
                                        ringTarget: em,
                                        focusTarget: eE,
                                        offset: 4,
                                        children: (0, r.jsx)("div", {
                                            onClick: P
                                                ? void 0
                                                : (e) => {
                                                      e.stopPropagation(), e.preventDefault(), ev(""), eG(!0);
                                                  },
                                            onMouseDown: (e) => {
                                                e.preventDefault();
                                            },
                                            ref: (e) => {
                                                (em.current = e), (eV.current = e);
                                            },
                                            className: s()(C.Lt, C.Vk, { [C.m3]: p }),
                                            children: (0, r.jsx)("div", {
                                                className: s()(C.Uq, { [C.m3]: p }),
                                                children: (0, r.jsx)(eZ, {
                                                    query: eS,
                                                    selectedOptions: ew,
                                                    loading: eD,
                                                    renderOptionPrefix: z,
                                                    renderOptionSuffix: q,
                                                    isDisabled: P,
                                                    isEditing: eC,
                                                    isProcessing: U,
                                                    inputRef: eE,
                                                    "aria-describedby": X ?? e?.describedById,
                                                    "aria-errormessage": e?.errorMessageId ?? eh,
                                                    "aria-invalid": Z ?? (e?.errorMessageId != null || null != ep),
                                                    "aria-required": J ?? eu.required,
                                                    "aria-labelledby": Q ?? ef,
                                                    "aria-expanded": n,
                                                    setInputRef: (e) => {
                                                        (l.current = e), (eE.current = e);
                                                    },
                                                    onFocus: (e) => {
                                                        eE.current?.setSelectionRange(0, eS?.length ?? 0), en?.(e);
                                                    },
                                                    onChange: (e) => {
                                                        eL(e), $?.(e), ev(e), eG(!0), eb(!0);
                                                    },
                                                    onKeyDown: c,
                                                    activeDescendant: eA,
                                                    placeholder: b,
                                                    inputId: t,
                                                    listboxId: ek,
                                                    navigatorId: eU,
                                                    selectValue: function (e) {
                                                        let t =
                                                            !(arguments.length > 1) ||
                                                            void 0 === arguments[1] ||
                                                            arguments[1];
                                                        e$(e, t);
                                                    },
                                                    inputClassNames: ee,
                                                    hidePills: ea,
                                                }),
                                            }),
                                        }),
                                    }),
                                    (0, r.jsx)("div", {
                                        className: s()(C.Pt, C._q, { [C.m3]: p }),
                                        ref: ed,
                                        children: U
                                            ? (0, r.jsx)(I.nvX, { dotRadius: 3.5, themed: !0 })
                                            : (0, r.jsxs)(r.Fragment, {
                                                  children: [
                                                      d && ((null != eS && "" !== eS) || ew.length > 0)
                                                          ? (0, r.jsx)(h.DUT, {
                                                                "aria-label": v.intl.string(v.t.VkKicb),
                                                                "aria-controls": t,
                                                                onClick: ez,
                                                                children: (0, r.jsx)(I.PGe, {
                                                                    size: "xs",
                                                                    color: "currentColor",
                                                                    className: C.IU,
                                                                }),
                                                            })
                                                          : null,
                                                      (0, r.jsx)(h.DUT, {
                                                          "aria-label": eT
                                                              ? v.intl.string(v.t.cpT0Cq)
                                                              : v.intl.string(v.t["3xjX0U"]),
                                                          "aria-controls": t,
                                                          onClick: () => {
                                                              eG(!eT);
                                                          },
                                                          children: (0, r.jsx)(o, { className: C.vP, size: "sm" }),
                                                      }),
                                                  ],
                                              }),
                                    }),
                                ],
                            });
                        },
                    });
                },
            }),
            ew.length > 0 &&
                null != es &&
                (0, r.jsx)("div", {
                    children: (0, r.jsx)(k, {
                        listRef: eQ,
                        selectedOptions: ew,
                        selectValue: function (e) {
                            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                            e$(e, t);
                        },
                        focusNextItem: e0,
                        focusPreviousItem: eJ,
                        renderCustomPill: es,
                        customPillContainerClassName: eo,
                    }),
                }),
        ],
    });
});
function w(e) {
    let t = (0, S.w)("SearchableSelect"),
        {
            id: n,
            options: a,
            required: s,
            disabled: o,
            isDisabled: l,
            value: u,
            multi: c,
            clearable: d,
            closeOnSelect: _ = !0,
            filter: f,
            matchSorterOptions: p,
            placeholder: g,
            "aria-required": E,
            onChange: A,
            onSearchChange: T,
            onKeyDown: y,
            onFocus: v,
            onBlur: C,
            debounceTime: b,
            hidePills: N,
            renderOptionLabel: R,
            renderOptionPrefix: O,
            renderOptionSuffix: D,
        } = e,
        { fieldProps: w } = (0, h.ndh)(e),
        x = null != b || "function" == typeof a || null != R,
        P = i.useCallback(
            (e) => {
                let { key: t, value: n, label: r, disabled: i } = e;
                return {
                    id: t ?? n,
                    value: n,
                    label: r,
                    disabled: i,
                    leading: O?.(e, { inPill: !1, inDropdown: !0 }),
                    trailing: D?.(e, { inPill: !1, inDropdown: !0 }),
                };
            },
            [O, D],
        );
    if (t && !x) {
        let e = null != f && "function" == typeof f ? f : void 0;
        return (0, r.jsx)(I.ZiE, {
            id: n,
            selectionMode: c ? "multiple" : "single",
            required: s || E,
            disabled: o || l,
            hideTags: N,
            ...w,
            value: u,
            options: a,
            formatOption: P,
            onSelectionChange: A,
            customMatchSorter: e,
            matchSorterOptions: p,
            placeholder: g,
            onQueryChange: (e) => T?.(e.target.value),
            onKeyDown: y,
            onFocus: v,
            onBlur: C,
            clearable: d,
            closeOnSelect: _,
        });
    }
    return (0, r.jsx)(L, { ...e });
}
function x(e) {
    let {
            onSelect: t,
            closePopout: n,
            selectedValues: a,
            options: o,
            width: l,
            maxVisibleItems: u,
            activeDescendant: d,
            listRef: _,
            listId: f,
            renderOptionLabel: p,
            updatePosition: g,
            loading: E = !1,
            multi: I,
            popoutPosition: T,
            closeOnSelect: S,
            renderOptionPrefix: N = () => null,
            renderOptionSuffix: R = () => null,
        } = e,
        O = i.useRef(null),
        D = i.useCallback(
            (e) => {
                t(e), S && n();
            },
            [S, n, t],
        );
    return ((0, y.A)(g), E)
        ? (0, r.jsx)("div", {
              "aria-busy": !0,
              className: s()(C.SW, C.Lq, { [C.O3]: "top" === T }),
              style: { width: l },
              children: (0, r.jsx)(h.y$y, { itemClassName: C.S, type: h.tVU.PULSING_ELLIPSIS }),
          })
        : 0 === o.length
          ? (0, r.jsx)("div", {
                className: s()(C.SW, C.wV, { [C.O3]: "top" === T }),
                style: { width: l },
                children: (0, r.jsx)(A.E, {
                    color: "text-muted",
                    variant: "text-md/normal",
                    children: v.intl.string(v.t["Xe+fJM"]),
                }),
            })
          : (0, r.jsx)(c.PR, {
                children: (e) => {
                    let { ref: t, onKeyDown: n, ...i } = e;
                    return (0, r.jsx)(h.Eie, {
                        className: s()(C.SW, C.HJ, { [C.a_]: o.length <= u, [C.O3]: "top" === T }),
                        style: { width: l, maxHeight: u * b },
                        ref: (e) => {
                            _.current = e;
                            let n = e?.getScrollerNode() ?? null;
                            (O.current = n), (t.current = n);
                        },
                        ...i,
                        role: void 0,
                        innerRole: "listbox",
                        innerAriaMultiselectable: I,
                        innerId: f,
                        rowHeight: b,
                        sections: [o.length],
                        sectionHeight: 0,
                        renderRow: (e) => {
                            let { row: t } = e,
                                n = o[t],
                                i = p(n);
                            return (0, r.jsx)(
                                U,
                                {
                                    multi: I,
                                    "aria-posinset": t,
                                    "aria-setsize": o.length,
                                    isSelected: a.includes(n.value),
                                    isFocused: d === String(n.value),
                                    value: n.value,
                                    label: i,
                                    onSelect: D,
                                    prefix: N(n, { inPill: !1, inDropdown: !0 }),
                                    suffix: R(n, { inPill: !1, inDropdown: !0 }),
                                },
                                n.key ?? t,
                            );
                        },
                        renderSection: () => null,
                    });
                },
            });
}
function P(e, t) {
    if (null == e || null == t) return !1;
    let n = Node.DOCUMENT_POSITION_CONTAINED_BY | Node.DOCUMENT_POSITION_FOLLOWING;
    return (e.compareDocumentPosition(t) & n) === n;
}
function M(e, t, n) {
    let r = i.useMemo(
            () =>
                (0, l.C)({
                    getFocusableElements() {
                        let t = e.current;
                        return null != t ? Array.from(t.querySelectorAll("[data-option-pill-value]")) : [];
                    },
                    getActiveElement: () => e?.current?.ownerDocument?.activeElement,
                }),
            [n, e],
        ),
        a = i.useCallback((t) => t === e.current?.ownerDocument?.activeElement, [e]),
        s = i.useCallback(
            async function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    n = await r.getPreviousFocusableElement({ wrap: !e });
                return e && ((null == n || a(n)) && (n = await r.getNextFocusableElement()), null == n || a(n))
                    ? t.current?.focus()
                    : n?.focus();
            },
            [r, a, t],
        );
    return {
        focusPreviousItem: s,
        focusNextItem: i.useCallback(
            async function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    n = await r.getNextFocusableElement({ wrap: !e });
                return e && ((null == n || a(n)) && (n = await r.getPreviousFocusableElement()), null == n || a(n))
                    ? t.current?.focus()
                    : n?.focus();
            },
            [r, a, t],
        ),
        focusLastItem: i.useCallback(async () => {
            let e = await r.getLastFocusableElement();
            return e?.focus();
        }, [r]),
    };
}
function k(e) {
    let {
            selectedOptions: t,
            selectValue: n,
            listRef: a,
            focusPreviousItem: s,
            focusNextItem: o,
            renderOptionSuffix: l,
            renderOptionPrefix: u,
            renderCustomPill: c,
            customPillContainerClassName: d,
        } = e,
        _ = null != c,
        f = i.useCallback(
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
        [h, p] = i.useState(null);
    return (0, r.jsx)("ul", {
        className: _ ? d : C.I6,
        ref: a,
        onKeyDown: f,
        onFocus: (e) => {
            let t = e.target;
            null != a.current && P(a.current, t) && p(t.getAttribute("data-option-pill-value"));
        },
        onBlur: (e) => {
            let t = e.relatedTarget;
            P(a.current, t) || p(null);
        },
        children: t.map((e, t) =>
            (0, r.jsx)(
                "li",
                {
                    className: _ ? void 0 : C.kf,
                    children: (0, r.jsx)(j, {
                        isCustomPill: _,
                        option: e,
                        focused: null == h ? 0 === t : h === String(e.value),
                        onClick: () => n(e.value),
                        renderOptionPrefix: u,
                        renderOptionSuffix: l,
                        onKeyDown: async (t) => {
                            "Backspace" === t.key
                                ? (await s(!0), n(e.value, !1))
                                : "Delete" === t.key && (await o(!0), n(e.value, !1));
                        },
                        children: _ ? c(e) : (0, r.jsx)("div", { className: C.Qs, children: e.label }),
                    }),
                },
                e.key ?? `${e.label}-${e.value}`,
            ),
        ),
    });
}
function U(e) {
    let { value: t, label: n, prefix: i, suffix: a, onSelect: o, isSelected: l, isFocused: u, multi: d, ..._ } = e,
        f = (0, c.rm)(String(t));
    return (0, r.jsxs)(h.DUT, {
        tag: "li",
        style: { height: b },
        focusProps: { enabled: !1 },
        className: s()(C.uK, { [C.in]: u, [C.m3]: d }),
        onClick: () => o(t),
        ...f,
        ..._,
        "aria-selected": l,
        id: f["data-list-item-id"],
        "data-searchable-select-option": !0,
        role: "option",
        children: [
            (0, r.jsxs)("div", { className: C.Qs, children: [n, "\xa0"] }),
            null != i && (0, r.jsx)("div", { className: C.Pl, children: i }),
            " ",
            null != a && (0, r.jsx)("div", { className: C.ei, children: a }),
            " ",
            (0, r.jsx)(G, { isSelected: l, multi: d }),
        ],
    });
}
function G(e) {
    let { isSelected: t, multi: n } = e,
        i = 24;
    return n
        ? (0, r.jsx)(h.P7L, { checked: t, size: 20 })
        : t
          ? (0, r.jsx)(I.yr3, {
                size: "custom",
                color: "currentColor",
                "aria-hidden": !0,
                secondaryColor: "white",
                className: C.Dt,
                width: i,
                height: i,
            })
          : null;
}
function F(e) {
    let { selectedOptions: t, renderOptionPrefix: n, renderOptionSuffix: i, ...a } = e,
        s = t[0],
        o = n?.(s ?? null, { inPill: !1, inDropdown: !1 }),
        l = i?.(s ?? null, { inPill: !1, inDropdown: !1 });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != o ? (0, r.jsx)("div", { "aria-hidden": !0, children: o }) : null,
            (0, r.jsx)(B, { selectedOptions: t, ...a }),
            null != l ? (0, r.jsx)("div", { "aria-hidden": !0, children: l }) : null,
        ],
    });
}
function V(e) {
    let {
            query: t,
            placeholder: n,
            selectedOptions: a,
            selectValue: o,
            onKeyDown: l,
            isEditing: u,
            isDisabled: c,
            isProcessing: d,
            inputRef: _,
            renderOptionPrefix: f,
            renderOptionSuffix: h,
            inputClassNames: p,
            hidePills: g,
            ...E
        } = e,
        A = Math.max(n.length, (t ?? "").length),
        I = i.useRef(null),
        { focusPreviousItem: T, focusNextItem: y, focusLastItem: S } = M(I, _, a);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            a.length > 0 &&
                !g &&
                (0, r.jsx)(k, {
                    listRef: I,
                    selectedOptions: a,
                    renderOptionPrefix: f,
                    renderOptionSuffix: h,
                    selectValue: o,
                    focusNextItem: y,
                    focusPreviousItem: T,
                }),
            (0, r.jsx)(B, {
                style: { width: `${A}ch` },
                className: s()(C.m3, p),
                query: t,
                placeholder: n,
                selectValue: o,
                selectedOptions: a,
                hidePills: g,
                isEditing: u,
                isDisabled: c,
                isProcessing: d,
                inputRef: _,
                onKeyDown: (e) => {
                    ["ArrowLeft", "Backspace"].includes(e.key) && ("" === t || null == t) && a.length > 0 ? S() : l(e);
                },
                ...E,
            }),
        ],
    });
}
function B(e) {
    let {
        query: t,
        inputId: n,
        "aria-describedby": i,
        "aria-invalid": a,
        "aria-required": o,
        "aria-labelledby": l,
        "aria-expanded": u,
        isDisabled: c,
        listboxId: _,
        activeDescendant: f,
        navigatorId: h,
        onChange: p,
        onFocus: g,
        setInputRef: E,
        isEditing: A,
        onKeyDown: I,
        placeholder: T,
        isProcessing: y,
        loading: S,
        style: v,
        className: b,
        selectedOptions: N,
        hidePills: R,
    } = e;
    return (0, r.jsx)("input", {
        role: "combobox",
        id: n,
        "aria-haspopup": "listbox",
        "aria-invalid": a,
        "aria-labelledby": l,
        "aria-autocomplete": "list",
        "aria-expanded": u,
        "aria-describedby": i,
        "aria-disabled": c,
        "aria-controls": _,
        "aria-required": o,
        "aria-busy": S || y,
        style: v ?? {},
        "aria-activedescendant": null != f ? (0, d.t$)(h, f) : "",
        disabled: c,
        value: t ?? "",
        onChange: (e) => {
            p(e.target.value);
        },
        onFocus: g,
        className: s()(C.Rt, b, { [C.Dy]: A, [C.r9]: c }),
        onKeyDown: I,
        placeholder: "" !== (t ?? "").trim() || (N.length > 0 && !R) ? void 0 : T,
        ref: E,
    });
}
function j(e) {
    let {
            option: t,
            focused: n,
            onClick: i,
            onKeyDown: a,
            renderOptionPrefix: s,
            renderOptionSuffix: o,
            children: l,
            isCustomPill: u,
        } = e,
        c = !u && s?.(t, { inPill: !0, inDropdown: !1 }),
        d = !u && o?.(t, { inPill: !0, inDropdown: !1 });
    return (0, r.jsx)(h.vN3, {
        offset: 3,
        children: (0, r.jsxs)(p.$n, {
            "data-migration-pending": !0,
            look: p.$n.Looks.BLANK,
            tabIndex: n ? 0 : -1,
            "data-option-pill-value": t.value,
            className: C.Nm,
            innerClassName: u ? null : C.xP,
            onClick: () => i?.(t.value),
            onKeyDown: a,
            children: [
                l,
                null != c && (0, r.jsx)("div", { className: C.Pl, children: c }),
                " ",
                null != d && (0, r.jsx)("div", { className: C.ei, children: d }),
                (0, r.jsx)(h.AC4, { children: v.intl.string(v.t.N86XcP) }),
                !u &&
                    (0, r.jsx)(I.PGe, {
                        size: "custom",
                        color: "currentColor",
                        className: C.gU,
                        width: 14,
                        height: 14,
                    }),
            ],
        }),
    });
}
