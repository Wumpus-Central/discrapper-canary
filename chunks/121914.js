n.d(t, { _: () => b, g: () => O });
var i,
    l = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    u = n(459192),
    d = n(397927),
    c = n(47167),
    h = n(713654),
    g = n(941971),
    m = n(734057),
    f = n(71393),
    A = n(222823),
    I = n(994500),
    E = n(485296),
    p = n(741961),
    _ = n(287809),
    S = n(1193),
    x = n(145567),
    T = n(922611),
    N = n(651813),
    C = n(919843),
    v = n(534765),
    y = n(34307),
    M = n(652215),
    R = n(985018),
    D = n(129839),
    b = (((i = {}).DEFAULT = "DEFAULT"), (i.CHANNEL_TYPE = "CHANNEL_TYPE"), i);
let O = r.memo(function (e) {
    let { channelId: t, selectedVoiceChannelId: n, iconVariant: i = "DEFAULT" } = e,
        s = null != n && t === n,
        b = (0, o.bG)([S.A], () => S.A.getSelectedChannelId() === t, [t]),
        O = (0, o.bG)([S.A], () => S.A.getVoiceChatMinimized()),
        w = (0, d.rdh)(d.LU0.colors.ICON_STATUS_ONLINE),
        j = (0, o.bG)([E.A], () => !!s && !!(E.A.isAnyoneElseSpeaking() || E.A.isCurrentUserSpeaking()), [s]),
        [U, L] = r.useState(!1),
        { mentionCount: k, isMentionLowImportance: G } = (0, o.cf)(
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
            label: P,
            user: F,
            guild: V,
            channel: z,
        } = (0, o.cf)([m.A, f.A, _.default, I.A], () => {
            let e = m.A.getChannel(t) ?? null;
            if (null == e) return { label: R.intl.string(R.t.zLZPmk), user: null, guild: null, channel: null };
            let n = (0, c.m1)(e, _.default, I.A);
            return { label: n, user: (0, N.j)(e, _.default), guild: (0, N.P)(e, f.A), channel: e };
        }, [t]);
    r.useEffect(() => {
        null == z && (0, C.b)(t);
    }, [z, t]);
    let H = (0, o.bG)([p.A, _.default], () => {
            if (null == z) return !1;
            let e = _.default.getCurrentUser()?.id ?? null,
                t = p.A.getTypingUsers(z.id);
            for (let n in t) if (n !== e) return !0;
            return !1;
        }, [z]),
        Y = (0, o.bG)([A.Ay], () => {
            let e = z?.id;
            return null != e && A.Ay.hasUnread(e);
        }, [z]),
        W = (0, l.jsx)("div", {
            className: D.St,
            children: (() => {
                let e = z?.isPrivate() ?? !1;
                if ("CHANNEL_TYPE" === i && !e) {
                    let e = (0, h.gU)(z, V);
                    e ??= d.oyn;
                    let t = s && !O && j,
                        n = { boxShadow: "none" },
                        i = w.rgba({ opacity: 0.85 }),
                        r = w.rgba({ opacity: 0.45 });
                    return (
                        t && (n.boxShadow = `0 0 0 2px rgba(${i}), 0 0 12px 2px rgba(${r})`),
                        (0, l.jsx)("div", {
                            className: a()(D.s, b && D.lJ),
                            style: n,
                            children: (0, l.jsx)(e, {
                                className: D.Yc,
                                size: "sm",
                                color: b ? d.LU0.colors.WHITE : d.LU0.colors.ICON_STATUS_ONLINE,
                            }),
                        })
                    );
                }
                return (0, l.jsx)(T.g, {
                    channel: z,
                    user: F,
                    guild: V,
                    isSelected: b,
                    size: T.c.SIZE_40,
                    isTyping: H,
                    mentionCount: k,
                    isMentionLowImportance: G,
                });
            })(),
        }),
        B = (0, v.r)({ channel: z, guild: V, user: F }),
        X = z?.isPrivate() ?? !1,
        Z = V?.name ?? "",
        K = X ? void 0 : P,
        $ = X ? P : "" !== Z ? Z : P,
        q = (() => {
            if (null == z || X) return null;
            let e = (0, h.gU)(z, V);
            return (e ??= d.oyn), (0, l.jsx)(e, { size: "sm", color: d.LU0.colors.INTERACTIVE_ICON_DEFAULT });
        })();
    return null == z
        ? (0, l.jsx)("div", { className: D.R })
        : (0, l.jsx)(u.u, {
              title: K,
              body: $,
              asset: q,
              assetSize: 20,
              "aria-label": P,
              children: (0, l.jsxs)(d.DUT, {
                  className: D.pc,
                  onClick: () => {
                      s && (0, x.S$)({ minimized: !1 }),
                          (0, x.D$)({
                              target: { kind: x.bB.CHANNEL, channelId: t, guildId: V?.id ?? null, messageId: null },
                              source: y.B.MANUAL,
                              widgetType: M.uss.TEXT_CHAT_V3,
                          });
                  },
                  onContextMenu: B,
                  onMouseEnter: () => L(!0),
                  onMouseLeave: () => L(!1),
                  children: [
                      W,
                      (0, l.jsx)("div", {
                          className: D.vT,
                          children: (0, l.jsx)(g.A, { selected: b, hovered: U, unread: Y }),
                      }),
                  ],
              }),
          });
});
