n.d(t, { Z: () => c });
var r = n(951288),
    i = n(647438),
    l = n(481060),
    a = n(926526),
    o = n(388032),
    s = n(394121);
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
                        color: l.TVs.colors.INTERACTIVE_ACTIVE,
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: s.statusTextContainer,
                    children: [
                        (0, r.jsx)(l.Heading, {
                            variant: "heading-lg/semibold",
                            color: "header-primary",
                            children:
                                (null == n ? void 0 : n.name) != null
                                    ? o.intl.formatToPlainString(o.t["0Qlu//"], { guildName: n.name })
                                    : o.intl.string(o.t["5iLvS0"]),
                        }),
                        (0, r.jsx)(l.Text, {
                            variant: "text-md/medium",
                            color: "header-secondary",
                            children: o.intl.string(o.t.FdsK4u),
                        }),
                    ],
                }),
                (0, r.jsx)(l.Button, {
                    fullWidth: !0,
                    onClick: t,
                    variant: "critical-primary",
                    size: "md",
                    text: o.intl.string(o.t.g9tK0t),
                }),
            ],
        })
    );
};
