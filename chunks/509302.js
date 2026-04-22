n.d(t, { A: () => d });
var i = n(64700),
    l = n(922590),
    r = n(607272),
    a = n(433880),
    o = n(985018);
function d(e) {
    let { user: t } = e,
        n = (0, l.fi)(t.id),
        d = i.useCallback(
            (e) => {
                r.A.acceptFriendRequest({ userId: t.id, applicationId: e.id, location: "Context Menu" });
            },
            [t.id],
        );
    return (0, a.A)({
        user: t,
        gameRelationships: n,
        menuItemId: "add-game-friend",
        label: o.intl.string(o.t.X76oLM),
        onClick: d,
    });
}
