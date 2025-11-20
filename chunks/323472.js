n.d(e, { u: () => d }), n(539854), n(388685);
var i = n(54381),
    l = n(473749),
    u = n(512722),
    r = n.n(u),
    s = n(59662),
    a = n(28682),
    o = n(388032);
function c(t) {
    let { title: e } = t;
    return e;
}
function E(t) {
    let { useTitle: e, settingKey: n, formatter: i, index: l } = t,
        u = e();
    return "string" == typeof u
        ? i({
              title: u,
              index: l,
              key: n,
          })
        : u;
}
function S(t) {
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
function T(t) {
    return t.type === a.Jq.LIST;
}
function d(t, e) {
    var n;
    let { limit: i = 2, formatter: u = c } = null != e ? e : {};
    r()(i > 0, "[useSettingCollapsibleSubtitle] Limit must be greater than 0");
    let { directory: E } = (0, s.t)(),
        d = E.get(t);
    r()(
        null != d && (d.type === a.Jq.ACCORDION || T(d)),
        "[useSettingCollapsibleSubtitle] Node is not a collapsible settings node",
    );
    let I = T(d) && null != (n = d.collapseAfter) ? n : 0,
        O = d.layout;
    return l.useMemo(() => {
        let t = I,
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
        let n = Math.min(i, 3);
        if (e.length <= n)
            if (1 === e.length)
                return o.intl.format(o.t["3H9tCW"], {
                    settingOneHook: S({
                        setting: e[0],
                        formatter: u,
                        index: 0,
                    }),
                });
            else if (2 === e.length)
                return o.intl.format(o.t.MWryo6, {
                    settingOneHook: S({
                        setting: e[0],
                        formatter: u,
                        index: 0,
                    }),
                    settingTwoHook: S({
                        setting: e[1],
                        formatter: u,
                        index: 1,
                    }),
                });
            else
                return o.intl.format(o.t.a00b5G, {
                    settingOneHook: S({
                        setting: e[0],
                        formatter: u,
                        index: 0,
                    }),
                    settingTwoHook: S({
                        setting: e[1],
                        formatter: u,
                        index: 1,
                    }),
                    settingThreeHook: S({
                        setting: e[2],
                        formatter: u,
                        index: 2,
                    }),
                });
        return 1 === n
            ? o.intl.format(o.t.O8vNbS, {
                  settingOneHook: S({
                      setting: e[0],
                      formatter: u,
                      index: 0,
                  }),
              })
            : 2 === n
              ? o.intl.format(o.t["acXG/W"], {
                    settingOneHook: S({
                        setting: e[0],
                        formatter: u,
                        index: 0,
                    }),
                    settingTwoHook: S({
                        setting: e[1],
                        formatter: u,
                        index: 1,
                    }),
                })
              : o.intl.format(o.t["5+ldWc"], {
                    settingOneHook: S({
                        setting: e[0],
                        formatter: u,
                        index: 0,
                    }),
                    settingTwoHook: S({
                        setting: e[1],
                        formatter: u,
                        index: 1,
                    }),
                    settingThreeHook: S({
                        setting: e[2],
                        formatter: u,
                        index: 2,
                    }),
                });
    }, [i, I, O, u]);
}
