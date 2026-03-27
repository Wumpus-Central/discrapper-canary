"use strict";
n.d(t, { A: () => f });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(442433),
    c = n(676002),
    d = n(734057),
    u = n(808728),
    h = n(576705),
    A = n(557534),
    m = n(166444),
    _ = n(652215),
    p = n(790782),
    g = n(928409);
let f = (0, c.a)(function (e) {
    let {
            guild: t,
            selectedChannelId: l,
            position: c,
            disableManageChannels: f,
            sorting: x,
            sortingType: E,
            sortingPosition: C,
            connectChannelDragSource: I,
            connectChannelDropTarget: N,
            tabIndex: b,
        } = e,
        S = (0, r.bG)([d.A, u.Ay], () => {
            let e = u.Ay.getDirectoryChannelIds(t.id);
            return 0 === e.length ? null : d.A.getChannel(e[0]);
        }),
        T = (0, r.bG)([d.A], () => d.A.getChannel(S?.parent_id)),
        v = l === S?.id,
        y = (0, r.bG)([h.A], () =>
            null != T ? h.A.can(_.xBc.MANAGE_CHANNELS, T) : null != t && h.A.can(_.xBc.MANAGE_CHANNELS, t),
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
    let R = (0, A.O6)(c, C),
        O = (0, A.h$)(S, x, E),
        L = (0, i.jsx)("div", {
            className: a()(R, { [g.r9]: O, [g.wH]: v }),
            "data-dnd-name": S.name,
            children: (0, i.jsxs)(m.Ay, {
                className: g.Ki,
                channel: S,
                guild: t,
                selected: v,
                onContextMenu: j,
                forceInteractable: !0,
                resolvedUnreadSetting: p.e.ONLY_MENTIONS,
                children: [
                    (0, i.jsx)(A.gQ, { channel: S, tabIndex: b }),
                    (0, i.jsx)(A.Jd, { channel: S, disableManageChannels: f, tabIndex: b }),
                ],
            }),
        });
    return y && (L = N(I(L))), L;
});
