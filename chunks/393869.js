t.d(s, {
    i: () => l,
    w: () => o
});
var n = t(990547),
    r = t(573261),
    a = t(981631);
function l() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return r.Z.put({
        url: a.ANM.USER_EMAIL,
        trackedActionData: {
            event: n.NetworkActionNames.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE,
            properties: { is_resend: e }
        },
        rejectWithError: !1
    });
}
async function o(e) {
    return (
        await r.Z.post({
            url: a.ANM.USER_EMAIL_VERIFY_CODE,
            body: { code: e },
            trackedActionData: { event: n.NetworkActionNames.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE },
            rejectWithError: !1
        })
    ).body;
}
