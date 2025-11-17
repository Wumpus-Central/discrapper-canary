n.d(t, { Y: () => u });
var i = n(54381),
    r = n(473749),
    l = n(392711),
    a = n(793030),
    o = n(481060),
    s = n(393903),
    c = n(388032),
    d = n(399553);
function u(e) {
    let {
            hasInvites: t,
            setHeight: n,
            onShowDisableInvites: u,
            onShowInviteModal: p,
            hasInviteDisabledPermission: m,
            invitesDisabled: b,
            canCreateInvites: g,
        } = e,
        f = r.useMemo(() => (0, l.debounce)(n, 100), [n]),
        h = r.useCallback(
            (e) => {
                let t = e.contentRect;
                null != t && f(t.height);
            },
            [f],
        ),
        x = (0, s.y)(h);
    return (0, i.jsxs)("div", {
        ref: x,
        className: d.actions,
        children: [
            (0, i.jsx)(a.X6q, {
                variant: "text-xs/bold",
                color: "text-muted",
                className: d.eyebrow,
                children: t ? c.intl.string(c.t.DjWsya) : c.intl.string(c.t.AmwmLg),
            }),
            (0, i.jsxs)(a.hE2, {
                children: [
                    (0, i.jsx)(o.Button, {
                        variant: b ? "primary" : "critical-secondary",
                        text: b ? c.intl.string(c.t["/dbw3H"]) : c.intl.string(c.t.Uwsjn6),
                        onClick: u,
                        disabled: !m,
                    }),
                    !0 === g
                        ? (0, i.jsx)(o.Button, {
                              variant: "primary",
                              text: c.intl.string(c.t.KmK3q4),
                              onClick: p,
                          })
                        : null,
                ],
            }),
        ],
    });
}
