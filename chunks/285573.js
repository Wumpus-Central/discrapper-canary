n.d(t, { Z: () => v });
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(442837),
    s = n(239091),
    c = n(146773),
    d = n(592125),
    u = n(984933),
    h = n(496675),
    p = n(98597),
    m = n(473403),
    g = n(981631),
    f = n(490897),
    _ = n(831746);
let v = (0, c.B)(function (e) {
    let { guild: t, selectedChannelId: r, position: c, disableManageChannels: v, sorting: x, sortingType: C, sortingPosition: Z, connectChannelDragSource: I, connectChannelDropTarget: b, tabIndex: S } = e,
        N = (0, o.e7)([d.Z, u.ZP], () => {
            let e = u.ZP.getDirectoryChannelIds(t.id);
            return 0 === e.length ? null : d.Z.getChannel(e[0]);
        }),
        j = (0, o.e7)([d.Z], () => d.Z.getChannel(null == N ? void 0 : N.parent_id)),
        E = r === (null == N ? void 0 : N.id),
        y = (0, o.e7)([h.Z], () => (null != j ? h.Z.can(g.Plq.MANAGE_CHANNELS, j) : null != t && h.Z.can(g.Plq.MANAGE_CHANNELS, t))),
        P = l.useCallback(
            (e) => {
                null != N &&
                    (0, s.jW)(e, async () => {
                        let { default: e } = await n.e('70623').then(n.bind(n, 99334));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                channel: N
                            });
                    });
            },
            [N]
        );
    if (null == N) return null;
    let T = (0, p.jo)(c, Z),
        A = (0, p.CN)(N, x, C),
        w = (0, i.jsx)('div', {
            className: a()(T, {
                [_.disabled]: A,
                [_.selected]: E
            }),
            'data-dnd-name': N.name,
            children: (0, i.jsxs)(m.Z, {
                className: _.iconVisibility,
                channel: N,
                guild: t,
                selected: E,
                onContextMenu: P,
                forceInteractable: !0,
                resolvedUnreadSetting: f.i.ONLY_MENTIONS,
                children: [
                    (0, i.jsx)(p.eP, {
                        channel: N,
                        tabIndex: S
                    }),
                    (0, i.jsx)(p.hR, {
                        channel: N,
                        disableManageChannels: v,
                        tabIndex: S
                    })
                ]
            })
        });
    return y && (w = b(I(w))), w;
});
