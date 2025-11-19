n.d(t, { Z: () => p });
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(28664),
    s = n(481060),
    o = n(693546),
    c = n(937111),
    u = n(388032),
    d = n(379413);
let p = (e) => {
    let {
            headerId: t,
            reapplyText: n,
            onReapply: p,
            confirmText: f,
            onWithdrawApplication: h,
            rejectionReason: g = null,
            guild: m = null,
        } = e,
        _ = (0, l.e7)([c.Z], () => {
            var e;
            return c.Z.getCooldown(null != (e = null == m ? void 0 : m.id) ? e : "0");
        });
    i.useEffect(() => {
        null == _ && null != m && o.Z.fetchJoinRequestCooldown(m.id);
    }, [_, m]);
    let b = (null != _ ? _ : 0) > 0,
        E = b && null != _ ? Math.ceil((1000 * _ - Date.now()) / 86400000) : 0;
    return (0, r.jsxs)("div", {
        className: d.confirmation,
        children: [
            (0, r.jsx)("div", {
                className: d.iconWrapper,
                children: (0, r.jsx)(s.P$X, {
                    size: "md",
                    color: s.TVs.colors.INTERACTIVE_ACTIVE,
                }),
            }),
            (0, r.jsxs)("div", {
                className: d.statusTextContainer,
                children: [
                    (0, r.jsx)(s.Heading, {
                        id: t,
                        variant: "heading-lg/semibold",
                        color: "header-primary",
                        children:
                            (null == m ? void 0 : m.name) != null
                                ? u.intl.formatToPlainString(u.t["P+/gzA"], { guildName: m.name })
                                : u.intl.string(u.t.gBPcuP),
                    }),
                    null != g && "" !== g
                        ? (0, r.jsxs)(s.Text, {
                              variant: "text-md/medium",
                              color: "header-secondary",
                              children: [
                                  (0, r.jsx)("span", {
                                      className: d.rejectionReasonLabel,
                                      children: u.intl.string(u.t.cf1psW),
                                  }),
                                  (0, r.jsx)("span", { children: g }),
                              ],
                          })
                        : null,
                ],
            }),
            (0, r.jsxs)("div", {
                className: d.confirmationButtonRow,
                children: [
                    (0, r.jsx)(a.u, {
                        asContainer: !0,
                        text: b ? u.intl.formatToPlainString(u.t.A0f0P7, { days: E }) : null,
                        "aria-label": b ? u.intl.formatToPlainString(u.t.A0f0P7, { days: E }) : void 0,
                        children: (0, r.jsx)(s.Button, {
                            onClick: p,
                            variant: "secondary",
                            size: "md",
                            loading: null == _,
                            disabled: b,
                            text: n,
                            fullWidth: !0,
                        }),
                    }),
                    (0, r.jsx)(s.Button, {
                        onClick: h,
                        variant: "critical-primary",
                        size: "md",
                        text: f,
                        fullWidth: !0,
                    }),
                ],
            }),
        ],
    });
};
