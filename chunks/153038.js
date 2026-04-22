n.d(t, { A: () => C });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    r = n(331322),
    a = n(292666),
    o = n(691885),
    d = n(260598),
    c = n(452027),
    u = n(915089),
    m = n(405810),
    g = n(342298),
    h = n(580630),
    x = n(636194),
    _ = n(11351),
    p = n(306444),
    A = n(922975),
    E = n(996507),
    f = n(963175),
    j = n(652215),
    N = n(985018),
    I = n(23354);
function C(e) {
    let { priceTiers: t } = e,
        { editStateId: n } = (0, p.O)(),
        C = (0, s.bG)([x.A], () => x.A.getSubscriptionListing(n)?.image_asset),
        [b, v] = A.tx(n),
        [S, T] = A.bL(n),
        [y, R] = A.I8(n),
        [L, D] = A.lK(n, 1024),
        { imageCTA: O, imageAriaLabel: G, setFilename: M } = (0, E.A)(C),
        k = l.useMemo(() => t?.map((e) => ({ id: e.toString(), value: e, label: (0, h.$g)(e, j.Yri.USD) })) ?? [], [t]);
    function U(e, t) {
        null != t && M(t.name), D(e);
    }
    let w = (0, _.gN)(),
        P = (0, u.GV)(),
        B = (0, u.GV)(),
        F = (0, u.GV)();
    return (0, i.jsx)(f.A, {
        title: N.intl.string(N.t["iHU43+"]),
        intiallyExpanded: !0,
        children: (0, i.jsxs)(r.B, {
            gap: 24,
            children: [
                (0, i.jsxs)("div", {
                    className: I.lE,
                    children: [
                        (0, i.jsx)("div", {
                            className: I.GI,
                            children: (0, i.jsx)(a.k, {
                                label: N.intl.string(N.t["grbGJ+"]),
                                placeholder: N.intl.string(N.t["So2/xP"]),
                                value: b,
                                onChange: v,
                                "aria-labelledby": P,
                                disabled: w,
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: I.GI,
                            children: (0, i.jsx)(o.l, {
                                selectionMode: "single",
                                label: N.intl.string(N.t.Ibl4BR),
                                options: k,
                                disabled: w || null == t,
                                placeholder: N.intl.string(N.t["88XZDs"]),
                                value: S,
                                onSelectionChange: T,
                                maxOptionsVisible: 5,
                                "aria-labelledby": B,
                            }),
                        }),
                    ],
                }),
                (0, i.jsx)(d.f, {
                    label: N.intl.string(N.t["1w2WcX"]),
                    placeholder: N.intl.string(N.t.p7Jr4K),
                    value: y,
                    autosize: !0,
                    onChange: R,
                    "aria-labelledby": F,
                    disabled: w,
                }),
                (0, i.jsxs)("div", {
                    className: I.r2,
                    children: [
                        (0, i.jsx)(c.D, {
                            label: N.intl.string(N.t.RUBM2q),
                            description: N.intl.string(N.t["0iUofN"]),
                            children: (0, i.jsx)(m.A, {
                                onChange: U,
                                "aria-label": G,
                                disabled: w,
                                text: O,
                                size: "md",
                                variant: "secondary",
                            }),
                        }),
                        (0, i.jsx)(g.A, {
                            image: L,
                            hint: O,
                            showIcon: !0,
                            showRemoveButton: !1,
                            hideSize: !0,
                            className: I.KN,
                            imageClassName: I.NW,
                            onChange: U,
                            "aria-label": G,
                            disabled: w,
                        }),
                    ],
                }),
            ],
        }),
    });
}
