t.d(n, { Z: () => R }), t(653041);
var l = t(200651),
    i = t(192379),
    a = t(442837),
    r = t(481060),
    o = t(239091),
    s = t(561472),
    d = t(36311),
    c = t(367907),
    u = t(188471),
    m = t(541716),
    h = t(526120),
    x = t(563534),
    _ = t(736052),
    p = t(665149),
    f = t(442336),
    g = t(910611),
    C = t(41776),
    v = t(703656),
    I = t(6025),
    j = t(592125),
    N = t(703558),
    Z = t(731290),
    b = t(430824),
    E = t(375954),
    w = t(594174),
    S = t(933557),
    y = t(287746),
    T = t(981631),
    B = t(388032),
    A = t(837199);
function R(e) {
    let { channelId: n, baseChannelId: R, channelViewSource: k = 'Split View', isResourceChannelView: P } = e,
        L = (0, a.e7)([j.Z], () => j.Z.getChannel(n)),
        O = (0, a.e7)([b.Z], () => b.Z.getGuild(null == L ? void 0 : L.getGuildId())),
        M = (0, a.e7)([w.default], () => w.default.getCurrentUser()),
        D = (0, a.e7)([Z.Z], () => Z.Z.didAgree(null == L ? void 0 : L.guild_id)),
        H = (null == M ? void 0 : M.nsfwAllowed) === !0,
        U = (0, S.ZP)(L),
        G = (0, a.e7)([C.Z], () => (null == O ? void 0 : O.id) != null && C.Z.isLurking(O.id), [O]),
        F = (0, _.Z)(n),
        W = (0, a.e7)([x.Z], () => {
            var e;
            return null === (e = x.Z.getResourceForChannel(null == O ? void 0 : O.id, n)) || void 0 === e ? void 0 : e.title;
        }),
        z = i.useRef(!1);
    if (
        (i.useEffect(() => {
            null == L ||
                z.current ||
                ((z.current = !0),
                (0, c.yw)(T.rMx.CHANNEL_OPENED, {
                    ...(0, c.$H)(L.id),
                    channel_view: k
                }),
                (0, u.a)(T.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: L.id }));
        }, [L, k]),
        null == L || null == O)
    )
        return null;
    let q = [];
    return (G || q.push((0, l.jsx)(f.Z, { channel: L }, 'notifications')),
    q.push(
        (0, l.jsx)(
            p.ZP.Icon,
            {
                icon: r.Dio,
                tooltip: B.intl.string(B.t.cpT0Cg),
                onClick: () => I.Z.closeChannelSidebar(R)
            },
            'close'
        )
    ),
    !L.isNSFW() || (H && D))
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(s.Z, {
                      channel: L,
                      draftType: N.d.ChannelMessage
                  }),
                  (0, l.jsx)(p.ZP, {
                      toolbar: q,
                      'aria-label': B.intl.string(B.t.BIYAqa),
                      children: (0, g.ud)({
                          channel: L,
                          channelName: F ? W : U,
                          guild: O,
                          inSidebar: !0,
                          handleContextMenu: (e) => {
                              (0, o.jW)(e, async () => {
                                  let { default: e } = await t.e('24783').then(t.bind(t, 439635));
                                  return (n) =>
                                      (0, l.jsx)(e, {
                                          ...n,
                                          channel: L,
                                          guild: O
                                      });
                              });
                          },
                          handleClick: () => {
                              let e = E.Z.getMessages(L.id);
                              if (P) {
                                  (0, v.uL)(T.Z5c.CHANNEL(L.guild_id, L.id)), (0, h.C3)(L.guild_id, null);
                                  return;
                              }
                              (0, v.XU)(L.guild_id, L.id, e.jumpTargetId);
                          }
                      })
                  }),
                  (0, l.jsx)('div', {
                      className: A.chat,
                      children: (0, l.jsx)(
                          y.Z,
                          {
                              channel: L,
                              guild: O,
                              chatInputType: m.Ie.SIDEBAR
                          },
                          n
                      )
                  })
              ]
          })
        : (0, l.jsx)(d.Z, { guild: O });
}
