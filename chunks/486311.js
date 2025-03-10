n.d(t, { Z: () => _ });
var r = n(200651),
    i = n(192379),
    o = n(120356),
    l = n.n(o),
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
    b = n(730621),
    v = n(388032),
    y = n(796004);
function _(e) {
    let { guild: t, selected: n } = e,
        o = (0, f.Z)(t),
        _ = i.useCallback(() => {
            null != o && (0, p.jd)(t.id, o), (0, d.uL)(g.Z5c.CHANNEL(t.id, m.oC.GUILD_BOOSTS));
        }, [t.id, o]),
        O = (null == o ? void 0 : o.type) === h.o.UNREAD;
    return (0, r.jsx)(u.m, {
        id: 'skill-trees-'.concat(t.id),
        renderIcon: (e) =>
            (0, r.jsx)(c.Z, {
                size: 'md',
                className: e
            }),
        text: (0, r.jsx)('span', {
            className: l()({ [y.textImportant]: O }),
            children: v.NW.string(b.Z.yv3DJC)
        }),
        selected: n,
        onClick: _,
        showUnread: O,
        trailing: (() => {
            switch (null == o ? void 0 : o.type) {
                case h.o.UNREAD:
                    return (0, r.jsx)(a.mAB, {
                        count: o.count,
                        color: s.Z.BACKGROUND_MODIFIER_ACCENT
                    });
                case h.o.WARNING:
                    return (0, r.jsx)(a.P4T, {
                        color: a.TVs.colors.TEXT_WARNING,
                        size: 'sm'
                    });
                default:
                    return;
            }
        })()
    });
}
