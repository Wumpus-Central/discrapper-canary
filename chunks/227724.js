n.d(t, { k: () => d });
var i = n(477900),
    r = n(192308),
    a = n(994500),
    s = n(174459),
    l = n(64175),
    o = n(652215);
function d(e, t) {
    let d = a.A.isBlocked(t);
    (0, r.openModalLazy)(
        async () => {
            let { default: r } = await Promise.all([
                n.e("89100"),
                n.e("524434"),
                n.e("921327"),
                n.e("701406"),
                n.e("722640"),
                n.e("222267"),
                n.e("454048"),
                n.e("481647"),
                n.e("565617"),
                n.e("418943"),
                n.e("24922"),
                n.e("342234"),
                n.e("420577"),
                n.e("383792"),
                n.e("39679"),
            ]).then(n.bind(n, 552258));
            return (n) => {
                let { transitionState: a, onClose: s } = n;
                return (0, i.jsx)(r, { channelId: e, userId: t, transitionState: a, onClose: s });
            };
        },
        {
            modalKey: "blocked_user_joined_voice_channel_modal",
            onCloseCallback: () => {
                s.default.track(o.HAw.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                    action: l.Qi.DISMISS,
                    channel_id: e,
                    blocked_user_ids: d ? [t] : [],
                    ignored_user_ids: d ? [] : [t],
                    warning_surface: l.gD.POST_JOIN_MODAL,
                });
            },
        },
    );
}
