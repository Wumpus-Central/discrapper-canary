n.d(t, { A: () => g });
var l = n(627968),
    a = n(64700),
    i = n(311907),
    r = n(49229),
    s = n(58149),
    d = n(662502),
    o = n(632738),
    c = n(734057),
    u = n(994500),
    _ = n(562153),
    m = n(652215),
    h = n(985018);
let g = (e) => {
    let { user: t, channelId: n, reportId: g, reportType: p } = e,
        x = (0, i.bG)([u.A], () => u.A.isBlocked(t.id), [t.id]),
        A = (0, i.bG)([c.A], () => c.A.getChannel(n), [n]),
        f = a.useMemo(() => _.Ay.getName(A?.guild_id, A?.id, t), [A, t]),
        v = a.useCallback(() => {
            s.Ay.trackWithMetadata(m.HAw.IAR_BLOCK_USER_BUTTON_CLICKED, { other_user_id: t.id, report_id: g }),
                r.A.blockUser(t.id, { location: "ReportMenuBlockUser-iOS" }).then(() => {
                    d.A.showBlockSuccessToast(t.id, n);
                });
        }, [t, g, n]);
    return (0, l.jsx)(o.PQ, {
        title: h.intl.formatToPlainString(h.t["Q1o/f3"], { username: f }),
        description: h.intl.string(h.t.G08MKu),
        buttonText: x ? h.intl.string(h.t.ot2tSp) : h.intl.string(h.t["l+7PZY"]),
        buttonDisabled: x,
        onButtonPress: v,
        buttonVariant: "application" === p.name && x ? "secondary" : "critical-primary",
    });
};
