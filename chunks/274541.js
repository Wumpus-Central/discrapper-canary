t.d(n, { A: () => D }), t(321073);
var l = t(627968),
    i = t(64700),
    s = t(311907),
    a = t(397927),
    r = t(442433),
    d = t(738876),
    c = t(323073),
    o = t(58149),
    u = t(973854),
    _ = t(355622),
    h = t(225142),
    x = t(701785),
    m = t(265869),
    g = t(58736),
    A = t(187360),
    C = t(353428),
    f = t(857071),
    p = t(976860),
    N = t(138298),
    j = t(288254),
    v = t(873614),
    b = t(522556),
    I = t(734057),
    E = t(31717),
    S = t(71393),
    w = t(320501),
    y = t(47167),
    O = t(698718),
    T = t(652215),
    L = t(985018),
    R = t(368526);
function D(e) {
    let { channelId: n, baseChannelId: D, channelViewSource: H = "Split View", isResourceChannelView: M } = e,
        G = (0, s.bG)([I.A], () => I.A.getChannel(n)),
        B = (0, s.bG)([S.A], () => S.A.getGuild(G?.getGuildId())),
        k = (0, y.Ay)(G),
        P = (0, s.bG)([f.A], () => B?.id != null && f.A.isLurking(B.id), [B]),
        U = (0, m.A)(n),
        V = (0, s.bG)([x.h], () => x.h.getResourceForChannel(B?.id, n)?.title),
        F = (0, c.vL)(G),
        W = (0, j.IL)(G),
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
    return (P || K.push((0, l.jsx)(A.A, { channel: G }, "notifications")),
    K.push(
        (0, l.jsx)(
            g.Ay.Icon,
            { icon: a.PGe, tooltip: L.intl.string(L.t.cpT0Cq), onClick: () => N.A.closeChannelSidebar(D) },
            "close",
        ),
    ),
    F)
        ? (0, l.jsx)(b.A, { guild: B, channelId: G.id })
        : W
          ? (0, l.jsx)(v.A, { guild: B, channelId: G.id })
          : (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(d.A, { channel: G, draftType: E.C.ChannelMessage }),
                    (0, l.jsx)(g.Ay, {
                        toolbar: K,
                        "aria-label": L.intl.string(L.t.BIYAqa),
                        children: (0, C.zF)({
                            channel: G,
                            channelName: U ? V : k,
                            guild: B,
                            inSidebar: !0,
                            handleContextMenu: (e) => {
                                (0, r.L3)(e, async () => {
                                    let { default: e } = await t.e("17425").then(t.bind(t, 340968));
                                    return (n) => (0, l.jsx)(e, { ...n, channel: G, guild: B });
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
                        children: (0, l.jsx)(O.A, { channel: G, guild: B, chatInputType: _.oU.SIDEBAR }, n),
                    }),
                ],
            });
}
