n.d(e, { F: () => S }), n(539854), n(388685);
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
function T(t) {
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
function S(t, e) {
    let { limit: n = 2, formatter: i = c } = null != e ? e : {};
    r()(n > 0, "[useSettingAccordionSubtitle] Limit must be greater than 0");
    let { directory: u } = (0, s.t)(),
        E = u.get(t);
    r()(null != E && E.type === a.Jq.ACCORDION, "[useSettingAccordionSubtitle] Node is not an accordion settings node");
    let S = E.layout;
    return l.useMemo(() => {
        let t = [];
        for (let e of S)
            "useTitle" in e &&
                null != e.useTitle &&
                t.push({
                    key: e.key,
                    useTitle: e.useTitle,
                });
        if (0 === t.length) return "";
        let e = Math.min(n, 3);
        if (t.length <= e)
            if (1 === t.length)
                return o.intl.format(o.t.LR5WpG, {
                    settingOneHook: T({
                        setting: t[0],
                        formatter: i,
                        index: 0,
                    }),
                });
            else if (2 === t.length)
                return o.intl.format(o.t.mkcMXD, {
                    settingOneHook: T({
                        setting: t[0],
                        formatter: i,
                        index: 0,
                    }),
                    settingTwoHook: T({
                        setting: t[1],
                        formatter: i,
                        index: 1,
                    }),
                });
            else
                return o.intl.format(o.t.CrpgRG, {
                    settingOneHook: T({
                        setting: t[0],
                        formatter: i,
                        index: 0,
                    }),
                    settingTwoHook: T({
                        setting: t[1],
                        formatter: i,
                        index: 1,
                    }),
                    settingThreeHook: T({
                        setting: t[2],
                        formatter: i,
                        index: 2,
                    }),
                });
        return 1 === e
            ? o.intl.format(o.t.s1o71l, {
                  settingOneHook: T({
                      setting: t[0],
                      formatter: i,
                      index: 0,
                  }),
              })
            : 2 === e
              ? o.intl.format(o.t.jqijud, {
                    settingOneHook: T({
                        setting: t[0],
                        formatter: i,
                        index: 0,
                    }),
                    settingTwoHook: T({
                        setting: t[1],
                        formatter: i,
                        index: 1,
                    }),
                })
              : o.intl.format(o.t.f5J0rc, {
                    settingOneHook: T({
                        setting: t[0],
                        formatter: i,
                        index: 0,
                    }),
                    settingTwoHook: T({
                        setting: t[1],
                        formatter: i,
                        index: 1,
                    }),
                    settingThreeHook: T({
                        setting: t[2],
                        formatter: i,
                        index: 2,
                    }),
                });
    }, [n, S, i]);
}
