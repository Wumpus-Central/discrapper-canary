l.d(i, { default: () => x });
var t = l(627968);
l(64700);
var r = l(17928),
    s = l(862482),
    a = l(935462),
    e = l(297264),
    d = l(821609),
    c = l(587895),
    o = l(235986),
    u = l(755439),
    h = l(975571),
    p = l(375708),
    j = l(663630);
let x = function (n) {
    let { onClose: i, transitionState: l } = n,
        { error: x, applicationName: g } = (0, r.cf)([u.A, c.A], () => {
            let n = u.A.getLastError(),
                i = null;
            if (null != n && null != n.applicationId) {
                let l = c.A.getApplication(n.applicationId);
                null != l && (i = l.name);
            }
            return { error: n, applicationName: i };
        });
    return (0, t.jsxs)(a.EO, {
        transitionState: l,
        size: a.rI.SMALL,
        "aria-label": p.intl.string(p.t["6kHRYP"]),
        parentComponent: "DispatchErrorModal",
        children: [
            (0, t.jsxs)(a.rQ, {
                justify: o.A.Justify.BETWEEN,
                separator: !1,
                children: [
                    (0, t.jsx)(o.A.Child, {
                        grow: 1,
                        children: (0, t.jsx)(e.D, {
                            variant: "heading-lg/semibold",
                            children: p.intl.string(p.t["6kHRYP"]),
                        }),
                    }),
                    (0, t.jsx)(o.A.Child, { grow: 0, children: (0, t.jsx)(a.s_, { onClick: i }) }),
                ],
            }),
            (0, t.jsx)(a.$m, {
                children: (0, t.jsxs)("div", {
                    className: j.rf,
                    children: [
                        (0, t.jsx)("div", {
                            children: p.intl.format(p.t["NnE/6P"], { link: "https://dis.gd/dispatch-error" }),
                        }),
                        (0, t.jsx)("div", { className: j.dr, children: p.intl.string(p.t["o+efY9"]) }),
                        (0, t.jsx)("div", { className: j.Vk, children: p.intl.string(p.t.BiSnZ9) }),
                        (0, t.jsx)("div", {
                            className: j.nf,
                            children: (0, t.jsxs)("div", {
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
            (0, t.jsxs)(a.jl, {
                children: [
                    (0, t.jsx)(d.$, {
                        variant: "primary",
                        text: p.intl.string(p.t.VdyWmB),
                        onClick: function () {
                            window.open(h.A.getSubmitRequestURL());
                        },
                    }),
                    (0, t.jsx)(s.$n, {
                        look: s.$n.Looks.LINK,
                        onClick: i,
                        color: j.bE,
                        children: p.intl.string(p.t.cpT0Cq),
                    }),
                ],
            }),
        ],
    });
};
