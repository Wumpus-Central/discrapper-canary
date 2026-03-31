n.d(t, { A: () => f });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(442433),
    c = n(676002),
    d = n(734057),
    u = n(808728),
    h = n(576705),
    A = n(557534),
    _ = n(166444),
    m = n(652215),
    g = n(790782),
    p = n(928409);
let f = (0, c.a)(function (e) {
    let {
            guild: t,
            selectedChannelId: s,
            position: c,
            disableManageChannels: f,
            sorting: x,
            sortingType: E,
            sortingPosition: I,
            connectChannelDragSource: C,
            connectChannelDropTarget: N,
            tabIndex: T,
        } = e,
        S = (0, r.bG)([d.A, u.Ay], () => {
            let e = u.Ay.getDirectoryChannelIds(t.id);
            return 0 === e.length ? null : d.A.getChannel(e[0]);
        }),
        b = (0, r.bG)([d.A], () => d.A.getChannel(S?.parent_id)),
        y = s === S?.id,
        v = (0, r.bG)([h.A], () =>
            null != b ? h.A.can(m.xBc.MANAGE_CHANNELS, b) : null != t && h.A.can(m.xBc.MANAGE_CHANNELS, t),
        ),
        j = l.useCallback(
            (e) => {
                null != S &&
                    (0, o.L3)(e, async () => {
                        let { default: e } = await n.e("29559").then(n.bind(n, 994058));
                        return (t) => (0, i.jsx)(e, { ...t, channel: S });
                    });
            },
            [S],
        );
    if (null == S) return null;
    let R = (0, A.O6)(c, I),
        O = (0, A.h$)(S, x, E),
        L = (0, i.jsx)("div", {
            className: a()(R, { [p.r9]: O, [p.wH]: y }),
            "data-dnd-name": S.name,
            children: (0, i.jsxs)(_.Ay, {
                className: p.Ki,
                channel: S,
                guild: t,
                selected: y,
                onContextMenu: j,
                forceInteractable: !0,
                resolvedUnreadSetting: g.e.ONLY_MENTIONS,
                children: [
                    (0, i.jsx)(A.gQ, { channel: S, tabIndex: T }),
                    (0, i.jsx)(A.Jd, { channel: S, disableManageChannels: f, tabIndex: T }),
                ],
            }),
        });
    return v && (L = N(C(L))), L;
});
