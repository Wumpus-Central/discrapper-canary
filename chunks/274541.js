t.d(n, { A: () => M }), t(321073);
var l = t(627968),
    i = t(64700),
    s = t(311907),
    a = t(789645),
    r = t(442433),
    d = t(738876),
    c = t(323073),
    o = t(58149),
    u = t(973854),
    _ = t(355622),
    h = t(225142),
    m = t(701785),
    x = t(265869),
    A = t(58736),
    C = t(187360),
    g = t(353428),
    f = t(857071),
    p = t(976860),
    N = t(138298),
    j = t(288254),
    v = t(873614),
    b = t(522556),
    E = t(734057),
    I = t(31717),
    w = t(71393),
    S = t(320501),
    y = t(47167),
    D = t(698718),
    O = t(652215),
    L = t(985018),
    R = t(906462);
function M(e) {
    let { channelId: n, baseChannelId: M, channelViewSource: G = "Split View", isResourceChannelView: B } = e,
        T = (0, s.bG)([E.A], () => E.A.getChannel(n)),
        k = (0, s.bG)([w.A], () => w.A.getGuild(T?.getGuildId())),
        H = (0, y.Ay)(T),
        P = (0, s.bG)([f.A], () => k?.id != null && f.A.isLurking(k.id), [k]),
        U = (0, x.A)(n),
        V = (0, s.bG)([m.h], () => m.h.getResourceForChannel(k?.id, n)?.title),
        F = (0, c.vL)(T),
        W = (0, j.Uf)(T),
        q = i.useRef(!1);
    if (
        (i.useEffect(() => {
            null == T ||
                q.current ||
                ((q.current = !0),
                (0, o.zV)(O.HAw.CHANNEL_OPENED, { ...(0, o.qL)(T.id), channel_view: G }),
                (0, u.A)({ channelId: T.id }));
        }, [T, G]),
        null == T || null == k)
    )
        return null;
    let K = [];
    return (P || K.push((0, l.jsx)(C.A, { channel: T }, "notifications")),
    K.push(
        (0, l.jsx)(
            A.Ay.Icon,
            { icon: a.P, tooltip: L.intl.string(L.t.cpT0Cq), onClick: () => N.A.closeChannelSidebar(M) },
            "close",
        ),
    ),
    F)
        ? (0, l.jsx)(b.A, { guild: k, channelId: T.id })
        : null != W
          ? (0, l.jsx)(v.A, { guild: k, channelId: W })
          : (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(d.A, { channel: T, draftType: I.C.ChannelMessage }),
                    (0, l.jsx)(A.Ay, {
                        toolbar: K,
                        "aria-label": L.intl.string(L.t.BIYAqa),
                        children: (0, g.zF)({
                            channel: T,
                            channelName: U ? V : H,
                            guild: k,
                            inSidebar: !0,
                            handleContextMenu: (e) => {
                                (0, r.L3)(e, async () => {
                                    let { default: e } = await t.e("17425").then(t.bind(t, 340968));
                                    return (n) => (0, l.jsx)(e, { ...n, channel: T, guild: k });
                                });
                            },
                            handleClick: () => {
                                let e = S.A.getMessages(T.id);
                                if (B) {
                                    (0, p.pX)(O.BVt.CHANNEL(T.guild_id, T.id)), (0, h.bN)(T.guild_id, null);
                                    return;
                                }
                                (0, p.uh)(T.guild_id, T.id, e.jumpTargetId);
                            },
                        }),
                    }),
                    (0, l.jsx)("div", {
                        className: R.T,
                        children: (0, l.jsx)(D.A, { channel: T, guild: k, chatInputType: _.oU.SIDEBAR }, n),
                    }),
                ],
            });
}
