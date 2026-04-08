n.d(t, { A: () => f });
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
    _ = n(166444),
    m = n(652215),
    p = n(790782),
    g = n(99566);
let f = (0, d.a)(function (e) {
    let {
            guild: t,
            selectedChannelId: s,
            position: d,
            disableManageChannels: f,
            sorting: x,
            sortingType: E,
            sortingPosition: I,
            connectChannelDragSource: C,
            connectChannelDropTarget: N,
            tabIndex: T,
        } = e,
        S = (0, r.bG)([c.A, u.Ay], () => {
            let e = u.Ay.getDirectoryChannelIds(t.id);
            return 0 === e.length ? null : c.A.getChannel(e[0]);
        }),
        b = (0, r.bG)([c.A], () => c.A.getChannel(S?.parent_id)),
        v = s === S?.id,
        y = (0, r.bG)([h.A], () =>
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
    let R = (0, A.O6)(d, I),
        O = (0, A.h$)(S, x, E),
        L = (0, i.jsx)("div", {
            className: a()(R, { [g.r9]: O, [g.wH]: v }),
            "data-dnd-name": S.name,
            children: (0, i.jsxs)(_.Ay, {
                className: g.Ki,
                channel: S,
                guild: t,
                selected: v,
                onContextMenu: j,
                forceInteractable: !0,
                resolvedUnreadSetting: p.e.ONLY_MENTIONS,
                children: [
                    (0, i.jsx)(A.gQ, { channel: S, tabIndex: T }),
                    (0, i.jsx)(A.Jd, { channel: S, disableManageChannels: f, tabIndex: T }),
                ],
            }),
        });
    return y && (L = N(C(L))), L;
});
