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
    O = t(340501),
    v = t(592125),
    y = t(703558),
    N = t(430824),
    I = t(375954),
    w = t(933557),
    Z = t(287746),
    P = t(981631),
    S = t(388032),
    E = t(952713);
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
    let { channelId: n, baseChannelId: A, channelViewSource: k = "Split View", isResourceChannelView: D } = e,
        L = (0, i.e7)([v.Z], () => v.Z.getChannel(n)),
        R = (0, i.e7)([N.Z], () => N.Z.getGuild(null == L ? void 0 : L.getGuildId())),
        H = (0, w.ZP)(L),
        M = (0, i.e7)([C.Z], () => (null == R ? void 0 : R.id) != null && C.Z.isLurking(R.id), [R]),
        U = (0, f.Z)(n),
        G = (0, i.e7)([m.Z], () => {
            var e;
            return null == (e = m.Z.getResourceForChannel(null == R ? void 0 : R.id, n)) ? void 0 : e.title;
        }),
        F = (0, c.$5)(L),
        W = l.useRef(!1);
    if (
        (l.useEffect(() => {
            null == L ||
                W.current ||
                ((W.current = !0),
                (0, d.yw)(P.rMx.CHANNEL_OPENED, B(T({}, (0, d.$H)(L.id)), { channel_view: k })),
                (0, u.a)(P.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: L.id }));
        }, [L, k]),
        null == L || null == R)
    )
        return null;
    let q = [];
    return (M || q.push((0, r.jsx)(_.Z, { channel: L }, "notifications")),
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
    F)
        ? (0, r.jsx)(O.Z, {
              guild: R,
              channelId: L.id,
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(s.Z, {
                      channel: L,
                      draftType: y.d.ChannelMessage,
                  }),
                  (0, r.jsx)(g.ZP, {
                      toolbar: q,
                      "aria-label": S.intl.string(S.t.BIYAqa),
                      children: (0, x.ud)({
                          channel: L,
                          channelName: U ? G : H,
                          guild: R,
                          inSidebar: !0,
                          handleContextMenu: (e) => {
                              (0, o.jW)(e, async () => {
                                  let { default: e } = await Promise.all([t.e("24783"), t.e("63384")]).then(
                                      t.bind(t, 439635),
                                  );
                                  return (n) =>
                                      (0, r.jsx)(
                                          e,
                                          B(T({}, n), {
                                              channel: L,
                                              guild: R,
                                          }),
                                      );
                              });
                          },
                          handleClick: () => {
                              let e = I.Z.getMessages(L.id);
                              if (D) {
                                  (0, b.uL)(P.Z5c.CHANNEL(L.guild_id, L.id)), (0, h.C3)(L.guild_id, null);
                                  return;
                              }
                              (0, b.XU)(L.guild_id, L.id, e.jumpTargetId);
                          },
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: E.chat,
                      children: (0, r.jsx)(
                          Z.Z,
                          {
                              channel: L,
                              guild: R,
                              chatInputType: p.Ie.SIDEBAR,
                          },
                          n,
                      ),
                  }),
              ],
          });
}
