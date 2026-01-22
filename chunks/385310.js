n.d(t, {
    A: () => f,
});
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(990078),
    s = n(397927),
    o = n(624458),
    c = n(212455),
    u = n(332118),
    d = n(985018),
    p = n(400783);
let f = (e) => {
    let {
            headerId: t,
            reapplyText: n,
            onReapply: f,
            confirmText: h,
            onWithdrawApplication: A,
            rejectionReason: g = null,
            guild: m = null,
        } = e,
        b = (0, l.bG)([c.A], () => {
            var e;
            return c.A.getCooldown(null != (e = null == m ? void 0 : m.id) ? e : "0");
        }),
        { canReapply: _, isLoading: E } = (0, u.f)(null == m ? void 0 : m.id);
    i.useEffect(() => {
        null == b && null != m && o.A.fetchJoinRequestCooldown(m.id);
    }, [b, m]);
    let O = (null != b ? b : 0) > 0,
        y = O && null != b ? Math.ceil((1e3 * b - Date.now()) / 864e5) : 0;
    return (0, r.jsxs)("div", {
        className: p.EL,
        children: [
            (0, r.jsx)("div", {
                className: p.P0,
                children: (0, r.jsx)(s.aoi, {
                    size: "md",
                    color: s.LU0.colors.INTERACTIVE_TEXT_ACTIVE,
                }),
            }),
            (0, r.jsxs)("div", {
                className: p.bc,
                children: [
                    (0, r.jsx)(s.Heading, {
                        id: t,
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children:
                            (null == m ? void 0 : m.name) != null
                                ? d.intl.formatToPlainString(d.t["P+/gzA"], {
                                      guildName: m.name,
                                  })
                                : d.intl.string(d.t.gBPcuP),
                    }),
                    null != g && "" !== g
                        ? (0, r.jsxs)(s.Text, {
                              variant: "text-md/medium",
                              color: "text-default",
                              children: [
                                  (0, r.jsx)("span", {
                                      className: p.Wj,
                                      children: d.intl.string(d.t.cf1psW),
                                  }),
                                  (0, r.jsx)("span", {
                                      children: g,
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
            (0, r.jsxs)("div", {
                className: p.Ow,
                children: [
                    _ || E
                        ? (0, r.jsx)(a.m, {
                              asContainer: !0,
                              text: O
                                  ? d.intl.formatToPlainString(d.t.A0f0P7, {
                                        days: y,
                                    })
                                  : null,
                              "aria-label": O
                                  ? d.intl.formatToPlainString(d.t.A0f0P7, {
                                        days: y,
                                    })
                                  : void 0,
                              children: (0, r.jsx)(s.Button, {
                                  onClick: f,
                                  variant: "secondary",
                                  size: "md",
                                  loading: null == b || E,
                                  disabled: O || E,
                                  text: n,
                                  fullWidth: !0,
                              }),
                          })
                        : null,
                    (0, r.jsx)(s.Button, {
                        onClick: () => A(_ || E),
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
