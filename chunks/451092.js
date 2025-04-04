n.d(t, { H: () => u });
var r = n(200651),
    i = n(481060),
    o = n(699516),
    a = n(626135),
    s = n(110223),
    l = n(981631);
let c = 'blocked_user_joined_voice_channel_modal';
function u(e, t) {
    let u = o.Z.isBlocked(t);
    (0, i.ZDy)(
        async () => {
            let { default: i } = await Promise.all([n.e('25176'), n.e('4279')]).then(n.bind(n, 232837));
            return (n) => {
                let { transitionState: o, onClose: a } = n;
                return (0, r.jsx)(i, {
                    channelId: e,
                    userId: t,
                    transitionState: o,
                    onClose: a
                });
            };
        },
        {
            modalKey: c,
            onCloseCallback: () => {
                a.default.track(l.rMx.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: s.q.DISMISS,
                    channel_id: e,
                    blocked_user_ids: u ? [t] : [],
                    ignored_user_ids: u ? [] : [t],
                    warning_surface: s.fz.POST_JOIN_MODAL
                });
            }
        }
    );
}
