"use strict";
n.d(t, { A: () => h });
var a = n(627968),
    i = n(64700),
    r = n(311907),
    l = n(49229),
    s = n(58149),
    d = n(662502),
    o = n(632738),
    c = n(734057),
    u = n(994500),
    _ = n(562153),
    m = n(652215),
    p = n(985018);
let h = (e) => {
    let { user: t, channelId: n, reportId: h, reportType: g } = e,
        f = (0, r.bG)([u.A], () => u.A.isBlocked(t.id), [t.id]),
        b = (0, r.bG)([c.A], () => c.A.getChannel(n), [n]),
        A = i.useMemo(() => _.Ay.getName(b?.guild_id, b?.id, t), [b, t]),
        x = i.useCallback(() => {
            s.Ay.trackWithMetadata(m.HAw.IAR_BLOCK_USER_BUTTON_CLICKED, { other_user_id: t.id, report_id: h }),
                l.A.blockUser(t.id, { location: "ReportMenuBlockUser-iOS" }).then(() => {
                    d.A.showBlockSuccessToast(t.id, n);
                });
        }, [t, h, n]);
    return (0, a.jsx)(o.PQ, {
        title: p.intl.formatToPlainString(p.t["Q1o/f3"], { username: A }),
        description: p.intl.string(p.t.G08MKu),
        buttonText: f ? p.intl.string(p.t.ot2tSp) : p.intl.string(p.t["l+7PZY"]),
        buttonDisabled: f,
        onButtonPress: x,
        buttonVariant: "application" === g.name && f ? "secondary" : "critical-primary",
    });
};
