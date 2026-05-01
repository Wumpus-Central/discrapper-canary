n.d(l, { p: () => K });
var t = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(896170),
    o = n(52724),
    u = n(887129),
    c = n(837381),
    d = n(602034),
    f = n(66455),
    p = n(172218),
    m = n(452027),
    h = n(862301),
    g = n(187322),
    x = n(939249),
    b = n(289873),
    v = n(475825),
    y = n(658675),
    w = n(140735),
    j = n(862482),
    N = n(504345),
    C = n(922016),
    P = n(834730),
    k = n(900797),
    D = n(847374),
    S = n(863610),
    I = n(789645),
    E = n(783878),
    O = n(628284),
    A = n(765671),
    F = n(194498),
    q = n(375708),
    R = n(384267);
let T = { keys: ["label"] };
function L(e) {
    return e.label;
}
let M = r.forwardRef(function (e, l) {
    let {
            options: n,
            value: i,
            onChange: o,
            clearable: d = !1,
            multi: b = !1,
            closeOnSelect: v = !0,
            onOpen: y,
            onClose: w,
            placeholder: j = q.intl.string(q.t.XqMe3N),
            wrapperClassName: P,
            className: E,
            isDisabled: O = !1,
            isProcessing: F = !1,
            maxVisibleItems: M = 7,
            autoFocus: K = !1,
            popoutPosition: B = "bottom",
            popoutWidth: Q,
            filter: $ = !0,
            debounceTime: W,
            renderOptionLabel: X = L,
            onSearchChange: Y,
            renderOptionPrefix: G = () => null,
            renderOptionSuffix: J = () => null,
            "aria-describedby": Z,
            "aria-invalid": ee,
            "aria-labelledby": el,
            "aria-required": en,
            inputClassNames: et,
            onBlur: er,
            onFocus: ei,
            matchSorterOptions: ea,
            clearQueryOnSelect: es = !1,
            hidePills: eo,
            renderCustomPill: eu,
            customPillContainerClassName: ec,
            ...ed
        } = e,
        { fieldProps: ef, props: ep } = (0, m.n)(ed),
        { ref: em, width: eh } = (0, A.Ay)(),
        { titleId: eg, errorId: ex, error: eb } = (0, N.xW)(),
        { ref: ev, width: ey } = (0, A.Ay)(),
        ew = r.useRef(null),
        [ej, eN] = r.useState(null),
        [eC, eP] = r.useState(!1),
        [ek, eD] = r.useState(null),
        [eS, eI] = r.useState(!1),
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
        })({ active: eC, loadableOptions: n, debounceTime: W }),
        eR = r.useMemo(
            () =>
                null == i
                    ? []
                    : (Array.isArray(i) ? i : [i])
                          .map((e) =>
                              "object" == typeof e && (null == e || "value" in e) ? e : eA.find((l) => l.value === e),
                          )
                          .filter(Boolean),
            [eA, i],
        ),
        eT = r.useMemo(() => eR.map((e) => e.value), [eR]),
        eL = eR[eR.length - 1],
        eM = (0, f.A)(eL),
        eK = r.useId(),
        eV = r.useId(),
        eB = r.useCallback(
            (e) => {
                eC === e || O || (eP(e), e ? y?.() : w?.());
            },
            [O, w, y, eC],
        ),
        e_ = r.useCallback(
            (e) => {
                eC && !e && eB(!1);
            },
            [eB, eC],
        ),
        eU = (0, p.K)(e_);
    r.useImperativeHandle(l, () => ({
        close() {
            eB(!1);
        },
    }));
    let eQ = r.useCallback((e, l) => {
            let n = document.querySelector(e),
                t = eE.current;
            eN(l), null != t && null != n && t.scrollIntoViewNode({ node: n });
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
        ez = r.useCallback(
            () =>
                new Promise((e) => {
                    let l = eE.current;
                    if (null == l) return e();
                    l.scrollToBottom({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        eH = (0, u.Ay)({
            id: eV,
            defaultFocused: null != eL ? String(eL.value) : void 0,
            scrollToStart: e$,
            scrollToEnd: ez,
            isEnabled: eC,
            wrap: !0,
            useVirtualFocus: !0,
            setFocus: eQ,
            disableClickOnSpace: !0,
        }),
        eW = (0, f.A)(eH),
        eX = (0, f.A)(eA);
    r.useEffect(() => {
        let e = eX.current,
            l = eM.current;
        eC &&
            null != l &&
            !eF &&
            requestAnimationFrame(() => {
                let n = eE.current,
                    t = e.indexOf(l);
                n?.scrollToIndex({ section: 0, row: t });
            });
    }, [eC, eF, eX, eM]),
        r.useEffect(() => {
            eC && ew.current?.scrollIntoView();
        }, [eC]),
        r.useEffect(() => {
            let e = eW.current;
            if (eC && !eF) {
                let l = ew.current;
                if (null != l) {
                    l.focus();
                    let { value: e } = l;
                    (l.value = " "), (l.value = e);
                }
                eN(e.focusedItemId() ?? null);
            } else {
                let l = eM.current,
                    n = null != l ? String(l.value) : null;
                e.setFocus(n), eN(null);
            }
        }, [eC, eF, eW, eM]),
        r.useLayoutEffect(() => {
            eC || (b ? eD("") : null != eL && eD(eL.label));
        }, [b, eL, eC]),
        r.useLayoutEffect(() => {
            b && eD("");
        }, [b, eR.length]);
    let eY = r.useCallback(
        function (e) {
            let l = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            if (null == e) return void o(b ? [] : void 0);
            let t = "function" == typeof n,
                r = t ? eA.find((l) => l.value === e) : e;
            if (b) {
                let n = i ?? [];
                n.some((l) => (t ? l.value : l) === e) ? o(n.filter((l) => (t ? l.value : l) !== e)) : o([...n, r]),
                    l && ew.current?.focus();
            } else o(r);
            eN(null), (!b || v) && eB(!1), eI(!1), es && eD("");
        },
        [n, eA, b, v, es, o, i, eB],
    );
    r.useLayoutEffect(() => {
        K && ew.current?.focus();
    }, [K]);
    let eG = r.useCallback(() => {
            eD(""), eY(null), eB(!0);
        }, [eY, eB]),
        eJ = r.useCallback(
            (e) => {
                switch (e.key) {
                    case "Escape":
                        eC && (e.stopPropagation(), eB(!1));
                        break;
                    case "ArrowDown":
                    case "ArrowUp":
                        eB(!0);
                }
            },
            [eB, eC],
        ),
        eZ = eA;
    eS && null != ek && !1 !== $ && (eZ = "function" == typeof $ ? $(eA, ek) : (0, s.Ht)(eA, ek, ea ?? T)),
        r.useEffect(() => {
            let e = eE.current;
            e?.scrollToTop();
        }, [ek]),
        r.useEffect(() => {
            !eF && eS && null !== ek && requestAnimationFrame(() => eH.focusFirstVisibleItem());
        }, [eF, eS, ek, eH]);
    let e0 = b ? H : z,
        e1 = r.useRef(null),
        { focusPreviousItem: e4, focusNextItem: e8 } = _(e1, ew, eR);
    return (0, t.jsxs)(c.hD, {
        navigator: eH,
        children: [
            (0, t.jsx)(C.Y, {
                targetElementRef: eO,
                spacing: 0,
                animation: C.Y.Animation.NONE,
                shouldShow: eC,
                onRequestClose: () => eB(!1),
                layerContext: ep.popoutLayerContext,
                renderPopout: (e) => {
                    let { closePopout: l, position: n, updatePosition: r } = e;
                    return (0, t.jsx)(V, {
                        loading: eF,
                        multi: !!b,
                        listRef: eE,
                        listId: eK,
                        maxVisibleItems: M,
                        width: null != Q && "auto" !== Q ? Q : ey,
                        selectedValues: eT,
                        closePopout: l,
                        onSelect: eY,
                        closeOnSelect: v,
                        options: eZ,
                        activeDescendant: ej,
                        renderOptionLabel: X,
                        updatePosition: r,
                        popoutPosition: n,
                        renderOptionPrefix: G,
                        renderOptionSuffix: J,
                    });
                },
                position: B,
                children: (e, l) => {
                    let { "aria-expanded": n, "aria-controls": r } = e,
                        { isShown: i } = l,
                        s = i ? k.t : D.a,
                        { ref: o, onKeyDown: u } = eH.containerProps,
                        c = (e) => {
                            ep.onKeyDown?.(e), u(e), eJ(e);
                        };
                    return (0, t.jsx)(m.D, {
                        ...ef,
                        children: (e) => {
                            let l = e?.controlId;
                            return (0, t.jsxs)(h.F, {
                                as: "div",
                                disabled: O,
                                ref: eO,
                                className: a()(P, R.iE),
                                containerClassName: E,
                                style: { "--icons-width": `${eh}px` },
                                onBlur: (e) => {
                                    eO.current?.contains(e.relatedTarget) ||
                                        eE.current?.getScrollerNode()?.contains(e.relatedTarget) ||
                                        (b || null == eL || eD(eL.label), eI(!1), eB(!1), er?.(e));
                                },
                                children: [
                                    (0, t.jsx)(g.vN, {
                                        ringTarget: ev,
                                        focusTarget: ew,
                                        offset: 4,
                                        children: (0, t.jsx)("div", {
                                            onClick: O
                                                ? void 0
                                                : (e) => {
                                                      e.stopPropagation(), e.preventDefault(), eD(""), eB(!0);
                                                  },
                                            onMouseDown: (e) => {
                                                e.preventDefault();
                                            },
                                            ref: (e) => {
                                                (ev.current = e), (eU.current = e);
                                            },
                                            className: a()(R.Lt, R.Vk, { [R.m3]: b }),
                                            children: (0, t.jsx)("div", {
                                                className: a()(R.Uq, { [R.m3]: b }),
                                                children: (0, t.jsx)(e0, {
                                                    query: ek,
                                                    selectedOptions: eR,
                                                    loading: eF,
                                                    renderOptionPrefix: G,
                                                    renderOptionSuffix: J,
                                                    isDisabled: O,
                                                    isEditing: eS,
                                                    isProcessing: F,
                                                    inputRef: ew,
                                                    "aria-describedby": Z ?? e?.describedById,
                                                    "aria-errormessage": e?.errorMessageId ?? ex,
                                                    "aria-invalid": ee ?? (e?.errorMessageId != null || null != eb),
                                                    "aria-required": en ?? ef.required,
                                                    "aria-labelledby": el ?? eg,
                                                    "aria-expanded": n,
                                                    setInputRef: (e) => {
                                                        (o.current = e), (ew.current = e);
                                                    },
                                                    onFocus: (e) => {
                                                        ew.current?.setSelectionRange(0, ek?.length ?? 0), ei?.(e);
                                                    },
                                                    onChange: (e) => {
                                                        eq(e), Y?.(e), eD(e), eB(!0), eI(!0);
                                                    },
                                                    onKeyDown: c,
                                                    activeDescendant: ej,
                                                    placeholder: j,
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
                                                    inputClassNames: et,
                                                    hidePills: eo,
                                                }),
                                            }),
                                        }),
                                    }),
                                    (0, t.jsx)("div", {
                                        className: a()(R.Pt, R._q, { [R.m3]: b }),
                                        ref: em,
                                        children: F
                                            ? (0, t.jsx)(S.n, { dotRadius: 3.5, themed: !0 })
                                            : (0, t.jsxs)(t.Fragment, {
                                                  children: [
                                                      d && ((null != ek && "" !== ek) || eR.length > 0)
                                                          ? (0, t.jsx)(x.D, {
                                                                "aria-label": q.intl.string(q.t.VkKicb),
                                                                "aria-controls": l,
                                                                onClick: eG,
                                                                children: (0, t.jsx)(I.P, {
                                                                    size: "xs",
                                                                    color: "currentColor",
                                                                    className: R.IU,
                                                                }),
                                                            })
                                                          : null,
                                                      (0, t.jsx)(x.D, {
                                                          "aria-label": eC
                                                              ? q.intl.string(q.t.cpT0Cq)
                                                              : q.intl.string(q.t["3xjX0U"]),
                                                          "aria-controls": l,
                                                          onClick: () => {
                                                              eB(!eC);
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
                null != eu &&
                (0, t.jsx)("div", {
                    children: (0, t.jsx)(U, {
                        listRef: e1,
                        selectedOptions: eR,
                        selectValue: function (e) {
                            let l = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                            eY(e, l);
                        },
                        focusNextItem: e8,
                        focusPreviousItem: e4,
                        renderCustomPill: eu,
                        customPillContainerClassName: ec,
                    }),
                }),
        ],
    });
});
function K(e) {
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
            matchSorterOptions: p,
            placeholder: h,
            "aria-required": g,
            onChange: x,
            onSearchChange: b,
            onKeyDown: v,
            onFocus: y,
            onBlur: w,
            debounceTime: j,
            hidePills: N,
            renderOptionLabel: C,
            renderOptionPrefix: P,
            renderOptionSuffix: k,
        } = e,
        { fieldProps: D } = (0, m.n)(e),
        S = null != j || "function" == typeof n || null != C,
        I = r.useCallback(
            (e) => {
                let { key: l, value: n, label: t, disabled: r } = e;
                return {
                    id: l ?? n,
                    value: n,
                    label: t,
                    disabled: r,
                    leading: P?.(e, { inPill: !1, inDropdown: !0 }),
                    trailing: k?.(e, { inPill: !1, inDropdown: !0 }),
                };
            },
            [P, k],
        );
    return S
        ? (0, t.jsx)(M, { ...e })
        : (0, t.jsx)(E.Z, {
              id: l,
              selectionMode: u ? "multiple" : "single",
              required: i || g,
              disabled: a || s,
              hideTags: N,
              ...D,
              value: o,
              options: n,
              formatOption: I,
              onSelectionChange: x,
              customMatchSorter: null != f && "function" == typeof f ? f : void 0,
              matchSorterOptions: p,
              placeholder: h,
              onQueryChange: (e) => b?.(e.target.value),
              onKeyDown: v,
              onFocus: y,
              onBlur: w,
              clearable: c,
              closeOnSelect: d,
          });
}
function V(e) {
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
            renderOptionLabel: m,
            updatePosition: h,
            loading: g = !1,
            multi: x,
            popoutPosition: y,
            closeOnSelect: w,
            renderOptionPrefix: j = () => null,
            renderOptionSuffix: N = () => null,
        } = e,
        C = r.useRef(null),
        k = r.useCallback(
            (e) => {
                l(e), w && n();
            },
            [w, n, l],
        );
    return ((0, F.A)(h), g)
        ? (0, t.jsx)("div", {
              "aria-busy": !0,
              className: a()(R.SW, R.Lq, { [R.O3]: "top" === y }),
              style: { width: o },
              children: (0, t.jsx)(b.y, { itemClassName: R.S, type: b.t.PULSING_ELLIPSIS }),
          })
        : 0 === s.length
          ? (0, t.jsx)("div", {
                className: a()(R.SW, R.wV, { [R.O3]: "top" === y }),
                style: { width: o },
                children: (0, t.jsx)(P.E, {
                    color: "text-muted",
                    variant: "text-md/normal",
                    children: q.intl.string(q.t["Xe+fJM"]),
                }),
            })
          : (0, t.jsx)(c.PR, {
                children: (e) => {
                    let { ref: l, onKeyDown: n, ...r } = e;
                    return (0, t.jsx)(v.Ei, {
                        className: a()(R.SW, R.HJ, { [R.a_]: s.length <= u, [R.O3]: "top" === y }),
                        style: { width: o, maxHeight: 44 * u },
                        ref: (e) => {
                            f.current = e;
                            let n = e?.getScrollerNode() ?? null;
                            (C.current = n), (l.current = n);
                        },
                        ...r,
                        role: void 0,
                        innerRole: "listbox",
                        innerAriaMultiselectable: x,
                        innerId: p,
                        rowHeight: 44,
                        sections: [s.length],
                        sectionHeight: 0,
                        renderRow: (e) => {
                            let { row: l } = e,
                                n = s[l],
                                r = m(n);
                            return (0, t.jsx)(
                                Q,
                                {
                                    multi: x,
                                    "aria-posinset": l,
                                    "aria-setsize": s.length,
                                    isSelected: i.includes(n.value),
                                    isFocused: d === String(n.value),
                                    value: n.value,
                                    label: r,
                                    onSelect: k,
                                    prefix: j(n, { inPill: !1, inDropdown: !0 }),
                                    suffix: N(n, { inPill: !1, inDropdown: !0 }),
                                },
                                n.key ?? l,
                            );
                        },
                        renderSection: () => null,
                    });
                },
            });
}
function B(e, l) {
    if (null == e || null == l) return !1;
    let n = Node.DOCUMENT_POSITION_CONTAINED_BY | Node.DOCUMENT_POSITION_FOLLOWING;
    return (e.compareDocumentPosition(l) & n) === n;
}
function _(e, l, n) {
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
function U(e) {
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
        className: f ? d : R.I6,
        ref: i,
        onKeyDown: p,
        onFocus: (e) => {
            let l = e.target;
            null != i.current && B(i.current, l) && h(l.getAttribute("data-option-pill-value"));
        },
        onBlur: (e) => {
            let l = e.relatedTarget;
            B(i.current, l) || h(null);
        },
        children: l.map((e, l) =>
            (0, t.jsx)(
                "li",
                {
                    className: f ? void 0 : R.kf,
                    children: (0, t.jsx)(X, {
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
                        children: f ? c(e) : (0, t.jsx)("div", { className: R.Qs, children: e.label }),
                    }),
                },
                e.key ?? `${e.label}-${e.value}`,
            ),
        ),
    });
}
function Q(e) {
    let { value: l, label: n, prefix: r, suffix: i, onSelect: s, isSelected: o, isFocused: u, multi: d, ...f } = e,
        p = (0, c.rm)(String(l));
    return (0, t.jsxs)(x.D, {
        tag: "li",
        style: { height: 44 },
        focusProps: { enabled: !1 },
        className: a()(R.uK, { [R.in]: u, [R.m3]: d }),
        onClick: () => s(l),
        ...p,
        ...f,
        "aria-selected": o,
        id: p["data-list-item-id"],
        "data-searchable-select-option": !0,
        role: "option",
        children: [
            (0, t.jsxs)("div", { className: R.Qs, children: [n, "\xa0"] }),
            null != r && (0, t.jsx)("div", { className: R.Pl, children: r }),
            " ",
            null != i && (0, t.jsx)("div", { className: R.ei, children: i }),
            " ",
            (0, t.jsx)($, { isSelected: o, multi: d }),
        ],
    });
}
function $(e) {
    let { isSelected: l, multi: n } = e;
    return n
        ? (0, t.jsx)(y.P, { checked: l, size: 20 })
        : l
          ? (0, t.jsx)(O.y, {
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
function z(e) {
    let { selectedOptions: l, renderOptionPrefix: n, renderOptionSuffix: r, ...i } = e,
        a = l[0],
        s = n?.(a ?? null, { inPill: !1, inDropdown: !1 }),
        o = r?.(a ?? null, { inPill: !1, inDropdown: !1 });
    return (0, t.jsxs)(t.Fragment, {
        children: [
            null != s ? (0, t.jsx)("div", { "aria-hidden": !0, children: s }) : null,
            (0, t.jsx)(W, { selectedOptions: l, ...i }),
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
            renderOptionPrefix: p,
            renderOptionSuffix: m,
            inputClassNames: h,
            hidePills: g,
            ...x
        } = e,
        b = Math.max(n.length, (l ?? "").length),
        v = r.useRef(null),
        { focusPreviousItem: y, focusNextItem: w, focusLastItem: j } = _(v, f, i);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            i.length > 0 &&
                !g &&
                (0, t.jsx)(U, {
                    listRef: v,
                    selectedOptions: i,
                    renderOptionPrefix: p,
                    renderOptionSuffix: m,
                    selectValue: s,
                    focusNextItem: w,
                    focusPreviousItem: y,
                }),
            (0, t.jsx)(W, {
                style: { width: `${b}ch` },
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
                    ["ArrowLeft", "Backspace"].includes(e.key) && ("" === l || null == l) && i.length > 0 ? j() : o(e);
                },
                ...x,
            }),
        ],
    });
}
function W(e) {
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
        loading: j,
        style: N,
        className: C,
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
        "aria-busy": j || w,
        style: N ?? {},
        "aria-activedescendant": null != p ? (0, d.t$)(m, p) : "",
        disabled: c,
        value: l ?? "",
        onChange: (e) => {
            h(e.target.value);
        },
        onFocus: g,
        className: a()(R.Rt, C, { [R.Dy]: b, [R.r9]: c }),
        onKeyDown: v,
        placeholder: "" !== (l ?? "").trim() || (P.length > 0 && !k) ? void 0 : y,
        ref: x,
    });
}
function X(e) {
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
    return (0, t.jsx)(g.vN, {
        offset: 3,
        children: (0, t.jsxs)(j.$n, {
            "data-migration-pending": !0,
            look: j.$n.Looks.BLANK,
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
                (0, t.jsx)(w.A, { children: q.intl.string(q.t.N86XcP) }),
                !u &&
                    (0, t.jsx)(I.P, { size: "custom", color: "currentColor", className: R.gU, width: 14, height: 14 }),
            ],
        }),
    });
}
