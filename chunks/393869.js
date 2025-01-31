t.d(s, {
    i: () => a,
    w: () => r
});
var n = t(990547),
    l = t(573261),
    i = t(981631);
function a() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return l.Z.put({
        url: i.ANM.USER_EMAIL,
        trackedActionData: {
            event: n.NetworkActionNames.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE,
            properties: { is_resend: e }
        },
        rejectWithError: !1
    });
}
async function r(e) {
    return (
        await l.Z.post({
            url: i.ANM.USER_EMAIL_VERIFY_CODE,
            body: { code: e },
            trackedActionData: { event: n.NetworkActionNames.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE },
            rejectWithError: !1
        })
    ).body;
}
