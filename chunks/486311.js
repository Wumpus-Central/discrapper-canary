n.d(t, { Z: () => _ });
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(481060),
    s = n(377171),
    c = n(413335),
    u = n(434479),
    d = n(703656),
    p = n(713081),
    h = n(326660),
    f = n(730164),
    g = n(981631),
    m = n(176505),
    b = n(783684),
    v = n(388032),
    y = n(55345);
function _(e) {
    let { guild: t, selected: n } = e,
        l = i.useCallback(() => {
            (0, p.j)(t.id), (0, d.uL)(g.Z5c.CHANNEL(t.id, m.oC.GUILD_BOOSTS));
        }, [t.id]),
        _ = (0, f.Z)(t),
        O = (null == _ ? void 0 : _.type) === h.o.UNREAD;
    return (0, r.jsx)(u.m, {
        id: 'skill-trees-'.concat(t.id),
        renderIcon: (e) => (0, r.jsx)(c.Z, { className: e }),
        text: (0, r.jsx)('span', {
            className: o()({ [y.textImportant]: O }),
            children: v.NW.string(b.Z.yv3DJC)
        }),
        selected: n,
        onClick: l,
        showUnread: O,
        trailing: (() => {
            switch (null == _ ? void 0 : _.type) {
                case h.o.UNREAD:
                    return (0, r.jsx)(a.mAB, {
                        count: _.count,
                        color: s.Z.BACKGROUND_MODIFIER_ACCENT
                    });
                case h.o.WARNING:
                    return (0, r.jsx)(a.aNP, {});
                default:
                    return;
            }
        })()
    });
}
