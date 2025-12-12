n.d(t, { Z: () => A }), n(539854);
var a = n(54381),
    r = n(473749),
    l = n(442837),
    i = n(481060),
    o = n(239091),
    c = n(561472),
    d = n(622822),
    s = n(367907),
    u = n(188471),
    b = n(541716),
    p = n(526120),
    f = n(563534),
    h = n(736052),
    m = n(665149),
    g = n(442336),
    x = n(910611),
    C = n(41776),
    j = n(703656),
    v = n(6025),
    O = n(271172),
    y = n(592125),
    N = n(703558),
    _ = n(430824),
    w = n(375954),
    Z = n(933557),
    I = n(287746),
    P = n(981631),
    S = n(388032),
    E = n(495182);
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = a);
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
                      var a = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, a);
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
        k = (0, l.e7)([y.Z], () => y.Z.getChannel(t)),
        L = (0, l.e7)([_.Z], () => _.Z.getGuild(null == k ? void 0 : k.getGuildId())),
        H = (0, Z.ZP)(k),
        M = (0, l.e7)([C.Z], () => (null == L ? void 0 : L.id) != null && C.Z.isLurking(L.id), [L]),
        U = (0, h.Z)(t),
        G = (0, l.e7)([f.Z], () => {
            var e;
            return null == (e = f.Z.getResourceForChannel(null == L ? void 0 : L.id, t)) ? void 0 : e.title;
        }),
        W = (0, d.$5)(k),
        F = r.useRef(!1);
    if (
        (r.useEffect(() => {
            null == k ||
                F.current ||
                ((F.current = !0),
                (0, s.yw)(P.rMx.CHANNEL_OPENED, B(T({}, (0, s.$H)(k.id)), { channel_view: D })),
                (0, u.a)(P.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: k.id }));
        }, [k, D]),
        null == k || null == L)
    )
        return null;
    let q = [];
    return (M || q.push((0, a.jsx)(g.Z, { channel: k }, "notifications")),
    q.push(
        (0, a.jsx)(
            m.ZP.Icon,
            {
                icon: i.Dio,
                tooltip: S.intl.string(S.t.cpT0Cq),
                onClick: () => v.Z.closeChannelSidebar(A),
            },
            "close",
        ),
    ),
    W)
        ? (0, a.jsx)(O.Z, {
              guild: L,
              channelId: k.id,
          })
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(c.Z, {
                      channel: k,
                      draftType: N.d.ChannelMessage,
                  }),
                  (0, a.jsx)(m.ZP, {
                      toolbar: q,
                      "aria-label": S.intl.string(S.t.BIYAqa),
                      children: (0, x.ud)({
                          channel: k,
                          channelName: U ? G : H,
                          guild: L,
                          inSidebar: !0,
                          handleContextMenu: (e) => {
                              (0, o.jW)(e, async () => {
                                  let { default: e } = await Promise.all([n.e("24783"), n.e("45917")]).then(
                                      n.bind(n, 439635),
                                  );
                                  return (t) =>
                                      (0, a.jsx)(
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
                                  (0, j.uL)(P.Z5c.CHANNEL(k.guild_id, k.id)), (0, p.C3)(k.guild_id, null);
                                  return;
                              }
                              (0, j.XU)(k.guild_id, k.id, e.jumpTargetId);
                          },
                      }),
                  }),
                  (0, a.jsx)("div", {
                      className: E.chat,
                      children: (0, a.jsx)(
                          I.Z,
                          {
                              channel: k,
                              guild: L,
                              chatInputType: b.Ie.SIDEBAR,
                          },
                          t,
                      ),
                  }),
              ],
          });
}
