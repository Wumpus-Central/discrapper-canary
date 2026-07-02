i.d(n, { n: () => d });
var a = i(627968),
    t = i(64700),
    c = i(192308),
    l = i(477782),
    o = i(695366),
    r = i(409626),
    s = i(375708);
function d(e, n) {
    let d = t.useCallback(() => {
        null != e &&
            (n?.(r.GameProfileTrackActionActions.Feedback),
            (0, c.openModalLazy)(async () => {
                let { default: n } = await Promise.all([
                    i.e("30593"),
                    i.e("60435"),
                    i.e("56600"),
                    i.e("8891"),
                    i.e("33771"),
                    i.e("46039"),
                    i.e("55266"),
                    i.e("27495"),
                ]).then(i.bind(i, 651930));
                return (i) => (0, a.jsx)(n, { ...i, detectedActivity: { application_id: e, name: "" } });
            }));
    }, [e, n]);
    return null == e
        ? null
        : (0, a.jsx)(l.Dr, {
              id: "game-profile-something-wrong",
              label: s.intl.string(s.t.qP2cXd),
              action: d,
              color: "danger",
              leadingAccessory: { type: "icon", icon: o.E },
          });
}
