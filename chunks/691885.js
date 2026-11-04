var t = l(477900),
    n = l(582128),
    a = l(503698),
    s = l.n(a),
    u = l(494012),
    i = l(612324),
    o = l(646514),
    c = l(603392),
    d = l(890856),
    f = l(452027),
    m = l(140735),
    p = l(941030),
    h = l(116711),
    b = l(431527),
    g = l(834730),
    v = l(991957),
    x = l(44482),
    k = l(601973),
    C = l(483084),
    y = l(641668),
    I = l(715022),
    D = l(470791);
function j(e) {
    let { placeholder: r, selectionMode: l, selectedItems: n, onRemove: a, tagGroupRef: s } = e,
        { i18n: u } = (0, h.G9)();
    return null == n || 0 === n.length
        ? (0, t.jsx)("div", {
              className: D.qf,
              children: (0, t.jsx)(g.E, {
                  variant: "body-md/normal",
                  color: "currentColor",
                  lineClamp: 1,
                  children: r,
              }),
          })
        : "multiple" === l
          ? (0, t.jsx)(b.C, { listRef: s, label: u.SELECTED_TAGS_HEADING, items: n, layout: "inline", onRemove: a })
          : (0, t.jsx)(x.c, { ...n[0], inInput: !0 });
}
l.d(
    r,
    {},
    {
        l: function (e) {
            let { i18n: r } = (0, h.G9)(),
                {
                    selectionMode: l,
                    readOnly: a,
                    autoFocus: b,
                    clearable: g,
                    fullWidth: A,
                    closeOnSelect: E,
                    shouldFocusWrap: M,
                    placeholder: R = r.SELECT_PLACEHOLDER,
                    name: w,
                    form: P,
                    autoComplete: T,
                    maxOptionsVisible: L = 5,
                    fitContent: S = !1,
                    options: q,
                    formatOption: W,
                    onSelectionChange: _,
                    value: G,
                    wrapTags: H = !1,
                    variant: F = "default",
                    ...K
                } = e,
                N = n.useRef(null),
                { fieldProps: O } = (0, f.n)(K),
                { id: $, required: B, label: U, disabled: V } = O,
                {
                    isOpen: z,
                    setIsOpen: X,
                    refs: Z,
                    floatingStyles: J,
                    getReferenceProps: Q,
                    getFloatingProps: Y,
                    transitionStyles: ee,
                } = (0, y.G)(),
                er = n.useId(),
                { options: el, groups: et, loading: en } = (0, C.K)({ active: z, options: q, renderOption: W }),
                ea = n.useRef(null),
                es = n.useRef(null),
                [eu, ei] = n.useState(null),
                eo = null != eu ? (0, I.ZN)(er, eu) : void 0,
                ec = n.useRef(!1),
                ed = n.useRef(!1),
                ef = E ?? "multiple" !== l,
                em = Array.isArray(G) ? G.length > 0 : null != G,
                ep = V || a,
                { measuredWidth: eh, itemsForMeasurement: eb } = (function (e, r) {
                    let { ref: l, width: a } = (0, u.Ay)(),
                        s = n.useId();
                    return {
                        measuredWidth: a,
                        itemsForMeasurement: n.useMemo(
                            () =>
                                (0, t.jsx)("div", {
                                    ref: l,
                                    style: {
                                        position: "absolute",
                                        visibility: "hidden",
                                        pointerEvents: "none",
                                        width: "max-content",
                                    },
                                    "aria-hidden": "true",
                                    children: (0, t.jsx)(p.q, {
                                        id: `measurement-${s}`,
                                        required: !1,
                                        items: e,
                                        selectionMode: r,
                                        selectedItems: [],
                                        onSelectionChange: () => {},
                                        shouldFocusWrap: !1,
                                        renderListItem: (e) => (0, t.jsx)(x.c, { ...e }),
                                    }),
                                }),
                            [e, r, s, l],
                        ),
                    };
                })(el, l),
                eg = n.useCallback(() => {
                    ep || X(!z);
                }, [ep, X, z]),
                ev = n.useCallback(
                    (e) => {
                        z && 0 === e.button && e.preventDefault();
                    },
                    [z],
                ),
                ex = n.useCallback(() => {
                    (X(!1), ea.current?.focus());
                }, [X]),
                ek = n.useCallback(() => {
                    !1 !== g && ("multiple" === l ? _([]) : _(null), ea.current?.focus());
                }, [_, l, g]);
            n.useEffect(() => {
                b && ea.current?.focus();
            }, [b]);
            let eC = n.useRef(null),
                ey = n.useCallback(
                    (e) => {
                        if (!eC.current?.contains(e.relatedTarget)) {
                            if (ed.current) {
                                ed.current = !1;
                                return;
                            }
                            if (z && "single" === l && null != eu) {
                                let e = el[eu];
                                null != e && !0 !== e.disabled && _(e.value);
                            }
                            z && X(!1);
                        }
                    },
                    [z, l, eu, el, _, X],
                ),
                eI = n.useMemo(() => {
                    let e = Array.isArray(G) ? G : [G];
                    return el.filter((r) => (0, I.fI)(r.value, e));
                }, [G, el]),
                eD = n.useCallback(
                    (e) => {
                        if (ep) return;
                        let r = Array.from(e);
                        ("multiple" === l && r.length < 1
                            ? _([])
                            : "multiple" === l
                              ? _(r.map((e) => e.value))
                              : _(r[0]?.value),
                            ef && z && ex());
                    },
                    [ep, l, _, ef, ex, z],
                ),
                { activeIndex: ej, handleKeyDown: eA } = (0, p.l)(!0, el),
                eE = n.useRef(null);
            n.useEffect(() => {
                let e = ej !== eE.current;
                ((eE.current = ej), null != ej && e && (ei(ej), z || ((ec.current = !0), X(!0))));
            }, [ej, z, X]);
            let eM = n.useCallback(
                    (e) => {
                        if (ep) return;
                        let r = el.length;
                        switch (e.key) {
                            case "ArrowDown":
                            case "PageDown": {
                                let l = "PageDown" === e.key ? 10 : 1;
                                if (0 === r) return;
                                if ((e.preventDefault(), !z || e.altKey)) {
                                    z || X(!0);
                                    return;
                                }
                                ei((e) => {
                                    if (null === e) return 0;
                                    let t = e + l;
                                    return t >= r && M ? 0 : Math.min(t, r - 1);
                                });
                                break;
                            }
                            case "ArrowUp":
                            case "PageUp": {
                                let l = "PageUp" === e.key ? 10 : 1;
                                if (0 === r) return;
                                if ((e.preventDefault(), e.altKey && z)) {
                                    if (null != eu) {
                                        let e = el[eu];
                                        if (null != e && !0 !== e.disabled) {
                                            eD([e]);
                                            break;
                                        }
                                    }
                                    ex();
                                    break;
                                }
                                if (!z) return void X(!0);
                                ei((e) => {
                                    if (null === e) return 0;
                                    let t = e - l;
                                    return t < 0 && M ? r - 1 : Math.max(t, 0);
                                });
                                break;
                            }
                            case "Enter":
                            case " ":
                                if ((e.preventDefault(), e.stopPropagation(), !z)) return void X(!0);
                                if (null == eu || eu > r - 1) return;
                                {
                                    let e = el[eu];
                                    if (null == e || !0 === e.disabled) return;
                                    eD("single" === l ? [e] : (0, I.qH)(l, eI, e));
                                }
                                break;
                            case "Home":
                                if ((e.preventDefault(), 0 === r)) return;
                                (ei(0), z || ((ec.current = !0), X(!0)));
                                break;
                            case "End":
                                if ((e.preventDefault(), 0 === r)) return;
                                (ei(r - 1), z || ((ec.current = !0), X(!0)));
                                break;
                            case "Tab":
                                if (z && "single" === l && null != eu) {
                                    let e = el[eu];
                                    null != e && !0 !== e.disabled && _(e.value);
                                }
                                ((ed.current = !0), X(!1));
                                break;
                            case "ArrowLeft":
                                (e.preventDefault(), N.current?.firstChild?.focus());
                                break;
                            case "ArrowRight":
                                (e.preventDefault(), N.current?.lastChild?.focus());
                                break;
                            case "Backspace":
                                em && (e.preventDefault(), N.current?.lastChild?.focus());
                                break;
                            case "Escape":
                                z
                                    ? (e.preventDefault(), e.stopPropagation(), ex())
                                    : em && g && (e.preventDefault(), e.stopPropagation(), ek());
                                break;
                            default:
                                eA(e);
                        }
                    },
                    [ep, z, el, M, l, eI, eu, _, eD, ex, ek, eA, em, g, X],
                ),
                eR = n.useMemo(() => {
                    if (!A || S)
                        return `${Math.max(eh ?? 200, 200) * ("multiple" === l ? 1.5 : 1) + 24 * !!g + 36 + 12}px`;
                }, [A, S, eh, l, g]),
                ew = "multiple" === l && eI.length > 0,
                eP = n.useRef(null);
            n.useEffect(() => {
                (clearTimeout(eP.current),
                    ew &&
                        !H &&
                        (eP.current = setTimeout(() => {
                            N.current?.lastElementChild?.scrollIntoView({
                                behavior: "smooth",
                                inline: "end",
                                block: "end",
                            });
                        }, 10)));
            }, [eI, ew, H]);
            let eT = (0, i.A)(es, Z.setReference),
                eL = n.useCallback(
                    (e) => {
                        if (ep) return;
                        let r = Array.from(e)[0],
                            l = eI.filter((e) => e.id !== r);
                        (eD(l), 0 === l.length && ea.current?.focus());
                    },
                    [eD, eI, ep],
                ),
                eS = Math.max(
                    el.findIndex((e) => e.id === eI[eI.length - 1]?.id),
                    0,
                ),
                eq = n.useRef(!1);
            n.useEffect(() => {
                en || !z || eq.current
                    ? z || ((eq.current = !1), ei(null), (ec.current = !1))
                    : ((eq.current = !0),
                      ec.current || ei(el.length > 0 ? eS : null),
                      (ec.current = !1),
                      ea.current?.focus());
            }, [en, z, eS, el.length]);
            let eW = (0, c.r)(o.A.modules.select.MAX_WIDTH),
                e_ = n.useMemo(
                    () =>
                        S && null != eR
                            ? { horizontalControlColumnWidth: eR }
                            : { horizontalControlColumnWidth: `min(${eW}px, auto)` },
                    [S, eR, eW],
                );
            return (0, t.jsx)(f.D, {
                ...O,
                "data-mana-component": "select",
                layoutConfig: e_,
                children: (e) =>
                    (0, t.jsx)("div", {
                        ref: eC,
                        style: { width: A ? "100%" : `minmax(${eR}px, 100%)` },
                        children: (0, t.jsxs)(t.Fragment, {
                            children: [
                                (0, t.jsx)(k.p, {
                                    ref: eT,
                                    disabled: V,
                                    readOnly: a,
                                    loading: en,
                                    clearable: g,
                                    fullWidth: A,
                                    isOpen: z,
                                    isInert: ep,
                                    hasValue: em,
                                    hasError: e?.errorMessageId != null,
                                    handleToggle: eg,
                                    handleClear: ek,
                                    variant: F,
                                    ...Q(),
                                    children: (0, t.jsxs)(d.s, {
                                        "aria-label": U,
                                        buttonRef: ea,
                                        buttonProps: {
                                            ...(null != $ ? { id: $ } : {}),
                                            style: { marginLeft: -4 },
                                            role: "combobox",
                                            "aria-haspopup": "listbox",
                                            "aria-controls": z ? er : void 0,
                                            "aria-expanded": z,
                                            "aria-activedescendant": eo,
                                            "aria-errormessage": e?.errorMessageId,
                                            "aria-invalid": e?.errorMessageId != null,
                                            "aria-required": B,
                                            children: (0, t.jsx)(m.A, { children: eI.map((e) => e.label).join(", ") }),
                                        },
                                        focusProps: { ringTarget: es },
                                        className: s()(D.L5, { [D.kj]: H, [D.M8]: "multiple" === l }),
                                        onClick: eg,
                                        onMouseDown: ev,
                                        onKeyDown: eM,
                                        onBlur: ey,
                                        "aria-describedby": e?.describedById,
                                        children: [
                                            (0, t.jsxs)(m.A, { children: [U, ", "] }),
                                            (0, t.jsx)(j, {
                                                tagGroupRef: N,
                                                placeholder: R,
                                                selectionMode: l,
                                                selectedItems: eI,
                                                onRemove: eL,
                                            }),
                                        ],
                                    }),
                                }),
                                (0, t.jsx)(v.H, {
                                    name: w,
                                    form: P,
                                    disabled: ep,
                                    autoComplete: T,
                                    selectionMode: l,
                                    selectedItems: eI,
                                    onSelectionChange: eD,
                                    listItems: el,
                                }),
                                (!A || S) && eb,
                                !ep &&
                                    z &&
                                    (0, t.jsx)("div", {
                                        ref: Z.setFloating,
                                        className: D.S_,
                                        ...Y(),
                                        style: { ...J, ...ee },
                                        children: (0, t.jsx)(p.q, {
                                            id: er,
                                            tabIndex: -1,
                                            required: B,
                                            items: el,
                                            groups: et,
                                            selectionMode: l,
                                            selectedItems: eI,
                                            onSelectionChange: eD,
                                            shouldFocusWrap: M,
                                            activeDescendantIndex: eu,
                                            renderListItem: (e) => (0, t.jsx)(x.c, { ...e }),
                                            maxVisibleItems: L,
                                            loading: en,
                                        }),
                                    }),
                            ],
                        }),
                    }),
            });
        },
    },
);
