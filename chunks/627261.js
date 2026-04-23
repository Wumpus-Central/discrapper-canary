n.d(i, { default: () => x });
var r = n(627968);
n(64700);
var t = n(17928),
    e = n(862482),
    s = n(935462),
    a = n(534514),
    d = n(821609),
    c = n(587895),
    o = n(235986),
    p = n(755439),
    u = n(975571),
    h = n(985018),
    j = n(663630);
let x = (l) => {
    let { onClose: i, transitionState: n } = l,
        { error: x, applicationName: b } = (0, t.cf)([p.A, c.A], () => {
            let l = p.A.getLastError(),
                i = null;
            if (null != l && null != l.applicationId) {
                let n = c.A.getApplication(l.applicationId);
                null != n && (i = n.name);
            }
            return { error: l, applicationName: i };
        });
    return (0, r.jsxs)(s.EO, {
        transitionState: n,
        size: s.rI.SMALL,
        "aria-label": h.intl.string(h.t["6kHRYP"]),
        parentComponent: "DispatchErrorModal",
        children: [
            (0, r.jsxs)(s.rQ, {
                justify: o.A.Justify.BETWEEN,
                separator: !1,
                children: [
                    (0, r.jsx)(o.A.Child, {
                        grow: 1,
                        children: (0, r.jsx)(a.D, {
                            variant: "heading-lg/semibold",
                            children: h.intl.string(h.t["6kHRYP"]),
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
                            children: h.intl.format(h.t["NnE/6P"], { link: "https://dis.gd/dispatch-error" }),
                        }),
                        (0, r.jsx)("div", { className: j.dr, children: h.intl.string(h.t["o+efY9"]) }),
                        (0, r.jsx)("div", { className: j.Vk, children: h.intl.string(h.t.BiSnZ9) }),
                        (0, r.jsx)("div", {
                            className: j.nf,
                            children: (0, r.jsxs)("div", {
                                children: [
                                    null != b
                                        ? `Game: ${b}
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
                        text: h.intl.string(h.t.VdyWmB),
                        onClick: () => {
                            window.open(u.A.getSubmitRequestURL());
                        },
                    }),
                    (0, r.jsx)(e.$n, {
                        look: e.$n.Looks.LINK,
                        onClick: i,
                        color: j.bE,
                        children: h.intl.string(h.t.cpT0Cq),
                    }),
                ],
            }),
        ],
    });
};
