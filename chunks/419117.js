i.d(e, {
    A: () => d,
}),
    i(321073),
    i(896048);
var n = i(627968),
    l = i(64700),
    s = i(284009),
    r = i.n(s),
    u = i(199966),
    a = i(963935),
    o = i(985018);

function T(t) {
    let { title: e } = t;
    return e;
}

function A(t) {
    let { useTitle: e, settingKey: i, formatter: n, index: l } = t,
        s = e();
    return "string" == typeof s
        ? n({
              title: s,
              index: l,
              key: i,
          })
        : s;
}

function S(t) {
    let { setting: e, formatter: i, index: l } = t;
    return () =>
        (0, n.jsx)(
            A,
            {
                useTitle: e.useTitle,
                settingKey: e.key,
                formatter: i,
                index: l,
            },
            e.key,
        );
}

function E(t) {
    return t.type === a.Z6.LIST;
}

function d(t, e) {
    var i, n;
    let { limit: s = 2, formatter: A = T } = null != e ? e : {};
    r()(s > 0, "[useSettingCollapsibleSubtitle] Limit must be greater than 0");
    let { visibleDirectory: d, accessibleDirectory: _ } = (0, u._)(),
        I = null != (i = d.get(t)) ? i : _.get(t);
    r()(
        null != I && (I.type === a.Z6.ACCORDION || E(I)),
        "[useSettingCollapsibleSubtitle] Node is not a collapsible settings node",
    );
    let g = E(I) && null != (n = I.collapseAfter) ? n : 0,
        c = I.layout;
    return l.useMemo(() => {
        let t = g,
            e = [];
        for (let i of c)
            if ("useTitle" in i && null != i.useTitle) {
                if (t > 0) {
                    t--;
                    continue;
                }
                e.push({
                    key: i.key,
                    useTitle: i.useTitle,
                });
            }
        if (0 === e.length) return "";
        let i = Math.min(s, 3);
        if (e.length <= i)
            if (1 === e.length)
                return o.intl.format(o.t["3H9tCW"], {
                    settingOneHook: S({
                        setting: e[0],
                        formatter: A,
                        index: 0,
                    }),
                });
            else if (2 === e.length)
                return o.intl.format(o.t.MWryo6, {
                    settingOneHook: S({
                        setting: e[0],
                        formatter: A,
                        index: 0,
                    }),
                    settingTwoHook: S({
                        setting: e[1],
                        formatter: A,
                        index: 1,
                    }),
                });
            else
                return o.intl.format(o.t.a00b5G, {
                    settingOneHook: S({
                        setting: e[0],
                        formatter: A,
                        index: 0,
                    }),
                    settingTwoHook: S({
                        setting: e[1],
                        formatter: A,
                        index: 1,
                    }),
                    settingThreeHook: S({
                        setting: e[2],
                        formatter: A,
                        index: 2,
                    }),
                });
        return 1 === i
            ? o.intl.format(o.t.O8vNbS, {
                  settingOneHook: S({
                      setting: e[0],
                      formatter: A,
                      index: 0,
                  }),
              })
            : 2 === i
              ? o.intl.format(o.t["acXG/W"], {
                    settingOneHook: S({
                        setting: e[0],
                        formatter: A,
                        index: 0,
                    }),
                    settingTwoHook: S({
                        setting: e[1],
                        formatter: A,
                        index: 1,
                    }),
                })
              : o.intl.format(o.t["5+ldWc"], {
                    settingOneHook: S({
                        setting: e[0],
                        formatter: A,
                        index: 0,
                    }),
                    settingTwoHook: S({
                        setting: e[1],
                        formatter: A,
                        index: 1,
                    }),
                    settingThreeHook: S({
                        setting: e[2],
                        formatter: A,
                        index: 2,
                    }),
                });
    }, [s, g, c, A]);
}
