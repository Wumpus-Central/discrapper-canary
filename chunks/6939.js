n.d(t, { A: () => c });
var r = n(627968),
    i = n(64700),
    l = n(397927),
    a = n(51271),
    s = n(985018),
    o = n(400783);
let c = function (e) {
    let { onWithdrawApplication: t, guild: n = null } = e,
        c = null == n ? void 0 : n.id;
    return (
        i.useEffect(() => {
            null != c && (0, a.NC)(c);
        }, [c]),
        (0, r.jsxs)("div", {
            className: o.EL,
            children: [
                (0, r.jsx)("div", {
                    className: o.P0,
                    children: (0, r.jsx)(l.Qfk, {
                        size: "md",
                        color: l.LU0.colors.INTERACTIVE_TEXT_ACTIVE,
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: o.bc,
                    children: [
                        (0, r.jsx)(l.Heading, {
                            variant: "heading-lg/semibold",
                            color: "text-strong",
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
