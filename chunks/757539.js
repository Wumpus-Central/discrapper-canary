n.d(t, { Y: () => p });
var i = n(951288),
    r = n(647438),
    l = n(392711),
    a = n(793030),
    o = n(755721),
    s = n(481060),
    c = n(393903),
    d = n(388032),
    u = n(399553);
function p(e) {
    let {
            hasInvites: t,
            setHeight: n,
            onShowDisableInvites: p,
            onShowInviteModal: m,
            hasInviteDisabledPermission: b,
            invitesDisabled: g,
            canCreateInvites: f,
        } = e,
        h = r.useMemo(() => (0, l.debounce)(n, 100), [n]),
        x = r.useCallback(
            (e) => {
                let t = e.contentRect;
                null != t && h(t.height);
            },
            [h],
        ),
        j = (0, c.y)(x);
    return (0, i.jsxs)("div", {
        ref: j,
        className: u.actions,
        children: [
            (0, i.jsx)(a.X6q, {
                variant: "text-xs/bold",
                color: "text-muted",
                className: u.eyebrow,
                children: t ? d.intl.string(d.t.DjWsyc) : d.intl.string(d.t.AmwmLi),
            }),
            (0, i.jsxs)("div", {
                className: u.inviteButtons,
                children: [
                    (0, i.jsx)(o.zx, {
                        size: o.zx.Sizes.MEDIUM,
                        color: g ? o.zx.Colors.BRAND : o.zx.Colors.RED,
                        look: o.zx.Looks.OUTLINED,
                        disabled: !b,
                        onClick: p,
                        children: g ? d.intl.string(d.t["/dbw3N"]) : d.intl.string(d.t.Uwsjn5),
                    }),
                    !0 === f
                        ? (0, i.jsx)(s.zxk, {
                              variant: "primary",
                              text: d.intl.string(d.t.KmK3q6),
                              onClick: m,
                          })
                        : null,
                ],
            }),
        ],
    });
}
