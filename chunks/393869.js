e.d(n, {
    i: () => l,
    w: () => s,
});
var r = e(990547),
    i = e(573261),
    a = e(981631);
function l() {
    let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return i.Z.put({
        url: a.ANM.USER_EMAIL,
        trackedActionData: {
            event: r.NetworkActionNames.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE,
            properties: { is_resend: t },
        },
        rejectWithError: !1,
    });
}
async function s(t) {
    return (
        await i.Z.post({
            url: a.ANM.USER_EMAIL_VERIFY_CODE,
            body: { code: t },
            trackedActionData: { event: r.NetworkActionNames.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE },
            rejectWithError: !1,
        })
    ).body;
}
