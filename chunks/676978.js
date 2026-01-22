n.d(t, { A: () => m }), n(896048);
var l = n(627968),
    r = n(64700),
    a = n(843472),
    i = n(58149),
    s = n(632738),
    o = n(734057),
    c = n(576705),
    d = n(652215),
    u = n(985018);
let m = (e) => {
    let { message: t, reportId: n } = e,
        [m, b] = r.useState(!1),
        p = r.useCallback(() => {
            b(!0),
                i.Ay.trackWithMetadata(d.HAw.IAR_DELETE_MESSAGE_BUTTON_CLICKED, { report_id: n }),
                a.A.deleteMessage(t.getChannelId(), t.id);
        }, [t, n]),
        x = r.useMemo(() => {
            let e = o.A.getChannel(t.getChannelId());
            return (
                null != e &&
                e.type !== d.rbe.DM &&
                e.type !== d.rbe.GROUP_DM &&
                c.A.canWithPartialContext(d.xBc.MANAGE_MESSAGES, { channelId: e.id })
            );
        }, [t]);
    return null != t && x
        ? (0, l.jsx)(s.PQ, {
              title: u.intl.string(u.t.c9BHL9),
              description: u.intl.string(u.t.dK8S0w),
              buttonText: m ? u.intl.string(u.t.f3pnLL) : u.intl.string(u.t.ch2xbt),
              buttonDisabled: m,
              buttonVariant: "critical-primary",
              onButtonPress: p,
          })
        : null;
};
