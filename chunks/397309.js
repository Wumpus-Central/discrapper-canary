s.d(t, { A: () => m, Y: () => S });
var r = s(627968),
    l = s(64700),
    n = s(503698),
    a = s.n(n),
    o = s(641150),
    i = s(397927),
    c = s(938191),
    u = s(758836),
    d = s(985018);
let b = [
        { tab: u.G2.AVATAR_DECORATIONS, labelKey: d.t.dRZYNE },
        { tab: u.G2.PROFILE_EFFECTS, labelKey: d.t["1cNjtx"] },
        { tab: u.G2.NAMEPLATES, labelKey: d.t.V68Fqz },
        { tab: u.G2.BUNDLES, labelKey: d.t.FYFpps },
        { tab: u.G2.CATALOG, labelKey: d.t.xFcotU },
    ],
    p = {
        [o.q.ALL]: u.G2.CATALOG,
        [o.q.AVATAR_DECORATION]: u.G2.AVATAR_DECORATIONS,
        [o.q.PROFILE_EFFECT]: u.G2.PROFILE_EFFECTS,
        [o.q.NAMEPLATE]: u.G2.NAMEPLATES,
        [o.q.BUNDLE]: u.G2.BUNDLES,
    };
function S(e) {
    let { selectedTab: t, itemTypeFilters: s, onTabSelect: l, onClose: n } = e,
        a = t;
    if (t === u.G2.CATALOG && s.size > 0) {
        let e = p[Array.from(s)[0]];
        null != e && (a = e);
    }
    return b.map((e) => {
        let { tab: t, labelKey: s } = e,
            o = t === a;
        return (0, r.jsx)(
            i.Drp,
            {
                id: t,
                label: d.intl.string(s),
                icon: o ? i.yr3 : void 0,
                leadingAccessory: o ? { type: "icon", icon: i.yr3 } : void 0,
                action: () => {
                    l(t), n();
                },
            },
            t,
        );
    });
}
function m(e) {
    let { handleTransition: t, onClose: s } = e,
        n = (0, c.yB)("CollectiblesIndexPageContextMenu"),
        o = l.useMemo(
            () => [
                { label: d.intl.string(d.t.dRZYNE), value: u.G2.AVATAR_DECORATIONS },
                { label: d.intl.string(d.t["1cNjtx"]), value: u.G2.PROFILE_EFFECTS },
                { label: d.intl.string(d.t.V68Fqz), value: u.G2.NAMEPLATES },
                { label: d.intl.string(d.t.FYFpps), value: u.G2.BUNDLES },
                { label: d.intl.string(d.t.xFcotU), value: u.G2.CATALOG },
            ],
            [],
        );
    return (0, r.jsx)("div", {
        className: a()({ [c.jP]: n }),
        children: (0, r.jsx)(i.W1t, {
            "data-menu-migrated": !0,
            navId: "collectibles-index-page-menu",
            className: a()({ [c.jP]: n }),
            onClose: s,
            "aria-label": d.intl.string(d.t.xFcotU),
            onSelect: () => {},
            children: o.map((e) =>
                (0, r.jsx)(
                    i.Drp,
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
