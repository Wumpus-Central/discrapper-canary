n.d(t, { A: () => L }), n(321073);
var l = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(397927),
    r = n(442433),
    d = n(738876),
    c = n(323073),
    o = n(58149),
    u = n(237774),
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
    j = n(522556),
    v = n(734057),
    b = n(31717),
    I = n(71393),
    E = n(320501),
    S = n(47167),
    w = n(698718),
    y = n(652215),
    O = n(985018),
    T = n(305585);
function L(e) {
    let { channelId: t, baseChannelId: L, channelViewSource: R = "Split View", isResourceChannelView: D } = e,
        H = (0, s.bG)([v.A], () => v.A.getChannel(t)),
        M = (0, s.bG)([I.A], () => I.A.getGuild(H?.getGuildId())),
        G = (0, S.Ay)(H),
        B = (0, s.bG)([f.A], () => M?.id != null && f.A.isLurking(M.id), [M]),
        k = (0, m.A)(t),
        P = (0, s.bG)([x.h], () => x.h.getResourceForChannel(M?.id, t)?.title),
        U = (0, c.vL)(H),
        V = i.useRef(!1);
    if (
        (i.useEffect(() => {
            null == H ||
                V.current ||
                ((V.current = !0),
                (0, o.zV)(y.HAw.CHANNEL_OPENED, { ...(0, o.qL)(H.id), channel_view: R }),
                (0, u.k)(y.HAw.CHANNEL_OPENED_CLICKSTREAM, { channelId: H.id }));
        }, [H, R]),
        null == H || null == M)
    )
        return null;
    let F = [];
    return (B || F.push((0, l.jsx)(g.A, { channel: H }, "notifications")),
    F.push(
        (0, l.jsx)(
            A.Ay.Icon,
            { icon: a.PGe, tooltip: O.intl.string(O.t.cpT0Cq), onClick: () => N.A.closeChannelSidebar(L) },
            "close",
        ),
    ),
    U)
        ? (0, l.jsx)(j.A, { guild: M, channelId: H.id })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(d.A, { channel: H, draftType: b.C.ChannelMessage }),
                  (0, l.jsx)(A.Ay, {
                      toolbar: F,
                      "aria-label": O.intl.string(O.t.BIYAqa),
                      children: (0, C.zF)({
                          channel: H,
                          channelName: k ? P : G,
                          guild: M,
                          inSidebar: !0,
                          handleContextMenu: (e) => {
                              (0, r.L3)(e, async () => {
                                  let { default: e } = await n.e("39806").then(n.bind(n, 340968));
                                  return (t) => (0, l.jsx)(e, { ...t, channel: H, guild: M });
                              });
                          },
                          handleClick: () => {
                              let e = E.A.getMessages(H.id);
                              if (D) {
                                  (0, p.pX)(y.BVt.CHANNEL(H.guild_id, H.id)), (0, h.bN)(H.guild_id, null);
                                  return;
                              }
                              (0, p.uh)(H.guild_id, H.id, e.jumpTargetId);
                          },
                      }),
                  }),
                  (0, l.jsx)("div", {
                      className: T.T,
                      children: (0, l.jsx)(w.A, { channel: H, guild: M, chatInputType: _.oU.SIDEBAR }, t),
                  }),
              ],
          });
}
