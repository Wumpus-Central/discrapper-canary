"use strict";
n.d(t, { A: () => _ });
var a = n(627968),
    i = n(64700),
    r = n(843472),
    l = n(58149),
    s = n(632738),
    d = n(734057),
    o = n(576705),
    c = n(652215),
    u = n(985018);
let _ = (e) => {
    let { message: t, reportId: n } = e,
        [_, m] = i.useState(!1),
        p = i.useCallback(() => {
            m(!0),
                l.Ay.trackWithMetadata(c.HAw.IAR_DELETE_MESSAGE_BUTTON_CLICKED, { report_id: n }),
                r.A.deleteMessage(t.getChannelId(), t.id);
        }, [t, n]),
        h = i.useMemo(() => {
            let e = d.A.getChannel(t.getChannelId());
            return (
                null != e &&
                e.type !== c.rbe.DM &&
                e.type !== c.rbe.GROUP_DM &&
                o.A.canWithPartialContext(c.xBc.MANAGE_MESSAGES, { channelId: e.id })
            );
        }, [t]);
    return null != t && h
        ? (0, a.jsx)(s.PQ, {
              title: u.intl.string(u.t.c9BHL9),
              description: u.intl.string(u.t.dK8S0w),
              buttonText: _ ? u.intl.string(u.t.f3pnLL) : u.intl.string(u.t.ch2xbt),
              buttonDisabled: _,
              buttonVariant: "critical-primary",
              onButtonPress: p,
          })
        : null;
};
