n.d(t, { Z: () => v });
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(481060),
    s = n(377171),
    c = n(413335),
    u = n(434479),
    d = n(713081),
    p = n(326660),
    h = n(730164),
    f = n(441536),
    g = n(730621),
    m = n(388032),
    b = n(796004);
function v(e) {
    let { guild: t, selected: n } = e,
        l = (0, h.Z)(t),
        v = i.useCallback(() => {
            null != l && (0, d.jd)(t.id, l), (0, f.Z)(t.id);
        }, [t.id, l]),
        y = (null == l ? void 0 : l.type) === p.o.UNREAD;
    return (0, r.jsx)(u.m, {
        id: 'skill-trees-'.concat(t.id),
        renderIcon: (e) =>
            (0, r.jsx)(c.Z, {
                size: 'md',
                className: e
            }),
        text: (0, r.jsx)('span', {
            className: o()({ [b.textImportant]: y }),
            children: m.NW.string(g.Z.yv3DJC)
        }),
        selected: n,
        onClick: v,
        showUnread: y,
        trailing: (() => {
            switch (null == l ? void 0 : l.type) {
                case p.o.UNREAD:
                    return (0, r.jsx)(a.mAB, {
                        count: l.count,
                        color: s.Z.BACKGROUND_MODIFIER_ACCENT
                    });
                case p.o.WARNING:
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
