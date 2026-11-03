t.d(n, { f: () => u });
var i = t(477900),
    l = t(582128),
    s = t(17928),
    a = t(477782),
    r = t(534963),
    o = t(470710),
    c = t(717518),
    d = t(105292);
function u(e) {
    let n = (0, s.bG)([o.A], () => o.A.getCall(e), [e]),
        t = (0, s.bG)([c.A], () => c.A.getRegions(null));
    l.useEffect(() => {
        null == t && r.A.fetchRegions(null);
    }, [t]);
    let u = l.useMemo(
            () =>
                null != n && n.regionUpdated && null != t && null != n.region
                    ? (t.find((e) => {
                          let { id: t } = e;
                          return t === n.region;
                      }) ?? { name: n.region, id: n.region })
                    : { id: "automatic", name: d.intl.string(d.t.JEmsap) },
            [n, t],
        ),
        A = l.useCallback(
            (e) => {
                null != n && r.A.changeCallRegion(n.channelId, e.id);
            },
            [n],
        ),
        h = l.useMemo(
            () =>
                null == t || 0 === t.length
                    ? null
                    : t.map((e) => {
                          let { id: n, name: t } = e;
                          return (0, i.jsx)(
                              a.iD,
                              {
                                  id: `region-${n}`,
                                  group: "region-select",
                                  label: t,
                                  checked: n === u.id,
                                  action: () => A(e),
                              },
                              `region-${n}`,
                          );
                      }),
            [t, u, A],
        );
    return (0, i.jsx)(a.Dr, { id: "region-select", label: d.intl.string(d.t.w8gMqh), subtext: u.name, children: h });
}
