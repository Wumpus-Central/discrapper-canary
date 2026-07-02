"use strict";
n.d(t, { iS: () => P, a3: () => w, X2: () => x }), n(321073);
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(896170),
    l = n(612324),
    u = n(452027),
    d = n(15626),
    c = n(540637),
    _ = n(992251),
    h = n(483084),
    f = n(715022),
    E = n(44482),
    p = n(601973),
    m = n(991957),
    g = n(528265),
    A = n(187322),
    I = n(460890),
    T = n(661531),
    S = n(292666),
    N = n(602853),
    C = n(652215);
function y() {
    return r.useContext(v);
}
let v = r.createContext({
    value: void 0,
    options: [],
    selectedOptions: [],
    filteredOptions: [],
    groups: [],
    query: "",
    setQuery: C.tEg,
    activeDescendantIndex: null,
    setActiveDescendantIndex: C.tEg,
    loading: !1,
    selectionMode: "single",
    handleSelectionChange: C.tEg,
    onSelectionChange: C.tEg,
    isOpen: !1,
    setIsOpen: C.tEg,
    isEditing: !1,
    setIsEditing: C.tEg,
});
var R = n(571247),
    O = n(375708),
    b = n(311109),
    L = n(930856);
let D = { keys: ["label"] };
function P(e) {
    let {
            children: t,
            isCollapsible: n = !1,
            maxOptionsVisible: s = 5,
            isOpen: a = !0,
            setIsOpen: l,
            options: u,
            ...d
        } = e,
        {
            selectionMode: c,
            disabled: _,
            readOnly: f,
            closeOnSelect: E,
            formatOption: p,
            onSelectionChange: m,
            value: g,
            customMatchSorter: A,
            matchSorterOptions: I,
            required: T,
        } = d,
        S = r.useId(),
        N = r.useRef(null),
        [C, y] = r.useState(null),
        [R, O] = r.useState(!1),
        [b, L] = r.useState(""),
        [P, w] = r.useState(""),
        {
            options: M,
            groups: x,
            loading: U,
            onQueryChange: k,
        } = (0, h.K)({ active: a ?? !0, options: u, renderOption: p }),
        G = r.useCallback((e, t) => {
            w(e), L(t ?? e);
        }, []);
    r.useEffect(() => {
        k(b);
    }, [k, b]);
    let V = r.useCallback((e) => (null != A ? A(e, b) : (0, o.Ht)(e, b, I ?? D)), [b, A, I]),
        { flatOptions: F, groups: B } = r.useMemo(() => {
            if ("" === b) return { flatOptions: M, groups: x };
            if (0 === x.length) return { flatOptions: V(M), groups: [] };
            let e = [],
                t = [],
                n = 0;
            for (let i of x) {
                let r = V(M.slice(n, n + i.count));
                (n += i.count), 0 !== r.length && (e.push(...r), t.push({ label: i.label, count: r.length }));
            }
            return { flatOptions: e, groups: t };
        }, [M, x, b, V]),
        j = r.useRef(void 0),
        H = r.useMemo(
            () =>
                ("single" === c ? (j.current = M.find((e) => e.value === g)) : (j.current = void 0),
                null == g || (Array.isArray(g) && 0 === g.length))
                    ? []
                    : (Array.isArray(g) ? g : [g]).map((e) => M.find((t) => t.value === e)).filter((e) => null != e),
            [g, M, c],
        );
    r.useEffect(() => {
        R || ("single" === c && G(j.current?.label ?? "", ""));
    }, [G, H, c, R]),
        r.useEffect(() => {
            if (a && null != j.current) {
                let e = F.findIndex((e) => e.value === j.current?.value);
                y(-1 !== e ? e : null);
            }
        }, [a, y, F]);
    let W = _ || f,
        Y = r.useCallback(
            (e) => {
                if (W || (T && 0 === e.length)) return;
                let t = Array.from(e);
                "multiple" === c && t.length < 1 ? m([]) : "multiple" === c ? m(t.map((e) => e.value)) : m(t[0]?.value),
                    E && a && l?.(!1),
                    O(!1);
            },
            [W, c, m, E, a, l, T],
        ),
        K = H.length > 0;
    return (0, i.jsx)(v.Provider, {
        value: {
            activeDescendantIndex: C,
            setActiveDescendantIndex: y,
            listBoxId: S,
            inputFieldRef: N,
            isInert: W,
            isCollapsible: n,
            hasValue: K,
            value: g,
            options: M,
            filteredOptions: F,
            groups: B,
            selectedOptions: H,
            maxOptionsVisible: s,
            query: P,
            setQuery: G,
            loading: U,
            handleSelectionChange: Y,
            isOpen: a,
            setIsOpen: l,
            isEditing: R,
            setIsEditing: O,
            ...d,
        },
        children: t,
    });
}
function w(e) {
    let { ref: t, ...n } = e,
        { fieldProps: s, props: a } = (0, u.n)(n),
        o = (0, N.r)(T.A.modules.select.MAX_WIDTH),
        l = r.useMemo(() => ({ horizontalControlColumnWidth: `minmax(${o}px, auto)` }), [o]);
    return (0, i.jsx)(u.D, {
        ...s,
        "data-mana-component": "combobox",
        layoutConfig: l,
        children: (0, i.jsx)(M, { ...a, ref: t }),
    });
}
function M(e) {
    let {
            id: t,
            autoFocus: n,
            placeholder: s = O.intl.string(R.default["A+pfVR"]),
            hideTags: o,
            name: u,
            form: c,
            showChevronButton: _ = !1,
            onQueryChange: h,
            onFocus: I,
            onBlur: T,
            onKeyDown: N,
            wrapTags: C,
            ref: v,
        } = e,
        D = r.useRef(null),
        P = r.useRef(null),
        w = r.useRef(null),
        M = r.useContext(d._),
        {
            activeDescendantIndex: x,
            setActiveDescendantIndex: U,
            selectionMode: k,
            disabled: G,
            readOnly: V,
            loading: F,
            clearable: B,
            required: j,
            listBoxId: H,
            inputFieldRef: W,
            shouldFocusWrap: Y,
            isInert: K,
            isCollapsible: $,
            hasValue: z,
            handleSelectionChange: q,
            onSelectionChange: Z,
            isOpen: X,
            setIsOpen: Q,
            options: J,
            selectedOptions: ee,
            filteredOptions: et,
            query: en,
            setQuery: ei,
            isEditing: er,
            setIsEditing: es,
        } = y(),
        ea = "multiple" === k && z,
        eo = null != x ? (0, f.ZN)(H, x) : void 0,
        el = r.useCallback(() => {
            K || Q?.((e) => (e || P.current?.focus(), !e));
        }, [K, Q]),
        eu = r.useCallback(() => {
            !0 === B && ("multiple" === k ? Z([]) : Z(null), ei(""), P.current?.focus());
        }, [Z, k, B, ei]),
        ed = r.useCallback(
            (e) => {
                es(!0), I?.(e), P.current?.setSelectionRange(en?.length ?? 0, en?.length ?? 0);
            },
            [I, es, en],
        ),
        ec = r.useCallback(() => {
            K || Q?.(!0);
        }, [Q, K]),
        e_ = r.useCallback(
            (e) => {
                e.relatedTarget?.closest(`[data-list-id="${H}"]`) == null && (es(!1), Q?.(!1), T?.(e));
            },
            [T, Q, H, es],
        );
    r.useEffect(() => {
        ea &&
            !C &&
            (w.current = setTimeout(() => {
                P.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
            }, 10));
    }, [ee, ea, C]);
    let eh = r.useCallback(() => {
            K || (Q?.(!0), P.current?.focus());
        }, [Q, K]),
        ef = r.useCallback(() => {
            P.current?.select();
        }, []),
        eE = r.useCallback(
            (e) => {
                if (K) return;
                let t = Array.from(e)[0];
                q(ee.filter((e) => e.id !== t));
            },
            [q, ee, K],
        ),
        ep = r.useCallback(
            (e) => {
                let t = et.length,
                    n = 1;
                switch ((N?.(e), e.key)) {
                    case "ArrowDown":
                    case "PageDown":
                        if (
                            ((n = "PageDown" === e.key ? 10 : 1),
                            0 === t || (e.preventDefault(), Q?.(!0), e.altKey || !X))
                        )
                            return;
                        U((e) => {
                            if (null === e) return 0;
                            let i = e + n;
                            return i >= t && Y ? 0 : Math.min(i, t - 1);
                        });
                        break;
                    case "ArrowUp":
                    case "PageUp":
                        if (((n = "PageUp" === e.key ? 10 : 1), 0 === t)) return;
                        e.preventDefault(),
                            U((e) => {
                                if (null === e) return 0;
                                let i = e - n;
                                return i < 0 && Y ? t - 1 : Math.max(i, 0);
                            }),
                            Q?.(!0);
                        break;
                    case "Enter":
                        if ((e.preventDefault(), e.stopPropagation(), !X)) {
                            if (0 === t) return;
                            Q?.(!0);
                            return;
                        }
                        if (null == x || t - 1 < x) return;
                        let i = et[x];
                        if (null == i || !0 === i.disabled) return;
                        if (j && 1 === ee.length && ee.includes(i)) return void q(ee);
                        q("single" === k ? [i] : (0, f.qH)(k, ee, i));
                        break;
                    case "Backspace":
                        "multiple" === k &&
                            "" === en &&
                            ee.length > 0 &&
                            null != D.current &&
                            (e.preventDefault(), e.stopPropagation(), D.current.lastChild?.focus());
                        break;
                    case "Escape":
                        z && B && (e.preventDefault(), e.stopPropagation(), eu());
                        break;
                    case "Home":
                        if ((e.preventDefault(), 0 === t)) return;
                        U(0);
                        break;
                    case "End":
                        if ((e.preventDefault(), 0 === t)) return;
                        U(t - 1);
                }
            },
            [k, j, B, z, Y, X, N, eu, q, ee, en, Q, et, x, U],
        ),
        em = r.useCallback(
            (e) => {
                es(!0), ei(e.target.value), Q?.(!0), h?.(e), U(null);
            },
            [h, es, ei, Q, U],
        ),
        eg = r.useMemo(() => {
            if (0 === ee.length) return null;
            if ("single" === k) {
                if (er) return null;
                let e = Array.from(ee)[0];
                return (0, i.jsx)("div", {
                    className: L.OS,
                    children: (0, i.jsx)(E.c, { ...e, onClick: ef, "aria-hidden": !0, inInput: !0 }),
                });
            }
            if (o) return null;
            let e = Array.from(ee).map((e) => {
                let t;
                return (
                    null != e.leading && (t = e.leading),
                    {
                        id: e.id,
                        label: e.label,
                        icon: t,
                        isDisabled: G || e.disabled,
                        accessibilityHint: O.intl.string(R.default["/Y7vRd"]),
                    }
                );
            });
            return (0, i.jsx)(g.C, {
                listRef: D,
                label: O.intl.string(R.default.VMNfsY),
                items: e,
                layout: "inline",
                onRemove: eE,
            });
        }, [k, G, ef, eE, er, ee, o]),
        eA = (0, l.A)(W, v);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(p.p, {
                ref: eA,
                disabled: G,
                readOnly: V,
                loading: F,
                clearable: B,
                fullWidth: !0,
                showChevronButton: _,
                isOpen: !!X,
                isInert: K,
                hasValue: z,
                hasError: M?.errorMessageId != null,
                handleToggle: el,
                handleClear: eu,
                children: (0, i.jsx)("div", {
                    className: a()(L._U, { [L.kS]: ea, [L.kj]: ea && C }),
                    onClick: eh,
                    children: (0, i.jsxs)("div", {
                        className: L.P$,
                        children: [
                            eg,
                            (0, i.jsx)(A.vN, {
                                ringTarget: W,
                                children: (0, i.jsx)(S.p, {
                                    ref: P,
                                    id: t,
                                    className: a()(b.input, L.kk, { [L.kK]: "single" === k && z && !er }),
                                    autoFocus: n,
                                    placeholder: s,
                                    role: "combobox",
                                    disabled: G,
                                    readOnly: V,
                                    "aria-haspopup": "listbox",
                                    "aria-autocomplete": "list",
                                    "aria-busy": F,
                                    "aria-controls": H,
                                    "aria-expanded": !$ || X,
                                    "aria-activedescendant": eo,
                                    "aria-labelledby": M?.labelId,
                                    "aria-describedby": M?.describedById,
                                    "aria-errormessage": M?.errorMessageId,
                                    "aria-invalid": M?.errorMessageId != null,
                                    "aria-required": j,
                                    value: en ?? "",
                                    onChange: em,
                                    onFocus: ed,
                                    onBlur: e_,
                                    onKeyDown: ep,
                                    onClick: ec,
                                }),
                            }),
                        ],
                    }),
                }),
            }),
            (0, i.jsx)(m.H, {
                name: u,
                form: c,
                disabled: K,
                selectionMode: k,
                selectedItems: ee,
                onSelectionChange: q,
                listItems: J,
            }),
        ],
    });
}
function x(e) {
    let { renderListItem: t, renderEmptyState: n, maxVisibleItems: s = 5 } = e,
        {
            filteredOptions: a,
            selectedOptions: o,
            options: l,
            groups: u,
            activeDescendantIndex: d,
            selectionMode: h,
            listBoxId: f,
            required: E,
            disabled: p,
            handleSelectionChange: m,
            query: g,
            loading: A,
        } = y(),
        { i18n: T } = r.useContext(I.VO);
    return (0, i.jsx)(c.q, {
        id: f,
        required: E,
        disabled: p,
        items: a ?? l,
        groups: u,
        tabIndex: -1,
        selectionMode: h,
        selectedItems: o,
        onSelectionChange: m,
        activeDescendantIndex: d,
        renderListItem: t,
        renderEmptyState:
            n ??
            (() =>
                (0, i.jsx)(_.o, {
                    message: null == g || "" === g ? T.LISTBOX_EMPTY_STATE : T.LISTBOX_EMPTY_STATE_WITH_QUERY(g),
                })),
        maxVisibleItems: s,
        loading: A,
    });
}
