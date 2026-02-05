n.d(t, { $R: () => l, Rt: () => r });
var a = n(110259);
n(181658);
var s = n(499785),
    i = n(652215);
async function l() {
    let e = await s.A.get({
        url: i.Rsh.SAFETY_FLOWS_TASK,
        trackedActionData: { event: a.NetworkActionNames.USER_VERIFY },
        rejectWithError: !0,
    });
    return 204 === e.status ? null : e.body;
}
async function r(e) {
    return (
        await s.A.post({
            url: i.Rsh.SAFETY_FLOWS_TASK,
            body: e,
            trackedActionData: { event: a.NetworkActionNames.USER_VERIFY },
            rejectWithError: !0,
        })
    ).body;
}
