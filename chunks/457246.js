"use strict";
n.d(t, { f: () => u });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(397927),
    a = n(534963),
    o = n(470710),
    c = n(717518),
    d = n(985018);
function u(e) {
    let t = (0, l.bG)([o.A], () => o.A.getCall(e), [e]),
        n = (0, l.bG)([c.A], () => c.A.getRegions(null));
    s.useEffect(() => {
        null == n && a.A.fetchRegions(null);
    }, [n]);
    let u = s.useMemo(
            () =>
                null != t && t.regionUpdated && null != n && null != t.region
                    ? (n.find((e) => {
                          let { id: n } = e;
                          return n === t.region;
                      }) ?? { name: t.region, id: t.region })
                    : { id: "automatic", name: d.intl.string(d.t.JEmsap) },
            [t, n],
        ),
        h = s.useCallback(
            (e) => {
                null != t && a.A.changeCallRegion(t.channelId, e.id);
            },
            [t],
        ),
        A = s.useMemo(
            () =>
                null == n || 0 === n.length
                    ? null
                    : n.map((e) => {
                          let { id: t, name: n } = e;
                          return (0, i.jsx)(
                              r.iDA,
                              {
                                  id: `region-${t}`,
                                  group: "region-select",
                                  label: n,
                                  checked: t === u.id,
                                  action: () => h(e),
                              },
                              `region-${t}`,
                          );
                      }),
            [n, u, h],
        );
    return (0, i.jsx)(r.Drp, { id: "region-select", label: d.intl.string(d.t.w8gMqh), subtext: u.name, children: A });
}
