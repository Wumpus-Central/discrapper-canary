var a = t(582128),
    n = t(855986),
    o = t(73153),
    r = t(662502),
    s = t(287809),
    c = t(871309),
    l = t(295972),
    d = t(652215),
    u = t(835002);
function A(e) {
    let { onComplete: i, entryPoint: t, shouldShowExpressiveModal: l = !1, onMethodUnavailable: A } = e,
        [I, _] = a.useState(!1),
        E = (0, n.bG)([s.default], () => s.default.getCurrentUser()),
        { current: h } = a.useRef(E?.ageVerificationStatus),
        f = a.useCallback(() => {
            o.h.dispatch({ type: "CLOSE_AGE_VERIFICATION_MODAL", status: h });
        }, [h]);
    return {
        loading: I,
        startVerification: a.useCallback(
            async (e, a) => {
                _(!0);
                try {
                    o.h.dispatch({ type: "INITIATE_AGE_VERIFICATION" });
                    let n = await e(),
                        s = c.A.showAgeVerification({
                            method: a?.method,
                            externalWindow: a?.externalWindow,
                            webviewUrl: n.verification_webview_url,
                            verificationRequestId: n.verification_request_id,
                            verificationVendorName: n.verification_vendor_name,
                            incodeParameters: n.incode_parameters,
                            onComplete: i,
                            onClose: f,
                            onCancel: f,
                            entryPoint: t,
                            shouldShowExpressiveModal: l,
                        });
                    !1 === s && (r.A.showFailedToast(u.OB.AGE_VERIFICATION_ERROR), f());
                } catch (e) {
                    (f(),
                        null != A && e?.body?.code === d.t02.AGE_VERIFICATION_METHOD_UNAVAILABLE
                            ? (r.A.showFailedToast(u.OB.AGE_VERIFICATION_METHOD_UNAVAILABLE), A())
                            : r.A.showFailedToast(u.OB.AGE_VERIFICATION_ERROR));
                } finally {
                    _(!1);
                }
            },
            [i, f, l, t, A],
        ),
    };
}
t.d(
    i,
    {},
    {
        N: function (e) {
            let { onComplete: i, entryPoint: t, onMethodUnavailable: n } = e,
                { loading: o, startVerification: r } = A({
                    onComplete: i,
                    entryPoint: t,
                    shouldShowExpressiveModal: !0,
                    onMethodUnavailable: n,
                });
            return {
                loading: o,
                initiateAgeVerificationV2: a.useCallback((e) => r(() => (0, l.en)(e.method, e.vendor), e), [r]),
            };
        },
        n: function (e) {
            let { onComplete: i, entryPoint: t, shouldShowExpressiveModal: n = !1, classificationId: o = null } = e,
                { loading: r, startVerification: s } = A({
                    onComplete: i,
                    entryPoint: t,
                    shouldShowExpressiveModal: n,
                });
            return {
                loading: r,
                initiateAgeVerification: a.useCallback(
                    (e, i) => s(() => (0, l.uf)({ method: e, classificationId: o ?? void 0, vendor: i })),
                    [s, o],
                ),
            };
        },
    },
);
