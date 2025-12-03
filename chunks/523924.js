n.d(t, { Z: () => f });
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(28664),
    s = n(481060),
    o = n(693546),
    c = n(937111),
    u = n(850493),
    d = n(388032),
    p = n(394121);
let f = (e) => {
    let {
            headerId: t,
            reapplyText: n,
            onReapply: f,
            confirmText: h,
            onWithdrawApplication: g,
            rejectionReason: m = null,
            guild: _ = null,
        } = e,
        b = (0, l.e7)([c.Z], () => {
            var e;
            return c.Z.getCooldown(null != (e = null == _ ? void 0 : _.id) ? e : "0");
        }),
        { canReapply: E, isLoading: O } = (0, u.o)(null == _ ? void 0 : _.id);
    i.useEffect(() => {
        null == b && null != _ && o.Z.fetchJoinRequestCooldown(_.id);
    }, [b, _]);
    let v = (null != b ? b : 0) > 0,
        y = v && null != b ? Math.ceil((1000 * b - Date.now()) / 86400000) : 0;
    return (0, r.jsxs)("div", {
        className: p.confirmation,
        children: [
            (0, r.jsx)("div", {
                className: p.iconWrapper,
                children: (0, r.jsx)(s.P$X, {
                    size: "md",
                    color: s.TVs.colors.INTERACTIVE_ACTIVE,
                }),
            }),
            (0, r.jsxs)("div", {
                className: p.statusTextContainer,
                children: [
                    (0, r.jsx)(s.Heading, {
                        id: t,
                        variant: "heading-lg/semibold",
                        color: "header-primary",
                        children:
                            (null == _ ? void 0 : _.name) != null
                                ? d.intl.formatToPlainString(d.t["P+/gzA"], { guildName: _.name })
                                : d.intl.string(d.t.gBPcuP),
                    }),
                    null != m && "" !== m
                        ? (0, r.jsxs)(s.Text, {
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
                              children: (0, r.jsx)(s.Button, {
                                  onClick: f,
                                  variant: "secondary",
                                  size: "md",
                                  loading: null == b || O,
                                  disabled: v || O,
                                  text: n,
                                  fullWidth: !0,
                              }),
                          })
                        : null,
                    (0, r.jsx)(s.Button, {
                        onClick: () => g(E || O),
                        variant: "critical-primary",
                        size: "md",
                        text: h,
                        fullWidth: !0,
                    }),
                ],
            }),
        ],
    });
};
