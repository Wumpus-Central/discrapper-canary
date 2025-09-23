n.d(t, { Z: () => B }), n(539854);
var l = n(951288),
    r = n(647438),
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
    N = n(430824),
    Z = n(375954),
    I = n(933557),
    w = n(287746),
    P = n(981631),
    E = n(388032),
    S = n(952713);
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
function k(e, t) {
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
function B(e) {
    let { channelId: t, baseChannelId: B, channelViewSource: A = "Split View", isResourceChannelView: R } = e,
        D = (0, i.e7)([y.Z], () => y.Z.getChannel(t)),
        L = (0, i.e7)([N.Z], () => N.Z.getGuild(null == D ? void 0 : D.getGuildId())),
        M = (0, I.ZP)(D),
        H = (0, i.e7)([b.Z], () => (null == L ? void 0 : L.id) != null && b.Z.isLurking(L.id), [L]),
        U = (0, g.Z)(t),
        G = (0, i.e7)([f.Z], () => {
            var e;
            return null == (e = f.Z.getResourceForChannel(null == L ? void 0 : L.id, t)) ? void 0 : e.title;
        }),
        W = (0, d.$5)(D),
        q = r.useRef(!1);
    if (
        (r.useEffect(() => {
            null == D ||
                q.current ||
                ((q.current = !0),
                (0, u.yw)(P.rMx.CHANNEL_OPENED, k(T({}, (0, u.$H)(D.id)), { channel_view: A })),
                (0, m.a)(P.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: D.id }));
        }, [D, A]),
        null == D || null == L)
    )
        return null;
    let F = [];
    return (H || F.push((0, l.jsx)(_.Z, { channel: D }, "notifications")),
    F.push(
        (0, l.jsx)(
            x.ZP.Icon,
            {
                icon: a.Dio,
                tooltip: E.intl.string(E.t.cpT0Cg),
                onClick: () => v.Z.closeChannelSidebar(B),
            },
            "close",
        ),
    ),
    W)
        ? (0, l.jsx)(c.Z, {
              guild: L,
              channelId: D.id,
          })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(s.Z, {
                      channel: D,
                      draftType: O.d.ChannelMessage,
                  }),
                  (0, l.jsx)(x.ZP, {
                      toolbar: F,
                      "aria-label": E.intl.string(E.t.BIYAqa),
                      children: (0, C.ud)({
                          channel: D,
                          channelName: U ? G : M,
                          guild: L,
                          inSidebar: !0,
                          handleContextMenu: (e) => {
                              (0, o.jW)(e, async () => {
                                  let { default: e } = await Promise.all([n.e("24783"), n.e("63384")]).then(
                                      n.bind(n, 439635),
                                  );
                                  return (t) =>
                                      (0, l.jsx)(
                                          e,
                                          k(T({}, t), {
                                              channel: D,
                                              guild: L,
                                          }),
                                      );
                              });
                          },
                          handleClick: () => {
                              let e = Z.Z.getMessages(D.id);
                              if (R) {
                                  (0, j.uL)(P.Z5c.CHANNEL(D.guild_id, D.id)), (0, p.C3)(D.guild_id, null);
                                  return;
                              }
                              (0, j.XU)(D.guild_id, D.id, e.jumpTargetId);
                          },
                      }),
                  }),
                  (0, l.jsx)("div", {
                      className: S.chat,
                      children: (0, l.jsx)(
                          w.Z,
                          {
                              channel: D,
                              guild: L,
                              chatInputType: h.Ie.SIDEBAR,
                          },
                          t,
                      ),
                  }),
              ],
          });
}
