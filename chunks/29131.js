e.d(t, { default: () => a });
var s = e(200651);
e(192379);
var c = e(481060),
    n = e(151459),
    o = e(388032);
function a(i) {
    let { onClose: t } = i,
        { showSuggestions: e, showActivityTicker: a, setShowSuggestions: r, setShowActivityTicker: d } = (0, n.Z)();
    return (0, s.jsxs)(c.v2r, {
        navId: 'friends-popout-settings',
        onClose: t,
        'aria-label': o.NW.string(o.t['3D5yo6']),
        onSelect: () => {},
        children: [
            (0, s.jsx)(c.S89, {
                id: 'show-suggestions',
                label: 'Show Suggestions',
                checked: e,
                action: () => r(!e)
            }),
            (0, s.jsx)(c.S89, {
                id: 'show-activity-ticker',
                label: 'Show Activity Ticker',
                checked: a,
                action: () => d(!a)
            })
        ]
    });
}
