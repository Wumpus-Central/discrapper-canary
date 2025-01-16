t.d(n, {
    b: function () {
        return l;
    },
    o: function () {
        return p;
    }
});
var o = t(570140),
    c = t(605236),
    i = t(626135),
    a = t(445507),
    r = t(981631),
    f = t(921944);
function p(e) {
    let { targetKey: n, dismissibleContent: t, data: p, completed: l } = e;
    null != p.selectedOptionKey &&
        (!(0, c.un)(t) &&
            i.default.track(r.rMx.SIGNUP_COMPLETED, {
                target_key: n,
                selected_option_key: p.selectedOptionKey,
                email: p.email,
                guild_id: p.guildId,
                metadata: (0, a.mU)(p),
                completed: l
            }),
        (0, c.EW)(t, {
            dismissAction: f.L.PRIMARY,
            forceTrack: !0
        }),
        o.Z.dispatch({
            type: 'COMPLETE_SIGN_UP',
            email: p.email,
            targetKey: n,
            selectedOptionKey: p.selectedOptionKey
        }));
}
function l(e, n) {
    (0, c.EW)(n, {
        dismissAction: f.L.DISMISS,
        forceTrack: !0
    }),
        o.Z.dispatch({
            type: 'DISMISS_SIGN_UP',
            targetKey: e
        });
}
