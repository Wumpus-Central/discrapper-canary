n.d(e, { u: () => T }), n(539854), n(388685);
var i = n(54381),
    l = n(473749),
    r = n(512722),
    u = n.n(r),
    s = n(59662),
    a = n(28682),
    o = n(388032);
function c(t) {
    let { title: e } = t;
    return e;
}
function E(t) {
    let { useTitle: e, settingKey: n, formatter: i, index: l } = t,
        r = e();
    return "string" == typeof r
        ? i({
              title: r,
              index: l,
              key: n,
          })
        : r;
}
function d(t) {
    let { setting: e, formatter: n, index: l } = t;
    return () =>
        (0, i.jsx)(
            E,
            {
                useTitle: e.useTitle,
                settingKey: e.key,
                formatter: n,
                index: l,
            },
            e.key,
        );
}
function S(t) {
    return t.type === a.Jq.LIST;
}
function T(t, e) {
    var n, i;
    let { limit: r = 2, formatter: E = c } = null != e ? e : {};
    u()(r > 0, "[useSettingCollapsibleSubtitle] Limit must be greater than 0");
    let { directory: T, fallbackDirectory: I } = (0, s.t)(),
        O = null != (n = T.get(t)) ? n : I.get(t);
    u()(
        null != O && (O.type === a.Jq.ACCORDION || S(O)),
        "[useSettingCollapsibleSubtitle] Node is not a collapsible settings node",
    );
    let g = S(O) && null != (i = O.collapseAfter) ? i : 0,
        _ = O.layout;
    return l.useMemo(() => {
        let t = g,
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
        let n = Math.min(r, 3);
        if (e.length <= n)
            if (1 === e.length)
                return o.intl.format(o.t["3H9tCW"], {
                    settingOneHook: d({
                        setting: e[0],
                        formatter: E,
                        index: 0,
                    }),
                });
            else if (2 === e.length)
                return o.intl.format(o.t.MWryo6, {
                    settingOneHook: d({
                        setting: e[0],
                        formatter: E,
                        index: 0,
                    }),
                    settingTwoHook: d({
                        setting: e[1],
                        formatter: E,
                        index: 1,
                    }),
                });
            else
                return o.intl.format(o.t.a00b5G, {
                    settingOneHook: d({
                        setting: e[0],
                        formatter: E,
                        index: 0,
                    }),
                    settingTwoHook: d({
                        setting: e[1],
                        formatter: E,
                        index: 1,
                    }),
                    settingThreeHook: d({
                        setting: e[2],
                        formatter: E,
                        index: 2,
                    }),
                });
        return 1 === n
            ? o.intl.format(o.t.O8vNbS, {
                  settingOneHook: d({
                      setting: e[0],
                      formatter: E,
                      index: 0,
                  }),
              })
            : 2 === n
              ? o.intl.format(o.t["acXG/W"], {
                    settingOneHook: d({
                        setting: e[0],
                        formatter: E,
                        index: 0,
                    }),
                    settingTwoHook: d({
                        setting: e[1],
                        formatter: E,
                        index: 1,
                    }),
                })
              : o.intl.format(o.t["5+ldWc"], {
                    settingOneHook: d({
                        setting: e[0],
                        formatter: E,
                        index: 0,
                    }),
                    settingTwoHook: d({
                        setting: e[1],
                        formatter: E,
                        index: 1,
                    }),
                    settingThreeHook: d({
                        setting: e[2],
                        formatter: E,
                        index: 2,
                    }),
                });
    }, [r, g, _, E]);
}
