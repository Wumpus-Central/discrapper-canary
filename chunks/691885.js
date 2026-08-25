"use strict";
n.d(t, { l: () => R });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(494012),
    o = n(612324),
    d = n(661531),
    c = n(603392),
    u = n(890856),
    _ = n(452027),
    E = n(140735),
    A = n(540637),
    h = n(460890),
    I = n(340351),
    f = n(834730),
    p = n(991957),
    T = n(44482),
    m = n(601973),
    g = n(483084),
    S = n(641668),
    N = n(715022),
    C = n(470791);
function R(e) {
    let { i18n: t } = (0, h.G9)(),
        {
            selectionMode: n,
            readOnly: a,
            autoFocus: I,
            clearable: f,
            fullWidth: R,
            closeOnSelect: L = !0,
            shouldFocusWrap: y,
            placeholder: D = t.SELECT_PLACEHOLDER,
            name: v,
            form: b,
            autoComplete: M,
            maxOptionsVisible: P = 5,
            fitContent: U = !1,
            options: w,
            formatOption: G,
            onSelectionChange: x,
            value: k,
            wrapTags: F = !1,
            variant: V = "default",
            ...B
        } = e,
        H = r.useRef(null),
        { fieldProps: j } = (0, _.n)(B),
        { id: W, required: Y, label: K, disabled: $ } = j,
        {
            isOpen: z,
            setIsOpen: Z,
            refs: q,
            floatingStyles: X,
            getReferenceProps: Q,
            getFloatingProps: J,
            transitionStyles: ee,
        } = (0, S.G)(),
        et = r.useId(),
        { options: en, groups: ei, loading: er } = (0, g.K)({ active: z, options: w, renderOption: G }),
        ea = r.useRef(null),
        es = r.useRef(null),
        [el, eo] = r.useState(null),
        ed = null != el ? (0, N.ZN)(et, el) : void 0,
        ec = r.useRef(!1),
        eu = r.useRef(!1),
        e_ = L ?? "multiple" !== n,
        eE = Array.isArray(k) ? k.length > 0 : null != k,
        eA = $ || a,
        { measuredWidth: eh, itemsForMeasurement: eI } = (function (e, t) {
            let { ref: n, width: a } = (0, l.Ay)(),
                s = r.useId();
            return {
                measuredWidth: a,
                itemsForMeasurement: r.useMemo(
                    () =>
                        (0, i.jsx)("div", {
                            ref: n,
                            style: {
                                position: "absolute",
                                visibility: "hidden",
                                pointerEvents: "none",
                                width: "max-content",
                            },
                            "aria-hidden": "true",
                            children: (0, i.jsx)(A.q, {
                                id: `measurement-${s}`,
                                required: !1,
                                items: e,
                                selectionMode: t,
                                selectedItems: [],
                                onSelectionChange: () => {},
                                shouldFocusWrap: !1,
                                renderListItem: (e) => (0, i.jsx)(T.c, { ...e }),
                            }),
                        }),
                    [e, t, s, n],
                ),
            };
        })(en, n),
        ef = r.useCallback(() => {
            eA || Z(!z);
        }, [eA, Z, z]),
        ep = r.useCallback(
            (e) => {
                z && 0 === e.button && e.preventDefault();
            },
            [z],
        ),
        eT = r.useCallback(() => {
            Z(!1), ea.current?.focus();
        }, [Z]),
        em = r.useCallback(() => {
            !1 !== f && ("multiple" === n ? x([]) : x(null), ea.current?.focus());
        }, [x, n, f]);
    r.useEffect(() => {
        I && ea.current?.focus();
    }, [I]);
    let eg = r.useRef(null),
        eS = r.useCallback(
            (e) => {
                if (!eg.current?.contains(e.relatedTarget)) {
                    if (eu.current) {
                        eu.current = !1;
                        return;
                    }
                    if (z && "single" === n && null != el) {
                        let e = en[el];
                        null != e && !0 !== e.disabled && x(e.value);
                    }
                    z && Z(!1);
                }
            },
            [z, n, el, en, x, Z],
        ),
        eN = r.useMemo(() => {
            let e = Array.isArray(k) ? k : [k];
            return en.filter((t) => (0, N.fI)(t.value, e));
        }, [k, en]),
        eC = r.useCallback(
            (e) => {
                if (eA) return;
                let t = Array.from(e);
                "multiple" === n && t.length < 1 ? x([]) : "multiple" === n ? x(t.map((e) => e.value)) : x(t[0]?.value),
                    e_ && z && eT();
            },
            [eA, n, x, e_, eT, z],
        ),
        { activeIndex: eR, handleKeyDown: eO } = (0, A.l)(!0, en),
        eL = r.useRef(null);
    r.useEffect(() => {
        let e = eR !== eL.current;
        (eL.current = eR), null != eR && e && (eo(eR), z || ((ec.current = !0), Z(!0)));
    }, [eR, z, Z]);
    let ey = r.useCallback(
            (e) => {
                if (eA) return;
                let t = en.length;
                switch (e.key) {
                    case "ArrowDown":
                    case "PageDown": {
                        let n = "PageDown" === e.key ? 10 : 1;
                        if (0 === t) return;
                        if ((e.preventDefault(), !z || e.altKey)) {
                            z || Z(!0);
                            return;
                        }
                        eo((e) => {
                            if (null === e) return 0;
                            let i = e + n;
                            return i >= t && y ? 0 : Math.min(i, t - 1);
                        });
                        break;
                    }
                    case "ArrowUp":
                    case "PageUp": {
                        let n = "PageUp" === e.key ? 10 : 1;
                        if (0 === t) return;
                        if ((e.preventDefault(), e.altKey && z)) {
                            if (null != el) {
                                let e = en[el];
                                if (null != e && !0 !== e.disabled) {
                                    eC([e]);
                                    break;
                                }
                            }
                            eT();
                            break;
                        }
                        if (!z) return void Z(!0);
                        eo((e) => {
                            if (null === e) return 0;
                            let i = e - n;
                            return i < 0 && y ? t - 1 : Math.max(i, 0);
                        });
                        break;
                    }
                    case "Enter":
                    case " ":
                        if ((e.preventDefault(), e.stopPropagation(), !z)) return void Z(!0);
                        if (null == el || el > t - 1) return;
                        {
                            let e = en[el];
                            if (null == e || !0 === e.disabled) return;
                            eC("single" === n ? [e] : (0, N.qH)(n, eN, e));
                        }
                        break;
                    case "Home":
                        if ((e.preventDefault(), 0 === t)) return;
                        eo(0), z || ((ec.current = !0), Z(!0));
                        break;
                    case "End":
                        if ((e.preventDefault(), 0 === t)) return;
                        eo(t - 1), z || ((ec.current = !0), Z(!0));
                        break;
                    case "Tab":
                        if (z && "single" === n && null != el) {
                            let e = en[el];
                            null != e && !0 !== e.disabled && x(e.value);
                        }
                        (eu.current = !0), Z(!1);
                        break;
                    case "ArrowLeft":
                        e.preventDefault(), H.current?.firstChild?.focus();
                        break;
                    case "ArrowRight":
                        e.preventDefault(), H.current?.lastChild?.focus();
                        break;
                    case "Backspace":
                        eE && (e.preventDefault(), H.current?.lastChild?.focus());
                        break;
                    case "Escape":
                        z
                            ? (e.preventDefault(), e.stopPropagation(), eT())
                            : eE && f && (e.preventDefault(), e.stopPropagation(), em());
                        break;
                    default:
                        eO(e);
                }
            },
            [eA, z, en, y, n, eN, el, x, eC, eT, em, eO, eE, f, Z],
        ),
        eD = r.useMemo(() => {
            if (!R || U) return `${Math.max(eh ?? 200, 200) * ("multiple" === n ? 1.5 : 1) + 24 * !!f + 36 + 12}px`;
        }, [R, U, eh, n, f]),
        ev = "multiple" === n && eN.length > 0,
        eb = r.useRef(null);
    r.useEffect(() => {
        clearTimeout(eb.current),
            ev &&
                !F &&
                (eb.current = setTimeout(() => {
                    H.current?.lastElementChild?.scrollIntoView({ behavior: "smooth", inline: "end", block: "end" });
                }, 10));
    }, [eN, ev, F]);
    let eM = (0, o.A)(es, q.setReference),
        eP = r.useCallback(
            (e) => {
                if (eA) return;
                let t = Array.from(e)[0],
                    n = eN.filter((e) => e.id !== t);
                eC(n), 0 === n.length && ea.current?.focus();
            },
            [eC, eN, eA],
        ),
        eU = Math.max(
            en.findIndex((e) => e.id === eN[eN.length - 1]?.id),
            0,
        ),
        ew = r.useRef(!1);
    r.useEffect(() => {
        er || !z || ew.current
            ? z || ((ew.current = !1), eo(null), (ec.current = !1))
            : ((ew.current = !0), ec.current || eo(en.length > 0 ? eU : null), (ec.current = !1), ea.current?.focus());
    }, [er, z, eU, en.length]);
    let eG = (0, c.r)(d.A.modules.select.MAX_WIDTH),
        ex = r.useMemo(
            () =>
                U && null != eD
                    ? { horizontalControlColumnWidth: eD }
                    : { horizontalControlColumnWidth: `min(${eG}px, auto)` },
            [U, eD, eG],
        );
    return (0, i.jsx)(_.D, {
        ...j,
        "data-mana-component": "select",
        layoutConfig: ex,
        children: (e) =>
            (0, i.jsx)("div", {
                ref: eg,
                style: { width: R ? "100%" : `minmax(${eD}px, 100%)` },
                children: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(m.p, {
                            ref: eM,
                            disabled: $,
                            readOnly: a,
                            loading: er,
                            clearable: f,
                            fullWidth: R,
                            isOpen: z,
                            isInert: eA,
                            hasValue: eE,
                            hasError: e?.errorMessageId != null,
                            handleToggle: ef,
                            handleClear: em,
                            variant: V,
                            ...Q(),
                            children: (0, i.jsxs)(u.s, {
                                "aria-label": K,
                                buttonRef: ea,
                                buttonProps: {
                                    ...(null != W ? { id: W } : {}),
                                    style: { marginLeft: -4 },
                                    role: "combobox",
                                    "aria-haspopup": "listbox",
                                    "aria-controls": z ? et : void 0,
                                    "aria-expanded": z,
                                    "aria-activedescendant": ed,
                                    "aria-errormessage": e?.errorMessageId,
                                    "aria-invalid": e?.errorMessageId != null,
                                    "aria-required": Y,
                                    children: (0, i.jsx)(E.A, { children: eN.map((e) => e.label).join(", ") }),
                                },
                                focusProps: { ringTarget: es },
                                className: s()(C.L5, { [C.kj]: F, [C.M8]: "multiple" === n }),
                                onClick: ef,
                                onMouseDown: ep,
                                onKeyDown: ey,
                                onBlur: eS,
                                "aria-describedby": e?.describedById,
                                children: [
                                    (0, i.jsxs)(E.A, { children: [K, ", "] }),
                                    (0, i.jsx)(O, {
                                        tagGroupRef: H,
                                        placeholder: D,
                                        selectionMode: n,
                                        selectedItems: eN,
                                        onRemove: eP,
                                    }),
                                ],
                            }),
                        }),
                        (0, i.jsx)(p.H, {
                            name: v,
                            form: b,
                            disabled: eA,
                            autoComplete: M,
                            selectionMode: n,
                            selectedItems: eN,
                            onSelectionChange: eC,
                            listItems: en,
                        }),
                        (!R || U) && eI,
                        !eA &&
                            z &&
                            (0, i.jsx)("div", {
                                ref: q.setFloating,
                                className: C.S_,
                                ...J(),
                                style: { ...X, ...ee },
                                children: (0, i.jsx)(A.q, {
                                    id: et,
                                    tabIndex: -1,
                                    required: Y,
                                    items: en,
                                    groups: ei,
                                    selectionMode: n,
                                    selectedItems: eN,
                                    onSelectionChange: eC,
                                    shouldFocusWrap: y,
                                    activeDescendantIndex: el,
                                    renderListItem: (e) => (0, i.jsx)(T.c, { ...e }),
                                    maxVisibleItems: P,
                                    loading: er,
                                }),
                            }),
                    ],
                }),
            }),
    });
}
function O(e) {
    let { placeholder: t, selectionMode: n, selectedItems: r, onRemove: a, tagGroupRef: s } = e,
        { i18n: l } = (0, h.G9)();
    return null == r || 0 === r.length
        ? (0, i.jsx)("div", {
              className: C.qf,
              children: (0, i.jsx)(f.E, {
                  variant: "text-md/normal",
                  color: "currentColor",
                  lineClamp: 1,
                  children: t,
              }),
          })
        : "multiple" === n
          ? (0, i.jsx)(I.C, { listRef: s, label: l.SELECTED_TAGS_HEADING, items: r, layout: "inline", onRemove: a })
          : (0, i.jsx)(T.c, { ...r[0], inInput: !0 });
}
