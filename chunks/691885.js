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
            ...V
        } = e,
        F = r.useRef(null),
        { fieldProps: B } = (0, c.n)(V),
        { id: H, required: j, label: W, disabled: Y } = B,
        {
            isOpen: K,
            setIsOpen: z,
            refs: $,
            floatingStyles: q,
            getReferenceProps: X,
            getFloatingProps: Z,
            transitionStyles: Q,
        } = (0, S.G)(),
        J = r.useId(),
        { options: ee, loading: et } = (0, T.K)({ active: K, options: k, renderOption: M }),
        en = r.useRef(null),
        ei = r.useRef(null),
        [er, es] = r.useState(null),
        ea = null != er ? (0, N.ZN)(J, er) : void 0,
        eo = r.useRef(!1),
        el = r.useRef(!1),
        ed = y ?? "multiple" !== n,
        e_ = Array.isArray(x) ? x.length > 0 : null != x,
        eu = Y || s,
        { measuredWidth: ec, itemsForMeasurement: eE } = (function (e, t) {
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
        })(ee, n),
        eh = r.useCallback(() => {
            eu || z(!K);
        }, [eu, z, K]),
        em = r.useCallback(() => {
            z(!1), en.current?.focus();
        }, [z]),
        ef = r.useCallback(() => {
            !1 !== g && ("multiple" === n ? U([]) : U(null), en.current?.focus());
        }, [U, n, g]);
    r.useEffect(() => {
        f && en.current?.focus();
    }, [f]);
    let eg = r.useRef(null),
        ep = r.useCallback(
            (e) => {
                if (!eg.current?.contains(e.relatedTarget)) {
                    if (el.current) {
                        el.current = !1;
                        return;
                    }
                    if (K && "single" === n && null != er) {
                        let e = ee[er];
                        null != e && !0 !== e.disabled && U(e.value);
                    }
                    K && z(!1);
                }
            },
            [K, n, er, ee, U, z],
        ),
        eA = r.useMemo(() => {
            let e = Array.isArray(x) ? x : [x];
            return ee.filter((t) => (0, N.fI)(t.value, e));
        }, [x, ee]),
        eI = r.useCallback(
            (e) => {
                if (eu) return;
                let t = Array.from(e);
                "multiple" === n && t.length < 1 ? U([]) : "multiple" === n ? U(t.map((e) => e.value)) : U(t[0]?.value),
                    ed && K && em();
            },
            [eu, n, U, ed, em, K],
        ),
        { activeIndex: eT, handleKeyDown: eS } = (0, h.l)(!0, ee),
        eN = r.useRef(null);
    r.useEffect(() => {
        let e = eT !== eN.current;
        (eN.current = eT), null != eT && e && (es(eT), K || ((eo.current = !0), z(!0)));
    }, [eT, K, z]);
    let eC = r.useCallback(
            (e) => {
                if (eu) return;
                let t = ee.length;
                switch (e.key) {
                    case "ArrowDown":
                    case "PageDown": {
                        let n = "PageDown" === e.key ? 10 : 1;
                        if (0 === t) return;
                        if ((e.preventDefault(), !K || e.altKey)) {
                            K || z(!0);
                            return;
                        }
                        es((e) => {
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
                        if ((e.preventDefault(), e.altKey && K)) {
                            if (null != er) {
                                let e = ee[er];
                                if (null != e && !0 !== e.disabled) {
                                    eI([e]);
                                    break;
                                }
                            }
                            em();
                            break;
                        }
                        if (!K) return void z(!0);
                        es((e) => {
                            if (null === e) return 0;
                            let i = e - n;
                            return i < 0 && v ? t - 1 : Math.max(i, 0);
                        });
                        break;
                    }
                    case "Enter":
                    case " ":
                        if ((e.preventDefault(), e.stopPropagation(), !K)) return void z(!0);
                        if (null == er || er > t - 1) return;
                        {
                            let e = ee[er];
                            if (null == e || !0 === e.disabled) return;
                            eI("single" === n ? [e] : (0, N.qH)(n, eA, e));
                        }
                        break;
                    case "Home":
                        if ((e.preventDefault(), 0 === t)) return;
                        es(0), K || ((eo.current = !0), z(!0));
                        break;
                    case "End":
                        if ((e.preventDefault(), 0 === t)) return;
                        es(t - 1), K || ((eo.current = !0), z(!0));
                        break;
                    case "Tab":
                        if (K && "single" === n && null != er) {
                            let e = ee[er];
                            null != e && !0 !== e.disabled && U(e.value);
                        }
                        (el.current = !0), z(!1);
                        break;
                    case "ArrowLeft":
                        e.preventDefault(), F.current?.firstChild?.focus();
                        break;
                    case "ArrowRight":
                        e.preventDefault(), F.current?.lastChild?.focus();
                        break;
                    case "Backspace":
                        e_ && (e.preventDefault(), F.current?.lastChild?.focus());
                        break;
                    case "Escape":
                        K
                            ? (e.preventDefault(), e.stopPropagation(), em())
                            : e_ && g && (e.preventDefault(), e.stopPropagation(), ef());
                        break;
                    default:
                        eS(e);
                }
            },
            [eu, K, ee, v, n, eA, er, U, eI, em, ef, eS, e_, g, z],
        ),
        eR = r.useMemo(() => {
            if (!R) return `${Math.max(ec ?? 200, 200) * ("multiple" === n ? 1.5 : 1) + 24 * !!g + 36 + 12}px`;
        }, [R, ec, n, g]),
        eO = "multiple" === n && eA.length > 0,
        ey = r.useRef(null);
    r.useEffect(() => {
        clearTimeout(ey.current),
            eO &&
                !G &&
                (ey.current = setTimeout(() => {
                    F.current?.lastElementChild?.scrollIntoView({ behavior: "smooth", inline: "end", block: "end" });
                }, 10));
    }, [eA, eO, G]);
    let ev = (0, l.A)(ei, $.setReference),
        eD = r.useCallback(
            (e) => {
                if (eu) return;
                let t = Array.from(e)[0],
                    n = eA.filter((e) => e.id !== t);
                eI(n), 0 === n.length && en.current?.focus();
            },
            [eI, eA, eu],
        ),
        eL = Math.max(
            ee.findIndex((e) => e.id === eA[eA.length - 1]?.id),
            0,
        ),
        eb = r.useRef(!1);
    r.useEffect(() => {
        et || !K || eb.current
            ? K || ((eb.current = !1), es(null), (eo.current = !1))
            : ((eb.current = !0), eo.current || es(ee.length > 0 ? eL : null), (eo.current = !1), en.current?.focus());
    }, [et, K, eL, ee.length]);
    let ew = (0, _.r)(d.A.modules.select.MAX_WIDTH),
        eP = r.useMemo(() => ({ horizontalControlColumnWidth: `min(${ew}px, auto)` }), [ew]);
    return (0, i.jsx)(c.D, {
        ...B,
        "data-mana-component": "select",
        layoutConfig: eP,
        children: (e) =>
            (0, i.jsx)("div", {
                ref: eg,
                style: { width: R ? "100%" : `minmax(${eR}px, 100%)` },
                children: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(I.p, {
                            ref: ev,
                            disabled: Y,
                            readOnly: s,
                            loading: et,
                            clearable: g,
                            fullWidth: R,
                            isOpen: K,
                            isInert: eu,
                            hasValue: e_,
                            hasError: e?.errorMessageId != null,
                            handleToggle: eh,
                            handleClear: ef,
                            ...X(),
                            children: (0, i.jsxs)(u.s, {
                                "aria-label": W,
                                buttonRef: en,
                                buttonProps: {
                                    ...(null != H ? { id: H } : {}),
                                    style: { marginLeft: -4 },
                                    role: "combobox",
                                    "aria-haspopup": "listbox",
                                    "aria-controls": K ? J : void 0,
                                    "aria-expanded": K,
                                    "aria-activedescendant": ea,
                                    "aria-errormessage": e?.errorMessageId,
                                    "aria-invalid": e?.errorMessageId != null,
                                    children: (0, i.jsx)(E.A, { children: eA.map((e) => e.label).join(", ") }),
                                },
                                focusProps: { ringTarget: ei },
                                className: a()(C.L5, { [C.kj]: G, [C.M8]: "multiple" === n }),
                                onClick: eh,
                                onKeyDown: eC,
                                onBlur: ep,
                                "aria-describedby": e?.describedById,
                                children: [
                                    (0, i.jsxs)(E.A, { children: [W, ", "] }),
                                    (0, i.jsx)(O, {
                                        tagGroupRef: F,
                                        placeholder: D,
                                        selectionMode: n,
                                        selectedItems: eA,
                                        onRemove: eD,
                                    }),
                                ],
                            }),
                        }),
                        (0, i.jsx)(p.H, {
                            name: L,
                            form: b,
                            disabled: eu,
                            autoComplete: w,
                            selectionMode: n,
                            selectedItems: eA,
                            onSelectionChange: eI,
                            listItems: ee,
                        }),
                        !R && eE,
                        !eu &&
                            K &&
                            (0, i.jsx)("div", {
                                ref: $.setFloating,
                                className: C.S_,
                                ...Z(),
                                style: { ...q, ...Q },
                                children: (0, i.jsx)(h.q, {
                                    id: J,
                                    tabIndex: -1,
                                    required: j,
                                    items: ee,
                                    selectionMode: n,
                                    selectedItems: eA,
                                    onSelectionChange: eI,
                                    shouldFocusWrap: v,
                                    activeDescendantIndex: er,
                                    renderListItem: (e) => (0, i.jsx)(A.c, { ...e }),
                                    maxVisibleItems: P,
                                    loading: et,
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
