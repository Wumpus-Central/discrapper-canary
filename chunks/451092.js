n.d(t, { H: () => c });
var i = n(200651),
    r = n(481060),
    a = n(699516),
    s = n(626135),
    o = n(110223),
    l = n(981631);
let u = 'blocked_user_joined_voice_channel_modal';
function c(e, t) {
    let c = a.Z.isBlocked(t);
    (0, r.ZDy)(
        async () => {
            let { default: r } = await n.e('85505').then(n.bind(n, 232837));
            return (n) => {
                let { transitionState: a, onClose: s } = n;
                return (0, i.jsx)(r, {
                    channelId: e,
                    userId: t,
                    transitionState: a,
                    onClose: s
                });
            };
        },
        {
            modalKey: u,
            onCloseCallback: () => {
                s.default.track(l.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: o.q.DISMISS,
                    channel_id: e,
                    blocked_user_ids: c ? [t] : [],
                    ignored_user_ids: c ? [] : [t],
                    warning_surface: o.fz.POST_JOIN_MODAL
                });
            }
        }
    );
}
