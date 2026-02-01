n.d(t, {
    _: () => T,
    g: () => C,
}),
    n(896048);
var i,
    r = n(627968),
    l = n(64700),
    a = n(311907),
    s = n(459192),
    o = n(397927),
    u = n(47167),
    c = n(713654),
    d = n(941971),
    h = n(734057),
    p = n(71393),
    f = n(222823),
    g = n(994500),
    m = n(741961),
    y = n(287809),
    A = n(145567),
    v = n(187667),
    b = n(922611),
    E = n(651813),
    O = n(919843),
    x = n(534765),
    _ = n(34307),
    S = n(652215),
    I = n(985018),
    j = n(58812),
    T = (((i = {}).DEFAULT = "DEFAULT"), (i.CHANNEL_TYPE = "CHANNEL_TYPE"), i);
let C = l.memo(function (e) {
    var t, n;
    let { channelId: i, selectedVoiceChannelId: T, iconVariant: C = "DEFAULT" } = e,
        N = (0, a.bG)([v.A], () => v.A.getSelectedChannelId() === i, [i]),
        [w, P] = l.useState(!1),
        { mentionCount: D, isMentionLowImportance: R } = (0, a.cf)(
            [f.Ay],
            () =>
                null != i
                    ? {
                          mentionCount: f.Ay.getMentionCount(i),
                          isMentionLowImportance: f.Ay.getIsMentionLowImportance(i),
                      }
                    : {
                          mentionCount: 0,
                          isMentionLowImportance: !1,
                      },
            [i],
        ),
        {
            label: k,
            user: M,
            guild: L,
            channel: U,
        } = (0, a.cf)([h.A, p.A, y.default, g.A], () => {
            var e;
            let t = null != (e = h.A.getChannel(i)) ? e : null;
            if (null == t)
                return {
                    label: I.intl.string(I.t.zLZPmk),
                    user: null,
                    guild: null,
                    channel: null,
                };
            let n = (0, u.m1)(t, y.default, g.A);
            return {
                label: n,
                user: (0, E.j)(t, y.default),
                guild: (0, E.P)(t, p.A),
                channel: t,
            };
        }, [i]);
    l.useEffect(() => {
        null == U && (0, O.b)(i);
    }, [U, i]);
    let G = (0, a.bG)([m.A, y.default], () => {
            var e, t;
            if (null == U) return !1;
            let n = null != (e = null == (t = y.default.getCurrentUser()) ? void 0 : t.id) ? e : null,
                i = m.A.getTypingUsers(U.id);
            for (let e in i) if (e !== n) return !0;
            return !1;
        }, [U]),
        V = (0, a.bG)([f.Ay], () => {
            let e = null == U ? void 0 : U.id;
            return null != e && f.Ay.hasUnread(e);
        }, [U]),
        z = (0, r.jsx)("div", {
            className: j.St,
            children: (() => {
                var e;
                let t = null != (e = null == U ? void 0 : U.isPrivate()) && e;
                if ("CHANNEL_TYPE" === C && !t) {
                    let e = (0, c.gU)(U, L);
                    return (
                        null != e || (e = o.oyn),
                        (0, r.jsx)("div", {
                            className: (function () {
                                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                return t.filter(Boolean).join(" ");
                            })(j.s, N && j.lJ),
                            children: (0, r.jsx)(e, {
                                className: j.Yc,
                                size: "sm",
                                color: N ? o.LU0.colors.WHITE : o.LU0.colors.ICON_STATUS_ONLINE,
                            }),
                        })
                    );
                }
                return (0, r.jsx)(b.g, {
                    channel: U,
                    user: M,
                    guild: L,
                    isSelected: N,
                    size: b.c.SIZE_40,
                    isTyping: G,
                    mentionCount: D,
                    isMentionLowImportance: R,
                });
            })(),
        }),
        F = (0, x.r)({
            channel: U,
            guild: L,
            user: M,
        }),
        H = null != (t = null == U ? void 0 : U.isPrivate()) && t,
        Y = null != (n = null == L ? void 0 : L.name) ? n : "",
        K = H ? void 0 : k,
        W = H ? k : "" !== Y ? Y : k,
        B = (() => {
            if (null == U || H) return null;
            let e = (0, c.gU)(U, L);
            return (
                null != e || (e = o.oyn),
                (0, r.jsx)(e, {
                    size: "sm",
                    color: o.LU0.colors.INTERACTIVE_ICON_DEFAULT,
                })
            );
        })();
    return null == U
        ? (0, r.jsx)("div", {
              className: j.R,
          })
        : (0, r.jsx)(s.u, {
              title: K,
              body: W,
              asset: B,
              assetSize: 20,
              "aria-label": k,
              children: (0, r.jsxs)(o.DUT, {
                  className: j.pc,
                  onClick: () => {
                      var e;
                      (0, A.D$)({
                          channelId: i,
                          source: _.B.MANUAL,
                          guildId: null != (e = null == L ? void 0 : L.id) ? e : null,
                          messageId: null,
                          widgetType: S.uss.TEXT_CHAT_V3,
                      });
                  },
                  onContextMenu: F,
                  onMouseEnter: () => P(!0),
                  onMouseLeave: () => P(!1),
                  children: [
                      z,
                      (0, r.jsx)("div", {
                          className: j.vT,
                          children: (0, r.jsx)(d.A, {
                              selected: N,
                              hovered: w,
                              unread: V,
                          }),
                      }),
                  ],
              }),
          });
});
