n.d(t, { O: () => c });
var r = n(255367);
n(73800);
var i = n(481060),
    a = n(626135),
    o = n(799352),
    s = n(110223),
    l = n(981631);
function c(e) {
    let { channelId: t, blockedUserIds: c, ignoredUserIds: u } = e;
    (0, i.ZDy)(
        async () => {
            let { default: e } = await n.e('87337').then(n.bind(n, 164375));
            return (n) => {
                let { transitionState: i, onClose: a } = n;
                return (0, r.jsx)(e, {
                    channelId: t,
                    blockedUserIds: c,
                    ignoredUserIds: u,
                    transitionState: i,
                    onClose: a
                });
            };
        },
        {
            onCloseCallback: () => {
                (0, o.O)(t),
                    a.default.track(l.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                        action: s.q.DISMISS,
                        channel_id: t,
                        warning_medium: s.WR.MODAL,
                        blocked_user_ids: c,
                        ignored_user_ids: u
                    });
            }
        }
    );
}
