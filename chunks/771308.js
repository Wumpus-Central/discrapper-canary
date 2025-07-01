r.d(t, {
    Av: () => s,
    hp: () => d,
    wE: () => u
});
var n = r(544891),
    l = r(570140),
    a = r(959776),
    o = r(626135),
    i = r(723359),
    c = r(981631);
function s(e, t) {
    return (
        (0, a.Z)(e, t),
        o.default.track(c.rMx.AGE_GATE_ACTION, {
            source: t,
            action: i.Al.AGE_GATE_SUBMITTED
        }),
        n.tn
            .patch({
                url: c.ANM.ME,
                oldFormErrors: !0,
                body: { date_of_birth: e.format('YYYY-MM-DD') },
                rejectWithError: !1
            })
            .then((e) => {
                let r = e.body;
                (l.Z.dispatch({
                    type: 'CURRENT_USER_UPDATE',
                    user: r
                }),
                    o.default.track(c.rMx.AGE_GATE_ACTION, {
                        source: t,
                        action: i.Al.AGE_GATE_SUCCESS
                    }));
            })
    );
}
function u(e) {
    (l.Z.dispatch({ type: 'AGE_GATE_PREVENT_UNDERAGE_REGISTRATION' }),
        o.default.track(c.rMx.AGE_GATE_ACTION, {
            source: e,
            action: i.Al.AGE_GATE_PREVENT_UNDERAGE_REGISTRATION
        }));
}
function d(e) {
    (l.Z.dispatch({ type: 'AGE_GATE_LOGOUT_UNDERAGE_NEW_USER' }),
        o.default.track(c.rMx.AGE_GATE_ACTION, {
            source: e,
            action: i.Al.AGE_GATE_LOGOUT_UNDERAGE_NEW_USER
        }));
}
