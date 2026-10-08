t.d(n, { f: () => d });
var l = t(477900),
    i = t(582128),
    a = t(17928),
    s = t(477782),
    o = t(534963),
    r = t(470710),
    c = t(717518),
    u = t(660183);
function d(e) {
    let n = (0, a.bG)([r.A], () => r.A.getCall(e), [e]),
        t = (0, a.bG)([c.A], () => c.A.getRegions(null));
    i.useEffect(() => {
        null == t && o.A.fetchRegions(null);
    }, [t]);
    let d = i.useMemo(
            () =>
                null != n && n.regionUpdated && null != t && null != n.region
                    ? (t.find((e) => {
                          let { id: t } = e;
                          return t === n.region;
                      }) ?? { name: n.region, id: n.region })
                    : { id: "automatic", name: u.intl.string(u.t.JEmsap) },
            [n, t],
        ),
        A = i.useCallback(
            (e) => {
                null != n && o.A.changeCallRegion(n.channelId, e.id);
            },
            [n],
        ),
        h = i.useMemo(
            () =>
                null == t || 0 === t.length
                    ? null
                    : t.map((e) => {
                          let { id: n, name: t } = e;
                          return (0, l.jsx)(
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
    return (0, l.jsx)(s.Dr, { id: "region-select", label: u.intl.string(u.t.w8gMqh), subtext: d.name, children: h });
}
