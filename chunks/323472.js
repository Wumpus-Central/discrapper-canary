n.d(e, { u: () => T }), n(539854), n(388685);
var i = n(54381),
    r = n(473749),
    l = n(512722),
    s = n.n(l),
    u = n(59662),
    a = n(28682),
    o = n(388032);
function c(t) {
    let { title: e } = t;
    return e;
}
function d(t) {
    let { useTitle: e, settingKey: n, formatter: i, index: r } = t,
        l = e();
    return "string" == typeof l
        ? i({
              title: l,
              index: r,
              key: n,
          })
        : l;
}
function E(t) {
    let { setting: e, formatter: n, index: r } = t;
    return () =>
        (0, i.jsx)(
            d,
            {
                useTitle: e.useTitle,
                settingKey: e.key,
                formatter: n,
                index: r,
            },
            e.key,
        );
}
function S(t) {
    return t.type === a.Jq.LIST;
}
function T(t, e) {
    var n, i;
    let { limit: l = 2, formatter: d = c } = null != e ? e : {};
    s()(l > 0, "[useSettingCollapsibleSubtitle] Limit must be greater than 0");
    let { directory: T, fallbackDirectory: I } = (0, u.t)(),
        g = null != (n = T.get(t)) ? n : I.get(t);
    s()(
        null != g && (g.type === a.Jq.ACCORDION || S(g)),
        "[useSettingCollapsibleSubtitle] Node is not a collapsible settings node",
    );
    let O = S(g) && null != (i = g.collapseAfter) ? i : 0,
        _ = g.layout;
    return r.useMemo(() => {
        let t = O,
            e = [];
        for (let n of _)
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
        let n = Math.min(l, 3);
        if (e.length <= n)
            if (1 === e.length)
                return o.intl.format(o.t["3H9tCW"], {
                    settingOneHook: E({
                        setting: e[0],
                        formatter: d,
                        index: 0,
                    }),
                });
            else if (2 === e.length)
                return o.intl.format(o.t.MWryo6, {
                    settingOneHook: E({
                        setting: e[0],
                        formatter: d,
                        index: 0,
                    }),
                    settingTwoHook: E({
                        setting: e[1],
                        formatter: d,
                        index: 1,
                    }),
                });
            else
                return o.intl.format(o.t.a00b5G, {
                    settingOneHook: E({
                        setting: e[0],
                        formatter: d,
                        index: 0,
                    }),
                    settingTwoHook: E({
                        setting: e[1],
                        formatter: d,
                        index: 1,
                    }),
                    settingThreeHook: E({
                        setting: e[2],
                        formatter: d,
                        index: 2,
                    }),
                });
        return 1 === n
            ? o.intl.format(o.t.O8vNbS, {
                  settingOneHook: E({
                      setting: e[0],
                      formatter: d,
                      index: 0,
                  }),
              })
            : 2 === n
              ? o.intl.format(o.t["acXG/W"], {
                    settingOneHook: E({
                        setting: e[0],
                        formatter: d,
                        index: 0,
                    }),
                    settingTwoHook: E({
                        setting: e[1],
                        formatter: d,
                        index: 1,
                    }),
                })
              : o.intl.format(o.t["5+ldWc"], {
                    settingOneHook: E({
                        setting: e[0],
                        formatter: d,
                        index: 0,
                    }),
                    settingTwoHook: E({
                        setting: e[1],
                        formatter: d,
                        index: 1,
                    }),
                    settingThreeHook: E({
                        setting: e[2],
                        formatter: d,
                        index: 2,
                    }),
                });
    }, [l, O, _, d]);
}
