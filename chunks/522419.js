n.d(t, {
    y: () => c,
});
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(954571),
    o = n(105600),
    s = n(64175),
    l = n(652215);

function c(e) {
    let { channelId: t, blockedUserIds: c, ignoredUserIds: u } = e;
    (0, i.mMO)(
        async () => {
            let { default: e } = await Promise.all([n.e("83792"), n.e("94731")]).then(n.bind(n, 876717));
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
                (0, o.U)(t),
                    a.default.track(l.HAw.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                        action: s.Qi.DISMISS,
                        channel_id: t,
                        warning_medium: s.W_.MODAL,
                        blocked_user_ids: c,
                        ignored_user_ids: u,
                    });
            },
        },
    );
}
