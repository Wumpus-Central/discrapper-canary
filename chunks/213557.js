n.d(t, { Z: () => A }), n(539854);
var r = n(200651),
    l = n(192379),
    a = n(442837),
    i = n(481060),
    o = n(239091),
    s = n(561472),
    c = n(36311),
    d = n(367907),
    u = n(188471),
    m = n(541716),
    h = n(526120),
    p = n(563534),
    f = n(736052),
    g = n(665149),
    x = n(442336),
    _ = n(910611),
    C = n(41776),
    b = n(703656),
    j = n(6025),
    N = n(592125),
    v = n(703558),
    y = n(731290),
    O = n(430824),
    I = n(375954),
    Z = n(594174),
    w = n(933557),
    P = n(287746),
    E = n(981631),
    S = n(388032),
    k = n(560460);
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
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
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function A(e) {
    let { channelId: t, baseChannelId: A, channelViewSource: R = 'Split View', isResourceChannelView: D } = e,
        W = (0, a.e7)([N.Z], () => N.Z.getChannel(t)),
        L = (0, a.e7)([O.Z], () => O.Z.getGuild(null == W ? void 0 : W.getGuildId())),
        M = (0, a.e7)([Z.default], () => Z.default.getCurrentUser()),
        H = (0, a.e7)([y.Z], () => y.Z.didAgree(null == W ? void 0 : W.guild_id)),
        U = (null == M ? void 0 : M.nsfwAllowed) === !0,
        G = (0, w.ZP)(W),
        F = (0, a.e7)([C.Z], () => (null == L ? void 0 : L.id) != null && C.Z.isLurking(L.id), [L]),
        z = (0, f.Z)(t),
        q = (0, a.e7)([p.Z], () => {
            var e;
            return null == (e = p.Z.getResourceForChannel(null == L ? void 0 : L.id, t)) ? void 0 : e.title;
        }),
        X = l.useRef(!1);
    if (
        (l.useEffect(() => {
            null == W || X.current || ((X.current = !0), (0, d.yw)(E.rMx.CHANNEL_OPENED, B(T({}, (0, d.$H)(W.id)), { channel_view: R })), (0, u.a)(E.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: W.id }));
        }, [W, R]),
        null == W || null == L)
    )
        return null;
    let V = [];
    return (F || V.push((0, r.jsx)(x.Z, { channel: W }, 'notifications')),
    V.push(
        (0, r.jsx)(
            g.ZP.Icon,
            {
                icon: i.Dio,
                tooltip: S.NW.string(S.t.cpT0Cg),
                onClick: () => j.Z.closeChannelSidebar(A)
            },
            'close'
        )
    ),
    !W.isNSFW() || (U && H))
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(s.Z, {
                      channel: W,
                      draftType: v.d.ChannelMessage
                  }),
                  (0, r.jsx)(g.ZP, {
                      toolbar: V,
                      'aria-label': S.NW.string(S.t.BIYAqa),
                      children: (0, _.ud)({
                          channel: W,
                          channelName: z ? q : G,
                          guild: L,
                          inSidebar: !0,
                          handleContextMenu: (e) => {
                              (0, o.jW)(e, async () => {
                                  let { default: e } = await n.e('24783').then(n.bind(n, 439635));
                                  return (t) =>
                                      (0, r.jsx)(
                                          e,
                                          B(T({}, t), {
                                              channel: W,
                                              guild: L
                                          })
                                      );
                              });
                          },
                          handleClick: () => {
                              let e = I.Z.getMessages(W.id);
                              if (D) {
                                  (0, b.uL)(E.Z5c.CHANNEL(W.guild_id, W.id)), (0, h.C3)(W.guild_id, null);
                                  return;
                              }
                              (0, b.XU)(W.guild_id, W.id, e.jumpTargetId);
                          }
                      })
                  }),
                  (0, r.jsx)('div', {
                      className: k.chat,
                      children: (0, r.jsx)(
                          P.Z,
                          {
                              channel: W,
                              guild: L,
                              chatInputType: m.Ie.SIDEBAR
                          },
                          t
                      )
                  })
              ]
          })
        : (0, r.jsx)(c.Z, {
              guild: L,
              channelId: W.id
          });
}
