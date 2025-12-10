n.d(t, { Z: () => c });
var r = n(54381),
    i = n(473749),
    l = n(481060),
    a = n(926526),
    s = n(388032),
    o = n(394121);
let c = function (e) {
    let { onWithdrawApplication: t, guild: n = null } = e,
        c = null == n ? void 0 : n.id;
    return (
        i.useEffect(() => {
            null != c && (0, a.Pq)(c);
        }, [c]),
        (0, r.jsxs)("div", {
            className: o.confirmation,
            children: [
                (0, r.jsx)("div", {
                    className: o.iconWrapper,
                    children: (0, r.jsx)(l.wGF, {
                        size: "md",
                        color: l.TVs.colors.INTERACTIVE_TEXT_ACTIVE,
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: o.statusTextContainer,
                    children: [
                        (0, r.jsx)(l.Heading, {
                            variant: "heading-lg/semibold",
                            color: "header-primary",
                            children:
                                (null == n ? void 0 : n.name) != null
                                    ? s.intl.formatToPlainString(s.t["0Qlu/6"], { guildName: n.name })
                                    : s.intl.string(s.t["5iLvSx"]),
                        }),
                        (0, r.jsx)(l.Text, {
                            variant: "text-md/medium",
                            color: "text-default",
                            children: s.intl.string(s.t.FdsK4h),
                        }),
                    ],
                }),
                (0, r.jsx)(l.Button, {
                    fullWidth: !0,
                    onClick: t,
                    variant: "critical-primary",
                    size: "md",
                    text: s.intl.string(s.t.g9tK0o),
                }),
            ],
        })
    );
};
