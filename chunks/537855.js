n.d(t, { K: () => u });
var i = n(627968),
    l = n(64700),
    s = n(735438),
    a = n(158954),
    r = n(397927),
    o = n(770178),
    d = n(985018),
    c = n(155135);
function u(e) {
    let {
            hasInvites: t,
            setHeight: n,
            onShowDisableInvites: u,
            onShowInviteModal: m,
            hasInviteDisabledPermission: g,
            invitesDisabled: x,
            canCreateInvites: h,
        } = e,
        p = l.useMemo(() => (0, s.debounce)(n, 100), [n]),
        A = l.useCallback(
            (e) => {
                let t = e.contentRect;
                null != t && p(t.height);
            },
            [p],
        ),
        b = (0, o.w)(A);
    return (0, i.jsxs)("div", {
        ref: b,
        className: c.o,
        children: [
            (0, i.jsx)(a.DZT, {
                variant: "text-xs/bold",
                color: "text-muted",
                className: c.U,
                children: t ? d.intl.string(d.t.DjWsya) : d.intl.string(d.t.AmwmLg),
            }),
            (0, i.jsxs)(a.e2v, {
                children: [
                    (0, i.jsx)(r.Button, {
                        variant: x ? "primary" : "critical-secondary",
                        text: x ? d.intl.string(d.t["/dbw3H"]) : d.intl.string(d.t.Uwsjn6),
                        onClick: u,
                        disabled: !g,
                    }),
                    !0 === h
                        ? (0, i.jsx)(r.Button, { variant: "primary", text: d.intl.string(d.t.KmK3q4), onClick: m })
                        : null,
                ],
            }),
        ],
    });
}
