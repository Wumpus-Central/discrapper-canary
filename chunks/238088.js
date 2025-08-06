l.d(t, { default: () => O }), l(539854);
var n = l(255367),
    r = l(73800),
    a = l(913527),
    i = l.n(a),
    u = l(442837),
    s = l(82659),
    o = l(481060),
    c = l(471445),
    d = l(313201),
    h = l(592125),
    f = l(944486),
    g = l(585483),
    b = l(833103),
    p = l(607802),
    m = l(981631),
    x = l(388032),
    y = l(325507);
function C(e) {
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
    let { index: t, query: l, handleQuerySelect: r, handleDateSelect: a, options: u, handleRemoveDateFilter: s } = e,
        c = i()(),
        d = i()("2015-05-15");
    return (0, n.jsxs)("div", {
        className: y.dateFilter,
        children: [
            (0, n.jsx)(o.q4e, {
                options: u,
                value: l.query,
                onChange: (e) => {
                    r({
                        query: e,
                        index: t,
                    });
                },
                className: y.dateFilterSelect,
            }),
            (0, n.jsx)(o.Wrb, {
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
            (0, n.jsx)(o.P3F, {
                onClick: () => {
                    s(t);
                },
                className: y.removeDateFilterButton,
                "aria-label": x.intl.formatToPlainString(x.t["2LwBlJ"], { filterNumber: t + 1 }),
                children: (0, n.jsx)(o.XHJ, {
                    size: "md",
                    color: "currentColor",
                    className: y.trashIcon,
                    "aria-hidden": !0,
                }),
            }),
        ],
    });
}
function v(e) {
    let {
            options: t,
            dates: l,
            handleDateQueryChange: r,
            handleDateChange: a,
            handleAddDateFilter: i,
            handleRemoveDateFilter: u,
        } = e,
        s = l.length < 4;
    return (0, n.jsxs)("div", {
        className: y.filterSection,
        children: [
            (0, n.jsx)(o.Text, {
                variant: "text-md/medium",
                color: "text-primary",
                className: y.label,
                children: x.intl.string(x.t.oesnws),
            }),
            (0, n.jsx)(o.Text, {
                variant: "text-sm/medium",
                color: "text-secondary",
                className: y.sublabel,
                children: x.intl.string(x.t.A2DY6O),
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
                        handleRemoveDateFilter: u,
                    },
                    e.id,
                ),
            ),
            s &&
                (0, n.jsx)(o.zxk, {
                    variant: "secondary",
                    fullWidth: !0,
                    text: x.intl.string(x.t.iP9YpK),
                    icon: o.BRu,
                    onClick: i,
                }),
        ],
    });
}
function j(e) {
    let {
        label: t,
        sublabel: l,
        textPlaceholder: r,
        value: a,
        onChange: i,
        options: u,
        filter: s,
        closeOnSelect: c,
        containerClassName: d,
        onSearchChange: h,
        renderOptionPrefix: f,
        renderOptionSuffix: g,
    } = e;
    return (0, n.jsxs)("div", {
        className: d,
        children: [
            (0, n.jsx)(o.Text, {
                variant: "text-md/medium",
                color: "text-primary",
                className: y.label,
                children: t,
            }),
            (0, n.jsx)(o.Text, {
                variant: "text-sm/medium",
                color: "text-secondary",
                className: y.sublabel,
                children: l,
            }),
            (0, n.jsx)(o.VcW, {
                multi: !0,
                options: u,
                placeholder: r,
                value: a,
                onChange: i,
                onSearchChange: h,
                closeOnSelect: c,
                filter: s,
                renderOptionPrefix: f,
                renderOptionSuffix: g,
            }),
        ],
    });
}
function O(e) {
    let { transitionState: t, onClose: l, searchContext: a } = e,
        i = (0, d.Dt)(),
        S = r.useMemo(() => (0, p.s5)(a), [a]),
        O = (0, u.e7)([h.Z, f.Z], () => {
            let e = h.Z.getChannel(f.Z.getChannelId());
            return null != e ? (0, p.nl)(e) : "general";
        }),
        {
            options: k,
            query: F,
            setQuery: E,
            setQueryString: P,
            handleClearFilter: _,
            getApplyQueryString: R,
        } = (0, b.HJ)(a, m.dCx.FILTER_FROM),
        {
            options: T,
            query: N,
            setQuery: Z,
            setQueryString: I,
            handleClearFilter: D,
            getApplyQueryString: w,
        } = (0, b.HJ)(a, m.dCx.FILTER_MENTIONS),
        L = (0, b.Zc)(S),
        M = (0, p.R6)(a),
        { options: Q, query: q, setQuery: A, handleClearFilter: B, getApplyQueryString: H } = (0, b.Z2)(a),
        {
            options: U,
            query: z,
            setQuery: J,
            setQueryString: K,
            handleClearFilter: W,
            getApplyQueryString: Y,
        } = (0, b.ur)(a),
        V = r.useCallback((e) => {
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
            options: X,
            dates: G,
            validDates: $,
            handleDateQueryChange: ee,
            handleDateChange: et,
            handleAddDateFilter: el,
            handleRemoveDateFilter: en,
            handleClearDateFilter: er,
            getDateQueryString: ea,
        } = (0, b.fI)(),
        ei = r.useMemo(() => F.length + N.length + q.length + z.length + $.length, [F, N, q, z, $]),
        eu = r.useCallback(() => {
            if (0 === ei) return void l();
            let e = R(m.dCx.FILTER_FROM),
                t = w(m.dCx.FILTER_MENTIONS),
                n = H(m.dCx.FILTER_HAS),
                r = Y(m.dCx.FILTER_IN),
                a = ea(),
                i = [];
            null != e && i.push(e),
                null != t && i.push(t),
                null != n && i.push(n),
                null != r && i.push(r),
                null != a && i.push(a);
            let u = i.join(" ");
            g.S.dispatch(m.CkL.SET_SEARCH_QUERY, {
                query: u,
                anchor: 0,
                focus: 0,
                performSearch: !0,
            }),
                l();
        }, [ea, R, H, Y, w, ei, l]),
        es = r.useCallback(() => {
            _(),
                D(),
                B(),
                W(),
                er(),
                g.S.dispatch(m.CkL.SET_SEARCH_QUERY, {
                    query: "",
                    anchor: 0,
                    focus: 0,
                    performSearch: !1,
                });
        }, [er, _, B, W, D]);
    return (0, n.jsxs)(s.Modal, {
        transitionState: t,
        onClose: l,
        "aria-labelledby": i,
        title: x.intl.string(x.t.F8a0W1),
        actions: [
            {
                variant: "secondary",
                text: x.intl.string(x.t["ETE/oK"]),
                onClick: l,
            },
            {
                variant: "primary",
                text: x.intl.string(x.t.qDzapq),
                onClick: eu,
            },
        ],
        actionBarInput: (0, n.jsx)(o.P3F, {
            onClick: es,
            className: y.clearFilters,
            children: (0, n.jsxs)(o.Text, {
                variant: "text-sm/medium",
                color: ei > 0 ? "text-brand" : "text-tertiary",
                children: [x.intl.string(x.t.YfwFu7), " ", ei > 0 && "(".concat(ei, ")")],
            }),
        }),
        children: [
            (0, n.jsx)(
                j,
                C(
                    {
                        label: x.intl.string(x.t.Qz6eOT),
                        sublabel: x.intl.string(x.t["2JyXnJ"]),
                        textPlaceholder: x.intl.string(x.t.V4WMj4),
                        value: F,
                        onChange: E,
                        onSearchChange: P,
                        options: k,
                    },
                    L,
                ),
            ),
            M &&
                (0, n.jsx)(j, {
                    label: x.intl.string(x.t["kLrM/v"]),
                    sublabel: x.intl.string(x.t.x8cC09),
                    textPlaceholder: x.intl.formatToPlainString(x.t.K4l509, { channelName: O }),
                    value: z,
                    onChange: J,
                    onSearchChange: K,
                    options: U,
                    containerClassName: y.filterSection,
                    filter: !1,
                    closeOnSelect: !1,
                    renderOptionPrefix: V,
                }),
            (0, n.jsx)(
                j,
                C(
                    {
                        label: x.intl.string(x.t.HEBnRU),
                        sublabel: x.intl.string(x.t.PdfTqa),
                        textPlaceholder: x.intl.string(x.t.zka3aG),
                        value: N,
                        onChange: Z,
                        onSearchChange: I,
                        options: T,
                        containerClassName: y.filterSection,
                    },
                    L,
                ),
            ),
            (0, n.jsx)(j, {
                label: x.intl.string(x.t["892qg4"]),
                sublabel: x.intl.string(x.t["Oa//IC"]),
                textPlaceholder: x.intl.string(x.t.tROvHB),
                value: q,
                onChange: A,
                options: Q,
                containerClassName: y.filterSection,
                filter: !0,
                closeOnSelect: !1,
            }),
            (0, n.jsx)(v, {
                options: X,
                dates: G,
                handleDateQueryChange: ee,
                handleDateChange: et,
                handleAddDateFilter: el,
                handleRemoveDateFilter: en,
            }),
        ],
    });
}
