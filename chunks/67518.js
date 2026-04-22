n.d(t, { n: () => c });
var a = n(627968),
    l = n(64700),
    i = n(192308),
    r = n(477782),
    s = n(695366),
    o = n(409626),
    d = n(985018);
function c(e, t) {
    let c = l.useCallback(() => {
        null != e &&
            (t?.(o.Ws.Feedback),
            (0, i.openModalLazy)(async () => {
                let { default: t } = await n.e("49876").then(n.bind(n, 651930));
                return (n) => (0, a.jsx)(t, { ...n, detectedActivity: { application_id: e, name: "" } });
            }));
    }, [e, t]);
    return null == e
        ? null
        : (0, a.jsx)(r.Dr, {
              id: "game-profile-something-wrong",
              label: d.intl.string(d.t.qP2cXd),
              action: c,
              color: "danger",
              leadingAccessory: { type: "icon", icon: s.E },
          });
}
