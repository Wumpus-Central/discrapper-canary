n.d(e, { u: () => d }), n(539854), n(388685);
var i = n(54381),
    l = n(473749),
    s = n(512722),
    u = n.n(s),
    r = n(59662),
    a = n(28682),
    o = n(388032);
function S(t) {
    let { title: e } = t;
    return e;
}
function T(t) {
    let { useTitle: e, settingKey: n, formatter: i, index: l } = t,
        s = e();
    return "string" == typeof s
        ? i({
              title: s,
              index: l,
              key: n,
          })
        : s;
}
function c(t) {
    let { setting: e, formatter: n, index: l } = t;
    return () =>
        (0, i.jsx)(
            T,
            {
                useTitle: e.useTitle,
                settingKey: e.key,
                formatter: n,
                index: l,
            },
            e.key,
        );
}
function E(t) {
    return t.type === a.Jq.LIST;
}
function d(t, e) {
    var n, i;
    let { limit: s = 2, formatter: T = S } = null != e ? e : {};
    u()(s > 0, "[useSettingCollapsibleSubtitle] Limit must be greater than 0");
    let { visibleDirectory: d, accessibleDirectory: g } = (0, r.t)(),
        _ = null != (n = d.get(t)) ? n : g.get(t);
    u()(
        null != _ && (_.type === a.Jq.ACCORDION || E(_)),
        "[useSettingCollapsibleSubtitle] Node is not a collapsible settings node",
    );
    let I = E(_) && null != (i = _.collapseAfter) ? i : 0,
        N = _.layout;
    return l.useMemo(() => {
        let t = I,
            e = [];
        for (let n of N)
            if ("useTitle" in n && null != n.useTitle) {
                if (t > 0) {
                    t--;
                    continue;
                }
                e.push({
                    key: n.key,
                    useTitle: n.useTitle,
                });
            }
        if (0 === e.length) return "";
        let n = Math.min(s, 3);
        if (e.length <= n)
            if (1 === e.length)
                return o.intl.format(o.t["3H9tCW"], {
                    settingOneHook: c({
                        setting: e[0],
                        formatter: T,
                        index: 0,
                    }),
                });
            else if (2 === e.length)
                return o.intl.format(o.t.MWryo6, {
                    settingOneHook: c({
                        setting: e[0],
                        formatter: T,
                        index: 0,
                    }),
                    settingTwoHook: c({
                        setting: e[1],
                        formatter: T,
                        index: 1,
                    }),
                });
            else
                return o.intl.format(o.t.a00b5G, {
                    settingOneHook: c({
                        setting: e[0],
                        formatter: T,
                        index: 0,
                    }),
                    settingTwoHook: c({
                        setting: e[1],
                        formatter: T,
                        index: 1,
                    }),
                    settingThreeHook: c({
                        setting: e[2],
                        formatter: T,
                        index: 2,
                    }),
                });
        return 1 === n
            ? o.intl.format(o.t.O8vNbS, {
                  settingOneHook: c({
                      setting: e[0],
                      formatter: T,
                      index: 0,
                  }),
              })
            : 2 === n
              ? o.intl.format(o.t["acXG/W"], {
                    settingOneHook: c({
                        setting: e[0],
                        formatter: T,
                        index: 0,
                    }),
                    settingTwoHook: c({
                        setting: e[1],
                        formatter: T,
                        index: 1,
                    }),
                })
              : o.intl.format(o.t["5+ldWc"], {
                    settingOneHook: c({
                        setting: e[0],
                        formatter: T,
                        index: 0,
                    }),
                    settingTwoHook: c({
                        setting: e[1],
                        formatter: T,
                        index: 1,
                    }),
                    settingThreeHook: c({
                        setting: e[2],
                        formatter: T,
                        index: 2,
                    }),
                });
    }, [s, I, N, T]);
}
