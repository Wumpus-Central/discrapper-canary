"use strict";
n.d(t, { A: () => i });
var r = n(587895);
function i(e) {
    let { applicationId: t, activityConfigs: n, applications: i } = e,
        a = i?.find((e) => e.id === t) ?? r.A.getApplication(t),
        s = n.find((e) => e.application_id === t);
    return null == s || null == a ? null : { activity: s, application: a };
}
