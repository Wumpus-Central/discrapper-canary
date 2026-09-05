n.d(t, { Vq: () => p, a6: () => f });
var i = n(636537),
    r = n(381689),
    a = n(393033),
    s = n(280450),
    l = n(927813),
    o = n(379257),
    d = n(652215),
    c = n(835002);
let u = l.A.Millis.MINUTE;
async function _() {
    return (await i.Bo.post({ url: d.Rsh.AGE_VERIFICATION_MANUAL_REVIEW, rejectWithError: !0 })).body;
}
async function E() {
    let e = s.default.getSuspendedUserToken();
    return (
        await i.Bo.post({
            url: d.Rsh.AGE_VERIFICATION_SUSPENDED_MANUAL_REVIEW,
            body: { token: e },
            rejectWithError: !0,
        })
    ).body;
}
let A = !1,
    h = null,
    I = 0;
function f() {
    h = null;
}
async function p() {
    if (!A) {
        A = !0;
        try {
            let e = h;
            if (
                ((null == e || Date.now() - I >= u) && ((h = e = await ((0, a.qn)() ? E() : _())), (I = Date.now())),
                "decided_teen" === e.status)
            )
                return void o.A.showManualReviewDecidedTeenModal();
            o.A.showManualReviewWebview(e.verification_webview_url);
        } catch {
            r.A.showFailedToast(c.OB.TIGGER_PAWTECT_ERROR);
        } finally {
            A = !1;
        }
    }
}
