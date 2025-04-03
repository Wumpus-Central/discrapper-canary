i.d(t, {
    b: () => r,
    o: () => o
});
var s = i(570140),
    n = i(605236),
    c = i(626135),
    a = i(445507),
    l = i(981631),
    d = i(921944);
function o(e) {
    let { targetKey: t, dismissibleContent: i, data: o, completed: r } = e;
    null != o.selectedOptionKey &&
        ((0, n.un)(i) ||
            c.default.track(l.rMx.SIGNUP_COMPLETED, {
                target_key: t,
                selected_option_key: o.selectedOptionKey,
                email: o.email,
                guild_id: o.guildId,
                metadata: (0, a.mU)(o),
                completed: r
            }),
        (0, n.EW)(i, {
            dismissAction: d.L.PRIMARY,
            forceTrack: !0
        }),
        s.Z.dispatch({
            type: 'COMPLETE_SIGN_UP',
            email: o.email,
            targetKey: t,
            selectedOptionKey: o.selectedOptionKey
        }));
}
function r(e, t) {
    (0, n.EW)(t, {
        dismissAction: d.L.DISMISS,
        forceTrack: !0
    }),
        s.Z.dispatch({
            type: 'DISMISS_SIGN_UP',
            targetKey: e
        });
}
