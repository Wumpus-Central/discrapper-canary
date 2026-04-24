"use strict";
n.d(t, { A: () => I }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(17928),
    a = n(789645),
    l = n(442433),
    o = n(738876),
    d = n(323073),
    c = n(58149),
    u = n(973854),
    h = n(355622),
    g = n(225142),
    p = n(701785),
    v = n(429933),
    f = n(58736),
    m = n(187360),
    D = n(683442),
    A = n(857071),
    x = n(976860),
    j = n(138298),
    O = n(288254),
    y = n(873614),
    L = n(522556),
    N = n(734057),
    w = n(31717),
    T = n(71393),
    E = n(232835),
    b = n(47167),
    C = n(806202),
    M = n(652215),
    G = n(985018),
    S = n(906462);
function I(e) {
    let { channelId: t, baseChannelId: I, channelViewSource: k = "Split View", isResourceChannelView: R } = e,
        _ = (0, s.bG)([N.A], () => N.A.getChannel(t)),
        F = (0, s.bG)([T.A], () => T.A.getGuild(_?.getGuildId())),
        P = (0, b.Ay)(_),
        U = (0, s.bG)([A.A], () => F?.id != null && A.A.isLurking(F.id), [F]),
        Z = (0, v.A)(t),
        B = (0, s.bG)([p.h], () => p.h.getResourceForChannel(F?.id, t)?.title),
        q = (0, d.vL)(_),
        z = (0, O.Uf)(_),
        H = i.useRef(!1);
    if (
        (i.useEffect(() => {
            null == _ ||
                H.current ||
                ((H.current = !0),
                (0, c.zV)(M.HAw.CHANNEL_OPENED, { ...(0, c.qL)(_.id), channel_view: k }),
                (0, u.A)({ channelId: _.id }));
        }, [_, k]),
        null == _ || null == F)
    )
        return null;
    let K = [];
    return (U || K.push((0, r.jsx)(m.A, { channel: _ }, "notifications")),
    K.push(
        (0, r.jsx)(
            f.Ay.Icon,
            { icon: a.P, tooltip: G.intl.string(G.t.cpT0Cq), onClick: () => j.A.closeChannelSidebar(I) },
            "close",
        ),
    ),
    q)
        ? (0, r.jsx)(L.A, { guild: F, channelId: _.id })
        : null != z
          ? (0, r.jsx)(y.A, { guild: F, channelId: z })
          : (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(o.A, { channel: _, draftType: w.C.ChannelMessage }),
                    (0, r.jsx)(f.Ay, {
                        toolbar: K,
                        "aria-label": G.intl.string(G.t.BIYAqa),
                        children: (0, D.zF)({
                            channel: _,
                            channelName: Z ? B : P,
                            guild: F,
                            inSidebar: !0,
                            handleContextMenu: (e) => {
                                (0, l.L3)(e, async () => {
                                    let { default: e } = await Promise.all([n.e("59545"), n.e("43156")]).then(
                                        n.bind(n, 22496),
                                    );
                                    return (t) => (0, r.jsx)(e, { ...t, channel: _, guild: F });
                                });
                            },
                            handleClick: () => {
                                let e = E.A.getMessages(_.id);
                                if (R) {
                                    (0, x.pX)(M.BVt.CHANNEL(_.guild_id, _.id)), (0, g.bN)(_.guild_id, null);
                                    return;
                                }
                                (0, x.uh)(_.guild_id, _.id, e.jumpTargetId);
                            },
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: S.T,
                        children: (0, r.jsx)(C.A, { channel: _, guild: F, chatInputType: h.oU.SIDEBAR }, t),
                    }),
                ],
            });
}
