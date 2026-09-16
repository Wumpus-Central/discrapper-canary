(l.d(n, { A: () => w }), l(321073));
var t = l(477900),
    i = l(582128),
    a = l(17928),
    s = l(789645),
    r = l(442433),
    c = l(738876),
    d = l(323073),
    u = l(95561),
    o = l(973854),
    A = l(355622),
    h = l(225142),
    g = l(701785),
    m = l(429933),
    x = l(58736),
    f = l(187360),
    j = l(353428),
    N = l(857071),
    p = l(976860),
    C = l(138298),
    E = l(288254),
    I = l(873614),
    b = l(522556),
    _ = l(734057),
    y = l(31717),
    T = l(71393),
    S = l(232835),
    v = l(47167),
    k = l(688438),
    R = l(652215),
    G = l(375708),
    L = l(172039);
function w(e) {
    let { channelId: n, baseChannelId: w, channelViewSource: B = "Split View", isResourceChannelView: D } = e,
        F = (0, a.bG)([_.A], () => _.A.getChannel(n)),
        H = (0, a.bG)([T.A], () => T.A.getGuild(F?.getGuildId())),
        V = (0, v.Ay)(F),
        O = (0, a.bG)([N.A], () => H?.id != null && N.A.isLurking(H.id), [H]),
        P = (0, m.A)(n),
        M = (0, a.bG)([g.h], () => g.h.getResourceForChannel(H?.id, n)?.title),
        U = (0, d.vL)(F),
        q = (0, E.Uf)(F),
        z = i.useRef(!1);
    if (
        (i.useEffect(() => {
            null == F ||
                z.current ||
                ((z.current = !0),
                (0, u.zV)(R.HAw.CHANNEL_OPENED, { ...(0, u.qL)(F.id), channel_view: B }),
                (0, o.A)({ channelId: F.id }));
        }, [F, B]),
        null == F || null == H)
    )
        return null;
    let X = n === w,
        Y = [];
    return (O || X || Y.push((0, t.jsx)(f.A, { channel: F }, "notifications")),
    Y.push(
        (0, t.jsx)(
            x.Ay.Icon,
            { icon: s.P, tooltip: G.intl.string(G.t.cpT0Cq), onClick: () => C.A.closeChannelSidebar(w) },
            "close",
        ),
    ),
    U)
        ? (0, t.jsx)(b.A, { guild: H, channelId: F.id })
        : null != q
          ? (0, t.jsx)(I.A, { guild: H, channelId: q })
          : (0, t.jsxs)(t.Fragment, {
                children: [
                    (0, t.jsx)(c.A, { channel: F, draftType: y.C.ChannelMessage }),
                    (0, t.jsx)(x.Ay, {
                        toolbar: Y,
                        "aria-label": G.intl.string(G.t.BIYAqa),
                        children: (0, j.zF)({
                            channel: F,
                            channelName: P ? M : V,
                            guild: H,
                            inSidebar: !0,
                            handleContextMenu: function (e) {
                                null != F &&
                                    null != H &&
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
                                        return (n) => (0, t.jsx)(e, { ...n, channel: F, guild: H });
                                    });
                            },
                            handleClick: X
                                ? void 0
                                : function () {
                                      if (null == F) return;
                                      let e = S.A.getMessages(F.id);
                                      if (D) {
                                          ((0, p.pX)(R.BVt.CHANNEL(F.guild_id, F.id)), (0, h.bN)(F.guild_id, null));
                                          return;
                                      }
                                      (0, p.uh)(F.guild_id, F.id, e.jumpTargetId);
                                  },
                        }),
                    }),
                    (0, t.jsx)("div", {
                        className: L.T,
                        children: (0, t.jsx)(k.A, { channel: F, guild: H, chatInputType: A.oU.SIDEBAR }, n),
                    }),
                ],
            });
}
