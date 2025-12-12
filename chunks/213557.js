n.d(t, { Z: () => A }), n(539854);
var r = n(54381),
    l = n(473749),
    i = n(442837),
    a = n(481060),
    o = n(239091),
    s = n(561472),
    c = n(622822),
    d = n(367907),
    u = n(188471),
    p = n(541716),
    h = n(526120),
    f = n(563534),
    m = n(736052),
    g = n(665149),
    _ = n(442336),
    x = n(910611),
    C = n(41776),
    b = n(703656),
    j = n(6025),
    v = n(271172),
    O = n(592125),
    y = n(703558),
    N = n(430824),
    w = n(375954),
    Z = n(933557),
    I = n(287746),
    P = n(981631),
    S = n(388032),
    E = n(10832);
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
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
    let { channelId: t, baseChannelId: A, channelViewSource: D = "Split View", isResourceChannelView: R } = e,
        k = (0, i.e7)([O.Z], () => O.Z.getChannel(t)),
        L = (0, i.e7)([N.Z], () => N.Z.getGuild(null == k ? void 0 : k.getGuildId())),
        H = (0, Z.ZP)(k),
        M = (0, i.e7)([C.Z], () => (null == L ? void 0 : L.id) != null && C.Z.isLurking(L.id), [L]),
        U = (0, m.Z)(t),
        G = (0, i.e7)([f.Z], () => {
            var e;
            return null == (e = f.Z.getResourceForChannel(null == L ? void 0 : L.id, t)) ? void 0 : e.title;
        }),
        W = (0, c.$5)(k),
        F = l.useRef(!1);
    if (
        (l.useEffect(() => {
            null == k ||
                F.current ||
                ((F.current = !0),
                (0, d.yw)(P.rMx.CHANNEL_OPENED, B(T({}, (0, d.$H)(k.id)), { channel_view: D })),
                (0, u.a)(P.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: k.id }));
        }, [k, D]),
        null == k || null == L)
    )
        return null;
    let q = [];
    return (M || q.push((0, r.jsx)(_.Z, { channel: k }, "notifications")),
    q.push(
        (0, r.jsx)(
            g.ZP.Icon,
            {
                icon: a.Dio,
                tooltip: S.intl.string(S.t.cpT0Cq),
                onClick: () => j.Z.closeChannelSidebar(A),
            },
            "close",
        ),
    ),
    W)
        ? (0, r.jsx)(v.Z, {
              guild: L,
              channelId: k.id,
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(s.Z, {
                      channel: k,
                      draftType: y.d.ChannelMessage,
                  }),
                  (0, r.jsx)(g.ZP, {
                      toolbar: q,
                      "aria-label": S.intl.string(S.t.BIYAqa),
                      children: (0, x.ud)({
                          channel: k,
                          channelName: U ? G : H,
                          guild: L,
                          inSidebar: !0,
                          handleContextMenu: (e) => {
                              (0, o.jW)(e, async () => {
                                  let { default: e } = await Promise.all([n.e("24783"), n.e("41815")]).then(
                                      n.bind(n, 439635),
                                  );
                                  return (t) =>
                                      (0, r.jsx)(
                                          e,
                                          B(T({}, t), {
                                              channel: k,
                                              guild: L,
                                          }),
                                      );
                              });
                          },
                          handleClick: () => {
                              let e = w.Z.getMessages(k.id);
                              if (R) {
                                  (0, b.uL)(P.Z5c.CHANNEL(k.guild_id, k.id)), (0, h.C3)(k.guild_id, null);
                                  return;
                              }
                              (0, b.XU)(k.guild_id, k.id, e.jumpTargetId);
                          },
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: E.chat,
                      children: (0, r.jsx)(
                          I.Z,
                          {
                              channel: k,
                              guild: L,
                              chatInputType: p.Ie.SIDEBAR,
                          },
                          t,
                      ),
                  }),
              ],
          });
}
