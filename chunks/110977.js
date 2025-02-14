n.d(t, { S: () => f });
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(481060),
    s = n(540059),
    c = n(593214),
    d = n(981631),
    u = n(388032),
    h = n(940011),
    p = n(482559),
    m = n(777693);
function g() {
    return (0, i.jsx)('div', {
        className: a()(p.row, p.rowGuildName),
        children: (0, i.jsx)('span', {
            className: a()(p.guildNameText, p.guildNameTextLimitedSize, h.tooltipText),
            children: u.intl.string(u.t['4tSWQk'])
        })
    });
}
let f = l.memo(function (e) {
    let { 'aria-label': t = !1, children: n } = e,
        r = (0, s.Q3)('FavoritesAddedTooltip'),
        a = (function () {
            let { favoriteAdded: e, clearFavoriteAdded: t } = (0, c.up)();
            return (
                l.useEffect(() => {
                    if (e) {
                        let e = setTimeout(() => {
                            t();
                        }, 1500);
                        return () => {
                            t(), clearTimeout(e);
                        };
                    }
                }, [e, t]),
                e
            );
        })();
    return (0, i.jsx)(o.ua7, {
        forceOpen: a,
        color: o.FGA.GREEN,
        hideOnClick: !0,
        spacing: r ? 12 : 20,
        position: 'right',
        align: 'center',
        text: (0, i.jsx)(g, {}),
        'aria-label': t,
        tooltipClassName: m.listItemTooltip,
        children: (e) =>
            (0, i.jsx)('div', {
                ...e,
                onMouseEnter: d.dG4,
                onMouseLeave: d.dG4,
                children: n
            })
    });
});
