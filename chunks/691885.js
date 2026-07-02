"use strict";
n.d(t, { l: () => y });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(494012),
    l = n(612324),
    u = n(661531),
    d = n(603392),
    c = n(890856),
    _ = n(452027),
    h = n(140735),
    f = n(540637),
    E = n(460890),
    p = n(528265),
    m = n(834730),
    g = n(991957),
    A = n(44482),
    I = n(601973),
    T = n(483084),
    S = n(641668),
    N = n(715022),
    C = n(930856);
function y(e) {
    let { i18n: t } = (0, E.G9)(),
        {
            selectionMode: n,
            readOnly: s,
            autoFocus: p,
            clearable: m,
            fullWidth: y,
            closeOnSelect: R = !0,
            shouldFocusWrap: O,
            placeholder: b = t.SELECT_PLACEHOLDER,
            name: L,
            form: D,
            autoComplete: P,
            maxOptionsVisible: w = 5,
            fitContent: M = !1,
            options: x,
            formatOption: U,
            onSelectionChange: k,
            value: G,
            wrapTags: V = !1,
            variant: F = "default",
            ...B
        } = e,
        j = r.useRef(null),
        { fieldProps: H } = (0, _.n)(B),
        { id: W, required: Y, label: K, disabled: $ } = H,
        {
            isOpen: z,
            setIsOpen: q,
            refs: Z,
            floatingStyles: X,
            getReferenceProps: Q,
            getFloatingProps: J,
            transitionStyles: ee,
        } = (0, S.G)(),
        et = r.useId(),
        { options: en, groups: ei, loading: er } = (0, T.K)({ active: z, options: x, renderOption: U }),
        es = r.useRef(null),
        ea = r.useRef(null),
        [eo, el] = r.useState(null),
        eu = null != eo ? (0, N.ZN)(et, eo) : void 0,
        ed = r.useRef(!1),
        ec = r.useRef(!1),
        e_ = R ?? "multiple" !== n,
        eh = Array.isArray(G) ? G.length > 0 : null != G,
        ef = $ || s,
        { measuredWidth: eE, itemsForMeasurement: ep } = (function (e, t) {
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
                            children: (0, i.jsx)(f.q, {
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
        })(en, n),
        em = r.useCallback(() => {
            ef || q(!z);
        }, [ef, q, z]),
        eg = r.useCallback(
            (e) => {
                z && 0 === e.button && e.preventDefault();
            },
            [z],
        ),
        eA = r.useCallback(() => {
            q(!1), es.current?.focus();
        }, [q]),
        eI = r.useCallback(() => {
            !1 !== m && ("multiple" === n ? k([]) : k(null), es.current?.focus());
        }, [k, n, m]);
    r.useEffect(() => {
        p && es.current?.focus();
    }, [p]);
    let eT = r.useRef(null),
        eS = r.useCallback(
            (e) => {
                if (!eT.current?.contains(e.relatedTarget)) {
                    if (ec.current) {
                        ec.current = !1;
                        return;
                    }
                    if (z && "single" === n && null != eo) {
                        let e = en[eo];
                        null != e && !0 !== e.disabled && k(e.value);
                    }
                    z && q(!1);
                }
            },
            [z, n, eo, en, k, q],
        ),
        eN = r.useMemo(() => {
            let e = Array.isArray(G) ? G : [G];
            return en.filter((t) => (0, N.fI)(t.value, e));
        }, [G, en]),
        eC = r.useCallback(
            (e) => {
                if (ef) return;
                let t = Array.from(e);
                "multiple" === n && t.length < 1 ? k([]) : "multiple" === n ? k(t.map((e) => e.value)) : k(t[0]?.value),
                    e_ && z && eA();
            },
            [ef, n, k, e_, eA, z],
        ),
        { activeIndex: ey, handleKeyDown: ev } = (0, f.l)(!0, en),
        eR = r.useRef(null);
    r.useEffect(() => {
        let e = ey !== eR.current;
        (eR.current = ey), null != ey && e && (el(ey), z || ((ed.current = !0), q(!0)));
    }, [ey, z, q]);
    let eO = r.useCallback(
            (e) => {
                if (ef) return;
                let t = en.length;
                switch (e.key) {
                    case "ArrowDown":
                    case "PageDown": {
                        let n = "PageDown" === e.key ? 10 : 1;
                        if (0 === t) return;
                        if ((e.preventDefault(), !z || e.altKey)) {
                            z || q(!0);
                            return;
                        }
                        el((e) => {
                            if (null === e) return 0;
                            let i = e + n;
                            return i >= t && O ? 0 : Math.min(i, t - 1);
                        });
                        break;
                    }
                    case "ArrowUp":
                    case "PageUp": {
                        let n = "PageUp" === e.key ? 10 : 1;
                        if (0 === t) return;
                        if ((e.preventDefault(), e.altKey && z)) {
                            if (null != eo) {
                                let e = en[eo];
                                if (null != e && !0 !== e.disabled) {
                                    eC([e]);
                                    break;
                                }
                            }
                            eA();
                            break;
                        }
                        if (!z) return void q(!0);
                        el((e) => {
                            if (null === e) return 0;
                            let i = e - n;
                            return i < 0 && O ? t - 1 : Math.max(i, 0);
                        });
                        break;
                    }
                    case "Enter":
                    case " ":
                        if ((e.preventDefault(), e.stopPropagation(), !z)) return void q(!0);
                        if (null == eo || eo > t - 1) return;
                        {
                            let e = en[eo];
                            if (null == e || !0 === e.disabled) return;
                            eC("single" === n ? [e] : (0, N.qH)(n, eN, e));
                        }
                        break;
                    case "Home":
                        if ((e.preventDefault(), 0 === t)) return;
                        el(0), z || ((ed.current = !0), q(!0));
                        break;
                    case "End":
                        if ((e.preventDefault(), 0 === t)) return;
                        el(t - 1), z || ((ed.current = !0), q(!0));
                        break;
                    case "Tab":
                        if (z && "single" === n && null != eo) {
                            let e = en[eo];
                            null != e && !0 !== e.disabled && k(e.value);
                        }
                        (ec.current = !0), q(!1);
                        break;
                    case "ArrowLeft":
                        e.preventDefault(), j.current?.firstChild?.focus();
                        break;
                    case "ArrowRight":
                        e.preventDefault(), j.current?.lastChild?.focus();
                        break;
                    case "Backspace":
                        eh && (e.preventDefault(), j.current?.lastChild?.focus());
                        break;
                    case "Escape":
                        z
                            ? (e.preventDefault(), e.stopPropagation(), eA())
                            : eh && m && (e.preventDefault(), e.stopPropagation(), eI());
                        break;
                    default:
                        ev(e);
                }
            },
            [ef, z, en, O, n, eN, eo, k, eC, eA, eI, ev, eh, m, q],
        ),
        eb = r.useMemo(() => {
            if (!y || M) return `${Math.max(eE ?? 200, 200) * ("multiple" === n ? 1.5 : 1) + 24 * !!m + 36 + 12}px`;
        }, [y, M, eE, n, m]),
        eL = "multiple" === n && eN.length > 0,
        eD = r.useRef(null);
    r.useEffect(() => {
        clearTimeout(eD.current),
            eL &&
                !V &&
                (eD.current = setTimeout(() => {
                    j.current?.lastElementChild?.scrollIntoView({ behavior: "smooth", inline: "end", block: "end" });
                }, 10));
    }, [eN, eL, V]);
    let eP = (0, l.A)(ea, Z.setReference),
        ew = r.useCallback(
            (e) => {
                if (ef) return;
                let t = Array.from(e)[0],
                    n = eN.filter((e) => e.id !== t);
                eC(n), 0 === n.length && es.current?.focus();
            },
            [eC, eN, ef],
        ),
        eM = Math.max(
            en.findIndex((e) => e.id === eN[eN.length - 1]?.id),
            0,
        ),
        ex = r.useRef(!1);
    r.useEffect(() => {
        er || !z || ex.current
            ? z || ((ex.current = !1), el(null), (ed.current = !1))
            : ((ex.current = !0), ed.current || el(en.length > 0 ? eM : null), (ed.current = !1), es.current?.focus());
    }, [er, z, eM, en.length]);
    let eU = (0, d.r)(u.A.modules.select.MAX_WIDTH),
        ek = r.useMemo(
            () =>
                M && null != eb
                    ? { horizontalControlColumnWidth: eb }
                    : { horizontalControlColumnWidth: `min(${eU}px, auto)` },
            [M, eb, eU],
        );
    return (0, i.jsx)(_.D, {
        ...H,
        "data-mana-component": "select",
        layoutConfig: ek,
        children: (e) =>
            (0, i.jsx)("div", {
                ref: eT,
                style: { width: y ? "100%" : `minmax(${eb}px, 100%)` },
                children: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(I.p, {
                            ref: eP,
                            disabled: $,
                            readOnly: s,
                            loading: er,
                            clearable: m,
                            fullWidth: y,
                            isOpen: z,
                            isInert: ef,
                            hasValue: eh,
                            hasError: e?.errorMessageId != null,
                            handleToggle: em,
                            handleClear: eI,
                            variant: F,
                            ...Q(),
                            children: (0, i.jsxs)(c.s, {
                                "aria-label": K,
                                buttonRef: es,
                                buttonProps: {
                                    ...(null != W ? { id: W } : {}),
                                    style: { marginLeft: -4 },
                                    role: "combobox",
                                    "aria-haspopup": "listbox",
                                    "aria-controls": z ? et : void 0,
                                    "aria-expanded": z,
                                    "aria-activedescendant": eu,
                                    "aria-errormessage": e?.errorMessageId,
                                    "aria-invalid": e?.errorMessageId != null,
                                    "aria-required": Y,
                                    children: (0, i.jsx)(h.A, { children: eN.map((e) => e.label).join(", ") }),
                                },
                                focusProps: { ringTarget: ea },
                                className: a()(C.L5, { [C.kj]: V, [C.M8]: "multiple" === n }),
                                onClick: em,
                                onMouseDown: eg,
                                onKeyDown: eO,
                                onBlur: eS,
                                "aria-describedby": e?.describedById,
                                children: [
                                    (0, i.jsxs)(h.A, { children: [K, ", "] }),
                                    (0, i.jsx)(v, {
                                        tagGroupRef: j,
                                        placeholder: b,
                                        selectionMode: n,
                                        selectedItems: eN,
                                        onRemove: ew,
                                    }),
                                ],
                            }),
                        }),
                        (0, i.jsx)(g.H, {
                            name: L,
                            form: D,
                            disabled: ef,
                            autoComplete: P,
                            selectionMode: n,
                            selectedItems: eN,
                            onSelectionChange: eC,
                            listItems: en,
                        }),
                        (!y || M) && ep,
                        !ef &&
                            z &&
                            (0, i.jsx)("div", {
                                ref: Z.setFloating,
                                className: C.S_,
                                ...J(),
                                style: { ...X, ...ee },
                                children: (0, i.jsx)(f.q, {
                                    id: et,
                                    tabIndex: -1,
                                    required: Y,
                                    items: en,
                                    groups: ei,
                                    selectionMode: n,
                                    selectedItems: eN,
                                    onSelectionChange: eC,
                                    shouldFocusWrap: O,
                                    activeDescendantIndex: eo,
                                    renderListItem: (e) => (0, i.jsx)(A.c, { ...e }),
                                    maxVisibleItems: w,
                                    loading: er,
                                }),
                            }),
                    ],
                }),
            }),
    });
}
function v(e) {
    let { placeholder: t, selectionMode: n, selectedItems: r, onRemove: s, tagGroupRef: a } = e,
        { i18n: o } = (0, E.G9)();
    return null == r || 0 === r.length
        ? (0, i.jsx)("div", {
              className: C.qf,
              children: (0, i.jsx)(m.E, {
                  variant: "text-md/normal",
                  color: "currentColor",
                  lineClamp: 1,
                  children: t,
              }),
          })
        : "multiple" === n
          ? (0, i.jsx)(p.C, { listRef: a, label: o.SELECTED_TAGS_HEADING, items: r, layout: "inline", onRemove: s })
          : (0, i.jsx)(A.c, { ...r[0], inInput: !0 });
}
