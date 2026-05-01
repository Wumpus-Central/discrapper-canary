i.d(t, { RB: () => x, aB: () => p, x6: () => g });
var s = i(636537),
    a = i(691540),
    n = i(857250),
    r = i(97483),
    l = i(228366),
    c = i(181658),
    d = i(545600),
    o = i(777376),
    u = i(652215),
    m = i(985018);
function A() {
    let e = d.A.getRequestState();
    return e === o.Px.FETCHING || e === o.Px.CANCELLING;
}
async function p(e) {
    if (!A()) {
        l.h.dispatch({ type: "CROISSANT_ACTIVATION_FETCH_START" });
        try {
            let t = await s.Bo.post({ url: u.Rsh.PARTNER_PERK(e), body: {}, rejectWithError: !0 });
            return l.h.dispatch({ type: "CROISSANT_ACTIVATION_FETCH_SUCCESS", activationStatus: t.body }), t.body;
        } catch {
            l.h.dispatch({ type: "CROISSANT_ACTIVATION_FETCH_FAILURE" }),
                (0, a.P0)((0, n.o)(m.intl.string(m.t.F8FvUy), r.Ck.FAILURE));
        }
    }
}
async function g(e) {
    if (!A()) {
        l.h.dispatch({ type: "CROISSANT_ACTIVATION_FETCH_START" });
        try {
            let t = await s.Bo.get({ url: u.Rsh.PARTNER_PERK_ACTIVATION_STATUS(e), rejectWithError: !0 });
            return l.h.dispatch({ type: "CROISSANT_ACTIVATION_FETCH_SUCCESS", activationStatus: t.body }), t.body;
        } catch (e) {
            10138 === new c.A(e).code
                ? l.h.dispatch({ type: "CROISSANT_ACTIVATION_RESET" })
                : l.h.dispatch({ type: "CROISSANT_ACTIVATION_FETCH_FAILURE" });
        }
    }
}
async function x(e) {
    if (!A()) {
        l.h.dispatch({ type: "CROISSANT_CANCELLATION_START" });
        try {
            await s.Bo.del({ url: u.Rsh.PARTNER_PERK(e), rejectWithError: !0 }),
                l.h.dispatch({ type: "CROISSANT_CANCELLATION_SUCCESS" });
        } catch {
            l.h.dispatch({ type: "CROISSANT_CANCELLATION_FAILURE" }),
                (0, a.P0)((0, n.o)(m.intl.string(m.t.F8FvUy), r.Ck.FAILURE));
        }
    }
}
