s.d(t, { A: () => u, d: () => c });
var r = s(627968);
s(64700);
var l = s(503698),
    n = s.n(l),
    a = s(397927),
    o = s(938191),
    i = s(985018);
function c(e) {
    let { shops: t, onClose: s } = e;
    return t.map((e) =>
        (0, r.jsx)(
            a.Drp,
            {
                id: e.id,
                label: e.label,
                trailingIndicator: { type: "icon", icon: a.I9m },
                action: () => {
                    e.onSelect(), s();
                },
            },
            e.id,
        ),
    );
}
function u(e) {
    let { shops: t, onClose: s } = e,
        l = (0, o.yB)("CollectiblesGameShopsContextMenu");
    return (0, r.jsx)("div", {
        className: n()({ [o.jP]: l }),
        children: (0, r.jsx)(a.W1t, {
            "data-menu-migrated": !0,
            navId: "collectibles-game-shops-menu",
            className: n()({ [o.jP]: l }),
            onClose: s,
            "aria-label": i.intl.string(i.t.FkjcWY),
            onSelect: () => {},
            children: t.map((e) =>
                (0, r.jsx)(
                    a.Drp,
                    { id: e.id, label: e.label, trailingIndicator: { type: "icon", icon: a.I9m }, action: e.onSelect },
                    e.id,
                ),
            ),
        }),
    });
}
