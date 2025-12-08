n.d(e, { u: () => S }), n(539854), n(388685);
var i = n(54381),
    l = n(473749),
    s = n(512722),
    r = n.n(s),
    u = n(59662),
    a = n(28682),
    o = n(388032);
function c(t) {
    let { title: e } = t;
    return e;
}
function d(t) {
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
function T(t) {
    let { setting: e, formatter: n, index: l } = t;
    return () =>
        (0, i.jsx)(
            d,
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
    return t.type === a.J.LIST;
}
function S(t, e) {
    var n, i;
    let { limit: s = 2, formatter: d = c } = null != e ? e : {};
    r()(s > 0, "[useSettingCollapsibleSubtitle] Limit must be greater than 0");
    let { visibleDirectory: S, accessibleDirectory: I } = (0, u.t)(),
        g = null != (n = S.get(t)) ? n : I.get(t);
    r()(
        null != g && (g.type === a.J.ACCORDION || E(g)),
        "[useSettingCollapsibleSubtitle] Node is not a collapsible settings node",
    );
    let _ = E(g) && null != (i = g.collapseAfter) ? i : 0,
        O = g.layout;
    return l.useMemo(() => {
        let t = _,
            e = [];
        for (let n of O)
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
                    settingOneHook: T({
                        setting: e[0],
                        formatter: d,
                        index: 0,
                    }),
                });
            else if (2 === e.length)
                return o.intl.format(o.t.MWryo6, {
                    settingOneHook: T({
                        setting: e[0],
                        formatter: d,
                        index: 0,
                    }),
                    settingTwoHook: T({
                        setting: e[1],
                        formatter: d,
                        index: 1,
                    }),
                });
            else
                return o.intl.format(o.t.a00b5G, {
                    settingOneHook: T({
                        setting: e[0],
                        formatter: d,
                        index: 0,
                    }),
                    settingTwoHook: T({
                        setting: e[1],
                        formatter: d,
                        index: 1,
                    }),
                    settingThreeHook: T({
                        setting: e[2],
                        formatter: d,
                        index: 2,
                    }),
                });
        return 1 === n
            ? o.intl.format(o.t.O8vNbS, {
                  settingOneHook: T({
                      setting: e[0],
                      formatter: d,
                      index: 0,
                  }),
              })
            : 2 === n
              ? o.intl.format(o.t["acXG/W"], {
                    settingOneHook: T({
                        setting: e[0],
                        formatter: d,
                        index: 0,
                    }),
                    settingTwoHook: T({
                        setting: e[1],
                        formatter: d,
                        index: 1,
                    }),
                })
              : o.intl.format(o.t["5+ldWc"], {
                    settingOneHook: T({
                        setting: e[0],
                        formatter: d,
                        index: 0,
                    }),
                    settingTwoHook: T({
                        setting: e[1],
                        formatter: d,
                        index: 1,
                    }),
                    settingThreeHook: T({
                        setting: e[2],
                        formatter: d,
                        index: 2,
                    }),
                });
    }, [s, _, O, d]);
}
