var i = n(620632),
    r = n(73153),
    a = n(662502),
    s = n(393033),
    l = n(46653),
    o = n(927813),
    d = n(871309),
    c = n(652215),
    u = n(835002);
let _ = o.A.Millis.MINUTE,
    E = !1,
    A = null,
    f = 0;
function h() {
    A = null;
}
function I() {
    (h(), r.h.dispatch({ type: "AGE_VERIFICATION_METHODS_V2_INVALIDATE" }));
}
n.d(
    t,
    {},
    {
        Vq: async function () {
            if (!E) {
                E = !0;
                try {
                    let e = A;
                    if (
                        ((null == e || Date.now() - f >= _) &&
                            ((A = e =
                                await ((0, s.qn)()
                                    ? (async function () {
                                          let e = l.default.getSuspendedUserToken();
                                          return (
                                              await i.Bo.post({
                                                  url: c.Rsh.AGE_VERIFICATION_SUSPENDED_MANUAL_REVIEW,
                                                  body: { token: e },
                                                  rejectWithError: !0,
                                              })
                                          ).body;
                                      })()
                                    : (async function () {
                                          return (
                                              await i.Bo.post({
                                                  url: c.Rsh.AGE_VERIFICATION_MANUAL_REVIEW,
                                                  rejectWithError: !0,
                                              })
                                          ).body;
                                      })())),
                            (f = Date.now())),
                        "submitted" === e.status)
                    )
                        return void d.A.showManualReviewPendingModal();
                    if ("decided_teen" === e.status) return void d.A.showManualReviewDecidedTeenModal(e.teen_age_range);
                    d.A.showManualReviewWebview(e.verification_webview_url, () => {
                        (0, s.qn)() && I();
                    });
                } catch {
                    a.A.showFailedToast(u.OB.AGE_VERIFICATION_ERROR);
                } finally {
                    E = !1;
                }
            }
        },
        a6: h,
        xf: I,
    },
);
