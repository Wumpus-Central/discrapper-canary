n.d(t, { A: () => E });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(442433),
    d = n(676002),
    c = n(47167),
    u = n(734057),
    h = n(808728),
    A = n(576705),
    _ = n(557534),
    m = n(166444),
    g = n(652215),
    p = n(790782),
    f = n(907305);
let E = (0, d.a)(function (e) {
    let {
            guild: t,
            selectedChannelId: s,
            position: d,
            disableManageChannels: E,
            sorting: x,
            sortingType: I,
            sortingPosition: C,
            connectChannelDragSource: b,
            connectChannelDropTarget: N,
            tabIndex: S,
        } = e,
        v = (0, r.bG)([u.A, h.Ay], () => {
            let e = h.Ay.getDirectoryChannelIds(t.id);
            return 0 === e.length ? null : u.A.getChannel(e[0]);
        }),
        T = (0, r.bG)([u.A], () => u.A.getChannel(v?.parent_id)),
        y = s === v?.id,
        j = (0, c.Ay)(v),
        R = (0, r.bG)([A.A], () =>
            null != T ? A.A.can(g.xBc.MANAGE_CHANNELS, T) : null != t && A.A.can(g.xBc.MANAGE_CHANNELS, t),
        ),
        L = l.useCallback(
            (e) => {
                null != v &&
                    (0, o.L3)(e, async () => {
                        let { default: e } = await n.e("29559").then(n.bind(n, 994058));
                        return (t) => (0, i.jsx)(e, { ...t, channel: v });
                    });
            },
            [v],
        );
    if (null == v) return null;
    let O = (0, _.O6)(d, C),
        G = (0, _.h$)(v, x, I),
        M = (0, i.jsx)("div", {
            className: a()(O, { [f.r9]: G, [f.wH]: y }),
            "data-dnd-name": j,
            children: (0, i.jsxs)(m.Ay, {
                className: f.Ki,
                channel: v,
                guild: t,
                selected: y,
                onContextMenu: L,
                forceInteractable: !0,
                resolvedUnreadSetting: p.e.ONLY_MENTIONS,
                children: [
                    (0, i.jsx)(_.gQ, { channel: v, tabIndex: S }),
                    (0, i.jsx)(_.Jd, { channel: v, disableManageChannels: E, tabIndex: S }),
                ],
            }),
        });
    return R && (M = N(b(M))), M;
});
