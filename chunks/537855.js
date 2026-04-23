n.d(t, { K: () => m });
var i = n(627968),
    l = n(64700),
    s = n(735438),
    a = n(534514),
    r = n(825484),
    o = n(821609),
    d = n(770178),
    c = n(985018),
    u = n(280362);
function m(e) {
    let {
            hasInvites: t,
            setHeight: n,
            onShowDisableInvites: m,
            onShowInviteModal: g,
            hasInviteDisabledPermission: h,
            invitesDisabled: x,
            canCreateInvites: p,
        } = e,
        A = l.useMemo(() => (0, s.debounce)(n, 100), [n]),
        b = l.useCallback(
            (e) => {
                let t = e.contentRect;
                null != t && A(t.height);
            },
            [A],
        ),
        f = (0, d.w)(b);
    return (0, i.jsxs)("div", {
        ref: f,
        className: u.o,
        children: [
            (0, i.jsx)(a.D, {
                variant: "text-xs/bold",
                color: "text-muted",
                className: u.U,
                children: t ? c.intl.string(c.t.DjWsya) : c.intl.string(c.t.AmwmLg),
            }),
            (0, i.jsxs)(r.e, {
                children: [
                    (0, i.jsx)(o.$, {
                        variant: x ? "primary" : "critical-secondary",
                        text: x ? c.intl.string(c.t["/dbw3H"]) : c.intl.string(c.t.Uwsjn6),
                        onClick: m,
                        disabled: !h,
                    }),
                    !0 === p
                        ? (0, i.jsx)(o.$, { variant: "primary", text: c.intl.string(c.t.KmK3q4), onClick: g })
                        : null,
                ],
            }),
        ],
    });
}
