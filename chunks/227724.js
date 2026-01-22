n.d(t, {
    k: () => u,
});
var r = n(627968),
    i = n(397927),
    a = n(994500),
    s = n(954571),
    o = n(64175),
    l = n(652215);
let c = "blocked_user_joined_voice_channel_modal";

function u(e, t) {
    let u = a.A.isBlocked(t);
    (0, i.mMO)(
        async () => {
            let { default: i } = await n.e("39679").then(n.bind(n, 552258));
            return (n) => {
                let { transitionState: a, onClose: s } = n;
                return (0, r.jsx)(i, {
                    channelId: e,
                    userId: t,
                    transitionState: a,
                    onClose: s,
                });
            };
        },
        {
            modalKey: c,
            onCloseCallback: () => {
                s.default.track(l.HAw.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: o.Qi.DISMISS,
                    channel_id: e,
                    blocked_user_ids: u ? [t] : [],
                    ignored_user_ids: u ? [] : [t],
                    warning_surface: o.gD.POST_JOIN_MODAL,
                });
            },
        },
    );
}
