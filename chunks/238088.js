l.d(t, { default: () => v }), l(388685), l(539854), l(781311);
var n = l(54381),
    r = l(473749),
    i = l(913527),
    a = l.n(i),
    o = l(793030),
    s = l(442837),
    u = l(333200),
    d = l(673221),
    c = l(481060),
    h = l(313201),
    g = l(592125),
    F = l(944486),
    x = l(594174),
    p = l(585483),
    C = l(607802),
    T = l(28964),
    E = l(465524),
    S = l(611004),
    I = l(723642),
    f = l(981631),
    R = l(388032),
    m = l(810329);
function y(e) {
    let { index: t, query: l, handleQuerySelect: r, handleDateSelect: i, options: o, handleRemoveDateFilter: s } = e,
        u = a()(),
        h = a()("2015-05-15");
    return (0, n.jsxs)("div", {
        className: m.dateFilter,
        children: [
            (0, n.jsx)(d.P, {
                label: R.intl.string(R.t.ArxagQ),
                hideLabel: !0,
                selectionMode: "single",
                formatOption: (e) => {
                    let { key: t, value: l, label: n, leading: r, trailing: i } = e;
                    return {
                        id: null != t ? t : l,
                        value: l,
                        label: n,
                        leading: r,
                        trailing: i,
                    };
                },
                options: o,
                onSelectionChange: (e) => {
                    null != e &&
                        r({
                            query: e,
                            index: t,
                        });
                },
                value: l.query,
                fullWidth: !0,
            }),
            (0, n.jsx)(c.Wrb, {
                value: l.date,
                onSelect: (e) => {
                    i({
                        date: e,
                        index: t,
                    });
                },
                minDate: h,
                maxDate: u,
            }),
            (0, n.jsx)(c.P3F, {
                onClick: () => {
                    s(t);
                },
                className: m.removeDateFilterButton,
                "aria-label": R.intl.formatToPlainString(R.t["2LwBlF"], { filterNumber: t + 1 }),
                children: (0, n.jsx)(c.XHJ, {
                    size: "md",
                    color: "currentColor",
                    className: m.trashIcon,
                    "aria-hidden": !0,
                }),
            }),
        ],
    });
}
function _(e) {
    let {
            options: t,
            dates: l,
            handleDateQueryChange: r,
            handleDateChange: i,
            handleAddDateFilter: a,
            handleRemoveDateFilter: o,
            validateDateFilter: s,
        } = e,
        u = l.length < 4;
    return (0, n.jsxs)("div", {
        className: m.filterSection,
        children: [
            (0, n.jsxs)("div", {
                className: m.labelContainer,
                children: [
                    (0, n.jsx)(c.Text, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        children: R.intl.string(R.t.oesnwm),
                    }),
                    (0, n.jsx)(c.Text, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: R.intl.string(R.t.A2DY6J),
                    }),
                ],
            }),
            l.map((e, l) =>
                (0, n.jsx)(
                    y,
                    {
                        options: t,
                        index: l,
                        query: e,
                        handleQuerySelect: r,
                        handleDateSelect: i,
                        handleRemoveDateFilter: o,
                    },
                    e.id,
                ),
            ),
            u &&
                (0, n.jsx)(c.Button, {
                    variant: "secondary",
                    fullWidth: !0,
                    text: R.intl.string(R.t.iP9YpB),
                    icon: c.BRu,
                    onClick: () => {
                        s() && a();
                    },
                }),
        ],
    });
}
function b(e) {
    let {
            label: t,
            sublabel: l,
            textPlaceholder: i,
            value: a,
            onChange: o,
            options: s,
            filter: d,
            closeOnSelect: c,
            onFocus: h,
            onSearchChange: g,
            filterType: F,
            validateFilter: x,
            onBlur: p,
        } = e,
        C = r.useMemo(() => (d ? (e) => e : void 0), [d]);
    return (0, n.jsx)("div", {
        className: m.filterSection,
        children: (0, n.jsx)(u.V, {
            label: t,
            description: l,
            selectionMode: "multiple",
            formatOption: (e) => {
                let { key: t, value: l, label: n, leading: r, trailing: i } = e;
                return {
                    id: null != t ? t : l,
                    value: l,
                    label: n,
                    leading: r,
                    trailing: i,
                };
            },
            options: s,
            placeholder: i,
            value: a,
            onSelectionChange: (e) => {
                (!(e.length > a.length) || x(F, e[e.length - 1])) && o(e);
            },
            onFocus: h,
            onQueryChange: (e) => (null == g ? void 0 : g(e.target.value)),
            closeOnSelect: c,
            customMatchSorter: C,
            onBlur: p,
            wrapTags: !0,
        }),
    });
}
function L(e) {
    let {
        label: t,
        sublabel: l,
        textPlaceholder: r,
        value: i,
        onChange: a,
        options: o,
        filterType: s,
        validateFilter: u,
    } = e;
    return (0, n.jsx)("div", {
        className: m.filterSection,
        children: (0, n.jsx)(d.P, {
            label: t,
            description: l,
            selectionMode: "single",
            formatOption: (e) => {
                let { key: t, value: l, label: n, leading: r, trailing: i } = e;
                return {
                    id: null != t ? t : l,
                    value: l,
                    label: n,
                    leading: r,
                    trailing: i,
                };
            },
            placeholder: r,
            options: o,
            onSelectionChange: (e) => {
                (null == e || u(s, e)) && a(e);
            },
            value: i,
            clearable: null != i,
            fullWidth: !0,
        }),
    });
}
function v(e) {
    let { transitionState: t, onClose: l, searchContext: i } = e,
        a = (0, h.Dt)(),
        u = (0, s.e7)([g.Z, F.Z], () => {
            let e = g.Z.getChannel(F.Z.getChannelId());
            return null != e ? (0, C.nl)(e) : "general";
        }),
        d = (0, s.e7)([x.default], () => {
            let e = x.default.getCurrentUser();
            return null != e ? e.username : R.intl.string(R.t.cqpybK);
        }),
        [y, v] = r.useState(S.Z.getSearchInputText(i)),
        N = r.useMemo(() => (0, C.kG)(null != y ? y : ""), [y]),
        { prefilledSearchFilters: O, eligibleFilterTokens: j } = (0, E.p4)(N, i),
        M = j.has(f.dCx.FILTER_FROM),
        A = j.has(f.dCx.FILTER_MENTIONS),
        P = j.has(f.dCx.FILTER_IN),
        Q = j.has(f.dCx.FILTER_AUTHOR_TYPE),
        k = r.useMemo(() => (0, C.nI)(N), [N]),
        D = (0, T.g_)({ location: "SearchFiltersModal" }),
        {
            options: H,
            query: B,
            setQuery: q,
            setQueryString: Y,
            handleClearFilter: w,
            getApplyQueryString: U,
            handleFocusFilter: J,
            handleBlurFilter: W,
        } = (0, E.HJ)(i, f.dCx.FILTER_FROM, O[f.dCx.FILTER_FROM]),
        {
            options: Z,
            query: z,
            setQuery: X,
            setQueryString: K,
            handleClearFilter: V,
            getApplyQueryString: G,
            handleFocusFilter: $,
            handleBlurFilter: ee,
        } = (0, E.HJ)(i, f.dCx.FILTER_MENTIONS, O[f.dCx.FILTER_MENTIONS]),
        {
            options: et,
            query: el,
            setQuery: en,
            handleClearFilter: er,
            getApplyQueryString: ei,
            handleFocusFilter: ea,
        } = (0, E.Z2)(i, O[f.dCx.FILTER_HAS], D),
        {
            options: eo,
            query: es,
            setQuery: eu,
            setQueryString: ed,
            handleClearFilter: ec,
            getApplyQueryString: eh,
            handleFocusFilter: eg,
            handleBlurFilter: eF,
        } = (0, E.ur)(i, O[f.dCx.FILTER_IN]),
        {
            options: ex,
            dates: ep,
            validDates: eC,
            handleDateQueryChange: eT,
            handleDateChange: eE,
            handleAddDateFilter: eS,
            handleRemoveDateFilter: eI,
            handleClearDateFilter: ef,
            getDateQueryString: eR,
        } = (0, E.fI)(O.dateFilters),
        {
            options: em,
            query: ey,
            setQuery: e_,
            handleClearFilter: eb,
            getApplyQueryString: eL,
            handleFocusFilter: ev,
        } = (0, E.fJ)(i, O[f.dCx.FILTER_AUTHOR_TYPE], D),
        {
            options: eN,
            query: eO,
            setQuery: ej,
            handleClearFilter: eM,
            getApplyQueryString: eA,
        } = (0, E.zL)(i, O[f.dCx.FILTER_PINNED]),
        eP = r.useMemo(() => {
            let e = 0;
            return (
                M && B.length > 0 && (e += B.length),
                A && z.length > 0 && (e += z.length),
                P && es.length > 0 && (e += es.length),
                el.length > 0 && (e += el.length),
                eC.length > 0 && (e += eC.length),
                Q && ey.length > 0 && (e += ey.length),
                null !== eO && (e += 1),
                e
            );
        }, [M, B, A, z, P, es, el, eC, Q, ey, eO]),
        eQ = r.useMemo(() => {
            let e = ei(f.dCx.FILTER_HAS),
                t = eR(),
                l = eA(f.dCx.FILTER_PINNED),
                n = [];
            if (M) {
                let e = U(f.dCx.FILTER_FROM);
                null != e && n.push(e);
            }
            if (A) {
                let e = G(f.dCx.FILTER_MENTIONS);
                null != e && n.push(e);
            }
            if (P) {
                let e = eh(f.dCx.FILTER_IN);
                null != e && n.push(e);
            }
            if ((null != e && n.push(e), null != t && n.push(t), Q)) {
                let e = eL(f.dCx.FILTER_AUTHOR_TYPE);
                null != e && n.push(e);
            }
            return null != l && n.push(l), [...n].join(" ");
        }, [M, U, A, G, P, eh, ei, eR, Q, eL, eA]),
        { validateFilter: ek, validateDateFilter: eD } = (0, E.YL)({
            nonFilterQueryString: k,
            filterQueryString: eQ,
        }),
        eH = r.useMemo(
            () =>
                !(
                    (!M || (0, E.Ek)(B, O[f.dCx.FILTER_FROM])) &&
                    (!A || (0, E.Ek)(z, O[f.dCx.FILTER_MENTIONS])) &&
                    (!P || (0, E.Ek)(es, O[f.dCx.FILTER_IN])) &&
                    (0, E.Ek)(el, O[f.dCx.FILTER_HAS]) &&
                    (0, E.LE)(eC, O.dateFilters) &&
                    (!Q || (0, E.Ek)(ey, O[f.dCx.FILTER_AUTHOR_TYPE])) &&
                    (0, E.Ek)(eO, O[f.dCx.FILTER_PINNED])
                ),
            [M, B, O, A, z, P, es, el, eC, Q, ey, eO],
        ),
        eB = r.useCallback(() => {
            if (0 === eQ.length && 0 === k.trim().length) {
                p.S.dispatch(f.CkL.SEARCH_RESULTS_CLOSE), l();
                return;
            }
            let e = "".concat(eQ, " ").concat(k).trim();
            S.Z.dispatchSetSearchQuery({
                query: e,
                anchor: 0,
                focus: 0,
                performSearch: !0,
                replace: !0,
                searchQuerySource: I.w7.SEARCH_FILTERS_MODAL,
            }),
                l();
        }, [eQ, k, l]),
        eq = r.useMemo(() => {
            if (0 === eP) return R.intl.string(R.t.YfwFu1);
            let e = "(".concat(eP, ")");
            return "".concat(R.intl.string(R.t.YfwFu1), " ").concat(e);
        }, [eP]),
        eY = r.useCallback(() => {
            M && w(), A && V(), P && ec(), Q && eb(), er(), ef(), eM();
        }, [M, A, er, P, ef, w, V, ec, Q, eb, eM]),
        ew =
            A &&
            (0, n.jsx)(b, {
                label: R.intl.string(R.t.HEBnRU),
                sublabel: R.intl.string(R.t.PdfTqT),
                textPlaceholder: R.intl.formatToPlainString(R.t.zka3aJ, { username: d }),
                value: z,
                onChange: X,
                onFocus: $,
                onSearchChange: K,
                options: Z,
                filter: !0,
                filterType: f.dCx.FILTER_MENTIONS,
                validateFilter: ek,
                closeOnSelect: !1,
                onBlur: ee,
            }),
        eU = (0, n.jsx)(b, {
            label: R.intl.string(R.t["892qg1"]),
            sublabel: R.intl.string(R.t["Oa//IE"]),
            textPlaceholder: R.intl.string(R.t.tROvHH),
            value: el,
            onChange: en,
            onFocus: ea,
            options: et,
            filter: !1,
            closeOnSelect: !1,
            filterType: f.dCx.FILTER_HAS,
            validateFilter: ek,
        });
    return (0, n.jsx)(o.Modal, {
        transitionState: t,
        onClose: l,
        "aria-labelledby": a,
        title: R.intl.string(R.t["F8a0W/"]),
        actions: [
            {
                variant: "secondary",
                text: R.intl.string(R.t["ETE/oC"]),
                onClick: l,
            },
            {
                variant: "primary",
                text: R.intl.string(R.t.qDzapn),
                onClick: eB,
                disabled: !eH,
            },
        ],
        actionBarInput: (0, n.jsx)(c.Avr, {
            variant: "primary",
            text: eq,
            onClick: eY,
            disabled: 0 === eP,
        }),
        children: (0, n.jsxs)("div", {
            className: m.container,
            children: [
                M &&
                    (0, n.jsx)(b, {
                        label: R.intl.string(R.t.Qz6eOR),
                        sublabel: R.intl.string(R.t["2JyXnO"]),
                        textPlaceholder: R.intl.formatToPlainString(R.t["V4WMj/"], { username: d }),
                        value: B,
                        onChange: q,
                        onFocus: J,
                        onSearchChange: Y,
                        options: H,
                        filter: !0,
                        filterType: f.dCx.FILTER_FROM,
                        validateFilter: ek,
                        closeOnSelect: !1,
                        onBlur: W,
                    }),
                P &&
                    (0, n.jsx)(b, {
                        label: R.intl.string(R.t["kLrM/s"]),
                        sublabel: i.type === f.aib.DMS ? R.intl.string(R.t["b+abYv"]) : R.intl.string(R.t.x8cC0z),
                        textPlaceholder: R.intl.formatToPlainString(R.t.K4l507, { channelName: u }),
                        value: es,
                        onChange: eu,
                        onFocus: eg,
                        onSearchChange: ed,
                        options: eo,
                        filter: !0,
                        closeOnSelect: !1,
                        filterType: f.dCx.FILTER_IN,
                        validateFilter: ek,
                        onBlur: eF,
                    }),
                D ? eU : ew,
                D ? ew : eU,
                (0, n.jsx)(_, {
                    options: ex,
                    dates: ep,
                    handleDateQueryChange: eT,
                    handleDateChange: eE,
                    handleAddDateFilter: eS,
                    handleRemoveDateFilter: eI,
                    validateDateFilter: eD,
                }),
                Q &&
                    (0, n.jsx)(b, {
                        label: R.intl.string(R.t.Xgc1av),
                        sublabel: R.intl.string(R.t.XaOAdt),
                        textPlaceholder: R.intl.string(R.t.CAdOdf),
                        value: ey,
                        onChange: e_,
                        onFocus: ev,
                        options: em,
                        filter: !1,
                        closeOnSelect: !1,
                        filterType: f.dCx.FILTER_AUTHOR_TYPE,
                        validateFilter: ek,
                    }),
                (0, n.jsx)(L, {
                    label: R.intl.string(R.t["6LYPWS"]),
                    sublabel: R.intl.string(R.t.L8jjfu),
                    textPlaceholder: R.intl.string(R.t.AQpFbX),
                    value: eO,
                    onChange: ej,
                    options: eN,
                    filterType: f.dCx.FILTER_PINNED,
                    validateFilter: ek,
                }),
            ],
        }),
    });
}
