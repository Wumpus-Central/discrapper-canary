t.d(n, { Z: () => A }), t(539854);
var l = t(951288),
    r = t(647438),
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
    b = t(41776),
    j = t(703656),
    v = t(6025),
    y = t(592125),
    O = t(703558),
    N = t(430824),
    Z = t(375954),
    I = t(933557),
    w = t(287746),
    P = t(981631),
    E = t(388032),
    S = t(10832);
function T(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            l = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            l.forEach(function (n) {
                var l;
                (l = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = l);
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
function A(e) {
    let { channelId: n, baseChannelId: A, channelViewSource: R = "Split View", isResourceChannelView: k } = e,
        D = (0, i.e7)([y.Z], () => y.Z.getChannel(n)),
        L = (0, i.e7)([N.Z], () => N.Z.getGuild(null == D ? void 0 : D.getGuildId())),
        M = (0, I.ZP)(D),
        H = (0, i.e7)([b.Z], () => (null == L ? void 0 : L.id) != null && b.Z.isLurking(L.id), [L]),
        U = (0, g.Z)(n),
        G = (0, i.e7)([f.Z], () => {
            var e;
            return null == (e = f.Z.getResourceForChannel(null == L ? void 0 : L.id, n)) ? void 0 : e.title;
        }),
        W = (0, d.$5)(D),
        F = r.useRef(!1);
    if (
        (r.useEffect(() => {
            null == D ||
                F.current ||
                ((F.current = !0),
                (0, u.yw)(P.rMx.CHANNEL_OPENED, B(T({}, (0, u.$H)(D.id)), { channel_view: R })),
                (0, m.a)(P.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: D.id }));
        }, [D, R]),
        null == D || null == L)
    )
        return null;
    let q = [];
    return (H || q.push((0, l.jsx)(_.Z, { channel: D }, "notifications")),
    q.push(
        (0, l.jsx)(
            x.ZP.Icon,
            {
                icon: a.Dio,
                tooltip: E.intl.string(E.t.cpT0Cg),
                onClick: () => v.Z.closeChannelSidebar(A),
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
                      toolbar: q,
                      "aria-label": E.intl.string(E.t.BIYAqa),
                      children: (0, C.ud)({
                          channel: D,
                          channelName: U ? G : M,
                          guild: L,
                          inSidebar: !0,
                          handleContextMenu: (e) => {
                              (0, o.jW)(e, async () => {
                                  let { default: e } = await Promise.all([t.e("24783"), t.e("41815")]).then(
                                      t.bind(t, 439635),
                                  );
                                  return (n) =>
                                      (0, l.jsx)(
                                          e,
                                          B(T({}, n), {
                                              channel: D,
                                              guild: L,
                                          }),
                                      );
                              });
                          },
                          handleClick: () => {
                              let e = Z.Z.getMessages(D.id);
                              if (k) {
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
                          n,
                      ),
                  }),
              ],
          });
}
