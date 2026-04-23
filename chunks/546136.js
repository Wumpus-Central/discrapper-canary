t.d(n, { Ay: () => S, _T: () => T, oA: () => O });
var l = t(627968);
t(64700);
var i = t(503698),
    r = t.n(i),
    a = t(939249),
    s = t(200219),
    o = t(827734),
    d = t(408278),
    u = t(320448),
    c = t(140735),
    g = t(707554),
    A = t(573613),
    m = t(534514),
    f = t(927578),
    p = t(487233),
    x = t(230635),
    h = t(285127),
    v = t(336289),
    j = t(473219),
    I = t(542454),
    b = t(338003),
    C = t(642737),
    N = t(23722),
    y = t(985018),
    E = t(809467);
let P = "profile-modal-editing-panel",
    R = "profile-modal-editing-panel-heading";
function O(e) {
    let { onClick: n, className: t, innerRef: i } = e;
    return (0, l.jsx)(a.D, {
        innerRef: i,
        "aria-label": y.intl.string(y.t.N8XQDE),
        "aria-expanded": !1,
        "aria-controls": P,
        className: r()(E.eg, t),
        onClick: n,
        focusProps: { offset: { right: 6 } },
        children: (0, l.jsx)(s.N, { size: "sm", color: o.A.colors.ICON_STRONG }),
    });
}
function T(e) {
    let { onClick: n, className: t, buttonRef: i } = e;
    return (0, l.jsx)("div", {
        className: t,
        children: (0, l.jsx)(d.K, {
            buttonRef: i,
            "aria-label": y.intl.string(y.t.N8XQDE),
            "aria-expanded": !1,
            "aria-controls": P,
            icon: s.N,
            onClick: n,
            variant: "secondary",
            size: "sm",
        }),
    });
}
function _(e) {
    let { onClick: n, innerRef: t } = e;
    return (0, l.jsxs)(a.D, {
        innerRef: t,
        className: E.cS,
        "aria-label": y.intl.string(y.t.X6NklS),
        onClick: n,
        "aria-controls": P,
        "aria-expanded": !0,
        children: [
            (0, l.jsx)(u._, { size: "md", color: "currentColor" }),
            (0, l.jsx)(u._, { size: "md", color: "currentColor" }),
        ],
    });
}
function S(e) {
    let {
            user: n,
            selectedGuildId: t,
            onSelectGuildId: i,
            isLoading: a = !1,
            onClose: s,
            className: o,
            collapseButtonRef: d,
        } = e,
        u = (0, N.A)(i),
        O = null != t,
        T = f.Ay.canUsePremiumProfileCustomization(n);
    return (0, l.jsxs)("aside", {
        id: P,
        "aria-labelledby": R,
        className: r()(E.nd, o),
        "aria-busy": a,
        children: [
            (0, l.jsx)(c.A, { children: (0, l.jsx)(g.H, { id: R, children: y.intl.string(y.t["L+ch00"]) }) }),
            (0, l.jsxs)("div", {
                className: E.wx,
                children: [
                    (0, l.jsx)(_, { innerRef: d, onClick: s }),
                    (0, l.jsx)(C.A, { selectedGuildId: t ?? null, onChange: u, loading: a }),
                ],
            }),
            (0, l.jsx)(g.F, {
                children: (0, l.jsxs)(A.Ip, {
                    className: E.XG,
                    fade: !0,
                    children: [
                        (0, l.jsxs)("div", {
                            className: E.Os,
                            children: [
                                (0, l.jsx)(m.D, {
                                    variant: "text-sm/medium",
                                    className: E.AM,
                                    children: y.intl.string(y.t.x5CoXR),
                                }),
                                (0, l.jsx)(j.A, { user: n, guildId: t, disabled: a || (O && !T) }),
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: E.Os,
                            children: [
                                (0, l.jsx)(m.D, {
                                    variant: "text-sm/medium",
                                    className: E.AM,
                                    children: y.intl.string(y.t["50Nwpc"]),
                                }),
                                (0, l.jsx)(p.A, { user: n, guildId: t, disabled: a || (O && !T) }),
                                (0, l.jsx)(x.A, { user: n, guildId: t, disabled: a || (O && !T) }),
                            ],
                        }),
                        T &&
                            (0, l.jsxs)("div", {
                                className: E.Os,
                                children: [
                                    (0, l.jsx)(m.D, {
                                        variant: "text-sm/medium",
                                        className: E.AM,
                                        children: y.intl.string(y.t.Zenogr),
                                    }),
                                    (0, l.jsx)(I.A, { user: n, guildId: t, disabled: a }),
                                    (0, l.jsx)(v.A, { userId: n.id, guildId: t, disabled: a }),
                                ],
                            }),
                        !T &&
                            (0, l.jsxs)("div", {
                                className: E.Os,
                                children: [
                                    (0, l.jsx)(m.D, {
                                        variant: "text-sm/medium",
                                        className: E.AM,
                                        children: y.intl.string(y.t["/X3fkf"]),
                                    }),
                                    (0, l.jsx)(h.A, { user: n, disabled: a || O }),
                                ],
                            }),
                    ],
                }),
            }),
            !T && (0, l.jsx)(b.O, {}),
        ],
    });
}
