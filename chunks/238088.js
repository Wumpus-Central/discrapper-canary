l.d(t, { default: () => E }), l(539854), l(388685);
var n = l(951288),
    r = l(647438),
    a = l(913527),
    i = l.n(a),
    s = l(442837),
    o = l(82659),
    c = l(481060),
    u = l(471445),
    d = l(313201),
    h = l(592125),
    x = l(944486),
    g = l(585483),
    F = l(833103),
    p = l(607802),
    C = l(770092),
    m = l(981631),
    b = l(388032),
    S = l(540432);
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
function y(e) {
    let { index: t, query: l, handleQuerySelect: r, handleDateSelect: a, options: s, handleRemoveDateFilter: o } = e,
        u = i()(),
        d = i()("2015-05-15");
    return (0, n.jsxs)("div", {
        className: S.dateFilter,
        children: [
            (0, n.jsx)(c.q4e, {
                options: s,
                value: l.query,
                onChange: (e) => {
                    r({
                        query: e,
                        index: t,
                    });
                },
                className: S.dateFilterSelect,
            }),
            (0, n.jsx)(c.Wrb, {
                value: l.date,
                onSelect: (e) => {
                    a({
                        date: e,
                        index: t,
                    });
                },
                minDate: d,
                maxDate: u,
            }),
            (0, n.jsx)(c.P3F, {
                onClick: () => {
                    o(t);
                },
                className: S.removeDateFilterButton,
                "aria-label": b.intl.formatToPlainString(b.t["2LwBlJ"], { filterNumber: t + 1 }),
                children: (0, n.jsx)(c.XHJ, {
                    size: "md",
                    color: "currentColor",
                    className: S.trashIcon,
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
            handleDateChange: a,
            handleAddDateFilter: i,
            handleRemoveDateFilter: s,
        } = e,
        o = l.length < 4;
    return (0, n.jsxs)("div", {
        className: S.filterSection,
        children: [
            (0, n.jsx)(c.Text, {
                variant: "text-md/medium",
                color: "text-primary",
                className: S.label,
                children: b.intl.string(b.t.oesnws),
            }),
            (0, n.jsx)(c.Text, {
                variant: "text-sm/medium",
                color: "text-secondary",
                className: S.sublabel,
                children: b.intl.string(b.t.A2DY6O),
            }),
            l.map((e, l) =>
                (0, n.jsx)(
                    y,
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
                (0, n.jsx)(c.zxk, {
                    variant: "secondary",
                    fullWidth: !0,
                    text: b.intl.string(b.t.iP9YpK),
                    icon: c.BRu,
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
        closeOnSelect: u,
        onFocus: d,
        onSearchChange: h,
        renderOptionPrefix: x,
        renderOptionSuffix: g,
    } = e;
    return (0, n.jsxs)("div", {
        className: S.filterSection,
        children: [
            (0, n.jsx)(c.Text, {
                variant: "text-md/medium",
                color: "text-primary",
                className: S.label,
                children: t,
            }),
            (0, n.jsx)(c.Text, {
                variant: "text-sm/medium",
                color: "text-secondary",
                className: S.sublabel,
                children: l,
            }),
            (0, n.jsx)(c.VcW, {
                multi: !0,
                options: s,
                placeholder: r,
                value: a,
                onChange: i,
                onFocus: d,
                onSearchChange: h,
                closeOnSelect: u,
                filter: o,
                renderOptionPrefix: x,
                renderOptionSuffix: g,
            }),
        ],
    });
}
function E(e) {
    let { transitionState: t, onClose: l, searchContext: a } = e,
        i = (0, d.Dt)(),
        y = r.useMemo(() => (0, p.s5)(a), [a]),
        E = (0, s.e7)([h.Z, x.Z], () => {
            let e = h.Z.getChannel(x.Z.getChannelId());
            return null != e ? (0, p.nl)(e) : "general";
        }),
        T = (0, C.I)(a),
        { prefilledSearchFilters: v, eligibleFilterTokens: j } = (0, F.p4)(T, a),
        R = j.has(m.dCx.FILTER_FROM),
        O = j.has(m.dCx.FILTER_MENTIONS),
        N = j.has(m.dCx.FILTER_IN),
        k = r.useMemo(() => (0, p.nI)(T), [T]),
        {
            options: L,
            query: M,
            setQuery: P,
            setQueryString: D,
            handleClearFilter: Q,
            getApplyQueryString: q,
            handleFocusFilter: A,
        } = (0, F.HJ)(a, m.dCx.FILTER_FROM, v[m.dCx.FILTER_FROM]),
        {
            options: w,
            query: H,
            setQuery: B,
            setQueryString: Z,
            handleClearFilter: z,
            getApplyQueryString: J,
            handleFocusFilter: W,
        } = (0, F.HJ)(a, m.dCx.FILTER_MENTIONS, v[m.dCx.FILTER_MENTIONS]),
        K = (0, F.Zc)(y),
        {
            options: Y,
            query: U,
            setQuery: V,
            handleClearFilter: X,
            getApplyQueryString: G,
            handleFocusFilter: $,
        } = (0, F.Z2)(a, v[m.dCx.FILTER_HAS]),
        {
            options: ee,
            query: et,
            setQuery: el,
            setQueryString: en,
            handleClearFilter: er,
            getApplyQueryString: ea,
            handleFocusFilter: ei,
        } = (0, F.ur)(a, v[m.dCx.FILTER_IN]),
        es = r.useCallback((e) => {
            if (null == e) return;
            let t = h.Z.getChannel(e.value);
            if (null == t) return;
            let l = (0, u.KS)(t);
            return null != l
                ? (0, n.jsx)(l, {
                      size: "xs",
                      color: "currentColor",
                  })
                : null;
        }, []),
        {
            options: eo,
            dates: ec,
            validDates: eu,
            handleDateQueryChange: ed,
            handleDateChange: eh,
            handleAddDateFilter: ex,
            handleRemoveDateFilter: eg,
            handleClearDateFilter: eF,
            getDateQueryString: ep,
        } = (0, F.fI)(v.dateFilters),
        eC = r.useMemo(() => {
            let e = 0;
            return (
                R && M.length > 0 && (e += M.length),
                O && H.length > 0 && (e += H.length),
                N && et.length > 0 && (e += et.length),
                U.length > 0 && (e += U.length),
                eu.length > 0 && (e += eu.length),
                e
            );
        }, [R, M, O, H, N, et, U, eu]),
        em = r.useMemo(
            () =>
                !(
                    (!R || (0, F.Ek)(M, v[m.dCx.FILTER_FROM])) &&
                    (!O || (0, F.Ek)(H, v[m.dCx.FILTER_MENTIONS])) &&
                    (!N || (0, F.Ek)(et, v[m.dCx.FILTER_IN])) &&
                    (0, F.Ek)(U, v[m.dCx.FILTER_HAS]) &&
                    (0, F.LE)(eu, v.dateFilters)
                ),
            [R, M, v, O, H, N, et, U, eu],
        ),
        eb = r.useCallback(() => {
            let e = G(m.dCx.FILTER_HAS),
                t = ep(),
                n = [];
            if (R) {
                let e = q(m.dCx.FILTER_FROM);
                null != e && n.push(e);
            }
            if (O) {
                let e = J(m.dCx.FILTER_MENTIONS);
                null != e && n.push(e);
            }
            if (N) {
                let e = ea(m.dCx.FILTER_IN);
                null != e && n.push(e);
            }
            null != e && n.push(e), null != t && n.push(t);
            let r = [...n, k].join(" ");
            g.S.dispatch(m.CkL.SET_SEARCH_QUERY, {
                query: r,
                anchor: 0,
                focus: 0,
                performSearch: !0,
                replace: !0,
            }),
                l();
        }, [R, N, O, ep, q, G, ea, J, k, l]),
        eS = r.useCallback(() => {
            R && Q(), O && z(), N && er(), X(), eF();
        }, [R, O, X, N, eF, Q, z, er]);
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
                onClick: eb,
                disabled: !em,
            },
        ],
        actionBarInput: (0, n.jsx)(c.P3F, {
            onClick: eS,
            className: S.clearFilters,
            children: (0, n.jsxs)(c.Text, {
                variant: "text-sm/medium",
                color: eC > 0 ? "text-brand" : "text-tertiary",
                children: [b.intl.string(b.t.YfwFu7), " ", eC > 0 && "(".concat(eC, ")")],
            }),
        }),
        children: [
            R &&
                (0, n.jsx)(
                    I,
                    f(
                        {
                            label: b.intl.string(b.t.Qz6eOT),
                            sublabel: b.intl.string(b.t["2JyXnJ"]),
                            textPlaceholder: b.intl.string(b.t.V4WMj4),
                            value: M,
                            onChange: P,
                            onFocus: A,
                            onSearchChange: D,
                            options: L,
                        },
                        K,
                    ),
                ),
            N &&
                (0, n.jsx)(I, {
                    label: b.intl.string(b.t["kLrM/v"]),
                    sublabel: b.intl.string(b.t.x8cC09),
                    textPlaceholder: b.intl.formatToPlainString(b.t.K4l509, { channelName: E }),
                    value: et,
                    onChange: el,
                    onFocus: ei,
                    onSearchChange: en,
                    options: ee,
                    filter: !1,
                    closeOnSelect: !1,
                    renderOptionPrefix: es,
                }),
            O &&
                (0, n.jsx)(
                    I,
                    f(
                        {
                            label: b.intl.string(b.t.HEBnRU),
                            sublabel: b.intl.string(b.t.PdfTqa),
                            textPlaceholder: b.intl.string(b.t.zka3aG),
                            value: H,
                            onChange: B,
                            onFocus: W,
                            onSearchChange: Z,
                            options: w,
                        },
                        K,
                    ),
                ),
            (0, n.jsx)(I, {
                label: b.intl.string(b.t["892qg4"]),
                sublabel: b.intl.string(b.t["Oa//IC"]),
                textPlaceholder: b.intl.string(b.t.tROvHB),
                value: U,
                onChange: V,
                onFocus: $,
                options: Y,
                filter: !0,
                closeOnSelect: !1,
            }),
            (0, n.jsx)(_, {
                options: eo,
                dates: ec,
                handleDateQueryChange: ed,
                handleDateChange: eh,
                handleAddDateFilter: ex,
                handleRemoveDateFilter: eg,
            }),
        ],
    });
}
