"use strict";
n.d(t, { n: () => d });
var a = n(627968),
    i = n(64700),
    l = n(192308),
    r = n(477782),
    s = n(695366),
    c = n(409626),
    o = n(985018);
function d(e, t) {
    let d = i.useCallback(() => {
        null != e &&
            (t?.(c.Ws.Feedback),
            (0, l.openModalLazy)(async () => {
                let { default: t } = await n.e("49876").then(n.bind(n, 651930));
                return (n) => (0, a.jsx)(t, { ...n, detectedActivity: { application_id: e, name: "" } });
            }));
    }, [e, t]);
    return null == e
        ? null
        : (0, a.jsx)(r.Dr, {
              id: "game-profile-something-wrong",
              label: o.intl.string(o.t.qP2cXd),
              action: d,
              color: "danger",
              leadingAccessory: { type: "icon", icon: s.E },
          });
}
