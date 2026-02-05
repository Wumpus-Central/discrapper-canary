n.d(t, { A: () => m });
var l = n(627968),
    a = n(64700),
    i = n(843472),
    r = n(58149),
    s = n(632738),
    d = n(734057),
    o = n(576705),
    u = n(652215),
    c = n(985018);
let m = (e) => {
    let { message: t, reportId: n } = e,
        [m, _] = a.useState(!1),
        x = a.useCallback(() => {
            _(!0),
                r.Ay.trackWithMetadata(u.HAw.IAR_DELETE_MESSAGE_BUTTON_CLICKED, { report_id: n }),
                i.A.deleteMessage(t.getChannelId(), t.id);
        }, [t, n]),
        g = a.useMemo(() => {
            let e = d.A.getChannel(t.getChannelId());
            return (
                null != e &&
                e.type !== u.rbe.DM &&
                e.type !== u.rbe.GROUP_DM &&
                o.A.canWithPartialContext(u.xBc.MANAGE_MESSAGES, { channelId: e.id })
            );
        }, [t]);
    return null != t && g
        ? (0, l.jsx)(s.PQ, {
              title: c.intl.string(c.t.c9BHL9),
              description: c.intl.string(c.t.dK8S0w),
              buttonText: m ? c.intl.string(c.t.f3pnLL) : c.intl.string(c.t.ch2xbt),
              buttonDisabled: m,
              buttonVariant: "critical-primary",
              onButtonPress: x,
          })
        : null;
};
