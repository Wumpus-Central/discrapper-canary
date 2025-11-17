a.d(i, { ActivityAgeGateModal: () => o });
var n = a(54381),
    e = a(473749),
    l = a(793030),
    s = a(480916),
    r = a(388032);
function o(t) {
    let { application: i, onAgree: a, onClose: o, onDisagree: c, channelId: E, transitionState: C } = t;
    e.useEffect(() => {
        (0, s.YT)(s.it.NSFW_EMBEDDED_ACTIVITY, E);
    }, [E]);
    let _ = e.useCallback(() => {
            (0, s.qd)(s.iP.NSFW_CHANNEL_AGREE_CTA, s.it.NSFW_EMBEDDED_ACTIVITY, E), a(), o();
        }, [a, o, E]),
        u = e.useCallback(() => {
            (0, s.qd)(s.iP.NSFW_CHANNEL_DISAGREE_CTA, s.it.NSFW_EMBEDDED_ACTIVITY, E), c(), o();
        }, [c, o, E]);
    return (0, n.jsx)(l.Modal, {
        transitionState: C,
        title: r.intl.string(r.t.SSDPOF),
        subtitle: r.intl.formatToPlainString(r.t.OgmIqy, { applicationName: i.name }),
        onClose: () => Promise.resolve(u()),
        actions: [
            {
                onClick: u,
                variant: "secondary",
                text: r.intl.string(r.t.hg1uxn),
            },
            {
                onClick: _,
                variant: "critical-primary",
                text: r.intl.string(r.t.wVq7uo),
            },
        ],
    });
}
