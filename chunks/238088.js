l.d(t, { default: () => b }), l(388685), l(539854), l(781311);
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
    C = l(585483),
    p = l(607802),
    T = l(28964),
    E = l(465524),
    S = l(611004),
    I = l(723642),
    f = l(981631),
    _ = l(388032),
    R = l(540432);
function y(e) {
    let { index: t, query: l, handleQuerySelect: r, handleDateSelect: i, options: o, handleRemoveDateFilter: s } = e,
        u = a()(),
        h = a()("2015-05-15");
    return (0, n.jsxs)("div", {
        className: R.dateFilter,
        children: [
            (0, n.jsx)(d.P, {
                label: _.intl.string(_.t.ArxagQ),
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
                className: R.removeDateFilterButton,
                "aria-label": _.intl.formatToPlainString(_.t["2LwBlF"], { filterNumber: t + 1 }),
                children: (0, n.jsx)(c.XHJ, {
                    size: "md",
                    color: "currentColor",
                    className: R.trashIcon,
                    "aria-hidden": !0,
                }),
            }),
        ],
    });
}
function m(e) {
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
        className: R.filterSection,
        children: [
            (0, n.jsxs)("div", {
                className: R.labelContainer,
                children: [
                    (0, n.jsx)(c.Text, {
                        variant: "text-md/medium",
                        color: "text-primary",
                        children: _.intl.string(_.t.oesnwm),
                    }),
                    (0, n.jsx)(c.Text, {
                        variant: "text-sm/normal",
                        color: "text-secondary",
                        children: _.intl.string(_.t.A2DY6J),
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
                    text: _.intl.string(_.t.iP9YpB),
                    icon: c.BRu,
                    onClick: () => {
                        s() && a();
                    },
                }),
        ],
    });
}
function L(e) {
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
            onBlur: C,
        } = e,
        p = r.useMemo(() => (d ? (e) => e : void 0), [d]);
    return (0, n.jsx)("div", {
        className: R.filterSection,
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
            customMatchSorter: p,
            onBlur: C,
        }),
    });
}
function v(e) {
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
        className: R.filterSection,
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
function b(e) {
    let { transitionState: t, onClose: l, searchContext: i } = e,
        a = (0, h.Dt)(),
        u = (0, s.e7)([g.Z, F.Z], () => {
            let e = g.Z.getChannel(F.Z.getChannelId());
            return null != e ? (0, p.nl)(e) : "general";
        }),
        d = (0, s.e7)([x.default], () => {
            let e = x.default.getCurrentUser();
            return null != e ? e.username : _.intl.string(_.t.cqpybK);
        }),
        [R, y] = r.useState(S.Z.getSearchInputText(i)),
        b = r.useMemo(() => (0, p.kG)(null != R ? R : ""), [R]),
        { prefilledSearchFilters: N, eligibleFilterTokens: O } = (0, E.p4)(b, i),
        j = O.has(f.dCx.FILTER_FROM),
        M = O.has(f.dCx.FILTER_MENTIONS),
        A = O.has(f.dCx.FILTER_IN),
        P = O.has(f.dCx.FILTER_AUTHOR_TYPE),
        Q = r.useMemo(() => (0, p.nI)(b), [b]),
        k = (0, T.g_)({ location: "SearchFiltersModal" }),
        {
            options: D,
            query: H,
            setQuery: B,
            setQueryString: q,
            handleClearFilter: Y,
            getApplyQueryString: U,
            handleFocusFilter: w,
            handleBlurFilter: J,
        } = (0, E.HJ)(i, f.dCx.FILTER_FROM, N[f.dCx.FILTER_FROM]),
        {
            options: W,
            query: Z,
            setQuery: z,
            setQueryString: X,
            handleClearFilter: K,
            getApplyQueryString: V,
            handleFocusFilter: G,
            handleBlurFilter: $,
        } = (0, E.HJ)(i, f.dCx.FILTER_MENTIONS, N[f.dCx.FILTER_MENTIONS]),
        {
            options: ee,
            query: et,
            setQuery: el,
            handleClearFilter: en,
            getApplyQueryString: er,
            handleFocusFilter: ei,
        } = (0, E.Z2)(i, N[f.dCx.FILTER_HAS], k),
        {
            options: ea,
            query: eo,
            setQuery: es,
            setQueryString: eu,
            handleClearFilter: ed,
            getApplyQueryString: ec,
            handleFocusFilter: eh,
            handleBlurFilter: eg,
        } = (0, E.ur)(i, N[f.dCx.FILTER_IN]),
        {
            options: eF,
            dates: ex,
            validDates: eC,
            handleDateQueryChange: ep,
            handleDateChange: eT,
            handleAddDateFilter: eE,
            handleRemoveDateFilter: eS,
            handleClearDateFilter: eI,
            getDateQueryString: ef,
        } = (0, E.fI)(N.dateFilters),
        {
            options: e_,
            query: eR,
            setQuery: ey,
            handleClearFilter: em,
            getApplyQueryString: eL,
            handleFocusFilter: ev,
        } = (0, E.fJ)(i, N[f.dCx.FILTER_AUTHOR_TYPE], k),
        {
            options: eb,
            query: eN,
            setQuery: eO,
            handleClearFilter: ej,
            getApplyQueryString: eM,
        } = (0, E.zL)(i, N[f.dCx.FILTER_PINNED]),
        eA = r.useMemo(() => {
            let e = 0;
            return (
                j && H.length > 0 && (e += H.length),
                M && Z.length > 0 && (e += Z.length),
                A && eo.length > 0 && (e += eo.length),
                et.length > 0 && (e += et.length),
                eC.length > 0 && (e += eC.length),
                P && eR.length > 0 && (e += eR.length),
                null !== eN && (e += 1),
                e
            );
        }, [j, H, M, Z, A, eo, et, eC, P, eR, eN]),
        eP = r.useMemo(() => {
            let e = er(f.dCx.FILTER_HAS),
                t = ef(),
                l = eM(f.dCx.FILTER_PINNED),
                n = [];
            if (j) {
                let e = U(f.dCx.FILTER_FROM);
                null != e && n.push(e);
            }
            if (M) {
                let e = V(f.dCx.FILTER_MENTIONS);
                null != e && n.push(e);
            }
            if (A) {
                let e = ec(f.dCx.FILTER_IN);
                null != e && n.push(e);
            }
            if ((null != e && n.push(e), null != t && n.push(t), P)) {
                let e = eL(f.dCx.FILTER_AUTHOR_TYPE);
                null != e && n.push(e);
            }
            return null != l && n.push(l), [...n].join(" ");
        }, [j, U, M, V, A, ec, er, ef, P, eL, eM]),
        { validateFilter: eQ, validateDateFilter: ek } = (0, E.YL)({
            nonFilterQueryString: Q,
            filterQueryString: eP,
        }),
        eD = r.useMemo(
            () =>
                !(
                    (!j || (0, E.Ek)(H, N[f.dCx.FILTER_FROM])) &&
                    (!M || (0, E.Ek)(Z, N[f.dCx.FILTER_MENTIONS])) &&
                    (!A || (0, E.Ek)(eo, N[f.dCx.FILTER_IN])) &&
                    (0, E.Ek)(et, N[f.dCx.FILTER_HAS]) &&
                    (0, E.LE)(eC, N.dateFilters) &&
                    (!P || (0, E.Ek)(eR, N[f.dCx.FILTER_AUTHOR_TYPE])) &&
                    (0, E.Ek)(eN, N[f.dCx.FILTER_PINNED])
                ),
            [j, H, N, M, Z, A, eo, et, eC, P, eR, eN],
        ),
        eH = r.useCallback(() => {
            if (0 === eP.length && 0 === Q.trim().length) {
                C.S.dispatch(f.CkL.SEARCH_RESULTS_CLOSE), l();
                return;
            }
            let e = "".concat(eP, " ").concat(Q).trim();
            S.Z.dispatchSetSearchQuery({
                query: e,
                anchor: 0,
                focus: 0,
                performSearch: !0,
                replace: !0,
                searchQuerySource: I.w7.SEARCH_FILTERS_MODAL,
            }),
                l();
        }, [eP, Q, l]),
        eB = r.useMemo(() => {
            if (0 === eA) return _.intl.string(_.t.YfwFu1);
            let e = "(".concat(eA, ")");
            return "".concat(_.intl.string(_.t.YfwFu1), " ").concat(e);
        }, [eA]),
        eq = r.useCallback(() => {
            j && Y(), M && K(), A && ed(), P && em(), en(), eI(), ej();
        }, [j, M, en, A, eI, Y, K, ed, P, em, ej]),
        eY =
            M &&
            (0, n.jsx)(L, {
                label: _.intl.string(_.t.HEBnRU),
                sublabel: _.intl.string(_.t.PdfTqT),
                textPlaceholder: _.intl.formatToPlainString(_.t.zka3aJ, { username: d }),
                value: Z,
                onChange: z,
                onFocus: G,
                onSearchChange: X,
                options: W,
                filter: !0,
                filterType: f.dCx.FILTER_MENTIONS,
                validateFilter: eQ,
                closeOnSelect: !1,
                onBlur: $,
            }),
        eU = (0, n.jsx)(L, {
            label: _.intl.string(_.t["892qg1"]),
            sublabel: _.intl.string(_.t["Oa//IE"]),
            textPlaceholder: _.intl.string(_.t.tROvHH),
            value: et,
            onChange: el,
            onFocus: ei,
            options: ee,
            filter: !1,
            closeOnSelect: !1,
            filterType: f.dCx.FILTER_HAS,
            validateFilter: eQ,
        });
    return (0, n.jsxs)(o.Modal, {
        transitionState: t,
        onClose: l,
        "aria-labelledby": a,
        title: _.intl.string(_.t["F8a0W/"]),
        actions: [
            {
                variant: "secondary",
                text: _.intl.string(_.t["ETE/oC"]),
                onClick: l,
            },
            {
                variant: "primary",
                text: _.intl.string(_.t.qDzapn),
                onClick: eH,
                disabled: !eD,
            },
        ],
        actionBarInput: (0, n.jsx)(c.Avr, {
            variant: "primary",
            text: eB,
            onClick: eq,
            disabled: 0 === eA,
        }),
        children: [
            j &&
                (0, n.jsx)(L, {
                    label: _.intl.string(_.t.Qz6eOR),
                    sublabel: _.intl.string(_.t["2JyXnO"]),
                    textPlaceholder: _.intl.formatToPlainString(_.t["V4WMj/"], { username: d }),
                    value: H,
                    onChange: B,
                    onFocus: w,
                    onSearchChange: q,
                    options: D,
                    filter: !0,
                    filterType: f.dCx.FILTER_FROM,
                    validateFilter: eQ,
                    closeOnSelect: !1,
                    onBlur: J,
                }),
            A &&
                (0, n.jsx)(L, {
                    label: _.intl.string(_.t["kLrM/s"]),
                    sublabel: _.intl.string(_.t.x8cC0z),
                    textPlaceholder: _.intl.formatToPlainString(_.t.K4l507, { channelName: u }),
                    value: eo,
                    onChange: es,
                    onFocus: eh,
                    onSearchChange: eu,
                    options: ea,
                    filter: !0,
                    closeOnSelect: !1,
                    filterType: f.dCx.FILTER_IN,
                    validateFilter: eQ,
                    onBlur: eg,
                }),
            k ? eU : eY,
            k ? eY : eU,
            (0, n.jsx)(m, {
                options: eF,
                dates: ex,
                handleDateQueryChange: ep,
                handleDateChange: eT,
                handleAddDateFilter: eE,
                handleRemoveDateFilter: eS,
                validateDateFilter: ek,
            }),
            P &&
                (0, n.jsx)(L, {
                    label: _.intl.string(_.t.Xgc1av),
                    sublabel: _.intl.string(_.t.XaOAdt),
                    textPlaceholder: _.intl.string(_.t.CAdOdf),
                    value: eR,
                    onChange: ey,
                    onFocus: ev,
                    options: e_,
                    filter: !1,
                    closeOnSelect: !1,
                    filterType: f.dCx.FILTER_AUTHOR_TYPE,
                    validateFilter: eQ,
                }),
            (0, n.jsx)(v, {
                label: _.intl.string(_.t["6LYPWS"]),
                sublabel: _.intl.string(_.t.L8jjfu),
                textPlaceholder: _.intl.string(_.t.AQpFbX),
                value: eN,
                onChange: eO,
                options: eb,
                filterType: f.dCx.FILTER_PINNED,
                validateFilter: eQ,
            }),
        ],
    });
}
