l.d(t, { default: () => v }), l(388685), l(539854), l(781311);
var n = l(54381),
    r = l(473749),
    i = l(913527),
    a = l.n(i),
    o = l(793030),
    s = l(442837),
    u = l(333200),
    c = l(673221),
    d = l(481060),
    h = l(313201),
    g = l(592125),
    F = l(944486),
    x = l(594174),
    p = l(585483),
    C = l(607802),
    T = l(611004),
    E = l(971212),
    S = l(723642),
    f = l(981631),
    I = l(388032),
    R = l(53568);
function m(e) {
    let { index: t, query: l, handleQuerySelect: r, handleDateSelect: i, options: o, handleRemoveDateFilter: s } = e,
        u = a()(),
        h = a()("2015-05-15");
    return (0, n.jsxs)("div", {
        className: R.dateFilter,
        children: [
            (0, n.jsx)(c.P, {
                label: I.intl.string(I.t.ArxagQ),
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
            (0, n.jsx)(d.Wrb, {
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
            (0, n.jsx)(d.P3F, {
                onClick: () => {
                    s(t);
                },
                className: R.removeDateFilterButton,
                "aria-label": I.intl.formatToPlainString(I.t["2LwBlF"], { filterNumber: t + 1 }),
                children: (0, n.jsx)(d.XHJ, {
                    size: "md",
                    color: "currentColor",
                    className: R.trashIcon,
                    "aria-hidden": !0,
                }),
            }),
        ],
    });
}
function y(e) {
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
                    (0, n.jsx)(d.Text, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        children: I.intl.string(I.t.oesnwm),
                    }),
                    (0, n.jsx)(d.Text, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: I.intl.string(I.t.A2DY6J),
                    }),
                ],
            }),
            l.map((e, l) =>
                (0, n.jsx)(
                    m,
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
                (0, n.jsx)(d.Button, {
                    variant: "secondary",
                    fullWidth: !0,
                    text: I.intl.string(I.t.iP9YpB),
                    icon: d.BRu,
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
            filter: c,
            closeOnSelect: d,
            onFocus: h,
            onSearchChange: g,
            filterType: F,
            validateFilter: x,
            onBlur: p,
        } = e,
        C = r.useMemo(() => (c ? (e) => e : void 0), [c]);
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
            closeOnSelect: d,
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
        className: R.filterSection,
        children: (0, n.jsx)(c.P, {
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
        c = (0, s.e7)([x.default], () => {
            let e = x.default.getCurrentUser();
            return null != e ? e.username : I.intl.string(I.t.cqpybK);
        }),
        [m, v] = r.useState(T.Z.getSearchInputText(i)),
        _ = r.useMemo(() => (0, C.kG)(null != m ? m : ""), [m]),
        { prefilledSearchFilters: N, eligibleFilterTokens: O } = (0, E.p4)(_, i),
        j = O.has(f.dCx.FILTER_FROM),
        M = O.has(f.dCx.FILTER_MENTIONS),
        A = O.has(f.dCx.FILTER_IN),
        P = O.has(f.dCx.FILTER_AUTHOR_TYPE),
        Q = r.useMemo(() => (0, C.nI)(_), [_]),
        {
            options: k,
            query: D,
            setQuery: H,
            setQueryString: B,
            handleClearFilter: q,
            getApplyQueryString: Y,
            handleFocusFilter: w,
            handleBlurFilter: U,
        } = (0, E.HJ)(i, f.dCx.FILTER_FROM, N[f.dCx.FILTER_FROM]),
        {
            options: J,
            query: W,
            setQuery: Z,
            setQueryString: z,
            handleClearFilter: X,
            getApplyQueryString: K,
            handleFocusFilter: V,
            handleBlurFilter: G,
        } = (0, E.HJ)(i, f.dCx.FILTER_MENTIONS, N[f.dCx.FILTER_MENTIONS]),
        {
            options: $,
            query: ee,
            setQuery: et,
            handleClearFilter: el,
            getApplyQueryString: en,
            handleFocusFilter: er,
        } = (0, E.Z2)(i, N[f.dCx.FILTER_HAS]),
        {
            options: ei,
            query: ea,
            setQuery: eo,
            setQueryString: es,
            handleClearFilter: eu,
            getApplyQueryString: ec,
            handleFocusFilter: ed,
            handleBlurFilter: eh,
        } = (0, E.ur)(i, N[f.dCx.FILTER_IN]),
        {
            options: eg,
            dates: eF,
            validDates: ex,
            handleDateQueryChange: ep,
            handleDateChange: eC,
            handleAddDateFilter: eT,
            handleRemoveDateFilter: eE,
            handleClearDateFilter: eS,
            getDateQueryString: ef,
        } = (0, E.fI)(N.dateFilters),
        {
            options: eI,
            query: eR,
            setQuery: em,
            handleClearFilter: ey,
            getApplyQueryString: eb,
            handleFocusFilter: eL,
        } = (0, E.fJ)(i, N[f.dCx.FILTER_AUTHOR_TYPE]),
        {
            options: ev,
            query: e_,
            setQuery: eN,
            handleClearFilter: eO,
            getApplyQueryString: ej,
        } = (0, E.zL)(i, N[f.dCx.FILTER_PINNED]),
        eM = r.useMemo(() => {
            let e = 0;
            return (
                j && D.length > 0 && (e += D.length),
                M && W.length > 0 && (e += W.length),
                A && ea.length > 0 && (e += ea.length),
                ee.length > 0 && (e += ee.length),
                ex.length > 0 && (e += ex.length),
                P && eR.length > 0 && (e += eR.length),
                null !== e_ && (e += 1),
                e
            );
        }, [j, D, M, W, A, ea, ee, ex, P, eR, e_]),
        eA = r.useMemo(() => {
            let e = en(f.dCx.FILTER_HAS),
                t = ef(),
                l = ej(f.dCx.FILTER_PINNED),
                n = [];
            if (j) {
                let e = Y(f.dCx.FILTER_FROM);
                null != e && n.push(e);
            }
            if (M) {
                let e = K(f.dCx.FILTER_MENTIONS);
                null != e && n.push(e);
            }
            if (A) {
                let e = ec(f.dCx.FILTER_IN);
                null != e && n.push(e);
            }
            if ((null != e && n.push(e), null != t && n.push(t), P)) {
                let e = eb(f.dCx.FILTER_AUTHOR_TYPE);
                null != e && n.push(e);
            }
            return null != l && n.push(l), [...n].join(" ");
        }, [j, Y, M, K, A, ec, en, ef, P, eb, ej]),
        { validateFilter: eP, validateDateFilter: eQ } = (0, E.YL)({
            nonFilterQueryString: Q,
            filterQueryString: eA,
        }),
        ek = r.useMemo(
            () =>
                !(
                    (!j || (0, E.Ek)(D, N[f.dCx.FILTER_FROM])) &&
                    (!M || (0, E.Ek)(W, N[f.dCx.FILTER_MENTIONS])) &&
                    (!A || (0, E.Ek)(ea, N[f.dCx.FILTER_IN])) &&
                    (0, E.Ek)(ee, N[f.dCx.FILTER_HAS]) &&
                    (0, E.LE)(ex, N.dateFilters) &&
                    (!P || (0, E.Ek)(eR, N[f.dCx.FILTER_AUTHOR_TYPE])) &&
                    (0, E.Ek)(e_, N[f.dCx.FILTER_PINNED])
                ),
            [j, D, N, M, W, A, ea, ee, ex, P, eR, e_],
        ),
        eD = r.useCallback(() => {
            if (0 === eA.length && 0 === Q.trim().length) {
                p.S.dispatch(f.CkL.SEARCH_RESULTS_CLOSE), l();
                return;
            }
            let e = "".concat(eA, " ").concat(Q).trim();
            T.Z.dispatchSetSearchQuery({
                query: e,
                anchor: 0,
                focus: 0,
                performSearch: !0,
                replace: !0,
                searchQuerySource: S.w7.SEARCH_FILTERS_MODAL,
            }),
                l();
        }, [eA, Q, l]),
        eH = r.useMemo(() => {
            if (0 === eM) return I.intl.string(I.t.YfwFu1);
            let e = "(".concat(eM, ")");
            return "".concat(I.intl.string(I.t.YfwFu1), " ").concat(e);
        }, [eM]),
        eB = r.useCallback(() => {
            j && q(), M && X(), A && eu(), P && ey(), el(), eS(), eO();
        }, [j, M, el, A, eS, q, X, eu, P, ey, eO]);
    return (0, n.jsx)(o.Modal, {
        transitionState: t,
        onClose: l,
        "aria-labelledby": a,
        title: I.intl.string(I.t["F8a0W/"]),
        actions: [
            {
                variant: "secondary",
                text: I.intl.string(I.t["ETE/oC"]),
                onClick: l,
            },
            {
                variant: "primary",
                text: I.intl.string(I.t.qDzapn),
                onClick: eD,
                disabled: !ek,
            },
        ],
        actionBarInput: (0, n.jsx)(d.Avr, {
            variant: "primary",
            text: eH,
            onClick: eB,
            disabled: 0 === eM,
        }),
        children: (0, n.jsxs)("div", {
            className: R.container,
            children: [
                j &&
                    (0, n.jsx)(b, {
                        label: I.intl.string(I.t.Qz6eOR),
                        sublabel: I.intl.string(I.t["2JyXnO"]),
                        textPlaceholder: I.intl.formatToPlainString(I.t["V4WMj/"], { username: c }),
                        value: D,
                        onChange: H,
                        onFocus: w,
                        onSearchChange: B,
                        options: k,
                        filter: !0,
                        filterType: f.dCx.FILTER_FROM,
                        validateFilter: eP,
                        closeOnSelect: !1,
                        onBlur: U,
                    }),
                A &&
                    (0, n.jsx)(b, {
                        label: I.intl.string(I.t["kLrM/s"]),
                        sublabel: i.type === f.aib.DMS ? I.intl.string(I.t["b+abYv"]) : I.intl.string(I.t.x8cC0z),
                        textPlaceholder: I.intl.formatToPlainString(I.t.K4l507, { channelName: u }),
                        value: ea,
                        onChange: eo,
                        onFocus: ed,
                        onSearchChange: es,
                        options: ei,
                        filter: !0,
                        closeOnSelect: !1,
                        filterType: f.dCx.FILTER_IN,
                        validateFilter: eP,
                        onBlur: eh,
                    }),
                (0, n.jsx)(b, {
                    label: I.intl.string(I.t["892qg1"]),
                    sublabel: I.intl.string(I.t["Oa//IE"]),
                    textPlaceholder: I.intl.string(I.t.tROvHH),
                    value: ee,
                    onChange: et,
                    onFocus: er,
                    options: $,
                    filter: !1,
                    closeOnSelect: !1,
                    filterType: f.dCx.FILTER_HAS,
                    validateFilter: eP,
                }),
                M &&
                    (0, n.jsx)(b, {
                        label: I.intl.string(I.t.HEBnRU),
                        sublabel: I.intl.string(I.t.PdfTqT),
                        textPlaceholder: I.intl.formatToPlainString(I.t.zka3aJ, { username: c }),
                        value: W,
                        onChange: Z,
                        onFocus: V,
                        onSearchChange: z,
                        options: J,
                        filter: !0,
                        filterType: f.dCx.FILTER_MENTIONS,
                        validateFilter: eP,
                        closeOnSelect: !1,
                        onBlur: G,
                    }),
                (0, n.jsx)(y, {
                    options: eg,
                    dates: eF,
                    handleDateQueryChange: ep,
                    handleDateChange: eC,
                    handleAddDateFilter: eT,
                    handleRemoveDateFilter: eE,
                    validateDateFilter: eQ,
                }),
                P &&
                    (0, n.jsx)(b, {
                        label: I.intl.string(I.t.Xgc1av),
                        sublabel: I.intl.string(I.t.XaOAdt),
                        textPlaceholder: I.intl.string(I.t.CAdOdf),
                        value: eR,
                        onChange: em,
                        onFocus: eL,
                        options: eI,
                        filter: !1,
                        closeOnSelect: !1,
                        filterType: f.dCx.FILTER_AUTHOR_TYPE,
                        validateFilter: eP,
                    }),
                (0, n.jsx)(L, {
                    label: I.intl.string(I.t["6LYPWS"]),
                    sublabel: I.intl.string(I.t.L8jjfu),
                    textPlaceholder: I.intl.string(I.t.AQpFbX),
                    value: e_,
                    onChange: eN,
                    options: ev,
                    filterType: f.dCx.FILTER_PINNED,
                    validateFilter: eP,
                }),
            ],
        }),
    });
}
