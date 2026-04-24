n.d(t, { RB: () => A, aB: () => p, x6: () => f });
var a = n(636537),
    i = n(691540),
    r = n(857250),
    s = n(97483),
    l = n(228366),
    c = n(181658),
    o = n(545600),
    d = n(777376),
    u = n(652215),
    _ = n(985018);
function m() {
    let e = o.A.getRequestState();
    return e === d.Px.FETCHING || e === d.Px.CANCELLING;
}
async function p(e) {
    if (!m()) {
        l.h.dispatch({ type: "CROISSANT_ACTIVATION_FETCH_START" });
        try {
            let t = await a.Bo.post({ url: u.Rsh.PARTNER_PERK(e), body: {}, rejectWithError: !0 });
            return l.h.dispatch({ type: "CROISSANT_ACTIVATION_FETCH_SUCCESS", activationStatus: t.body }), t.body;
        } catch {
            l.h.dispatch({ type: "CROISSANT_ACTIVATION_FETCH_FAILURE" }),
                (0, i.P0)((0, r.o)(_.intl.string(_.t.F8FvUy), s.Ck.FAILURE));
        }
    }
}
async function f(e) {
    if (!m()) {
        l.h.dispatch({ type: "CROISSANT_ACTIVATION_FETCH_START" });
        try {
            let t = await a.Bo.get({ url: u.Rsh.PARTNER_PERK_ACTIVATION_STATUS(e), rejectWithError: !0 });
            return l.h.dispatch({ type: "CROISSANT_ACTIVATION_FETCH_SUCCESS", activationStatus: t.body }), t.body;
        } catch (e) {
            10138 === new c.A(e).code
                ? l.h.dispatch({ type: "CROISSANT_ACTIVATION_RESET" })
                : l.h.dispatch({ type: "CROISSANT_ACTIVATION_FETCH_FAILURE" });
        }
    }
}
async function A(e) {
    if (!m()) {
        l.h.dispatch({ type: "CROISSANT_CANCELLATION_START" });
        try {
            await a.Bo.del({ url: u.Rsh.PARTNER_PERK(e), rejectWithError: !0 }),
                l.h.dispatch({ type: "CROISSANT_CANCELLATION_SUCCESS" });
        } catch {
            l.h.dispatch({ type: "CROISSANT_CANCELLATION_FAILURE" }),
                (0, i.P0)((0, r.o)(_.intl.string(_.t.F8FvUy), s.Ck.FAILURE));
        }
    }
}
