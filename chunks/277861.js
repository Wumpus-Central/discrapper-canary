"use strict";
n.d(t, { Vq: () => h, a6: () => A });
var i = n(636537),
    r = n(381689),
    a = n(927813),
    s = n(379257),
    l = n(652215),
    o = n(835002);
let d = a.A.Millis.MINUTE;
async function c() {
    return (await i.Bo.post({ url: l.Rsh.AGE_VERIFICATION_MANUAL_REVIEW, rejectWithError: !0 })).body;
}
let u = !1,
    _ = null,
    E = 0;
function A() {
    _ = null;
}
async function h() {
    if (!u) {
        u = !0;
        try {
            let e = _;
            if (
                ((null == e || Date.now() - E >= d) && ((_ = e = await c()), (E = Date.now())),
                "decided_teen" === e.status)
            )
                return void s.A.showManualReviewDecidedTeenModal();
            s.A.showManualReviewWebview(e.verification_webview_url);
        } catch {
            r.A.showFailedToast(o.OB.TIGGER_PAWTECT_ERROR);
        } finally {
            u = !1;
        }
    }
}
