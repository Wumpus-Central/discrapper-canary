"use strict";
n.d(t, { l: () => v });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(494012),
    l = n(612324),
    u = n(661531),
    c = n(603392),
    d = n(890856),
    _ = n(452027),
    h = n(140735),
    f = n(540637),
    p = n(460890),
    E = n(528265),
    m = n(834730),
    g = n(991957),
    A = n(44482),
    I = n(601973),
    T = n(483084),
    S = n(641668),
    y = n(715022),
    N = n(930856);
function v(e) {
    let { i18n: t } = (0, p.G9)(),
        {
            selectionMode: n,
            readOnly: s,
            autoFocus: E,
            clearable: m,
            fullWidth: v,
            closeOnSelect: R = !0,
            shouldFocusWrap: O,
            placeholder: b = t.SELECT_PLACEHOLDER,
            name: D,
            form: L,
            autoComplete: w,
            maxOptionsVisible: M = 5,
            options: P,
            formatOption: x,
            onSelectionChange: k,
            value: U,
            wrapTags: G = !1,
            variant: F = "default",
            ...V
        } = e,
        B = r.useRef(null),
        { fieldProps: H } = (0, _.n)(V),
        { id: j, required: Y, label: W, disabled: K } = H,
        {
            isOpen: $,
            setIsOpen: z,
            refs: q,
            floatingStyles: X,
            getReferenceProps: Z,
            getFloatingProps: Q,
            transitionStyles: J,
        } = (0, S.G)(),
        ee = r.useId(),
        { options: et, loading: en } = (0, T.K)({ active: $, options: P, renderOption: x }),
        ei = r.useRef(null),
        er = r.useRef(null),
        [es, ea] = r.useState(null),
        eo = null != es ? (0, y.ZN)(ee, es) : void 0,
        el = r.useRef(!1),
        eu = r.useRef(!1),
        ec = R ?? "multiple" !== n,
        ed = Array.isArray(U) ? U.length > 0 : null != U,
        e_ = K || s,
        { measuredWidth: eh, itemsForMeasurement: ef } = (function (e, t) {
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
        })(et, n),
        ep = r.useCallback(() => {
            e_ || z(!$);
        }, [e_, z, $]),
        eE = r.useCallback(
            (e) => {
                $ && 0 === e.button && e.preventDefault();
            },
            [$],
        ),
        em = r.useCallback(() => {
            z(!1), ei.current?.focus();
        }, [z]),
        eg = r.useCallback(() => {
            !1 !== m && ("multiple" === n ? k([]) : k(null), ei.current?.focus());
        }, [k, n, m]);
    r.useEffect(() => {
        E && ei.current?.focus();
    }, [E]);
    let eA = r.useRef(null),
        eI = r.useCallback(
            (e) => {
                if (!eA.current?.contains(e.relatedTarget)) {
                    if (eu.current) {
                        eu.current = !1;
                        return;
                    }
                    if ($ && "single" === n && null != es) {
                        let e = et[es];
                        null != e && !0 !== e.disabled && k(e.value);
                    }
                    $ && z(!1);
                }
            },
            [$, n, es, et, k, z],
        ),
        eT = r.useMemo(() => {
            let e = Array.isArray(U) ? U : [U];
            return et.filter((t) => (0, y.fI)(t.value, e));
        }, [U, et]),
        eS = r.useCallback(
            (e) => {
                if (e_) return;
                let t = Array.from(e);
                "multiple" === n && t.length < 1 ? k([]) : "multiple" === n ? k(t.map((e) => e.value)) : k(t[0]?.value),
                    ec && $ && em();
            },
            [e_, n, k, ec, em, $],
        ),
        { activeIndex: ey, handleKeyDown: eN } = (0, f.l)(!0, et),
        ev = r.useRef(null);
    r.useEffect(() => {
        let e = ey !== ev.current;
        (ev.current = ey), null != ey && e && (ea(ey), $ || ((el.current = !0), z(!0)));
    }, [ey, $, z]);
    let eC = r.useCallback(
            (e) => {
                if (e_) return;
                let t = et.length;
                switch (e.key) {
                    case "ArrowDown":
                    case "PageDown": {
                        let n = "PageDown" === e.key ? 10 : 1;
                        if (0 === t) return;
                        if ((e.preventDefault(), !$ || e.altKey)) {
                            $ || z(!0);
                            return;
                        }
                        ea((e) => {
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
                        if ((e.preventDefault(), e.altKey && $)) {
                            if (null != es) {
                                let e = et[es];
                                if (null != e && !0 !== e.disabled) {
                                    eS([e]);
                                    break;
                                }
                            }
                            em();
                            break;
                        }
                        if (!$) return void z(!0);
                        ea((e) => {
                            if (null === e) return 0;
                            let i = e - n;
                            return i < 0 && O ? t - 1 : Math.max(i, 0);
                        });
                        break;
                    }
                    case "Enter":
                    case " ":
                        if ((e.preventDefault(), e.stopPropagation(), !$)) return void z(!0);
                        if (null == es || es > t - 1) return;
                        {
                            let e = et[es];
                            if (null == e || !0 === e.disabled) return;
                            eS("single" === n ? [e] : (0, y.qH)(n, eT, e));
                        }
                        break;
                    case "Home":
                        if ((e.preventDefault(), 0 === t)) return;
                        ea(0), $ || ((el.current = !0), z(!0));
                        break;
                    case "End":
                        if ((e.preventDefault(), 0 === t)) return;
                        ea(t - 1), $ || ((el.current = !0), z(!0));
                        break;
                    case "Tab":
                        if ($ && "single" === n && null != es) {
                            let e = et[es];
                            null != e && !0 !== e.disabled && k(e.value);
                        }
                        (eu.current = !0), z(!1);
                        break;
                    case "ArrowLeft":
                        e.preventDefault(), B.current?.firstChild?.focus();
                        break;
                    case "ArrowRight":
                        e.preventDefault(), B.current?.lastChild?.focus();
                        break;
                    case "Backspace":
                        ed && (e.preventDefault(), B.current?.lastChild?.focus());
                        break;
                    case "Escape":
                        $
                            ? (e.preventDefault(), e.stopPropagation(), em())
                            : ed && m && (e.preventDefault(), e.stopPropagation(), eg());
                        break;
                    default:
                        eN(e);
                }
            },
            [e_, $, et, O, n, eT, es, k, eS, em, eg, eN, ed, m, z],
        ),
        eR = r.useMemo(() => {
            if (!v) return `${Math.max(eh ?? 200, 200) * ("multiple" === n ? 1.5 : 1) + 24 * !!m + 36 + 12}px`;
        }, [v, eh, n, m]),
        eO = "multiple" === n && eT.length > 0,
        eb = r.useRef(null);
    r.useEffect(() => {
        clearTimeout(eb.current),
            eO &&
                !G &&
                (eb.current = setTimeout(() => {
                    B.current?.lastElementChild?.scrollIntoView({ behavior: "smooth", inline: "end", block: "end" });
                }, 10));
    }, [eT, eO, G]);
    let eD = (0, l.A)(er, q.setReference),
        eL = r.useCallback(
            (e) => {
                if (e_) return;
                let t = Array.from(e)[0],
                    n = eT.filter((e) => e.id !== t);
                eS(n), 0 === n.length && ei.current?.focus();
            },
            [eS, eT, e_],
        ),
        ew = Math.max(
            et.findIndex((e) => e.id === eT[eT.length - 1]?.id),
            0,
        ),
        eM = r.useRef(!1);
    r.useEffect(() => {
        en || !$ || eM.current
            ? $ || ((eM.current = !1), ea(null), (el.current = !1))
            : ((eM.current = !0), el.current || ea(et.length > 0 ? ew : null), (el.current = !1), ei.current?.focus());
    }, [en, $, ew, et.length]);
    let eP = (0, c.r)(u.A.modules.select.MAX_WIDTH),
        ex = r.useMemo(() => ({ horizontalControlColumnWidth: `min(${eP}px, auto)` }), [eP]);
    return (0, i.jsx)(_.D, {
        ...H,
        "data-mana-component": "select",
        layoutConfig: ex,
        children: (e) =>
            (0, i.jsx)("div", {
                ref: eA,
                style: { width: v ? "100%" : `minmax(${eR}px, 100%)` },
                children: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(I.p, {
                            ref: eD,
                            disabled: K,
                            readOnly: s,
                            loading: en,
                            clearable: m,
                            fullWidth: v,
                            isOpen: $,
                            isInert: e_,
                            hasValue: ed,
                            hasError: e?.errorMessageId != null,
                            handleToggle: ep,
                            handleClear: eg,
                            variant: F,
                            ...Z(),
                            children: (0, i.jsxs)(d.s, {
                                "aria-label": W,
                                buttonRef: ei,
                                buttonProps: {
                                    ...(null != j ? { id: j } : {}),
                                    style: { marginLeft: -4 },
                                    role: "combobox",
                                    "aria-haspopup": "listbox",
                                    "aria-controls": $ ? ee : void 0,
                                    "aria-expanded": $,
                                    "aria-activedescendant": eo,
                                    "aria-errormessage": e?.errorMessageId,
                                    "aria-invalid": e?.errorMessageId != null,
                                    "aria-required": Y,
                                    children: (0, i.jsx)(h.A, { children: eT.map((e) => e.label).join(", ") }),
                                },
                                focusProps: { ringTarget: er },
                                className: a()(N.L5, { [N.kj]: G, [N.M8]: "multiple" === n }),
                                onClick: ep,
                                onMouseDown: eE,
                                onKeyDown: eC,
                                onBlur: eI,
                                "aria-describedby": e?.describedById,
                                children: [
                                    (0, i.jsxs)(h.A, { children: [W, ", "] }),
                                    (0, i.jsx)(C, {
                                        tagGroupRef: B,
                                        placeholder: b,
                                        selectionMode: n,
                                        selectedItems: eT,
                                        onRemove: eL,
                                    }),
                                ],
                            }),
                        }),
                        (0, i.jsx)(g.H, {
                            name: D,
                            form: L,
                            disabled: e_,
                            autoComplete: w,
                            selectionMode: n,
                            selectedItems: eT,
                            onSelectionChange: eS,
                            listItems: et,
                        }),
                        !v && ef,
                        !e_ &&
                            $ &&
                            (0, i.jsx)("div", {
                                ref: q.setFloating,
                                className: N.S_,
                                ...Q(),
                                style: { ...X, ...J },
                                children: (0, i.jsx)(f.q, {
                                    id: ee,
                                    tabIndex: -1,
                                    required: Y,
                                    items: et,
                                    selectionMode: n,
                                    selectedItems: eT,
                                    onSelectionChange: eS,
                                    shouldFocusWrap: O,
                                    activeDescendantIndex: es,
                                    renderListItem: (e) => (0, i.jsx)(A.c, { ...e }),
                                    maxVisibleItems: M,
                                    loading: en,
                                }),
                            }),
                    ],
                }),
            }),
    });
}
function C(e) {
    let { placeholder: t, selectionMode: n, selectedItems: r, onRemove: s, tagGroupRef: a } = e,
        { i18n: o } = (0, p.G9)();
    return null == r || 0 === r.length
        ? (0, i.jsx)("div", {
              className: N.qf,
              children: (0, i.jsx)(m.E, {
                  variant: "text-md/normal",
                  color: "currentColor",
                  lineClamp: 1,
                  children: t,
              }),
          })
        : "multiple" === n
          ? (0, i.jsx)(E.C, { listRef: a, label: o.SELECTED_TAGS_HEADING, items: r, layout: "inline", onRemove: s })
          : (0, i.jsx)(A.c, { ...r[0], inInput: !0 });
}
