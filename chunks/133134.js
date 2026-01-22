n.d(t, { A: () => x });
var l = n(627968),
    r = n(64700),
    a = n(311907),
    i = n(49229),
    s = n(58149),
    o = n(662502),
    c = n(632738),
    d = n(734057),
    u = n(994500),
    m = n(562153),
    b = n(652215),
    p = n(985018);
let x = (e) => {
    let { user: t, channelId: n, reportId: x, reportType: g } = e,
        f = (0, a.bG)([u.A], () => u.A.isBlocked(t.id), [t.id]),
        v = (0, a.bG)([d.A], () => d.A.getChannel(n), [n]),
        h = r.useMemo(() => m.Ay.getName(null == v ? void 0 : v.guild_id, null == v ? void 0 : v.id, t), [v, t]),
        j = r.useCallback(() => {
            s.Ay.trackWithMetadata(b.HAw.IAR_BLOCK_USER_BUTTON_CLICKED, {
                other_user_id: t.id,
                report_id: x,
            }),
                i.A.blockUser(t.id, { location: "ReportMenuBlockUser-iOS" }).then(() => {
                    o.A.showBlockSuccessToast(t.id, n);
                });
        }, [t, x, n]);
    return (0, l.jsx)(c.PQ, {
        title: p.intl.formatToPlainString(p.t["Q1o/f3"], { username: h }),
        description: p.intl.string(p.t.G08MKu),
        buttonText: f ? p.intl.string(p.t.ot2tSp) : p.intl.string(p.t["l+7PZY"]),
        buttonDisabled: f,
        onButtonPress: j,
        buttonVariant: "application" === g.name && f ? "secondary" : "critical-primary",
    });
};
