t.d(n, { Z: () => A }), t(539854);
var a = t(54381),
    r = t(473749),
    l = t(442837),
    i = t(481060),
    c = t(239091),
    o = t(561472),
    d = t(622822),
    s = t(367907),
    u = t(188471),
    b = t(541716),
    p = t(526120),
    h = t(563534),
    f = t(736052),
    m = t(665149),
    g = t(442336),
    x = t(910611),
    C = t(41776),
    j = t(703656),
    v = t(6025),
    O = t(271172),
    y = t(592125),
    N = t(703558),
    _ = t(430824),
    w = t(375954),
    Z = t(933557),
    I = t(287746),
    P = t(981631),
    S = t(388032),
    E = t(491396);
function T(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            a = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            a.forEach(function (n) {
                var a;
                (a = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = a);
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
                      var a = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, a);
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
        k = (0, l.e7)([y.Z], () => y.Z.getChannel(n)),
        L = (0, l.e7)([_.Z], () => _.Z.getGuild(null == k ? void 0 : k.getGuildId())),
        H = (0, Z.ZP)(k),
        M = (0, l.e7)([C.Z], () => (null == L ? void 0 : L.id) != null && C.Z.isLurking(L.id), [L]),
        U = (0, f.Z)(n),
        G = (0, l.e7)([h.Z], () => {
            var e;
            return null == (e = h.Z.getResourceForChannel(null == L ? void 0 : L.id, n)) ? void 0 : e.title;
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
                  (0, a.jsx)(o.Z, {
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
                              (0, c.jW)(e, async () => {
                                  let { default: e } = await Promise.all([t.e("24783"), t.e("45917")]).then(
                                      t.bind(t, 439635),
                                  );
                                  return (n) =>
                                      (0, a.jsx)(
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
                          n,
                      ),
                  }),
              ],
          });
}
