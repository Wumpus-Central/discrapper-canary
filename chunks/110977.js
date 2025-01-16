n.d(t, {
    S: function () {
        return g;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(481060),
    s = n(540059),
    c = n(593214),
    u = n(981631),
    d = n(388032),
    h = n(134123),
    p = n(782451),
    m = n(572488);
function f() {
    return (0, i.jsx)('div', {
        className: a()(p.row, p.rowGuildName),
        children: (0, i.jsx)('span', {
            className: a()(p.guildNameText, p.guildNameTextLimitedSize, h.tooltipText),
            children: d.intl.string(d.t['4tSWQk'])
        })
    });
}
let g = l.memo(function (e) {
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
    return (0, i.jsx)(o.Tooltip, {
        forceOpen: a,
        color: o.TooltipColors.GREEN,
        hideOnClick: !0,
        spacing: r ? 12 : 20,
        position: 'right',
        align: 'center',
        text: (0, i.jsx)(f, {}),
        'aria-label': t,
        tooltipClassName: m.listItemTooltip,
        children: (e) =>
            (0, i.jsx)('div', {
                ...e,
                onMouseEnter: u.dG4,
                onMouseLeave: u.dG4,
                children: n
            })
    });
});
