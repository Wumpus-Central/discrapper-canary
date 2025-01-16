l.d(n, {
    Z: function () {
        return P;
    }
}),
    l(653041);
var a = l(200651),
    i = l(192379),
    t = l(442837),
    r = l(481060),
    s = l(239091),
    d = l(561472),
    o = l(36311),
    c = l(367907),
    u = l(188471),
    h = l(541716),
    m = l(526120),
    g = l(563534),
    x = l(736052),
    f = l(665149),
    C = l(442336),
    v = l(910611),
    I = l(41776),
    p = l(703656),
    Z = l(6025),
    j = l(592125),
    N = l(703558),
    _ = l(731290),
    b = l(430824),
    A = l(375954),
    E = l(594174),
    S = l(933557),
    M = l(287746),
    y = l(981631),
    k = l(388032),
    w = l(837199);
function P(e) {
    let { channelId: n, baseChannelId: P, channelViewSource: B = 'Split View', isResourceChannelView: R } = e,
        T = (0, t.e7)([j.Z], () => j.Z.getChannel(n)),
        H = (0, t.e7)([b.Z], () => b.Z.getGuild(null == T ? void 0 : T.getGuildId())),
        L = (0, t.e7)([E.default], () => E.default.getCurrentUser()),
        D = (0, t.e7)([_.Z], () => _.Z.didAgree(null == T ? void 0 : T.guild_id)),
        W = (null == L ? void 0 : L.nsfwAllowed) === !0,
        U = (0, S.ZP)(T),
        G = (0, t.e7)([I.Z], () => (null == H ? void 0 : H.id) != null && I.Z.isLurking(H.id), [H]),
        O = (0, x.Z)(n),
        z = (0, t.e7)([g.Z], () => {
            var e;
            return null === (e = g.Z.getResourceForChannel(null == H ? void 0 : H.id, n)) || void 0 === e ? void 0 : e.title;
        }),
        F = i.useRef(!1);
    if (
        (i.useEffect(() => {
            null != T &&
                !F.current &&
                ((F.current = !0),
                (0, c.yw)(y.rMx.CHANNEL_OPENED, {
                    ...(0, c.$H)(T.id),
                    channel_view: B
                }),
                (0, u.a)(y.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: T.id }));
        }, [T, B]),
        null == T || null == H)
    )
        return null;
    let Y = [];
    return (!G && Y.push((0, a.jsx)(C.Z, { channel: T }, 'notifications')),
    Y.push(
        (0, a.jsx)(
            f.ZP.Icon,
            {
                icon: r.XSmallIcon,
                tooltip: k.intl.string(k.t.cpT0Cg),
                onClick: () => Z.Z.closeChannelSidebar(P)
            },
            'close'
        )
    ),
    !T.isNSFW() || (W && D))
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(d.Z, {
                      channel: T,
                      draftType: N.d.ChannelMessage
                  }),
                  (0, a.jsx)(f.ZP, {
                      toolbar: Y,
                      'aria-label': k.intl.string(k.t.BIYAqa),
                      children: (0, v.ud)({
                          channel: T,
                          channelName: O ? z : U,
                          guild: H,
                          inSidebar: !0,
                          handleContextMenu: (e) => {
                              (0, s.jW)(e, async () => {
                                  let { default: e } = await l.e('24783').then(l.bind(l, 439635));
                                  return (n) =>
                                      (0, a.jsx)(e, {
                                          ...n,
                                          channel: T,
                                          guild: H
                                      });
                              });
                          },
                          handleClick: () => {
                              let e = A.Z.getMessages(T.id);
                              if (R) {
                                  (0, p.uL)(y.Z5c.CHANNEL(T.guild_id, T.id)), (0, m.C3)(T.guild_id, null);
                                  return;
                              }
                              (0, p.XU)(T.guild_id, T.id, e.jumpTargetId);
                          }
                      })
                  }),
                  (0, a.jsx)('div', {
                      className: w.chat,
                      children: (0, a.jsx)(
                          M.Z,
                          {
                              channel: T,
                              guild: H,
                              chatInputType: h.Ie.SIDEBAR
                          },
                          n
                      )
                  })
              ]
          })
        : (0, a.jsx)(o.Z, { guild: H });
}
