n.d(t, { O: () => c });
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(626135),
    a = n(799352),
    s = n(110223),
    l = n(981631);
function c(e) {
    let { channelId: t, blockedUserIds: c, ignoredUserIds: u } = e;
    (0, i.ZDy)(
        async () => {
            let { default: e } = await Promise.all([n.e('25176'), n.e('2908')]).then(n.bind(n, 164375));
            return (n) => {
                let { transitionState: i, onClose: o } = n;
                return (0, r.jsx)(e, {
                    channelId: t,
                    blockedUserIds: c,
                    ignoredUserIds: u,
                    transitionState: i,
                    onClose: o
                });
            };
        },
        {
            onCloseCallback: () => {
                (0, a.O)(t),
                    o.default.track(l.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
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
