n.d(t, { Z: () => p });
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(28664),
    o = n(481060),
    s = n(693546),
    c = n(937111),
    u = n(388032),
    d = n(394121);
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
        b = (0, l.e7)([c.Z], () => {
            var e;
            return c.Z.getCooldown(null != (e = null == m ? void 0 : m.id) ? e : "0");
        });
    i.useEffect(() => {
        null == b && null != m && s.Z.fetchJoinRequestCooldown(m.id);
    }, [b, m]);
    let _ = (null != b ? b : 0) > 0,
        O = _ && null != b ? Math.ceil((1000 * b - Date.now()) / 86400000) : 0;
    return (0, r.jsxs)("div", {
        className: d.confirmation,
        children: [
            (0, r.jsx)("div", {
                className: d.iconWrapper,
                children: (0, r.jsx)(o.P$X, {
                    size: "md",
                    color: o.TVs.colors.INTERACTIVE_ACTIVE,
                }),
            }),
            (0, r.jsxs)("div", {
                className: d.statusTextContainer,
                children: [
                    (0, r.jsx)(o.X6q, {
                        id: t,
                        variant: "heading-lg/semibold",
                        color: "header-primary",
                        children:
                            (null == m ? void 0 : m.name) != null
                                ? u.intl.formatToPlainString(u.t["P+/gzM"], { guildName: m.name })
                                : u.intl.string(u.t.gBPcuL),
                    }),
                    null != g && "" !== g
                        ? (0, r.jsxs)(o.Text, {
                              variant: "text-md/medium",
                              color: "header-secondary",
                              children: [
                                  (0, r.jsx)("span", {
                                      className: d.rejectionReasonLabel,
                                      children: u.intl.string(u.t.cf1psb),
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
                        text: _ ? u.intl.formatToPlainString(u.t.A0f0Pz, { days: O }) : null,
                        "aria-label": _ ? u.intl.formatToPlainString(u.t.A0f0Pz, { days: O }) : void 0,
                        children: (0, r.jsx)(o.zxk, {
                            onClick: p,
                            variant: "secondary",
                            size: "md",
                            loading: null == b,
                            disabled: _,
                            text: n,
                            fullWidth: !0,
                        }),
                    }),
                    (0, r.jsx)(o.zxk, {
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
