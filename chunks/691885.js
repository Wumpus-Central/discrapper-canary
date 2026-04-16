"use strict";
n.d(t, { l: () => R });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(494012),
    l = n(612324),
    u = n(827734),
    c = n(603392),
    d = n(890856),
    _ = n(452027),
    f = n(140735),
    p = n(540637),
    h = n(460890),
    m = n(866711),
    E = n(834730),
    g = n(991957),
    A = n(44482),
    I = n(601973),
    T = n(483084),
    S = n(641668),
    y = n(715022),
    v = n(930856);
let N = 24,
    C = 36;
function R(e) {
    let { i18n: t } = (0, h.G9)(),
        {
            selectionMode: n,
            readOnly: s,
            autoFocus: o,
            clearable: m,
            fullWidth: E,
            closeOnSelect: R = !0,
            shouldFocusWrap: D,
            placeholder: L = t.SELECT_PLACEHOLDER,
            name: w,
            form: M,
            autoComplete: P,
            maxOptionsVisible: x = 5,
            options: k,
            formatOption: U,
            onSelectionChange: G,
            value: F,
            wrapTags: V = !1,
            ...B
        } = e,
        H = i.useRef(null),
        { fieldProps: j } = (0, _.n)(B),
        { id: Y, required: W, label: K, disabled: $ } = j,
        {
            isOpen: z,
            setIsOpen: q,
            refs: Z,
            floatingStyles: X,
            getReferenceProps: Q,
            getFloatingProps: J,
            transitionStyles: ee,
        } = (0, S.G)(),
        et = i.useId(),
        { options: en, loading: er } = (0, T.K)({ active: z, options: k, renderOption: U }),
        ei = i.useRef(null),
        es = i.useRef(null),
        [ea, eo] = i.useState(null),
        el = null != ea ? (0, y.ZN)(et, ea) : void 0,
        eu = i.useRef(!1),
        ec = i.useRef(!1),
        ed = R ?? "multiple" !== n,
        e_ = Array.isArray(F) ? F.length > 0 : null != F,
        ef = $ || s,
        { measuredWidth: ep, itemsForMeasurement: eh } = O(en, n),
        em = i.useCallback(() => {
            ef || q(!z);
        }, [ef, q, z]),
        eE = i.useCallback(() => {
            q(!1), ei.current?.focus();
        }, [q]),
        eg = i.useCallback(() => {
            !1 !== m && ("multiple" === n ? G([]) : G(null), ei.current?.focus());
        }, [G, n, m]);
    i.useEffect(() => {
        o && ei.current?.focus();
    }, [o]);
    let eA = i.useRef(null),
        eI = i.useCallback(
            (e) => {
                if (!eA.current?.contains(e.relatedTarget)) {
                    if (ec.current) {
                        ec.current = !1;
                        return;
                    }
                    if (z && "single" === n && null != ea) {
                        let e = en[ea];
                        null != e && !0 !== e.disabled && G(e.value);
                    }
                    z && q(!1);
                }
            },
            [z, n, ea, en, G, q],
        ),
        eT = i.useMemo(() => {
            let e = Array.isArray(F) ? F : [F];
            return en.filter((t) => (0, y.fI)(t.value, e));
        }, [F, en]),
        eS = i.useCallback(
            (e) => {
                if (ef) return;
                let t = Array.from(e);
                "multiple" === n && t.length < 1 ? G([]) : "multiple" === n ? G(t.map((e) => e.value)) : G(t[0]?.value),
                    ed && z && eE();
            },
            [ef, n, G, ed, eE, z],
        ),
        { activeIndex: ey, handleKeyDown: ev } = (0, p.l)(!0, en),
        eN = i.useRef(null);
    i.useEffect(() => {
        let e = ey !== eN.current;
        (eN.current = ey), null != ey && e && (eo(ey), z || ((eu.current = !0), q(!0)));
    }, [ey, z, q]);
    let eC = i.useCallback(
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
                        eo((e) => {
                            if (null === e) return 0;
                            let r = e + n;
                            return r >= t && D ? 0 : Math.min(r, t - 1);
                        });
                        break;
                    }
                    case "ArrowUp":
                    case "PageUp": {
                        let n = "PageUp" === e.key ? 10 : 1;
                        if (0 === t) return;
                        if ((e.preventDefault(), e.altKey && z)) {
                            if (null != ea) {
                                let e = en[ea];
                                if (null != e && !0 !== e.disabled) {
                                    eS([e]);
                                    break;
                                }
                            }
                            eE();
                            break;
                        }
                        if (!z) return void q(!0);
                        eo((e) => {
                            if (null === e) return 0;
                            let r = e - n;
                            return r < 0 && D ? t - 1 : Math.max(r, 0);
                        });
                        break;
                    }
                    case "Enter":
                    case " ":
                        if ((e.preventDefault(), e.stopPropagation(), !z)) return void q(!0);
                        if (null == ea || ea > t - 1) return;
                        {
                            let e = en[ea];
                            if (null == e || !0 === e.disabled) return;
                            eS("single" === n ? [e] : (0, y.qH)(n, eT, e));
                        }
                        break;
                    case "Home":
                        if ((e.preventDefault(), 0 === t)) return;
                        eo(0), z || ((eu.current = !0), q(!0));
                        break;
                    case "End":
                        if ((e.preventDefault(), 0 === t)) return;
                        eo(t - 1), z || ((eu.current = !0), q(!0));
                        break;
                    case "Tab":
                        if (z && "single" === n && null != ea) {
                            let e = en[ea];
                            null != e && !0 !== e.disabled && G(e.value);
                        }
                        (ec.current = !0), q(!1);
                        break;
                    case "ArrowLeft":
                        e.preventDefault(), H.current?.firstChild?.focus();
                        break;
                    case "ArrowRight":
                        e.preventDefault(), H.current?.lastChild?.focus();
                        break;
                    case "Backspace":
                        e_ && (e.preventDefault(), H.current?.lastChild?.focus());
                        break;
                    case "Escape":
                        z
                            ? (e.preventDefault(), e.stopPropagation(), eE())
                            : e_ && m && (e.preventDefault(), e.stopPropagation(), eg());
                        break;
                    default:
                        ev(e);
                }
            },
            [ef, z, en, D, n, eT, ea, G, eS, eE, eg, ev, e_, m, q],
        ),
        eR = i.useMemo(() => {
            if (!E) return `${Math.max(ep ?? 200, 200) * ("multiple" === n ? 1.5 : 1) + !!m * N + C + 12}px`;
        }, [E, ep, n, m]),
        eO = "multiple" === n && eT.length > 0,
        eb = i.useRef(null);
    i.useEffect(() => {
        clearTimeout(eb.current),
            eO &&
                !V &&
                (eb.current = setTimeout(() => {
                    H.current?.lastElementChild?.scrollIntoView({ behavior: "smooth", inline: "end", block: "end" });
                }, 10));
    }, [eT, eO, V]);
    let eD = (0, l.A)(es, Z.setReference),
        eL = i.useCallback(
            (e) => {
                if (ef) return;
                let t = Array.from(e)[0],
                    n = eT.filter((e) => e.id !== t);
                eS(n), 0 === n.length && ei.current?.focus();
            },
            [eS, eT, ef],
        ),
        ew = Math.max(
            en.findIndex((e) => e.id === eT[eT.length - 1]?.id),
            0,
        ),
        eM = i.useRef(!1);
    i.useEffect(() => {
        er || !z || eM.current
            ? z || ((eM.current = !1), eo(null), (eu.current = !1))
            : ((eM.current = !0), eu.current || eo(en.length > 0 ? ew : null), (eu.current = !1), ei.current?.focus());
    }, [er, z, ew, en.length]);
    let eP = (0, c.r)(u.A.modules.select.MAX_WIDTH),
        ex = i.useMemo(() => ({ horizontalControlColumnWidth: `min(${eP}px, auto)` }), [eP]);
    function ek(e) {
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(I.p, {
                    ref: eD,
                    disabled: $,
                    readOnly: s,
                    loading: er,
                    clearable: m,
                    fullWidth: E,
                    isOpen: z,
                    isInert: ef,
                    hasValue: e_,
                    hasError: e?.errorMessageId != null,
                    handleToggle: em,
                    handleClear: eg,
                    ...Q(),
                    children: (0, r.jsxs)(d.s, {
                        "aria-label": K,
                        buttonRef: ei,
                        buttonProps: {
                            ...(null != Y ? { id: Y } : {}),
                            style: { marginLeft: -4 },
                            role: "combobox",
                            "aria-haspopup": "listbox",
                            "aria-controls": z ? et : void 0,
                            "aria-expanded": z,
                            "aria-activedescendant": el,
                            "aria-errormessage": e?.errorMessageId,
                            "aria-invalid": e?.errorMessageId != null,
                            children: (0, r.jsx)(f.A, { children: eT.map((e) => e.label).join(", ") }),
                        },
                        focusProps: { ringTarget: es },
                        className: a()(v.L5, { [v.kj]: V, [v.M8]: "multiple" === n }),
                        onClick: em,
                        onKeyDown: eC,
                        onBlur: eI,
                        "aria-describedby": e?.describedById,
                        children: [
                            (0, r.jsxs)(f.A, { children: [K, ", "] }),
                            (0, r.jsx)(b, {
                                tagGroupRef: H,
                                placeholder: L,
                                selectionMode: n,
                                selectedItems: eT,
                                onRemove: eL,
                            }),
                        ],
                    }),
                }),
                (0, r.jsx)(g.H, {
                    name: w,
                    form: M,
                    disabled: ef,
                    autoComplete: P,
                    selectionMode: n,
                    selectedItems: eT,
                    onSelectionChange: eS,
                    listItems: en,
                }),
                !E && eh,
                !ef &&
                    z &&
                    (0, r.jsx)("div", {
                        ref: Z.setFloating,
                        className: v.S_,
                        ...J(),
                        style: { ...X, ...ee },
                        children: (0, r.jsx)(p.q, {
                            id: et,
                            tabIndex: -1,
                            required: W,
                            items: en,
                            selectionMode: n,
                            selectedItems: eT,
                            onSelectionChange: eS,
                            shouldFocusWrap: D,
                            activeDescendantIndex: ea,
                            renderListItem: (e) => (0, r.jsx)(A.c, { ...e }),
                            maxVisibleItems: x,
                            loading: er,
                        }),
                    }),
            ],
        });
    }
    return (0, r.jsx)(_.D, {
        ...j,
        "data-mana-component": "select",
        layoutConfig: ex,
        children: (e) =>
            (0, r.jsx)("div", { ref: eA, style: { width: E ? "100%" : `minmax(${eR}px, 100%)` }, children: ek(e) }),
    });
}
function O(e, t) {
    let { ref: n, width: s } = (0, o.Ay)(),
        a = i.useId();
    return {
        measuredWidth: s,
        itemsForMeasurement: i.useMemo(
            () =>
                (0, r.jsx)("div", {
                    ref: n,
                    style: { position: "absolute", visibility: "hidden", pointerEvents: "none", width: "max-content" },
                    "aria-hidden": "true",
                    children: (0, r.jsx)(p.q, {
                        id: `measurement-${a}`,
                        required: !1,
                        items: e,
                        selectionMode: t,
                        selectedItems: [],
                        onSelectionChange: () => {},
                        shouldFocusWrap: !1,
                        renderListItem: (e) => (0, r.jsx)(A.c, { ...e }),
                    }),
                }),
            [e, t, a, n],
        ),
    };
}
function b(e) {
    let { placeholder: t, selectionMode: n, selectedItems: i, onRemove: s, tagGroupRef: a } = e,
        { i18n: o } = (0, h.G9)();
    return null == i || 0 === i.length
        ? (0, r.jsx)("div", {
              className: v.qf,
              children: (0, r.jsx)(E.E, {
                  variant: "text-md/normal",
                  color: "currentColor",
                  lineClamp: 1,
                  children: t,
              }),
          })
        : "multiple" === n
          ? (0, r.jsx)(m.C, { listRef: a, label: o.SELECTED_TAGS_HEADING, items: i, layout: "inline", onRemove: s })
          : (0, r.jsx)(A.c, { ...i[0], inInput: !0 });
}
