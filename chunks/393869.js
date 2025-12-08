e.d(n, {
    i: () => l,
    w: () => s,
});
var a = e(990547),
    r = e(573261),
    i = e(981631);
function l() {
    let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return r.Z.put({
        url: i.ANM.USER_EMAIL,
        trackedActionData: {
            event: a.NetworkActionNames.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE,
            properties: { is_resend: t },
        },
        rejectWithError: !1,
    });
}
async function s(t) {
    return (
        await r.Z.post({
            url: i.ANM.USER_EMAIL_VERIFY_CODE,
            body: { code: t },
            trackedActionData: { event: a.NetworkActionNames.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE },
            rejectWithError: !1,
        })
    ).body;
}
