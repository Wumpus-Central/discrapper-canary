n.d(i, { default: () => h });
var r = n(627968);
n(64700);
var t = n(311907),
    e = n(421380),
    s = n(397927),
    a = n(587895),
    d = n(235986),
    c = n(755439),
    o = n(975571),
    u = n(985018),
    p = n(137397);
let h = (l) => {
    let { onClose: i, transitionState: n } = l,
        { error: h, applicationName: j } = (0, t.cf)([c.A, a.A], () => {
            let l = c.A.getLastError(),
                i = null;
            if (null != l && null != l.applicationId) {
                let n = a.A.getApplication(l.applicationId);
                null != n && (i = n.name);
            }
            return { error: l, applicationName: i };
        });
    return (0, r.jsxs)(s.EOs, {
        transitionState: n,
        size: s.rIJ.SMALL,
        "aria-label": u.intl.string(u.t["6kHRYP"]),
        parentComponent: "DispatchErrorModal",
        children: [
            (0, r.jsxs)(s.rQ0, {
                justify: d.A.Justify.BETWEEN,
                separator: !1,
                children: [
                    (0, r.jsx)(d.A.Child, {
                        grow: 1,
                        children: (0, r.jsx)(s.Heading, {
                            variant: "heading-lg/semibold",
                            children: u.intl.string(u.t["6kHRYP"]),
                        }),
                    }),
                    (0, r.jsx)(d.A.Child, { grow: 0, children: (0, r.jsx)(s.s_y, { onClick: i }) }),
                ],
            }),
            (0, r.jsx)(s.$mQ, {
                children: (0, r.jsxs)("div", {
                    className: p.rf,
                    children: [
                        (0, r.jsx)("div", {
                            children: u.intl.format(u.t["NnE/6P"], { link: "https://dis.gd/dispatch-error" }),
                        }),
                        (0, r.jsx)("div", { className: p.dr, children: u.intl.string(u.t["o+efY9"]) }),
                        (0, r.jsx)("div", { className: p.Vk, children: u.intl.string(u.t.BiSnZ9) }),
                        (0, r.jsx)("div", {
                            className: p.nf,
                            children: (0, r.jsxs)("div", {
                                children: [
                                    null != j
                                        ? `Game: ${j}
`
                                        : null,
                                    h?.applicationId != null
                                        ? `Game ID: ${h.applicationId}
`
                                        : null,
                                    h?.branchId != null && h?.applicationId !== h?.branchId
                                        ? `Branch ID: ${h?.branchId}
`
                                        : null,
                                    h?.code != null
                                        ? `Error Code: ${h?.code}
`
                                        : null,
                                    h?.uuid != null ? `Unique Case ID: ${h?.uuid}` : null,
                                ],
                            }),
                        }),
                    ],
                }),
            }),
            (0, r.jsxs)(s.jlY, {
                children: [
                    (0, r.jsx)(s.Button, {
                        variant: "primary",
                        text: u.intl.string(u.t.VdyWmB),
                        onClick: () => {
                            window.open(o.A.getSubmitRequestURL());
                        },
                    }),
                    (0, r.jsx)(e.$n, {
                        look: e.$n.Looks.LINK,
                        onClick: i,
                        color: p.bE,
                        children: u.intl.string(u.t.cpT0Cq),
                    }),
                ],
            }),
        ],
    });
};
