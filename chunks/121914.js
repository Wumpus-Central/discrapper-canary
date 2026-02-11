n.d(t, { _: () => w, g: () => L });
var i,
    l = n(627968),
    a = n(64700),
    s = n(503698),
    r = n.n(s),
    o = n(311907),
    d = n(459192),
    u = n(397927),
    c = n(47167),
    h = n(713654),
    A = n(941971),
    m = n(734057),
    g = n(71393),
    p = n(222823),
    f = n(994500),
    _ = n(485296),
    E = n(741961),
    x = n(287809),
    S = n(145567),
    I = n(187667),
    T = n(922611),
    C = n(651813),
    y = n(919843),
    v = n(534765),
    N = n(34307),
    O = n(652215),
    j = n(985018),
    b = n(716514),
    w = (((i = {}).DEFAULT = "DEFAULT"), (i.CHANNEL_TYPE = "CHANNEL_TYPE"), i);
let L = a.memo(function (e) {
    let { channelId: t, selectedVoiceChannelId: n, iconVariant: i = "DEFAULT" } = e,
        s = null != n && t === n,
        w = (0, o.bG)([I.A], () => I.A.getSelectedChannelId() === t, [t]),
        L = (0, o.bG)([I.A], () => I.A.getVoiceChatMinimized()),
        R = (0, u.rdh)(u.LU0.colors.ICON_STATUS_ONLINE),
        D = (0, o.bG)([_.A], () => !!s && !!(_.A.isAnyoneElseSpeaking() || _.A.isCurrentUserSpeaking()), [s]),
        [M, k] = a.useState(!1),
        { mentionCount: z, isMentionLowImportance: V } = (0, o.cf)(
            [p.Ay],
            () =>
                null != t
                    ? {
                          mentionCount: p.Ay.getMentionCount(t),
                          isMentionLowImportance: p.Ay.getIsMentionLowImportance(t),
                      }
                    : { mentionCount: 0, isMentionLowImportance: !1 },
            [t],
        ),
        {
            label: P,
            user: U,
            guild: G,
            channel: H,
        } = (0, o.cf)([m.A, g.A, x.default, f.A], () => {
            let e = m.A.getChannel(t) ?? null;
            if (null == e) return { label: j.intl.string(j.t.zLZPmk), user: null, guild: null, channel: null };
            let n = (0, c.m1)(e, x.default, f.A);
            return { label: n, user: (0, C.j)(e, x.default), guild: (0, C.P)(e, g.A), channel: e };
        }, [t]);
    a.useEffect(() => {
        null == H && (0, y.b)(t);
    }, [H, t]);
    let Y = (0, o.bG)([E.A, x.default], () => {
            if (null == H) return !1;
            let e = x.default.getCurrentUser()?.id ?? null,
                t = E.A.getTypingUsers(H.id);
            for (let n in t) if (n !== e) return !0;
            return !1;
        }, [H]),
        F = (0, o.bG)([p.Ay], () => {
            let e = H?.id;
            return null != e && p.Ay.hasUnread(e);
        }, [H]),
        W = (0, l.jsx)("div", {
            className: b.St,
            children: (() => {
                let e = H?.isPrivate() ?? !1;
                if ("CHANNEL_TYPE" === i && !e) {
                    let e = (0, h.gU)(H, G);
                    e ??= u.oyn;
                    let t = s && !L && D,
                        n = { boxShadow: "none" },
                        i = R.rgba({ opacity: 0.85 }),
                        a = R.rgba({ opacity: 0.45 });
                    return (
                        t && (n.boxShadow = `0 0 0 2px rgba(${i}), 0 0 12px 2px rgba(${a})`),
                        (0, l.jsx)("div", {
                            className: r()(b.s, w && b.lJ),
                            style: n,
                            children: (0, l.jsx)(e, {
                                className: b.Yc,
                                size: "sm",
                                color: w ? u.LU0.colors.WHITE : u.LU0.colors.ICON_STATUS_ONLINE,
                            }),
                        })
                    );
                }
                return (0, l.jsx)(T.g, {
                    channel: H,
                    user: U,
                    guild: G,
                    isSelected: w,
                    size: T.c.SIZE_40,
                    isTyping: Y,
                    mentionCount: z,
                    isMentionLowImportance: V,
                });
            })(),
        }),
        Z = (0, v.r)({ channel: H, guild: G, user: U }),
        X = H?.isPrivate() ?? !1,
        K = G?.name ?? "",
        B = X ? void 0 : P,
        J = X ? P : "" !== K ? K : P,
        Q = (() => {
            if (null == H || X) return null;
            let e = (0, h.gU)(H, G);
            return (e ??= u.oyn), (0, l.jsx)(e, { size: "sm", color: u.LU0.colors.INTERACTIVE_ICON_DEFAULT });
        })();
    return null == H
        ? (0, l.jsx)("div", { className: b.R })
        : (0, l.jsx)(d.u, {
              title: B,
              body: J,
              asset: Q,
              assetSize: 20,
              "aria-label": P,
              children: (0, l.jsxs)(u.DUT, {
                  className: b.pc,
                  onClick: () => {
                      s && (0, S.S$)({ minimized: !1 }),
                          (0, S.D$)({
                              target: { kind: S.bB.CHANNEL, channelId: t, guildId: G?.id ?? null, messageId: null },
                              source: N.B.MANUAL,
                              widgetType: O.uss.TEXT_CHAT_V3,
                          });
                  },
                  onContextMenu: Z,
                  onMouseEnter: () => k(!0),
                  onMouseLeave: () => k(!1),
                  children: [
                      W,
                      (0, l.jsx)("div", {
                          className: b.vT,
                          children: (0, l.jsx)(A.A, { selected: w, hovered: M, unread: F }),
                      }),
                  ],
              }),
          });
});
