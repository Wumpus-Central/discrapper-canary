n.d(t, {
    i: () => i,
    w: () => l
});
var s = n(990547),
    a = n(573261),
    r = n(981631);
function i() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return a.Z.put({
        url: r.ANM.USER_EMAIL,
        trackedActionData: {
            event: s.NetworkActionNames.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE,
            properties: { is_resend: e }
        },
        rejectWithError: !1
    });
}
async function l(e) {
    return (
        await a.Z.post({
            url: r.ANM.USER_EMAIL_VERIFY_CODE,
            body: { code: e },
            trackedActionData: { event: s.NetworkActionNames.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE },
            rejectWithError: !1
        })
    ).body;
}
