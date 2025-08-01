a.d(i, { ActivityAgeGateModal: () => c });
var n = a(255367),
    e = a(73800),
    s = a(82659),
    l = a(480916),
    r = a(388032);
function c(t) {
    let { application: i, onAgree: a, onClose: c, onDisagree: o, channelId: E, transitionState: C } = t;
    e.useEffect(() => {
        (0, l.YT)(l.it.NSFW_EMBEDDED_ACTIVITY, E);
    }, [E]);
    let _ = e.useCallback(() => {
            ((0, l.qd)(l.iP.NSFW_CHANNEL_AGREE_CTA, l.it.NSFW_EMBEDDED_ACTIVITY, E), a(), c());
        }, [a, c, E]),
        u = e.useCallback(() => {
            ((0, l.qd)(l.iP.NSFW_CHANNEL_DISAGREE_CTA, l.it.NSFW_EMBEDDED_ACTIVITY, E), o(), c());
        }, [o, c, E]);
    return (0, n.jsx)(s.Modal, {
        transitionState: C,
        title: r.intl.string(r.t.SSDPOD),
        subtitle: r.intl.formatToPlainString(r.t.OgmIq6, { applicationName: i.name }),
        onClose: () => Promise.resolve(u()),
        actions: [
            {
                onClick: u,
                variant: 'secondary',
                text: r.intl.string(r.t.hg1uxs)
            },
            {
                onClick: _,
                variant: 'critical-primary',
                text: r.intl.string(r.t.wVq7ur)
            }
        ]
    });
}
