n.d(t, {
    $R: () => r,
    Rt: () => s,
});
var a = n(110259);
n(181658);
var l = n(499785),
    i = n(652215);
async function r() {
    let e = await l.A.get({
        url: i.Rsh.SAFETY_FLOWS_TASK,
        trackedActionData: { event: a.NetworkActionNames.USER_VERIFY },
        rejectWithError: !0,
    });
    return 204 === e.status ? null : e.body;
}
async function s(e) {
    return (
        await l.A.post({
            url: i.Rsh.SAFETY_FLOWS_TASK,
            body: e,
            trackedActionData: { event: a.NetworkActionNames.USER_VERIFY },
            rejectWithError: !0,
        })
    ).body;
}
