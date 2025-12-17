n.d(t, { Z: () => f });
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(28664),
    o = n(481060),
    s = n(693546),
    c = n(937111),
    u = n(850493),
    d = n(388032),
    p = n(871612);
let f = (e) => {
    let {
            headerId: t,
            reapplyText: n,
            onReapply: f,
            confirmText: g,
            onWithdrawApplication: h,
            rejectionReason: m = null,
            guild: b = null,
        } = e,
        _ = (0, l.e7)([c.Z], () => {
            var e;
            return c.Z.getCooldown(null != (e = null == b ? void 0 : b.id) ? e : "0");
        }),
        { canReapply: E, isLoading: O } = (0, u.o)(null == b ? void 0 : b.id);
    i.useEffect(() => {
        null == _ && null != b && s.Z.fetchJoinRequestCooldown(b.id);
    }, [_, b]);
    let v = (null != _ ? _ : 0) > 0,
        y = v && null != _ ? Math.ceil((1000 * _ - Date.now()) / 86400000) : 0;
    return (0, r.jsxs)("div", {
        className: p.confirmation,
        children: [
            (0, r.jsx)("div", {
                className: p.iconWrapper,
                children: (0, r.jsx)(o.P$X, {
                    size: "md",
                    color: o.TVs.colors.INTERACTIVE_TEXT_ACTIVE,
                }),
            }),
            (0, r.jsxs)("div", {
                className: p.statusTextContainer,
                children: [
                    (0, r.jsx)(o.Heading, {
                        id: t,
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children:
                            (null == b ? void 0 : b.name) != null
                                ? d.intl.formatToPlainString(d.t["P+/gzA"], { guildName: b.name })
                                : d.intl.string(d.t.gBPcuP),
                    }),
                    null != m && "" !== m
                        ? (0, r.jsxs)(o.Text, {
                              variant: "text-md/medium",
                              color: "text-default",
                              children: [
                                  (0, r.jsx)("span", {
                                      className: p.rejectionReasonLabel,
                                      children: d.intl.string(d.t.cf1psW),
                                  }),
                                  (0, r.jsx)("span", { children: m }),
                              ],
                          })
                        : null,
                ],
            }),
            (0, r.jsxs)("div", {
                className: p.confirmationButtonRow,
                children: [
                    E || O
                        ? (0, r.jsx)(a.u, {
                              asContainer: !0,
                              text: v ? d.intl.formatToPlainString(d.t.A0f0P7, { days: y }) : null,
                              "aria-label": v ? d.intl.formatToPlainString(d.t.A0f0P7, { days: y }) : void 0,
                              children: (0, r.jsx)(o.Button, {
                                  onClick: f,
                                  variant: "secondary",
                                  size: "md",
                                  loading: null == _ || O,
                                  disabled: v || O,
                                  text: n,
                                  fullWidth: !0,
                              }),
                          })
                        : null,
                    (0, r.jsx)(o.Button, {
                        onClick: () => h(E || O),
                        variant: "critical-primary",
                        size: "md",
                        text: g,
                        fullWidth: !0,
                    }),
                ],
            }),
        ],
    });
};
