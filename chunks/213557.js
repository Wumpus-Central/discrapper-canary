t.d(n, { Z: () => A }), t(539854);
var r = t(54381),
    l = t(473749),
    i = t(442837),
    a = t(481060),
    o = t(239091),
    s = t(561472),
    c = t(622822),
    d = t(367907),
    u = t(188471),
    p = t(541716),
    h = t(526120),
    m = t(563534),
    f = t(736052),
    g = t(665149),
    _ = t(442336),
    x = t(910611),
    C = t(41776),
    b = t(703656),
    j = t(6025),
    v = t(271172),
    O = t(592125),
    y = t(703558),
    N = t(430824),
    w = t(375954),
    Z = t(933557),
    I = t(287746),
    P = t(981631),
    S = t(388032),
    E = t(10832);
function T(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            r.forEach(function (n) {
                var r;
                (r = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = r);
            });
    }
    return e;
}
function B(e, n) {
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
    let { channelId: n, baseChannelId: A, channelViewSource: D = "Split View", isResourceChannelView: R } = e,
        k = (0, i.e7)([O.Z], () => O.Z.getChannel(n)),
        L = (0, i.e7)([N.Z], () => N.Z.getGuild(null == k ? void 0 : k.getGuildId())),
        H = (0, Z.ZP)(k),
        M = (0, i.e7)([C.Z], () => (null == L ? void 0 : L.id) != null && C.Z.isLurking(L.id), [L]),
        U = (0, f.Z)(n),
        G = (0, i.e7)([m.Z], () => {
            var e;
            return null == (e = m.Z.getResourceForChannel(null == L ? void 0 : L.id, n)) ? void 0 : e.title;
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
                                  let { default: e } = await Promise.all([t.e("24783"), t.e("41815")]).then(
                                      t.bind(t, 439635),
                                  );
                                  return (n) =>
                                      (0, r.jsx)(
                                          e,
                                          B(T({}, n), {
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
                          n,
                      ),
                  }),
              ],
          });
}
