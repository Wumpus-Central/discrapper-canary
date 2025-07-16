(t.d(n, { Z: () => R }), t(539854));
var l = t(255367),
    r = t(73800),
    i = t(442837),
    a = t(481060),
    o = t(239091),
    s = t(561472),
    c = t(36311),
    d = t(622822),
    u = t(367907),
    m = t(188471),
    h = t(541716),
    p = t(526120),
    f = t(563534),
    g = t(736052),
    x = t(665149),
    _ = t(442336),
    C = t(910611),
    j = t(41776),
    b = t(703656),
    v = t(6025),
    y = t(592125),
    O = t(703558),
    Z = t(731290),
    N = t(430824),
    I = t(375954),
    w = t(594174),
    P = t(933557),
    E = t(287746),
    S = t(981631),
    T = t(388032),
    B = t(560460);
function A(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            l = Object.keys(t);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            l.forEach(function (n) {
                var l;
                ((l = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = l));
            }));
    }
    return e;
}
function k(e, n) {
    return (
        (n = null != n ? n : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : (function (e, n) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, l);
                  }
                  return t;
              })(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              }),
        e
    );
}
function R(e) {
    let { channelId: n, baseChannelId: R, channelViewSource: D = 'Split View', isResourceChannelView: L } = e,
        M = (0, i.e7)([y.Z], () => y.Z.getChannel(n)),
        H = (0, i.e7)([N.Z], () => N.Z.getGuild(null == M ? void 0 : M.getGuildId())),
        U = (0, i.e7)([w.default], () => w.default.getCurrentUser()),
        G = (0, i.e7)([Z.Z], () => Z.Z.didAgree(null == M ? void 0 : M.guild_id)),
        W = (null == U ? void 0 : U.nsfwAllowed) === !0,
        F = (0, P.ZP)(M),
        z = (0, i.e7)([j.Z], () => (null == H ? void 0 : H.id) != null && j.Z.isLurking(H.id), [H]),
        q = (0, g.Z)(n),
        X = (0, i.e7)([f.Z], () => {
            var e;
            return null == (e = f.Z.getResourceForChannel(null == H ? void 0 : H.id, n)) ? void 0 : e.title;
        }),
        V = r.useRef(!1);
    if (
        (r.useEffect(() => {
            null == M || V.current || ((V.current = !0), (0, u.yw)(S.rMx.CHANNEL_OPENED, k(A({}, (0, u.$H)(M.id)), { channel_view: D })), (0, m.a)(S.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: M.id }));
        }, [M, D]),
        null == M || null == H)
    )
        return null;
    let J = [];
    return (z || J.push((0, l.jsx)(_.Z, { channel: M }, 'notifications')),
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
                          channelName: q ? X : F,
                          guild: H,
                          inSidebar: !0,
                          handleContextMenu: (e) => {
                              (0, o.jW)(e, async () => {
                                  let { default: e } = await t.e('24783').then(t.bind(t, 439635));
                                  return (n) =>
                                      (0, l.jsx)(
                                          e,
                                          k(A({}, n), {
                                              channel: M,
                                              guild: H
                                          })
                                      );
                              });
                          },
                          handleClick: () => {
                              let e = I.Z.getMessages(M.id);
                              if (L) {
                                  ((0, b.uL)(S.Z5c.CHANNEL(M.guild_id, M.id)), (0, p.C3)(M.guild_id, null));
                                  return;
                              }
                              (0, b.XU)(M.guild_id, M.id, e.jumpTargetId);
                          }
                      })
                  }),
                  (0, l.jsx)('div', {
                      className: B.chat,
                      children: (0, l.jsx)(
                          E.Z,
                          {
                              channel: M,
                              guild: H,
                              chatInputType: h.Ie.SIDEBAR
                          },
                          n
                      )
                  })
              ]
          })
        : (0, l.jsx)(c.Z, {
              guild: H,
              channelId: M.id
          });
}
