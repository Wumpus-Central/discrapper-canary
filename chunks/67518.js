"use strict";
n.d(t, { n: () => c });
var i = n(627968),
    r = n(64700),
    s = n(192308),
    a = n(477782),
    o = n(695366),
    l = n(409626),
    u = n(375708);
function c(e, t) {
    let c = r.useCallback(() => {
        null != e &&
            (t?.(l.Ws.Feedback),
            (0, s.openModalLazy)(async () => {
                let { default: t } = await Promise.all([
                    n.e("8802"),
                    n.e("8516"),
                    n.e("19397"),
                    n.e("56600"),
                    n.e("34530"),
                    n.e("8891"),
                    n.e("33771"),
                    n.e("46039"),
                    n.e("55266"),
                    n.e("27495"),
                ]).then(n.bind(n, 651930));
                return (n) => (0, i.jsx)(t, { ...n, detectedActivity: { application_id: e, name: "" } });
            }));
    }, [e, t]);
    return null == e
        ? null
        : (0, i.jsx)(a.Dr, {
              id: "game-profile-something-wrong",
              label: u.intl.string(u.t.qP2cXd),
              action: c,
              color: "danger",
              leadingAccessory: { type: "icon", icon: o.E },
          });
}
