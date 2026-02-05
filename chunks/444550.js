"use strict";
n.d(t, { p: () => L });
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
    p = n(158954),
    h = n(862482),
    m = n(504345),
    g = n(265872),
    E = n(571356),
    A = n(397927),
    I = n(765671),
    T = n(194498),
    y = n(138101),
    S = n(985018),
    v = n(511630);
let C = 44,
    b = { keys: ["label"] };
function N(e) {
    return e.label;
}
function R(e) {
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
function O(e, t) {
    return null == t
        ? []
        : (Array.isArray(t) ? t : [t])
              .map((t) => ("object" == typeof t && (null == t || "value" in t) ? t : e.find((e) => e.value === t)))
              .filter(Boolean);
}
let D = i.forwardRef(function (e, t) {
    let {
            options: n,
            value: a,
            onChange: l,
            clearable: d = !1,
            multi: h = !1,
            closeOnSelect: E = !0,
            onOpen: T,
            onClose: y,
            placeholder: C = S.intl.string(S.t.XqMe3N),
            wrapperClassName: D,
            className: L,
            isDisabled: x = !1,
            isProcessing: k = !1,
            maxVisibleItems: U = 7,
            autoFocus: F = !1,
            popoutPosition: B = "bottom",
            popoutWidth: j,
            filter: H = !0,
            debounceTime: Y,
            renderOptionLabel: W = N,
            onSearchChange: K,
            renderOptionPrefix: z = () => null,
            renderOptionSuffix: $ = () => null,
            "aria-describedby": q,
            "aria-invalid": Z,
            "aria-labelledby": Q,
            "aria-required": X,
            inputClassNames: J,
            onBlur: ee,
            onFocus: et,
            matchSorterOptions: en,
            clearQueryOnSelect: er = !1,
            hidePills: ei,
            renderCustomPill: ea,
            customPillContainerClassName: es,
            ...eo
        } = e,
        { fieldProps: el, props: eu } = (0, p.ndh)(eo),
        { ref: ec, width: ed } = (0, I.Ay)(),
        { titleId: e_, errorId: ef, error: ep } = (0, m.xW)(),
        { ref: eh, width: em } = (0, I.Ay)(),
        eg = i.useRef(null),
        [eE, eA] = i.useState(null),
        [eI, eT] = i.useState(!1),
        [ey, eS] = i.useState(null),
        [ev, eC] = i.useState(!1),
        eb = i.useRef(null),
        eN = i.useRef(null),
        { options: eR, loading: eO, onQueryChange: eD } = R({ active: eI, loadableOptions: n, debounceTime: Y }),
        eL = i.useMemo(() => O(eR, a), [eR, a]),
        ew = i.useMemo(() => eL.map((e) => e.value), [eL]),
        ex = eL[eL.length - 1],
        eP = (0, _.A)(ex),
        eM = i.useId(),
        ek = i.useId(),
        eU = i.useCallback(
            (e) => {
                eI === e || x || (eT(e), e ? T?.() : y?.());
            },
            [x, y, T, eI],
        ),
        eG = i.useCallback(
            (e) => {
                eI && !e && eU(!1);
            },
            [eU, eI],
        ),
        eV = (0, f.K)(eG);
    i.useImperativeHandle(t, () => ({
        close() {
            eU(!1);
        },
    }));
    let eF = i.useCallback((e, t) => {
            let n = document.querySelector(e),
                r = eb.current;
            eA(t), null != r && null != n && r.scrollIntoViewNode({ node: n });
        }, []),
        eB = i.useCallback(
            () =>
                new Promise((e) => {
                    let t = eb.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        ej = i.useCallback(
            () =>
                new Promise((e) => {
                    let t = eb.current;
                    if (null == t) return e();
                    t.scrollToBottom({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        eH = (0, u.Ay)({
            id: ek,
            defaultFocused: null != ex ? String(ex.value) : void 0,
            scrollToStart: eB,
            scrollToEnd: ej,
            isEnabled: eI,
            wrap: !0,
            useVirtualFocus: !0,
            setFocus: eF,
            disableClickOnSpace: !0,
        }),
        eY = (0, _.A)(eH),
        eW = (0, _.A)(eR);
    i.useEffect(() => {
        let e = eW.current,
            t = eP.current;
        eI &&
            null != t &&
            !eO &&
            requestAnimationFrame(() => {
                let n = eb.current,
                    r = e.indexOf(t);
                n?.scrollToIndex({ section: 0, row: r });
            });
    }, [eI, eO, eW, eP]),
        i.useEffect(() => {
            eI && eg.current?.scrollIntoView();
        }, [eI]),
        i.useEffect(() => {
            let e = eY.current;
            if (eI && !eO) {
                let t = eg.current;
                if (null != t) {
                    t.focus();
                    let { value: e } = t;
                    (t.value = " "), (t.value = e);
                }
                eA(e.focusedItemId() ?? null);
            } else {
                let t = eP.current,
                    n = null != t ? String(t.value) : null;
                e.setFocus(n), eA(null);
            }
        }, [eI, eO, eY, eP]),
        i.useLayoutEffect(() => {
            eI || (h ? eS("") : null != ex && eS(ex.label));
        }, [h, ex, eI]),
        i.useLayoutEffect(() => {
            h && eS("");
        }, [h, eL.length]);
    let eK = i.useCallback(
        function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            if (null == e) return void l(h ? [] : void 0);
            let r = "function" == typeof n,
                i = r ? eR.find((t) => t.value === e) : e;
            if (h) {
                let n = a ?? [];
                n.some((t) => (r ? t.value : t) === e) ? l(n.filter((t) => (r ? t.value : t) !== e)) : l([...n, i]),
                    t && eg.current?.focus();
            } else l(i);
            eA(null), (!h || E) && eU(!1), eC(!1), er && eS("");
        },
        [n, eR, h, E, er, l, a, eU],
    );
    i.useLayoutEffect(() => {
        F && eg.current?.focus();
    }, [F]);
    let ez = i.useCallback(() => {
            eS(""), eK(null), eU(!0);
        }, [eK, eU]),
        e$ = i.useCallback(
            (e) => {
                switch (e.key) {
                    case "Escape":
                        eI && (e.stopPropagation(), eU(!1));
                        break;
                    case "ArrowDown":
                    case "ArrowUp":
                        eU(!0);
                }
            },
            [eU, eI],
        ),
        eq = eR;
    ev && null != ey && !1 !== H && (eq = "function" == typeof H ? H(eR, ey) : (0, o.Ht)(eR, ey, en ?? b)),
        i.useEffect(() => {
            let e = eb.current;
            e?.scrollToTop();
        }, [ey]),
        i.useEffect(() => {
            !eO && ev && null !== ey && requestAnimationFrame(() => eH.focusFirstVisibleItem());
        }, [eO, ev, ey, eH]);
    let eZ = h ? V : G,
        eQ = i.useRef(null),
        { focusPreviousItem: eX, focusNextItem: eJ } = P(eQ, eg, eL);
    return (0, r.jsxs)(c.hD, {
        navigator: eH,
        children: [
            (0, r.jsx)(g.Y, {
                targetElementRef: eN,
                spacing: 0,
                animation: g.Y.Animation.NONE,
                shouldShow: eI,
                onRequestClose: () => eU(!1),
                layerContext: eu.popoutLayerContext,
                renderPopout: (e) => {
                    let { closePopout: t, position: n, updatePosition: i } = e;
                    return (0, r.jsx)(w, {
                        loading: eO,
                        multi: !!h,
                        listRef: eb,
                        listId: eM,
                        maxVisibleItems: U,
                        width: null != j && "auto" !== j ? j : em,
                        selectedValues: ew,
                        closePopout: t,
                        onSelect: eK,
                        closeOnSelect: E,
                        options: eq,
                        activeDescendant: eE,
                        renderOptionLabel: W,
                        updatePosition: i,
                        popoutPosition: n,
                        renderOptionPrefix: z,
                        renderOptionSuffix: $,
                    });
                },
                position: B,
                children: (e, t) => {
                    let { "aria-expanded": n, "aria-controls": i } = e,
                        { isShown: a } = t,
                        o = a ? A.tN5 : A.abt,
                        { ref: l, onKeyDown: u } = eH.containerProps,
                        c = (e) => {
                            eu.onKeyDown?.(e), u(e), e$(e);
                        };
                    return (0, r.jsx)(p.D0$, {
                        ...el,
                        children: (e) => {
                            let t = e?.controlId;
                            return (0, r.jsxs)(p.FON, {
                                as: "div",
                                disabled: x,
                                ref: eN,
                                className: s()(D, v.iE),
                                containerClassName: L,
                                style: { "--icons-width": `${ed}px` },
                                onBlur: (e) => {
                                    eN.current?.contains(e.relatedTarget) ||
                                        eb.current?.getScrollerNode()?.contains(e.relatedTarget) ||
                                        (h || null == ex || eS(ex.label), eC(!1), eU(!1), ee?.(e));
                                },
                                children: [
                                    (0, r.jsx)(p.vN3, {
                                        ringTarget: eh,
                                        focusTarget: eg,
                                        offset: 4,
                                        children: (0, r.jsx)("div", {
                                            onClick: x
                                                ? void 0
                                                : (e) => {
                                                      e.stopPropagation(), e.preventDefault(), eS(""), eU(!0);
                                                  },
                                            onMouseDown: (e) => {
                                                e.preventDefault();
                                            },
                                            ref: (e) => {
                                                (eh.current = e), (eV.current = e);
                                            },
                                            className: s()(v.Lt, v.Vk, { [v.m3]: h }),
                                            children: (0, r.jsx)("div", {
                                                className: s()(v.Uq, { [v.m3]: h }),
                                                children: (0, r.jsx)(eZ, {
                                                    query: ey,
                                                    selectedOptions: eL,
                                                    loading: eO,
                                                    renderOptionPrefix: z,
                                                    renderOptionSuffix: $,
                                                    isDisabled: x,
                                                    isEditing: ev,
                                                    isProcessing: k,
                                                    inputRef: eg,
                                                    "aria-describedby": q ?? e?.describedById,
                                                    "aria-errormessage": e?.errorMessageId ?? ef,
                                                    "aria-invalid": Z ?? (e?.errorMessageId != null || null != ep),
                                                    "aria-required": X ?? el.required,
                                                    "aria-labelledby": Q ?? e_,
                                                    "aria-expanded": n,
                                                    setInputRef: (e) => {
                                                        (l.current = e), (eg.current = e);
                                                    },
                                                    onFocus: (e) => {
                                                        eg.current?.setSelectionRange(0, ey?.length ?? 0), et?.(e);
                                                    },
                                                    onChange: (e) => {
                                                        eD(e), K?.(e), eS(e), eU(!0), eC(!0);
                                                    },
                                                    onKeyDown: c,
                                                    activeDescendant: eE,
                                                    placeholder: C,
                                                    inputId: t,
                                                    listboxId: eM,
                                                    navigatorId: ek,
                                                    selectValue: function (e) {
                                                        let t =
                                                            !(arguments.length > 1) ||
                                                            void 0 === arguments[1] ||
                                                            arguments[1];
                                                        eK(e, t);
                                                    },
                                                    inputClassNames: J,
                                                    hidePills: ei,
                                                }),
                                            }),
                                        }),
                                    }),
                                    (0, r.jsx)("div", {
                                        className: s()(v.Pt, v._q, { [v.m3]: h }),
                                        ref: ec,
                                        children: k
                                            ? (0, r.jsx)(A.nvX, { dotRadius: 3.5, themed: !0 })
                                            : (0, r.jsxs)(r.Fragment, {
                                                  children: [
                                                      d && ((null != ey && "" !== ey) || eL.length > 0)
                                                          ? (0, r.jsx)(p.DUT, {
                                                                "aria-label": S.intl.string(S.t.VkKicb),
                                                                "aria-controls": t,
                                                                onClick: ez,
                                                                children: (0, r.jsx)(A.PGe, {
                                                                    size: "xs",
                                                                    color: "currentColor",
                                                                    className: v.IU,
                                                                }),
                                                            })
                                                          : null,
                                                      (0, r.jsx)(p.DUT, {
                                                          "aria-label": eI
                                                              ? S.intl.string(S.t.cpT0Cq)
                                                              : S.intl.string(S.t["3xjX0U"]),
                                                          "aria-controls": t,
                                                          onClick: () => {
                                                              eU(!eI);
                                                          },
                                                          children: (0, r.jsx)(o, { className: v.vP, size: "sm" }),
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
            eL.length > 0 &&
                null != ea &&
                (0, r.jsx)("div", {
                    children: (0, r.jsx)(M, {
                        listRef: eQ,
                        selectedOptions: eL,
                        selectValue: function (e) {
                            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                            eK(e, t);
                        },
                        focusNextItem: eJ,
                        focusPreviousItem: eX,
                        renderCustomPill: ea,
                        customPillContainerClassName: es,
                    }),
                }),
        ],
    });
});
function L(e) {
    let t = (0, y.w)("SearchableSelect"),
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
            matchSorterOptions: h,
            placeholder: m,
            "aria-required": g,
            onChange: E,
            onSearchChange: I,
            onKeyDown: T,
            onFocus: S,
            onBlur: v,
            debounceTime: C,
            hidePills: b,
            renderOptionLabel: N,
            renderOptionPrefix: R,
            renderOptionSuffix: O,
        } = e,
        { fieldProps: L } = (0, p.ndh)(e),
        w = null != C || "function" == typeof a || null != N,
        x = i.useCallback(
            (e) => {
                let { key: t, value: n, label: r, disabled: i } = e;
                return {
                    id: t ?? n,
                    value: n,
                    label: r,
                    disabled: i,
                    leading: R?.(e, { inPill: !1, inDropdown: !0 }),
                    trailing: O?.(e, { inPill: !1, inDropdown: !0 }),
                };
            },
            [R, O],
        );
    if (t && !w) {
        let e = null != f && "function" == typeof f ? f : void 0;
        return (0, r.jsx)(A.ZiE, {
            id: n,
            selectionMode: c ? "multiple" : "single",
            required: s || g,
            disabled: o || l,
            hideTags: b,
            ...L,
            value: u,
            options: a,
            formatOption: x,
            onSelectionChange: E,
            customMatchSorter: e,
            matchSorterOptions: h,
            placeholder: m,
            onQueryChange: (e) => I?.(e.target.value),
            onKeyDown: T,
            onFocus: S,
            onBlur: v,
            clearable: d,
            closeOnSelect: _,
        });
    }
    return (0, r.jsx)(D, { ...e });
}
function w(e) {
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
            renderOptionLabel: h,
            updatePosition: m,
            loading: g = !1,
            multi: A,
            popoutPosition: I,
            closeOnSelect: y,
            renderOptionPrefix: b = () => null,
            renderOptionSuffix: N = () => null,
        } = e,
        R = i.useRef(null),
        O = i.useCallback(
            (e) => {
                t(e), y && n();
            },
            [y, n, t],
        );
    return ((0, T.A)(m), g)
        ? (0, r.jsx)("div", {
              "aria-busy": !0,
              className: s()(v.SW, v.Lq, { [v.O3]: "top" === I }),
              style: { width: l },
              children: (0, r.jsx)(p.y$y, { itemClassName: v.S, type: p.tVU.PULSING_ELLIPSIS }),
          })
        : 0 === o.length
          ? (0, r.jsx)("div", {
                className: s()(v.SW, v.wV, { [v.O3]: "top" === I }),
                style: { width: l },
                children: (0, r.jsx)(E.E, {
                    color: "text-muted",
                    variant: "text-md/normal",
                    children: S.intl.string(S.t["Xe+fJM"]),
                }),
            })
          : (0, r.jsx)(c.PR, {
                children: (e) => {
                    let { ref: t, onKeyDown: n, ...i } = e;
                    return (0, r.jsx)(p.Eie, {
                        className: s()(v.SW, v.HJ, { [v.a_]: o.length <= u, [v.O3]: "top" === I }),
                        style: { width: l, maxHeight: u * C },
                        ref: (e) => {
                            _.current = e;
                            let n = e?.getScrollerNode() ?? null;
                            (R.current = n), (t.current = n);
                        },
                        ...i,
                        role: void 0,
                        innerRole: "listbox",
                        innerAriaMultiselectable: A,
                        innerId: f,
                        rowHeight: C,
                        sections: [o.length],
                        sectionHeight: 0,
                        renderRow: (e) => {
                            let { row: t } = e,
                                n = o[t],
                                i = h(n);
                            return (0, r.jsx)(
                                k,
                                {
                                    multi: A,
                                    "aria-posinset": t,
                                    "aria-setsize": o.length,
                                    isSelected: a.includes(n.value),
                                    isFocused: d === String(n.value),
                                    value: n.value,
                                    label: i,
                                    onSelect: O,
                                    prefix: b(n, { inPill: !1, inDropdown: !0 }),
                                    suffix: N(n, { inPill: !1, inDropdown: !0 }),
                                },
                                n.key ?? t,
                            );
                        },
                        renderSection: () => null,
                    });
                },
            });
}
function x(e, t) {
    if (null == e || null == t) return !1;
    let n = Node.DOCUMENT_POSITION_CONTAINED_BY | Node.DOCUMENT_POSITION_FOLLOWING;
    return (e.compareDocumentPosition(t) & n) === n;
}
function P(e, t, n) {
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
function M(e) {
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
        [p, h] = i.useState(null);
    return (0, r.jsx)("ul", {
        className: _ ? d : v.I6,
        ref: a,
        onKeyDown: f,
        onFocus: (e) => {
            let t = e.target;
            null != a.current && x(a.current, t) && h(t.getAttribute("data-option-pill-value"));
        },
        onBlur: (e) => {
            let t = e.relatedTarget;
            x(a.current, t) || h(null);
        },
        children: t.map((e, t) =>
            (0, r.jsx)(
                "li",
                {
                    className: _ ? void 0 : v.kf,
                    children: (0, r.jsx)(B, {
                        isCustomPill: _,
                        option: e,
                        focused: null == p ? 0 === t : p === String(e.value),
                        onClick: () => n(e.value),
                        renderOptionPrefix: u,
                        renderOptionSuffix: l,
                        onKeyDown: async (t) => {
                            "Backspace" === t.key
                                ? (await s(!0), n(e.value, !1))
                                : "Delete" === t.key && (await o(!0), n(e.value, !1));
                        },
                        children: _ ? c(e) : (0, r.jsx)("div", { className: v.Qs, children: e.label }),
                    }),
                },
                e.key ?? `${e.label}-${e.value}`,
            ),
        ),
    });
}
function k(e) {
    let { value: t, label: n, prefix: i, suffix: a, onSelect: o, isSelected: l, isFocused: u, multi: d, ..._ } = e,
        f = (0, c.rm)(String(t));
    return (0, r.jsxs)(p.DUT, {
        tag: "li",
        style: { height: C },
        focusProps: { enabled: !1 },
        className: s()(v.uK, { [v.in]: u, [v.m3]: d }),
        onClick: () => o(t),
        ...f,
        ..._,
        "aria-selected": l,
        id: f["data-list-item-id"],
        "data-searchable-select-option": !0,
        role: "option",
        children: [
            (0, r.jsxs)("div", { className: v.Qs, children: [n, "\xa0"] }),
            null != i && (0, r.jsx)("div", { className: v.Pl, children: i }),
            " ",
            null != a && (0, r.jsx)("div", { className: v.ei, children: a }),
            " ",
            (0, r.jsx)(U, { isSelected: l, multi: d }),
        ],
    });
}
function U(e) {
    let { isSelected: t, multi: n } = e,
        i = 24;
    return n
        ? (0, r.jsx)(p.P7L, { checked: t, size: 20 })
        : t
          ? (0, r.jsx)(A.yr3, {
                size: "custom",
                color: "currentColor",
                "aria-hidden": !0,
                secondaryColor: "white",
                className: v.Dt,
                width: i,
                height: i,
            })
          : null;
}
function G(e) {
    let { selectedOptions: t, renderOptionPrefix: n, renderOptionSuffix: i, ...a } = e,
        s = t[0],
        o = n?.(s ?? null, { inPill: !1, inDropdown: !1 }),
        l = i?.(s ?? null, { inPill: !1, inDropdown: !1 });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != o ? (0, r.jsx)("div", { "aria-hidden": !0, children: o }) : null,
            (0, r.jsx)(F, { selectedOptions: t, ...a }),
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
            renderOptionSuffix: p,
            inputClassNames: h,
            hidePills: m,
            ...g
        } = e,
        E = Math.max(n.length, (t ?? "").length),
        A = i.useRef(null),
        { focusPreviousItem: I, focusNextItem: T, focusLastItem: y } = P(A, _, a);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            a.length > 0 &&
                !m &&
                (0, r.jsx)(M, {
                    listRef: A,
                    selectedOptions: a,
                    renderOptionPrefix: f,
                    renderOptionSuffix: p,
                    selectValue: o,
                    focusNextItem: T,
                    focusPreviousItem: I,
                }),
            (0, r.jsx)(F, {
                style: { width: `${E}ch` },
                className: s()(v.m3, h),
                query: t,
                placeholder: n,
                selectValue: o,
                selectedOptions: a,
                hidePills: m,
                isEditing: u,
                isDisabled: c,
                isProcessing: d,
                inputRef: _,
                onKeyDown: (e) => {
                    ["ArrowLeft", "Backspace"].includes(e.key) && ("" === t || null == t) && a.length > 0 ? y() : l(e);
                },
                ...g,
            }),
        ],
    });
}
function F(e) {
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
        navigatorId: p,
        onChange: h,
        onFocus: m,
        setInputRef: g,
        isEditing: E,
        onKeyDown: A,
        placeholder: I,
        isProcessing: T,
        loading: y,
        style: S,
        className: C,
        selectedOptions: b,
        hidePills: N,
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
        "aria-busy": y || T,
        style: S ?? {},
        "aria-activedescendant": null != f ? (0, d.t$)(p, f) : "",
        disabled: c,
        value: t ?? "",
        onChange: (e) => {
            h(e.target.value);
        },
        onFocus: m,
        className: s()(v.Rt, C, { [v.Dy]: E, [v.r9]: c }),
        onKeyDown: A,
        placeholder: "" !== (t ?? "").trim() || (b.length > 0 && !N) ? void 0 : I,
        ref: g,
    });
}
function B(e) {
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
    return (0, r.jsx)(p.vN3, {
        offset: 3,
        children: (0, r.jsxs)(h.$n, {
            "data-migration-pending": !0,
            look: h.$n.Looks.BLANK,
            tabIndex: n ? 0 : -1,
            "data-option-pill-value": t.value,
            className: v.Nm,
            innerClassName: u ? null : v.xP,
            onClick: () => i?.(t.value),
            onKeyDown: a,
            children: [
                l,
                null != c && (0, r.jsx)("div", { className: v.Pl, children: c }),
                " ",
                null != d && (0, r.jsx)("div", { className: v.ei, children: d }),
                (0, r.jsx)(p.AC4, { children: S.intl.string(S.t.N86XcP) }),
                !u &&
                    (0, r.jsx)(A.PGe, {
                        size: "custom",
                        color: "currentColor",
                        className: v.gU,
                        width: 14,
                        height: 14,
                    }),
            ],
        }),
    });
}
