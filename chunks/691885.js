"use strict";
n.d(t, { l: () => R });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(494012),
    l = n(612324),
    _ = n(661531),
    d = n(603392),
    u = n(890856),
    c = n(452027),
    E = n(140735),
    h = n(649998),
    m = n(460890),
    f = n(340351),
    g = n(834730),
    I = n(991957),
    A = n(44482),
    p = n(601973),
    T = n(483084),
    S = n(641668),
    N = n(715022),
    O = n(930856);
function R(e) {
    let { i18n: t } = (0, m.G9)(),
        {
            selectionMode: n,
            readOnly: s,
            autoFocus: f,
            clearable: g,
            fullWidth: R,
            closeOnSelect: y = !0,
            shouldFocusWrap: D,
            placeholder: L = t.SELECT_PLACEHOLDER,
            name: v,
            form: w,
            autoComplete: P,
            maxOptionsVisible: b = 5,
            options: k,
            formatOption: U,
            onSelectionChange: M,
            value: G,
            wrapTags: x = !1,
            variant: V = "default",
            ...F
        } = e,
        B = r.useRef(null),
        { fieldProps: H } = (0, c.n)(F),
        { id: Y, required: W, label: K, disabled: j } = H,
        {
            isOpen: $,
            setIsOpen: z,
            refs: q,
            floatingStyles: X,
            getReferenceProps: Q,
            getFloatingProps: J,
            transitionStyles: Z,
        } = (0, S.G)(),
        ee = r.useId(),
        { options: et, loading: en } = (0, T.K)({ active: $, options: k, renderOption: U }),
        ei = r.useRef(null),
        er = r.useRef(null),
        [es, ea] = r.useState(null),
        eo = null != es ? (0, N.ZN)(ee, es) : void 0,
        el = r.useRef(!1),
        e_ = r.useRef(!1),
        ed = y ?? "multiple" !== n,
        eu = Array.isArray(G) ? G.length > 0 : null != G,
        ec = j || s,
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
            ec || z(!$);
        }, [ec, z, $]),
        ef = r.useCallback(
            (e) => {
                $ && 0 === e.button && e.preventDefault();
            },
            [$],
        ),
        eg = r.useCallback(() => {
            z(!1), ei.current?.focus();
        }, [z]),
        eI = r.useCallback(() => {
            !1 !== g && ("multiple" === n ? M([]) : M(null), ei.current?.focus());
        }, [M, n, g]);
    r.useEffect(() => {
        f && ei.current?.focus();
    }, [f]);
    let eA = r.useRef(null),
        ep = r.useCallback(
            (e) => {
                if (!eA.current?.contains(e.relatedTarget)) {
                    if (e_.current) {
                        e_.current = !1;
                        return;
                    }
                    if ($ && "single" === n && null != es) {
                        let e = et[es];
                        null != e && !0 !== e.disabled && M(e.value);
                    }
                    $ && z(!1);
                }
            },
            [$, n, es, et, M, z],
        ),
        eT = r.useMemo(() => {
            let e = Array.isArray(G) ? G : [G];
            return et.filter((t) => (0, N.fI)(t.value, e));
        }, [G, et]),
        eS = r.useCallback(
            (e) => {
                if (ec) return;
                let t = Array.from(e);
                "multiple" === n && t.length < 1 ? M([]) : "multiple" === n ? M(t.map((e) => e.value)) : M(t[0]?.value),
                    ed && $ && eg();
            },
            [ec, n, M, ed, eg, $],
        ),
        { activeIndex: eN, handleKeyDown: eO } = (0, h.l)(!0, et),
        eR = r.useRef(null);
    r.useEffect(() => {
        let e = eN !== eR.current;
        (eR.current = eN), null != eN && e && (ea(eN), $ || ((el.current = !0), z(!0)));
    }, [eN, $, z]);
    let eC = r.useCallback(
            (e) => {
                if (ec) return;
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
                            return i >= t && D ? 0 : Math.min(i, t - 1);
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
                            eg();
                            break;
                        }
                        if (!$) return void z(!0);
                        ea((e) => {
                            if (null === e) return 0;
                            let i = e - n;
                            return i < 0 && D ? t - 1 : Math.max(i, 0);
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
                            eS("single" === n ? [e] : (0, N.qH)(n, eT, e));
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
                            null != e && !0 !== e.disabled && M(e.value);
                        }
                        (e_.current = !0), z(!1);
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
                        $
                            ? (e.preventDefault(), e.stopPropagation(), eg())
                            : eu && g && (e.preventDefault(), e.stopPropagation(), eI());
                        break;
                    default:
                        eO(e);
                }
            },
            [ec, $, et, D, n, eT, es, M, eS, eg, eI, eO, eu, g, z],
        ),
        ey = r.useMemo(() => {
            if (!R) return `${Math.max(eE ?? 200, 200) * ("multiple" === n ? 1.5 : 1) + 24 * !!g + 36 + 12}px`;
        }, [R, eE, n, g]),
        eD = "multiple" === n && eT.length > 0,
        eL = r.useRef(null);
    r.useEffect(() => {
        clearTimeout(eL.current),
            eD &&
                !x &&
                (eL.current = setTimeout(() => {
                    B.current?.lastElementChild?.scrollIntoView({ behavior: "smooth", inline: "end", block: "end" });
                }, 10));
    }, [eT, eD, x]);
    let ev = (0, l.A)(er, q.setReference),
        ew = r.useCallback(
            (e) => {
                if (ec) return;
                let t = Array.from(e)[0],
                    n = eT.filter((e) => e.id !== t);
                eS(n), 0 === n.length && ei.current?.focus();
            },
            [eS, eT, ec],
        ),
        eP = Math.max(
            et.findIndex((e) => e.id === eT[eT.length - 1]?.id),
            0,
        ),
        eb = r.useRef(!1);
    r.useEffect(() => {
        en || !$ || eb.current
            ? $ || ((eb.current = !1), ea(null), (el.current = !1))
            : ((eb.current = !0), el.current || ea(et.length > 0 ? eP : null), (el.current = !1), ei.current?.focus());
    }, [en, $, eP, et.length]);
    let ek = (0, d.r)(_.A.modules.select.MAX_WIDTH),
        eU = r.useMemo(() => ({ horizontalControlColumnWidth: `min(${ek}px, auto)` }), [ek]);
    return (0, i.jsx)(c.D, {
        ...H,
        "data-mana-component": "select",
        layoutConfig: eU,
        children: (e) =>
            (0, i.jsx)("div", {
                ref: eA,
                style: { width: R ? "100%" : `minmax(${ey}px, 100%)` },
                children: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(p.p, {
                            ref: ev,
                            disabled: j,
                            readOnly: s,
                            loading: en,
                            clearable: g,
                            fullWidth: R,
                            isOpen: $,
                            isInert: ec,
                            hasValue: eu,
                            hasError: e?.errorMessageId != null,
                            handleToggle: em,
                            handleClear: eI,
                            variant: V,
                            ...Q(),
                            children: (0, i.jsxs)(u.s, {
                                "aria-label": K,
                                buttonRef: ei,
                                buttonProps: {
                                    ...(null != Y ? { id: Y } : {}),
                                    style: { marginLeft: -4 },
                                    role: "combobox",
                                    "aria-haspopup": "listbox",
                                    "aria-controls": $ ? ee : void 0,
                                    "aria-expanded": $,
                                    "aria-activedescendant": eo,
                                    "aria-errormessage": e?.errorMessageId,
                                    "aria-invalid": e?.errorMessageId != null,
                                    "aria-required": W,
                                    children: (0, i.jsx)(E.A, { children: eT.map((e) => e.label).join(", ") }),
                                },
                                focusProps: { ringTarget: er },
                                className: a()(O.L5, { [O.kj]: x, [O.M8]: "multiple" === n }),
                                onClick: em,
                                onMouseDown: ef,
                                onKeyDown: eC,
                                onBlur: ep,
                                "aria-describedby": e?.describedById,
                                children: [
                                    (0, i.jsxs)(E.A, { children: [K, ", "] }),
                                    (0, i.jsx)(C, {
                                        tagGroupRef: B,
                                        placeholder: L,
                                        selectionMode: n,
                                        selectedItems: eT,
                                        onRemove: ew,
                                    }),
                                ],
                            }),
                        }),
                        (0, i.jsx)(I.H, {
                            name: v,
                            form: w,
                            disabled: ec,
                            autoComplete: P,
                            selectionMode: n,
                            selectedItems: eT,
                            onSelectionChange: eS,
                            listItems: et,
                        }),
                        !R && eh,
                        !ec &&
                            $ &&
                            (0, i.jsx)("div", {
                                ref: q.setFloating,
                                className: O.S_,
                                ...J(),
                                style: { ...X, ...Z },
                                children: (0, i.jsx)(h.q, {
                                    id: ee,
                                    tabIndex: -1,
                                    required: W,
                                    items: et,
                                    selectionMode: n,
                                    selectedItems: eT,
                                    onSelectionChange: eS,
                                    shouldFocusWrap: D,
                                    activeDescendantIndex: es,
                                    renderListItem: (e) => (0, i.jsx)(A.c, { ...e }),
                                    maxVisibleItems: b,
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
        { i18n: o } = (0, m.G9)();
    return null == r || 0 === r.length
        ? (0, i.jsx)("div", {
              className: O.qf,
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
