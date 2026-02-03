n.d(t, {
    _: () => w,
    g: () => P,
}),
    n(896048);
var i,
    r = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    u = n(459192),
    c = n(397927),
    d = n(47167),
    h = n(713654),
    p = n(941971),
    f = n(734057),
    g = n(71393),
    m = n(222823),
    y = n(994500),
    A = n(485296),
    v = n(741961),
    b = n(287809),
    E = n(145567),
    O = n(187667),
    x = n(922611),
    _ = n(651813),
    S = n(919843),
    I = n(534765),
    j = n(34307),
    T = n(652215),
    C = n(985018),
    N = n(58812),
    w = (((i = {}).DEFAULT = "DEFAULT"), (i.CHANNEL_TYPE = "CHANNEL_TYPE"), i);
let P = l.memo(function (e) {
    var t, n;
    let { channelId: i, selectedVoiceChannelId: a, iconVariant: w = "DEFAULT" } = e,
        P = null != a && i === a,
        D = (0, o.bG)([O.A], () => O.A.getSelectedChannelId() === i, [i]),
        R = (0, o.bG)([O.A], () => O.A.getVoiceChatMinimized()),
        k = (0, c.rdh)(c.LU0.colors.ICON_STATUS_ONLINE),
        M = (0, o.bG)([A.A], () => !!P && !!(A.A.isAnyoneElseSpeaking() || A.A.isCurrentUserSpeaking()), [P]),
        [L, U] = l.useState(!1),
        { mentionCount: G, isMentionLowImportance: V } = (0, o.cf)(
            [m.Ay],
            () =>
                null != i
                    ? {
                          mentionCount: m.Ay.getMentionCount(i),
                          isMentionLowImportance: m.Ay.getIsMentionLowImportance(i),
                      }
                    : {
                          mentionCount: 0,
                          isMentionLowImportance: !1,
                      },
            [i],
        ),
        {
            label: z,
            user: F,
            guild: H,
            channel: Y,
        } = (0, o.cf)([f.A, g.A, b.default, y.A], () => {
            var e;
            let t = null != (e = f.A.getChannel(i)) ? e : null;
            if (null == t)
                return {
                    label: C.intl.string(C.t.zLZPmk),
                    user: null,
                    guild: null,
                    channel: null,
                };
            let n = (0, d.m1)(t, b.default, y.A);
            return {
                label: n,
                user: (0, _.j)(t, b.default),
                guild: (0, _.P)(t, g.A),
                channel: t,
            };
        }, [i]);
    l.useEffect(() => {
        null == Y && (0, S.b)(i);
    }, [Y, i]);
    let W = (0, o.bG)([v.A, b.default], () => {
            var e, t;
            if (null == Y) return !1;
            let n = null != (e = null == (t = b.default.getCurrentUser()) ? void 0 : t.id) ? e : null,
                i = v.A.getTypingUsers(Y.id);
            for (let e in i) if (e !== n) return !0;
            return !1;
        }, [Y]),
        K = (0, o.bG)([m.Ay], () => {
            let e = null == Y ? void 0 : Y.id;
            return null != e && m.Ay.hasUnread(e);
        }, [Y]),
        B = (0, r.jsx)("div", {
            className: N.St,
            children: (() => {
                var e;
                let t = null != (e = null == Y ? void 0 : Y.isPrivate()) && e;
                if ("CHANNEL_TYPE" === w && !t) {
                    let e = (0, h.gU)(Y, H);
                    null != e || (e = c.oyn);
                    let t = P && !R && M,
                        n = {
                            boxShadow: "none",
                        },
                        i = k.rgba({
                            opacity: 0.85,
                        }),
                        l = k.rgba({
                            opacity: 0.45,
                        });
                    return (
                        t && (n.boxShadow = "0 0 0 2px rgba(".concat(i, "), 0 0 12px 2px rgba(").concat(l, ")")),
                        (0, r.jsx)("div", {
                            className: s()(N.s, D && N.lJ),
                            style: n,
                            children: (0, r.jsx)(e, {
                                className: N.Yc,
                                size: "sm",
                                color: D ? c.LU0.colors.WHITE : c.LU0.colors.ICON_STATUS_ONLINE,
                            }),
                        })
                    );
                }
                return (0, r.jsx)(x.g, {
                    channel: Y,
                    user: F,
                    guild: H,
                    isSelected: D,
                    size: x.c.SIZE_40,
                    isTyping: W,
                    mentionCount: G,
                    isMentionLowImportance: V,
                });
            })(),
        }),
        Z = (0, I.r)({
            channel: Y,
            guild: H,
            user: F,
        }),
        X = null != (t = null == Y ? void 0 : Y.isPrivate()) && t,
        J = null != (n = null == H ? void 0 : H.name) ? n : "",
        Q = X ? void 0 : z,
        q = X ? z : "" !== J ? J : z,
        $ = (() => {
            if (null == Y || X) return null;
            let e = (0, h.gU)(Y, H);
            return (
                null != e || (e = c.oyn),
                (0, r.jsx)(e, {
                    size: "sm",
                    color: c.LU0.colors.INTERACTIVE_ICON_DEFAULT,
                })
            );
        })();
    return null == Y
        ? (0, r.jsx)("div", {
              className: N.R,
          })
        : (0, r.jsx)(u.u, {
              title: Q,
              body: q,
              asset: $,
              assetSize: 20,
              "aria-label": z,
              children: (0, r.jsxs)(c.DUT, {
                  className: N.pc,
                  onClick: () => {
                      var e;
                      P &&
                          (0, E.S$)({
                              minimized: !1,
                          }),
                          (0, E.D$)({
                              target: {
                                  kind: E.bB.CHANNEL,
                                  channelId: i,
                                  guildId: null != (e = null == H ? void 0 : H.id) ? e : null,
                                  messageId: null,
                              },
                              source: j.B.MANUAL,
                              widgetType: T.uss.TEXT_CHAT_V3,
                          });
                  },
                  onContextMenu: Z,
                  onMouseEnter: () => U(!0),
                  onMouseLeave: () => U(!1),
                  children: [
                      B,
                      (0, r.jsx)("div", {
                          className: N.vT,
                          children: (0, r.jsx)(p.A, {
                              selected: D,
                              hovered: L,
                              unread: K,
                          }),
                      }),
                  ],
              }),
          });
});
