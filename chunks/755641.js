n.d(t, { g: () => d });
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    s = n(481060),
    a = n(510918),
    o = n(131085),
    c = n(602268);
function d(e) {
    let { badgeCollection: t, selectedBadge: n, onBadgeClicked: i } = e;
    return (0, r.jsxs)('div', {
        className: c.pickerGrid,
        children: [
            t.unlockedBadges.map((e) =>
                (0, r.jsx)(
                    s.P3F,
                    {
                        className: l()(c.pickerItem, { [c.pickerItemSelected]: e === n }),
                        onClick: () => (null == i ? void 0 : i(e)),
                        children: (0, r.jsx)(a.v, {
                            badge: e,
                            width: o.Gg.SIZE_32,
                            height: o.Gg.SIZE_32
                        })
                    },
                    e
                )
            ),
            t.lockedBadges.map((e) =>
                (0, r.jsx)(
                    'div',
                    {
                        className: l()(c.pickerItem, c.lockedPickerItem),
                        children: (0, r.jsx)(a.v, {
                            badge: e,
                            width: o.Gg.SIZE_32,
                            height: o.Gg.SIZE_32
                        })
                    },
                    e
                )
            )
        ]
    });
}
