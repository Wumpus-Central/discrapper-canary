"use strict";
n.d(t, { l: () => O });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(494012),
    l = n(612324),
    u = n(827734),
    d = n(603392),
    c = n(890856),
    _ = n(452027),
    f = n(140735),
    E = n(540637),
    h = n(460890),
    p = n(866711),
    m = n(834730),
    g = n(991957),
    A = n(44482),
    I = n(601973),
    T = n(483084),
    S = n(641668),
    y = n(715022),
    N = n(930856);
function O(e) {
    let { i18n: t } = (0, h.G9)(),
        {
            selectionMode: n,
            readOnly: s,
            autoFocus: p,
            clearable: m,
            fullWidth: O,
            closeOnSelect: v = !0,
            shouldFocusWrap: C,
            placeholder: b = t.SELECT_PLACEHOLDER,
            name: D,
            form: L,
            autoComplete: w,
            maxOptionsVisible: M = 5,
            options: P,
            formatOption: U,
            onSelectionChange: k,
            value: x,
            wrapTags: G = !1,
            ...V
        } = e,
        F = i.useRef(null),
        { fieldProps: B } = (0, _.n)(V),
        { id: H, required: Y, label: W, disabled: j } = B,
        {
            isOpen: K,
            setIsOpen: $,
            refs: z,
            floatingStyles: q,
            getReferenceProps: X,
            getFloatingProps: Q,
            transitionStyles: J,
        } = (0, S.G)(),
        Z = i.useId(),
        { options: ee, loading: et } = (0, T.K)({ active: K, options: P, renderOption: U }),
        en = i.useRef(null),
        er = i.useRef(null),
        [ei, es] = i.useState(null),
        ea = null != ei ? (0, y.ZN)(Z, ei) : void 0,
        eo = i.useRef(!1),
        el = i.useRef(!1),
        eu = v ?? "multiple" !== n,
        ed = Array.isArray(x) ? x.length > 0 : null != x,
        ec = j || s,
        { measuredWidth: e_, itemsForMeasurement: ef } = (function (e, t) {
            let { ref: n, width: s } = (0, o.Ay)(),
                a = i.useId();
            return {
                measuredWidth: s,
                itemsForMeasurement: i.useMemo(
                    () =>
                        (0, r.jsx)("div", {
                            ref: n,
                            style: {
                                position: "absolute",
                                visibility: "hidden",
                                pointerEvents: "none",
                                width: "max-content",
                            },
                            "aria-hidden": "true",
                            children: (0, r.jsx)(E.q, {
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
        })(ee, n),
        eE = i.useCallback(() => {
            ec || $(!K);
        }, [ec, $, K]),
        eh = i.useCallback(() => {
            $(!1), en.current?.focus();
        }, [$]),
        ep = i.useCallback(() => {
            !1 !== m && ("multiple" === n ? k([]) : k(null), en.current?.focus());
        }, [k, n, m]);
    i.useEffect(() => {
        p && en.current?.focus();
    }, [p]);
    let em = i.useRef(null),
        eg = i.useCallback(
            (e) => {
                if (!em.current?.contains(e.relatedTarget)) {
                    if (el.current) {
                        el.current = !1;
                        return;
                    }
                    if (K && "single" === n && null != ei) {
                        let e = ee[ei];
                        null != e && !0 !== e.disabled && k(e.value);
                    }
                    K && $(!1);
                }
            },
            [K, n, ei, ee, k, $],
        ),
        eA = i.useMemo(() => {
            let e = Array.isArray(x) ? x : [x];
            return ee.filter((t) => (0, y.fI)(t.value, e));
        }, [x, ee]),
        eI = i.useCallback(
            (e) => {
                if (ec) return;
                let t = Array.from(e);
                "multiple" === n && t.length < 1 ? k([]) : "multiple" === n ? k(t.map((e) => e.value)) : k(t[0]?.value),
                    eu && K && eh();
            },
            [ec, n, k, eu, eh, K],
        ),
        { activeIndex: eT, handleKeyDown: eS } = (0, E.l)(!0, ee),
        ey = i.useRef(null);
    i.useEffect(() => {
        let e = eT !== ey.current;
        (ey.current = eT), null != eT && e && (es(eT), K || ((eo.current = !0), $(!0)));
    }, [eT, K, $]);
    let eN = i.useCallback(
            (e) => {
                if (ec) return;
                let t = ee.length;
                switch (e.key) {
                    case "ArrowDown":
                    case "PageDown": {
                        let n = "PageDown" === e.key ? 10 : 1;
                        if (0 === t) return;
                        if ((e.preventDefault(), !K || e.altKey)) {
                            K || $(!0);
                            return;
                        }
                        es((e) => {
                            if (null === e) return 0;
                            let r = e + n;
                            return r >= t && C ? 0 : Math.min(r, t - 1);
                        });
                        break;
                    }
                    case "ArrowUp":
                    case "PageUp": {
                        let n = "PageUp" === e.key ? 10 : 1;
                        if (0 === t) return;
                        if ((e.preventDefault(), e.altKey && K)) {
                            if (null != ei) {
                                let e = ee[ei];
                                if (null != e && !0 !== e.disabled) {
                                    eI([e]);
                                    break;
                                }
                            }
                            eh();
                            break;
                        }
                        if (!K) return void $(!0);
                        es((e) => {
                            if (null === e) return 0;
                            let r = e - n;
                            return r < 0 && C ? t - 1 : Math.max(r, 0);
                        });
                        break;
                    }
                    case "Enter":
                    case " ":
                        if ((e.preventDefault(), e.stopPropagation(), !K)) return void $(!0);
                        if (null == ei || ei > t - 1) return;
                        {
                            let e = ee[ei];
                            if (null == e || !0 === e.disabled) return;
                            eI("single" === n ? [e] : (0, y.qH)(n, eA, e));
                        }
                        break;
                    case "Home":
                        if ((e.preventDefault(), 0 === t)) return;
                        es(0), K || ((eo.current = !0), $(!0));
                        break;
                    case "End":
                        if ((e.preventDefault(), 0 === t)) return;
                        es(t - 1), K || ((eo.current = !0), $(!0));
                        break;
                    case "Tab":
                        if (K && "single" === n && null != ei) {
                            let e = ee[ei];
                            null != e && !0 !== e.disabled && k(e.value);
                        }
                        (el.current = !0), $(!1);
                        break;
                    case "ArrowLeft":
                        e.preventDefault(), F.current?.firstChild?.focus();
                        break;
                    case "ArrowRight":
                        e.preventDefault(), F.current?.lastChild?.focus();
                        break;
                    case "Backspace":
                        ed && (e.preventDefault(), F.current?.lastChild?.focus());
                        break;
                    case "Escape":
                        K
                            ? (e.preventDefault(), e.stopPropagation(), eh())
                            : ed && m && (e.preventDefault(), e.stopPropagation(), ep());
                        break;
                    default:
                        eS(e);
                }
            },
            [ec, K, ee, C, n, eA, ei, k, eI, eh, ep, eS, ed, m, $],
        ),
        eO = i.useMemo(() => {
            if (!O) return `${Math.max(e_ ?? 200, 200) * ("multiple" === n ? 1.5 : 1) + 24 * !!m + 36 + 12}px`;
        }, [O, e_, n, m]),
        eR = "multiple" === n && eA.length > 0,
        ev = i.useRef(null);
    i.useEffect(() => {
        clearTimeout(ev.current),
            eR &&
                !G &&
                (ev.current = setTimeout(() => {
                    F.current?.lastElementChild?.scrollIntoView({ behavior: "smooth", inline: "end", block: "end" });
                }, 10));
    }, [eA, eR, G]);
    let eC = (0, l.A)(er, z.setReference),
        eb = i.useCallback(
            (e) => {
                if (ec) return;
                let t = Array.from(e)[0],
                    n = eA.filter((e) => e.id !== t);
                eI(n), 0 === n.length && en.current?.focus();
            },
            [eI, eA, ec],
        ),
        eD = Math.max(
            ee.findIndex((e) => e.id === eA[eA.length - 1]?.id),
            0,
        ),
        eL = i.useRef(!1);
    i.useEffect(() => {
        et || !K || eL.current
            ? K || ((eL.current = !1), es(null), (eo.current = !1))
            : ((eL.current = !0), eo.current || es(ee.length > 0 ? eD : null), (eo.current = !1), en.current?.focus());
    }, [et, K, eD, ee.length]);
    let ew = (0, d.r)(u.A.modules.select.MAX_WIDTH),
        eM = i.useMemo(() => ({ horizontalControlColumnWidth: `min(${ew}px, auto)` }), [ew]);
    return (0, r.jsx)(_.D, {
        ...B,
        "data-mana-component": "select",
        layoutConfig: eM,
        children: (e) =>
            (0, r.jsx)("div", {
                ref: em,
                style: { width: O ? "100%" : `minmax(${eO}px, 100%)` },
                children: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(I.p, {
                            ref: eC,
                            disabled: j,
                            readOnly: s,
                            loading: et,
                            clearable: m,
                            fullWidth: O,
                            isOpen: K,
                            isInert: ec,
                            hasValue: ed,
                            hasError: e?.errorMessageId != null,
                            handleToggle: eE,
                            handleClear: ep,
                            ...X(),
                            children: (0, r.jsxs)(c.s, {
                                "aria-label": W,
                                buttonRef: en,
                                buttonProps: {
                                    ...(null != H ? { id: H } : {}),
                                    style: { marginLeft: -4 },
                                    role: "combobox",
                                    "aria-haspopup": "listbox",
                                    "aria-controls": K ? Z : void 0,
                                    "aria-expanded": K,
                                    "aria-activedescendant": ea,
                                    "aria-errormessage": e?.errorMessageId,
                                    "aria-invalid": e?.errorMessageId != null,
                                    children: (0, r.jsx)(f.A, { children: eA.map((e) => e.label).join(", ") }),
                                },
                                focusProps: { ringTarget: er },
                                className: a()(N.L5, { [N.kj]: G, [N.M8]: "multiple" === n }),
                                onClick: eE,
                                onKeyDown: eN,
                                onBlur: eg,
                                "aria-describedby": e?.describedById,
                                children: [
                                    (0, r.jsxs)(f.A, { children: [W, ", "] }),
                                    (0, r.jsx)(R, {
                                        tagGroupRef: F,
                                        placeholder: b,
                                        selectionMode: n,
                                        selectedItems: eA,
                                        onRemove: eb,
                                    }),
                                ],
                            }),
                        }),
                        (0, r.jsx)(g.H, {
                            name: D,
                            form: L,
                            disabled: ec,
                            autoComplete: w,
                            selectionMode: n,
                            selectedItems: eA,
                            onSelectionChange: eI,
                            listItems: ee,
                        }),
                        !O && ef,
                        !ec &&
                            K &&
                            (0, r.jsx)("div", {
                                ref: z.setFloating,
                                className: N.S_,
                                ...Q(),
                                style: { ...q, ...J },
                                children: (0, r.jsx)(E.q, {
                                    id: Z,
                                    tabIndex: -1,
                                    required: Y,
                                    items: ee,
                                    selectionMode: n,
                                    selectedItems: eA,
                                    onSelectionChange: eI,
                                    shouldFocusWrap: C,
                                    activeDescendantIndex: ei,
                                    renderListItem: (e) => (0, r.jsx)(A.c, { ...e }),
                                    maxVisibleItems: M,
                                    loading: et,
                                }),
                            }),
                    ],
                }),
            }),
    });
}
function R(e) {
    let { placeholder: t, selectionMode: n, selectedItems: i, onRemove: s, tagGroupRef: a } = e,
        { i18n: o } = (0, h.G9)();
    return null == i || 0 === i.length
        ? (0, r.jsx)("div", {
              className: N.qf,
              children: (0, r.jsx)(m.E, {
                  variant: "text-md/normal",
                  color: "currentColor",
                  lineClamp: 1,
                  children: t,
              }),
          })
        : "multiple" === n
          ? (0, r.jsx)(p.C, { listRef: a, label: o.SELECTED_TAGS_HEADING, items: i, layout: "inline", onRemove: s })
          : (0, r.jsx)(A.c, { ...i[0], inInput: !0 });
}
