n.d(t, { _: () => b, g: () => R });
var i,
    s = n(627968),
    l = n(64700),
    r = n(503698),
    a = n.n(r),
    o = n(311907),
    d = n(459192),
    u = n(397927),
    c = n(47167),
    h = n(713654),
    g = n(941971),
    m = n(734057),
    p = n(71393),
    A = n(222823),
    x = n(994500),
    f = n(485296),
    E = n(741961),
    S = n(287809),
    I = n(1193),
    T = n(145567),
    v = n(922611),
    C = n(651813),
    j = n(919843),
    y = n(534765),
    w = n(256688),
    _ = n(652215),
    O = n(985018),
    N = n(129839),
    b = (((i = {}).DEFAULT = "DEFAULT"), (i.CHANNEL_TYPE = "CHANNEL_TYPE"), i);
let R = l.memo(function (e) {
    let { channelId: t, selectedVoiceChannelId: n, iconVariant: i = "DEFAULT" } = e,
        r = null != n && t === n,
        b = (0, o.bG)([I.A], () => I.A.getSelectedChannelId() === t, [t]),
        R = (0, o.bG)([I.A], () => I.A.getVoiceChatMinimized()),
        M = (0, u.rdh)(u.LU0.colors.ICON_STATUS_ONLINE),
        L = (0, o.bG)([f.A], () => !!r && !!(f.A.isAnyoneElseSpeaking() || f.A.isCurrentUserSpeaking()), [r]),
        [z, D] = l.useState(!1),
        { mentionCount: k, isMentionLowImportance: P } = (0, o.cf)(
            [A.Ay],
            () =>
                null != t
                    ? {
                          mentionCount: A.Ay.getMentionCount(t),
                          isMentionLowImportance: A.Ay.getIsMentionLowImportance(t),
                      }
                    : { mentionCount: 0, isMentionLowImportance: !1 },
            [t],
        ),
        {
            label: G,
            user: V,
            guild: U,
            channel: H,
        } = (0, o.cf)([m.A, p.A, S.default, x.A], () => {
            let e = m.A.getChannel(t) ?? null;
            if (null == e) return { label: O.intl.string(O.t.zLZPmk), user: null, guild: null, channel: null };
            let n = (0, c.m1)(e, S.default, x.A);
            return { label: n, user: (0, C.j)(e, S.default), guild: (0, C.P)(e, p.A), channel: e };
        }, [t]);
    l.useEffect(() => {
        null == H && (0, j.b)(t);
    }, [H, t]);
    let Y = (0, o.bG)([E.A, S.default], () => {
            if (null == H) return !1;
            let e = S.default.getCurrentUser()?.id ?? null,
                t = E.A.getTypingUsers(H.id);
            for (let n in t) if (n !== e) return !0;
            return !1;
        }, [H]),
        Z = (0, o.bG)([A.Ay], () => {
            let e = H?.id;
            return null != e && A.Ay.hasUnread(e);
        }, [H]),
        W = (0, s.jsx)("div", {
            className: N.St,
            children: (() => {
                let e = H?.isPrivate() ?? !1;
                if ("CHANNEL_TYPE" === i && !e) {
                    let e = (0, h.gU)(H, U);
                    e ??= u.oyn;
                    let t = r && !R && L,
                        n = { boxShadow: "none" },
                        i = M.rgba({ opacity: 0.85 }),
                        l = M.rgba({ opacity: 0.45 });
                    return (
                        t && (n.boxShadow = `0 0 0 2px rgba(${i}), 0 0 12px 2px rgba(${l})`),
                        (0, s.jsx)("div", {
                            className: a()(N.s, b && N.lJ),
                            style: n,
                            children: (0, s.jsx)(e, {
                                className: N.Yc,
                                size: "sm",
                                color: b ? u.LU0.colors.WHITE : u.LU0.colors.ICON_STATUS_ONLINE,
                            }),
                        })
                    );
                }
                return (0, s.jsx)(v.g, {
                    channel: H,
                    user: V,
                    guild: U,
                    isSelected: b,
                    size: v.c.SIZE_40,
                    isTyping: Y,
                    mentionCount: k,
                    isMentionLowImportance: P,
                });
            })(),
        }),
        X = (0, y.r)({ channel: H, guild: U, user: V }),
        F = H?.isPrivate() ?? !1,
        K = U?.name ?? "",
        B = F ? void 0 : G,
        Q = F ? G : "" !== K ? K : G,
        q = (() => {
            if (null == H || F) return null;
            let e = (0, h.gU)(H, U);
            return (e ??= u.oyn), (0, s.jsx)(e, { size: "sm", color: u.LU0.colors.INTERACTIVE_ICON_DEFAULT });
        })();
    return null == H
        ? (0, s.jsx)("div", { className: N.R })
        : (0, s.jsx)(d.u, {
              title: B,
              body: Q,
              asset: q,
              assetSize: 20,
              "aria-label": G,
              children: (0, s.jsxs)(u.DUT, {
                  className: N.pc,
                  onClick: () => {
                      r && (0, T.S$)({ minimized: !1 }),
                          (0, T.D$)({
                              target: { kind: T.bB.CHANNEL, channelId: t, guildId: U?.id ?? null, messageId: null },
                              source: w.B.MANUAL,
                              widgetType: _.uss.TEXT_CHAT_V3,
                          });
                  },
                  onContextMenu: X,
                  onMouseEnter: () => D(!0),
                  onMouseLeave: () => D(!1),
                  children: [
                      W,
                      (0, s.jsx)("div", {
                          className: N.vT,
                          children: (0, s.jsx)(g.A, { selected: b, hovered: z, unread: Z }),
                      }),
                  ],
              }),
          });
});
