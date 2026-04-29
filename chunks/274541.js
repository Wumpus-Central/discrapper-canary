l.d(n, { A: () => q }), l(321073);
var i = l(627968),
    t = l(64700),
    a = l(17928),
    d = l(789645),
    s = l(442433),
    u = l(738876),
    c = l(323073),
    r = l(58149),
    h = l(973854),
    A = l(355622),
    g = l(225142),
    o = l(701785),
    p = l(429933),
    C = l(58736),
    b = l(187360),
    j = l(683442),
    x = l(857071),
    f = l(976860),
    I = l(138298),
    N = l(288254),
    k = l(873614),
    _ = l(522556),
    w = l(734057),
    y = l(31717),
    E = l(71393),
    G = l(232835),
    L = l(47167),
    m = l(806202),
    T = l(652215),
    v = l(985018),
    S = l(906462);
function q(e) {
    let { channelId: n, baseChannelId: q, channelViewSource: B = "Split View", isResourceChannelView: F } = e,
        H = (0, a.bG)([w.A], () => w.A.getChannel(n)),
        M = (0, a.bG)([E.A], () => E.A.getGuild(H?.getGuildId())),
        P = (0, L.Ay)(H),
        R = (0, a.bG)([x.A], () => M?.id != null && x.A.isLurking(M.id), [M]),
        V = (0, p.A)(n),
        z = (0, a.bG)([o.h], () => o.h.getResourceForChannel(M?.id, n)?.title),
        D = (0, c.vL)(H),
        U = (0, N.Uf)(H),
        O = t.useRef(!1);
    if (
        (t.useEffect(() => {
            null == H ||
                O.current ||
                ((O.current = !0),
                (0, r.zV)(T.HAw.CHANNEL_OPENED, { ...(0, r.qL)(H.id), channel_view: B }),
                (0, h.A)({ channelId: H.id }));
        }, [H, B]),
        null == H || null == M)
    )
        return null;
    let X = [];
    return (R || X.push((0, i.jsx)(b.A, { channel: H }, "notifications")),
    X.push(
        (0, i.jsx)(
            C.Ay.Icon,
            { icon: d.P, tooltip: v.intl.string(v.t.cpT0Cq), onClick: () => I.A.closeChannelSidebar(q) },
            "close",
        ),
    ),
    D)
        ? (0, i.jsx)(_.A, { guild: M, channelId: H.id })
        : null != U
          ? (0, i.jsx)(k.A, { guild: M, channelId: U })
          : (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(u.A, { channel: H, draftType: y.C.ChannelMessage }),
                    (0, i.jsx)(C.Ay, {
                        toolbar: X,
                        "aria-label": v.intl.string(v.t.BIYAqa),
                        children: (0, j.zF)({
                            channel: H,
                            channelName: V ? z : P,
                            guild: M,
                            inSidebar: !0,
                            handleContextMenu: (e) => {
                                (0, s.L3)(e, async () => {
                                    let { default: e } = await Promise.all([
                                        l.e("26132"),
                                        l.e("34971"),
                                        l.e("43266"),
                                        l.e("9004"),
                                        l.e("30997"),
                                        l.e("12255"),
                                        l.e("40959"),
                                        l.e("79995"),
                                        l.e("44058"),
                                        l.e("91377"),
                                        l.e("35723"),
                                        l.e("66540"),
                                        l.e("29542"),
                                        l.e("59545"),
                                    ]).then(l.bind(l, 22496));
                                    return (n) => (0, i.jsx)(e, { ...n, channel: H, guild: M });
                                });
                            },
                            handleClick: () => {
                                let e = G.A.getMessages(H.id);
                                if (F) {
                                    (0, f.pX)(T.BVt.CHANNEL(H.guild_id, H.id)), (0, g.bN)(H.guild_id, null);
                                    return;
                                }
                                (0, f.uh)(H.guild_id, H.id, e.jumpTargetId);
                            },
                        }),
                    }),
                    (0, i.jsx)("div", {
                        className: S.T,
                        children: (0, i.jsx)(m.A, { channel: H, guild: M, chatInputType: A.oU.SIDEBAR }, n),
                    }),
                ],
            });
}
