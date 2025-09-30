l.d(t, { default: () => v }), l(388685), l(539854), l(781311);
var n = l(951288),
    r = l(647438),
    a = l(913527),
    i = l.n(a),
    s = l(442837),
    o = l(82659),
    u = l(481060),
    c = l(471445),
    d = l(313201),
    h = l(592125),
    x = l(944486),
    g = l(594174),
    p = l(585483),
    F = l(607802),
    C = l(465524),
    m = l(611004),
    T = l(981631),
    E = l(388032),
    y = l(540432);
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var l = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(l);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(l).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(l, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = l[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function S(e) {
    let { index: t, query: l, handleQuerySelect: r, handleDateSelect: a, options: s, handleRemoveDateFilter: o } = e,
        c = i()(),
        d = i()("2015-05-15");
    return (0, n.jsxs)("div", {
        className: y.dateFilter,
        children: [
            (0, n.jsx)(u.q4e, {
                options: s,
                value: l.query,
                onChange: (e) => {
                    r({
                        query: e,
                        index: t,
                    });
                },
                className: y.dateFilterSelect,
            }),
            (0, n.jsx)(u.Wrb, {
                value: l.date,
                onSelect: (e) => {
                    a({
                        date: e,
                        index: t,
                    });
                },
                minDate: d,
                maxDate: c,
            }),
            (0, n.jsx)(u.P3F, {
                onClick: () => {
                    o(t);
                },
                className: y.removeDateFilterButton,
                "aria-label": E.intl.formatToPlainString(E.t["2LwBlJ"], { filterNumber: t + 1 }),
                children: (0, n.jsx)(u.XHJ, {
                    size: "md",
                    color: "currentColor",
                    className: y.trashIcon,
                    "aria-hidden": !0,
                }),
            }),
        ],
    });
}
function b(e) {
    let {
            options: t,
            dates: l,
            handleDateQueryChange: r,
            handleDateChange: a,
            handleAddDateFilter: i,
            handleRemoveDateFilter: s,
            validateDateFilter: o,
        } = e,
        c = l.length < 4;
    return (0, n.jsxs)("div", {
        className: y.filterSection,
        children: [
            (0, n.jsx)(u.Text, {
                variant: "text-md/medium",
                color: "text-primary",
                className: y.label,
                children: E.intl.string(E.t.oesnws),
            }),
            (0, n.jsx)(u.Text, {
                variant: "text-sm/medium",
                color: "text-secondary",
                className: y.sublabel,
                children: E.intl.string(E.t.A2DY6O),
            }),
            l.map((e, l) =>
                (0, n.jsx)(
                    S,
                    {
                        options: t,
                        index: l,
                        query: e,
                        handleQuerySelect: r,
                        handleDateSelect: a,
                        handleRemoveDateFilter: s,
                    },
                    e.id,
                ),
            ),
            c &&
                (0, n.jsx)(u.zxk, {
                    variant: "secondary",
                    fullWidth: !0,
                    text: E.intl.string(E.t.iP9YpK),
                    icon: u.BRu,
                    onClick: () => {
                        o() && i();
                    },
                }),
        ],
    });
}
function I(e) {
    let {
        label: t,
        sublabel: l,
        textPlaceholder: r,
        value: a,
        onChange: i,
        options: s,
        filter: o,
        closeOnSelect: c,
        onFocus: d,
        onSearchChange: h,
        renderOptionPrefix: x,
        renderOptionSuffix: g,
        filterType: p,
        validateFilter: F,
    } = e;
    return (0, n.jsxs)("div", {
        className: y.filterSection,
        children: [
            (0, n.jsx)(u.Text, {
                variant: "text-md/medium",
                color: "text-primary",
                className: y.label,
                children: t,
            }),
            (0, n.jsx)(u.Text, {
                variant: "text-sm/medium",
                color: "text-secondary",
                className: y.sublabel,
                children: l,
            }),
            (0, n.jsx)(u.VcW, {
                multi: !0,
                options: s,
                placeholder: r,
                value: a,
                onChange: (e) => {
                    (!(e.length > a.length) || F(p, e[e.length - 1])) && i(e);
                },
                onFocus: d,
                onSearchChange: h,
                closeOnSelect: c,
                filter: o,
                renderOptionPrefix: x,
                renderOptionSuffix: g,
            }),
        ],
    });
}
function R(e) {
    let {
        label: t,
        sublabel: l,
        textPlaceholder: r,
        value: a,
        onChange: i,
        options: s,
        filterType: o,
        validateFilter: c,
    } = e;
    return (0, n.jsxs)("div", {
        className: y.filterSection,
        children: [
            (0, n.jsx)(u.Text, {
                variant: "text-md/medium",
                color: "text-primary",
                className: y.label,
                children: t,
            }),
            (0, n.jsx)(u.Text, {
                variant: "text-sm/medium",
                color: "text-secondary",
                className: y.sublabel,
                children: l,
            }),
            (0, n.jsx)(u.q4e, {
                placeholder: r,
                options: s,
                onChange: (e) => {
                    (null == e || c(o, e)) && i(e);
                },
                value: a,
                clearable: null != a,
            }),
        ],
    });
}
function v(e) {
    let { transitionState: t, onClose: l, searchContext: a } = e,
        i = (0, d.Dt)(),
        y = r.useMemo(() => (0, F.s5)(a), [a]),
        S = (0, s.e7)([h.Z, x.Z], () => {
            let e = h.Z.getChannel(x.Z.getChannelId());
            return null != e ? (0, F.nl)(e) : "general";
        }),
        v = (0, s.e7)([g.default], () => {
            let e = g.default.getCurrentUser();
            return null != e ? e.username : E.intl.string(E.t.cqpybG);
        }),
        [L, _] = r.useState(m.Z.getSearchInputText(a)),
        N = r.useMemo(() => (0, F.kG)(null != L ? L : ""), [L]),
        { prefilledSearchFilters: O, eligibleFilterTokens: j } = (0, C.p4)(N, a),
        P = j.has(T.dCx.FILTER_FROM),
        k = j.has(T.dCx.FILTER_MENTIONS),
        A = j.has(T.dCx.FILTER_IN),
        M = j.has(T.dCx.FILTER_AUTHOR_TYPE),
        Q = r.useMemo(() => (0, F.nI)(N), [N]),
        {
            options: D,
            query: q,
            setQuery: H,
            setQueryString: Y,
            handleClearFilter: w,
            getApplyQueryString: U,
            handleFocusFilter: Z,
        } = (0, C.HJ)(a, T.dCx.FILTER_FROM, O[T.dCx.FILTER_FROM]),
        {
            options: z,
            query: J,
            setQuery: W,
            setQueryString: B,
            handleClearFilter: X,
            getApplyQueryString: K,
            handleFocusFilter: G,
        } = (0, C.HJ)(a, T.dCx.FILTER_MENTIONS, O[T.dCx.FILTER_MENTIONS]),
        V = (0, C.Zc)(y),
        {
            options: $,
            query: ee,
            setQuery: et,
            handleClearFilter: el,
            getApplyQueryString: en,
            handleFocusFilter: er,
        } = (0, C.Z2)(a, O[T.dCx.FILTER_HAS]),
        {
            options: ea,
            query: ei,
            setQuery: es,
            setQueryString: eo,
            handleClearFilter: eu,
            getApplyQueryString: ec,
            handleFocusFilter: ed,
        } = (0, C.ur)(a, O[T.dCx.FILTER_IN]),
        eh = r.useCallback((e) => {
            if (null == e) return;
            let t = h.Z.getChannel(e.value);
            if (null == t) return;
            let l = (0, c.KS)(t);
            return null != l
                ? (0, n.jsx)(l, {
                      size: "xs",
                      color: "currentColor",
                  })
                : null;
        }, []),
        {
            options: ex,
            dates: eg,
            validDates: ep,
            handleDateQueryChange: eF,
            handleDateChange: eC,
            handleAddDateFilter: em,
            handleRemoveDateFilter: eT,
            handleClearDateFilter: eE,
            getDateQueryString: ey,
        } = (0, C.fI)(O.dateFilters),
        {
            options: ef,
            query: eS,
            setQuery: eb,
            handleClearFilter: eI,
            getApplyQueryString: eR,
            handleFocusFilter: ev,
        } = (0, C.fJ)(a, O[T.dCx.FILTER_AUTHOR_TYPE]),
        {
            options: eL,
            query: e_,
            setQuery: eN,
            handleClearFilter: eO,
            getApplyQueryString: ej,
        } = (0, C.zL)(a, O[T.dCx.FILTER_PINNED]),
        eP = r.useMemo(() => {
            let e = 0;
            return (
                P && q.length > 0 && (e += q.length),
                k && J.length > 0 && (e += J.length),
                A && ei.length > 0 && (e += ei.length),
                ee.length > 0 && (e += ee.length),
                ep.length > 0 && (e += ep.length),
                M && eS.length > 0 && (e += eS.length),
                null !== e_ && (e += 1),
                e
            );
        }, [P, q, k, J, A, ei, ee, ep, M, eS, e_]),
        ek = r.useMemo(() => {
            let e = en(T.dCx.FILTER_HAS),
                t = ey(),
                l = ej(T.dCx.FILTER_PINNED),
                n = [];
            if (P) {
                let e = U(T.dCx.FILTER_FROM);
                null != e && n.push(e);
            }
            if (k) {
                let e = K(T.dCx.FILTER_MENTIONS);
                null != e && n.push(e);
            }
            if (A) {
                let e = ec(T.dCx.FILTER_IN);
                null != e && n.push(e);
            }
            if ((null != e && n.push(e), null != t && n.push(t), M)) {
                let e = eR(T.dCx.FILTER_AUTHOR_TYPE);
                null != e && n.push(e);
            }
            return null != l && n.push(l), [...n].join(" ");
        }, [P, U, k, K, A, ec, en, ey, M, eR, ej]),
        { validateFilter: eA, validateDateFilter: eM } = (0, C.YL)({
            nonFilterQueryString: Q,
            filterQueryString: ek,
        }),
        eQ = r.useMemo(
            () =>
                !(
                    (!P || (0, C.Ek)(q, O[T.dCx.FILTER_FROM])) &&
                    (!k || (0, C.Ek)(J, O[T.dCx.FILTER_MENTIONS])) &&
                    (!A || (0, C.Ek)(ei, O[T.dCx.FILTER_IN])) &&
                    (0, C.Ek)(ee, O[T.dCx.FILTER_HAS]) &&
                    (0, C.LE)(ep, O.dateFilters) &&
                    (!M || (0, C.Ek)(eS, O[T.dCx.FILTER_AUTHOR_TYPE])) &&
                    (0, C.Ek)(e_, O[T.dCx.FILTER_PINNED])
                ),
            [P, q, O, k, J, A, ei, ee, ep, M, eS, e_],
        ),
        eD = r.useCallback(() => {
            if (0 === ek.length && 0 === Q.trim().length) {
                p.S.dispatch(T.CkL.SEARCH_RESULTS_CLOSE), l();
                return;
            }
            let e = "".concat(ek, " ").concat(Q).trim();
            p.S.dispatch(T.CkL.SET_SEARCH_QUERY, {
                query: e,
                anchor: 0,
                focus: 0,
                performSearch: !0,
                replace: !0,
            }),
                l();
        }, [ek, Q, l]),
        eq = r.useMemo(() => {
            if (0 === eP) return E.intl.string(E.t.YfwFu7);
            let e = "(".concat(eP, ")");
            return "".concat(E.intl.string(E.t.YfwFu7), " ").concat(e);
        }, [eP]),
        eH = r.useCallback(() => {
            P && w(), k && X(), A && eu(), M && eI(), el(), eE(), eO();
        }, [P, k, el, A, eE, w, X, eu, M, eI, eO]);
    return (0, n.jsxs)(o.Modal, {
        transitionState: t,
        onClose: l,
        "aria-labelledby": i,
        title: E.intl.string(E.t.F8a0W1),
        actions: [
            {
                variant: "secondary",
                text: E.intl.string(E.t["ETE/oK"]),
                onClick: l,
            },
            {
                variant: "primary",
                text: E.intl.string(E.t.qDzapq),
                onClick: eD,
                disabled: !eQ,
            },
        ],
        actionBarInput: (0, n.jsx)(u.Avr, {
            variant: "primary",
            text: eq,
            onClick: eH,
            disabled: 0 === eP,
        }),
        children: [
            P &&
                (0, n.jsx)(
                    I,
                    f(
                        {
                            label: E.intl.string(E.t.Qz6eOT),
                            sublabel: E.intl.string(E.t["2JyXnJ"]),
                            textPlaceholder: E.intl.formatToPlainString(E.t.V4WMj4, { username: v }),
                            value: q,
                            onChange: H,
                            onFocus: Z,
                            onSearchChange: Y,
                            options: D,
                            filterType: T.dCx.FILTER_FROM,
                            validateFilter: eA,
                        },
                        V,
                    ),
                ),
            A &&
                (0, n.jsx)(I, {
                    label: E.intl.string(E.t["kLrM/v"]),
                    sublabel: E.intl.string(E.t.x8cC09),
                    textPlaceholder: E.intl.formatToPlainString(E.t.K4l509, { channelName: S }),
                    value: ei,
                    onChange: es,
                    onFocus: ed,
                    onSearchChange: eo,
                    options: ea,
                    filter: !1,
                    closeOnSelect: !1,
                    renderOptionPrefix: eh,
                    filterType: T.dCx.FILTER_IN,
                    validateFilter: eA,
                }),
            k &&
                (0, n.jsx)(
                    I,
                    f(
                        {
                            label: E.intl.string(E.t.HEBnRU),
                            sublabel: E.intl.string(E.t.PdfTqa),
                            textPlaceholder: E.intl.formatToPlainString(E.t.zka3aG, { username: v }),
                            value: J,
                            onChange: W,
                            onFocus: G,
                            onSearchChange: B,
                            options: z,
                            filterType: T.dCx.FILTER_MENTIONS,
                            validateFilter: eA,
                        },
                        V,
                    ),
                ),
            (0, n.jsx)(I, {
                label: E.intl.string(E.t["892qg4"]),
                sublabel: E.intl.string(E.t["Oa//IC"]),
                textPlaceholder: E.intl.string(E.t.tROvHB),
                value: ee,
                onChange: et,
                onFocus: er,
                options: $,
                filter: !0,
                closeOnSelect: !1,
                filterType: T.dCx.FILTER_HAS,
                validateFilter: eA,
            }),
            (0, n.jsx)(b, {
                options: ex,
                dates: eg,
                handleDateQueryChange: eF,
                handleDateChange: eC,
                handleAddDateFilter: em,
                handleRemoveDateFilter: eT,
                validateDateFilter: eM,
            }),
            M &&
                (0, n.jsx)(I, {
                    label: E.intl.string(E.t.Xgc1am),
                    sublabel: E.intl.string(E.t.XaOAdn),
                    textPlaceholder: E.intl.string(E.t.CAdOdX),
                    value: eS,
                    onChange: eb,
                    onFocus: ev,
                    options: ef,
                    filter: !0,
                    closeOnSelect: !1,
                    filterType: T.dCx.FILTER_AUTHOR_TYPE,
                    validateFilter: eA,
                }),
            (0, n.jsx)(R, {
                label: E.intl.string(E.t["6LYPWV"]),
                sublabel: E.intl.string(E.t.L8jjfn),
                textPlaceholder: E.intl.string(E.t.AQpFbW),
                value: e_,
                onChange: eN,
                options: eL,
                filterType: T.dCx.FILTER_PINNED,
                validateFilter: eA,
            }),
        ],
    });
}
