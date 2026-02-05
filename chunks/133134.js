n.d(t, { A: () => g });
var l = n(627968),
    a = n(64700),
    i = n(311907),
    r = n(49229),
    s = n(58149),
    d = n(662502),
    o = n(632738),
    u = n(734057),
    c = n(994500),
    m = n(562153),
    _ = n(652215),
    x = n(985018);
let g = (e) => {
    let { user: t, channelId: n, reportId: g, reportType: h } = e,
        p = (0, i.bG)([c.A], () => c.A.isBlocked(t.id), [t.id]),
        A = (0, i.bG)([u.A], () => u.A.getChannel(n), [n]),
        b = a.useMemo(() => m.Ay.getName(A?.guild_id, A?.id, t), [A, t]),
        v = a.useCallback(() => {
            s.Ay.trackWithMetadata(_.HAw.IAR_BLOCK_USER_BUTTON_CLICKED, { other_user_id: t.id, report_id: g }),
                r.A.blockUser(t.id, { location: "ReportMenuBlockUser-iOS" }).then(() => {
                    d.A.showBlockSuccessToast(t.id, n);
                });
        }, [t, g, n]);
    return (0, l.jsx)(o.PQ, {
        title: x.intl.formatToPlainString(x.t["Q1o/f3"], { username: b }),
        description: x.intl.string(x.t.G08MKu),
        buttonText: p ? x.intl.string(x.t.ot2tSp) : x.intl.string(x.t["l+7PZY"]),
        buttonDisabled: p,
        onButtonPress: v,
        buttonVariant: "application" === h.name && p ? "secondary" : "critical-primary",
    });
};
