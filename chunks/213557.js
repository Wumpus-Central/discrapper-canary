(n.d(t, { Z: () => R }), n(539854));
var l = n(255367),
    r = n(73800),
    i = n(442837),
    a = n(481060),
    o = n(239091),
    s = n(561472),
    c = n(36311),
    d = n(622822),
    u = n(367907),
    m = n(188471),
    h = n(541716),
    p = n(526120),
    f = n(563534),
    g = n(736052),
    x = n(665149),
    _ = n(442336),
    C = n(910611),
    b = n(41776),
    j = n(703656),
    v = n(6025),
    y = n(592125),
    O = n(703558),
    Z = n(731290),
    N = n(430824),
    I = n(375954),
    w = n(594174),
    P = n(933557),
    E = n(287746),
    S = n(981631),
    T = n(388032),
    A = n(560460);
function k(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            l.forEach(function (t) {
                var l;
                ((l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = l));
            }));
    }
    return e;
}
function B(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function R(e) {
    let { channelId: t, baseChannelId: R, channelViewSource: D = 'Split View', isResourceChannelView: L } = e,
        M = (0, i.e7)([y.Z], () => y.Z.getChannel(t)),
        H = (0, i.e7)([N.Z], () => N.Z.getGuild(null == M ? void 0 : M.getGuildId())),
        U = (0, i.e7)([w.default], () => w.default.getCurrentUser()),
        G = (0, i.e7)([Z.Z], () => Z.Z.didAgree(null == M ? void 0 : M.guild_id)),
        W = (null == U ? void 0 : U.nsfwAllowed) === !0,
        F = (0, P.ZP)(M),
        q = (0, i.e7)([b.Z], () => (null == H ? void 0 : H.id) != null && b.Z.isLurking(H.id), [H]),
        z = (0, g.Z)(t),
        X = (0, i.e7)([f.Z], () => {
            var e;
            return null == (e = f.Z.getResourceForChannel(null == H ? void 0 : H.id, t)) ? void 0 : e.title;
        }),
        V = r.useRef(!1);
    if (
        (r.useEffect(() => {
            null == M || V.current || ((V.current = !0), (0, u.yw)(S.rMx.CHANNEL_OPENED, B(k({}, (0, u.$H)(M.id)), { channel_view: D })), (0, m.a)(S.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: M.id }));
        }, [M, D]),
        null == M || null == H)
    )
        return null;
    let J = [];
    return (q || J.push((0, l.jsx)(_.Z, { channel: M }, 'notifications')),
    J.push(
        (0, l.jsx)(
            x.ZP.Icon,
            {
                icon: a.Dio,
                tooltip: T.intl.string(T.t.cpT0Cg),
                onClick: () => v.Z.closeChannelSidebar(R)
            },
            'close'
        )
    ),
    !(0, d.aC)(M) || (W && G))
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(s.Z, {
                      channel: M,
                      draftType: O.d.ChannelMessage
                  }),
                  (0, l.jsx)(x.ZP, {
                      toolbar: J,
                      'aria-label': T.intl.string(T.t.BIYAqa),
                      children: (0, C.ud)({
                          channel: M,
                          channelName: z ? X : F,
                          guild: H,
                          inSidebar: !0,
                          handleContextMenu: (e) => {
                              (0, o.jW)(e, async () => {
                                  let { default: e } = await n.e('24783').then(n.bind(n, 439635));
                                  return (t) =>
                                      (0, l.jsx)(
                                          e,
                                          B(k({}, t), {
                                              channel: M,
                                              guild: H
                                          })
                                      );
                              });
                          },
                          handleClick: () => {
                              let e = I.Z.getMessages(M.id);
                              if (L) {
                                  ((0, j.uL)(S.Z5c.CHANNEL(M.guild_id, M.id)), (0, p.C3)(M.guild_id, null));
                                  return;
                              }
                              (0, j.XU)(M.guild_id, M.id, e.jumpTargetId);
                          }
                      })
                  }),
                  (0, l.jsx)('div', {
                      className: A.chat,
                      children: (0, l.jsx)(
                          E.Z,
                          {
                              channel: M,
                              guild: H,
                              chatInputType: h.Ie.SIDEBAR
                          },
                          t
                      )
                  })
              ]
          })
        : (0, l.jsx)(c.Z, {
              guild: H,
              channelId: M.id
          });
}
