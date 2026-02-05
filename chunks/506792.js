n.d(t, { A: () => x });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(442433),
    d = n(676002),
    c = n(734057),
    u = n(808728),
    h = n(576705),
    A = n(557534),
    g = n(166444),
    m = n(652215),
    p = n(790782),
    _ = n(728444);
let x = (0, d.a)(function (e) {
    let {
            guild: t,
            selectedChannelId: s,
            position: d,
            disableManageChannels: x,
            sorting: f,
            sortingType: E,
            sortingPosition: C,
            connectChannelDragSource: I,
            connectChannelDropTarget: S,
            tabIndex: b,
        } = e,
        N = (0, r.bG)([c.A, u.Ay], () => {
            let e = u.Ay.getDirectoryChannelIds(t.id);
            return 0 === e.length ? null : c.A.getChannel(e[0]);
        }),
        T = (0, r.bG)([c.A], () => c.A.getChannel(N?.parent_id)),
        j = s === N?.id,
        v = (0, r.bG)([h.A], () =>
            null != T ? h.A.can(m.xBc.MANAGE_CHANNELS, T) : null != t && h.A.can(m.xBc.MANAGE_CHANNELS, t),
        ),
        y = l.useCallback(
            (e) => {
                null != N &&
                    (0, o.L3)(e, async () => {
                        let { default: e } = await n.e("29559").then(n.bind(n, 994058));
                        return (t) => (0, i.jsx)(e, { ...t, channel: N });
                    });
            },
            [N],
        );
    if (null == N) return null;
    let R = (0, A.O6)(d, C),
        O = (0, A.h$)(N, f, E),
        L = (0, i.jsx)("div", {
            className: a()(R, { [_.r9]: O, [_.wH]: j }),
            "data-dnd-name": N.name,
            children: (0, i.jsxs)(g.Ay, {
                className: _.Ki,
                channel: N,
                guild: t,
                selected: j,
                onContextMenu: y,
                forceInteractable: !0,
                resolvedUnreadSetting: p.e.ONLY_MENTIONS,
                children: [
                    (0, i.jsx)(A.gQ, { channel: N, tabIndex: b }),
                    (0, i.jsx)(A.Jd, { channel: N, disableManageChannels: x, tabIndex: b }),
                ],
            }),
        });
    return v && (L = S(I(L))), L;
});
