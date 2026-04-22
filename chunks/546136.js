l.d(n, { Ay: () => S, _T: () => T, oA: () => _ });
var t = l(627968);
l(64700);
var i = l(503698),
    r = l.n(i),
    s = l(939249),
    a = l(200219),
    o = l(827734),
    d = l(408278),
    c = l(320448),
    u = l(140735),
    g = l(707554),
    A = l(573613),
    m = l(534514),
    f = l(927578),
    p = l(487233),
    x = l(230635),
    h = l(285127),
    v = l(336289),
    j = l(473219),
    I = l(542454),
    b = l(338003),
    C = l(642737),
    N = l(23722),
    y = l(985018),
    E = l(809467);
let P = "profile-modal-editing-panel",
    R = "profile-modal-editing-panel-heading";
function _(e) {
    let { onClick: n, className: l, innerRef: i } = e;
    return (0, t.jsx)(s.D, {
        innerRef: i,
        "aria-label": y.intl.string(y.t.N8XQDE),
        "aria-expanded": !1,
        "aria-controls": P,
        className: r()(E.eg, l),
        onClick: n,
        focusProps: { offset: { right: 6 } },
        children: (0, t.jsx)(a.N, { size: "sm", color: o.A.colors.ICON_STRONG }),
    });
}
function T(e) {
    let { onClick: n, className: l, buttonRef: i } = e;
    return (0, t.jsx)("div", {
        className: l,
        children: (0, t.jsx)(d.K, {
            buttonRef: i,
            "aria-label": y.intl.string(y.t.N8XQDE),
            "aria-expanded": !1,
            "aria-controls": P,
            icon: a.N,
            onClick: n,
            variant: "secondary",
            size: "sm",
        }),
    });
}
function O(e) {
    let { onClick: n, innerRef: l } = e;
    return (0, t.jsxs)(s.D, {
        innerRef: l,
        className: E.cS,
        "aria-label": y.intl.string(y.t.X6NklS),
        onClick: n,
        "aria-controls": P,
        "aria-expanded": !0,
        children: [
            (0, t.jsx)(c._, { size: "md", color: "currentColor" }),
            (0, t.jsx)(c._, { size: "md", color: "currentColor" }),
        ],
    });
}
function S(e) {
    let {
            user: n,
            selectedGuildId: l,
            onSelectGuildId: i,
            isLoading: s = !1,
            onClose: a,
            className: o,
            collapseButtonRef: d,
        } = e,
        c = (0, N.A)(i),
        _ = null != l,
        T = f.Ay.canUsePremiumProfileCustomization(n);
    return (0, t.jsxs)("aside", {
        id: P,
        "aria-labelledby": R,
        className: r()(E.nd, o),
        "aria-busy": s,
        children: [
            (0, t.jsx)(u.A, { children: (0, t.jsx)(g.H, { id: R, children: y.intl.string(y.t["L+ch00"]) }) }),
            (0, t.jsxs)("div", {
                className: E.wx,
                children: [
                    (0, t.jsx)(O, { innerRef: d, onClick: a }),
                    (0, t.jsx)(C.A, { selectedGuildId: l ?? null, onChange: c, loading: s }),
                ],
            }),
            (0, t.jsx)(g.F, {
                children: (0, t.jsxs)(A.Ip, {
                    className: E.XG,
                    fade: !0,
                    children: [
                        (0, t.jsxs)("div", {
                            className: E.Os,
                            children: [
                                (0, t.jsx)(m.D, {
                                    variant: "text-sm/medium",
                                    className: E.AM,
                                    children: y.intl.string(y.t.x5CoXR),
                                }),
                                (0, t.jsx)(j.A, { user: n, guildId: l, disabled: s || (_ && !T) }),
                            ],
                        }),
                        (0, t.jsxs)("div", {
                            className: E.Os,
                            children: [
                                (0, t.jsx)(m.D, {
                                    variant: "text-sm/medium",
                                    className: E.AM,
                                    children: y.intl.string(y.t["50Nwpc"]),
                                }),
                                (0, t.jsx)(p.A, { user: n, guildId: l, disabled: s || (_ && !T) }),
                                (0, t.jsx)(x.A, { user: n, guildId: l, disabled: s || (_ && !T) }),
                            ],
                        }),
                        T &&
                            (0, t.jsxs)("div", {
                                className: E.Os,
                                children: [
                                    (0, t.jsx)(m.D, {
                                        variant: "text-sm/medium",
                                        className: E.AM,
                                        children: y.intl.string(y.t.Zenogr),
                                    }),
                                    (0, t.jsx)(I.A, { user: n, guildId: l, disabled: s }),
                                    (0, t.jsx)(v.A, { userId: n.id, guildId: l, disabled: s }),
                                ],
                            }),
                        !T &&
                            (0, t.jsxs)("div", {
                                className: E.Os,
                                children: [
                                    (0, t.jsx)(m.D, {
                                        variant: "text-sm/medium",
                                        className: E.AM,
                                        children: y.intl.string(y.t["/X3fkf"]),
                                    }),
                                    (0, t.jsx)(h.A, { user: n, disabled: s || _ }),
                                ],
                            }),
                    ],
                }),
            }),
            !T && (0, t.jsx)(b.O, {}),
        ],
    });
}
