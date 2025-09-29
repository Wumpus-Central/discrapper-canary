l.d(t, { default: () => j }), l(388685), l(539854), l(781311);
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
    C = l(607802),
    m = l(465524),
    F = l(611004),
    T = l(981631),
    b = l(388032),
    y = l(407868);
function E(e) {
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
                "aria-label": b.intl.formatToPlainString(b.t["2LwBlJ"], { filterNumber: t + 1 }),
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
function f(e) {
    let {
            options: t,
            dates: l,
            handleDateQueryChange: r,
            handleDateChange: a,
            handleAddDateFilter: i,
            handleRemoveDateFilter: s,
        } = e,
        o = l.length < 4;
    return (0, n.jsxs)("div", {
        className: y.filterSection,
        children: [
            (0, n.jsx)(u.Text, {
                variant: "text-md/medium",
                color: "text-primary",
                className: y.label,
                children: b.intl.string(b.t.oesnws),
            }),
            (0, n.jsx)(u.Text, {
                variant: "text-sm/medium",
                color: "text-secondary",
                className: y.sublabel,
                children: b.intl.string(b.t.A2DY6O),
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
            o &&
                (0, n.jsx)(u.zxk, {
                    variant: "secondary",
                    fullWidth: !0,
                    text: b.intl.string(b.t.iP9YpK),
                    icon: u.BRu,
                    onClick: i,
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
                onChange: i,
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
    let { label: t, sublabel: l, textPlaceholder: r, value: a, onChange: i, options: s } = e;
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
                onChange: i,
                value: a,
                clearable: null != a,
            }),
        ],
    });
}
function j(e) {
    let { transitionState: t, onClose: l, searchContext: a } = e,
        i = (0, d.Dt)(),
        S = r.useMemo(() => (0, C.s5)(a), [a]),
        j = (0, s.e7)([h.Z, x.Z], () => {
            let e = h.Z.getChannel(x.Z.getChannelId());
            return null != e ? (0, C.nl)(e) : "general";
        }),
        N = (0, s.e7)([g.default], () => {
            let e = g.default.getCurrentUser();
            return null != e ? e.username : b.intl.string(b.t.cqpybG);
        }),
        [O, v] = r.useState(F.Z.getSearchInputText(a)),
        L = r.useMemo(() => (0, C.kG)(null != O ? O : ""), [O]),
        { prefilledSearchFilters: _, eligibleFilterTokens: P } = (0, m.p4)(L, a),
        k = P.has(T.dCx.FILTER_FROM),
        A = P.has(T.dCx.FILTER_MENTIONS),
        Q = P.has(T.dCx.FILTER_IN),
        M = P.has(T.dCx.FILTER_AUTHOR_TYPE),
        q = r.useMemo(() => (0, C.nI)(L), [L]),
        {
            options: D,
            query: H,
            setQuery: w,
            setQueryString: Y,
            handleClearFilter: U,
            getApplyQueryString: Z,
            handleFocusFilter: z,
        } = (0, m.HJ)(a, T.dCx.FILTER_FROM, _[T.dCx.FILTER_FROM]),
        {
            options: J,
            query: W,
            setQuery: B,
            setQueryString: X,
            handleClearFilter: K,
            getApplyQueryString: G,
            handleFocusFilter: V,
        } = (0, m.HJ)(a, T.dCx.FILTER_MENTIONS, _[T.dCx.FILTER_MENTIONS]),
        $ = (0, m.Zc)(S),
        {
            options: ee,
            query: et,
            setQuery: el,
            handleClearFilter: en,
            getApplyQueryString: er,
            handleFocusFilter: ea,
        } = (0, m.Z2)(a, _[T.dCx.FILTER_HAS]),
        {
            options: ei,
            query: es,
            setQuery: eo,
            setQueryString: eu,
            handleClearFilter: ec,
            getApplyQueryString: ed,
            handleFocusFilter: eh,
        } = (0, m.ur)(a, _[T.dCx.FILTER_IN]),
        ex = r.useCallback((e) => {
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
            options: eg,
            dates: ep,
            validDates: eC,
            handleDateQueryChange: em,
            handleDateChange: eF,
            handleAddDateFilter: eT,
            handleRemoveDateFilter: eb,
            handleClearDateFilter: ey,
            getDateQueryString: eE,
        } = (0, m.fI)(_.dateFilters),
        {
            options: eS,
            query: ef,
            setQuery: eI,
            handleClearFilter: eR,
            getApplyQueryString: ej,
            handleFocusFilter: eN,
        } = (0, m.fJ)(a, _[T.dCx.FILTER_AUTHOR_TYPE]),
        {
            options: eO,
            query: ev,
            setQuery: eL,
            handleClearFilter: e_,
            getApplyQueryString: eP,
        } = (0, m.zL)(a, _[T.dCx.FILTER_PINNED]),
        ek = r.useMemo(() => {
            let e = 0;
            return (
                k && H.length > 0 && (e += H.length),
                A && W.length > 0 && (e += W.length),
                Q && es.length > 0 && (e += es.length),
                et.length > 0 && (e += et.length),
                eC.length > 0 && (e += eC.length),
                M && ef.length > 0 && (e += ef.length),
                null !== ev && (e += 1),
                e
            );
        }, [k, H, A, W, Q, es, et, eC, M, ef, ev]),
        eA = r.useMemo(
            () =>
                !(
                    (!k || (0, m.Ek)(H, _[T.dCx.FILTER_FROM])) &&
                    (!A || (0, m.Ek)(W, _[T.dCx.FILTER_MENTIONS])) &&
                    (!Q || (0, m.Ek)(es, _[T.dCx.FILTER_IN])) &&
                    (0, m.Ek)(et, _[T.dCx.FILTER_HAS]) &&
                    (0, m.LE)(eC, _.dateFilters) &&
                    (!M || (0, m.Ek)(ef, _[T.dCx.FILTER_AUTHOR_TYPE])) &&
                    (0, m.Ek)(ev, _[T.dCx.FILTER_PINNED])
                ),
            [k, H, _, A, W, Q, es, et, eC, M, ef, ev],
        ),
        eQ = r.useCallback(() => {
            let e = er(T.dCx.FILTER_HAS),
                t = eE(),
                n = eP(T.dCx.FILTER_PINNED),
                r = [];
            if (k) {
                let e = Z(T.dCx.FILTER_FROM);
                null != e && r.push(e);
            }
            if (A) {
                let e = G(T.dCx.FILTER_MENTIONS);
                null != e && r.push(e);
            }
            if (Q) {
                let e = ed(T.dCx.FILTER_IN);
                null != e && r.push(e);
            }
            if ((null != e && r.push(e), null != t && r.push(t), M)) {
                let e = ej(T.dCx.FILTER_AUTHOR_TYPE);
                null != e && r.push(e);
            }
            if ((null != n && r.push(n), 0 === r.length && 0 === q.trim().length)) {
                p.S.dispatch(T.CkL.SEARCH_RESULTS_CLOSE), l();
                return;
            }
            let a = [...r, q].join(" ");
            p.S.dispatch(T.CkL.SET_SEARCH_QUERY, {
                query: a,
                anchor: 0,
                focus: 0,
                performSearch: !0,
                replace: !0,
            }),
                l();
        }, [M, k, Q, A, ej, eE, Z, er, ed, G, q, l, eP]),
        eM = r.useCallback(() => {
            k && U(), A && K(), Q && ec(), M && eR(), en(), ey(), e_();
        }, [k, A, en, Q, ey, U, K, ec, M, eR, e_]);
    return (0, n.jsxs)(o.Modal, {
        transitionState: t,
        onClose: l,
        "aria-labelledby": i,
        title: b.intl.string(b.t.F8a0W1),
        actions: [
            {
                variant: "secondary",
                text: b.intl.string(b.t["ETE/oK"]),
                onClick: l,
            },
            {
                variant: "primary",
                text: b.intl.string(b.t.qDzapq),
                onClick: eQ,
                disabled: !eA,
            },
        ],
        actionBarInput: (0, n.jsx)(u.P3F, {
            onClick: eM,
            className: y.clearFilters,
            children: (0, n.jsxs)(u.Text, {
                variant: "text-sm/medium",
                color: ek > 0 ? "text-brand" : "text-tertiary",
                children: [b.intl.string(b.t.YfwFu7), " ", ek > 0 && "(".concat(ek, ")")],
            }),
        }),
        children: [
            k &&
                (0, n.jsx)(
                    I,
                    E(
                        {
                            label: b.intl.string(b.t.Qz6eOT),
                            sublabel: b.intl.string(b.t["2JyXnJ"]),
                            textPlaceholder: b.intl.formatToPlainString(b.t.V4WMj4, { username: N }),
                            value: H,
                            onChange: w,
                            onFocus: z,
                            onSearchChange: Y,
                            options: D,
                        },
                        $,
                    ),
                ),
            Q &&
                (0, n.jsx)(I, {
                    label: b.intl.string(b.t["kLrM/v"]),
                    sublabel: b.intl.string(b.t.x8cC09),
                    textPlaceholder: b.intl.formatToPlainString(b.t.K4l509, { channelName: j }),
                    value: es,
                    onChange: eo,
                    onFocus: eh,
                    onSearchChange: eu,
                    options: ei,
                    filter: !1,
                    closeOnSelect: !1,
                    renderOptionPrefix: ex,
                }),
            A &&
                (0, n.jsx)(
                    I,
                    E(
                        {
                            label: b.intl.string(b.t.HEBnRU),
                            sublabel: b.intl.string(b.t.PdfTqa),
                            textPlaceholder: b.intl.formatToPlainString(b.t.zka3aG, { username: N }),
                            value: W,
                            onChange: B,
                            onFocus: V,
                            onSearchChange: X,
                            options: J,
                        },
                        $,
                    ),
                ),
            (0, n.jsx)(I, {
                label: b.intl.string(b.t["892qg4"]),
                sublabel: b.intl.string(b.t["Oa//IC"]),
                textPlaceholder: b.intl.string(b.t.tROvHB),
                value: et,
                onChange: el,
                onFocus: ea,
                options: ee,
                filter: !0,
                closeOnSelect: !1,
            }),
            (0, n.jsx)(f, {
                options: eg,
                dates: ep,
                handleDateQueryChange: em,
                handleDateChange: eF,
                handleAddDateFilter: eT,
                handleRemoveDateFilter: eb,
            }),
            M &&
                (0, n.jsx)(I, {
                    label: b.intl.string(b.t.Xgc1am),
                    sublabel: b.intl.string(b.t.XaOAdn),
                    textPlaceholder: b.intl.string(b.t.CAdOdX),
                    value: ef,
                    onChange: eI,
                    onFocus: eN,
                    options: eS,
                    filter: !0,
                    closeOnSelect: !1,
                }),
            (0, n.jsx)(R, {
                label: b.intl.string(b.t["6LYPWV"]),
                sublabel: b.intl.string(b.t.L8jjfn),
                textPlaceholder: b.intl.string(b.t.AQpFbW),
                value: ev,
                onChange: eL,
                options: eO,
            }),
        ],
    });
}
