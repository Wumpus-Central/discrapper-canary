n.d(t, {
    Av: () => c,
    hp: () => d,
    wE: () => u,
});
var r = n(544891),
    i = n(570140),
    s = n(959776),
    a = n(626135),
    l = n(723359),
    o = n(981631);
function c(e, t) {
    return (
        (0, s.Z)(e, t),
        a.default.track(o.rMx.AGE_GATE_ACTION, {
            source: t,
            action: l.Al.AGE_GATE_SUBMITTED,
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
                    a.default.track(o.rMx.AGE_GATE_ACTION, {
                        source: t,
                        action: l.Al.AGE_GATE_SUCCESS,
                    });
            })
    );
}
function u(e) {
    i.Z.dispatch({ type: "AGE_GATE_PREVENT_UNDERAGE_REGISTRATION" }),
        a.default.track(o.rMx.AGE_GATE_ACTION, {
            source: e,
            action: l.Al.AGE_GATE_PREVENT_UNDERAGE_REGISTRATION,
        });
}
function d(e) {
    i.Z.dispatch({ type: "AGE_GATE_LOGOUT_UNDERAGE_NEW_USER" }),
        a.default.track(o.rMx.AGE_GATE_ACTION, {
            source: e,
            action: l.Al.AGE_GATE_LOGOUT_UNDERAGE_NEW_USER,
        });
}
