"use strict";
s.d(t, { A: () => u });
var n = s(627968),
    r = s(64700),
    l = s(503698),
    a = s.n(l),
    i = s(397927),
    o = s(938191),
    c = s(758836),
    d = s(985018);
function u(e) {
    let { handleTransition: t, onClose: s } = e,
        l = (0, o.yB)("CollectiblesIndexPageContextMenu"),
        u = r.useMemo(
            () => [
                { label: d.intl.string(d.t.dRZYNE), value: c.G2.AVATAR_DECORATIONS },
                { label: d.intl.string(d.t["1cNjtx"]), value: c.G2.PROFILE_EFFECTS },
                { label: d.intl.string(d.t.V68Fqz), value: c.G2.NAMEPLATES },
                { label: d.intl.string(d.t.FYFpps), value: c.G2.BUNDLES },
                { label: d.intl.string(d.t.xFcotU), value: c.G2.CATALOG },
            ],
            [],
        );
    return (0, n.jsx)("div", {
        className: a()({ [o.jP]: l }),
        children: (0, n.jsx)(i.W1t, {
            "data-menu-migrated": !0,
            navId: "collectibles-index-page-menu",
            className: a()({ [o.jP]: l }),
            onClose: s,
            "aria-label": d.intl.string(d.t.xFcotU),
            onSelect: () => {},
            children: u.map((e) =>
                (0, n.jsx)(
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
