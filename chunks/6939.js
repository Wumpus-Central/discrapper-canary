n.d(t, { A: () => h });
var i = n(627968),
    r = n(64700),
    a = n(339350),
    l = n(827734),
    s = n(534514),
    o = n(834730),
    d = n(821609),
    u = n(51271),
    c = n(985018),
    A = n(146983);
let h = function (e) {
    let { onWithdrawApplication: t, guild: n = null } = e,
        h = n?.id;
    return (
        r.useEffect(() => {
            null != h && (0, u.NC)(h);
        }, [h]),
        (0, i.jsxs)("div", {
            className: A.EL,
            children: [
                (0, i.jsx)("div", {
                    className: A.P0,
                    children: (0, i.jsx)(a.Q, { size: "md", color: l.A.colors.INTERACTIVE_TEXT_ACTIVE }),
                }),
                (0, i.jsxs)("div", {
                    className: A.bc,
                    children: [
                        (0, i.jsx)(s.D, {
                            variant: "heading-lg/semibold",
                            color: "text-strong",
                            children:
                                n?.name != null
                                    ? c.intl.formatToPlainString(c.t["0Qlu/6"], { guildName: n.name })
                                    : c.intl.string(c.t["5iLvSx"]),
                        }),
                        (0, i.jsx)(o.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            children: c.intl.string(c.t.FdsK4h),
                        }),
                    ],
                }),
                (0, i.jsx)(d.$, {
                    fullWidth: !0,
                    onClick: t,
                    variant: "critical-primary",
                    size: "md",
                    text: c.intl.string(c.t.g9tK0o),
                }),
            ],
        })
    );
};
