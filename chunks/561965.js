l.d(t, { default: () => C }), l(896048), l(321073), l(733351);
var n = l(627968),
    r = l(64700),
    i = l(989349),
    a = l.n(i),
    s = l(158954),
    o = l(311907),
    u = l(783878),
    c = l(74818),
    d = l(397927),
    h = l(915089),
    g = l(734057),
    F = l(309010),
    p = l(287809),
    L = l(203982),
    T = l(822382),
    E = l(753806),
    I = l(121806),
    S = l(768570),
    R = l(652215),
    f = l(985018),
    _ = l(443161);
function y(e) {
    let { index: t, query: l, handleQuerySelect: r, handleDateSelect: i, options: s, handleRemoveDateFilter: o } = e,
        u = a()(),
        h = a()("2015-05-15");
    return (0, n.jsxs)("div", {
        className: _.Rr,
        children: [
            (0, n.jsx)(c.l, {
                label: f.intl.string(f.t.ArxagQ),
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
                options: s,
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
            (0, n.jsx)(d.J3s, {
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
            (0, n.jsx)(d.DUT, {
                onClick: () => {
                    o(t);
                },
                className: _.tL,
                "aria-label": f.intl.formatToPlainString(f.t["2LwBlF"], { filterNumber: t + 1 }),
                children: (0, n.jsx)(d.ucK, {
                    size: "md",
                    color: "currentColor",
                    className: _.IT,
                    "aria-hidden": !0,
                }),
            }),
        ],
    });
}
function x(e) {
    let {
            options: t,
            dates: l,
            handleDateQueryChange: r,
            handleDateChange: i,
            handleAddDateFilter: a,
            handleRemoveDateFilter: s,
            validateDateFilter: o,
        } = e,
        u = l.length < 4;
    return (0, n.jsxs)("div", {
        className: _.KZ,
        children: [
            (0, n.jsxs)("div", {
                className: _._A,
                children: [
                    (0, n.jsx)(d.Text, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        children: f.intl.string(f.t.oesnwm),
                    }),
                    (0, n.jsx)(d.Text, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: f.intl.string(f.t.A2DY6J),
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
                        handleRemoveDateFilter: s,
                    },
                    e.id,
                ),
            ),
            u &&
                (0, n.jsx)(d.Button, {
                    variant: "secondary",
                    fullWidth: !0,
                    text: f.intl.string(f.t.iP9YpB),
                    icon: d.TIR,
                    onClick: () => {
                        o() && a();
                    },
                }),
        ],
    });
}
function m(e) {
    let {
            label: t,
            sublabel: l,
            textPlaceholder: i,
            value: a,
            onChange: s,
            options: o,
            filter: c,
            closeOnSelect: d,
            onFocus: h,
            onSearchChange: g,
            filterType: F,
            validateFilter: p,
            onBlur: L,
        } = e,
        T = r.useMemo(() => (c ? (e) => e : void 0), [c]);
    return (0, n.jsx)("div", {
        className: _.KZ,
        children: (0, n.jsx)(u.Z, {
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
            options: o,
            placeholder: i,
            value: a,
            onSelectionChange: (e) => {
                (!(e.length > a.length) || p(F, e[e.length - 1])) && s(e);
            },
            onFocus: h,
            onQueryChange: (e) => (null == g ? void 0 : g(e.target.value)),
            closeOnSelect: d,
            customMatchSorter: T,
            onBlur: L,
            wrapTags: !0,
        }),
    });
}
function b(e) {
    let {
        label: t,
        sublabel: l,
        textPlaceholder: r,
        value: i,
        onChange: a,
        options: s,
        filterType: o,
        validateFilter: u,
    } = e;
    return (0, n.jsx)("div", {
        className: _.KZ,
        children: (0, n.jsx)(c.l, {
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
            options: s,
            onSelectionChange: (e) => {
                (null == e || u(o, e)) && a(e);
            },
            value: i,
            clearable: null != i,
            fullWidth: !0,
        }),
    });
}
function C(e) {
    let { transitionState: t, onClose: l, searchContext: i } = e,
        a = (0, h.GV)(),
        u = (0, o.bG)([g.A, F.A], () => {
            let e = g.A.getChannel(F.A.getChannelId());
            return null != e ? (0, T.E3)(e) : "general";
        }),
        c = (0, o.bG)([p.default], () => {
            let e = p.default.getCurrentUser();
            return null != e ? e.username : f.intl.string(f.t.cqpybK);
        }),
        [y, C] = r.useState(E.A.getSearchInputText(i)),
        v = r.useMemo(() => (0, T._o)(null != y ? y : ""), [y]),
        { prefilledSearchFilters: W, eligibleFilterTokens: N } = (0, I.vj)(v, i),
        O = N.has(R.LWr.FILTER_FROM),
        j = N.has(R.LWr.FILTER_MENTIONS),
        A = N.has(R.LWr.FILTER_IN),
        M = N.has(R.LWr.FILTER_AUTHOR_TYPE),
        Q = r.useMemo(() => (0, T.Pp)(v), [v]),
        {
            options: P,
            query: D,
            setQuery: k,
            setQueryString: H,
            handleClearFilter: q,
            getApplyQueryString: w,
            handleFocusFilter: B,
            handleBlurFilter: Y,
        } = (0, I.ps)(i, R.LWr.FILTER_FROM, W[R.LWr.FILTER_FROM]),
        {
            options: U,
            query: K,
            setQuery: z,
            setQueryString: Z,
            handleClearFilter: J,
            getApplyQueryString: X,
            handleFocusFilter: G,
            handleBlurFilter: V,
        } = (0, I.ps)(i, R.LWr.FILTER_MENTIONS, W[R.LWr.FILTER_MENTIONS]),
        {
            options: $,
            query: ee,
            setQuery: et,
            handleClearFilter: el,
            getApplyQueryString: en,
            handleFocusFilter: er,
        } = (0, I.u2)(i, W[R.LWr.FILTER_HAS]),
        {
            options: ei,
            query: ea,
            setQuery: es,
            setQueryString: eo,
            handleClearFilter: eu,
            getApplyQueryString: ec,
            handleFocusFilter: ed,
            handleBlurFilter: eh,
        } = (0, I.TT)(i, W[R.LWr.FILTER_IN]),
        {
            options: eg,
            dates: eF,
            validDates: ep,
            handleDateQueryChange: eL,
            handleDateChange: eT,
            handleAddDateFilter: eE,
            handleRemoveDateFilter: eI,
            handleClearDateFilter: eS,
            getDateQueryString: eR,
        } = (0, I.Ky)(W.dateFilters),
        {
            options: ef,
            query: e_,
            setQuery: ey,
            handleClearFilter: ex,
            getApplyQueryString: em,
            handleFocusFilter: eb,
        } = (0, I.H3)(i, W[R.LWr.FILTER_AUTHOR_TYPE]),
        {
            options: eC,
            query: ev,
            setQuery: eW,
            handleClearFilter: eN,
            getApplyQueryString: eO,
        } = (0, I.CT)(i, W[R.LWr.FILTER_PINNED]),
        ej = r.useMemo(() => {
            let e = 0;
            return (
                O && D.length > 0 && (e += D.length),
                j && K.length > 0 && (e += K.length),
                A && ea.length > 0 && (e += ea.length),
                ee.length > 0 && (e += ee.length),
                ep.length > 0 && (e += ep.length),
                M && e_.length > 0 && (e += e_.length),
                null !== ev && (e += 1),
                e
            );
        }, [O, D, j, K, A, ea, ee, ep, M, e_, ev]),
        eA = r.useMemo(() => {
            let e = en(R.LWr.FILTER_HAS),
                t = eR(),
                l = eO(R.LWr.FILTER_PINNED),
                n = [];
            if (O) {
                let e = w(R.LWr.FILTER_FROM);
                null != e && n.push(e);
            }
            if (j) {
                let e = X(R.LWr.FILTER_MENTIONS);
                null != e && n.push(e);
            }
            if (A) {
                let e = ec(R.LWr.FILTER_IN);
                null != e && n.push(e);
            }
            if ((null != e && n.push(e), null != t && n.push(t), M)) {
                let e = em(R.LWr.FILTER_AUTHOR_TYPE);
                null != e && n.push(e);
            }
            return null != l && n.push(l), [...n].join(" ");
        }, [O, w, j, X, A, ec, en, eR, M, em, eO]),
        { validateFilter: eM, validateDateFilter: eQ } = (0, I.dY)({
            nonFilterQueryString: Q,
            filterQueryString: eA,
        }),
        eP = r.useMemo(
            () =>
                !(
                    (!O || (0, I.wf)(D, W[R.LWr.FILTER_FROM])) &&
                    (!j || (0, I.wf)(K, W[R.LWr.FILTER_MENTIONS])) &&
                    (!A || (0, I.wf)(ea, W[R.LWr.FILTER_IN])) &&
                    (0, I.wf)(ee, W[R.LWr.FILTER_HAS]) &&
                    (0, I._2)(ep, W.dateFilters) &&
                    (!M || (0, I.wf)(e_, W[R.LWr.FILTER_AUTHOR_TYPE])) &&
                    (0, I.wf)(ev, W[R.LWr.FILTER_PINNED])
                ),
            [O, D, W, j, K, A, ea, ee, ep, M, e_, ev],
        ),
        eD = r.useCallback(() => {
            if (0 === eA.length && 0 === Q.trim().length) {
                L._.dispatch(R.jej.SEARCH_RESULTS_CLOSE), l();
                return;
            }
            let e = "".concat(eA, " ").concat(Q).trim();
            E.A.dispatchSetSearchQuery({
                query: e,
                anchor: 0,
                focus: 0,
                performSearch: !0,
                replace: !0,
                searchQuerySource: S.Q_.SEARCH_FILTERS_MODAL,
            }),
                l();
        }, [eA, Q, l]),
        ek = r.useMemo(() => {
            if (0 === ej) return f.intl.string(f.t.YfwFu1);
            let e = "(".concat(ej, ")");
            return "".concat(f.intl.string(f.t.YfwFu1), " ").concat(e);
        }, [ej]),
        eH = r.useCallback(() => {
            O && q(), j && J(), A && eu(), M && ex(), el(), eS(), eN();
        }, [O, j, el, A, eS, q, J, eu, M, ex, eN]);
    return (0, n.jsx)(s.Modal, {
        transitionState: t,
        onClose: l,
        "aria-labelledby": a,
        title: f.intl.string(f.t["F8a0W/"]),
        actions: [
            {
                variant: "secondary",
                text: f.intl.string(f.t["ETE/oC"]),
                onClick: l,
            },
            {
                variant: "primary",
                text: f.intl.string(f.t.qDzapn),
                onClick: eD,
                disabled: !eP,
            },
        ],
        actionBarInput: (0, n.jsx)(d.QWc, {
            variant: "primary",
            text: ek,
            onClick: eH,
            disabled: 0 === ej,
        }),
        children: (0, n.jsxs)("div", {
            className: _.kL,
            children: [
                O &&
                    (0, n.jsx)(m, {
                        label: f.intl.string(f.t.Qz6eOR),
                        sublabel: f.intl.string(f.t["2JyXnO"]),
                        textPlaceholder: f.intl.formatToPlainString(f.t["V4WMj/"], { username: c }),
                        value: D,
                        onChange: k,
                        onFocus: B,
                        onSearchChange: H,
                        options: P,
                        filter: !0,
                        filterType: R.LWr.FILTER_FROM,
                        validateFilter: eM,
                        closeOnSelect: !1,
                        onBlur: Y,
                    }),
                A &&
                    (0, n.jsx)(m, {
                        label: f.intl.string(f.t["kLrM/s"]),
                        sublabel: i.type === R.I4_.DMS ? f.intl.string(f.t["b+abYv"]) : f.intl.string(f.t.x8cC0z),
                        textPlaceholder: f.intl.formatToPlainString(f.t.K4l507, { channelName: u }),
                        value: ea,
                        onChange: es,
                        onFocus: ed,
                        onSearchChange: eo,
                        options: ei,
                        filter: !0,
                        closeOnSelect: !1,
                        filterType: R.LWr.FILTER_IN,
                        validateFilter: eM,
                        onBlur: eh,
                    }),
                (0, n.jsx)(m, {
                    label: f.intl.string(f.t["892qg1"]),
                    sublabel: f.intl.string(f.t["Oa//IE"]),
                    textPlaceholder: f.intl.string(f.t.tROvHH),
                    value: ee,
                    onChange: et,
                    onFocus: er,
                    options: $,
                    filter: !1,
                    closeOnSelect: !1,
                    filterType: R.LWr.FILTER_HAS,
                    validateFilter: eM,
                }),
                j &&
                    (0, n.jsx)(m, {
                        label: f.intl.string(f.t.HEBnRU),
                        sublabel: f.intl.string(f.t.PdfTqT),
                        textPlaceholder: f.intl.formatToPlainString(f.t.zka3aJ, { username: c }),
                        value: K,
                        onChange: z,
                        onFocus: G,
                        onSearchChange: Z,
                        options: U,
                        filter: !0,
                        filterType: R.LWr.FILTER_MENTIONS,
                        validateFilter: eM,
                        closeOnSelect: !1,
                        onBlur: V,
                    }),
                (0, n.jsx)(x, {
                    options: eg,
                    dates: eF,
                    handleDateQueryChange: eL,
                    handleDateChange: eT,
                    handleAddDateFilter: eE,
                    handleRemoveDateFilter: eI,
                    validateDateFilter: eQ,
                }),
                M &&
                    (0, n.jsx)(m, {
                        label: f.intl.string(f.t.Xgc1av),
                        sublabel: f.intl.string(f.t.XaOAdt),
                        textPlaceholder: f.intl.string(f.t.CAdOdf),
                        value: e_,
                        onChange: ey,
                        onFocus: eb,
                        options: ef,
                        filter: !1,
                        closeOnSelect: !1,
                        filterType: R.LWr.FILTER_AUTHOR_TYPE,
                        validateFilter: eM,
                    }),
                (0, n.jsx)(b, {
                    label: f.intl.string(f.t["6LYPWS"]),
                    sublabel: f.intl.string(f.t.L8jjfu),
                    textPlaceholder: f.intl.string(f.t.AQpFbX),
                    value: ev,
                    onChange: eW,
                    options: eC,
                    filterType: R.LWr.FILTER_PINNED,
                    validateFilter: eM,
                }),
            ],
        }),
    });
}
