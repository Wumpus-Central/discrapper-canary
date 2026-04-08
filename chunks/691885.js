"use strict";
n.d(t, { l: () => O });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
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
    E = n(866711),
    g = n(834730),
    A = n(991957),
    I = n(44482),
    T = n(601973),
    S = n(483084),
    y = n(641668),
    v = n(715022),
    N = n(782587);
let C = 24,
    R = 36;
function O(e) {
    let { i18n: t } = (0, m.G9)(),
        {
            selectionMode: n,
            readOnly: s,
            autoFocus: o,
            clearable: E,
            fullWidth: g,
            closeOnSelect: O = !0,
            shouldFocusWrap: L,
            placeholder: w = t.SELECT_PLACEHOLDER,
            name: M,
            form: x,
            autoComplete: P,
            maxOptionsVisible: k = 5,
            options: U,
            formatOption: G,
            onSelectionChange: F,
            value: V,
            wrapTags: B = !1,
            ...H
        } = e,
        j = i.useRef(null),
        { fieldProps: Y } = (0, f.n)(H),
        { id: W, required: K, label: $, disabled: z } = Y,
        {
            isOpen: q,
            setIsOpen: Z,
            refs: X,
            floatingStyles: Q,
            getReferenceProps: J,
            getFloatingProps: ee,
            transitionStyles: et,
        } = (0, y.G)(),
        en = i.useId(),
        { options: er, loading: ei } = (0, S.K)({ active: q, options: U, renderOption: G }),
        es = i.useRef(null),
        ea = i.useRef(null),
        eo = O ?? "multiple" !== n,
        el = Array.isArray(V) ? V.length > 0 : null != V,
        eu = z || s,
        { measuredWidth: ec, itemsForMeasurement: ed } = b(er, n),
        e_ = i.useCallback(() => {
            eu || Z(!q);
        }, [eu, Z, q]),
        ef = i.useCallback(() => {
            Z(!1), es.current?.focus();
        }, [Z]),
        ep = i.useCallback(() => {
            !1 !== E && ("multiple" === n ? F([]) : F(null), es.current?.focus());
        }, [F, n, E]);
    i.useEffect(() => {
        o && es.current?.focus();
    }, [o]);
    let eh = i.useCallback(
            (e) => {
                if (!eu)
                    switch (e.key) {
                        case "ArrowDown":
                            e.preventDefault(), Z(!0);
                            break;
                        case "ArrowLeft":
                            e.preventDefault(), j.current?.firstChild?.focus();
                            break;
                        case "ArrowRight":
                            e.preventDefault(), j.current?.lastChild?.focus();
                            break;
                        case "Backspace":
                            el && (e.preventDefault(), j.current?.lastChild?.focus());
                            break;
                        case "Escape":
                            el && E && (e.preventDefault(), e.stopPropagation(), ep());
                    }
            },
            [ep, el, E, Z, eu],
        ),
        em = i.useMemo(() => {
            let e = Array.isArray(V) ? V : [V];
            return er.filter((t) => (0, v.fI)(t.value, e));
        }, [V, er]),
        eE = i.useMemo(() => {
            if (!g) return `${Math.max(ec ?? 200, 200) * ("multiple" === n ? 1.5 : 1) + !!E * C + R + 12}px`;
        }, [g, ec, n, E]),
        eg = i.useCallback(
            (e) => {
                if (eu) return;
                let t = Array.from(e);
                "multiple" === n && t.length < 1 ? F([]) : "multiple" === n ? F(t.map((e) => e.value)) : F(t[0]?.value),
                    eo && q && ef();
            },
            [eu, n, F, eo, ef, q],
        ),
        eA = "multiple" === n && em.length > 0,
        eI = i.useRef(null);
    i.useEffect(() => {
        clearTimeout(eI.current),
            eA &&
                !B &&
                (eI.current = setTimeout(() => {
                    j.current?.lastElementChild?.scrollIntoView({ behavior: "smooth", inline: "end", block: "end" });
                }, 10));
    }, [em, eA, B]);
    let eT = (0, l.A)(ea, X.setReference),
        eS = i.useCallback(
            (e) => {
                if (eu) return;
                let t = Array.from(e)[0],
                    n = em.filter((e) => e.id !== t);
                eg(n), 0 === n.length && es.current?.focus();
            },
            [eg, em, eu],
        ),
        ey = Math.max(
            er.findIndex((e) => e.id === em[em.length - 1]?.id),
            0,
        ),
        ev = i.useRef(null);
    i.useEffect(
        () => (
            !ei && q && (ev.current = setTimeout(() => document.getElementById((0, v.ZN)(en, ey))?.focus(), 10)),
            () => {
                null != ev.current && clearTimeout(ev.current);
            }
        ),
        [ei, en, q, ey],
    );
    let eN = (0, c.r)(u.A.modules.select.MAX_WIDTH),
        eC = i.useMemo(() => ({ horizontalControlColumnWidth: `min(${eN}px, auto)` }), [eN]);
    function eR(e) {
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(T.p, {
                    ref: eT,
                    disabled: z,
                    readOnly: s,
                    loading: ei,
                    clearable: E,
                    fullWidth: g,
                    isOpen: q,
                    isInert: eu,
                    hasValue: el,
                    hasError: e?.errorMessageId != null,
                    handleToggle: e_,
                    handleClear: ep,
                    ...J(),
                    children: (0, r.jsxs)(d.s, {
                        "aria-label": $,
                        buttonRef: es,
                        buttonProps: { ...(null != W ? { id: W } : {}), style: { marginLeft: -4 } },
                        focusProps: { ringTarget: ea },
                        className: a()(N.L5, { [N.kj]: B, [N.M8]: "multiple" === n }),
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
                            (0, r.jsxs)(p.A, { children: [$, ", "] }),
                            (0, r.jsx)(D, {
                                tagGroupRef: j,
                                placeholder: w,
                                selectionMode: n,
                                selectedItems: em,
                                onRemove: eS,
                            }),
                        ],
                    }),
                }),
                (0, r.jsx)(A.H, {
                    name: M,
                    form: x,
                    disabled: eu,
                    autoComplete: P,
                    selectionMode: n,
                    selectedItems: em,
                    onSelectionChange: eg,
                    listItems: er,
                }),
                !g && ed,
                !eu &&
                    q &&
                    (0, r.jsx)("div", {
                        ref: X.setFloating,
                        className: N.S_,
                        ...ee(),
                        style: { ...Q, ...et },
                        children: (0, r.jsx)(_.l, {
                            children: (0, r.jsx)(h.q, {
                                id: en,
                                required: K,
                                items: er,
                                selectionMode: n,
                                selectedItems: em,
                                onSelectionChange: eg,
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
        layoutConfig: eC,
        children: (e) => (0, r.jsx)("div", { style: { width: g ? "100%" : `minmax(${eE}px, 100%)` }, children: eR(e) }),
    });
}
function b(e, t) {
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
                    children: (0, r.jsx)(h.q, {
                        id: `measurement-${a}`,
                        required: !1,
                        items: e,
                        selectionMode: t,
                        selectedItems: [],
                        onSelectionChange: () => {},
                        shouldFocusWrap: !1,
                        renderListItem: (e) => (0, r.jsx)(I.c, { ...e }),
                    }),
                }),
            [e, t, a, n],
        ),
    };
}
function D(e) {
    let { placeholder: t, selectionMode: n, selectedItems: i, onRemove: s, tagGroupRef: a } = e,
        { i18n: o } = (0, m.G9)();
    return null == i || 0 === i.length
        ? (0, r.jsx)("div", {
              className: N.qf,
              children: (0, r.jsx)(g.E, {
                  variant: "text-md/normal",
                  color: "currentColor",
                  lineClamp: 1,
                  children: t,
              }),
          })
        : "multiple" === n
          ? (0, r.jsx)(E.C, { listRef: a, label: o.SELECTED_TAGS_HEADING, items: i, layout: "inline", onRemove: s })
          : (0, r.jsx)(I.c, { ...i[0], inInput: !0 });
}
