n.d(t, { RB: () => I, aB: () => _, x6: () => T });
var i = n(636537),
    l = n(691540),
    r = n(857250),
    s = n(97483),
    a = n(228366),
    c = n(181658),
    o = n(545600),
    d = n(777376),
    u = n(652215),
    E = n(375708);
function A() {
    let e = o.A.getRequestState();
    return e === d.Px.FETCHING || e === d.Px.CANCELLING;
}
async function _(e) {
    if (!A()) {
        a.h.dispatch({ type: "CROISSANT_ACTIVATION_FETCH_START" });
        try {
            let t = await i.Bo.post({ url: u.Rsh.PARTNER_PERK(e), body: {}, rejectWithError: !0 });
            return a.h.dispatch({ type: "CROISSANT_ACTIVATION_FETCH_SUCCESS", activationStatus: t.body }), t.body;
        } catch {
            a.h.dispatch({ type: "CROISSANT_ACTIVATION_FETCH_FAILURE" }),
                (0, l.P0)((0, r.o)(E.intl.string(E.t.F8FvUy), s.Ck.FAILURE));
        }
    }
}
async function T(e) {
    if (!A()) {
        a.h.dispatch({ type: "CROISSANT_ACTIVATION_FETCH_START" });
        try {
            let t = await i.Bo.get({ url: u.Rsh.PARTNER_PERK_ACTIVATION_STATUS(e), rejectWithError: !0 });
            return a.h.dispatch({ type: "CROISSANT_ACTIVATION_FETCH_SUCCESS", activationStatus: t.body }), t.body;
        } catch (e) {
            10138 === new c.A(e).code
                ? a.h.dispatch({ type: "CROISSANT_ACTIVATION_RESET" })
                : a.h.dispatch({ type: "CROISSANT_ACTIVATION_FETCH_FAILURE" });
        }
    }
}
async function I(e) {
    if (!A()) {
        a.h.dispatch({ type: "CROISSANT_CANCELLATION_START" });
        try {
            await i.Bo.del({ url: u.Rsh.PARTNER_PERK(e), rejectWithError: !0 }),
                a.h.dispatch({ type: "CROISSANT_CANCELLATION_SUCCESS" });
        } catch {
            a.h.dispatch({ type: "CROISSANT_CANCELLATION_FAILURE" }),
                (0, l.P0)((0, r.o)(E.intl.string(E.t.F8FvUy), s.Ck.FAILURE));
        }
    }
}
