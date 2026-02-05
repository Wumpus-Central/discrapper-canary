"use strict";
n.d(t, { l: () => R });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(494012),
    l = n(612324),
    u = n(827734),
    c = n(603392),
    d = n(890856),
    _ = n(113325),
    f = n(452027),
    p = n(140735),
    h = n(540637),
    m = n(460890),
    g = n(866711),
    E = n(834730),
    A = n(991957),
    I = n(44482),
    T = n(601973),
    y = n(483084),
    S = n(641668),
    v = n(715022),
    C = n(594597);
let b = 24,
    N = 36;
function R(e) {
    let { i18n: t } = (0, m.G9)(),
        {
            selectionMode: n,
            readOnly: a,
            autoFocus: o,
            clearable: g,
            fullWidth: E,
            closeOnSelect: R = !0,
            shouldFocusWrap: L,
            placeholder: w = t.SELECT_PLACEHOLDER,
            name: x,
            form: P,
            autoComplete: M,
            maxOptionsVisible: k = 5,
            options: U,
            formatOption: G,
            onSelectionChange: V,
            value: F,
            wrapTags: B = !1,
            ...j
        } = e,
        H = i.useRef(null),
        { fieldProps: Y } = (0, f.n)(j),
        { id: W, required: K, label: z, disabled: $ } = Y,
        {
            isOpen: q,
            setIsOpen: Z,
            refs: Q,
            floatingStyles: X,
            getReferenceProps: J,
            getFloatingProps: ee,
            transitionStyles: et,
        } = (0, S.G)(),
        en = i.useId(),
        { options: er, loading: ei } = (0, y.K)({ active: q, options: U, renderOption: G }),
        ea = i.useRef(null),
        es = i.useRef(null),
        eo = R ?? "multiple" !== n,
        el = Array.isArray(F) ? F.length > 0 : null != F,
        eu = $ || a,
        { measuredWidth: ec, itemsForMeasurement: ed } = O(er, n),
        e_ = i.useCallback(() => {
            eu || Z(!q);
        }, [eu, Z, q]),
        ef = i.useCallback(() => {
            Z(!1), ea.current?.focus();
        }, [Z]),
        ep = i.useCallback(() => {
            !1 !== g && ("multiple" === n ? V([]) : V(null), ea.current?.focus());
        }, [V, n, g]);
    i.useEffect(() => {
        o && ea.current?.focus();
    }, [o]);
    let eh = i.useCallback(
            (e) => {
                if (!eu)
                    switch (e.key) {
                        case "ArrowDown":
                            e.preventDefault(), Z(!0);
                            break;
                        case "ArrowLeft":
                            e.preventDefault(), H.current?.firstChild?.focus();
                            break;
                        case "ArrowRight":
                            e.preventDefault(), H.current?.lastChild?.focus();
                            break;
                        case "Backspace":
                            el && (e.preventDefault(), H.current?.lastChild?.focus());
                            break;
                        case "Escape":
                            el && g && (e.preventDefault(), e.stopPropagation(), ep());
                    }
            },
            [ep, el, g, Z, eu],
        ),
        em = i.useMemo(() => {
            let e = Array.isArray(F) ? F : [F];
            return er.filter((t) => (0, v.fI)(t.value, e));
        }, [F, er]),
        eg = i.useMemo(() => {
            if (!E) return `${Math.max(ec ?? 200, 200) * ("multiple" === n ? 1.5 : 1) + !!g * b + N + 12}px`;
        }, [E, ec, n, g]),
        eE = i.useCallback(
            (e) => {
                if (eu) return;
                let t = Array.from(e);
                "multiple" === n && t.length < 1 ? V([]) : "multiple" === n ? V(t.map((e) => e.value)) : V(t[0]?.value),
                    eo && q && ef();
            },
            [eu, n, V, eo, ef, q],
        ),
        eA = "multiple" === n && em.length > 0,
        eI = i.useRef(null);
    i.useEffect(() => {
        clearTimeout(eI.current),
            eA &&
                !B &&
                (eI.current = setTimeout(() => {
                    H.current?.lastElementChild?.scrollIntoView({ behavior: "smooth", inline: "end", block: "end" });
                }, 10));
    }, [em, eA, B]);
    let eT = (0, l.A)(es, Q.setReference),
        ey = i.useCallback(
            (e) => {
                if (eu) return;
                let t = Array.from(e)[0],
                    n = em.filter((e) => e.id !== t);
                eE(n), 0 === n.length && ea.current?.focus();
            },
            [eE, em, eu],
        ),
        eS = Math.max(
            er.findIndex((e) => e.id === em[em.length - 1]?.id),
            0,
        ),
        ev = i.useRef(null);
    i.useEffect(
        () => (
            !ei && q && (ev.current = setTimeout(() => document.getElementById((0, v.ZN)(en, eS))?.focus(), 10)),
            () => {
                null != ev.current && clearTimeout(ev.current);
            }
        ),
        [ei, en, q, eS],
    );
    let eC = (0, c.r)(u.A.modules.select.MAX_WIDTH),
        eb = i.useMemo(() => ({ horizontalControlColumnWidth: `min(${eC}px, auto)` }), [eC]);
    function eN(e) {
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(T.p, {
                    ref: eT,
                    disabled: $,
                    readOnly: a,
                    loading: ei,
                    clearable: g,
                    fullWidth: E,
                    isOpen: q,
                    isInert: eu,
                    hasValue: el,
                    hasError: e?.errorMessageId != null,
                    handleToggle: e_,
                    handleClear: ep,
                    ...J(),
                    children: (0, r.jsxs)(d.s, {
                        "aria-label": z,
                        buttonRef: ea,
                        buttonProps: { ...(null != W ? { id: W } : {}), style: { marginLeft: -4 } },
                        focusProps: { ringTarget: es },
                        className: s()(C.L5, { [C.kj]: B, [C.M8]: "multiple" === n }),
                        onClick: e_,
                        onKeyDown: eh,
                        "aria-expanded": q,
                        "aria-busy": ei,
                        "aria-haspopup": "listbox",
                        "aria-controls": en,
                        "aria-describedby": e?.describedById,
                        "aria-errormessage": e?.errorMessageId,
                        "aria-invalid": e?.errorMessageId != null,
                        children: [
                            (0, r.jsxs)(p.A, { children: [z, ", "] }),
                            (0, r.jsx)(D, {
                                tagGroupRef: H,
                                placeholder: w,
                                selectionMode: n,
                                selectedItems: em,
                                onRemove: ey,
                            }),
                        ],
                    }),
                }),
                (0, r.jsx)(A.H, {
                    name: x,
                    form: P,
                    disabled: eu,
                    autoComplete: M,
                    selectionMode: n,
                    selectedItems: em,
                    onSelectionChange: eE,
                    listItems: er,
                }),
                !E && ed,
                !eu &&
                    q &&
                    (0, r.jsx)("div", {
                        ref: Q.setFloating,
                        className: C.S_,
                        ...ee(),
                        style: { ...X, ...et },
                        children: (0, r.jsx)(_.l, {
                            children: (0, r.jsx)(h.q, {
                                id: en,
                                required: K,
                                items: er,
                                selectionMode: n,
                                selectedItems: em,
                                onSelectionChange: eE,
                                shouldFocusWrap: L,
                                renderListItem: (e) => (0, r.jsx)(I.c, { ...e }),
                                maxVisibleItems: k,
                                loading: ei,
                                typeahead: !0,
                            }),
                        }),
                    }),
            ],
        });
    }
    return (0, r.jsx)(f.D, {
        ...Y,
        "data-mana-component": "select",
        layoutConfig: eb,
        children: (e) => (0, r.jsx)("div", { style: { width: E ? "100%" : `minmax(${eg}px, 100%)` }, children: eN(e) }),
    });
}
function O(e, t) {
    let { ref: n, width: a } = (0, o.Ay)(),
        s = i.useId();
    return {
        measuredWidth: a,
        itemsForMeasurement: i.useMemo(
            () =>
                (0, r.jsx)("div", {
                    ref: n,
                    style: { position: "absolute", visibility: "hidden", pointerEvents: "none", width: "max-content" },
                    "aria-hidden": "true",
                    children: (0, r.jsx)(h.q, {
                        id: `measurement-${s}`,
                        required: !1,
                        items: e,
                        selectionMode: t,
                        selectedItems: [],
                        onSelectionChange: () => {},
                        shouldFocusWrap: !1,
                        renderListItem: (e) => (0, r.jsx)(I.c, { ...e }),
                    }),
                }),
            [e, t, s, n],
        ),
    };
}
function D(e) {
    let { placeholder: t, selectionMode: n, selectedItems: i, onRemove: a, tagGroupRef: s } = e,
        { i18n: o } = (0, m.G9)();
    return null == i || 0 === i.length
        ? (0, r.jsx)("div", {
              className: C.qf,
              children: (0, r.jsx)(E.E, {
                  variant: "text-md/normal",
                  color: "currentColor",
                  lineClamp: 1,
                  children: t,
              }),
          })
        : "multiple" === n
          ? (0, r.jsx)(g.C, { listRef: s, label: o.SELECTED_TAGS_HEADING, items: i, layout: "inline", onRemove: a })
          : (0, r.jsx)(I.c, { ...i[0], inInput: !0 });
}
