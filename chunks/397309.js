r.d(t, { A: () => C, Y: () => f });
var n = r(627968),
    s = r(64700),
    l = r(503698),
    a = r.n(l),
    o = r(641150),
    i = r(477782),
    c = r(628284),
    d = r(861672),
    u = r(938191),
    _ = r(758836),
    b = r(985018);
let p = [
        { tab: _.G2.AVATAR_DECORATIONS, labelKey: b.t.dRZYNE },
        { tab: _.G2.PROFILE_EFFECTS, labelKey: b.t["1cNjtx"] },
        { tab: _.G2.NAMEPLATES, labelKey: b.t.V68Fqz },
        { tab: _.G2.BUNDLES, labelKey: b.t.FYFpps },
        { tab: _.G2.CATALOG, labelKey: b.t.xFcotU },
    ],
    m = {
        [o.q.ALL]: _.G2.CATALOG,
        [o.q.AVATAR_DECORATION]: _.G2.AVATAR_DECORATIONS,
        [o.q.PROFILE_EFFECT]: _.G2.PROFILE_EFFECTS,
        [o.q.NAMEPLATE]: _.G2.NAMEPLATES,
        [o.q.BUNDLE]: _.G2.BUNDLES,
    };
function f(e) {
    let { selectedTab: t, itemTypeFilters: r, onTabSelect: s, onClose: l } = e,
        a = t;
    if (t === _.G2.CATALOG && r.size > 0) {
        let e = m[Array.from(r)[0]];
        null != e && (a = e);
    }
    return p.map((e) => {
        let { tab: t, labelKey: r } = e,
            o = t === a;
        return (0, n.jsx)(
            i.Dr,
            {
                id: t,
                label: b.intl.string(r),
                icon: o ? c.y : void 0,
                leadingAccessory: o ? { type: "icon", icon: c.y } : void 0,
                action: () => {
                    s(t), l();
                },
            },
            t,
        );
    });
}
function C(e) {
    let { handleTransition: t, onClose: r } = e,
        l = (0, u.yB)("CollectiblesIndexPageContextMenu"),
        o = s.useMemo(
            () => [
                { label: b.intl.string(b.t.dRZYNE), value: _.G2.AVATAR_DECORATIONS },
                { label: b.intl.string(b.t["1cNjtx"]), value: _.G2.PROFILE_EFFECTS },
                { label: b.intl.string(b.t.V68Fqz), value: _.G2.NAMEPLATES },
                { label: b.intl.string(b.t.FYFpps), value: _.G2.BUNDLES },
                { label: b.intl.string(b.t.xFcotU), value: _.G2.CATALOG },
            ],
            [],
        );
    return (0, n.jsx)("div", {
        className: a()({ [u.jP]: l }),
        children: (0, n.jsx)(d.W, {
            "data-menu-migrated": !0,
            navId: "collectibles-index-page-menu",
            className: a()({ [u.jP]: l }),
            onClose: r,
            "aria-label": b.intl.string(b.t.xFcotU),
            onSelect: () => {},
            children: o.map((e) =>
                (0, n.jsx)(
                    i.Dr,
                    {
                        id: e.value,
                        label: e.label,
                        action: () => {
                            t(e.value);
                        },
                    },
                    e.value,
                ),
            ),
        }),
    });
}
