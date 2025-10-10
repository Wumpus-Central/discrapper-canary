n.d(t, {
    Av: () => c,
    hp: () => d,
    wE: () => u,
});
var r = n(544891),
    i = n(570140),
    l = n(959776),
    s = n(626135),
    a = n(723359),
    o = n(981631);
function c(e, t) {
    return (
        (0, l.Z)(e, t),
        s.default.track(o.rMx.AGE_GATE_ACTION, {
            source: t,
            action: a.Al.AGE_GATE_SUBMITTED,
        }),
        r.tn
            .patch({
                url: o.ANM.ME,
                oldFormErrors: !0,
                body: { date_of_birth: e.format("YYYY-MM-DD") },
                rejectWithError: !1,
            })
            .then((e) => {
                let n = e.body;
                i.Z.dispatch({
                    type: "CURRENT_USER_UPDATE",
                    user: n,
                }),
                    s.default.track(o.rMx.AGE_GATE_ACTION, {
                        source: t,
                        action: a.Al.AGE_GATE_SUCCESS,
                    });
            })
    );
}
function u(e) {
    i.Z.dispatch({ type: "AGE_GATE_PREVENT_UNDERAGE_REGISTRATION" }),
        s.default.track(o.rMx.AGE_GATE_ACTION, {
            source: e,
            action: a.Al.AGE_GATE_PREVENT_UNDERAGE_REGISTRATION,
        });
}
function d(e) {
    i.Z.dispatch({ type: "AGE_GATE_LOGOUT_UNDERAGE_NEW_USER" }),
        s.default.track(o.rMx.AGE_GATE_ACTION, {
            source: e,
            action: a.Al.AGE_GATE_LOGOUT_UNDERAGE_NEW_USER,
        });
}
