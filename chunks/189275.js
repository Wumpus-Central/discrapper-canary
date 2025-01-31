n.d(t, { O: () => u });
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(626135),
    s = n(799352),
    o = n(110223),
    l = n(981631);
function u(e) {
    let { channelId: t, blockedUserIds: u, ignoredUserIds: c } = e;
    (0, r.ZDy)(
        async () => {
            let { default: e } = await n.e('87337').then(n.bind(n, 164375));
            return (n) => {
                let { transitionState: r, onClose: a } = n;
                return (0, i.jsx)(e, {
                    channelId: t,
                    blockedUserIds: u,
                    ignoredUserIds: c,
                    transitionState: r,
                    onClose: a
                });
            };
        },
        {
            onCloseCallback: () => {
                (0, s.O)(t),
                    a.default.track(l.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                        action: o.q.DISMISS,
                        channel_id: t,
                        warning_medium: o.WR.MODAL,
                        blocked_user_ids: u,
                        ignored_user_ids: c
                    });
            }
        }
    );
}
