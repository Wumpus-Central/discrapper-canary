var t = n(477900),
    r = n(582128),
    i = n(503698),
    a = n.n(i),
    s = n(896170),
    o = n(52724),
    u = n(116903),
    c = n(837381),
    d = n(602034),
    f = n(66455),
    m = n(172218),
    p = n(452027),
    h = n(668639),
    g = n(900797),
    x = n(847374),
    v = n(862301),
    b = n(559106),
    y = n(939249),
    w = n(789645),
    C = n(890497),
    j = n(289873),
    N = n(475825),
    P = n(658675),
    k = n(628284),
    S = n(140735),
    I = n(862482),
    D = n(863610),
    E = n(265872),
    O = n(834730),
    A = n(765671),
    F = n(194498),
    q = n(792996),
    R = n(980148);
let T = { keys: ["label"] };
function L(e) {
    return e.label;
}
let M = function (e) {
    let {
            options: l,
            value: n,
            onChange: i,
            clearable: o = !1,
            multi: d = !1,
            closeOnSelect: C = !0,
            onOpen: j,
            onClose: N,
            placeholder: P = q.intl.string(q.t.XqMe3N),
            wrapperClassName: k,
            className: S,
            isDisabled: I = !1,
            isProcessing: O = !1,
            maxVisibleItems: F = 7,
            autoFocus: M = !1,
            popoutPosition: V = "bottom",
            popoutWidth: U,
            filter: Q = !0,
            debounceTime: X,
            renderOptionLabel: z = L,
            onSearchChange: W,
            renderOptionPrefix: Y = () => null,
            renderOptionSuffix: G = () => null,
            "aria-describedby": J,
            "aria-invalid": Z,
            "aria-labelledby": ee,
            "aria-required": el,
            inputClassNames: en,
            onBlur: et,
            onFocus: er,
            matchSorterOptions: ei,
            clearQueryOnSelect: ea = !1,
            hidePills: es,
            renderCustomPill: eo,
            customPillContainerClassName: eu,
            ref: ec,
            ...ed
        } = e,
        { fieldProps: ef, props: em } = (0, p.n)(ed),
        { ref: ep, width: eh } = (0, A.Ay)(),
        { titleId: eg, errorId: ex, error: ev } = (0, h.xW)(),
        { ref: eb, width: ey } = (0, A.Ay)(),
        ew = r.useRef(null),
        [eC, ej] = r.useState(null),
        [eN, eP] = r.useState(!1),
        [ek, eS] = r.useState(null),
        [eI, eD] = r.useState(!1),
        eE = r.useRef(null),
        eO = r.useRef(null),
        {
            options: eA,
            loading: eF,
            onQueryChange: eq,
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
        })({ active: eN, loadableOptions: l, debounceTime: X }),
        eR = r.useMemo(
            () =>
                null == n
                    ? []
                    : (Array.isArray(n) ? n : [n])
                          .map((e) =>
                              "object" == typeof e && (null == e || "value" in e) ? e : eA.find((l) => l.value === e),
                          )
                          .filter(Boolean),
            [eA, n],
        ),
        eT = r.useMemo(() => eR.map((e) => e.value), [eR]),
        eL = eR[eR.length - 1],
        eM = (0, f.A)(eL),
        eK = r.useId(),
        eV = r.useId(),
        eB = r.useCallback(
            (e) => {
                eN === e || I || (eP(e), e ? j?.() : N?.());
            },
            [I, N, j, eN],
        ),
        e_ = r.useCallback(
            (e) => {
                eN && !e && eB(!1);
            },
            [eB, eN],
        ),
        eU = (0, m.K)(e_);
    r.useImperativeHandle(ec, () => ({
        close() {
            eB(!1);
        },
    }));
    let eQ = r.useCallback((e, l) => {
            let n = document.querySelector(e),
                t = eE.current;
            (ej(l), null != t && null != n && t.scrollIntoViewNode({ node: n }));
        }, []),
        e$ = r.useCallback(
            () =>
                new Promise((e) => {
                    let l = eE.current;
                    if (null == l) return e();
                    l.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        eH = r.useCallback(
            () =>
                new Promise((e) => {
                    let l = eE.current;
                    if (null == l) return e();
                    l.scrollToBottom({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        eX = (0, u.Ay)({
            id: eV,
            defaultFocused: null != eL ? String(eL.value) : void 0,
            scrollToStart: e$,
            scrollToEnd: eH,
            isEnabled: eN,
            wrap: !0,
            useVirtualFocus: !0,
            setFocus: eQ,
            disableClickOnSpace: !0,
        }),
        ez = (0, f.A)(eX),
        eW = (0, f.A)(eA);
    (r.useEffect(() => {
        let e = eW.current,
            l = eM.current;
        eN &&
            null != l &&
            !eF &&
            requestAnimationFrame(() => {
                let n = eE.current,
                    t = e.indexOf(l);
                n?.scrollToIndex({ section: 0, row: t });
            });
    }, [eN, eF, eW, eM]),
        r.useEffect(() => {
            eN && ew.current?.scrollIntoView();
        }, [eN]),
        r.useEffect(() => {
            let e = ez.current;
            if (eN && !eF) {
                let l = ew.current;
                if (null != l) {
                    l.focus();
                    let { value: e } = l;
                    ((l.value = " "), (l.value = e));
                }
                ej(e.focusedItemId() ?? null);
            } else {
                let l = eM.current,
                    n = null != l ? String(l.value) : null;
                (e.setFocus(n), ej(null));
            }
        }, [eN, eF, ez, eM]),
        r.useLayoutEffect(() => {
            eN || (d ? eS("") : null != eL && eS(eL.label));
        }, [d, eL, eN]),
        r.useLayoutEffect(() => {
            d && eS("");
        }, [d, eR.length]));
    let eY = r.useCallback(
        function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            if (null == e) return void i(d ? [] : void 0);
            let r = "function" == typeof l,
                a = r ? eA.find((l) => l.value === e) : e;
            if (d) {
                let l = n ?? [];
                (l.some((l) => (r ? l.value : l) === e) ? i(l.filter((l) => (r ? l.value : l) !== e)) : i([...l, a]),
                    t && ew.current?.focus());
            } else i(a);
            (ej(null), (!d || C) && eB(!1), eD(!1), ea && eS(""));
        },
        [l, eA, d, C, ea, i, n, eB],
    );
    r.useLayoutEffect(() => {
        M && ew.current?.focus();
    }, [M]);
    let eG = r.useCallback(() => {
            (eS(""), eY(null), eB(!0));
        }, [eY, eB]),
        eJ = r.useCallback(
            (e) => {
                switch (e.key) {
                    case "Escape":
                        eN && (e.stopPropagation(), eB(!1));
                        break;
                    case "ArrowDown":
                    case "ArrowUp":
                        eB(!0);
                }
            },
            [eB, eN],
        ),
        eZ = eA;
    (eI && null != ek && !1 !== Q && (eZ = "function" == typeof Q ? Q(eA, ek) : (0, s.Ht)(eA, ek, ei ?? T)),
        r.useEffect(() => {
            let e = eE.current;
            e?.scrollToTop();
        }, [ek]),
        r.useEffect(() => {
            !eF && eI && null !== ek && requestAnimationFrame(() => eX.focusFirstVisibleItem());
        }, [eF, eI, ek, eX]));
    let e0 = d ? H : $,
        e1 = r.useRef(null),
        { focusPreviousItem: e4, focusNextItem: e8 } = B(e1, ew, eR);
    return (0, t.jsxs)(c.hD, {
        navigator: eX,
        children: [
            (0, t.jsx)(E.Y, {
                targetElementRef: eO,
                spacing: 0,
                animation: E.Y.Animation.NONE,
                shouldShow: eN,
                onRequestClose: () => eB(!1),
                layerContext: em.popoutLayerContext,
                renderPopout: (e) => {
                    let { closePopout: l, position: n, updatePosition: r } = e;
                    return (0, t.jsx)(K, {
                        loading: eF,
                        multi: !!d,
                        listRef: eE,
                        listId: eK,
                        maxVisibleItems: F,
                        width: null != U && "auto" !== U ? U : ey,
                        selectedValues: eT,
                        closePopout: l,
                        onSelect: eY,
                        closeOnSelect: C,
                        options: eZ,
                        activeDescendant: eC,
                        renderOptionLabel: z,
                        updatePosition: r,
                        popoutPosition: n,
                        renderOptionPrefix: Y,
                        renderOptionSuffix: G,
                    });
                },
                position: V,
                children: (e, l) => {
                    let { "aria-expanded": n, "aria-controls": r } = e,
                        { isShown: i } = l,
                        s = i ? g.ChevronSmallUpIcon : x.ChevronSmallDownIcon,
                        { ref: u, onKeyDown: c } = eX.containerProps;
                    function f(e) {
                        (em.onKeyDown?.(e), c(e), eJ(e));
                    }
                    return (0, t.jsx)(p.D, {
                        ...ef,
                        children: (e) => {
                            let l = e?.controlId;
                            return (0, t.jsxs)(v.F, {
                                as: "div",
                                disabled: I,
                                ref: eO,
                                className: a()(k, R.iE),
                                containerClassName: S,
                                style: { "--icons-width": `${eh}px` },
                                onBlur: (e) => {
                                    eO.current?.contains(e.relatedTarget) ||
                                        eE.current?.getScrollerNode()?.contains(e.relatedTarget) ||
                                        (d || null == eL || eS(eL.label), eD(!1), eB(!1), et?.(e));
                                },
                                children: [
                                    (0, t.jsx)(b.vN, {
                                        ringTarget: eb,
                                        focusTarget: ew,
                                        offset: 4,
                                        children: (0, t.jsx)("div", {
                                            onClick: I
                                                ? void 0
                                                : (e) => {
                                                      (e.stopPropagation(), e.preventDefault(), eS(""), eB(!0));
                                                  },
                                            onMouseDown: (e) => {
                                                e.preventDefault();
                                            },
                                            ref: (e) => {
                                                ((eb.current = e), (eU.current = e));
                                            },
                                            className: a()(R.Lt, R.Vk, { [R.m3]: d }),
                                            children: (0, t.jsx)("div", {
                                                className: a()(R.Uq, { [R.m3]: d }),
                                                children: (0, t.jsx)(e0, {
                                                    query: ek,
                                                    selectedOptions: eR,
                                                    loading: eF,
                                                    renderOptionPrefix: Y,
                                                    renderOptionSuffix: G,
                                                    isDisabled: I,
                                                    isEditing: eI,
                                                    isProcessing: O,
                                                    inputRef: ew,
                                                    "aria-describedby": J ?? e?.describedById,
                                                    "aria-errormessage": e?.errorMessageId ?? ex,
                                                    "aria-invalid": Z ?? (e?.errorMessageId != null || null != ev),
                                                    "aria-required": el ?? ef.required,
                                                    "aria-labelledby": ee ?? eg,
                                                    "aria-expanded": n,
                                                    setInputRef: (e) => {
                                                        ((u.current = e), (ew.current = e));
                                                    },
                                                    onFocus: (e) => {
                                                        (ew.current?.setSelectionRange(0, ek?.length ?? 0), er?.(e));
                                                    },
                                                    onChange: (e) => {
                                                        (eq(e), W?.(e), eS(e), eB(!0), eD(!0));
                                                    },
                                                    onKeyDown: f,
                                                    activeDescendant: eC,
                                                    placeholder: P,
                                                    inputId: l,
                                                    listboxId: eK,
                                                    navigatorId: eV,
                                                    selectValue: function (e) {
                                                        let l =
                                                            !(arguments.length > 1) ||
                                                            void 0 === arguments[1] ||
                                                            arguments[1];
                                                        eY(e, l);
                                                    },
                                                    inputClassNames: en,
                                                    hidePills: es,
                                                }),
                                            }),
                                        }),
                                    }),
                                    (0, t.jsx)("div", {
                                        className: a()(R.Pt, R._q, { [R.m3]: d }),
                                        ref: ep,
                                        children: O
                                            ? (0, t.jsx)(D.n, { dotRadius: 3.5, themed: !0 })
                                            : (0, t.jsxs)(t.Fragment, {
                                                  children: [
                                                      o && ((null != ek && "" !== ek) || eR.length > 0)
                                                          ? (0, t.jsx)(y.D, {
                                                                "aria-label": q.intl.string(q.t.VkKicb),
                                                                "aria-controls": l,
                                                                onClick: eG,
                                                                children: (0, t.jsx)(w.XSmallIcon, {
                                                                    size: "xs",
                                                                    color: "currentColor",
                                                                    className: R.IU,
                                                                }),
                                                            })
                                                          : null,
                                                      (0, t.jsx)(y.D, {
                                                          "aria-label": eN
                                                              ? q.intl.string(q.t.cpT0Cq)
                                                              : q.intl.string(q.t["3xjX0U"]),
                                                          "aria-controls": l,
                                                          onClick: () => {
                                                              eB(!eN);
                                                          },
                                                          children: (0, t.jsx)(s, { className: R.vP, size: "sm" }),
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
            eR.length > 0 &&
                null != eo &&
                (0, t.jsx)("div", {
                    children: (0, t.jsx)(_, {
                        listRef: e1,
                        selectedOptions: eR,
                        selectValue: function (e) {
                            let l = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                            eY(e, l);
                        },
                        focusNextItem: e8,
                        focusPreviousItem: e4,
                        renderCustomPill: eo,
                        customPillContainerClassName: eu,
                    }),
                }),
        ],
    });
};
function K(e) {
    let {
            onSelect: l,
            closePopout: n,
            selectedValues: i,
            options: s,
            width: o,
            maxVisibleItems: u,
            activeDescendant: d,
            listRef: f,
            listId: m,
            renderOptionLabel: p,
            updatePosition: h,
            loading: g = !1,
            multi: x,
            popoutPosition: v,
            closeOnSelect: b,
            renderOptionPrefix: y = () => null,
            renderOptionSuffix: w = () => null,
        } = e,
        C = r.useRef(null),
        P = r.useCallback(
            (e) => {
                (l(e), b && n());
            },
            [b, n, l],
        );
    return ((0, F.A)(h), g)
        ? (0, t.jsx)("div", {
              "aria-busy": !0,
              className: a()(R.SW, R.Lq, { [R.O3]: "top" === v }),
              style: { width: o },
              children: (0, t.jsx)(j.y, { itemClassName: R.S, type: j.t.PULSING_ELLIPSIS }),
          })
        : 0 === s.length
          ? (0, t.jsx)("div", {
                className: a()(R.SW, R.wV, { [R.O3]: "top" === v }),
                style: { width: o },
                children: (0, t.jsx)(O.E, {
                    color: "text-muted",
                    variant: "body-md/normal",
                    children: q.intl.string(q.t["Xe+fJM"]),
                }),
            })
          : (0, t.jsx)(c.PR, {
                children: (e) => {
                    let { ref: l, onKeyDown: n, ...r } = e;
                    return (0, t.jsx)(N.Ei, {
                        className: a()(R.SW, R.HJ, { [R.a_]: s.length <= u, [R.O3]: "top" === v }),
                        style: { width: o, maxHeight: 44 * u },
                        ref: (e) => {
                            f.current = e;
                            let n = e?.getScrollerNode() ?? null;
                            ((C.current = n), (l.current = n));
                        },
                        ...r,
                        role: void 0,
                        innerRole: "listbox",
                        innerAriaMultiselectable: x,
                        innerId: m,
                        rowHeight: 44,
                        sections: [s.length],
                        sectionHeight: 0,
                        renderRow: (e) => {
                            let { row: l } = e,
                                n = s[l],
                                r = p(n);
                            return (0, t.jsx)(
                                U,
                                {
                                    multi: x,
                                    "aria-posinset": l,
                                    "aria-setsize": s.length,
                                    isSelected: i.includes(n.value),
                                    isFocused: d === String(n.value),
                                    value: n.value,
                                    label: r,
                                    onSelect: P,
                                    prefix: y(n, { inPill: !1, inDropdown: !0 }),
                                    suffix: w(n, { inPill: !1, inDropdown: !0 }),
                                },
                                n.key ?? l,
                            );
                        },
                        renderSection: () => null,
                    });
                },
            });
}
function V(e, l) {
    if (null == e || null == l) return !1;
    let n = Node.DOCUMENT_POSITION_CONTAINED_BY | Node.DOCUMENT_POSITION_FOLLOWING;
    return (e.compareDocumentPosition(l) & n) === n;
}
function B(e, l, n) {
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
function _(e) {
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
        m = r.useCallback(
            (e) => {
                if (null != i.current)
                    switch (e.key) {
                        case "ArrowRight":
                            return (e.stopPropagation(), e.preventDefault(), s());
                        case "ArrowLeft":
                            return (e.stopPropagation(), e.preventDefault(), a());
                    }
            },
            [i, a, s],
        ),
        [p, h] = r.useState(null);
    return (0, t.jsx)("ul", {
        className: f ? d : R.I6,
        ref: i,
        onKeyDown: m,
        onFocus: (e) => {
            let l = e.target;
            null != i.current && V(i.current, l) && h(l.getAttribute("data-option-pill-value"));
        },
        onBlur: (e) => {
            let l = e.relatedTarget;
            V(i.current, l) || h(null);
        },
        children: l.map((e, l) =>
            (0, t.jsx)(
                "li",
                {
                    className: f ? void 0 : R.kf,
                    children: (0, t.jsx)(z, {
                        isCustomPill: f,
                        option: e,
                        focused: null == p ? 0 === l : p === String(e.value),
                        onClick: () => n(e.value),
                        renderOptionPrefix: u,
                        renderOptionSuffix: o,
                        onKeyDown: async (l) => {
                            "Backspace" === l.key
                                ? (await a(!0), n(e.value, !1))
                                : "Delete" === l.key && (await s(!0), n(e.value, !1));
                        },
                        children: f ? c(e) : (0, t.jsx)("div", { className: R.Qs, children: e.label }),
                    }),
                },
                e.key ?? `${e.label}-${e.value}`,
            ),
        ),
    });
}
function U(e) {
    let { value: l, label: n, prefix: r, suffix: i, onSelect: s, isSelected: o, isFocused: u, multi: d, ...f } = e,
        m = (0, c.rm)(String(l));
    return (0, t.jsxs)(y.D, {
        tag: "li",
        style: { height: 44 },
        focusProps: { enabled: !1 },
        className: a()(R.uK, { [R.in]: u, [R.m3]: d }),
        onClick: () => s(l),
        ...m,
        ...f,
        "aria-selected": o,
        id: m["data-list-item-id"],
        "data-searchable-select-option": !0,
        role: "option",
        children: [
            (0, t.jsxs)("div", { className: R.Qs, children: [n, "\xa0"] }),
            null != r && (0, t.jsx)("div", { className: R.Pl, children: r }),
            " ",
            null != i && (0, t.jsx)("div", { className: R.ei, children: i }),
            " ",
            (0, t.jsx)(Q, { isSelected: o, multi: d }),
        ],
    });
}
function Q(e) {
    let { isSelected: l, multi: n } = e;
    return n
        ? (0, t.jsx)(P.P, { checked: l })
        : l
          ? (0, t.jsx)(k.CircleCheckIcon, {
                size: "custom",
                color: "currentColor",
                "aria-hidden": !0,
                secondaryColor: "white",
                className: R.Dt,
                width: 24,
                height: 24,
            })
          : null;
}
function $(e) {
    let { selectedOptions: l, renderOptionPrefix: n, renderOptionSuffix: r, ...i } = e,
        a = l[0],
        s = n?.(a ?? null, { inPill: !1, inDropdown: !1 }),
        o = r?.(a ?? null, { inPill: !1, inDropdown: !1 });
    return (0, t.jsxs)(t.Fragment, {
        children: [
            null != s ? (0, t.jsx)("div", { "aria-hidden": !0, children: s }) : null,
            (0, t.jsx)(X, { selectedOptions: l, ...i }),
            null != o ? (0, t.jsx)("div", { "aria-hidden": !0, children: o }) : null,
        ],
    });
}
function H(e) {
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
            renderOptionPrefix: m,
            renderOptionSuffix: p,
            inputClassNames: h,
            hidePills: g,
            ...x
        } = e,
        v = Math.max(n.length, (l ?? "").length),
        b = r.useRef(null),
        { focusPreviousItem: y, focusNextItem: w, focusLastItem: C } = B(b, f, i);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            i.length > 0 &&
                !g &&
                (0, t.jsx)(_, {
                    listRef: b,
                    selectedOptions: i,
                    renderOptionPrefix: m,
                    renderOptionSuffix: p,
                    selectValue: s,
                    focusNextItem: w,
                    focusPreviousItem: y,
                }),
            (0, t.jsx)(X, {
                style: { width: `${v}ch` },
                className: a()(R.m3, h),
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
                    ["ArrowLeft", "Backspace"].includes(e.key) && ("" === l || null == l) && i.length > 0 ? C() : o(e);
                },
                ...x,
            }),
        ],
    });
}
function X(e) {
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
        activeDescendant: m,
        navigatorId: p,
        onChange: h,
        onFocus: g,
        setInputRef: x,
        isEditing: v,
        onKeyDown: b,
        placeholder: y,
        isProcessing: w,
        loading: C,
        style: j,
        className: N,
        selectedOptions: P,
        hidePills: k,
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
        "aria-busy": C || w,
        style: j ?? {},
        "aria-activedescendant": null != m ? (0, d.t$)(p, m) : "",
        disabled: c,
        value: l ?? "",
        onChange: (e) => {
            h(e.target.value);
        },
        onFocus: g,
        className: a()(R.Rt, N, { [R.Dy]: v, [R.r9]: c }),
        onKeyDown: b,
        placeholder: "" !== (l ?? "").trim() || (P.length > 0 && !k) ? void 0 : y,
        ref: x,
    });
}
function z(e) {
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
    return (0, t.jsx)(b.vN, {
        offset: 3,
        children: (0, t.jsxs)(I.$n, {
            "data-migration-pending": !0,
            look: I.$n.Looks.BLANK,
            tabIndex: n ? 0 : -1,
            "data-option-pill-value": l.value,
            className: R.Nm,
            innerClassName: u ? null : R.xP,
            onClick: () => r?.(l.value),
            onKeyDown: i,
            children: [
                o,
                null != c && (0, t.jsx)("div", { className: R.Pl, children: c }),
                " ",
                null != d && (0, t.jsx)("div", { className: R.ei, children: d }),
                (0, t.jsx)(S.A, { children: q.intl.string(q.t.N86XcP) }),
                !u &&
                    (0, t.jsx)(w.XSmallIcon, {
                        size: "custom",
                        color: "currentColor",
                        className: R.gU,
                        width: 14,
                        height: 14,
                    }),
            ],
        }),
    });
}
n.d(
    l,
    {},
    {
        p: function (e) {
            let {
                    id: l,
                    options: n,
                    required: i,
                    disabled: a,
                    isDisabled: s,
                    value: o,
                    multi: u,
                    clearable: c,
                    closeOnSelect: d = !0,
                    filter: f,
                    matchSorterOptions: m,
                    placeholder: h,
                    "aria-required": g,
                    onChange: x,
                    onSearchChange: v,
                    onKeyDown: b,
                    onFocus: y,
                    onBlur: w,
                    debounceTime: j,
                    hidePills: N,
                    renderOptionLabel: P,
                    renderOptionPrefix: k,
                    renderOptionSuffix: S,
                } = e,
                { fieldProps: I } = (0, p.n)(e),
                D = null != j || "function" == typeof n || null != P,
                E = r.useCallback(
                    (e) => {
                        let { key: l, value: n, label: t, disabled: r } = e;
                        return {
                            id: l ?? n,
                            value: n,
                            label: t,
                            disabled: r,
                            leading: k?.(e, { inPill: !1, inDropdown: !0 }),
                            trailing: S?.(e, { inPill: !1, inDropdown: !0 }),
                        };
                    },
                    [k, S],
                );
            return D
                ? (0, t.jsx)(M, { ...e })
                : (0, t.jsx)(C.Z, {
                      id: l,
                      selectionMode: u ? "multiple" : "single",
                      required: i || g,
                      disabled: a || s,
                      hideTags: N,
                      ...I,
                      value: o,
                      options: n,
                      formatOption: E,
                      onSelectionChange: x,
                      customMatchSorter: null != f && "function" == typeof f ? f : void 0,
                      matchSorterOptions: m,
                      placeholder: h,
                      onQueryChange: (e) => v?.(e.target.value),
                      onKeyDown: b,
                      onFocus: y,
                      onBlur: w,
                      clearable: c,
                      closeOnSelect: d,
                  });
        },
    },
);
