i.d(l, { default: () => p });
var t = i(627968);
i(64700);
var d = i(311907),
    r = i(421380),
    a = i(397927),
    e = i(587895),
    s = i(235986),
    c = i(755439),
    o = i(975571),
    u = i(985018),
    h = i(137397);
let p = (n) => {
    let { onClose: l, transitionState: i } = n,
        { error: p, applicationName: v } = (0, d.cf)([c.A, e.A], () => {
            let n = c.A.getLastError(),
                l = null;
            if (null != n && null != n.applicationId) {
                let i = e.A.getApplication(n.applicationId);
                null != i && (l = i.name);
            }
            return {
                error: n,
                applicationName: l,
            };
        });
    return (0, t.jsxs)(a.EOs, {
        transitionState: i,
        size: a.rIJ.SMALL,
        "aria-label": u.intl.string(u.t["6kHRYP"]),
        parentComponent: "DispatchErrorModal",
        children: [
            (0, t.jsxs)(a.rQ0, {
                justify: s.A.Justify.BETWEEN,
                separator: !1,
                children: [
                    (0, t.jsx)(s.A.Child, {
                        grow: 1,
                        children: (0, t.jsx)(a.Heading, {
                            variant: "heading-lg/semibold",
                            children: u.intl.string(u.t["6kHRYP"]),
                        }),
                    }),
                    (0, t.jsx)(s.A.Child, {
                        grow: 0,
                        children: (0, t.jsx)(a.s_y, { onClick: l }),
                    }),
                ],
            }),
            (0, t.jsx)(a.$mQ, {
                children: (0, t.jsxs)("div", {
                    className: h.rf,
                    children: [
                        (0, t.jsx)("div", {
                            children: u.intl.format(u.t["NnE/6P"], { link: "https://dis.gd/dispatch-error" }),
                        }),
                        (0, t.jsx)("div", {
                            className: h.dr,
                            children: u.intl.string(u.t["o+efY9"]),
                        }),
                        (0, t.jsx)("div", {
                            className: h.Vk,
                            children: u.intl.string(u.t.BiSnZ9),
                        }),
                        (0, t.jsx)("div", {
                            className: h.nf,
                            children: (0, t.jsxs)("div", {
                                children: [
                                    null != v ? "Game: ".concat(v, "\n") : null,
                                    (null == p ? void 0 : p.applicationId) != null
                                        ? "Game ID: ".concat(p.applicationId, "\n")
                                        : null,
                                    (null == p ? void 0 : p.branchId) != null &&
                                    (null == p ? void 0 : p.applicationId) !== (null == p ? void 0 : p.branchId)
                                        ? "Branch ID: ".concat(null == p ? void 0 : p.branchId, "\n")
                                        : null,
                                    (null == p ? void 0 : p.code) != null
                                        ? "Error Code: ".concat(null == p ? void 0 : p.code, "\n")
                                        : null,
                                    (null == p ? void 0 : p.uuid) != null
                                        ? "Unique Case ID: ".concat(null == p ? void 0 : p.uuid)
                                        : null,
                                ],
                            }),
                        }),
                    ],
                }),
            }),
            (0, t.jsxs)(a.jlY, {
                children: [
                    (0, t.jsx)(a.Button, {
                        variant: "primary",
                        text: u.intl.string(u.t.VdyWmB),
                        onClick: () => {
                            window.open(o.A.getSubmitRequestURL());
                        },
                    }),
                    (0, t.jsx)(r.$n, {
                        look: r.$n.Looks.LINK,
                        onClick: l,
                        color: h.bE,
                        children: u.intl.string(u.t.cpT0Cq),
                    }),
                ],
            }),
        ],
    });
};
