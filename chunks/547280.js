o.d(n, {
    b: () => l,
    o: () => p
});
var t = o(570140),
    i = o(605236),
    _ = o(626135),
    c = o(445507),
    a = o(981631),
    r = o(921944);
function p(e) {
    let { targetKey: n, dismissibleContent: o, data: p, completed: l } = e;
    null != p.selectedOptionKey &&
        ((0, i.un)(o) ||
            _.default.track(a.rMx.SIGNUP_COMPLETED, {
                target_key: n,
                selected_option_key: p.selectedOptionKey,
                email: p.email,
                guild_id: p.guildId,
                metadata: (0, c.mU)(p),
                completed: l
            }),
        (0, i.EW)(o, {
            dismissAction: r.L.PRIMARY,
            forceTrack: !0
        }),
        t.Z.dispatch({
            type: 'COMPLETE_SIGN_UP',
            email: p.email,
            targetKey: n,
            selectedOptionKey: p.selectedOptionKey
        }));
}
function l(e, n) {
    (0, i.EW)(n, {
        dismissAction: r.L.DISMISS,
        forceTrack: !0
    }),
        t.Z.dispatch({
            type: 'DISMISS_SIGN_UP',
            targetKey: e
        });
}
