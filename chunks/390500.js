n.d(t, { Z: () => c });
var r = n(54381),
    i = n(473749),
    l = n(481060),
    a = n(926526),
    o = n(388032),
    s = n(871612);
let c = function (e) {
    let { onWithdrawApplication: t, guild: n = null } = e,
        c = null == n ? void 0 : n.id;
    return (
        i.useEffect(() => {
            null != c && (0, a.Pq)(c);
        }, [c]),
        (0, r.jsxs)("div", {
            className: s.confirmation,
            children: [
                (0, r.jsx)("div", {
                    className: s.iconWrapper,
                    children: (0, r.jsx)(l.wGF, {
                        size: "md",
                        color: l.TVs.colors.INTERACTIVE_TEXT_ACTIVE,
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: s.statusTextContainer,
                    children: [
                        (0, r.jsx)(l.Heading, {
                            variant: "heading-lg/semibold",
                            color: "text-strong",
                            children:
                                (null == n ? void 0 : n.name) != null
                                    ? o.intl.formatToPlainString(o.t["0Qlu/6"], { guildName: n.name })
                                    : o.intl.string(o.t["5iLvSx"]),
                        }),
                        (0, r.jsx)(l.Text, {
                            variant: "text-md/medium",
                            color: "text-default",
                            children: o.intl.string(o.t.FdsK4h),
                        }),
                    ],
                }),
                (0, r.jsx)(l.Button, {
                    fullWidth: !0,
                    onClick: t,
                    variant: "critical-primary",
                    size: "md",
                    text: o.intl.string(o.t.g9tK0o),
                }),
            ],
        })
    );
};
