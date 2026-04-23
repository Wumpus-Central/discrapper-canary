i.d(n, { default: () => C });
var e = i(627968),
    s = i(64700),
    a = i(636537),
    r = i(109802),
    l = i(452027),
    d = i(935462),
    o = i(534514),
    c = i(430690),
    x = i(834730),
    m = i(292666),
    h = i(825484),
    j = i(821609),
    g = i(512950),
    p = i(235986),
    u = i(957565),
    _ = i(652215),
    N = i(985018),
    v = i(577796);
function b(t) {
    let { name: n, value: i } = t,
        [a, d] = s.useState(r.q.DEFAULT);
    return (0, e.jsx)("div", {
        className: v.lj,
        children: (0, e.jsx)(l.D, {
            label: n,
            children: (0, e.jsx)(r.e, {
                value: i,
                mode: a,
                supportsCopy: u.p5,
                onCopy: () => {
                    (0, u.C)(
                        i,
                        () => d(r.q.SUCCESS),
                        () => d(r.q.ERROR),
                    );
                },
            }),
        }),
    });
}
function C(t) {
    let { onClose: n, transitionState: i } = t,
        [r, l] = s.useState(""),
        [u, C] = s.useState(""),
        [O, k] = s.useState(null),
        [y, f] = s.useState(!1),
        [q, D] = s.useState("DOMAIN"),
        R = () => {
            f(!0),
                k(null),
                a.Bo.post({ url: _.Rsh.CONNECTION(_.fg2.DOMAIN, r), body: {}, rejectWithError: !1 })
                    .then(() => {
                        n();
                    })
                    .catch((t) => {
                        t.body?.proof && "DOMAIN" === q
                            ? (C(t.body.proof), D("PROOF_DNS"))
                            : k(t.body?.errors?.domain?._errors?.[0]?.message || t.body?.message || t.message);
                    })
                    .finally(() => {
                        f(!1);
                    });
        };
    return (0, e.jsxs)(d.EO, {
        "data-migration-pending": !0,
        transitionState: i,
        className: v.__invalid_modal,
        parentComponent: "DomainVerifyModal",
        children: [
            (0, e.jsxs)(d.rQ, {
                "data-migration-pending": !0,
                direction: p.A.Direction.VERTICAL,
                className: v.wx,
                separator: !1,
                children: [
                    (0, e.jsx)(o.D, { variant: "heading-xl/semibold", children: N.intl.string(N.t["7lo8+e"]) }),
                    (0, e.jsx)(d.s_, { "data-migration-pending": !0, className: v.b, onClick: n }),
                ],
            }),
            (0, e.jsxs)(c.t, {
                activeSlide: q,
                width: 440,
                children: [
                    (0, e.jsx)(c.q, {
                        id: "DOMAIN",
                        children: (0, e.jsxs)("form", {
                            onSubmit: (t) => {
                                t.preventDefault(), R();
                            },
                            children: [
                                (0, e.jsxs)(d.$m, {
                                    "data-migration-pending": !0,
                                    className: v.Qs,
                                    children: [
                                        (0, e.jsx)(x.E, {
                                            variant: "text-md/normal",
                                            color: "text-default",
                                            className: v.h_,
                                            children: N.intl.string(N.t.NxPUqY),
                                        }),
                                        (0, e.jsx)(m.k, {
                                            label: N.intl.string(N.t["4jIAa+"]),
                                            error: O,
                                            onChange: l,
                                            placeholder: "example.com",
                                            maxLength: 253,
                                            value: r,
                                            disabled: y,
                                            autoFocus: !0,
                                        }),
                                    ],
                                }),
                                (0, e.jsx)(d.jl, {
                                    "data-migration-pending": !0,
                                    className: v.qr,
                                    children: (0, e.jsxs)(h.e, {
                                        direction: "horizontal-reverse",
                                        children: [
                                            (0, e.jsx)(j.$, {
                                                variant: "primary",
                                                text: N.intl.string(N.t.PDTjLN),
                                                type: "submit",
                                                loading: y,
                                                disabled: "" === r,
                                            }),
                                            (0, e.jsx)(j.$, {
                                                variant: "secondary",
                                                text: N.intl.string(N.t["ETE/oC"]),
                                                onClick: n,
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    }),
                    (0, e.jsxs)(c.q, {
                        id: "PROOF_DNS",
                        children: [
                            (0, e.jsxs)(d.$m, {
                                "data-migration-pending": !0,
                                className: v.Qs,
                                children: [
                                    (0, e.jsxs)("ol", {
                                        className: v.p_,
                                        children: [
                                            (0, e.jsx)("li", {
                                                children: (0, e.jsx)(x.E, {
                                                    tag: "span",
                                                    variant: "text-md/normal",
                                                    children: N.intl.string(N.t["yOxxA+"]),
                                                }),
                                            }),
                                            (0, e.jsxs)("li", {
                                                children: [
                                                    (0, e.jsx)(x.E, {
                                                        tag: "span",
                                                        variant: "text-md/normal",
                                                        children: N.intl.string(N.t.cSURbq),
                                                    }),
                                                    (0, e.jsxs)("div", {
                                                        className: v.st,
                                                        children: [
                                                            (0, e.jsx)(b, {
                                                                name: N.intl.string(N.t.GL3q7k),
                                                                value: `_discord.${r}`,
                                                            }),
                                                            (0, e.jsx)(b, {
                                                                name: N.intl.string(N.t.Ccmixu),
                                                                value: "TXT",
                                                            }),
                                                            (0, e.jsx)(b, {
                                                                name: N.intl.string(N.t.PVLriT),
                                                                value: u,
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, e.jsx)(g.p, {
                                        messageType: g.Y.INFO,
                                        className: v.Qq,
                                        children: N.intl.string(N.t.CUBxDB),
                                    }),
                                    null != O &&
                                        (0, e.jsx)(x.E, {
                                            variant: "text-sm/normal",
                                            color: "text-feedback-critical",
                                            className: v.Qq,
                                            children: O,
                                        }),
                                ],
                            }),
                            (0, e.jsxs)(d.jl, {
                                "data-migration-pending": !0,
                                className: v.qr,
                                direction: p.A.Direction.HORIZONTAL,
                                children: [
                                    (0, e.jsx)(j.$, {
                                        variant: "secondary",
                                        text: N.intl.string(N.t["13/7kX"]),
                                        onClick: () => {
                                            D("DOMAIN"), k(null);
                                        },
                                    }),
                                    (0, e.jsxs)("div", {
                                        className: v.Um,
                                        children: [
                                            (0, e.jsx)("div", {
                                                "data-button-hoisted-classname-wrapper": !0,
                                                className: v.__invalid_switchButton,
                                                children: (0, e.jsx)(j.$, {
                                                    variant: "secondary",
                                                    text: N.intl.string(N.t.CkfdNx),
                                                    onClick: () => {
                                                        D("PROOF_HTTP"), k(null);
                                                    },
                                                }),
                                            }),
                                            (0, e.jsx)(j.$, {
                                                variant: "primary",
                                                text: N.intl.string(N.t["13ofGu"]),
                                                loading: y,
                                                onClick: R,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, e.jsxs)(c.q, {
                        id: "PROOF_HTTP",
                        children: [
                            (0, e.jsxs)(d.$m, {
                                "data-migration-pending": !0,
                                className: v.Qs,
                                children: [
                                    (0, e.jsx)(x.E, {
                                        tag: "span",
                                        variant: "text-md/normal",
                                        children: N.intl.string(N.t.p4ql7y),
                                    }),
                                    (0, e.jsxs)("div", {
                                        className: v.eX,
                                        children: [
                                            (0, e.jsx)(b, {
                                                name: N.intl.string(N.t.GL3q7k),
                                                value: `https://${r}/.well-known/discord`,
                                            }),
                                            (0, e.jsx)(b, { name: N.intl.string(N.t.PVLriT), value: u }),
                                        ],
                                    }),
                                    null != O &&
                                        (0, e.jsx)(x.E, {
                                            variant: "text-sm/normal",
                                            color: "text-feedback-critical",
                                            className: v.Qq,
                                            children: O,
                                        }),
                                ],
                            }),
                            (0, e.jsxs)(d.jl, {
                                "data-migration-pending": !0,
                                className: v.qr,
                                direction: p.A.Direction.HORIZONTAL,
                                children: [
                                    (0, e.jsx)(j.$, {
                                        variant: "secondary",
                                        text: N.intl.string(N.t["13/7kX"]),
                                        onClick: () => {
                                            D("DOMAIN"), k(null);
                                        },
                                    }),
                                    (0, e.jsxs)("div", {
                                        className: v.Um,
                                        children: [
                                            (0, e.jsx)("div", {
                                                "data-button-hoisted-classname-wrapper": !0,
                                                className: v.__invalid_switchButton,
                                                children: (0, e.jsx)(j.$, {
                                                    variant: "secondary",
                                                    text: N.intl.string(N.t.RhJMVQ),
                                                    onClick: () => {
                                                        D("PROOF_DNS"), k(null);
                                                    },
                                                }),
                                            }),
                                            (0, e.jsx)(j.$, {
                                                variant: "primary",
                                                text: N.intl.string(N.t["13ofGu"]),
                                                loading: y,
                                                onClick: R,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
