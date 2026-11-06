var i = s(620632),
    n = s(858899),
    a = s(73153),
    l = s(181658),
    r = s(919466),
    c = s(297966),
    o = s(652215),
    d = s(792996);
function u() {
    let e = r.A.getRequestState();
    return e === c.db.FETCHING || e === c.db.CANCELLING;
}
s.d(
    t,
    {},
    {
        RB: async function (e) {
            if (!u()) {
                a.h.dispatch({ type: "PARTNER_CANCELLATION_START" });
                try {
                    (await i.Bo.del({ url: o.Rsh.PARTNER_PERK(e), rejectWithError: !0 }),
                        a.h.dispatch({ type: "PARTNER_CANCELLATION_SUCCESS" }));
                } catch {
                    (a.h.dispatch({ type: "PARTNER_CANCELLATION_FAILURE" }),
                        (0, n.P0)({ text: d.intl.string(d.t.F8FvUy), variant: "critical" }));
                }
            }
        },
        aB: async function (e) {
            if (!u()) {
                a.h.dispatch({ type: "PARTNER_ACTIVATION_FETCH_START" });
                try {
                    let t = await i.Bo.post({ url: o.Rsh.PARTNER_PERK(e), body: {}, rejectWithError: !0 });
                    return (
                        a.h.dispatch({ type: "PARTNER_ACTIVATION_FETCH_SUCCESS", activationStatus: t.body }), t.body
                    );
                } catch {
                    (a.h.dispatch({ type: "PARTNER_ACTIVATION_FETCH_FAILURE" }),
                        (0, n.P0)({ text: d.intl.string(d.t.F8FvUy), variant: "critical" }));
                }
            }
        },
        x6: async function (e) {
            if (!u()) {
                a.h.dispatch({ type: "PARTNER_ACTIVATION_FETCH_START" });
                try {
                    let t = await i.Bo.get({ url: o.Rsh.PARTNER_PERK_ACTIVATION_STATUS(e), rejectWithError: !0 });
                    return (
                        a.h.dispatch({ type: "PARTNER_ACTIVATION_FETCH_SUCCESS", activationStatus: t.body }), t.body
                    );
                } catch (e) {
                    10138 === new l.A(e).code
                        ? a.h.dispatch({ type: "PARTNER_ACTIVATION_RESET" })
                        : a.h.dispatch({ type: "PARTNER_ACTIVATION_FETCH_FAILURE" });
                }
            }
        },
    },
);
