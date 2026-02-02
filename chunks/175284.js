n.d(t, {
    A: () => h,
}),
    n(228524),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(397927),
    o = n(686956),
    c = n(975571),
    d = n(50249),
    u = n(305053),
    g = n(512031),
    m = n(652215),
    p = n(985018),
    f = n(107550);

function h(e) {
    let {
            guild: t,
            everyoneRole: n,
            filteredRoles: l,
            setEditRoleId: s,
            query: o,
            setQuery: c,
            setHeaderHeight: d,
        } = e,
        m = i.useRef(null);
    i.useEffect(() => {
        var e, t;
        d(null != (e = null == (t = m.current) ? void 0 : t.offsetHeight) ? e : g.p4);
    }, [d]);
    let h = i.useCallback(() => {
        s(n.id);
    }, [s, n.id]);
    return (0, r.jsxs)("div", {
        ref: m,
        children: [
            (0, r.jsx)(a.Heading, {
                variant: "heading-lg/semibold",
                children: p.intl.string(p.t["LPJmL/"]),
            }),
            (0, r.jsx)(a.Text, {
                className: f.h_,
                color: "text-default",
                variant: "text-sm/normal",
                children: p.intl.string(p.t["1ydhVp"]),
            }),
            (0, r.jsx)(u.A, {
                guild: t,
            }),
            (0, r.jsx)(b, {
                guild: t,
                everyoneRole: n,
                filteredRoles: l,
                query: o,
                setQuery: c,
                onEveryoneRoleClick: h,
            }),
        ],
    });
}

function b(e) {
    let { guild: t, everyoneRole: n, filteredRoles: i, query: l, setQuery: o, onEveryoneRoleClick: u } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(d.A, {
                role: n,
                onClick: u,
            }),
            (0, r.jsx)(x, {
                guild: t,
                query: l,
                setQuery: o,
            }),
            (0, r.jsx)(a.Text, {
                className: f.BK,
                color: "text-default",
                variant: "text-sm/normal",
                children: p.intl.format(p.t.xkC3Yf, {
                    articleURL: c.A.getArticleURL(m.MVz.PERMISSIONS_TUTORIAL),
                }),
            }),
            (0, r.jsx)("div", {
                className: f.kA,
                children: (0, r.jsxs)("div", {
                    className: f.qd,
                    children: [
                        (0, r.jsx)("div", {
                            className: f._M,
                        }),
                        (0, r.jsx)(a.Text, {
                            className: s()(f.jA, f.N5),
                            variant: "text-sm/normal",
                            children: p.intl.format(p.t["38N3Vz"], {
                                numRoles: String(i.length),
                            }),
                        }),
                        (0, r.jsx)(a.Text, {
                            className: s()(f.jA, f.Hp),
                            variant: "text-sm/normal",
                            children: p.intl.string(p.t["9Oq93m"]),
                        }),
                        (0, r.jsx)("div", {
                            className: f.DE,
                        }),
                    ],
                }),
            }),
        ],
    });
}

function x(e) {
    let { guild: t, query: n, setQuery: l } = e,
        [s, c] = i.useState(!1),
        d = i.useCallback(
            (e) => {
                l(e);
            },
            [l],
        ),
        u = i.useCallback(() => {
            l("");
        }, [l]),
        g = async () => {
            c(!0), await o.A.createRole(t.id), c(!1);
        };
    return (0, r.jsx)("div", {
        className: f.__invalid_rolesList,
        children: (0, r.jsxs)("div", {
            className: f.MT,
            children: [
                (0, r.jsx)(a.IWV, {
                    query: n,
                    onChange: d,
                    onClear: u,
                    placeholder: p.intl.string(p.t.Sojqsr),
                    "aria-label": p.intl.string(p.t.Sojqsr),
                }),
                (0, r.jsx)(a.Button, {
                    size: "sm",
                    onClick: g,
                    loading: s,
                    text: p.intl.string(p.t.JZZjQK),
                }),
            ],
        }),
    });
}
