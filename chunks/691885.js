"use strict";
n.d(t, { l: () => O });
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
    h = n(140735),
    p = n(540637),
    g = n(460890),
    E = n(866711),
    A = n(834730),
    I = n(991957),
    T = n(44482),
    y = n(601973),
    S = n(483084),
    v = n(641668),
    C = n(715022),
    b = n(594597);
let N = 24,
    R = 36;
function O(e) {
    let { i18n: t } = (0, g.G9)(),
        {
            selectionMode: n,
            readOnly: a,
            autoFocus: o,
            clearable: E,
            fullWidth: A,
            closeOnSelect: O = !0,
            shouldFocusWrap: w,
            placeholder: x = t.SELECT_PLACEHOLDER,
            name: P,
            form: M,
            autoComplete: k,
            maxOptionsVisible: U = 5,
            options: G,
            formatOption: F,
            onSelectionChange: V,
            value: B,
            wrapTags: j = !1,
            ...H
        } = e,
        Y = i.useRef(null),
        { fieldProps: W } = (0, f.n)(H),
        { id: K, required: $, label: z, disabled: q } = W,
        {
            isOpen: X,
            setIsOpen: Z,
            refs: Q,
            floatingStyles: J,
            getReferenceProps: ee,
            getFloatingProps: et,
            transitionStyles: en,
        } = (0, v.G)(),
        er = i.useId(),
        { options: ei, loading: ea } = (0, S.K)({ active: X, options: G, renderOption: F }),
        es = i.useRef(null),
        eo = i.useRef(null),
        el = O ?? "multiple" !== n,
        eu = Array.isArray(B) ? B.length > 0 : null != B,
        ec = q || a,
        { measuredWidth: ed, itemsForMeasurement: e_ } = D(ei, n),
        ef = i.useCallback(() => {
            ec || Z(!X);
        }, [ec, Z, X]),
        eh = i.useCallback(() => {
            Z(!1), es.current?.focus();
        }, [Z]),
        ep = i.useCallback(() => {
            !1 !== E && ("multiple" === n ? V([]) : V(null), es.current?.focus());
        }, [V, n, E]);
    i.useEffect(() => {
        o && es.current?.focus();
    }, [o]);
    let em = i.useCallback(
            (e) => {
                if (!ec)
                    switch (e.key) {
                        case "ArrowDown":
                            e.preventDefault(), Z(!0);
                            break;
                        case "ArrowLeft":
                            e.preventDefault(), Y.current?.firstChild?.focus();
                            break;
                        case "ArrowRight":
                            e.preventDefault(), Y.current?.lastChild?.focus();
                            break;
                        case "Backspace":
                            eu && (e.preventDefault(), Y.current?.lastChild?.focus());
                            break;
                        case "Escape":
                            eu && E && (e.preventDefault(), e.stopPropagation(), ep());
                    }
            },
            [ep, eu, E, Z, ec],
        ),
        eg = i.useMemo(() => {
            let e = Array.isArray(B) ? B : [B];
            return ei.filter((t) => (0, C.fI)(t.value, e));
        }, [B, ei]),
        eE = i.useMemo(() => {
            if (!A) return `${Math.max(ed ?? 200, 200) * ("multiple" === n ? 1.5 : 1) + !!E * N + R + 12}px`;
        }, [A, ed, n, E]),
        eA = i.useCallback(
            (e) => {
                if (ec) return;
                let t = Array.from(e);
                "multiple" === n && t.length < 1 ? V([]) : "multiple" === n ? V(t.map((e) => e.value)) : V(t[0]?.value),
                    el && X && eh();
            },
            [ec, n, V, el, eh, X],
        ),
        eI = "multiple" === n && eg.length > 0,
        eT = i.useRef(null);
    i.useEffect(() => {
        clearTimeout(eT.current),
            eI &&
                !j &&
                (eT.current = setTimeout(() => {
                    Y.current?.lastElementChild?.scrollIntoView({ behavior: "smooth", inline: "end", block: "end" });
                }, 10));
    }, [eg, eI, j]);
    let ey = (0, l.A)(eo, Q.setReference),
        eS = i.useCallback(
            (e) => {
                if (ec) return;
                let t = Array.from(e)[0],
                    n = eg.filter((e) => e.id !== t);
                eA(n), 0 === n.length && es.current?.focus();
            },
            [eA, eg, ec],
        ),
        ev = Math.max(
            ei.findIndex((e) => e.id === eg[eg.length - 1]?.id),
            0,
        ),
        eC = i.useRef(null);
    i.useEffect(
        () => (
            !ea && X && (eC.current = setTimeout(() => document.getElementById((0, C.ZN)(er, ev))?.focus(), 10)),
            () => {
                null != eC.current && clearTimeout(eC.current);
            }
        ),
        [ea, er, X, ev],
    );
    let eb = (0, c.r)(u.A.modules.select.MAX_WIDTH),
        eN = i.useMemo(() => ({ horizontalControlColumnWidth: `min(${eb}px, auto)` }), [eb]);
    function eR(e) {
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(y.p, {
                    ref: ey,
                    disabled: q,
                    readOnly: a,
                    loading: ea,
                    clearable: E,
                    fullWidth: A,
                    isOpen: X,
                    isInert: ec,
                    hasValue: eu,
                    hasError: e?.errorMessageId != null,
                    handleToggle: ef,
                    handleClear: ep,
                    ...ee(),
                    children: (0, r.jsxs)(d.s, {
                        "aria-label": z,
                        buttonRef: es,
                        buttonProps: { ...(null != K ? { id: K } : {}), style: { marginLeft: -4 } },
                        focusProps: { ringTarget: eo },
                        className: s()(b.L5, { [b.kj]: j, [b.M8]: "multiple" === n }),
                        onClick: ef,
                        onKeyDown: em,
                        "aria-expanded": X,
                        "aria-busy": ea,
                        "aria-haspopup": "listbox",
                        "aria-controls": er,
                        "aria-describedby": e?.describedById,
                        "aria-errormessage": e?.errorMessageId,
                        "aria-invalid": e?.errorMessageId != null,
                        children: [
                            (0, r.jsxs)(h.A, { children: [z, ", "] }),
                            (0, r.jsx)(L, {
                                tagGroupRef: Y,
                                placeholder: x,
                                selectionMode: n,
                                selectedItems: eg,
                                onRemove: eS,
                            }),
                        ],
                    }),
                }),
                (0, r.jsx)(I.H, {
                    name: P,
                    form: M,
                    disabled: ec,
                    autoComplete: k,
                    selectionMode: n,
                    selectedItems: eg,
                    onSelectionChange: eA,
                    listItems: ei,
                }),
                !A && e_,
                !ec &&
                    X &&
                    (0, r.jsx)("div", {
                        ref: Q.setFloating,
                        className: b.S_,
                        ...et(),
                        style: { ...J, ...en },
                        children: (0, r.jsx)(_.l, {
                            children: (0, r.jsx)(p.q, {
                                id: er,
                                required: $,
                                items: ei,
                                selectionMode: n,
                                selectedItems: eg,
                                onSelectionChange: eA,
                                shouldFocusWrap: w,
                                renderListItem: (e) => (0, r.jsx)(T.c, { ...e }),
                                maxVisibleItems: U,
                                loading: ea,
                                typeahead: !0,
                            }),
                        }),
                    }),
            ],
        });
    }
    return (0, r.jsx)(f.D, {
        ...W,
        "data-mana-component": "select",
        layoutConfig: eN,
        children: (e) => (0, r.jsx)("div", { style: { width: A ? "100%" : `minmax(${eE}px, 100%)` }, children: eR(e) }),
    });
}
function D(e, t) {
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
                    children: (0, r.jsx)(p.q, {
                        id: `measurement-${s}`,
                        required: !1,
                        items: e,
                        selectionMode: t,
                        selectedItems: [],
                        onSelectionChange: () => {},
                        shouldFocusWrap: !1,
                        renderListItem: (e) => (0, r.jsx)(T.c, { ...e }),
                    }),
                }),
            [e, t, s, n],
        ),
    };
}
function L(e) {
    let { placeholder: t, selectionMode: n, selectedItems: i, onRemove: a, tagGroupRef: s } = e,
        { i18n: o } = (0, g.G9)();
    return null == i || 0 === i.length
        ? (0, r.jsx)("div", {
              className: b.qf,
              children: (0, r.jsx)(A.E, {
                  variant: "text-md/normal",
                  color: "currentColor",
                  lineClamp: 1,
                  children: t,
              }),
          })
        : "multiple" === n
          ? (0, r.jsx)(E.C, { listRef: s, label: o.SELECTED_TAGS_HEADING, items: i, layout: "inline", onRemove: a })
          : (0, r.jsx)(T.c, { ...i[0], inInput: !0 });
}
