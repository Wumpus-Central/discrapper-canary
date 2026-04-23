"use strict";
n.d(t, { k: () => u });
var r = n(627968),
    i = n(192308),
    s = n(994500),
    a = n(954571),
    o = n(64175),
    l = n(652215);
function u(e, t) {
    let u = s.A.isBlocked(t);
    (0, i.openModalLazy)(
        async () => {
            let { default: i } = await n.e("39679").then(n.bind(n, 552258));
            return (n) => {
                let { transitionState: s, onClose: a } = n;
                return (0, r.jsx)(i, { channelId: e, userId: t, transitionState: s, onClose: a });
            };
        },
        {
            modalKey: "blocked_user_joined_voice_channel_modal",
            onCloseCallback: () => {
                a.default.track(l.HAw.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
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
