n.d(t, { A: () => L }), n(321073);
var l = n(627968),
    r = n(64700),
    i = n(311907),
    a = n(397927),
    s = n(442433),
    c = n(738876),
    d = n(323073),
    o = n(58149),
    u = n(237774),
    f = n(355622),
    b = n(225142),
    h = n(701785),
    p = n(265869),
    g = n(58736),
    m = n(187360),
    x = n(353428),
    A = n(857071),
    j = n(976860),
    O = n(138298),
    C = n(522556),
    y = n(734057),
    v = n(31717),
    _ = n(71393),
    N = n(320501),
    w = n(47167),
    E = n(698718),
    S = n(652215),
    I = n(985018),
    P = n(305585);
function D(e) {
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
function R(e, t) {
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
function L(e) {
    let { channelId: t, baseChannelId: L, channelViewSource: T = "Split View", isResourceChannelView: G } = e,
        H = (0, i.bG)([y.A], () => y.A.getChannel(t)),
        M = (0, i.bG)([_.A], () => _.A.getGuild(null == H ? void 0 : H.getGuildId())),
        k = (0, w.Ay)(H),
        U = (0, i.bG)([A.A], () => (null == M ? void 0 : M.id) != null && A.A.isLurking(M.id), [M]),
        B = (0, p.A)(t),
        V = (0, i.bG)([h.h], () => {
            var e;
            return null == (e = h.h.getResourceForChannel(null == M ? void 0 : M.id, t)) ? void 0 : e.title;
        }),
        F = (0, d.vL)(H),
        W = r.useRef(!1);
    if (
        (r.useEffect(() => {
            null == H ||
                W.current ||
                ((W.current = !0),
                (0, o.zV)(S.HAw.CHANNEL_OPENED, R(D({}, (0, o.qL)(H.id)), { channel_view: T })),
                (0, u.k)(S.HAw.CHANNEL_OPENED_CLICKSTREAM, { channelId: H.id }));
        }, [H, T]),
        null == H || null == M)
    )
        return null;
    let q = [];
    return (U || q.push((0, l.jsx)(m.A, { channel: H }, "notifications")),
    q.push(
        (0, l.jsx)(
            g.Ay.Icon,
            {
                icon: a.PGe,
                tooltip: I.intl.string(I.t.cpT0Cq),
                onClick: () => O.A.closeChannelSidebar(L),
            },
            "close",
        ),
    ),
    F)
        ? (0, l.jsx)(C.A, {
              guild: M,
              channelId: H.id,
          })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(c.A, {
                      channel: H,
                      draftType: v.C.ChannelMessage,
                  }),
                  (0, l.jsx)(g.Ay, {
                      toolbar: q,
                      "aria-label": I.intl.string(I.t.BIYAqa),
                      children: (0, x.zF)({
                          channel: H,
                          channelName: B ? V : k,
                          guild: M,
                          inSidebar: !0,
                          handleContextMenu: (e) => {
                              (0, s.L3)(e, async () => {
                                  let { default: e } = await n.e("17425").then(n.bind(n, 340968));
                                  return (t) =>
                                      (0, l.jsx)(
                                          e,
                                          R(D({}, t), {
                                              channel: H,
                                              guild: M,
                                          }),
                                      );
                              });
                          },
                          handleClick: () => {
                              let e = N.A.getMessages(H.id);
                              if (G) {
                                  (0, j.pX)(S.BVt.CHANNEL(H.guild_id, H.id)), (0, b.bN)(H.guild_id, null);
                                  return;
                              }
                              (0, j.uh)(H.guild_id, H.id, e.jumpTargetId);
                          },
                      }),
                  }),
                  (0, l.jsx)("div", {
                      className: P.T,
                      children: (0, l.jsx)(
                          E.A,
                          {
                              channel: H,
                              guild: M,
                              chatInputType: f.oU.SIDEBAR,
                          },
                          t,
                      ),
                  }),
              ],
          });
}
