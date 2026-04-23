"use strict";
n.d(t, { y: () => u });
var r = n(627968);
n(64700);
var i = n(192308),
    s = n(954571),
    a = n(105600),
    o = n(64175),
    l = n(652215);
function u(e) {
    let { channelId: t, blockedUserIds: u, ignoredUserIds: c } = e;
    (0, i.openModalLazy)(
        async () => {
            let { default: e } = await n.e("24958").then(n.bind(n, 876717));
            return (n) => {
                let { transitionState: i, onClose: s } = n;
                return (0, r.jsx)(e, {
                    channelId: t,
                    blockedUserIds: u,
                    ignoredUserIds: c,
                    transitionState: i,
                    onClose: s,
                });
            };
        },
        {
            onCloseCallback: () => {
                (0, a.U)(t),
                    s.default.track(l.HAw.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
                        action: o.Qi.DISMISS,
                        channel_id: t,
                        warning_medium: o.W_.MODAL,
                        blocked_user_ids: u,
                        ignored_user_ids: c,
                    });
            },
        },
    );
}
