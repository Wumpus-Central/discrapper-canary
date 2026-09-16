t.d(n, { f: () => d });
var i = t(477900),
    l = t(582128),
    a = t(17928),
    s = t(477782),
    o = t(534963),
    r = t(470710),
    c = t(717518),
    u = t(375708);
function d(e) {
    let n = (0, a.bG)([r.A], () => r.A.getCall(e), [e]),
        t = (0, a.bG)([c.A], () => c.A.getRegions(null));
    l.useEffect(() => {
        null == t && o.A.fetchRegions(null);
    }, [t]);
    let d = l.useMemo(
            () =>
                null != n && n.regionUpdated && null != t && null != n.region
                    ? (t.find((e) => {
                          let { id: t } = e;
                          return t === n.region;
                      }) ?? { name: n.region, id: n.region })
                    : { id: "automatic", name: u.intl.string(u.t.JEmsap) },
            [n, t],
        ),
        A = l.useCallback(
            (e) => {
                null != n && o.A.changeCallRegion(n.channelId, e.id);
            },
            [n],
        ),
        m = l.useMemo(
            () =>
                null == t || 0 === t.length
                    ? null
                    : t.map((e) => {
                          let { id: n, name: t } = e;
                          return (0, i.jsx)(
                              s.iD,
                              {
                                  id: `region-${n}`,
                                  group: "region-select",
                                  label: t,
                                  checked: n === d.id,
                                  action: () => A(e),
                              },
                              `region-${n}`,
                          );
                      }),
            [t, d, A],
        );
    return (0, i.jsx)(s.Dr, { id: "region-select", label: u.intl.string(u.t.w8gMqh), subtext: d.name, children: m });
}
