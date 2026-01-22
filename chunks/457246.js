n.d(t, { f: () => d });
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(397927),
    s = n(534963),
    o = n(470710),
    c = n(717518),
    u = n(985018);
function d(e) {
    let t = (0, i.bG)([o.A], () => o.A.getCall(e), [e]),
        n = (0, i.bG)([c.A], () => c.A.getRegions(null));
    l.useEffect(() => {
        null == n && s.A.fetchRegions(null);
    }, [n]);
    let d = l.useMemo(() => {
            var e;
            return null != t && t.regionUpdated && null != n && null != t.region
                ? null !=
                  (e = n.find((e) => {
                      let { id: n } = e;
                      return n === t.region;
                  }))
                    ? e
                    : {
                          name: t.region,
                          id: t.region,
                      }
                : {
                      id: "automatic",
                      name: u.intl.string(u.t.JEmsap),
                  };
        }, [t, n]),
        f = l.useCallback(
            (e) => {
                null != t && s.A.changeCallRegion(t.channelId, e.id);
            },
            [t],
        ),
        p = l.useMemo(
            () =>
                null == n || 0 === n.length
                    ? null
                    : n.map((e) => {
                          let { id: t, name: n } = e;
                          return (0, r.jsx)(
                              a.iDA,
                              {
                                  id: "region-".concat(t),
                                  group: "region-select",
                                  label: n,
                                  checked: t === d.id,
                                  action: () => f(e),
                              },
                              "region-".concat(t),
                          );
                      }),
            [n, d, f],
        );
    return (0, r.jsx)(a.Drp, {
        id: "region-select",
        label: u.intl.string(u.t.w8gMqh),
        subtext: d.name,
        children: p,
    });
}
