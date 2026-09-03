n.d(t, { A: () => r });
var i = n(587895);
function r(e) {
    let { applicationId: t, activityConfigs: n, applications: r } = e,
        a = r?.find((e) => e.id === t) ?? i.A.getApplication(t),
        s = n.find((e) => e.application_id === t);
    return null == s || null == a ? null : { activity: s, application: a };
}
