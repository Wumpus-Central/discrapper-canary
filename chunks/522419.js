n.d(t, { y: () => c });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(954571),
    s = n(105600),
    o = n(64175),
    l = n(652215);
function c(e) {
    let { channelId: t, blockedUserIds: c, ignoredUserIds: u } = e;
    (0, i.mMO)(
        async () => {
            let { default: e } = await n.e("24958").then(n.bind(n, 876717));
            return (n) => {
                let { transitionState: i, onClose: a } = n;
                return (0, r.jsx)(e, {
                    channelId: t,
                    blockedUserIds: c,
                    ignoredUserIds: u,
                    transitionState: i,
                    onClose: a,
                });
            };
        },
        {
            onCloseCallback: () => {
                (0, s.U)(t),
                    a.default.track(l.HAw.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                        action: o.Qi.DISMISS,
                        channel_id: t,
                        warning_medium: o.W_.MODAL,
                        blocked_user_ids: c,
                        ignored_user_ids: u,
                    });
            },
        },
    );
}
