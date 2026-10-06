(l.d(n, { A: () => B }), l(321073));
var t = l(477900),
    i = l(582128),
    a = l(17928),
    s = l(789645),
    r = l(442433),
    c = l(738876),
    d = l(323073),
    u = l(666860),
    o = l(806411),
    A = l(973854),
    g = l(355622),
    h = l(225142),
    m = l(701785),
    x = l(429933),
    f = l(58736),
    j = l(187360),
    N = l(353428),
    p = l(857071),
    C = l(976860),
    E = l(138298),
    I = l(288254),
    b = l(873614),
    _ = l(522556),
    y = l(734057),
    T = l(31717),
    S = l(71393),
    v = l(232835),
    k = l(47167),
    R = l(688438),
    G = l(652215),
    L = l(375708),
    w = l(172039);
function B(e) {
    let { channelId: n, baseChannelId: B, channelViewSource: D = "Split View", isResourceChannelView: F } = e,
        H = (0, a.bG)([y.A], () => y.A.getChannel(n)),
        V = (0, a.bG)([S.A], () => S.A.getGuild(H?.getGuildId())),
        O = (0, k.Ay)(H),
        P = (0, a.bG)([p.A], () => V?.id != null && p.A.isLurking(V.id), [V]),
        M = (0, x.A)(n),
        U = (0, a.bG)([m.h], () => m.h.getResourceForChannel(V?.id, n)?.title),
        q = (0, d.vL)(H),
        z = (0, I.Uf)(H),
        X = i.useRef(!1);
    if (
        (i.useEffect(() => {
            null == H ||
                X.current ||
                ((X.current = !0),
                (0, u.zV)(G.HAw.CHANNEL_OPENED, { ...(0, o.q)(H.id), channel_view: D }),
                (0, A.A)({ channelId: H.id }));
        }, [H, D]),
        null == H || null == V)
    )
        return null;
    let Y = n === B,
        W = [];
    return (P || Y || W.push((0, t.jsx)(j.A, { channel: H }, "notifications")),
    W.push(
        (0, t.jsx)(
            f.Ay.Icon,
            { icon: s.P, tooltip: L.intl.string(L.t.cpT0Cq), onClick: () => E.A.closeChannelSidebar(B) },
            "close",
        ),
    ),
    q)
        ? (0, t.jsx)(_.A, { guild: V, channelId: H.id })
        : null != z
          ? (0, t.jsx)(b.A, { guild: V, channelId: z })
          : (0, t.jsxs)(t.Fragment, {
                children: [
                    (0, t.jsx)(c.A, { channel: H, draftType: T.C.ChannelMessage }),
                    (0, t.jsx)(f.Ay, {
                        toolbar: W,
                        "aria-label": L.intl.string(L.t.BIYAqa),
                        children: (0, N.zF)({
                            channel: H,
                            channelName: M ? U : O,
                            guild: V,
                            inSidebar: !0,
                            handleContextMenu: function (e) {
                                null != H &&
                                    null != V &&
                                    (0, r.L3)(e, async () => {
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
                                        return (n) => (0, t.jsx)(e, { ...n, channel: H, guild: V });
                                    });
                            },
                            handleClick: Y
                                ? void 0
                                : function () {
                                      if (null == H) return;
                                      let e = v.A.getMessages(H.id);
                                      if (F) {
                                          ((0, C.pX)(G.BVt.CHANNEL(H.guild_id, H.id)), (0, h.bN)(H.guild_id, null));
                                          return;
                                      }
                                      (0, C.uh)(H.guild_id, H.id, e.jumpTargetId);
                                  },
                        }),
                    }),
                    (0, t.jsx)("div", {
                        className: w.T,
                        children: (0, t.jsx)(R.A, { channel: H, guild: V, chatInputType: g.oU.SIDEBAR }, n),
                    }),
                ],
            });
}
