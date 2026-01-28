l.d(t, {
    default: () => x,
}),
    l(896048),
    l(321073),
    l(733351);
var n = l(627968),
    r = l(64700),
    i = l(989349),
    a = l.n(i),
    s = l(158954),
    o = l(311907),
    u = l(397927),
    c = l(915089),
    h = l(734057),
    d = l(309010),
    g = l(287809),
    F = l(203982),
    p = l(822382),
    L = l(753806),
    T = l(121806),
    E = l(768570),
    I = l(652215),
    S = l(985018),
    _ = l(443161);

function R(e) {
    let { index: t, query: l, handleQuerySelect: r, handleDateSelect: i, options: o, handleRemoveDateFilter: c } = e,
        h = a()(),
        d = a()("2015-05-15");
    return (0, n.jsxs)("div", {
        className: _.Rr,
        children: [
            (0, n.jsx)(s.l6P, {
                label: S.intl.string(S.t.ArxagQ),
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
            (0, n.jsx)(u.J3s, {
                value: l.date,
                onSelect: (e) => {
                    i({
                        date: e,
                        index: t,
                    });
                },
                minDate: d,
                maxDate: h,
            }),
            (0, n.jsx)(u.DUT, {
                onClick: () => {
                    c(t);
                },
                className: _.tL,
                "aria-label": S.intl.formatToPlainString(S.t["2LwBlF"], {
                    filterNumber: t + 1,
                }),
                children: (0, n.jsx)(u.ucK, {
                    size: "md",
                    color: "currentColor",
                    className: _.IT,
                    "aria-hidden": !0,
                }),
            }),
        ],
    });
}

function f(e) {
    let {
            options: t,
            dates: l,
            handleDateQueryChange: r,
            handleDateChange: i,
            handleAddDateFilter: a,
            handleRemoveDateFilter: s,
            validateDateFilter: o,
        } = e,
        c = l.length < 4;
    return (0, n.jsxs)("div", {
        className: _.KZ,
        children: [
            (0, n.jsxs)("div", {
                className: _._A,
                children: [
                    (0, n.jsx)(u.Text, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        children: S.intl.string(S.t.oesnwm),
                    }),
                    (0, n.jsx)(u.Text, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: S.intl.string(S.t.A2DY6J),
                    }),
                ],
            }),
            l.map((e, l) =>
                (0, n.jsx)(
                    R,
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
            c &&
                (0, n.jsx)(u.Button, {
                    variant: "secondary",
                    fullWidth: !0,
                    text: S.intl.string(S.t.iP9YpB),
                    icon: u.TIR,
                    onClick: () => {
                        o() && a();
                    },
                }),
        ],
    });
}

function y(e) {
    let {
            label: t,
            sublabel: l,
            textPlaceholder: i,
            value: a,
            onChange: s,
            options: o,
            filter: c,
            closeOnSelect: h,
            onFocus: d,
            onSearchChange: g,
            filterType: F,
            validateFilter: p,
            onBlur: L,
        } = e,
        T = r.useMemo(() => (c ? (e) => e : void 0), [c]);
    return (0, n.jsx)("div", {
        className: _.KZ,
        children: (0, n.jsx)(u.ZiE, {
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
            onFocus: d,
            onQueryChange: (e) => (null == g ? void 0 : g(e.target.value)),
            closeOnSelect: h,
            customMatchSorter: T,
            onBlur: L,
            wrapTags: !0,
        }),
    });
}

function m(e) {
    let {
        label: t,
        sublabel: l,
        textPlaceholder: r,
        value: i,
        onChange: a,
        options: o,
        filterType: u,
        validateFilter: c,
    } = e;
    return (0, n.jsx)("div", {
        className: _.KZ,
        children: (0, n.jsx)(s.l6P, {
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
                (null == e || c(u, e)) && a(e);
            },
            value: i,
            clearable: null != i,
            fullWidth: !0,
        }),
    });
}

function x(e) {
    let { transitionState: t, onClose: l, searchContext: i } = e,
        a = (0, c.GV)(),
        R = (0, o.bG)([h.A, d.A], () => {
            let e = h.A.getChannel(d.A.getChannelId());
            return null != e ? (0, p.E3)(e) : "general";
        }),
        x = (0, o.bG)([g.default], () => {
            let e = g.default.getCurrentUser();
            return null != e ? e.username : S.intl.string(S.t.cqpybK);
        }),
        [C, b] = r.useState(L.A.getSearchInputText(i)),
        v = r.useMemo(() => (0, p._o)(null != C ? C : ""), [C]),
        { prefilledSearchFilters: W, eligibleFilterTokens: N } = (0, T.vj)(v, i),
        O = N.has(I.LWr.FILTER_FROM),
        j = N.has(I.LWr.FILTER_MENTIONS),
        A = N.has(I.LWr.FILTER_IN),
        M = N.has(I.LWr.FILTER_AUTHOR_TYPE),
        P = r.useMemo(() => (0, p.Pp)(v), [v]),
        {
            options: Q,
            query: D,
            setQuery: k,
            setQueryString: H,
            handleClearFilter: q,
            getApplyQueryString: w,
            handleFocusFilter: B,
            handleBlurFilter: Y,
        } = (0, T.ps)(i, I.LWr.FILTER_FROM, W[I.LWr.FILTER_FROM]),
        {
            options: U,
            query: K,
            setQuery: z,
            setQueryString: Z,
            handleClearFilter: J,
            getApplyQueryString: X,
            handleFocusFilter: G,
            handleBlurFilter: V,
        } = (0, T.ps)(i, I.LWr.FILTER_MENTIONS, W[I.LWr.FILTER_MENTIONS]),
        {
            options: $,
            query: ee,
            setQuery: et,
            handleClearFilter: el,
            getApplyQueryString: en,
            handleFocusFilter: er,
        } = (0, T.u2)(i, W[I.LWr.FILTER_HAS]),
        {
            options: ei,
            query: ea,
            setQuery: es,
            setQueryString: eo,
            handleClearFilter: eu,
            getApplyQueryString: ec,
            handleFocusFilter: eh,
            handleBlurFilter: ed,
        } = (0, T.TT)(i, W[I.LWr.FILTER_IN]),
        {
            options: eg,
            dates: eF,
            validDates: ep,
            handleDateQueryChange: eL,
            handleDateChange: eT,
            handleAddDateFilter: eE,
            handleRemoveDateFilter: eI,
            handleClearDateFilter: eS,
            getDateQueryString: e_,
        } = (0, T.Ky)(W.dateFilters),
        {
            options: eR,
            query: ef,
            setQuery: ey,
            handleClearFilter: em,
            getApplyQueryString: ex,
            handleFocusFilter: eC,
        } = (0, T.H3)(i, W[I.LWr.FILTER_AUTHOR_TYPE]),
        {
            options: eb,
            query: ev,
            setQuery: eW,
            handleClearFilter: eN,
            getApplyQueryString: eO,
        } = (0, T.CT)(i, W[I.LWr.FILTER_PINNED]),
        ej = r.useMemo(() => {
            let e = 0;
            return (
                O && D.length > 0 && (e += D.length),
                j && K.length > 0 && (e += K.length),
                A && ea.length > 0 && (e += ea.length),
                ee.length > 0 && (e += ee.length),
                ep.length > 0 && (e += ep.length),
                M && ef.length > 0 && (e += ef.length),
                null !== ev && (e += 1),
                e
            );
        }, [O, D, j, K, A, ea, ee, ep, M, ef, ev]),
        eA = r.useMemo(() => {
            let e = en(I.LWr.FILTER_HAS),
                t = e_(),
                l = eO(I.LWr.FILTER_PINNED),
                n = [];
            if (O) {
                let e = w(I.LWr.FILTER_FROM);
                null != e && n.push(e);
            }
            if (j) {
                let e = X(I.LWr.FILTER_MENTIONS);
                null != e && n.push(e);
            }
            if (A) {
                let e = ec(I.LWr.FILTER_IN);
                null != e && n.push(e);
            }
            if ((null != e && n.push(e), null != t && n.push(t), M)) {
                let e = ex(I.LWr.FILTER_AUTHOR_TYPE);
                null != e && n.push(e);
            }
            return null != l && n.push(l), [...n].join(" ");
        }, [O, w, j, X, A, ec, en, e_, M, ex, eO]),
        { validateFilter: eM, validateDateFilter: eP } = (0, T.dY)({
            nonFilterQueryString: P,
            filterQueryString: eA,
        }),
        eQ = r.useMemo(
            () =>
                !(
                    (!O || (0, T.wf)(D, W[I.LWr.FILTER_FROM])) &&
                    (!j || (0, T.wf)(K, W[I.LWr.FILTER_MENTIONS])) &&
                    (!A || (0, T.wf)(ea, W[I.LWr.FILTER_IN])) &&
                    (0, T.wf)(ee, W[I.LWr.FILTER_HAS]) &&
                    (0, T._2)(ep, W.dateFilters) &&
                    (!M || (0, T.wf)(ef, W[I.LWr.FILTER_AUTHOR_TYPE])) &&
                    (0, T.wf)(ev, W[I.LWr.FILTER_PINNED])
                ),
            [O, D, W, j, K, A, ea, ee, ep, M, ef, ev],
        ),
        eD = r.useCallback(() => {
            if (0 === eA.length && 0 === P.trim().length) {
                F._.dispatch(I.jej.SEARCH_RESULTS_CLOSE), l();
                return;
            }
            let e = "".concat(eA, " ").concat(P).trim();
            L.A.dispatchSetSearchQuery({
                query: e,
                anchor: 0,
                focus: 0,
                performSearch: !0,
                replace: !0,
                searchQuerySource: E.Q_.SEARCH_FILTERS_MODAL,
            }),
                l();
        }, [eA, P, l]),
        ek = r.useMemo(() => {
            if (0 === ej) return S.intl.string(S.t.YfwFu1);
            let e = "(".concat(ej, ")");
            return "".concat(S.intl.string(S.t.YfwFu1), " ").concat(e);
        }, [ej]),
        eH = r.useCallback(() => {
            O && q(), j && J(), A && eu(), M && em(), el(), eS(), eN();
        }, [O, j, el, A, eS, q, J, eu, M, em, eN]);
    return (0, n.jsx)(s.Modal, {
        transitionState: t,
        onClose: l,
        "aria-labelledby": a,
        title: S.intl.string(S.t["F8a0W/"]),
        actions: [
            {
                variant: "secondary",
                text: S.intl.string(S.t["ETE/oC"]),
                onClick: l,
            },
            {
                variant: "primary",
                text: S.intl.string(S.t.qDzapn),
                onClick: eD,
                disabled: !eQ,
            },
        ],
        actionBarInput: (0, n.jsx)(u.QWc, {
            variant: "primary",
            text: ek,
            onClick: eH,
            disabled: 0 === ej,
        }),
        children: (0, n.jsxs)("div", {
            className: _.kL,
            children: [
                O &&
                    (0, n.jsx)(y, {
                        label: S.intl.string(S.t.Qz6eOR),
                        sublabel: S.intl.string(S.t["2JyXnO"]),
                        textPlaceholder: S.intl.formatToPlainString(S.t["V4WMj/"], {
                            username: x,
                        }),
                        value: D,
                        onChange: k,
                        onFocus: B,
                        onSearchChange: H,
                        options: Q,
                        filter: !0,
                        filterType: I.LWr.FILTER_FROM,
                        validateFilter: eM,
                        closeOnSelect: !1,
                        onBlur: Y,
                    }),
                A &&
                    (0, n.jsx)(y, {
                        label: S.intl.string(S.t["kLrM/s"]),
                        sublabel: i.type === I.I4_.DMS ? S.intl.string(S.t["b+abYv"]) : S.intl.string(S.t.x8cC0z),
                        textPlaceholder: S.intl.formatToPlainString(S.t.K4l507, {
                            channelName: R,
                        }),
                        value: ea,
                        onChange: es,
                        onFocus: eh,
                        onSearchChange: eo,
                        options: ei,
                        filter: !0,
                        closeOnSelect: !1,
                        filterType: I.LWr.FILTER_IN,
                        validateFilter: eM,
                        onBlur: ed,
                    }),
                (0, n.jsx)(y, {
                    label: S.intl.string(S.t["892qg1"]),
                    sublabel: S.intl.string(S.t["Oa//IE"]),
                    textPlaceholder: S.intl.string(S.t.tROvHH),
                    value: ee,
                    onChange: et,
                    onFocus: er,
                    options: $,
                    filter: !1,
                    closeOnSelect: !1,
                    filterType: I.LWr.FILTER_HAS,
                    validateFilter: eM,
                }),
                j &&
                    (0, n.jsx)(y, {
                        label: S.intl.string(S.t.HEBnRU),
                        sublabel: S.intl.string(S.t.PdfTqT),
                        textPlaceholder: S.intl.formatToPlainString(S.t.zka3aJ, {
                            username: x,
                        }),
                        value: K,
                        onChange: z,
                        onFocus: G,
                        onSearchChange: Z,
                        options: U,
                        filter: !0,
                        filterType: I.LWr.FILTER_MENTIONS,
                        validateFilter: eM,
                        closeOnSelect: !1,
                        onBlur: V,
                    }),
                (0, n.jsx)(f, {
                    options: eg,
                    dates: eF,
                    handleDateQueryChange: eL,
                    handleDateChange: eT,
                    handleAddDateFilter: eE,
                    handleRemoveDateFilter: eI,
                    validateDateFilter: eP,
                }),
                M &&
                    (0, n.jsx)(y, {
                        label: S.intl.string(S.t.Xgc1av),
                        sublabel: S.intl.string(S.t.XaOAdt),
                        textPlaceholder: S.intl.string(S.t.CAdOdf),
                        value: ef,
                        onChange: ey,
                        onFocus: eC,
                        options: eR,
                        filter: !1,
                        closeOnSelect: !1,
                        filterType: I.LWr.FILTER_AUTHOR_TYPE,
                        validateFilter: eM,
                    }),
                (0, n.jsx)(m, {
                    label: S.intl.string(S.t["6LYPWS"]),
                    sublabel: S.intl.string(S.t.L8jjfu),
                    textPlaceholder: S.intl.string(S.t.AQpFbX),
                    value: ev,
                    onChange: eW,
                    options: eb,
                    filterType: I.LWr.FILTER_PINNED,
                    validateFilter: eM,
                }),
            ],
        }),
    });
}
