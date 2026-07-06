s.d(t, { RB: () => h, aB: () => x, x6: () => p });
var i = s(636537),
    n = s(691540),
    a = s(857250),
    l = s(97483),
    r = s(228366),
    c = s(181658),
    o = s(919466),
    d = s(297966),
    u = s(652215),
    m = s(375708);
function g() {
    let e = o.A.getRequestState();
    return e === d.db.FETCHING || e === d.db.CANCELLING;
}
async function x(e) {
    if (!g()) {
        r.h.dispatch({ type: "PARTNER_ACTIVATION_FETCH_START" });
        try {
            let t = await i.Bo.post({ url: u.Rsh.PARTNER_PERK(e), body: {}, rejectWithError: !0 });
            return r.h.dispatch({ type: "PARTNER_ACTIVATION_FETCH_SUCCESS", activationStatus: t.body }), t.body;
        } catch {
            r.h.dispatch({ type: "PARTNER_ACTIVATION_FETCH_FAILURE" }),
                (0, n.P0)((0, a.o)(m.intl.string(m.t.F8FvUy), l.Ck.FAILURE));
        }
    }
}
async function p(e) {
    if (!g()) {
        r.h.dispatch({ type: "PARTNER_ACTIVATION_FETCH_START" });
        try {
            let t = await i.Bo.get({ url: u.Rsh.PARTNER_PERK_ACTIVATION_STATUS(e), rejectWithError: !0 });
            return r.h.dispatch({ type: "PARTNER_ACTIVATION_FETCH_SUCCESS", activationStatus: t.body }), t.body;
        } catch (e) {
            10138 === new c.A(e).code
                ? r.h.dispatch({ type: "PARTNER_ACTIVATION_RESET" })
                : r.h.dispatch({ type: "PARTNER_ACTIVATION_FETCH_FAILURE" });
        }
    }
}
async function h(e) {
    if (!g()) {
        r.h.dispatch({ type: "PARTNER_CANCELLATION_START" });
        try {
            await i.Bo.del({ url: u.Rsh.PARTNER_PERK(e), rejectWithError: !0 }),
                r.h.dispatch({ type: "PARTNER_CANCELLATION_SUCCESS" });
        } catch {
            r.h.dispatch({ type: "PARTNER_CANCELLATION_FAILURE" }),
                (0, n.P0)((0, a.o)(m.intl.string(m.t.F8FvUy), l.Ck.FAILURE));
        }
    }
}
