n.d(t, {
    b: function () {
        return d;
    },
    o: function () {
        return c;
    }
});
var i = n(570140),
    r = n(605236),
    l = n(626135),
    a = n(445507),
    s = n(981631),
    o = n(921944);
function c(e) {
    let { targetKey: t, dismissibleContent: n, data: c, completed: d } = e;
    null != c.selectedOptionKey &&
        (!(0, r.un)(n) &&
            l.default.track(s.rMx.SIGNUP_COMPLETED, {
                target_key: t,
                selected_option_key: c.selectedOptionKey,
                email: c.email,
                guild_id: c.guildId,
                metadata: (0, a.mU)(c),
                completed: d
            }),
        (0, r.EW)(n, {
            dismissAction: o.L.PRIMARY,
            forceTrack: !0
        }),
        i.Z.dispatch({
            type: 'COMPLETE_SIGN_UP',
            email: c.email,
            targetKey: t,
            selectedOptionKey: c.selectedOptionKey
        }));
}
function d(e, t) {
    (0, r.EW)(t, {
        dismissAction: o.L.DISMISS,
        forceTrack: !0
    }),
        i.Z.dispatch({
            type: 'DISMISS_SIGN_UP',
            targetKey: e
        });
}
