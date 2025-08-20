n.d(t, {
    i: () => i,
    w: () => l,
});
var a = n(990547),
    s = n(573261),
    r = n(981631);
function i() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return s.Z.put({
        url: r.ANM.USER_EMAIL,
        trackedActionData: {
            event: a.NetworkActionNames.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE,
            properties: { is_resend: e },
        },
        rejectWithError: !1,
    });
}
async function l(e) {
    return (
        await s.Z.post({
            url: r.ANM.USER_EMAIL_VERIFY_CODE,
            body: { code: e },
            trackedActionData: { event: a.NetworkActionNames.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE },
            rejectWithError: !1,
        })
    ).body;
}
