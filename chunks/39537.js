n.d(t, { $R: () => a, Rt: () => r });
var i = n(110259);
n(181658);
var s = n(499785),
    l = n(652215);
async function a() {
    let e = await s.A.get({
        url: l.Rsh.SAFETY_FLOWS_TASK,
        trackedActionData: { event: i.NetworkActionNames.USER_VERIFY },
        rejectWithError: !0,
    });
    return 204 === e.status ? null : e.body;
}
async function r(e) {
    return (
        await s.A.post({
            url: l.Rsh.SAFETY_FLOWS_TASK,
            body: e,
            trackedActionData: { event: i.NetworkActionNames.USER_VERIFY },
            rejectWithError: !0,
        })
    ).body;
}
