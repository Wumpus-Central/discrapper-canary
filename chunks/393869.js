n.d(t, {
    i: () => i,
    w: () => a
});
var s = n(990547),
    r = n(573261),
    l = n(981631);
function i() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return r.Z.put({
        url: l.ANM.USER_EMAIL,
        trackedActionData: {
            event: s.NetworkActionNames.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE,
            properties: { is_resend: e }
        },
        rejectWithError: !1
    });
}
async function a(e) {
    return (
        await r.Z.post({
            url: l.ANM.USER_EMAIL_VERIFY_CODE,
            body: { code: e },
            trackedActionData: { event: s.NetworkActionNames.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE },
            rejectWithError: !1
        })
    ).body;
}
