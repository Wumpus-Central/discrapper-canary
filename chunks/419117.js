n.d(t, { A: () => _ }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(284009),
    a = n.n(l),
    r = n(199966),
    o = n(963935),
    d = n(985018);
function u(e) {
    let { title: t } = e;
    return t;
}
function c(e) {
    let { useTitle: t, settingKey: n, formatter: i, index: s } = e,
        l = t();
    return "string" == typeof l ? i({ title: l, index: s, key: n }) : l;
}
function g(e) {
    let { setting: t, formatter: n, index: s } = e;
    return () => (0, i.jsx)(c, { useTitle: t.useTitle, settingKey: t.key, formatter: n, index: s }, t.key);
}
function m(e) {
    return e.type === o.Z6.LIST;
}
function _(e, t) {
    let { limit: n = 2, formatter: i = u } = t ?? {};
    a()(n > 0, "[useSettingCollapsibleSubtitle] Limit must be greater than 0");
    let { visibleDirectory: l, accessibleDirectory: c } = (0, r._)(),
        _ = l.get(e) ?? c.get(e);
    a()(
        null != _ && (_.type === o.Z6.ACCORDION || m(_)),
        "[useSettingCollapsibleSubtitle] Node is not a collapsible settings node",
    );
    let A = m(_) ? (_.collapseAfter ?? 0) : 0,
        h = _.layout;
    return s.useMemo(() => {
        let e = A,
            t = [];
        for (let n of h)
            if ("useTitle" in n && null != n.useTitle) {
                if (e > 0) {
                    e--;
                    continue;
                }
                t.push({ key: n.key, useTitle: n.useTitle });
            }
        if (0 === t.length) return "";
        let s = Math.min(n, 3);
        if (t.length <= s)
            if (1 === t.length)
                return d.intl.format(d.t["3H9tCW"], { settingOneHook: g({ setting: t[0], formatter: i, index: 0 }) });
            else if (2 === t.length)
                return d.intl.format(d.t.MWryo6, {
                    settingOneHook: g({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: g({ setting: t[1], formatter: i, index: 1 }),
                });
            else
                return d.intl.format(d.t.a00b5G, {
                    settingOneHook: g({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: g({ setting: t[1], formatter: i, index: 1 }),
                    settingThreeHook: g({ setting: t[2], formatter: i, index: 2 }),
                });
        return 1 === s
            ? d.intl.format(d.t.O8vNbS, { settingOneHook: g({ setting: t[0], formatter: i, index: 0 }) })
            : 2 === s
              ? d.intl.format(d.t["acXG/W"], {
                    settingOneHook: g({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: g({ setting: t[1], formatter: i, index: 1 }),
                })
              : d.intl.format(d.t["5+ldWc"], {
                    settingOneHook: g({ setting: t[0], formatter: i, index: 0 }),
                    settingTwoHook: g({ setting: t[1], formatter: i, index: 1 }),
                    settingThreeHook: g({ setting: t[2], formatter: i, index: 2 }),
                });
    }, [n, A, h, i]);
}
