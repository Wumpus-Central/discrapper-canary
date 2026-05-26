"use strict";
n.d(t, { RB: () => E, aB: () => h, x6: () => p });
var i = n(636537),
    r = n(691540),
    s = n(857250),
    a = n(97483),
    o = n(228366),
    l = n(181658),
    u = n(545600),
    c = n(777376),
    d = n(652215),
    _ = n(375708);
function f() {
    let e = u.A.getRequestState();
    return e === c.Px.FETCHING || e === c.Px.CANCELLING;
}
async function h(e) {
    if (!f()) {
        o.h.dispatch({ type: "CROISSANT_ACTIVATION_FETCH_START" });
        try {
            let t = await i.Bo.post({ url: d.Rsh.PARTNER_PERK(e), body: {}, rejectWithError: !0 });
            return o.h.dispatch({ type: "CROISSANT_ACTIVATION_FETCH_SUCCESS", activationStatus: t.body }), t.body;
        } catch {
            o.h.dispatch({ type: "CROISSANT_ACTIVATION_FETCH_FAILURE" }),
                (0, r.P0)((0, s.o)(_.intl.string(_.t.F8FvUy), a.Ck.FAILURE));
        }
    }
}
async function p(e) {
    if (!f()) {
        o.h.dispatch({ type: "CROISSANT_ACTIVATION_FETCH_START" });
        try {
            let t = await i.Bo.get({ url: d.Rsh.PARTNER_PERK_ACTIVATION_STATUS(e), rejectWithError: !0 });
            return o.h.dispatch({ type: "CROISSANT_ACTIVATION_FETCH_SUCCESS", activationStatus: t.body }), t.body;
        } catch (e) {
            10138 === new l.A(e).code
                ? o.h.dispatch({ type: "CROISSANT_ACTIVATION_RESET" })
                : o.h.dispatch({ type: "CROISSANT_ACTIVATION_FETCH_FAILURE" });
        }
    }
}
async function E(e) {
    if (!f()) {
        o.h.dispatch({ type: "CROISSANT_CANCELLATION_START" });
        try {
            await i.Bo.del({ url: d.Rsh.PARTNER_PERK(e), rejectWithError: !0 }),
                o.h.dispatch({ type: "CROISSANT_CANCELLATION_SUCCESS" });
        } catch {
            o.h.dispatch({ type: "CROISSANT_CANCELLATION_FAILURE" }),
                (0, r.P0)((0, s.o)(_.intl.string(_.t.F8FvUy), a.Ck.FAILURE));
        }
    }
}
