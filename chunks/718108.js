n.d(t, { W: () => p });
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(481060),
    o = n(99690),
    s = n(594174),
    l = n(795448),
    c = n(441623),
    u = n(268685),
    d = n(388032),
    f = n(186120);
function p(e) {
    let { profileUserId: t } = e,
        n = (0, i.e7)([s.default], () => s.default.getUser(t), [t]),
        p = (0, i.e7)([s.default], () => s.default.getCurrentUser()),
        _ = (0, i.e7)([c.ZP], () => c.ZP.getFriendAnniversaryYears(t), [t]);
    return (0, r.jsxs)("div", {
        className: f.container,
        children: [
            (0, r.jsx)("div", {
                className: f.closeButton,
                children: (0, r.jsx)(a.hU, {
                    icon: a.Dio,
                    size: "sm",
                    variant: "icon-only",
                    "aria-label": d.intl.string(d.t.cpT0Cq),
                    onClick: () => (0, l.X9)(t),
                }),
            }),
            (0, r.jsx)(a.Text, {
                variant: "text-sm/semibold",
                color: "text-strong",
                children: d.intl.string(d.t.icDVNb),
            }),
            (0, r.jsxs)("div", {
                className: f.subtitleContainer,
                children: [
                    null != n &&
                        (0, r.jsx)(o.Z, {
                            size: u.EF.SIZE_16,
                            user: n,
                        }),
                    null != p &&
                        (0, r.jsx)(o.Z, {
                            className: f.currentUserAvatar,
                            size: u.EF.SIZE_16,
                            user: p,
                        }),
                    (0, r.jsx)(a.Text, {
                        variant: "text-xs/normal",
                        color: "text-strong",
                        children: d.intl.formatToPlainString(d.t.PpG27s, { numberOfYears: _ }),
                    }),
                ],
            }),
        ],
    });
}
