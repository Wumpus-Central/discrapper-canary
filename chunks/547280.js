n.d(t, {
    b: () => u,
    o: () => c
});
var r = n(570140),
    i = n(605236),
    l = n(626135),
    a = n(445507),
    o = n(981631),
    s = n(921944);
function c(e) {
    let { targetKey: t, dismissibleContent: n, data: c, completed: u } = e;
    null != c.selectedOptionKey &&
        ((0, i.un)(n) ||
            l.default.track(o.rMx.SIGNUP_COMPLETED, {
                target_key: t,
                selected_option_key: c.selectedOptionKey,
                email: c.email,
                guild_id: c.guildId,
                metadata: (0, a.mU)(c),
                completed: u
            }),
        (0, i.EW)(n, {
            dismissAction: s.L.PRIMARY,
            forceTrack: !0
        }),
        r.Z.dispatch({
            type: 'COMPLETE_SIGN_UP',
            email: c.email,
            targetKey: t,
            selectedOptionKey: c.selectedOptionKey
        }));
}
function u(e, t) {
    (0, i.EW)(t, {
        dismissAction: s.L.DISMISS,
        forceTrack: !0
    }),
        r.Z.dispatch({
            type: 'DISMISS_SIGN_UP',
            targetKey: e
        });
}
