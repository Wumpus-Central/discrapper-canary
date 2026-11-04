var r = l(477900);
l(582128);
var t = l(855986),
    s = l(935462),
    a = l(862482),
    e = l(534514),
    d = l(821609),
    c = l(587895),
    o = l(235986),
    u = l(755439),
    h = l(975571),
    p = l(792996),
    j = l(846647);
l.d(
    i,
    {},
    {
        default: function (n) {
            let { onClose: i, transitionState: l } = n,
                { error: x, applicationName: g } = (0, t.cf)([u.A, c.A], () => {
                    let n = u.A.getLastError(),
                        i = null;
                    if (null != n && null != n.applicationId) {
                        let l = c.A.getApplication(n.applicationId);
                        null != l && (i = l.name);
                    }
                    return { error: n, applicationName: i };
                });
            return (0, r.jsxs)(s.EO, {
                transitionState: l,
                size: s.rI.SMALL,
                "aria-label": p.intl.string(p.t["6kHRYP"]),
                parentComponent: "DispatchErrorModal",
                children: [
                    (0, r.jsxs)(s.rQ, {
                        justify: o.A.Justify.BETWEEN,
                        separator: !1,
                        children: [
                            (0, r.jsx)(o.A.Child, {
                                grow: 1,
                                children: (0, r.jsx)(e.D, {
                                    variant: "heading-lg/semibold",
                                    children: p.intl.string(p.t["6kHRYP"]),
                                }),
                            }),
                            (0, r.jsx)(o.A.Child, { grow: 0, children: (0, r.jsx)(s.s_, { onClick: i }) }),
                        ],
                    }),
                    (0, r.jsx)(s.$m, {
                        children: (0, r.jsxs)("div", {
                            className: j.rf,
                            children: [
                                (0, r.jsx)("div", {
                                    children: p.intl.format(p.t["NnE/6P"], { link: "https://dis.gd/dispatch-error" }),
                                }),
                                (0, r.jsx)("div", { className: j.dr, children: p.intl.string(p.t["o+efY9"]) }),
                                (0, r.jsx)("div", { className: j.Vk, children: p.intl.string(p.t.BiSnZ9) }),
                                (0, r.jsx)("div", {
                                    className: j.nf,
                                    children: (0, r.jsxs)("div", {
                                        children: [
                                            null != g
                                                ? `Game: ${g}
`
                                                : null,
                                            x?.applicationId != null
                                                ? `Game ID: ${x.applicationId}
`
                                                : null,
                                            x?.branchId != null && x?.applicationId !== x?.branchId
                                                ? `Branch ID: ${x?.branchId}
`
                                                : null,
                                            x?.code != null
                                                ? `Error Code: ${x?.code}
`
                                                : null,
                                            x?.uuid != null ? `Unique Case ID: ${x?.uuid}` : null,
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    }),
                    (0, r.jsxs)(s.jl, {
                        children: [
                            (0, r.jsx)(d.$, {
                                variant: "primary",
                                text: p.intl.string(p.t.VdyWmB),
                                onClick: function () {
                                    window.open(h.A.getSubmitRequestURL());
                                },
                            }),
                            (0, r.jsx)(a.$n, {
                                look: a.$n.Looks.LINK,
                                onClick: i,
                                color: j.bE,
                                children: p.intl.string(p.t.cpT0Cq),
                            }),
                        ],
                    }),
                ],
            });
        },
    },
);
