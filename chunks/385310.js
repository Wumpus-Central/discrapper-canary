n.d(t, { A: () => m });
var i = n(627968),
    r = n(64700),
    a = n(311907),
    l = n(990078),
    s = n(401432),
    o = n(827734),
    d = n(534514),
    u = n(834730),
    c = n(821609),
    A = n(624458),
    h = n(212455),
    _ = n(332118),
    E = n(985018),
    p = n(146983);
let m = (e) => {
    let {
            headerId: t,
            reapplyText: n,
            onReapply: m,
            confirmText: g,
            onWithdrawApplication: I,
            rejectionReason: C = null,
            guild: f = null,
        } = e,
        T = (0, a.bG)([h.A], () => h.A.getCooldown(f?.id ?? "0")),
        { canReapply: S, isLoading: N } = (0, _.f)(f?.id);
    r.useEffect(() => {
        null == T && null != f && A.A.fetchJoinRequestCooldown(f.id);
    }, [T, f]);
    let O = (T ?? 0) > 0,
        L = O && null != T ? Math.ceil((1e3 * T - Date.now()) / 864e5) : 0;
    return (0, i.jsxs)("div", {
        className: p.EL,
        children: [
            (0, i.jsx)("div", {
                className: p.P0,
                children: (0, i.jsx)(s.a, { size: "md", color: o.A.colors.INTERACTIVE_TEXT_ACTIVE }),
            }),
            (0, i.jsxs)("div", {
                className: p.bc,
                children: [
                    (0, i.jsx)(d.D, {
                        id: t,
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children:
                            f?.name != null
                                ? E.intl.formatToPlainString(E.t["P+/gzA"], { guildName: f.name })
                                : E.intl.string(E.t.gBPcuP),
                    }),
                    null != C && "" !== C
                        ? (0, i.jsxs)(u.E, {
                              variant: "text-md/medium",
                              color: "text-default",
                              children: [
                                  (0, i.jsx)("span", { className: p.Wj, children: E.intl.string(E.t.cf1psW) }),
                                  (0, i.jsx)("span", { children: C }),
                              ],
                          })
                        : null,
                ],
            }),
            (0, i.jsxs)("div", {
                className: p.Ow,
                children: [
                    S || N
                        ? (0, i.jsx)(l.m, {
                              asContainer: !0,
                              text: O ? E.intl.formatToPlainString(E.t.A0f0P7, { days: L }) : null,
                              "aria-label": O ? E.intl.formatToPlainString(E.t.A0f0P7, { days: L }) : void 0,
                              children: (0, i.jsx)(c.$, {
                                  onClick: m,
                                  variant: "secondary",
                                  size: "md",
                                  loading: null == T || N,
                                  disabled: O || N,
                                  text: n,
                                  fullWidth: !0,
                              }),
                          })
                        : null,
                    (0, i.jsx)(c.$, {
                        onClick: () => I(S || N),
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
