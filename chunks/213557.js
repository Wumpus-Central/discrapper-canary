t.d(n, { Z: () => A }), t(653041);
var r = t(200651),
    l = t(192379),
    a = t(442837),
    i = t(481060),
    o = t(239091),
    s = t(561472),
    c = t(36311),
    d = t(367907),
    u = t(188471),
    m = t(541716),
    h = t(526120),
    p = t(563534),
    f = t(736052),
    g = t(665149),
    x = t(442336),
    _ = t(910611),
    C = t(41776),
    j = t(703656),
    b = t(6025),
    N = t(592125),
    v = t(703558),
    y = t(731290),
    O = t(430824),
    I = t(375954),
    Z = t(594174),
    w = t(933557),
    P = t(287746),
    E = t(981631),
    S = t(388032),
    T = t(560460);
function B(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            r.forEach(function (n) {
                var r;
                (r = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = r);
            });
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
                      var r = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, r);
                  }
                  return t;
              })(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              }),
        e
    );
}
function A(e) {
    let { channelId: n, baseChannelId: A, channelViewSource: R = 'Split View', isResourceChannelView: D } = e,
        W = (0, a.e7)([N.Z], () => N.Z.getChannel(n)),
        L = (0, a.e7)([O.Z], () => O.Z.getGuild(null == W ? void 0 : W.getGuildId())),
        M = (0, a.e7)([Z.default], () => Z.default.getCurrentUser()),
        H = (0, a.e7)([y.Z], () => y.Z.didAgree(null == W ? void 0 : W.guild_id)),
        U = (null == M ? void 0 : M.nsfwAllowed) === !0,
        G = (0, w.ZP)(W),
        F = (0, a.e7)([C.Z], () => (null == L ? void 0 : L.id) != null && C.Z.isLurking(L.id), [L]),
        z = (0, f.Z)(n),
        q = (0, a.e7)([p.Z], () => {
            var e;
            return null == (e = p.Z.getResourceForChannel(null == L ? void 0 : L.id, n)) ? void 0 : e.title;
        }),
        X = l.useRef(!1);
    if (
        (l.useEffect(() => {
            null == W || X.current || ((X.current = !0), (0, d.yw)(E.rMx.CHANNEL_OPENED, k(B({}, (0, d.$H)(W.id)), { channel_view: R })), (0, u.a)(E.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: W.id }));
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
                onClick: () => b.Z.closeChannelSidebar(A)
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
                                  let { default: e } = await t.e('24783').then(t.bind(t, 439635));
                                  return (n) =>
                                      (0, r.jsx)(
                                          e,
                                          k(B({}, n), {
                                              channel: W,
                                              guild: L
                                          })
                                      );
                              });
                          },
                          handleClick: () => {
                              let e = I.Z.getMessages(W.id);
                              if (D) {
                                  (0, j.uL)(E.Z5c.CHANNEL(W.guild_id, W.id)), (0, h.C3)(W.guild_id, null);
                                  return;
                              }
                              (0, j.XU)(W.guild_id, W.id, e.jumpTargetId);
                          }
                      })
                  }),
                  (0, r.jsx)('div', {
                      className: T.chat,
                      children: (0, r.jsx)(
                          P.Z,
                          {
                              channel: W,
                              guild: L,
                              chatInputType: m.Ie.SIDEBAR
                          },
                          n
                      )
                  })
              ]
          })
        : (0, r.jsx)(c.Z, {
              guild: L,
              channelId: W.id
          });
}
