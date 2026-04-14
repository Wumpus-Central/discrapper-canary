n.d(t, { A: () => D }), n(321073);
var l = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(397927),
    r = n(442433),
    d = n(738876),
    c = n(323073),
    o = n(58149),
    u = n(973854),
    _ = n(355622),
    h = n(225142),
    x = n(701785),
    m = n(265869),
    A = n(58736),
    g = n(187360),
    C = n(353428),
    f = n(857071),
    p = n(976860),
    N = n(138298),
    j = n(288254),
    v = n(873614),
    b = n(522556),
    I = n(734057),
    E = n(31717),
    S = n(71393),
    w = n(320501),
    y = n(47167),
    O = n(698718),
    T = n(652215),
    L = n(985018),
    R = n(368526);
function D(e) {
    let { channelId: t, baseChannelId: D, channelViewSource: H = "Split View", isResourceChannelView: M } = e,
        G = (0, s.bG)([I.A], () => I.A.getChannel(t)),
        B = (0, s.bG)([S.A], () => S.A.getGuild(G?.getGuildId())),
        k = (0, y.Ay)(G),
        P = (0, s.bG)([f.A], () => B?.id != null && f.A.isLurking(B.id), [B]),
        U = (0, m.A)(t),
        V = (0, s.bG)([x.h], () => x.h.getResourceForChannel(B?.id, t)?.title),
        F = (0, c.vL)(G),
        W = (0, j.Uf)(G),
        q = i.useRef(!1);
    if (
        (i.useEffect(() => {
            null == G ||
                q.current ||
                ((q.current = !0),
                (0, o.zV)(T.HAw.CHANNEL_OPENED, { ...(0, o.qL)(G.id), channel_view: H }),
                (0, u.A)({ channelId: G.id }));
        }, [G, H]),
        null == G || null == B)
    )
        return null;
    let K = [];
    return (P || K.push((0, l.jsx)(g.A, { channel: G }, "notifications")),
    K.push(
        (0, l.jsx)(
            A.Ay.Icon,
            { icon: a.PGe, tooltip: L.intl.string(L.t.cpT0Cq), onClick: () => N.A.closeChannelSidebar(D) },
            "close",
        ),
    ),
    F)
        ? (0, l.jsx)(b.A, { guild: B, channelId: G.id })
        : null != W
          ? (0, l.jsx)(v.A, { guild: B, channelId: W })
          : (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(d.A, { channel: G, draftType: E.C.ChannelMessage }),
                    (0, l.jsx)(A.Ay, {
                        toolbar: K,
                        "aria-label": L.intl.string(L.t.BIYAqa),
                        children: (0, C.zF)({
                            channel: G,
                            channelName: U ? V : k,
                            guild: B,
                            inSidebar: !0,
                            handleContextMenu: (e) => {
                                (0, r.L3)(e, async () => {
                                    let { default: e } = await n.e("17425").then(n.bind(n, 340968));
                                    return (t) => (0, l.jsx)(e, { ...t, channel: G, guild: B });
                                });
                            },
                            handleClick: () => {
                                let e = w.A.getMessages(G.id);
                                if (M) {
                                    (0, p.pX)(T.BVt.CHANNEL(G.guild_id, G.id)), (0, h.bN)(G.guild_id, null);
                                    return;
                                }
                                (0, p.uh)(G.guild_id, G.id, e.jumpTargetId);
                            },
                        }),
                    }),
                    (0, l.jsx)("div", {
                        className: R.T,
                        children: (0, l.jsx)(O.A, { channel: G, guild: B, chatInputType: _.oU.SIDEBAR }, t),
                    }),
                ],
            });
}
