n.d(l, { p: () => D });
var t = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(896170),
    o = n(52724),
    u = n(884362),
    c = n(837381),
    d = n(602034),
    f = n(66455),
    p = n(172218),
    m = n(158954),
    h = n(862482),
    g = n(504345),
    x = n(265872),
    b = n(571356),
    v = n(397927),
    y = n(765671),
    w = n(194498),
    N = n(138101),
    j = n(985018),
    C = n(511630);
let P = { keys: ["label"] };
function k(e) {
    return e.label;
}
let S = r.forwardRef(function (e, l) {
    let {
            options: n,
            value: i,
            onChange: o,
            clearable: d = !1,
            multi: h = !1,
            closeOnSelect: b = !0,
            onOpen: w,
            onClose: N,
            placeholder: S = j.intl.string(j.t.XqMe3N),
            wrapperClassName: D,
            className: E,
            isDisabled: F = !1,
            isProcessing: T = !1,
            maxVisibleItems: L = 7,
            autoFocus: M = !1,
            popoutPosition: V = "bottom",
            popoutWidth: K,
            filter: U = !0,
            debounceTime: B,
            renderOptionLabel: _ = k,
            onSearchChange: $,
            renderOptionPrefix: Q = () => null,
            renderOptionSuffix: z = () => null,
            "aria-describedby": H,
            "aria-invalid": W,
            "aria-labelledby": X,
            "aria-required": G,
            inputClassNames: Y,
            onBlur: J,
            onFocus: Z,
            matchSorterOptions: ee,
            clearQueryOnSelect: el = !1,
            hidePills: en,
            renderCustomPill: et,
            customPillContainerClassName: er,
            ...ei
        } = e,
        { fieldProps: ea, props: es } = (0, m.ndh)(ei),
        { ref: eo, width: eu } = (0, y.Ay)(),
        { titleId: ec, errorId: ed, error: ef } = (0, g.xW)(),
        { ref: ep, width: em } = (0, y.Ay)(),
        eh = r.useRef(null),
        [eg, ex] = r.useState(null),
        [eb, ev] = r.useState(!1),
        [ey, ew] = r.useState(null),
        [eN, ej] = r.useState(!1),
        eC = r.useRef(null),
        eP = r.useRef(null),
        {
            options: ek,
            loading: eS,
            onQueryChange: eD,
        } = (function (e) {
            let { active: l, loadableOptions: n, debounceTime: t } = e,
                i = "function" == typeof n,
                [a, s] = r.useState({ options: i ? [] : n, query: "", debouncedQuery: "", loading: !1 }),
                { options: o, loading: u, query: c, debouncedQuery: d } = a,
                f = r.useCallback((e) => s((l) => ({ ...l, loading: i, query: e, debouncedQuery: e })), [i]);
            return (
                r.useEffect(() => {
                    l && f("");
                }, [l, f]),
                r.useEffect(() => {
                    let e;
                    return (
                        i
                            ? (s((e) => ({ ...e, loading: !0, debouncedQuery: null })),
                              (e = setTimeout(() => {
                                  f(c);
                              }, t ?? 500)))
                            : f(c),
                        () => {
                            clearTimeout(e);
                        }
                    );
                }, [i, c, t, f]),
                r.useEffect(() => {
                    let e = !1;
                    return (
                        l &&
                            null !== d &&
                            ("function" == typeof n ? n(d) : Promise.resolve(n)).then((l) => {
                                e || s((e) => ({ ...e, options: l, loading: !1 }));
                            }),
                        () => {
                            e = !0;
                        }
                    );
                }, [l, n, d]),
                {
                    options: o,
                    loading: u,
                    onQueryChange: r.useCallback((e) => {
                        s((l) => ({ ...l, query: e }));
                    }, []),
                }
            );
        })({ active: eb, loadableOptions: n, debounceTime: B }),
        eI = r.useMemo(
            () =>
                null == i
                    ? []
                    : (Array.isArray(i) ? i : [i])
                          .map((e) =>
                              "object" == typeof e && (null == e || "value" in e) ? e : ek.find((l) => l.value === e),
                          )
                          .filter(Boolean),
            [ek, i],
        ),
        eE = r.useMemo(() => eI.map((e) => e.value), [eI]),
        eO = eI[eI.length - 1],
        eA = (0, f.A)(eO),
        eF = r.useId(),
        eT = r.useId(),
        eq = r.useCallback(
            (e) => {
                eb === e || F || (ev(e), e ? w?.() : N?.());
            },
            [F, N, w, eb],
        ),
        eR = r.useCallback(
            (e) => {
                eb && !e && eq(!1);
            },
            [eq, eb],
        ),
        eL = (0, p.K)(eR);
    r.useImperativeHandle(l, () => ({
        close() {
            eq(!1);
        },
    }));
    let eM = r.useCallback((e, l) => {
            let n = document.querySelector(e),
                t = eC.current;
            ex(l), null != t && null != n && t.scrollIntoViewNode({ node: n });
        }, []),
        eV = r.useCallback(
            () =>
                new Promise((e) => {
                    let l = eC.current;
                    if (null == l) return e();
                    l.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        eK = r.useCallback(
            () =>
                new Promise((e) => {
                    let l = eC.current;
                    if (null == l) return e();
                    l.scrollToBottom({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        eU = (0, u.Ay)({
            id: eT,
            defaultFocused: null != eO ? String(eO.value) : void 0,
            scrollToStart: eV,
            scrollToEnd: eK,
            isEnabled: eb,
            wrap: !0,
            useVirtualFocus: !0,
            setFocus: eM,
            disableClickOnSpace: !0,
        }),
        eB = (0, f.A)(eU),
        e_ = (0, f.A)(ek);
    r.useEffect(() => {
        let e = e_.current,
            l = eA.current;
        eb &&
            null != l &&
            !eS &&
            requestAnimationFrame(() => {
                let n = eC.current,
                    t = e.indexOf(l);
                n?.scrollToIndex({ section: 0, row: t });
            });
    }, [eb, eS, e_, eA]),
        r.useEffect(() => {
            eb && eh.current?.scrollIntoView();
        }, [eb]),
        r.useEffect(() => {
            let e = eB.current;
            if (eb && !eS) {
                let l = eh.current;
                if (null != l) {
                    l.focus();
                    let { value: e } = l;
                    (l.value = " "), (l.value = e);
                }
                ex(e.focusedItemId() ?? null);
            } else {
                let l = eA.current,
                    n = null != l ? String(l.value) : null;
                e.setFocus(n), ex(null);
            }
        }, [eb, eS, eB, eA]),
        r.useLayoutEffect(() => {
            eb || (h ? ew("") : null != eO && ew(eO.label));
        }, [h, eO, eb]),
        r.useLayoutEffect(() => {
            h && ew("");
        }, [h, eI.length]);
    let e$ = r.useCallback(
        function (e) {
            let l = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            if (null == e) return void o(h ? [] : void 0);
            let t = "function" == typeof n,
                r = t ? ek.find((l) => l.value === e) : e;
            if (h) {
                let n = i ?? [];
                n.some((l) => (t ? l.value : l) === e) ? o(n.filter((l) => (t ? l.value : l) !== e)) : o([...n, r]),
                    l && eh.current?.focus();
            } else o(r);
            ex(null), (!h || b) && eq(!1), ej(!1), el && ew("");
        },
        [n, ek, h, b, el, o, i, eq],
    );
    r.useLayoutEffect(() => {
        M && eh.current?.focus();
    }, [M]);
    let eQ = r.useCallback(() => {
            ew(""), e$(null), eq(!0);
        }, [e$, eq]),
        ez = r.useCallback(
            (e) => {
                switch (e.key) {
                    case "Escape":
                        eb && (e.stopPropagation(), eq(!1));
                        break;
                    case "ArrowDown":
                    case "ArrowUp":
                        eq(!0);
                }
            },
            [eq, eb],
        ),
        eH = ek;
    eN && null != ey && !1 !== U && (eH = "function" == typeof U ? U(ek, ey) : (0, s.Ht)(ek, ey, ee ?? P)),
        r.useEffect(() => {
            let e = eC.current;
            e?.scrollToTop();
        }, [ey]),
        r.useEffect(() => {
            !eS && eN && null !== ey && requestAnimationFrame(() => eU.focusFirstVisibleItem());
        }, [eS, eN, ey, eU]);
    let eW = h ? R : q,
        eX = r.useRef(null),
        { focusPreviousItem: eG, focusNextItem: eY } = O(eX, eh, eI);
    return (0, t.jsxs)(c.hD, {
        navigator: eU,
        children: [
            (0, t.jsx)(x.Y, {
                targetElementRef: eP,
                spacing: 0,
                animation: x.Y.Animation.NONE,
                shouldShow: eb,
                onRequestClose: () => eq(!1),
                layerContext: es.popoutLayerContext,
                renderPopout: (e) => {
                    let { closePopout: l, position: n, updatePosition: r } = e;
                    return (0, t.jsx)(I, {
                        loading: eS,
                        multi: !!h,
                        listRef: eC,
                        listId: eF,
                        maxVisibleItems: L,
                        width: null != K && "auto" !== K ? K : em,
                        selectedValues: eE,
                        closePopout: l,
                        onSelect: e$,
                        closeOnSelect: b,
                        options: eH,
                        activeDescendant: eg,
                        renderOptionLabel: _,
                        updatePosition: r,
                        popoutPosition: n,
                        renderOptionPrefix: Q,
                        renderOptionSuffix: z,
                    });
                },
                position: V,
                children: (e, l) => {
                    let { "aria-expanded": n, "aria-controls": r } = e,
                        { isShown: i } = l,
                        s = i ? v.tN5 : v.abt,
                        { ref: o, onKeyDown: u } = eU.containerProps,
                        c = (e) => {
                            es.onKeyDown?.(e), u(e), ez(e);
                        };
                    return (0, t.jsx)(m.D0$, {
                        ...ea,
                        children: (e) => {
                            let l = e?.controlId;
                            return (0, t.jsxs)(m.FON, {
                                as: "div",
                                disabled: F,
                                ref: eP,
                                className: a()(D, C.iE),
                                containerClassName: E,
                                style: { "--icons-width": `${eu}px` },
                                onBlur: (e) => {
                                    eP.current?.contains(e.relatedTarget) ||
                                        eC.current?.getScrollerNode()?.contains(e.relatedTarget) ||
                                        (h || null == eO || ew(eO.label), ej(!1), eq(!1), J?.(e));
                                },
                                children: [
                                    (0, t.jsx)(m.vN3, {
                                        ringTarget: ep,
                                        focusTarget: eh,
                                        offset: 4,
                                        children: (0, t.jsx)("div", {
                                            onClick: F
                                                ? void 0
                                                : (e) => {
                                                      e.stopPropagation(), e.preventDefault(), ew(""), eq(!0);
                                                  },
                                            onMouseDown: (e) => {
                                                e.preventDefault();
                                            },
                                            ref: (e) => {
                                                (ep.current = e), (eL.current = e);
                                            },
                                            className: a()(C.Lt, C.Vk, { [C.m3]: h }),
                                            children: (0, t.jsx)("div", {
                                                className: a()(C.Uq, { [C.m3]: h }),
                                                children: (0, t.jsx)(eW, {
                                                    query: ey,
                                                    selectedOptions: eI,
                                                    loading: eS,
                                                    renderOptionPrefix: Q,
                                                    renderOptionSuffix: z,
                                                    isDisabled: F,
                                                    isEditing: eN,
                                                    isProcessing: T,
                                                    inputRef: eh,
                                                    "aria-describedby": H ?? e?.describedById,
                                                    "aria-errormessage": e?.errorMessageId ?? ed,
                                                    "aria-invalid": W ?? (e?.errorMessageId != null || null != ef),
                                                    "aria-required": G ?? ea.required,
                                                    "aria-labelledby": X ?? ec,
                                                    "aria-expanded": n,
                                                    setInputRef: (e) => {
                                                        (o.current = e), (eh.current = e);
                                                    },
                                                    onFocus: (e) => {
                                                        eh.current?.setSelectionRange(0, ey?.length ?? 0), Z?.(e);
                                                    },
                                                    onChange: (e) => {
                                                        eD(e), $?.(e), ew(e), eq(!0), ej(!0);
                                                    },
                                                    onKeyDown: c,
                                                    activeDescendant: eg,
                                                    placeholder: S,
                                                    inputId: l,
                                                    listboxId: eF,
                                                    navigatorId: eT,
                                                    selectValue: function (e) {
                                                        let l =
                                                            !(arguments.length > 1) ||
                                                            void 0 === arguments[1] ||
                                                            arguments[1];
                                                        e$(e, l);
                                                    },
                                                    inputClassNames: Y,
                                                    hidePills: en,
                                                }),
                                            }),
                                        }),
                                    }),
                                    (0, t.jsx)("div", {
                                        className: a()(C.Pt, C._q, { [C.m3]: h }),
                                        ref: eo,
                                        children: T
                                            ? (0, t.jsx)(v.nvX, { dotRadius: 3.5, themed: !0 })
                                            : (0, t.jsxs)(t.Fragment, {
                                                  children: [
                                                      d && ((null != ey && "" !== ey) || eI.length > 0)
                                                          ? (0, t.jsx)(m.DUT, {
                                                                "aria-label": j.intl.string(j.t.VkKicb),
                                                                "aria-controls": l,
                                                                onClick: eQ,
                                                                children: (0, t.jsx)(v.PGe, {
                                                                    size: "xs",
                                                                    color: "currentColor",
                                                                    className: C.IU,
                                                                }),
                                                            })
                                                          : null,
                                                      (0, t.jsx)(m.DUT, {
                                                          "aria-label": eb
                                                              ? j.intl.string(j.t.cpT0Cq)
                                                              : j.intl.string(j.t["3xjX0U"]),
                                                          "aria-controls": l,
                                                          onClick: () => {
                                                              eq(!eb);
                                                          },
                                                          children: (0, t.jsx)(s, { className: C.vP, size: "sm" }),
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
            eI.length > 0 &&
                null != et &&
                (0, t.jsx)("div", {
                    children: (0, t.jsx)(A, {
                        listRef: eX,
                        selectedOptions: eI,
                        selectValue: function (e) {
                            let l = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                            e$(e, l);
                        },
                        focusNextItem: eY,
                        focusPreviousItem: eG,
                        renderCustomPill: et,
                        customPillContainerClassName: er,
                    }),
                }),
        ],
    });
});
function D(e) {
    let l = (0, N.w)("SearchableSelect"),
        {
            id: n,
            options: i,
            required: a,
            disabled: s,
            isDisabled: o,
            value: u,
            multi: c,
            clearable: d,
            closeOnSelect: f = !0,
            filter: p,
            matchSorterOptions: h,
            placeholder: g,
            "aria-required": x,
            onChange: b,
            onSearchChange: y,
            onKeyDown: w,
            onFocus: j,
            onBlur: C,
            debounceTime: P,
            hidePills: k,
            renderOptionLabel: D,
            renderOptionPrefix: I,
            renderOptionSuffix: E,
        } = e,
        { fieldProps: O } = (0, m.ndh)(e),
        A = null != P || "function" == typeof i || null != D,
        F = r.useCallback(
            (e) => {
                let { key: l, value: n, label: t, disabled: r } = e;
                return {
                    id: l ?? n,
                    value: n,
                    label: t,
                    disabled: r,
                    leading: I?.(e, { inPill: !1, inDropdown: !0 }),
                    trailing: E?.(e, { inPill: !1, inDropdown: !0 }),
                };
            },
            [I, E],
        );
    return l && !A
        ? (0, t.jsx)(v.ZiE, {
              id: n,
              selectionMode: c ? "multiple" : "single",
              required: a || x,
              disabled: s || o,
              hideTags: k,
              ...O,
              value: u,
              options: i,
              formatOption: F,
              onSelectionChange: b,
              customMatchSorter: null != p && "function" == typeof p ? p : void 0,
              matchSorterOptions: h,
              placeholder: g,
              onQueryChange: (e) => y?.(e.target.value),
              onKeyDown: w,
              onFocus: j,
              onBlur: C,
              clearable: d,
              closeOnSelect: f,
          })
        : (0, t.jsx)(S, { ...e });
}
function I(e) {
    let {
            onSelect: l,
            closePopout: n,
            selectedValues: i,
            options: s,
            width: o,
            maxVisibleItems: u,
            activeDescendant: d,
            listRef: f,
            listId: p,
            renderOptionLabel: h,
            updatePosition: g,
            loading: x = !1,
            multi: v,
            popoutPosition: y,
            closeOnSelect: N,
            renderOptionPrefix: P = () => null,
            renderOptionSuffix: k = () => null,
        } = e,
        S = r.useRef(null),
        D = r.useCallback(
            (e) => {
                l(e), N && n();
            },
            [N, n, l],
        );
    return ((0, w.A)(g), x)
        ? (0, t.jsx)("div", {
              "aria-busy": !0,
              className: a()(C.SW, C.Lq, { [C.O3]: "top" === y }),
              style: { width: o },
              children: (0, t.jsx)(m.y$y, { itemClassName: C.S, type: m.tVU.PULSING_ELLIPSIS }),
          })
        : 0 === s.length
          ? (0, t.jsx)("div", {
                className: a()(C.SW, C.wV, { [C.O3]: "top" === y }),
                style: { width: o },
                children: (0, t.jsx)(b.E, {
                    color: "text-muted",
                    variant: "text-md/normal",
                    children: j.intl.string(j.t["Xe+fJM"]),
                }),
            })
          : (0, t.jsx)(c.PR, {
                children: (e) => {
                    let { ref: l, onKeyDown: n, ...r } = e;
                    return (0, t.jsx)(m.Eie, {
                        className: a()(C.SW, C.HJ, { [C.a_]: s.length <= u, [C.O3]: "top" === y }),
                        style: { width: o, maxHeight: 44 * u },
                        ref: (e) => {
                            f.current = e;
                            let n = e?.getScrollerNode() ?? null;
                            (S.current = n), (l.current = n);
                        },
                        ...r,
                        role: void 0,
                        innerRole: "listbox",
                        innerAriaMultiselectable: v,
                        innerId: p,
                        rowHeight: 44,
                        sections: [s.length],
                        sectionHeight: 0,
                        renderRow: (e) => {
                            let { row: l } = e,
                                n = s[l],
                                r = h(n);
                            return (0, t.jsx)(
                                F,
                                {
                                    multi: v,
                                    "aria-posinset": l,
                                    "aria-setsize": s.length,
                                    isSelected: i.includes(n.value),
                                    isFocused: d === String(n.value),
                                    value: n.value,
                                    label: r,
                                    onSelect: D,
                                    prefix: P(n, { inPill: !1, inDropdown: !0 }),
                                    suffix: k(n, { inPill: !1, inDropdown: !0 }),
                                },
                                n.key ?? l,
                            );
                        },
                        renderSection: () => null,
                    });
                },
            });
}
function E(e, l) {
    if (null == e || null == l) return !1;
    let n = Node.DOCUMENT_POSITION_CONTAINED_BY | Node.DOCUMENT_POSITION_FOLLOWING;
    return (e.compareDocumentPosition(l) & n) === n;
}
function O(e, l, n) {
    let t = r.useMemo(
            () =>
                (0, o.C)({
                    getFocusableElements() {
                        let l = e.current;
                        return null != l ? Array.from(l.querySelectorAll("[data-option-pill-value]")) : [];
                    },
                    getActiveElement: () => e?.current?.ownerDocument?.activeElement,
                }),
            [n, e],
        ),
        i = r.useCallback((l) => l === e.current?.ownerDocument?.activeElement, [e]),
        a = r.useCallback(
            async function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    n = await t.getPreviousFocusableElement({ wrap: !e });
                return e && ((null == n || i(n)) && (n = await t.getNextFocusableElement()), null == n || i(n))
                    ? l.current?.focus()
                    : n?.focus();
            },
            [t, i, l],
        );
    return {
        focusPreviousItem: a,
        focusNextItem: r.useCallback(
            async function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    n = await t.getNextFocusableElement({ wrap: !e });
                return e && ((null == n || i(n)) && (n = await t.getPreviousFocusableElement()), null == n || i(n))
                    ? l.current?.focus()
                    : n?.focus();
            },
            [t, i, l],
        ),
        focusLastItem: r.useCallback(async () => {
            let e = await t.getLastFocusableElement();
            return e?.focus();
        }, [t]),
    };
}
function A(e) {
    let {
            selectedOptions: l,
            selectValue: n,
            listRef: i,
            focusPreviousItem: a,
            focusNextItem: s,
            renderOptionSuffix: o,
            renderOptionPrefix: u,
            renderCustomPill: c,
            customPillContainerClassName: d,
        } = e,
        f = null != c,
        p = r.useCallback(
            (e) => {
                if (null != i.current)
                    switch (e.key) {
                        case "ArrowRight":
                            return e.stopPropagation(), e.preventDefault(), s();
                        case "ArrowLeft":
                            return e.stopPropagation(), e.preventDefault(), a();
                    }
            },
            [i, a, s],
        ),
        [m, h] = r.useState(null);
    return (0, t.jsx)("ul", {
        className: f ? d : C.I6,
        ref: i,
        onKeyDown: p,
        onFocus: (e) => {
            let l = e.target;
            null != i.current && E(i.current, l) && h(l.getAttribute("data-option-pill-value"));
        },
        onBlur: (e) => {
            let l = e.relatedTarget;
            E(i.current, l) || h(null);
        },
        children: l.map((e, l) =>
            (0, t.jsx)(
                "li",
                {
                    className: f ? void 0 : C.kf,
                    children: (0, t.jsx)(M, {
                        isCustomPill: f,
                        option: e,
                        focused: null == m ? 0 === l : m === String(e.value),
                        onClick: () => n(e.value),
                        renderOptionPrefix: u,
                        renderOptionSuffix: o,
                        onKeyDown: async (l) => {
                            "Backspace" === l.key
                                ? (await a(!0), n(e.value, !1))
                                : "Delete" === l.key && (await s(!0), n(e.value, !1));
                        },
                        children: f ? c(e) : (0, t.jsx)("div", { className: C.Qs, children: e.label }),
                    }),
                },
                e.key ?? `${e.label}-${e.value}`,
            ),
        ),
    });
}
function F(e) {
    let { value: l, label: n, prefix: r, suffix: i, onSelect: s, isSelected: o, isFocused: u, multi: d, ...f } = e,
        p = (0, c.rm)(String(l));
    return (0, t.jsxs)(m.DUT, {
        tag: "li",
        style: { height: 44 },
        focusProps: { enabled: !1 },
        className: a()(C.uK, { [C.in]: u, [C.m3]: d }),
        onClick: () => s(l),
        ...p,
        ...f,
        "aria-selected": o,
        id: p["data-list-item-id"],
        "data-searchable-select-option": !0,
        role: "option",
        children: [
            (0, t.jsxs)("div", { className: C.Qs, children: [n, "\xa0"] }),
            null != r && (0, t.jsx)("div", { className: C.Pl, children: r }),
            " ",
            null != i && (0, t.jsx)("div", { className: C.ei, children: i }),
            " ",
            (0, t.jsx)(T, { isSelected: o, multi: d }),
        ],
    });
}
function T(e) {
    let { isSelected: l, multi: n } = e;
    return n
        ? (0, t.jsx)(m.P7L, { checked: l, size: 20 })
        : l
          ? (0, t.jsx)(v.yr3, {
                size: "custom",
                color: "currentColor",
                "aria-hidden": !0,
                secondaryColor: "white",
                className: C.Dt,
                width: 24,
                height: 24,
            })
          : null;
}
function q(e) {
    let { selectedOptions: l, renderOptionPrefix: n, renderOptionSuffix: r, ...i } = e,
        a = l[0],
        s = n?.(a ?? null, { inPill: !1, inDropdown: !1 }),
        o = r?.(a ?? null, { inPill: !1, inDropdown: !1 });
    return (0, t.jsxs)(t.Fragment, {
        children: [
            null != s ? (0, t.jsx)("div", { "aria-hidden": !0, children: s }) : null,
            (0, t.jsx)(L, { selectedOptions: l, ...i }),
            null != o ? (0, t.jsx)("div", { "aria-hidden": !0, children: o }) : null,
        ],
    });
}
function R(e) {
    let {
            query: l,
            placeholder: n,
            selectedOptions: i,
            selectValue: s,
            onKeyDown: o,
            isEditing: u,
            isDisabled: c,
            isProcessing: d,
            inputRef: f,
            renderOptionPrefix: p,
            renderOptionSuffix: m,
            inputClassNames: h,
            hidePills: g,
            ...x
        } = e,
        b = Math.max(n.length, (l ?? "").length),
        v = r.useRef(null),
        { focusPreviousItem: y, focusNextItem: w, focusLastItem: N } = O(v, f, i);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            i.length > 0 &&
                !g &&
                (0, t.jsx)(A, {
                    listRef: v,
                    selectedOptions: i,
                    renderOptionPrefix: p,
                    renderOptionSuffix: m,
                    selectValue: s,
                    focusNextItem: w,
                    focusPreviousItem: y,
                }),
            (0, t.jsx)(L, {
                style: { width: `${b}ch` },
                className: a()(C.m3, h),
                query: l,
                placeholder: n,
                selectValue: s,
                selectedOptions: i,
                hidePills: g,
                isEditing: u,
                isDisabled: c,
                isProcessing: d,
                inputRef: f,
                onKeyDown: (e) => {
                    ["ArrowLeft", "Backspace"].includes(e.key) && ("" === l || null == l) && i.length > 0 ? N() : o(e);
                },
                ...x,
            }),
        ],
    });
}
function L(e) {
    let {
        query: l,
        inputId: n,
        "aria-describedby": r,
        "aria-invalid": i,
        "aria-required": s,
        "aria-labelledby": o,
        "aria-expanded": u,
        isDisabled: c,
        listboxId: f,
        activeDescendant: p,
        navigatorId: m,
        onChange: h,
        onFocus: g,
        setInputRef: x,
        isEditing: b,
        onKeyDown: v,
        placeholder: y,
        isProcessing: w,
        loading: N,
        style: j,
        className: P,
        selectedOptions: k,
        hidePills: S,
    } = e;
    return (0, t.jsx)("input", {
        role: "combobox",
        id: n,
        "aria-haspopup": "listbox",
        "aria-invalid": i,
        "aria-labelledby": o,
        "aria-autocomplete": "list",
        "aria-expanded": u,
        "aria-describedby": r,
        "aria-disabled": c,
        "aria-controls": f,
        "aria-required": s,
        "aria-busy": N || w,
        style: j ?? {},
        "aria-activedescendant": null != p ? (0, d.t$)(m, p) : "",
        disabled: c,
        value: l ?? "",
        onChange: (e) => {
            h(e.target.value);
        },
        onFocus: g,
        className: a()(C.Rt, P, { [C.Dy]: b, [C.r9]: c }),
        onKeyDown: v,
        placeholder: "" !== (l ?? "").trim() || (k.length > 0 && !S) ? void 0 : y,
        ref: x,
    });
}
function M(e) {
    let {
            option: l,
            focused: n,
            onClick: r,
            onKeyDown: i,
            renderOptionPrefix: a,
            renderOptionSuffix: s,
            children: o,
            isCustomPill: u,
        } = e,
        c = !u && a?.(l, { inPill: !0, inDropdown: !1 }),
        d = !u && s?.(l, { inPill: !0, inDropdown: !1 });
    return (0, t.jsx)(m.vN3, {
        offset: 3,
        children: (0, t.jsxs)(h.$n, {
            "data-migration-pending": !0,
            look: h.$n.Looks.BLANK,
            tabIndex: n ? 0 : -1,
            "data-option-pill-value": l.value,
            className: C.Nm,
            innerClassName: u ? null : C.xP,
            onClick: () => r?.(l.value),
            onKeyDown: i,
            children: [
                o,
                null != c && (0, t.jsx)("div", { className: C.Pl, children: c }),
                " ",
                null != d && (0, t.jsx)("div", { className: C.ei, children: d }),
                (0, t.jsx)(m.AC4, { children: j.intl.string(j.t.N86XcP) }),
                !u &&
                    (0, t.jsx)(v.PGe, {
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
