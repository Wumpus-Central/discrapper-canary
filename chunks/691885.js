"use strict";
n.d(t, { l: () => R });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(494012),
    l = n(612324),
    d = n(661531),
    _ = n(603392),
    u = n(890856),
    c = n(452027),
    E = n(140735),
    h = n(649998),
    m = n(460890),
    f = n(340351),
    g = n(834730),
    p = n(991957),
    A = n(44482),
    I = n(601973),
    T = n(483084),
    S = n(641668),
    N = n(715022),
    C = n(930856);
function R(e) {
    let { i18n: t } = (0, m.G9)(),
        {
            selectionMode: n,
            readOnly: s,
            autoFocus: f,
            clearable: g,
            fullWidth: R,
            closeOnSelect: y = !0,
            shouldFocusWrap: v,
            placeholder: D = t.SELECT_PLACEHOLDER,
            name: L,
            form: b,
            autoComplete: w,
            maxOptionsVisible: P = 5,
            options: k,
            formatOption: M,
            onSelectionChange: U,
            value: x,
            wrapTags: G = !1,
            variant: V = "default",
            ...F
        } = e,
        B = r.useRef(null),
        { fieldProps: H } = (0, c.n)(F),
        { id: j, required: W, label: Y, disabled: K } = H,
        {
            isOpen: z,
            setIsOpen: $,
            refs: q,
            floatingStyles: X,
            getReferenceProps: Z,
            getFloatingProps: Q,
            transitionStyles: J,
        } = (0, S.G)(),
        ee = r.useId(),
        { options: et, loading: en } = (0, T.K)({ active: z, options: k, renderOption: M }),
        ei = r.useRef(null),
        er = r.useRef(null),
        [es, ea] = r.useState(null),
        eo = null != es ? (0, N.ZN)(ee, es) : void 0,
        el = r.useRef(!1),
        ed = r.useRef(!1),
        e_ = y ?? "multiple" !== n,
        eu = Array.isArray(x) ? x.length > 0 : null != x,
        ec = K || s,
        { measuredWidth: eE, itemsForMeasurement: eh } = (function (e, t) {
            let { ref: n, width: s } = (0, o.Ay)(),
                a = r.useId();
            return {
                measuredWidth: s,
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
                            children: (0, i.jsx)(h.q, {
                                id: `measurement-${a}`,
                                required: !1,
                                items: e,
                                selectionMode: t,
                                selectedItems: [],
                                onSelectionChange: () => {},
                                shouldFocusWrap: !1,
                                renderListItem: (e) => (0, i.jsx)(A.c, { ...e }),
                            }),
                        }),
                    [e, t, a, n],
                ),
            };
        })(et, n),
        em = r.useCallback(() => {
            ec || $(!z);
        }, [ec, $, z]),
        ef = r.useCallback(() => {
            $(!1), ei.current?.focus();
        }, [$]),
        eg = r.useCallback(() => {
            !1 !== g && ("multiple" === n ? U([]) : U(null), ei.current?.focus());
        }, [U, n, g]);
    r.useEffect(() => {
        f && ei.current?.focus();
    }, [f]);
    let ep = r.useRef(null),
        eA = r.useCallback(
            (e) => {
                if (!ep.current?.contains(e.relatedTarget)) {
                    if (ed.current) {
                        ed.current = !1;
                        return;
                    }
                    if (z && "single" === n && null != es) {
                        let e = et[es];
                        null != e && !0 !== e.disabled && U(e.value);
                    }
                    z && $(!1);
                }
            },
            [z, n, es, et, U, $],
        ),
        eI = r.useMemo(() => {
            let e = Array.isArray(x) ? x : [x];
            return et.filter((t) => (0, N.fI)(t.value, e));
        }, [x, et]),
        eT = r.useCallback(
            (e) => {
                if (ec) return;
                let t = Array.from(e);
                "multiple" === n && t.length < 1 ? U([]) : "multiple" === n ? U(t.map((e) => e.value)) : U(t[0]?.value),
                    e_ && z && ef();
            },
            [ec, n, U, e_, ef, z],
        ),
        { activeIndex: eS, handleKeyDown: eN } = (0, h.l)(!0, et),
        eC = r.useRef(null);
    r.useEffect(() => {
        let e = eS !== eC.current;
        (eC.current = eS), null != eS && e && (ea(eS), z || ((el.current = !0), $(!0)));
    }, [eS, z, $]);
    let eR = r.useCallback(
            (e) => {
                if (ec) return;
                let t = et.length;
                switch (e.key) {
                    case "ArrowDown":
                    case "PageDown": {
                        let n = "PageDown" === e.key ? 10 : 1;
                        if (0 === t) return;
                        if ((e.preventDefault(), !z || e.altKey)) {
                            z || $(!0);
                            return;
                        }
                        ea((e) => {
                            if (null === e) return 0;
                            let i = e + n;
                            return i >= t && v ? 0 : Math.min(i, t - 1);
                        });
                        break;
                    }
                    case "ArrowUp":
                    case "PageUp": {
                        let n = "PageUp" === e.key ? 10 : 1;
                        if (0 === t) return;
                        if ((e.preventDefault(), e.altKey && z)) {
                            if (null != es) {
                                let e = et[es];
                                if (null != e && !0 !== e.disabled) {
                                    eT([e]);
                                    break;
                                }
                            }
                            ef();
                            break;
                        }
                        if (!z) return void $(!0);
                        ea((e) => {
                            if (null === e) return 0;
                            let i = e - n;
                            return i < 0 && v ? t - 1 : Math.max(i, 0);
                        });
                        break;
                    }
                    case "Enter":
                    case " ":
                        if ((e.preventDefault(), e.stopPropagation(), !z)) return void $(!0);
                        if (null == es || es > t - 1) return;
                        {
                            let e = et[es];
                            if (null == e || !0 === e.disabled) return;
                            eT("single" === n ? [e] : (0, N.qH)(n, eI, e));
                        }
                        break;
                    case "Home":
                        if ((e.preventDefault(), 0 === t)) return;
                        ea(0), z || ((el.current = !0), $(!0));
                        break;
                    case "End":
                        if ((e.preventDefault(), 0 === t)) return;
                        ea(t - 1), z || ((el.current = !0), $(!0));
                        break;
                    case "Tab":
                        if (z && "single" === n && null != es) {
                            let e = et[es];
                            null != e && !0 !== e.disabled && U(e.value);
                        }
                        (ed.current = !0), $(!1);
                        break;
                    case "ArrowLeft":
                        e.preventDefault(), B.current?.firstChild?.focus();
                        break;
                    case "ArrowRight":
                        e.preventDefault(), B.current?.lastChild?.focus();
                        break;
                    case "Backspace":
                        eu && (e.preventDefault(), B.current?.lastChild?.focus());
                        break;
                    case "Escape":
                        z
                            ? (e.preventDefault(), e.stopPropagation(), ef())
                            : eu && g && (e.preventDefault(), e.stopPropagation(), eg());
                        break;
                    default:
                        eN(e);
                }
            },
            [ec, z, et, v, n, eI, es, U, eT, ef, eg, eN, eu, g, $],
        ),
        eO = r.useMemo(() => {
            if (!R) return `${Math.max(eE ?? 200, 200) * ("multiple" === n ? 1.5 : 1) + 24 * !!g + 36 + 12}px`;
        }, [R, eE, n, g]),
        ey = "multiple" === n && eI.length > 0,
        ev = r.useRef(null);
    r.useEffect(() => {
        clearTimeout(ev.current),
            ey &&
                !G &&
                (ev.current = setTimeout(() => {
                    B.current?.lastElementChild?.scrollIntoView({ behavior: "smooth", inline: "end", block: "end" });
                }, 10));
    }, [eI, ey, G]);
    let eD = (0, l.A)(er, q.setReference),
        eL = r.useCallback(
            (e) => {
                if (ec) return;
                let t = Array.from(e)[0],
                    n = eI.filter((e) => e.id !== t);
                eT(n), 0 === n.length && ei.current?.focus();
            },
            [eT, eI, ec],
        ),
        eb = Math.max(
            et.findIndex((e) => e.id === eI[eI.length - 1]?.id),
            0,
        ),
        ew = r.useRef(!1);
    r.useEffect(() => {
        en || !z || ew.current
            ? z || ((ew.current = !1), ea(null), (el.current = !1))
            : ((ew.current = !0), el.current || ea(et.length > 0 ? eb : null), (el.current = !1), ei.current?.focus());
    }, [en, z, eb, et.length]);
    let eP = (0, _.r)(d.A.modules.select.MAX_WIDTH),
        ek = r.useMemo(() => ({ horizontalControlColumnWidth: `min(${eP}px, auto)` }), [eP]);
    return (0, i.jsx)(c.D, {
        ...H,
        "data-mana-component": "select",
        layoutConfig: ek,
        children: (e) =>
            (0, i.jsx)("div", {
                ref: ep,
                style: { width: R ? "100%" : `minmax(${eO}px, 100%)` },
                children: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(I.p, {
                            ref: eD,
                            disabled: K,
                            readOnly: s,
                            loading: en,
                            clearable: g,
                            fullWidth: R,
                            isOpen: z,
                            isInert: ec,
                            hasValue: eu,
                            hasError: e?.errorMessageId != null,
                            handleToggle: em,
                            handleClear: eg,
                            variant: V,
                            ...Z(),
                            children: (0, i.jsxs)(u.s, {
                                "aria-label": Y,
                                buttonRef: ei,
                                buttonProps: {
                                    ...(null != j ? { id: j } : {}),
                                    style: { marginLeft: -4 },
                                    role: "combobox",
                                    "aria-haspopup": "listbox",
                                    "aria-controls": z ? ee : void 0,
                                    "aria-expanded": z,
                                    "aria-activedescendant": eo,
                                    "aria-errormessage": e?.errorMessageId,
                                    "aria-invalid": e?.errorMessageId != null,
                                    children: (0, i.jsx)(E.A, { children: eI.map((e) => e.label).join(", ") }),
                                },
                                focusProps: { ringTarget: er },
                                className: a()(C.L5, { [C.kj]: G, [C.M8]: "multiple" === n }),
                                onClick: em,
                                onKeyDown: eR,
                                onBlur: eA,
                                "aria-describedby": e?.describedById,
                                children: [
                                    (0, i.jsxs)(E.A, { children: [Y, ", "] }),
                                    (0, i.jsx)(O, {
                                        tagGroupRef: B,
                                        placeholder: D,
                                        selectionMode: n,
                                        selectedItems: eI,
                                        onRemove: eL,
                                    }),
                                ],
                            }),
                        }),
                        (0, i.jsx)(p.H, {
                            name: L,
                            form: b,
                            disabled: ec,
                            autoComplete: w,
                            selectionMode: n,
                            selectedItems: eI,
                            onSelectionChange: eT,
                            listItems: et,
                        }),
                        !R && eh,
                        !ec &&
                            z &&
                            (0, i.jsx)("div", {
                                ref: q.setFloating,
                                className: C.S_,
                                ...Q(),
                                style: { ...X, ...J },
                                children: (0, i.jsx)(h.q, {
                                    id: ee,
                                    tabIndex: -1,
                                    required: W,
                                    items: et,
                                    selectionMode: n,
                                    selectedItems: eI,
                                    onSelectionChange: eT,
                                    shouldFocusWrap: v,
                                    activeDescendantIndex: es,
                                    renderListItem: (e) => (0, i.jsx)(A.c, { ...e }),
                                    maxVisibleItems: P,
                                    loading: en,
                                }),
                            }),
                    ],
                }),
            }),
    });
}
function O(e) {
    let { placeholder: t, selectionMode: n, selectedItems: r, onRemove: s, tagGroupRef: a } = e,
        { i18n: o } = (0, m.G9)();
    return null == r || 0 === r.length
        ? (0, i.jsx)("div", {
              className: C.qf,
              children: (0, i.jsx)(g.E, {
                  variant: "text-md/normal",
                  color: "currentColor",
                  lineClamp: 1,
                  children: t,
              }),
          })
        : "multiple" === n
          ? (0, i.jsx)(f.C, { listRef: a, label: o.SELECTED_TAGS_HEADING, items: r, layout: "inline", onRemove: s })
          : (0, i.jsx)(A.c, { ...r[0], inInput: !0 });
}
