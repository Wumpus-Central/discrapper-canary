n.d(t, { Vq: () => m, a6: () => p, xf: () => T });
var i = n(636537),
    r = n(228366),
    a = n(381689),
    s = n(393033),
    l = n(280450),
    o = n(927813),
    d = n(379257),
    c = n(652215),
    u = n(835002);
let _ = o.A.Millis.MINUTE;
async function E() {
    return (await i.Bo.post({ url: c.Rsh.AGE_VERIFICATION_MANUAL_REVIEW, rejectWithError: !0 })).body;
}
async function A() {
    let e = l.default.getSuspendedUserToken();
    return (
        await i.Bo.post({
            url: c.Rsh.AGE_VERIFICATION_SUSPENDED_MANUAL_REVIEW,
            body: { token: e },
            rejectWithError: !0,
        })
    ).body;
}
let h = !1,
    I = null,
    f = 0;
function p() {
    I = null;
}
function T() {
    (p(), r.h.dispatch({ type: "AGE_VERIFICATION_METHODS_V2_INVALIDATE" }));
}
async function m() {
    if (!h) {
        h = !0;
        try {
            let e = I;
            if (
                ((null == e || Date.now() - f >= _) && ((I = e = await ((0, s.qn)() ? A() : E())), (f = Date.now())),
                "submitted" === e.status)
            )
                return void d.A.showManualReviewPendingModal();
            if ("decided_teen" === e.status) return void d.A.showManualReviewDecidedTeenModal(e.teen_age_range);
            d.A.showManualReviewWebview(e.verification_webview_url, () => {
                (0, s.qn)() && T();
            });
        } catch {
            a.A.showFailedToast(u.OB.TIGGER_PAWTECT_ERROR);
        } finally {
            h = !1;
        }
    }
}
