"use strict";
n.d(t, { n: () => s });
var r = n(627968),
    i = n(397927),
    a = n(985018);
function s(e) {
    if (null == e) return null;
    let t = () =>
        (0, i.mMO)(async () => {
            let { default: t } = await n.e("27495").then(n.bind(n, 651930));
            return (n) => (0, r.jsx)(t, { ...n, detectedActivity: { application_id: e, name: "" } });
        });
    return (0, r.jsx)(i.Drp, {
        id: "game-profile-something-wrong",
        label: a.intl.string(a.t.qP2cXd),
        action: t,
        color: "danger",
        leadingAccessory: { type: "icon", icon: i.EpV },
    });
}
