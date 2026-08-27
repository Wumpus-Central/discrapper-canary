l.d(n, { A: () => q }), l(321073);
var i = l(477900),
    t = l(582128),
    u = l(17928),
    a = l(789645),
    d = l(442433),
    s = l(738876),
    c = l(323073),
    r = l(95561),
    h = l(973854),
    A = l(355622),
    o = l(225142),
    g = l(701785),
    p = l(429933),
    f = l(58736),
    C = l(187360),
    b = l(353428),
    j = l(857071),
    x = l(976860),
    I = l(138298),
    N = l(288254),
    k = l(873614),
    _ = l(522556),
    w = l(734057),
    y = l(31717),
    E = l(71393),
    G = l(232835),
    L = l(47167),
    m = l(802426),
    T = l(652215),
    v = l(375708),
    S = l(172039);
function q(e) {
    let { channelId: n, baseChannelId: q, channelViewSource: B = "Split View", isResourceChannelView: F } = e,
        H = (0, u.bG)([w.A], () => w.A.getChannel(n)),
        M = (0, u.bG)([E.A], () => E.A.getGuild(H?.getGuildId())),
        P = (0, L.Ay)(H),
        R = (0, u.bG)([j.A], () => M?.id != null && j.A.isLurking(M.id), [M]),
        V = (0, p.A)(n),
        z = (0, u.bG)([g.h], () => g.h.getResourceForChannel(M?.id, n)?.title),
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
    return (R || X.push((0, i.jsx)(C.A, { channel: H }, "notifications")),
    X.push(
        (0, i.jsx)(
            f.Ay.Icon,
            { icon: a.P, tooltip: v.intl.string(v.t.cpT0Cq), onClick: () => I.A.closeChannelSidebar(q) },
            "close",
        ),
    ),
    D)
        ? (0, i.jsx)(_.A, { guild: M, channelId: H.id })
        : null != U
          ? (0, i.jsx)(k.A, { guild: M, channelId: U })
          : (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(s.A, { channel: H, draftType: y.C.ChannelMessage }),
                    (0, i.jsx)(f.Ay, {
                        toolbar: X,
                        "aria-label": v.intl.string(v.t.BIYAqa),
                        children: (0, b.zF)({
                            channel: H,
                            channelName: V ? z : P,
                            guild: M,
                            inSidebar: !0,
                            handleContextMenu: function (e) {
                                null != H &&
                                    null != M &&
                                    (0, d.L3)(e, async () => {
                                        let { default: e } = await Promise.all([
                                            l.e("926132"),
                                            l.e("947502"),
                                            l.e("343266"),
                                            l.e("309004"),
                                            l.e("412255"),
                                            l.e("63340"),
                                            l.e("430997"),
                                            l.e("379995"),
                                            l.e("544058"),
                                            l.e("591377"),
                                            l.e("35723"),
                                            l.e("256372"),
                                            l.e("29542"),
                                            l.e("359545"),
                                        ]).then(l.bind(l, 22496));
                                        return (n) => (0, i.jsx)(e, { ...n, channel: H, guild: M });
                                    });
                            },
                            handleClick: function () {
                                if (null == H) return;
                                let e = G.A.getMessages(H.id);
                                if (F) {
                                    (0, x.pX)(T.BVt.CHANNEL(H.guild_id, H.id)), (0, o.bN)(H.guild_id, null);
                                    return;
                                }
                                (0, x.uh)(H.guild_id, H.id, e.jumpTargetId);
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
