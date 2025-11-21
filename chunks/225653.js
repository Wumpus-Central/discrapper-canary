n.d(t, { m: () => d });
var i = n(54381),
    r = n(473749),
    l = n(442837),
    a = n(481060),
    o = n(771340),
    s = n(523746),
    c = n(903223),
    u = n(388032);
function d(e) {
    let t = (0, l.e7)([s.Z], () => s.Z.getCall(e), [e]),
        n = (0, l.e7)([c.Z], () => c.Z.getRegions(null));
    r.useEffect(() => {
        null == n && o.Z.fetchRegions(null);
    }, [n]);
    let d = r.useMemo(() => {
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
        p = r.useCallback(
            (e) => {
                null != t && o.Z.changeCallRegion(t.channelId, e.id);
            },
            [t],
        ),
        h = r.useMemo(
            () =>
                null == n || 0 === n.length
                    ? null
                    : n.map((e) => {
                          let { id: t, name: n } = e;
                          return (0, i.jsx)(
                              a.k5B,
                              {
                                  id: "region-".concat(t),
                                  group: "region-select",
                                  label: n,
                                  checked: t === d.id,
                                  action: () => p(e),
                              },
                              "region-".concat(t),
                          );
                      }),
            [n, d, p],
        );
    return (0, i.jsx)(a.sNh, {
        id: "region-select",
        label: u.intl.string(u.t.w8gMqh),
        subtext: d.name,
        children: h,
    });
}
