"use strict";
n.d(t, { n: () => l });
var r = n(627968),
    i = n(64700),
    s = n(397927),
    a = n(409626),
    o = n(985018);
function l(e, t) {
    let l = i.useCallback(() => {
        null != e &&
            (t?.(a.Ws.Feedback),
            (0, s.mMO)(async () => {
                let { default: t } = await n.e("27495").then(n.bind(n, 651930));
                return (n) => (0, r.jsx)(t, { ...n, detectedActivity: { application_id: e, name: "" } });
            }));
    }, [e, t]);
    return null == e
        ? null
        : (0, r.jsx)(s.Drp, {
              id: "game-profile-something-wrong",
              label: o.intl.string(o.t.qP2cXd),
              action: l,
              color: "danger",
              leadingAccessory: { type: "icon", icon: s.EpV },
          });
}
