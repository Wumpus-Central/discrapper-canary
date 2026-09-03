n.d(l, { A: () => w }), n(321073);
var t = n(477900),
    i = n(582128),
    a = n(17928),
    s = n(789645),
    r = n(442433),
    c = n(738876),
    u = n(323073),
    d = n(95561),
    o = n(973854),
    A = n(355622),
    h = n(225142),
    g = n(701785),
    m = n(429933),
    x = n(58736),
    f = n(187360),
    j = n(353428),
    N = n(857071),
    C = n(976860),
    E = n(138298),
    p = n(288254),
    I = n(873614),
    _ = n(522556),
    b = n(734057),
    T = n(31717),
    S = n(71393),
    y = n(232835),
    v = n(47167),
    k = n(802426),
    R = n(652215),
    G = n(375708),
    L = n(172039);
function w(e) {
    let { channelId: l, baseChannelId: w, channelViewSource: D = "Split View", isResourceChannelView: F } = e,
        B = (0, a.bG)([b.A], () => b.A.getChannel(l)),
        H = (0, a.bG)([S.A], () => S.A.getGuild(B?.getGuildId())),
        O = (0, v.Ay)(B),
        P = (0, a.bG)([N.A], () => H?.id != null && N.A.isLurking(H.id), [H]),
        V = (0, m.A)(l),
        M = (0, a.bG)([g.h], () => g.h.getResourceForChannel(H?.id, l)?.title),
        U = (0, u.vL)(B),
        q = (0, p.Uf)(B),
        z = i.useRef(!1);
    if (
        (i.useEffect(() => {
            null == B ||
                z.current ||
                ((z.current = !0),
                (0, d.zV)(R.HAw.CHANNEL_OPENED, { ...(0, d.qL)(B.id), channel_view: D }),
                (0, o.A)({ channelId: B.id }));
        }, [B, D]),
        null == B || null == H)
    )
        return null;
    let W = l === w,
        X = [];
    return (P || W || X.push((0, t.jsx)(f.A, { channel: B }, "notifications")),
    X.push(
        (0, t.jsx)(
            x.Ay.Icon,
            { icon: s.P, tooltip: G.intl.string(G.t.cpT0Cq), onClick: () => E.A.closeChannelSidebar(w) },
            "close",
        ),
    ),
    U)
        ? (0, t.jsx)(_.A, { guild: H, channelId: B.id })
        : null != q
          ? (0, t.jsx)(I.A, { guild: H, channelId: q })
          : (0, t.jsxs)(t.Fragment, {
                children: [
                    (0, t.jsx)(c.A, { channel: B, draftType: T.C.ChannelMessage }),
                    (0, t.jsx)(x.Ay, {
                        toolbar: X,
                        "aria-label": G.intl.string(G.t.BIYAqa),
                        children: (0, j.zF)({
                            channel: B,
                            channelName: V ? M : O,
                            guild: H,
                            inSidebar: !0,
                            handleContextMenu: function (e) {
                                null != B &&
                                    null != H &&
                                    (0, r.L3)(e, async () => {
                                        let { default: e } = await Promise.all([
                                            n.e("926132"),
                                            n.e("947502"),
                                            n.e("343266"),
                                            n.e("309004"),
                                            n.e("412255"),
                                            n.e("63340"),
                                            n.e("430997"),
                                            n.e("379995"),
                                            n.e("544058"),
                                            n.e("591377"),
                                            n.e("35723"),
                                            n.e("256372"),
                                            n.e("29542"),
                                            n.e("359545"),
                                        ]).then(n.bind(n, 22496));
                                        return (l) => (0, t.jsx)(e, { ...l, channel: B, guild: H });
                                    });
                            },
                            handleClick: W
                                ? void 0
                                : function () {
                                      if (null == B) return;
                                      let e = y.A.getMessages(B.id);
                                      if (F) {
                                          (0, C.pX)(R.BVt.CHANNEL(B.guild_id, B.id)), (0, h.bN)(B.guild_id, null);
                                          return;
                                      }
                                      (0, C.uh)(B.guild_id, B.id, e.jumpTargetId);
                                  },
                        }),
                    }),
                    (0, t.jsx)("div", {
                        className: L.T,
                        children: (0, t.jsx)(k.A, { channel: B, guild: H, chatInputType: A.oU.SIDEBAR }, l),
                    }),
                ],
            });
}
