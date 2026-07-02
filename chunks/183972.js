n.d(t, { RB: () => p, aB: () => g, x6: () => N });
var i = n(636537),
    a = n(691540),
    s = n(857250),
    r = n(97483),
    l = n(228366),
    c = n(181658),
    o = n(919466),
    d = n(297966),
    u = n(652215),
    m = n(375708);
function A() {
    let e = o.A.getRequestState();
    return e === d.db.FETCHING || e === d.db.CANCELLING;
}
async function g(e) {
    if (!A()) {
        l.h.dispatch({ type: "PARTNER_ACTIVATION_FETCH_START" });
        try {
            let t = await i.Bo.post({ url: u.Rsh.PARTNER_PERK(e), body: {}, rejectWithError: !0 });
            return l.h.dispatch({ type: "PARTNER_ACTIVATION_FETCH_SUCCESS", activationStatus: t.body }), t.body;
        } catch {
            l.h.dispatch({ type: "PARTNER_ACTIVATION_FETCH_FAILURE" }),
                (0, a.P0)((0, s.o)(m.intl.string(m.t.F8FvUy), r.Ck.FAILURE));
        }
    }
}
async function N(e) {
    if (!A()) {
        l.h.dispatch({ type: "PARTNER_ACTIVATION_FETCH_START" });
        try {
            let t = await i.Bo.get({ url: u.Rsh.PARTNER_PERK_ACTIVATION_STATUS(e), rejectWithError: !0 });
            return l.h.dispatch({ type: "PARTNER_ACTIVATION_FETCH_SUCCESS", activationStatus: t.body }), t.body;
        } catch (e) {
            10138 === new c.A(e).code
                ? l.h.dispatch({ type: "PARTNER_ACTIVATION_RESET" })
                : l.h.dispatch({ type: "PARTNER_ACTIVATION_FETCH_FAILURE" });
        }
    }
}
async function p(e) {
    if (!A()) {
        l.h.dispatch({ type: "PARTNER_CANCELLATION_START" });
        try {
            await i.Bo.del({ url: u.Rsh.PARTNER_PERK(e), rejectWithError: !0 }),
                l.h.dispatch({ type: "PARTNER_CANCELLATION_SUCCESS" });
        } catch {
            l.h.dispatch({ type: "PARTNER_CANCELLATION_FAILURE" }),
                (0, a.P0)((0, s.o)(m.intl.string(m.t.F8FvUy), r.Ck.FAILURE));
        }
    }
}
