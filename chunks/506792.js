"use strict";
n.d(t, { A: () => f });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(442433),
    c = n(676002),
    d = n(734057),
    u = n(808728),
    h = n(576705),
    A = n(557534),
    p = n(166444),
    g = n(652215),
    m = n(790782),
    _ = n(728444);
let f = (0, c.a)(function (e) {
    let {
            guild: t,
            selectedChannelId: l,
            position: c,
            disableManageChannels: f,
            sorting: x,
            sortingType: C,
            sortingPosition: E,
            connectChannelDragSource: I,
            connectChannelDropTarget: b,
            tabIndex: N,
        } = e,
        S = (0, a.bG)([d.A, u.Ay], () => {
            let e = u.Ay.getDirectoryChannelIds(t.id);
            return 0 === e.length ? null : d.A.getChannel(e[0]);
        }),
        T = (0, a.bG)([d.A], () => d.A.getChannel(S?.parent_id)),
        v = l === S?.id,
        y = (0, a.bG)([h.A], () =>
            null != T ? h.A.can(g.xBc.MANAGE_CHANNELS, T) : null != t && h.A.can(g.xBc.MANAGE_CHANNELS, t),
        ),
        j = s.useCallback(
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
    let R = (0, A.O6)(c, E),
        O = (0, A.h$)(S, x, C),
        L = (0, i.jsx)("div", {
            className: r()(R, { [_.r9]: O, [_.wH]: v }),
            "data-dnd-name": S.name,
            children: (0, i.jsxs)(p.Ay, {
                className: _.Ki,
                channel: S,
                guild: t,
                selected: v,
                onContextMenu: j,
                forceInteractable: !0,
                resolvedUnreadSetting: m.e.ONLY_MENTIONS,
                children: [
                    (0, i.jsx)(A.gQ, { channel: S, tabIndex: N }),
                    (0, i.jsx)(A.Jd, { channel: S, disableManageChannels: f, tabIndex: N }),
                ],
            }),
        });
    return y && (L = b(I(L))), L;
});
