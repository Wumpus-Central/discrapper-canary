l.d(t, { default: () => I }), l(388685), l(539854), l(781311);
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
    F = l(585483),
    m = l(607802),
    p = l(465524),
    C = l(611004),
    S = l(981631),
    b = l(388032),
    f = l(540432);
function y(e) {
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
function _(e) {
    let { index: t, query: l, handleQuerySelect: r, handleDateSelect: a, options: s, handleRemoveDateFilter: o } = e,
        c = i()(),
        d = i()("2015-05-15");
    return (0, n.jsxs)("div", {
        className: f.dateFilter,
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
                className: f.dateFilterSelect,
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
                className: f.removeDateFilterButton,
                "aria-label": b.intl.formatToPlainString(b.t["2LwBlJ"], { filterNumber: t + 1 }),
                children: (0, n.jsx)(u.XHJ, {
                    size: "md",
                    color: "currentColor",
                    className: f.trashIcon,
                    "aria-hidden": !0,
                }),
            }),
        ],
    });
}
function E(e) {
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
        className: f.filterSection,
        children: [
            (0, n.jsx)(u.Text, {
                variant: "text-md/medium",
                color: "text-primary",
                className: f.label,
                children: b.intl.string(b.t.oesnws),
            }),
            (0, n.jsx)(u.Text, {
                variant: "text-sm/medium",
                color: "text-secondary",
                className: f.sublabel,
                children: b.intl.string(b.t.A2DY6O),
            }),
            l.map((e, l) =>
                (0, n.jsx)(
                    _,
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
function T(e) {
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
        className: f.filterSection,
        children: [
            (0, n.jsx)(u.Text, {
                variant: "text-md/medium",
                color: "text-primary",
                className: f.label,
                children: t,
            }),
            (0, n.jsx)(u.Text, {
                variant: "text-sm/medium",
                color: "text-secondary",
                className: f.sublabel,
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
function I(e) {
    let { transitionState: t, onClose: l, searchContext: a } = e,
        i = (0, d.Dt)(),
        _ = r.useMemo(() => (0, m.s5)(a), [a]),
        I = (0, s.e7)([h.Z, x.Z], () => {
            let e = h.Z.getChannel(x.Z.getChannelId());
            return null != e ? (0, m.nl)(e) : "general";
        }),
        v = (0, s.e7)([g.default], () => {
            let e = g.default.getCurrentUser();
            return null != e ? e.username : b.intl.string(b.t.cqpybG);
        }),
        [R, j] = r.useState(C.Z.getSearchInputText(a)),
        O = r.useMemo(() => (0, m.kG)(null != R ? R : ""), [R]),
        { prefilledSearchFilters: N, eligibleFilterTokens: L } = (0, p.p4)(O, a),
        k = L.has(S.dCx.FILTER_FROM),
        M = L.has(S.dCx.FILTER_MENTIONS),
        P = L.has(S.dCx.FILTER_IN),
        D = r.useMemo(() => (0, m.nI)(O), [O]),
        {
            options: Q,
            query: q,
            setQuery: A,
            setQueryString: H,
            handleClearFilter: w,
            getApplyQueryString: B,
            handleFocusFilter: Z,
        } = (0, p.HJ)(a, S.dCx.FILTER_FROM, N[S.dCx.FILTER_FROM]),
        {
            options: z,
            query: J,
            setQuery: W,
            setQueryString: K,
            handleClearFilter: U,
            getApplyQueryString: Y,
            handleFocusFilter: G,
        } = (0, p.HJ)(a, S.dCx.FILTER_MENTIONS, N[S.dCx.FILTER_MENTIONS]),
        V = (0, p.Zc)(_),
        {
            options: X,
            query: $,
            setQuery: ee,
            handleClearFilter: et,
            getApplyQueryString: el,
            handleFocusFilter: en,
        } = (0, p.Z2)(a, N[S.dCx.FILTER_HAS]),
        {
            options: er,
            query: ea,
            setQuery: ei,
            setQueryString: es,
            handleClearFilter: eo,
            getApplyQueryString: eu,
            handleFocusFilter: ec,
        } = (0, p.ur)(a, N[S.dCx.FILTER_IN]),
        ed = r.useCallback((e) => {
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
            options: eh,
            dates: ex,
            validDates: eg,
            handleDateQueryChange: eF,
            handleDateChange: em,
            handleAddDateFilter: ep,
            handleRemoveDateFilter: eC,
            handleClearDateFilter: eS,
            getDateQueryString: eb,
        } = (0, p.fI)(N.dateFilters),
        ef = r.useMemo(() => {
            let e = 0;
            return (
                k && q.length > 0 && (e += q.length),
                M && J.length > 0 && (e += J.length),
                P && ea.length > 0 && (e += ea.length),
                $.length > 0 && (e += $.length),
                eg.length > 0 && (e += eg.length),
                e
            );
        }, [k, q, M, J, P, ea, $, eg]),
        ey = r.useMemo(
            () =>
                !(
                    (!k || (0, p.Ek)(q, N[S.dCx.FILTER_FROM])) &&
                    (!M || (0, p.Ek)(J, N[S.dCx.FILTER_MENTIONS])) &&
                    (!P || (0, p.Ek)(ea, N[S.dCx.FILTER_IN])) &&
                    (0, p.Ek)($, N[S.dCx.FILTER_HAS]) &&
                    (0, p.LE)(eg, N.dateFilters)
                ),
            [k, q, N, M, J, P, ea, $, eg],
        ),
        e_ = r.useCallback(() => {
            let e = el(S.dCx.FILTER_HAS),
                t = eb(),
                n = [];
            if (k) {
                let e = B(S.dCx.FILTER_FROM);
                null != e && n.push(e);
            }
            if (M) {
                let e = Y(S.dCx.FILTER_MENTIONS);
                null != e && n.push(e);
            }
            if (P) {
                let e = eu(S.dCx.FILTER_IN);
                null != e && n.push(e);
            }
            if ((null != e && n.push(e), null != t && n.push(t), 0 === n.length && 0 === D.trim().length)) {
                F.S.dispatch(S.CkL.SEARCH_RESULTS_CLOSE), l();
                return;
            }
            let r = [...n, D].join(" ");
            F.S.dispatch(S.CkL.SET_SEARCH_QUERY, {
                query: r,
                anchor: 0,
                focus: 0,
                performSearch: !0,
                replace: !0,
            }),
                l();
        }, [k, P, M, eb, B, el, eu, Y, D, l]),
        eE = r.useCallback(() => {
            k && w(), M && U(), P && eo(), et(), eS();
        }, [k, M, et, P, eS, w, U, eo]);
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
                onClick: e_,
                disabled: !ey,
            },
        ],
        actionBarInput: (0, n.jsx)(u.P3F, {
            onClick: eE,
            className: f.clearFilters,
            children: (0, n.jsxs)(u.Text, {
                variant: "text-sm/medium",
                color: ef > 0 ? "text-brand" : "text-tertiary",
                children: [b.intl.string(b.t.YfwFu7), " ", ef > 0 && "(".concat(ef, ")")],
            }),
        }),
        children: [
            k &&
                (0, n.jsx)(
                    T,
                    y(
                        {
                            label: b.intl.string(b.t.Qz6eOT),
                            sublabel: b.intl.string(b.t["2JyXnJ"]),
                            textPlaceholder: b.intl.formatToPlainString(b.t.V4WMj4, { username: v }),
                            value: q,
                            onChange: A,
                            onFocus: Z,
                            onSearchChange: H,
                            options: Q,
                        },
                        V,
                    ),
                ),
            P &&
                (0, n.jsx)(T, {
                    label: b.intl.string(b.t["kLrM/v"]),
                    sublabel: b.intl.string(b.t.x8cC09),
                    textPlaceholder: b.intl.formatToPlainString(b.t.K4l509, { channelName: I }),
                    value: ea,
                    onChange: ei,
                    onFocus: ec,
                    onSearchChange: es,
                    options: er,
                    filter: !1,
                    closeOnSelect: !1,
                    renderOptionPrefix: ed,
                }),
            M &&
                (0, n.jsx)(
                    T,
                    y(
                        {
                            label: b.intl.string(b.t.HEBnRU),
                            sublabel: b.intl.string(b.t.PdfTqa),
                            textPlaceholder: b.intl.formatToPlainString(b.t.zka3aG, { username: v }),
                            value: J,
                            onChange: W,
                            onFocus: G,
                            onSearchChange: K,
                            options: z,
                        },
                        V,
                    ),
                ),
            (0, n.jsx)(T, {
                label: b.intl.string(b.t["892qg4"]),
                sublabel: b.intl.string(b.t["Oa//IC"]),
                textPlaceholder: b.intl.string(b.t.tROvHB),
                value: $,
                onChange: ee,
                onFocus: en,
                options: X,
                filter: !0,
                closeOnSelect: !1,
            }),
            (0, n.jsx)(E, {
                options: eh,
                dates: ex,
                handleDateQueryChange: eF,
                handleDateChange: em,
                handleAddDateFilter: ep,
                handleRemoveDateFilter: eC,
            }),
        ],
    });
}
