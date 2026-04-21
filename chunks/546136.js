l.d(n, { Ay: () => y, _T: () => N, oA: () => I });
var t = l(627968);
l(64700);
var i = l(503698),
    s = l.n(i),
    a = l(397927),
    r = l(927578),
    o = l(487233),
    d = l(230635),
    c = l(285127),
    u = l(336289),
    m = l(473219),
    A = l(542454),
    p = l(338003),
    x = l(642737),
    g = l(23722),
    f = l(985018),
    h = l(809467);
let v = "profile-modal-editing-panel",
    j = "profile-modal-editing-panel-heading";
function I(e) {
    let { onClick: n, className: l, innerRef: i } = e;
    return (0, t.jsx)(a.DUT, {
        innerRef: i,
        "aria-label": f.intl.string(f.t.N8XQDE),
        "aria-expanded": !1,
        "aria-controls": v,
        className: s()(h.eg, l),
        onClick: n,
        focusProps: { offset: { right: 6 } },
        children: (0, t.jsx)(a.NDp, { size: "sm", color: a.LU0.colors.ICON_STRONG }),
    });
}
function N(e) {
    let { onClick: n, className: l, buttonRef: i } = e;
    return (0, t.jsx)("div", {
        className: l,
        children: (0, t.jsx)(a.K0, {
            buttonRef: i,
            "aria-label": f.intl.string(f.t.N8XQDE),
            "aria-expanded": !1,
            "aria-controls": v,
            icon: a.NDp,
            onClick: n,
            variant: "secondary",
            size: "sm",
        }),
    });
}
function C(e) {
    let { onClick: n, innerRef: l } = e;
    return (0, t.jsxs)(a.DUT, {
        innerRef: l,
        className: h.cS,
        "aria-label": f.intl.string(f.t.X6NklS),
        onClick: n,
        "aria-controls": v,
        "aria-expanded": !0,
        children: [
            (0, t.jsx)(a._BQ, { size: "md", color: "currentColor" }),
            (0, t.jsx)(a._BQ, { size: "md", color: "currentColor" }),
        ],
    });
}
function y(e) {
    let {
            user: n,
            selectedGuildId: l,
            onSelectGuildId: i,
            isLoading: I = !1,
            onClose: N,
            className: y,
            collapseButtonRef: b,
        } = e,
        E = (0, g.A)(i),
        T = null != l,
        P = r.Ay.canUsePremiumProfileCustomization(n);
    return (0, t.jsxs)("aside", {
        id: v,
        "aria-labelledby": j,
        className: s()(h.nd, y),
        "aria-busy": I,
        children: [
            (0, t.jsx)(a.AC4, { children: (0, t.jsx)(a.H, { id: j, children: f.intl.string(f.t["L+ch00"]) }) }),
            (0, t.jsxs)("div", {
                className: h.wx,
                children: [
                    (0, t.jsx)(C, { innerRef: b, onClick: N }),
                    (0, t.jsx)(x.A, { selectedGuildId: l ?? null, onChange: E, loading: I }),
                ],
            }),
            (0, t.jsx)(a.Fmo, {
                children: (0, t.jsxs)(a.HOs, {
                    className: h.XG,
                    fade: !0,
                    children: [
                        (0, t.jsxs)("div", {
                            className: h.Os,
                            children: [
                                (0, t.jsx)(a.Heading, {
                                    variant: "text-sm/medium",
                                    className: h.AM,
                                    children: f.intl.string(f.t.x5CoXR),
                                }),
                                (0, t.jsx)(m.A, { user: n, guildId: l, disabled: I || (T && !P) }),
                            ],
                        }),
                        (0, t.jsxs)("div", {
                            className: h.Os,
                            children: [
                                (0, t.jsx)(a.Heading, {
                                    variant: "text-sm/medium",
                                    className: h.AM,
                                    children: f.intl.string(f.t["50Nwpc"]),
                                }),
                                (0, t.jsx)(o.A, { user: n, guildId: l, disabled: I || (T && !P) }),
                                (0, t.jsx)(d.A, { user: n, guildId: l, disabled: I || (T && !P) }),
                            ],
                        }),
                        P &&
                            (0, t.jsxs)("div", {
                                className: h.Os,
                                children: [
                                    (0, t.jsx)(a.Heading, {
                                        variant: "text-sm/medium",
                                        className: h.AM,
                                        children: f.intl.string(f.t.Zenogr),
                                    }),
                                    (0, t.jsx)(A.A, { user: n, guildId: l, disabled: I }),
                                    (0, t.jsx)(u.A, { userId: n.id, guildId: l, disabled: I }),
                                ],
                            }),
                        !P &&
                            (0, t.jsxs)("div", {
                                className: h.Os,
                                children: [
                                    (0, t.jsx)(a.Heading, {
                                        variant: "text-sm/medium",
                                        className: h.AM,
                                        children: f.intl.string(f.t["/X3fkf"]),
                                    }),
                                    (0, t.jsx)(c.A, { user: n, disabled: I || T }),
                                ],
                            }),
                    ],
                }),
            }),
            !P && (0, t.jsx)(p.O, {}),
        ],
    });
}
